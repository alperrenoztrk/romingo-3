import { useNavigate } from "react-router-dom";
import { BookOpenText, Languages, Target, Video, Trophy } from "lucide-react";
import { useAuthProfile } from "@/hooks/useAuthProfile";
import MascotFace from "@/components/MascotFace";

export default function HomePage() {
  const navigate = useNavigate();
  const hour = new Date().getHours();
  const baseGreeting = hour < 12 ? "Günaydın" : hour < 18 ? "İyi günler" : "İyi akşamlar";
  const { profile: authProfile } = useAuthProfile();
  const displayName = authProfile?.fullName?.trim() || "Kullanıcı";
  const greeting = `${baseGreeting} ${displayName}`;

  return (
    <div className="pb-20">
      <div className="px-4 py-6 space-y-4 max-w-lg mx-auto">
        <div className="flex items-center gap-3">
          <MascotFace index={0} className="w-14 h-14" />
          <h1 className="text-2xl font-black text-foreground">{greeting}!</h1>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate("/learn?view=tutorial&practice=adaptive")}
            className="gradient-sky shadow-button-sky rounded-2xl p-4 text-left active:translate-y-1 active:shadow-none transition-all"
          >
            <Target className="w-8 h-8 text-primary-foreground mb-2" />
            <div className="text-primary-foreground font-extrabold text-sm">Pratik Yap</div>
          </button>

          <button
            onClick={() => navigate("/translate")}
            className="gradient-hero shadow-button-primary rounded-2xl p-4 text-left active:translate-y-1 active:shadow-none transition-all"
          >
            <Languages className="w-8 h-8 text-primary-foreground mb-2" />
            <div className="text-primary-foreground font-extrabold text-sm">Çeviri</div>
          </button>

          <button
            onClick={() => navigate("/kahoot")}
            className="rounded-2xl p-4 text-left active:translate-y-1 active:shadow-none transition-all w-full gradient-hero shadow-button-primary"
          >
            <Trophy className="w-8 h-8 text-primary-foreground mb-2" />
            <div className="text-primary-foreground font-extrabold text-sm">Romi Quiz</div>
          </button>

          <button
            onClick={() => navigate("/videos")}
            className="gradient-success shadow-button-success rounded-2xl p-4 text-left active:translate-y-1 active:shadow-none transition-all w-full"
          >
            <Video className="w-8 h-8 text-primary-foreground mb-2" />
            <div className="text-primary-foreground font-extrabold text-sm">Kısa Konuşma Videoları</div>
          </button>

          <button
            onClick={() => navigate("/grammar")}
            className="gradient-gold shadow-button-gold rounded-2xl p-4 text-left active:translate-y-1 active:shadow-none transition-all"
          >
            <BookOpenText className="w-8 h-8 text-primary-foreground mb-2" />
            <div className="text-primary-foreground font-extrabold text-sm">Dil Bilgisi</div>
          </button>

        </div>
      </div>
    </div>
  );
}
