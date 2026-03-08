import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { examData } from "@/data/examQuestions";

export default function ExamListPage() {
  const navigate = useNavigate();

  return (
    <div className="pb-20 min-h-screen bg-background">
      <div className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="p-1">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="font-extrabold text-foreground text-sm">Çıkmış Sorular</h1>
      </div>

      <div className="px-4 py-6 max-w-lg mx-auto space-y-3">
        {examData.map((exam) => (
          <button
            key={exam.id}
            onClick={() => navigate(`/exams/${exam.id}`)}
            className="w-full bg-card rounded-2xl p-4 shadow-card text-left active:translate-y-1 active:shadow-none transition-all flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-extrabold text-foreground text-sm">{exam.title}</p>
              <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                {exam.readingQuestions.length + exam.grammarQuestions.length} soru • Okuma + Dilbilgisi + Yazma
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
