import StatsBar from "../components/StatsBar";
import { Crown, Medal, Award } from "lucide-react";
import { useLeagueData } from "@/hooks/useLeagueData";

function getRankIcon(rank: number) {
  if (rank === 1) return <Crown className="w-5 h-5 text-gold" fill="hsl(var(--gold))" />;
  if (rank === 2) return <Medal className="w-5 h-5 text-muted-foreground" />;
  if (rank === 3) return <Award className="w-5 h-5 text-flamingo" />;
  return <span className="text-sm font-extrabold text-muted-foreground w-5 text-center">{rank}</span>;
}

export default function LeaguePage() {
  const { players, loading, countdown } = useLeagueData();

  return (
    <div className="pb-20">
      <StatsBar />

      <div className="px-4 py-6 max-w-lg mx-auto">
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto gradient-gold rounded-full flex items-center justify-center mb-3 shadow-elevated">
            <span className="text-4xl">🏆</span>
          </div>
          <h1 className="text-xl font-black text-foreground">Haftalık Lig</h1>
          <p className="text-muted-foreground text-sm font-semibold">Bu haftanın sıralaması</p>
        </div>

        <div className="bg-card rounded-2xl p-3 shadow-card mb-4 text-center">
          <span className="text-xs font-bold text-muted-foreground">Haftalık reset: </span>
          <span className="text-xs font-extrabold text-flamingo">
            {countdown.days} gün {countdown.hours} saat kaldı
          </span>
        </div>

        {loading ? (
          <div className="bg-card rounded-2xl p-8 shadow-card text-center">
            <p className="text-sm font-semibold text-muted-foreground">Yükleniyor...</p>
          </div>
        ) : players.length === 0 ? (
          <div className="bg-card rounded-2xl p-8 shadow-card text-center">
            <p className="text-sm font-semibold text-muted-foreground">
              Bu hafta henüz ligde kimse yok. Ders tamamlayarak sıralamaya gir!
            </p>
          </div>
        ) : (
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            {players.map((player, i) => (
              <div
                key={player.id}
                className={`flex items-center gap-3 px-4 py-3 transition-all ${
                  i < players.length - 1 ? "border-b border-border" : ""
                } ${player.isYou ? "bg-flamingo-light ring-1 ring-flamingo/40" : ""} ${
                  player.rank <= 3 ? "bg-gold-light/30" : ""
                }`}
              >
                <div className="w-8 flex justify-center">{getRankIcon(player.rank)}</div>
                <div className="text-2xl">{player.avatar}</div>
                <div className="flex-1">
                  <span className={`font-bold text-sm ${player.isYou ? "text-flamingo" : "text-foreground"}`}>
                    {player.name}
                    {player.isYou && " (Sen)"}
                  </span>
                </div>
                <span className="font-extrabold text-sm text-sky-brand">{player.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
