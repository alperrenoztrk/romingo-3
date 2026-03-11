import StatsBar from "../components/StatsBar";
import { ChevronRight, Globe, Bell, Moon, Shield, UserCircle, Trophy } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { applyDarkMode, getStoredPreferences, savePreferences } from "@/lib/preferences";
import { supabase } from "@/integrations/supabase/client";

export default function SettingsPage() {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState(getStoredPreferences);
  const [leagueVisible, setLeagueVisible] = useState(true);
  const [leagueLoading, setLeagueLoading] = useState(true);

  useEffect(() => {
    savePreferences(preferences);
    applyDarkMode(preferences.darkMode);
  }, [preferences]);

  useEffect(() => {
    const fetchVisibility = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLeagueLoading(false); return; }

      const { data } = await supabase
        .from("profiles")
        .select("league_visible")
        .eq("id", user.id)
        .maybeSingle();

      if (data) setLeagueVisible(data.league_visible);
      setLeagueLoading(false);
    };
    fetchVisibility();
  }, []);

  const handleSwitchChange = (key: keyof typeof preferences, value: boolean) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));

    if (key === "darkMode") {
      toast({
        title: value ? "Karanlık mod açık" : "Karanlık mod kapalı",
      });
    }
  };

  const handleLeagueVisibilityChange = async (value: boolean) => {
    setLeagueVisible(value);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase
      .from("profiles")
      .update({ league_visible: value })
      .eq("id", user.id);

    toast({
      title: value ? "Ligde görünürsün" : "Ligde gizlisin",
      description: value ? "Diğer kullanıcılar seni sıralamada görebilir." : "Sıralamada görünmeyeceksin.",
    });
  };

  return (
    <div className="pb-20">
      <StatsBar />

      <div className="px-4 py-6 max-w-lg mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-black text-foreground">Ayarlar</h1>
        </div>

        <section className="bg-card rounded-2xl p-4 shadow-card space-y-3">
          <h2 className="font-extrabold text-foreground">Hesap</h2>

          <Link to="/settings/profile" className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/40 hover:bg-muted transition-colors">
            <div className="flex items-center gap-3">
              <UserCircle className="w-5 h-5 text-sky-brand" />
              <div className="text-left">
                <div className="font-bold text-sm text-foreground">Profil Bilgileri</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </Link>

          <Link to="/settings/security" className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/40 hover:bg-muted transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-success" />
              <div className="text-left">
                <div className="font-bold text-sm text-foreground">Gizlilik ve Güvenlik</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </Link>
        </section>

        <section className="bg-card rounded-2xl p-4 shadow-card space-y-4">
          <h2 className="font-extrabold text-foreground">Tercihler</h2>

          <div className="flex items-center justify-between rounded-xl bg-muted/40 p-3">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-flamingo" />
              <div>
                <div className="font-bold text-sm text-foreground">Bildirimler</div>
              </div>
            </div>
            <Switch
              checked={preferences.notifications}
              onCheckedChange={(value) => handleSwitchChange("notifications", value)}
            />
          </div>

          <div className="flex items-center justify-between rounded-xl bg-muted/40 p-3">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-gold" />
              <div>
                <div className="font-bold text-sm text-foreground">Karanlık Mod</div>
              </div>
            </div>
            <Switch
              checked={preferences.darkMode}
              onCheckedChange={(value) => handleSwitchChange("darkMode", value)}
            />
          </div>

          <div className="flex items-center justify-between rounded-xl bg-muted/40 p-3">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-sky-brand" />
              <div>
                <div className="font-bold text-sm text-foreground">Günlük Hatırlatma</div>
              </div>
            </div>
            <Switch
              checked={preferences.dailyReminder}
              onCheckedChange={(value) => handleSwitchChange("dailyReminder", value)}
            />
          </div>

          <div className="flex items-center justify-between rounded-xl bg-muted/40 p-3">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-gold" />
              <div>
                <div className="font-bold text-sm text-foreground">Ligde Görün</div>
                <div className="text-xs text-muted-foreground">Sıralamada diğer kullanıcılara görün</div>
              </div>
            </div>
            <Switch
              disabled={leagueLoading}
              checked={leagueVisible}
              onCheckedChange={handleLeagueVisibilityChange}
            />
          </div>
        </section>

        <button className="w-full rounded-2xl p-4 text-sm font-extrabold text-destructive bg-destructive/10 hover:bg-destructive/15 transition-colors">
          Hesabı Dondur
        </button>
      </div>
    </div>
  );
}
