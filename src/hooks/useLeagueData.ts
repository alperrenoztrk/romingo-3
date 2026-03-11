import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface LeaguePlayer {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  isYou: boolean;
  rank: number;
}

function getWeekKey(date = new Date()) {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  const mondayOffset = (normalized.getDay() + 6) % 7;
  normalized.setDate(normalized.getDate() - mondayOffset);
  const year = normalized.getFullYear();
  const month = String(normalized.getMonth() + 1).padStart(2, "0");
  const day = String(normalized.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getTimeUntilReset(now = new Date()) {
  const normalized = new Date(now);
  normalized.setHours(0, 0, 0, 0);
  const mondayOffset = (normalized.getDay() + 6) % 7;
  normalized.setDate(normalized.getDate() - mondayOffset);
  const nextWeekStart = new Date(normalized);
  nextWeekStart.setDate(normalized.getDate() + 7);

  const diffMs = Math.max(0, nextWeekStart.getTime() - now.getTime());
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  return { days, hours };
}

export function useLeagueData() {
  const [players, setPlayers] = useState<LeaguePlayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(getTimeUntilReset());

  const weekKey = getWeekKey();

  const fetchLeague = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setCurrentUserId(user?.id ?? null);

    // Fetch all league entries for this week, joined with profiles
    const { data: entries } = await supabase
      .from("league_entries")
      .select("user_id, xp")
      .eq("week_key", weekKey);

    // Fetch all visible profiles
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, display_name, username, avatar_emoji, league_visible");

    if (!entries || !profiles) {
      setLoading(false);
      return;
    }

    // Build player list from entries joined with visible profiles
    const profileMap = new Map(profiles.map((p) => [p.id, p]));

    const leaguePlayers: LeaguePlayer[] = entries
      .map((entry) => {
        const profile = profileMap.get(entry.user_id);
        if (!profile) return null;

        const isYou = entry.user_id === user?.id;

        // Skip non-visible players (but always show current user)
        if (!profile.league_visible && !isYou) return null;

        return {
          id: entry.user_id,
          name: profile.display_name || profile.username || "Kullanıcı",
          avatar: profile.avatar_emoji || "🦩",
          xp: entry.xp,
          isYou,
          rank: 0,
        };
      })
      .filter(Boolean) as LeaguePlayer[];

    // Sort by XP descending
    leaguePlayers.sort((a, b) => {
      if (b.xp !== a.xp) return b.xp - a.xp;
      return a.name.localeCompare(b.name, "tr");
    });

    // Assign ranks
    leaguePlayers.forEach((p, i) => {
      p.rank = i + 1;
    });

    setPlayers(leaguePlayers);
    setLoading(false);
  }, [weekKey]);

  useEffect(() => {
    fetchLeague();

    // Realtime subscription
    const channel = supabase
      .channel("league-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "league_entries", filter: `week_key=eq.${weekKey}` },
        () => fetchLeague()
      )
      .subscribe();

    const timer = setInterval(() => {
      setCountdown(getTimeUntilReset());
    }, 60_000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(timer);
    };
  }, [fetchLeague, weekKey]);

  return { players, loading, countdown, currentUserId, refetch: fetchLeague };
}

/** Upsert XP for the current user in the current week */
export async function addLeagueXpToDb(amount: number) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || amount <= 0) return;

  const weekKey = getWeekKey();

  // Try to get existing entry
  const { data: existing } = await supabase
    .from("league_entries")
    .select("id, xp")
    .eq("user_id", user.id)
    .eq("week_key", weekKey)
    .maybeSingle();

  if (existing) {
    await supabase
      .from("league_entries")
      .update({ xp: existing.xp + Math.floor(amount), updated_at: new Date().toISOString() })
      .eq("id", existing.id);
  } else {
    await supabase
      .from("league_entries")
      .insert({ user_id: user.id, week_key: weekKey, xp: Math.floor(amount) });
  }
}
