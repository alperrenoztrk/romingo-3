import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen, PenLine, ChevronDown, ChevronUp } from "lucide-react";
import { examData } from "@/data/examQuestions";

type Section = "reading" | "grammar" | "writing";

export default function ExamPage() {
  const navigate = useNavigate();
  const { examId } = useParams<{ examId: string }>();
  const exam = examData.find((e) => e.id === examId) ?? examData[0];

  const [section, setSection] = useState<Section>("reading");
  const [readingAnswers, setReadingAnswers] = useState<Record<number, number>>({});
  const [grammarAnswers, setGrammarAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [textExpanded, setTextExpanded] = useState(true);

  const readingScore = useMemo(() => {
    if (!showResults) return 0;
    return exam.readingQuestions.reduce(
      (acc, q, i) => acc + (readingAnswers[i] === q.correctIndex ? 1 : 0),
      0
    );
  }, [showResults, readingAnswers, exam.readingQuestions]);

  const grammarScore = useMemo(() => {
    if (!showResults) return 0;
    return exam.grammarQuestions.reduce(
      (acc, q, i) => acc + (grammarAnswers[i] === q.correctIndex ? 1 : 0),
      0
    );
  }, [showResults, grammarAnswers, exam.grammarQuestions]);

  const totalAnswered =
    Object.keys(readingAnswers).length + Object.keys(grammarAnswers).length;
  const totalQuestions =
    exam.readingQuestions.length + exam.grammarQuestions.length;

  const handleCheck = () => setShowResults(true);
  const handleReset = () => {
    setReadingAnswers({});
    setGrammarAnswers({});
    setShowResults(false);
    setSection("reading");
  };

  const sectionTabs: { key: Section; label: string; icon: React.ReactNode }[] = [
    { key: "reading", label: "Okuma", icon: <BookOpen className="w-4 h-4" /> },
    { key: "grammar", label: "Dilbilgisi", icon: <PenLine className="w-4 h-4" /> },
    { key: "writing", label: "Yazma", icon: <PenLine className="w-4 h-4" /> },
  ];

  return (
    <div className="pb-24 min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/exams")} className="p-1">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="font-extrabold text-foreground text-sm truncate">{exam.title}</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-4 py-3 bg-card">
        {sectionTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSection(tab.key)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              section === tab.key
                ? "gradient-hero text-primary-foreground shadow-button-primary"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
        {/* Reading Section */}
        {section === "reading" && (
          <>
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <button
                onClick={() => setTextExpanded(!textExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <span className="font-bold text-sm text-foreground">📖 Metni Oku</span>
                {textExpanded ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              {textExpanded && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
                    {exam.readingText}
                  </p>
                </div>
              )}
            </div>

            {exam.readingQuestions.map((q, qi) => (
              <QuestionCard
                key={qi}
                index={qi + 1}
                question={q.question}
                options={q.options}
                selected={readingAnswers[qi]}
                correctIndex={showResults ? q.correctIndex : undefined}
                onSelect={(oi) => {
                  if (showResults) return;
                  setReadingAnswers((prev) => ({ ...prev, [qi]: oi }));
                }}
              />
            ))}
          </>
        )}

        {/* Grammar Section */}
        {section === "grammar" && (
          <>
            <h2 className="font-bold text-foreground text-sm">✏️ Doğru cevabı seçin</h2>
            {exam.grammarQuestions.map((q, qi) => (
              <QuestionCard
                key={qi}
                index={qi + 1}
                question={q.sentence}
                options={q.options}
                selected={grammarAnswers[qi]}
                correctIndex={showResults ? q.correctIndex : undefined}
                onSelect={(oi) => {
                  if (showResults) return;
                  setGrammarAnswers((prev) => ({ ...prev, [qi]: oi }));
                }}
              />
            ))}
          </>
        )}

        {/* Writing Section */}
        {section === "writing" && (
          <div className="space-y-4">
            <h2 className="font-bold text-foreground text-sm">📝 Yazma Bölümü</h2>
            {exam.writingPrompts.map((prompt, i) => (
              <div key={i} className="bg-card rounded-2xl p-4 shadow-card">
                <p className="text-sm text-foreground leading-relaxed">{prompt}</p>
              </div>
            ))}
            <p className="text-xs text-muted-foreground font-semibold text-center">
              Bu bölüm sadece bilgi amaçlıdır. Cevaplarınızı kağıda yazarak çalışabilirsiniz.
            </p>
          </div>
        )}

        {/* Bottom actions */}
        {section !== "writing" && (
          <div className="pt-2 space-y-3">
            {showResults ? (
              <div className="bg-card rounded-2xl p-4 shadow-card text-center space-y-3">
                <p className="font-extrabold text-foreground">
                  Sonuç: {readingScore + grammarScore} / {totalQuestions}
                </p>
                <div className="flex gap-2 text-xs font-bold text-muted-foreground justify-center">
                  <span>Okuma: {readingScore}/{exam.readingQuestions.length}</span>
                  <span>•</span>
                  <span>Dilbilgisi: {grammarScore}/{exam.grammarQuestions.length}</span>
                </div>
                <button
                  onClick={handleReset}
                  className="gradient-hero shadow-button-primary rounded-xl px-6 py-2.5 text-sm font-extrabold text-primary-foreground active:translate-y-1 active:shadow-none transition-all"
                >
                  Tekrar Dene
                </button>
              </div>
            ) : (
              <button
                onClick={handleCheck}
                disabled={totalAnswered < totalQuestions}
                className="w-full gradient-success shadow-button-success rounded-xl py-3 text-sm font-extrabold text-primary-foreground active:translate-y-1 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cevapları Kontrol Et ({totalAnswered}/{totalQuestions})
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function QuestionCard({
  index,
  question,
  options,
  selected,
  correctIndex,
  onSelect,
}: {
  index: number;
  question: string;
  options: string[];
  selected?: number;
  correctIndex?: number;
  onSelect: (optionIndex: number) => void;
}) {
  return (
    <div className="bg-card rounded-2xl p-4 shadow-card space-y-3">
      <p className="text-sm font-bold text-foreground">
        <span className="text-muted-foreground mr-1">{index}.</span> {question}
      </p>
      <div className="space-y-2">
        {options.map((opt, oi) => {
          const isSelected = selected === oi;
          const isCorrect = correctIndex === oi;
          const isWrong = correctIndex !== undefined && isSelected && !isCorrect;

          let cls =
            "w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ";
          if (isCorrect && correctIndex !== undefined) {
            cls += "border-success bg-success/10 text-success";
          } else if (isWrong) {
            cls += "border-destructive bg-destructive/10 text-destructive";
          } else if (isSelected) {
            cls += "border-primary bg-primary/10 text-primary";
          } else {
            cls += "border-border bg-muted/40 text-foreground";
          }

          return (
            <button key={oi} onClick={() => onSelect(oi)} className={cls}>
              <span className="flex items-center gap-2">
                {isCorrect && correctIndex !== undefined && (
                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                )}
                {isWrong && <XCircle className="w-4 h-4 text-destructive shrink-0" />}
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
