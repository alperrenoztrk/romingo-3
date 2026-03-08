import { useState } from "react";
import { ArrowLeft, Search, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { verbConjugations, tenseLabels, type VerbConjugation } from "@/data/verbConjugations";

function VerbCard({ verb }: { verb: VerbConjugation }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div>
          <span className="font-black text-foreground">{verb.verb}</span>
          <span className="ml-2 text-sm text-muted-foreground">— {verb.tr}</span>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3">
          {(Object.keys(tenseLabels) as Array<keyof typeof tenseLabels>).map((key) => {
            const tenseKey = key as keyof VerbConjugation["tenses"];
            const value = verb.tenses[tenseKey];
            if (!value) return null;

            return (
              <div key={key} className="space-y-1">
                <p className="text-xs font-bold text-primary uppercase tracking-wide">
                  {tenseLabels[key]}
                </p>
                {Array.isArray(value) ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
                    {value.map((form, i) => (
                      <p key={i} className="text-sm text-foreground">{form}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-foreground font-semibold">{value}</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function VerbConjugationsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<"all" | "A1-A2" | "B1-B2">("all");

  const filtered = verbConjugations.filter((v) => {
    const matchesSearch =
      search.trim() === "" ||
      v.verb.toLowerCase().includes(search.toLowerCase()) ||
      v.tr.toLowerCase().includes(search.toLowerCase());
    const matchesLevel = levelFilter === "all" || v.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="pb-20">
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1">
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl font-black text-foreground">Fiil Çekimleri</h1>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Fiil ara... (ör: a fi, olmak)"
            className="w-full rounded-xl border border-border bg-background pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <div className="flex gap-2">
          {(["all", "A1-A2", "B1-B2"] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                levelFilter === lvl
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {lvl === "all" ? "Tümü" : lvl}
            </button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">{filtered.length} fiil</p>

        <div className="space-y-2">
          {filtered.map((v) => (
            <VerbCard key={v.verb} verb={v} />
          ))}
        </div>
      </div>
    </div>
  );
}
