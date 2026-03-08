export interface ExamReadingQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface ExamGrammarQuestion {
  sentence: string;
  options: string[];
  correctIndex: number;
}

export interface ExamData {
  id: string;
  title: string;
  readingText: string;
  readingQuestions: ExamReadingQuestion[];
  grammarQuestions: ExamGrammarQuestion[];
  writingPrompts: string[];
}

export const examData: ExamData[] = [
  {
    id: "politeknik-2-1",
    title: "Politeknik Sınav 2.1",
    readingText: `Tot mai mulți români aleg munca la distanță

În ultimii ani, munca la distanță a devenit din ce în ce mai populară în România. Tot mai multe companii oferă angajaților posibilitatea de a lucra de acasă, fie parțial, fie permanent. Această schimbare a fost accelerată de evoluția tehnologiei și de experiența acumulată în timpul pandemiei.

Pentru mulți angajați, munca la distanță înseamnă mai multă flexibilitate. Oamenii își pot organiza mai bine programul zilnic și pot economisi timp, deoarece nu mai pierd ore în trafic. În plus, acest tip de muncă le permite să locuiască în alte orașe sau chiar în zone rurale, fără a fi nevoiți să se mute.

Cu toate acestea, specialiștii atrag atenția asupra unor dificultăți. Lipsa contactului direct cu colegii poate duce la izolare, iar granița dintre viața profesională și cea personală devine uneori neclară. De aceea, este important ca angajații să își stabilească reguli clare și să mențină o comunicare constantă cu echipa.

Autoritățile și angajatorii analizează în prezent modul în care legislația muncii ar trebui adaptată la noile realități. Scopul este de a proteja drepturile angajaților și de a asigura un echilibru sănătos între muncă și viața personală.`,
    readingQuestions: [
      {
        question: "Care este principalul motiv pentru creșterea muncii la distanță?",
        options: [
          "Evoluția tehnologiei și experiența pandemiei",
          "Dorința angajaților de a lucra mai puțin",
          "Lipsa locurilor de muncă în orașe",
        ],
        correctIndex: 0,
      },
      {
        question: "Ce avantaj al muncii la distanță este menționat în text?",
        options: [
          "Salarii mai mari",
          "Economisirea timpului pierdut în trafic",
          "Program fix pentru toți angajații",
        ],
        correctIndex: 1,
      },
      {
        question: "Munca la distanță îi obligă pe angajați să se mute în alte orașe.",
        options: ["Adevărat", "Fals"],
        correctIndex: 1,
      },
      {
        question: "Specialiștii consideră că munca la distanță nu are niciun dezavantaj.",
        options: ["Adevărat", "Fals"],
        correctIndex: 1,
      },
      {
        question: "Autoritățile analizează adaptarea _________ la noile realități ale muncii.",
        options: ["legislației muncii", "universităților", "ofertei de muncă"],
        correctIndex: 0,
      },
    ],
    grammarQuestions: [
      { sentence: "Eu ___ student.", options: ["este", "sunt", "e"], correctIndex: 1 },
      { sentence: "Maria și Ana ___ la școală.", options: ["e", "este", "sunt"], correctIndex: 2 },
      { sentence: "Acesta este ___ manual de română.", options: ["un", "o", "niște"], correctIndex: 0 },
      { sentence: "El ___ din Italia.", options: ["vine", "vin", "vor"], correctIndex: 0 },
      { sentence: "Noi ___ limba română.", options: ["învață", "învățăm", "învăț"], correctIndex: 1 },
      { sentence: "Este ora 8:00. Spunem:", options: ["Este ora fără zece.", "Este ora opt fix.", "Este ora opt jumătate."], correctIndex: 1 },
      { sentence: "Eu ___ un sandwich la prânz.", options: ["mănânci", "mănânc", "mănâncă"], correctIndex: 1 },
      { sentence: "Ei ___ acasă acum.", options: ["merg", "merge", "mergeți"], correctIndex: 0 },
      { sentence: "Ieri am ___ un email profesorului.", options: ["scriu", "scrie", "scris"], correctIndex: 2 },
      { sentence: "Fetele sunt mai ___ decât băieții.", options: ["înalți", "înalte", "înalt"], correctIndex: 1 },
      { sentence: "Cursul începe ___ ora 9.", options: ["la", "în", "pe"], correctIndex: 0 },
      { sentence: "Este ora 10:30. Spunem:", options: ["Este ora zece și jumătate.", "Este ora zece și un sfert.", "Este ora zece fără jumătate."], correctIndex: 0 },
      { sentence: "Am cumpărat două ___ de apă.", options: ["sticle", "sticlăle", "sticlă"], correctIndex: 0 },
      { sentence: "Îmi place ___ muzică românească.", options: ["ascultam", "ascult", "să ascult"], correctIndex: 2 },
      { sentence: "Vreau ___ mai devreme azi.", options: ["să plec", "plec", "pleacă"], correctIndex: 0 },
      { sentence: "Filmul ___ l-am văzut ieri a fost interesant.", options: ["pe care", "căruia", "la care"], correctIndex: 0 },
      { sentence: "Dacă ___ timp, te ajut.", options: ["avea", "am", "aveam"], correctIndex: 1 },
      { sentence: "Profesorul ___ am vorbit este foarte exigent.", options: ["pe care", "care", "cu care"], correctIndex: 2 },
      { sentence: "De obicei, trenul pleacă la 7:45, adică:", options: ["la șapte și trei sferturi", "la opt fără un sfert", "la șapte fără un sfert"], correctIndex: 1 },
      { sentence: "Nu știu ___ începe cursul mâine.", options: ["pentru că", "dacă", "ca"], correctIndex: 1 },
    ],
    writingPrompts: [
      "Scrie un mesaj unei prietene în care o inviți la o cafea. Include: salut, locul și ora întâlnirii, o alternativă dacă nu poate veni. (10 puncte)",
      "Scrie un text de minimum 7-8 fraze în care să descrii o imagine. Include: unde are loc scena, ce persoane apar, ce fac și cum sunt îmbrăcate, descrierea atmosferei, o opinie personală. Folosește timpul prezent și cel puțin 5 verbe la trecut și viitor. (15 puncte)",
    ],
  },
];
