export interface VerbConjugation {
  verb: string;
  tr: string;
  level: "A1-A2" | "B1-B2";
  tenses: {
    prezent: string[];
    perfectCompus: string[];
    viitor: string[];
    conjunctivPrezent: string[];
    imperfect: string[];
    maiMultCaPerfectul: string[];
    participiu: string;
    gerunziu: string;
    conjunctivPerfect: string[];
  };
}

export const verbConjugations: VerbConjugation[] = [
  {
    verb: "a fi", tr: "olmak", level: "A1-A2",
    tenses: {
      prezent: ["eu sunt","tu ești","el/ea este","noi suntem","voi sunteți","ei/ele sunt"],
      perfectCompus: ["eu am fost","tu ai fost","el/ea a fost","noi am fost","voi ați fost","ei/ele au fost"],
      viitor: ["eu voi fi","tu vei fi","el/ea va fi","noi vom fi","voi veți fi","ei/ele vor fi"],
      conjunctivPrezent: ["eu (să) fiu","tu (să) fii","el/ea (să) fie","noi (să) fim","voi (să) fiți","ei/ele (să) fie"],
      imperfect: ["eu eram","tu erai","el/ea era","noi eram","voi erați","ei/ele erau"],
      maiMultCaPerfectul: ["eu fusesem","tu fuseseși","el/ea fusese","noi fuseserăm","voi fuseserăți","ei/ele fuseseră"],
      participiu: "fost", gerunziu: "fiind",
      conjunctivPerfect: ["eu să fi fost","tu să fi fost","el/ea să fi fost","noi să fi fost","voi să fi fost","ei/ele să fi fost"],
    }
  },
  {
    verb: "a face", tr: "yapmak", level: "A1-A2",
    tenses: {
      prezent: ["eu fac","tu faci","el/ea face","noi facem","voi faceți","ei/ele fac"],
      perfectCompus: ["eu am făcut","tu ai făcut","el/ea a făcut","noi am făcut","voi ați făcut","ei/ele au făcut"],
      viitor: ["eu voi face","tu vei face","el/ea va face","noi vom face","voi veți face","ei/ele vor face"],
      conjunctivPrezent: ["eu (să) fac","tu (să) faci","el/ea (să) facă","noi (să) facem","voi (să) faceți","ei/ele (să) facă"],
      imperfect: ["eu făceam","tu făceai","el/ea făcea","noi făceam","voi făceați","ei/ele făceau"],
      maiMultCaPerfectul: ["eu făcusem","tu făcuseși","el/ea făcuse","noi făcuserăm","voi făcuserăți","ei/ele făcuseră"],
      participiu: "făcut", gerunziu: "făcând",
      conjunctivPerfect: ["eu să fi făcut","tu să fi făcut","el/ea să fi făcut","noi să fi făcut","voi să fi făcut","ei/ele să fi făcut"],
    }
  },
  {
    verb: "a merge", tr: "gitmek", level: "A1-A2",
    tenses: {
      prezent: ["eu merg","tu mergi","el/ea merge","noi mergem","voi mergeți","ei/ele merg"],
      perfectCompus: ["eu am mers","tu ai mers","el/ea a mers","noi am mers","voi ați mers","ei/ele au mers"],
      viitor: ["eu voi merge","tu vei merge","el/ea va merge","noi vom merge","voi veți merge","ei/ele vor merge"],
      conjunctivPrezent: ["eu (să) merg","tu (să) mergi","el/ea (să) meargă","noi (să) mergem","voi (să) mergeți","ei/ele (să) meargă"],
      imperfect: ["eu mergeam","tu mergeai","el/ea mergea","noi mergeam","voi mergeați","ei/ele mergeau"],
      maiMultCaPerfectul: ["eu mersesem","tu merseseși","el/ea mersese","noi merseserăm","voi merseserăți","ei/ele merseseră"],
      participiu: "mers", gerunziu: "mergând",
      conjunctivPerfect: ["eu să fi mers","tu să fi mers","el/ea să fi mers","noi să fi mers","voi să fi mers","ei/ele să fi mers"],
    }
  },
  {
    verb: "a avea", tr: "sahip olmak", level: "A1-A2",
    tenses: {
      prezent: ["eu am","tu ai","el/ea are","noi avem","voi aveți","ei/ele au"],
      perfectCompus: ["eu am avut","tu ai avut","el/ea a avut","noi am avut","voi ați avut","ei/ele au avut"],
      viitor: ["eu voi avea","tu vei avea","el/ea va avea","noi vom avea","voi veți avea","ei/ele vor avea"],
      conjunctivPrezent: ["eu (să) am","tu (să) ai","el/ea (să) aibă","noi (să) avem","voi (să) aveți","ei/ele (să) aibă"],
      imperfect: ["eu aveam","tu aveai","el/ea avea","noi aveam","voi aveați","ei/ele aveau"],
      maiMultCaPerfectul: ["eu avusesem","tu avuseseși","el/ea avusese","noi avuseserăm","voi avuseserăți","ei/ele avuseseră"],
      participiu: "avut", gerunziu: "având",
      conjunctivPerfect: ["eu să fi avut","tu să fi avut","el/ea să fi avut","noi să fi avut","voi să fi avut","ei/ele să fi avut"],
    }
  },
  {
    verb: "a putea", tr: "yapabilmek", level: "A1-A2",
    tenses: {
      prezent: ["eu pot","tu poți","el/ea poate","noi putem","voi puteți","ei/ele pot"],
      perfectCompus: ["eu am putut","tu ai putut","el/ea a putut","noi am putut","voi ați putut","ei/ele au putut"],
      viitor: ["eu voi putea","tu vei putea","el/ea va putea","noi vom putea","voi veți putea","ei/ele vor putea"],
      conjunctivPrezent: ["eu (să) pot","tu (să) poți","el/ea (să) poată","noi (să) putem","voi (să) puteți","ei/ele (să) poată"],
      imperfect: ["eu puteam","tu puteai","el/ea putea","noi puteam","voi puteați","ei/ele puteau"],
      maiMultCaPerfectul: ["eu putusem","tu putuseși","el/ea putuse","noi putuserăm","voi putuserăți","ei/ele putuseră"],
      participiu: "putut", gerunziu: "putând",
      conjunctivPerfect: ["eu să fi putut","tu să fi putut","el/ea să fi putut","noi să fi putut","voi să fi putut","ei/ele să fi putut"],
    }
  },
  {
    verb: "a vrea", tr: "istemek", level: "A1-A2",
    tenses: {
      prezent: ["eu vreau","tu vrei","el/ea vrea","noi vrem","voi vreți","ei/ele vor"],
      perfectCompus: ["eu am vrut","tu ai vrut","el/ea a vrut","noi am vrut","voi ați vrut","ei/ele au vrut"],
      viitor: ["eu voi vrea","tu vei vrea","el/ea va vrea","noi vom vrea","voi veți vrea","ei/ele vor vrea"],
      conjunctivPrezent: ["eu (să) vreau","tu (să) vrei","el/ea (să) vrea","noi (să) vrem","voi (să) vreți","ei/ele (să) vrea"],
      imperfect: ["eu vream","tu vreai","el/ea vrea","noi vream","voi vreați","ei/ele vreau"],
      maiMultCaPerfectul: ["eu vrusesem","tu vruseseși","el/ea vrusese","noi vruseserăm","voi vruseserăți","ei/ele vruseseră"],
      participiu: "vrut", gerunziu: "vrând",
      conjunctivPerfect: ["eu să fi vrut","tu să fi vrut","el/ea să fi vrut","noi să fi vrut","voi să fi vrut","ei/ele să fi vrut"],
    }
  },
  {
    verb: "a trebui", tr: "zorunlu olmak", level: "A1-A2",
    tenses: {
      prezent: ["eu trebuie","tu trebuie","el/ea trebuie","noi trebuie","voi trebuie","ei/ele trebuie"],
      perfectCompus: ["eu a trebuit","tu a trebuit","el/ea a trebuit","noi a trebuit","voi a trebuit","ei/ele a trebuit"],
      viitor: ["eu va trebui","tu va trebui","el/ea va trebui","noi va trebui","voi va trebui","ei/ele va trebui"],
      conjunctivPrezent: ["eu (să) trebuiască","tu (să) trebuiască","el/ea (să) trebuiască","noi (să) trebuiască","voi (să) trebuiască","ei/ele (să) trebuiască"],
      imperfect: ["eu trebuia","tu trebuia","el/ea trebuia","noi trebuia","voi trebuia","ei/ele trebuia"],
      maiMultCaPerfectul: ["eu trebuise","tu trebuise","el/ea trebuise","noi trebuise","voi trebuise","ei/ele trebuise"],
      participiu: "trebuit", gerunziu: "trebuind",
      conjunctivPerfect: ["eu să fi trebuit","tu să fi trebuit","el/ea să fi trebuit","noi să fi trebuit","voi să fi trebuit","ei/ele să fi trebuit"],
    }
  },
  {
    verb: "a lua", tr: "almak", level: "A1-A2",
    tenses: {
      prezent: ["eu iau","tu iei","el/ea ia","noi luăm","voi luați","ei/ele iau"],
      perfectCompus: ["eu am luat","tu ai luat","el/ea a luat","noi am luat","voi ați luat","ei/ele au luat"],
      viitor: ["eu voi lua","tu vei lua","el/ea va lua","noi vom lua","voi veți lua","ei/ele vor lua"],
      conjunctivPrezent: ["eu (să) iau","tu (să) iei","el/ea (să) ia","noi (să) luăm","voi (să) luați","ei/ele (să) ia"],
      imperfect: ["eu luam","tu luai","el/ea lua","noi luam","voi luați","ei/ele luau"],
      maiMultCaPerfectul: ["eu luasem","tu luaseși","el/ea luase","noi luaserăm","voi luaserăți","ei/ele luaseră"],
      participiu: "luat", gerunziu: "luând",
      conjunctivPerfect: ["eu să fi luat","tu să fi luat","el/ea să fi luat","noi să fi luat","voi să fi luat","ei/ele să fi luat"],
    }
  },
  {
    verb: "a mânca", tr: "yemek", level: "A1-A2",
    tenses: {
      prezent: ["eu mănânc","tu mănânci","el/ea mănâncă","noi mâncăm","voi mâncați","ei/ele mănâncă"],
      perfectCompus: ["eu am mâncat","tu ai mâncat","el/ea a mâncat","noi am mâncat","voi ați mâncat","ei/ele au mâncat"],
      viitor: ["eu voi mânca","tu vei mânca","el/ea va mânca","noi vom mânca","voi veți mânca","ei/ele vor mânca"],
      conjunctivPrezent: ["eu (să) mănânc","tu (să) mănânci","el/ea (să) mănânce","noi (să) mâncăm","voi (să) mâncați","ei/ele (să) mănânce"],
      imperfect: ["eu mâncam","tu mâncai","el/ea mânca","noi mâncam","voi mâncați","ei/ele mâncau"],
      maiMultCaPerfectul: ["eu mâncasem","tu mâncaseși","el/ea mâncase","noi mâncaserăm","voi mâncaserăți","ei/ele mâncaseră"],
      participiu: "mâncat", gerunziu: "mâncând",
      conjunctivPerfect: ["eu să fi mâncat","tu să fi mâncat","el/ea să fi mâncat","noi să fi mâncat","voi să fi mâncat","ei/ele să fi mâncat"],
    }
  },
  {
    verb: "a citi", tr: "okumak", level: "A1-A2",
    tenses: {
      prezent: ["eu citesc","tu citești","el/ea citește","noi citim","voi citiți","ei/ele citesc"],
      perfectCompus: ["eu am citit","tu ai citit","el/ea a citit","noi am citit","voi ați citit","ei/ele au citit"],
      viitor: ["eu voi citi","tu vei citi","el/ea va citi","noi vom citi","voi veți citi","ei/ele vor citi"],
      conjunctivPrezent: ["eu (să) citesc","tu (să) citești","el/ea (să) citească","noi (să) citim","voi (să) citiți","ei/ele (să) citească"],
      imperfect: ["eu citeam","tu citeai","el/ea citea","noi citeam","voi citeați","ei/ele citeau"],
      maiMultCaPerfectul: ["eu citisem","tu citiseși","el/ea citise","noi citiserăm","voi citiserăți","ei/ele citiseră"],
      participiu: "citit", gerunziu: "citiind",
      conjunctivPerfect: ["eu să fi citit","tu să fi citit","el/ea să fi citit","noi să fi citit","voi să fi citit","ei/ele să fi citit"],
    }
  },
  {
    verb: "a scrie", tr: "yazmak", level: "A1-A2",
    tenses: {
      prezent: ["eu scriu","tu scrii","el/ea scrie","noi scriem","voi scrieți","ei/ele scriu"],
      perfectCompus: ["eu am scris","tu ai scris","el/ea a scris","noi am scris","voi ați scris","ei/ele au scris"],
      viitor: ["eu voi scrie","tu vei scrie","el/ea va scrie","noi vom scrie","voi veți scrie","ei/ele vor scrie"],
      conjunctivPrezent: ["eu (să) scriu","tu (să) scrii","el/ea (să) scrie","noi (să) scriem","voi (să) scrieți","ei/ele (să) scrie"],
      imperfect: ["eu scriam","tu scriai","el/ea scria","noi scriam","voi scriați","ei/ele scriau"],
      maiMultCaPerfectul: ["eu scrisesem","tu scriseseși","el/ea scrisese","noi scriseserăm","voi scriseserăți","ei/ele scriseseră"],
      participiu: "scris", gerunziu: "scriind",
      conjunctivPerfect: ["eu să fi scris","tu să fi scris","el/ea să fi scris","noi să fi scris","voi să fi scris","ei/ele să fi scris"],
    }
  },
  {
    verb: "a veni", tr: "gelmek", level: "A1-A2",
    tenses: {
      prezent: ["eu vin","tu vii","el/ea vine","noi venim","voi veniți","ei/ele vin"],
      perfectCompus: ["eu am venit","tu ai venit","el/ea a venit","noi am venit","voi ați venit","ei/ele au venit"],
      viitor: ["eu voi veni","tu vei veni","el/ea va veni","noi vom veni","voi veți veni","ei/ele vor veni"],
      conjunctivPrezent: ["eu (să) vin","tu (să) vii","el/ea (să) vină","noi (să) venim","voi (să) veniți","ei/ele (să) vină"],
      imperfect: ["eu veneam","tu veneai","el/ea venea","noi veneam","voi veneați","ei/ele veneau"],
      maiMultCaPerfectul: ["eu venisem","tu veniseși","el/ea venise","noi veniserăm","voi veniserăți","ei/ele veniseră"],
      participiu: "venit", gerunziu: "venind",
      conjunctivPerfect: ["eu să fi venit","tu să fi venit","el/ea să fi venit","noi să fi venit","voi să fi venit","ei/ele să fi venit"],
    }
  },
  {
    verb: "a gândi", tr: "düşünmek", level: "A1-A2",
    tenses: {
      prezent: ["eu gândesc","tu gândești","el/ea gândește","noi gândim","voi gândiți","ei/ele gândesc"],
      perfectCompus: ["eu am gândit","tu ai gândit","el/ea a gândit","noi am gândit","voi ați gândit","ei/ele au gândit"],
      viitor: ["eu voi gândi","tu vei gândi","el/ea va gândi","noi vom gândi","voi veți gândi","ei/ele vor gândi"],
      conjunctivPrezent: ["eu (să) gândesc","tu (să) gândești","el/ea (să) gândească","noi (să) gândim","voi (să) gândiți","ei/ele (să) gândească"],
      imperfect: ["eu gândeam","tu gândeai","el/ea gândea","noi gândeam","voi gândeați","ei/ele gândeau"],
      maiMultCaPerfectul: ["eu gândisem","tu gândiseși","el/ea gândise","noi gândiserăm","voi gândiserăți","ei/ele gândiseră"],
      participiu: "gândit", gerunziu: "gândind",
      conjunctivPerfect: ["eu să fi gândit","tu să fi gândit","el/ea să fi gândit","noi să fi gândit","voi să fi gândit","ei/ele să fi gândit"],
    }
  },
  {
    verb: "a spune", tr: "söylemek", level: "A1-A2",
    tenses: {
      prezent: ["eu spun","tu spui","el/ea spune","noi spunem","voi spuneți","ei/ele spun"],
      perfectCompus: ["eu am spus","tu ai spus","el/ea a spus","noi am spus","voi ați spus","ei/ele au spus"],
      viitor: ["eu voi spune","tu vei spune","el/ea va spune","noi vom spune","voi veți spune","ei/ele vor spune"],
      conjunctivPrezent: ["eu (să) spun","tu (să) spui","el/ea (să) spună","noi (să) spunem","voi (să) spuneți","ei/ele (să) spună"],
      imperfect: ["eu spuneam","tu spuneai","el/ea spunea","noi spuneam","voi spuneați","ei/ele spuneau"],
      maiMultCaPerfectul: ["eu spusesem","tu spuseseși","el/ea spusese","noi spuseserăm","voi spuseserăți","ei/ele spuseseră"],
      participiu: "spus", gerunziu: "spunând",
      conjunctivPerfect: ["eu să fi spus","tu să fi spus","el/ea să fi spus","noi să fi spus","voi să fi spus","ei/ele să fi spus"],
    }
  },
  {
    verb: "a cumpăra", tr: "satın almak", level: "A1-A2",
    tenses: {
      prezent: ["eu cumpăr","tu cumperi","el/ea cumpără","noi cumpărăm","voi cumpărați","ei/ele cumpără"],
      perfectCompus: ["eu am cumpărat","tu ai cumpărat","el/ea a cumpărat","noi am cumpărat","voi ați cumpărat","ei/ele au cumpărat"],
      viitor: ["eu voi cumpăra","tu vei cumpăra","el/ea va cumpăra","noi vom cumpăra","voi veți cumpăra","ei/ele vor cumpăra"],
      conjunctivPrezent: ["eu (să) cumpăr","tu (să) cumperi","el/ea (să) cumpere","noi (să) cumpărăm","voi (să) cumpărați","ei/ele (să) cumpere"],
      imperfect: ["eu cumpăram","tu cumpărai","el/ea cumpăra","noi cumpăram","voi cumpărați","ei/ele cumpărau"],
      maiMultCaPerfectul: ["eu cumpărasem","tu cumpăraseși","el/ea cumpărase","noi cumpăraserăm","voi cumpăraserăți","ei/ele cumpăraseră"],
      participiu: "cumpărat", gerunziu: "cumpărând",
      conjunctivPerfect: ["eu să fi cumpărat","tu să fi cumpărat","el/ea să fi cumpărat","noi să fi cumpărat","voi să fi cumpărat","ei/ele să fi cumpărat"],
    }
  },
  {
    verb: "a vorbi", tr: "konuşmak", level: "A1-A2",
    tenses: {
      prezent: ["eu vorbesc","tu vorbești","el/ea vorbește","noi vorbim","voi vorbiți","ei/ele vorbesc"],
      perfectCompus: ["eu am vorbit","tu ai vorbit","el/ea a vorbit","noi am vorbit","voi ați vorbit","ei/ele au vorbit"],
      viitor: ["eu voi vorbi","tu vei vorbi","el/ea va vorbi","noi vom vorbi","voi veți vorbi","ei/ele vor vorbi"],
      conjunctivPrezent: ["eu (să) vorbesc","tu (să) vorbești","el/ea (să) vorbească","noi (să) vorbim","voi (să) vorbiți","ei/ele (să) vorbească"],
      imperfect: ["eu vorbeam","tu vorbeai","el/ea vorbea","noi vorbeam","voi vorbeați","ei/ele vorbeau"],
      maiMultCaPerfectul: ["eu vorbisem","tu vorbiseși","el/ea vorbise","noi vorbiserăm","voi vorbiserăți","ei/ele vorbiseră"],
      participiu: "vorbit", gerunziu: "vorbind",
      conjunctivPerfect: ["eu să fi vorbit","tu să fi vorbit","el/ea să fi vorbit","noi să fi vorbit","voi să fi vorbit","ei/ele să fi vorbit"],
    }
  },
  {
    verb: "a dormi", tr: "uyumak", level: "A1-A2",
    tenses: {
      prezent: ["eu dorm","tu dormi","el/ea doarme","noi dormim","voi dormiți","ei/ele dorm"],
      perfectCompus: ["eu am dormit","tu ai dormit","el/ea a dormit","noi am dormit","voi ați dormit","ei/ele au dormit"],
      viitor: ["eu voi dormi","tu vei dormi","el/ea va dormi","noi vom dormi","voi veți dormi","ei/ele vor dormi"],
      conjunctivPrezent: ["eu (să) dorm","tu (să) dormi","el/ea (să) doarmă","noi (să) dormim","voi (să) dormiți","ei/ele (să) doarmă"],
      imperfect: ["eu dormeam","tu dormeai","el/ea dormea","noi dormeam","voi dormeați","ei/ele dormeau"],
      maiMultCaPerfectul: ["eu dormisem","tu dormiseși","el/ea dormise","noi dormiserăm","voi dormiserăți","ei/ele dormiseră"],
      participiu: "dormit", gerunziu: "dormind",
      conjunctivPerfect: ["eu să fi dormit","tu să fi dormit","el/ea să fi dormit","noi să fi dormit","voi să fi dormit","ei/ele să fi dormit"],
    }
  },
  {
    verb: "a munci", tr: "çalışmak", level: "A1-A2",
    tenses: {
      prezent: ["eu muncesc","tu muncești","el/ea muncește","noi muncim","voi munciți","ei/ele muncesc"],
      perfectCompus: ["eu am muncit","tu ai muncit","el/ea a muncit","noi am muncit","voi ați muncit","ei/ele au muncit"],
      viitor: ["eu voi munci","tu vei munci","el/ea va munci","noi vom munci","voi veți munci","ei/ele vor munci"],
      conjunctivPrezent: ["eu (să) muncesc","tu (să) muncești","el/ea (să) muncească","noi (să) muncim","voi (să) munciți","ei/ele (să) muncească"],
      imperfect: ["eu munceam","tu munceai","el/ea muncea","noi munceam","voi munceați","ei/ele munceau"],
      maiMultCaPerfectul: ["eu muncisem","tu munciseși","el/ea muncise","noi munciserăm","voi munciserăți","ei/ele munciseră"],
      participiu: "muncit", gerunziu: "muncind",
      conjunctivPerfect: ["eu să fi muncit","tu să fi muncit","el/ea să fi muncit","noi să fi muncit","voi să fi muncit","ei/ele să fi muncit"],
    }
  },
  {
    verb: "a ști", tr: "bilmek", level: "A1-A2",
    tenses: {
      prezent: ["eu știu","tu știi","el/ea știe","noi știm","voi știți","ei/ele știu"],
      perfectCompus: ["eu am știut","tu ai știut","el/ea a știut","noi am știut","voi ați știut","ei/ele au știut"],
      viitor: ["eu voi ști","tu vei ști","el/ea va ști","noi vom ști","voi veți ști","ei/ele vor ști"],
      conjunctivPrezent: ["eu (să) știu","tu (să) știi","el/ea (să) știe","noi (să) știm","voi (să) știți","ei/ele (să) știe"],
      imperfect: ["eu știam","tu știai","el/ea știa","noi știam","voi știați","ei/ele știau"],
      maiMultCaPerfectul: ["eu știusem","tu știuseși","el/ea știuse","noi știuserăm","voi știuserăți","ei/ele știuseră"],
      participiu: "știut", gerunziu: "știind",
      conjunctivPerfect: ["eu să fi știut","tu să fi știut","el/ea să fi știut","noi să fi știut","voi să fi știut","ei/ele să fi știut"],
    }
  },
  {
    verb: "a conduce", tr: "liderlik etmek", level: "A1-A2",
    tenses: {
      prezent: ["eu conduc","tu conduci","el/ea conduce","noi conducem","voi conduceți","ei/ele conduc"],
      perfectCompus: ["eu am condus","tu ai condus","el/ea a condus","noi am condus","voi ați condus","ei/ele au condus"],
      viitor: ["eu voi conduce","tu vei conduce","el/ea va conduce","noi vom conduce","voi veți conduce","ei/ele vor conduce"],
      conjunctivPrezent: ["eu (să) conduc","tu (să) conduci","el/ea (să) conducă","noi (să) conducem","voi (să) conduceți","ei/ele (să) conducă"],
      imperfect: ["eu conduceam","tu conduceai","el/ea conducea","noi conduceam","voi conduceați","ei/ele conduceau"],
      maiMultCaPerfectul: ["eu condusesem","tu conduseseși","el/ea condusese","noi conduseserăm","voi conduseserăți","ei/ele conduseseră"],
      participiu: "condus", gerunziu: "conducând",
      conjunctivPerfect: ["eu să fi condus","tu să fi condus","el/ea să fi condus","noi să fi condus","voi să fi condus","ei/ele să fi condus"],
    }
  },
  {
    verb: "a cânta", tr: "şarkı söylemek", level: "A1-A2",
    tenses: {
      prezent: ["eu cânt","tu cânți","el/ea cântă","noi cântăm","voi cântați","ei/ele cântă"],
      perfectCompus: ["eu am cântat","tu ai cântat","el/ea a cântat","noi am cântat","voi ați cântat","ei/ele au cântat"],
      viitor: ["eu voi cânta","tu vei cânta","el/ea va cânta","noi vom cânta","voi veți cânta","ei/ele vor cânta"],
      conjunctivPrezent: ["eu (să) cânt","tu (să) cânți","el/ea (să) cânte","noi (să) cântăm","voi (să) cântați","ei/ele (să) cânte"],
      imperfect: ["eu cântam","tu cântai","el/ea cânta","noi cântam","voi cântați","ei/ele cântau"],
      maiMultCaPerfectul: ["eu cântasem","tu cântaseși","el/ea cântase","noi cântaserăm","voi cântaserăți","ei/ele cântaseră"],
      participiu: "cântat", gerunziu: "cântând",
      conjunctivPerfect: ["eu să fi cântat","tu să fi cântat","el/ea să fi cântat","noi să fi cântat","voi să fi cântat","ei/ele să fi cântat"],
    }
  },
  {
    verb: "a învăța", tr: "öğrenmek", level: "A1-A2",
    tenses: {
      prezent: ["eu învăț","tu înveți","el/ea învață","noi învățăm","voi învățați","ei/ele învață"],
      perfectCompus: ["eu am învățat","tu ai învățat","el/ea a învățat","noi am învățat","voi ați învățat","ei/ele au învățat"],
      viitor: ["eu voi învăța","tu vei învăța","el/ea va învăța","noi vom învăța","voi veți învăța","ei/ele vor învăța"],
      conjunctivPrezent: ["eu (să) învăț","tu (să) înveți","el/ea (să) învețe","noi (să) învățăm","voi (să) învățați","ei/ele (să) învețe"],
      imperfect: ["eu învățam","tu învățai","el/ea învăța","noi învățam","voi învățați","ei/ele învățau"],
      maiMultCaPerfectul: ["eu învățasem","tu învățaseși","el/ea învățase","noi învățaserăm","voi învățaserăți","ei/ele învățaseră"],
      participiu: "învățat", gerunziu: "învățând",
      conjunctivPerfect: ["eu să fi învățat","tu să fi învățat","el/ea să fi învățat","noi să fi învățat","voi să fi învățat","ei/ele să fi învățat"],
    }
  },
  {
    verb: "a minți", tr: "yalan söylemek", level: "A1-A2",
    tenses: {
      prezent: ["eu mint","tu minți","el/ea minte","noi mințim","voi mințiți","ei/ele mint"],
      perfectCompus: ["eu am mințit","tu ai mințit","el/ea a mințit","noi am mințit","voi ați mințit","ei/ele au mințit"],
      viitor: ["eu voi minți","tu vei minți","el/ea va minți","noi vom minți","voi veți minți","ei/ele vor minți"],
      conjunctivPrezent: ["eu (să) mint","tu (să) minți","el/ea (să) mintă","noi (să) mințim","voi (să) mințiți","ei/ele (să) mintă"],
      imperfect: ["eu mințeam","tu mințeai","el/ea mințea","noi mințeam","voi mințeați","ei/ele mințeau"],
      maiMultCaPerfectul: ["eu mințisem","tu mințiseși","el/ea mințise","noi mințiserăm","voi mințiserăți","ei/ele mințiseră"],
      participiu: "mințit", gerunziu: "mințind",
      conjunctivPerfect: ["eu să fi mințit","tu să fi mințit","el/ea să fi mințit","noi să fi mințit","voi să fi mințit","ei/ele să fi mințit"],
    }
  },
  {
    verb: "a aduce", tr: "getirmek", level: "A1-A2",
    tenses: {
      prezent: ["eu aduc","tu aduci","el/ea aduce","noi aducem","voi aduceți","ei/ele aduc"],
      perfectCompus: ["eu am adus","tu ai adus","el/ea a adus","noi am adus","voi ați adus","ei/ele au adus"],
      viitor: ["eu voi aduce","tu vei aduce","el/ea va aduce","noi vom aduce","voi veți aduce","ei/ele vor aduce"],
      conjunctivPrezent: ["eu (să) aduc","tu (să) aduci","el/ea (să) aducă","noi (să) aducem","voi (să) aduceți","ei/ele (să) aducă"],
      imperfect: ["eu aduceam","tu aduceai","el/ea aducea","noi aduceam","voi aduceați","ei/ele aduceau"],
      maiMultCaPerfectul: ["eu adusesem","tu aduseseși","el/ea adusese","noi aduseserăm","voi aduseserăți","ei/ele aduseseră"],
      participiu: "adus", gerunziu: "aducând",
      conjunctivPerfect: ["eu să fi adus","tu să fi adus","el/ea să fi adus","noi să fi adus","voi să fi adus","ei/ele să fi adus"],
    }
  },
  {
    verb: "a trece", tr: "geçmek", level: "A1-A2",
    tenses: {
      prezent: ["eu trec","tu treci","el/ea trece","noi trecem","voi treceți","ei/ele trec"],
      perfectCompus: ["eu am trecut","tu ai trecut","el/ea a trecut","noi am trecut","voi ați trecut","ei/ele au trecut"],
      viitor: ["eu voi trece","tu vei trece","el/ea va trece","noi vom trece","voi veți trece","ei/ele vor trece"],
      conjunctivPrezent: ["eu (să) trec","tu (să) treci","el/ea (să) treacă","noi (să) trecem","voi (să) treceți","ei/ele (să) treacă"],
      imperfect: ["eu treceam","tu treceai","el/ea trecea","noi treceam","voi treceați","ei/ele treceau"],
      maiMultCaPerfectul: ["eu trecusem","tu trecuseși","el/ea trecuse","noi trecuserăm","voi trecuserăți","ei/ele trecuseră"],
      participiu: "trecut", gerunziu: "trecând",
      conjunctivPerfect: ["eu să fi trecut","tu să fi trecut","el/ea să fi trecut","noi să fi trecut","voi să fi trecut","ei/ele să fi trecut"],
    }
  },
  {
    verb: "a pleca", tr: "ayrılmak", level: "A1-A2",
    tenses: {
      prezent: ["eu plec","tu pleci","el/ea pleacă","noi plecăm","voi plecați","ei/ele pleacă"],
      perfectCompus: ["eu am plecat","tu ai plecat","el/ea a plecat","noi am plecat","voi ați plecat","ei/ele au plecat"],
      viitor: ["eu voi pleca","tu vei pleca","el/ea va pleca","noi vom pleca","voi veți pleca","ei/ele vor pleca"],
      conjunctivPrezent: ["eu (să) plec","tu (să) pleci","el/ea (să) plece","noi (să) plecăm","voi (să) plecați","ei/ele (să) plece"],
      imperfect: ["eu plecam","tu plecai","el/ea pleca","noi plecam","voi plecați","ei/ele plecau"],
      maiMultCaPerfectul: ["eu plecasem","tu plecaseși","el/ea plecase","noi plecaserăm","voi plecaserăți","ei/ele plecaseră"],
      participiu: "plecat", gerunziu: "plecând",
      conjunctivPerfect: ["eu să fi plecat","tu să fi plecat","el/ea să fi plecat","noi să fi plecat","voi să fi plecat","ei/ele să fi plecat"],
    }
  },
  {
    verb: "a bea", tr: "içmek", level: "A1-A2",
    tenses: {
      prezent: ["eu beau","tu bei","el/ea bea","noi bem","voi beți","ei/ele beau"],
      perfectCompus: ["eu am băut","tu ai băut","el/ea a băut","noi am băut","voi ați băut","ei/ele au băut"],
      viitor: ["eu voi bea","tu vei bea","el/ea va bea","noi vom bea","voi veți bea","ei/ele vor bea"],
      conjunctivPrezent: ["eu (să) beau","tu (să) bei","el/ea (să) bea","noi (să) bem","voi (să) beți","ei/ele (să) bea"],
      imperfect: ["eu beam","tu beai","el/ea bea","noi beam","voi beați","ei/ele beau"],
      maiMultCaPerfectul: ["eu băusem","tu băuseși","el/ea băuse","noi băuserăm","voi băuserăți","ei/ele băuseră"],
      participiu: "băut", gerunziu: "bând",
      conjunctivPerfect: ["eu să fi băut","tu să fi băut","el/ea să fi băut","noi să fi băut","voi să fi băut","ei/ele să fi băut"],
    }
  },
  {
    verb: "a cădea", tr: "düşmek", level: "A1-A2",
    tenses: {
      prezent: ["eu cad","tu cazi","el/ea cade","noi cădem","voi cădeți","ei/ele cad"],
      perfectCompus: ["eu am căzut","tu ai căzut","el/ea a căzut","noi am căzut","voi ați căzut","ei/ele au căzut"],
      viitor: ["eu voi cădea","tu vei cădea","el/ea va cădea","noi vom cădea","voi veți cădea","ei/ele vor cădea"],
      conjunctivPrezent: ["eu (să) cad","tu (să) cazi","el/ea (să) cadă","noi (să) cădem","voi (să) cădeți","ei/ele (să) cadă"],
      imperfect: ["eu cădeam","tu cădeai","el/ea cădea","noi cădeam","voi cădeați","ei/ele cădeau"],
      maiMultCaPerfectul: ["eu căzusem","tu căzuseși","el/ea căzuse","noi căzuserăm","voi căzuserăți","ei/ele căzuseră"],
      participiu: "căzut", gerunziu: "căzând",
      conjunctivPerfect: ["eu să fi căzut","tu să fi căzut","el/ea să fi căzut","noi să fi căzut","voi să fi căzut","ei/ele să fi căzut"],
    }
  },
  {
    verb: "a trăi", tr: "yaşamak", level: "A1-A2",
    tenses: {
      prezent: ["eu trăiesc","tu trăiești","el/ea trăiește","noi trăim","voi trăiți","ei/ele trăiesc"],
      perfectCompus: ["eu am trăit","tu ai trăit","el/ea a trăit","noi am trăit","voi ați trăit","ei/ele au trăit"],
      viitor: ["eu voi trăi","tu vei trăi","el/ea va trăi","noi vom trăi","voi veți trăi","ei/ele vor trăi"],
      conjunctivPrezent: ["eu (să) trăiesc","tu (să) trăiești","el/ea (să) trăiască","noi (să) trăim","voi (să) trăiți","ei/ele (să) trăiască"],
      imperfect: ["eu trăiam","tu trăiai","el/ea trăia","noi trăiam","voi trăiați","ei/ele trăiau"],
      maiMultCaPerfectul: ["eu trăisem","tu trăiseși","el/ea trăise","noi trăiserăm","voi trăiserăți","ei/ele trăiseră"],
      participiu: "trăit", gerunziu: "trăind",
      conjunctivPerfect: ["eu să fi trăit","tu să fi trăit","el/ea să fi trăit","noi să fi trăit","voi să fi trăit","ei/ele să fi trăit"],
    }
  },
  {
    verb: "a ieși", tr: "çıkmak", level: "A1-A2",
    tenses: {
      prezent: ["eu ies","tu ieși","el/ea iese","noi ieșim","voi ieșiți","ei/ele ies"],
      perfectCompus: ["eu am ieșit","tu ai ieșit","el/ea a ieșit","noi am ieșit","voi ați ieșit","ei/ele au ieșit"],
      viitor: ["eu voi ieși","tu vei ieși","el/ea va ieși","noi vom ieși","voi veți ieși","ei/ele vor ieși"],
      conjunctivPrezent: ["eu (să) ies","tu (să) ieși","el/ea (să) iasă","noi (să) ieșim","voi (să) ieșiți","ei/ele (să) iasă"],
      imperfect: ["eu ieșeam","tu ieșeai","el/ea ieșea","noi ieșeam","voi ieșeați","ei/ele ieșeau"],
      maiMultCaPerfectul: ["eu ieșisem","tu ieșiseși","el/ea ieșise","noi ieșiserăm","voi ieșiserăți","ei/ele ieșiseră"],
      participiu: "ieșit", gerunziu: "ieșind",
      conjunctivPerfect: ["eu să fi ieșit","tu să fi ieșit","el/ea să fi ieșit","noi să fi ieșit","voi să fi ieșit","ei/ele să fi ieșit"],
    }
  },
  {
    verb: "a asculta", tr: "dinlemek", level: "A1-A2",
    tenses: {
      prezent: ["eu ascult","tu asculți","el/ea ascultă","noi ascultăm","voi ascultați","ei/ele ascultă"],
      perfectCompus: ["eu am ascultat","tu ai ascultat","el/ea a ascultat","noi am ascultat","voi ați ascultat","ei/ele au ascultat"],
      viitor: ["eu voi asculta","tu vei asculta","el/ea va asculta","noi vom asculta","voi veți asculta","ei/ele vor asculta"],
      conjunctivPrezent: ["eu (să) ascult","tu (să) asculți","el/ea (să) asculte","noi (să) ascultăm","voi (să) ascultați","ei/ele (să) asculte"],
      imperfect: ["eu ascultam","tu ascultai","el/ea asculta","noi ascultam","voi ascultați","ei/ele ascultau"],
      maiMultCaPerfectul: ["eu ascultasem","tu ascultaseși","el/ea ascultase","noi ascultaserăm","voi ascultaserăți","ei/ele ascultaseră"],
      participiu: "ascultat", gerunziu: "ascultând",
      conjunctivPerfect: ["eu să fi ascultat","tu să fi ascultat","el/ea să fi ascultat","noi să fi ascultat","voi să fi ascultat","ei/ele să fi ascultat"],
    }
  },
  {
    verb: "a explica", tr: "açıklamak", level: "A1-A2",
    tenses: {
      prezent: ["eu explic","tu explici","el/ea explică","noi explicăm","voi explicați","ei/ele explică"],
      perfectCompus: ["eu am explicat","tu ai explicat","el/ea a explicat","noi am explicat","voi ați explicat","ei/ele au explicat"],
      viitor: ["eu voi explica","tu vei explica","el/ea va explica","noi vom explica","voi veți explica","ei/ele vor explica"],
      conjunctivPrezent: ["eu (să) explic","tu (să) explici","el/ea (să) explice","noi (să) explicăm","voi (să) explicați","ei/ele (să) explice"],
      imperfect: ["eu explicam","tu explicai","el/ea explica","noi explicam","voi explicați","ei/ele explicau"],
      maiMultCaPerfectul: ["eu explicasem","tu explicaseși","el/ea explicase","noi explicaserăm","voi explicaserăți","ei/ele explicaseră"],
      participiu: "explicat", gerunziu: "explicând",
      conjunctivPerfect: ["eu să fi explicat","tu să fi explicat","el/ea să fi explicat","noi să fi explicat","voi să fi explicat","ei/ele să fi explicat"],
    }
  },
  {
    verb: "a spera", tr: "umut etmek", level: "A1-A2",
    tenses: {
      prezent: ["eu sper","tu speri","el/ea speră","noi sperăm","voi sperați","ei/ele speră"],
      perfectCompus: ["eu am sperat","tu ai sperat","el/ea a sperat","noi am sperat","voi ați sperat","ei/ele au sperat"],
      viitor: ["eu voi spera","tu vei spera","el/ea va spera","noi vom spera","voi veți spera","ei/ele vor spera"],
      conjunctivPrezent: ["eu (să) sper","tu (să) speri","el/ea (să) spere","noi (să) sperăm","voi (să) sperați","ei/ele (să) spere"],
      imperfect: ["eu speram","tu sperai","el/ea spera","noi speram","voi sperați","ei/ele sperau"],
      maiMultCaPerfectul: ["eu sperasem","tu speraseși","el/ea sperase","noi speraserăm","voi speraserăți","ei/ele speraseră"],
      participiu: "sperat", gerunziu: "sperând",
      conjunctivPerfect: ["eu să fi sperat","tu să fi sperat","el/ea să fi sperat","noi să fi sperat","voi să fi sperat","ei/ele să fi sperat"],
    }
  },
  {
    verb: "a dori", tr: "istemek/dilemek", level: "A1-A2",
    tenses: {
      prezent: ["eu doresc","tu dorești","el/ea dorește","noi dorim","voi doriți","ei/ele doresc"],
      perfectCompus: ["eu am dorit","tu ai dorit","el/ea a dorit","noi am dorit","voi ați dorit","ei/ele au dorit"],
      viitor: ["eu voi dori","tu vei dori","el/ea va dori","noi vom dori","voi veți dori","ei/ele vor dori"],
      conjunctivPrezent: ["eu (să) doresc","tu (să) dorești","el/ea (să) dorească","noi (să) dorim","voi (să) doriți","ei/ele (să) dorească"],
      imperfect: ["eu doream","tu doreai","el/ea dorea","noi doream","voi doreați","ei/ele doreau"],
      maiMultCaPerfectul: ["eu dorisem","tu doriseși","el/ea dorise","noi doriserăm","voi doriserăți","ei/ele doriseră"],
      participiu: "dorit", gerunziu: "dorind",
      conjunctivPerfect: ["eu să fi dorit","tu să fi dorit","el/ea să fi dorit","noi să fi dorit","voi să fi dorit","ei/ele să fi dorit"],
    }
  },
  {
    verb: "a odihni", tr: "dinlenmek", level: "A1-A2",
    tenses: {
      prezent: ["eu odihnesc","tu odihnești","el/ea odihnește","noi odihnim","voi odihniți","ei/ele odihnesc"],
      perfectCompus: ["eu am odihnit","tu ai odihnit","el/ea a odihnit","noi am odihnit","voi ați odihnit","ei/ele au odihnit"],
      viitor: ["eu voi odihni","tu vei odihni","el/ea va odihni","noi vom odihni","voi veți odihni","ei/ele vor odihni"],
      conjunctivPrezent: ["eu (să) odihnesc","tu (să) odihnești","el/ea (să) odihnească","noi (să) odihnim","voi (să) odihniți","ei/ele (să) odihnească"],
      imperfect: ["eu odihneam","tu odihneai","el/ea odihnea","noi odihneam","voi odihneați","ei/ele odihneau"],
      maiMultCaPerfectul: ["eu odihnisem","tu odihniseși","el/ea odihnise","noi odihniserăm","voi odihniserăți","ei/ele odihniseră"],
      participiu: "odihnit", gerunziu: "odihnind",
      conjunctivPerfect: ["eu să fi odihnit","tu să fi odihnit","el/ea să fi odihnit","noi să fi odihnit","voi să fi odihnit","ei/ele să fi odihnit"],
    }
  },
  {
    verb: "a reuși", tr: "başarılı olmak", level: "A1-A2",
    tenses: {
      prezent: ["eu reușesc","tu reușești","el/ea reușește","noi reușim","voi reușiți","ei/ele reușesc"],
      perfectCompus: ["eu am reușit","tu ai reușit","el/ea a reușit","noi am reușit","voi ați reușit","ei/ele au reușit"],
      viitor: ["eu voi reuși","tu vei reuși","el/ea va reuși","noi vom reuși","voi veți reuși","ei/ele vor reuși"],
      conjunctivPrezent: ["eu (să) reușesc","tu (să) reușești","el/ea (să) reușească","noi (să) reușim","voi (să) reușiți","ei/ele (să) reușească"],
      imperfect: ["eu reușeam","tu reușeai","el/ea reușea","noi reușeam","voi reușeați","ei/ele reușeau"],
      maiMultCaPerfectul: ["eu reușisem","tu reușiseși","el/ea reușise","noi reușiserăm","voi reușiserăți","ei/ele reușiseră"],
      participiu: "reușit", gerunziu: "reușind",
      conjunctivPerfect: ["eu să fi reușit","tu să fi reușit","el/ea să fi reușit","noi să fi reușit","voi să fi reușit","ei/ele să fi reușit"],
    }
  },
  {
    verb: "a juca", tr: "oyun oynamak", level: "A1-A2",
    tenses: {
      prezent: ["eu joc","tu joci","el/ea joacă","noi jucăm","voi jucați","ei/ele joacă"],
      perfectCompus: ["eu am jucat","tu ai jucat","el/ea a jucat","noi am jucat","voi ați jucat","ei/ele au jucat"],
      viitor: ["eu voi juca","tu vei juca","el/ea va juca","noi vom juca","voi veți juca","ei/ele vor juca"],
      conjunctivPrezent: ["eu (să) joc","tu (să) joci","el/ea (să) joace","noi (să) jucăm","voi (să) jucați","ei/ele (să) joace"],
      imperfect: ["eu jucam","tu jucai","el/ea juca","noi jucam","voi jucați","ei/ele jucau"],
      maiMultCaPerfectul: ["eu jucasem","tu jucaseși","el/ea jucase","noi jucaserăm","voi jucaserăți","ei/ele jucaseră"],
      participiu: "jucat", gerunziu: "jucând",
      conjunctivPerfect: ["eu să fi jucat","tu să fi jucat","el/ea să fi jucat","noi să fi jucat","voi să fi jucat","ei/ele să fi jucat"],
    }
  },
  {
    verb: "a ajunge", tr: "ulaşmak/varmak", level: "A1-A2",
    tenses: {
      prezent: ["eu ajung","tu ajungi","el/ea ajunge","noi ajungem","voi ajungeți","ei/ele ajung"],
      perfectCompus: ["eu am ajuns","tu ai ajuns","el/ea a ajuns","noi am ajuns","voi ați ajuns","ei/ele au ajuns"],
      viitor: ["eu voi ajunge","tu vei ajunge","el/ea va ajunge","noi vom ajunge","voi veți ajunge","ei/ele vor ajunge"],
      conjunctivPrezent: ["eu (să) ajung","tu (să) ajungi","el/ea (să) ajungă","noi (să) ajungem","voi (să) ajungeți","ei/ele (să) ajungă"],
      imperfect: ["eu ajungeam","tu ajungeai","el/ea ajungea","noi ajungeam","voi ajungeați","ei/ele ajungeau"],
      maiMultCaPerfectul: ["eu ajunsesem","tu ajunseseși","el/ea ajunsese","noi ajunseserăm","voi ajunseserăți","ei/ele ajunseseră"],
      participiu: "ajuns", gerunziu: "ajungând",
      conjunctivPerfect: ["eu să fi ajuns","tu să fi ajuns","el/ea să fi ajuns","noi să fi ajuns","voi să fi ajuns","ei/ele să fi ajuns"],
    }
  },
  {
    verb: "a vizita", tr: "ziyaret etmek", level: "A1-A2",
    tenses: {
      prezent: ["eu vizitez","tu vizitezi","el/ea vizitează","noi vizităm","voi vizitați","ei/ele vizitează"],
      perfectCompus: ["eu am vizitat","tu ai vizitat","el/ea a vizitat","noi am vizitat","voi ați vizitat","ei/ele au vizitat"],
      viitor: ["eu voi vizita","tu vei vizita","el/ea va vizita","noi vom vizita","voi veți vizita","ei/ele vor vizita"],
      conjunctivPrezent: ["eu (să) vizitez","tu (să) vizitezi","el/ea (să) viziteze","noi (să) vizităm","voi (să) vizitați","ei/ele (să) viziteze"],
      imperfect: ["eu vizitam","tu vizitai","el/ea vizita","noi vizitam","voi vizitați","ei/ele vizitau"],
      maiMultCaPerfectul: ["eu vizitasem","tu vizitaseși","el/ea vizitase","noi vizitaserăm","voi vizitaserăți","ei/ele vizitaseră"],
      participiu: "vizitat", gerunziu: "vizitând",
      conjunctivPerfect: ["eu să fi vizitat","tu să fi vizitat","el/ea să fi vizitat","noi să fi vizitat","voi să fi vizitat","ei/ele să fi vizitat"],
    }
  },
  {
    verb: "a plimba", tr: "yürüyüş/gezmek", level: "A1-A2",
    tenses: {
      prezent: ["eu plimb","tu plimbi","el/ea plimbă","noi plimbăm","voi plimbați","ei/ele plimbă"],
      perfectCompus: ["eu am plimbat","tu ai plimbat","el/ea a plimbat","noi am plimbat","voi ați plimbat","ei/ele au plimbat"],
      viitor: ["eu voi plimba","tu vei plimba","el/ea va plimba","noi vom plimba","voi veți plimba","ei/ele vor plimba"],
      conjunctivPrezent: ["eu (să) plimb","tu (să) plimbi","el/ea (să) plimbe","noi (să) plimbăm","voi (să) plimbați","ei/ele (să) plimbe"],
      imperfect: ["eu plimbam","tu plimbai","el/ea plimba","noi plimbam","voi plimbați","ei/ele plimbau"],
      maiMultCaPerfectul: ["eu plimbasem","tu plimbaseși","el/ea plimbase","noi plimbaserăm","voi plimbaserăți","ei/ele plimbaseră"],
      participiu: "plimbat", gerunziu: "plimbând",
      conjunctivPerfect: ["eu să fi plimbat","tu să fi plimbat","el/ea să fi plimbat","noi să fi plimbat","voi să fi plimbat","ei/ele să fi plimbat"],
    }
  },
  {
    verb: "a dansa", tr: "dans etmek", level: "A1-A2",
    tenses: {
      prezent: ["eu dansez","tu dansezi","el/ea dansează","noi dansăm","voi dansați","ei/ele dansează"],
      perfectCompus: ["eu am dansat","tu ai dansat","el/ea a dansat","noi am dansat","voi ați dansat","ei/ele au dansat"],
      viitor: ["eu voi dansa","tu vei dansa","el/ea va dansa","noi vom dansa","voi veți dansa","ei/ele vor dansa"],
      conjunctivPrezent: ["eu (să) dansez","tu (să) dansezi","el/ea (să) danseze","noi (să) dansăm","voi (să) dansați","ei/ele (să) danseze"],
      imperfect: ["eu dansam","tu dansai","el/ea dansa","noi dansam","voi dansați","ei/ele dansau"],
      maiMultCaPerfectul: ["eu dansasem","tu dansaseși","el/ea dansase","noi dansaserăm","voi dansaserăți","ei/ele dansaseră"],
      participiu: "dansat", gerunziu: "dansând",
      conjunctivPerfect: ["eu să fi dansat","tu să fi dansat","el/ea să fi dansat","noi să fi dansat","voi să fi dansat","ei/ele să fi dansat"],
    }
  },
  {
    verb: "a prefera", tr: "tercih etmek", level: "A1-A2",
    tenses: {
      prezent: ["eu prefer","tu preferi","el/ea preferă","noi preferăm","voi preferați","ei/ele preferă"],
      perfectCompus: ["eu am preferat","tu ai preferat","el/ea a preferat","noi am preferat","voi ați preferat","ei/ele au preferat"],
      viitor: ["eu voi prefera","tu vei prefera","el/ea va prefera","noi vom prefera","voi veți prefera","ei/ele vor prefera"],
      conjunctivPrezent: ["eu (să) prefer","tu (să) preferi","el/ea (să) prefere","noi (să) preferăm","voi (să) preferați","ei/ele (să) prefere"],
      imperfect: ["eu preferam","tu preferai","el/ea prefera","noi preferam","voi preferați","ei/ele preferau"],
      maiMultCaPerfectul: ["eu preferasem","tu preferaseși","el/ea preferase","noi preferaserăm","voi preferaserăți","ei/ele preferaseră"],
      participiu: "preferat", gerunziu: "preferând",
      conjunctivPerfect: ["eu să fi preferat","tu să fi preferat","el/ea să fi preferat","noi să fi preferat","voi să fi preferat","ei/ele să fi preferat"],
    }
  },
  {
    verb: "a plăcea", tr: "hoşlanmak", level: "A1-A2",
    tenses: {
      prezent: ["eu plac","tu placi","el/ea place","noi plăcem","voi plăceți","ei/ele plac"],
      perfectCompus: ["eu am plăcut","tu ai plăcut","el/ea a plăcut","noi am plăcut","voi ați plăcut","ei/ele au plăcut"],
      viitor: ["eu voi plăcea","tu vei plăcea","el/ea va plăcea","noi vom plăcea","voi veți plăcea","ei/ele vor plăcea"],
      conjunctivPrezent: ["eu (să) plac","tu (să) placi","el/ea (să) placă","noi (să) plăcem","voi (să) plăceți","ei/ele (să) placă"],
      imperfect: ["eu plăceam","tu plăceai","el/ea plăcea","noi plăceam","voi plăceați","ei/ele plăceau"],
      maiMultCaPerfectul: ["eu plăcusem","tu plăcuseși","el/ea plăcuse","noi plăcuserăm","voi plăcuserăți","ei/ele plăcuseră"],
      participiu: "plăcut", gerunziu: "plăcând",
      conjunctivPerfect: ["eu să fi plăcut","tu să fi plăcut","el/ea să fi plăcut","noi să fi plăcut","voi să fi plăcut","ei/ele să fi plăcut"],
    }
  },
  {
    verb: "a călători", tr: "seyahat etmek", level: "A1-A2",
    tenses: {
      prezent: ["eu călătoresc","tu călătorești","el/ea călătorește","noi călătorim","voi călătoriți","ei/ele călătoresc"],
      perfectCompus: ["eu am călătorit","tu ai călătorit","el/ea a călătorit","noi am călătorit","voi ați călătorit","ei/ele au călătorit"],
      viitor: ["eu voi călători","tu vei călători","el/ea va călători","noi vom călători","voi veți călători","ei/ele vor călători"],
      conjunctivPrezent: ["eu (să) călătoresc","tu (să) călătorești","el/ea (să) călătorească","noi (să) călătorim","voi (să) călătoriți","ei/ele (să) călătorească"],
      imperfect: ["eu călătoream","tu călătoreai","el/ea călătorea","noi călătoream","voi călătoreați","ei/ele călătoreau"],
      maiMultCaPerfectul: ["eu călătorisem","tu călătoriseși","el/ea călătorise","noi călătoriserăm","voi călătoriserăți","ei/ele călătoriseră"],
      participiu: "călătorit", gerunziu: "călătorind",
      conjunctivPerfect: ["eu să fi călătorit","tu să fi călătorit","el/ea să fi călătorit","noi să fi călătorit","voi să fi călătorit","ei/ele să fi călătorit"],
    }
  },
  {
    verb: "a descoperi", tr: "keşif etmek", level: "A1-A2",
    tenses: {
      prezent: ["eu descopăr","tu descoperi","el/ea descoperă","noi descoperim","voi descoperiți","ei/ele descoperă"],
      perfectCompus: ["eu am descoperit","tu ai descoperit","el/ea a descoperit","noi am descoperit","voi ați descoperit","ei/ele au descoperit"],
      viitor: ["eu voi descoperi","tu vei descoperi","el/ea va descoperi","noi vom descoperi","voi veți descoperi","ei/ele vor descoperi"],
      conjunctivPrezent: ["eu (să) descopăr","tu (să) descoperi","el/ea (să) descopere","noi (să) descoperim","voi (să) descoperiți","ei/ele (să) descopere"],
      imperfect: ["eu descopeream","tu descopereai","el/ea descoperea","noi descopeream","voi descopereați","ei/ele descopereau"],
      maiMultCaPerfectul: ["eu descoperisem","tu descoperiseși","el/ea descoperise","noi descoperiserăm","voi descoperiserăți","ei/ele descoperiseră"],
      participiu: "descoperit", gerunziu: "descoperind",
      conjunctivPerfect: ["eu să fi descoperit","tu să fi descoperit","el/ea să fi descoperit","noi să fi descoperit","voi să fi descoperit","ei/ele să fi descoperit"],
    }
  },
  {
    verb: "a găti", tr: "yemek yapmak", level: "A1-A2",
    tenses: {
      prezent: ["eu gătesc","tu gătești","el/ea gătește","noi gătim","voi gătiți","ei/ele gătesc"],
      perfectCompus: ["eu am gătit","tu ai gătit","el/ea a gătit","noi am gătit","voi ați gătit","ei/ele au gătit"],
      viitor: ["eu voi găti","tu vei găti","el/ea va găti","noi vom găti","voi veți găti","ei/ele vor găti"],
      conjunctivPrezent: ["eu (să) gătesc","tu (să) gătești","el/ea (să) gătească","noi (să) gătim","voi (să) gătiți","ei/ele (să) gătească"],
      imperfect: ["eu găteam","tu găteai","el/ea gătea","noi găteam","voi găteați","ei/ele găteau"],
      maiMultCaPerfectul: ["eu gătisem","tu gătiseși","el/ea gătise","noi gătiserăm","voi gătiserăți","ei/ele gătiseră"],
      participiu: "gătit", gerunziu: "gătind",
      conjunctivPerfect: ["eu să fi gătit","tu să fi gătit","el/ea să fi gătit","noi să fi gătit","voi să fi gătit","ei/ele să fi gătit"],
    }
  },
  {
    verb: "a vedea", tr: "görmek", level: "A1-A2",
    tenses: {
      prezent: ["eu văd","tu vezi","el/ea vede","noi vedem","voi vedeți","ei/ele văd"],
      perfectCompus: ["eu am văzut","tu ai văzut","el/ea a văzut","noi am văzut","voi ați văzut","ei/ele au văzut"],
      viitor: ["eu voi vedea","tu vei vedea","el/ea va vedea","noi vom vedea","voi veți vedea","ei/ele vor vedea"],
      conjunctivPrezent: ["eu (să) văd","tu (să) vezi","el/ea (să) vadă","noi (să) vedem","voi (să) vedeți","ei/ele (să) vadă"],
      imperfect: ["eu vedeam","tu vedeai","el/ea vedea","noi vedeam","voi vedeați","ei/ele vedeau"],
      maiMultCaPerfectul: ["eu văzusem","tu văzuseși","el/ea văzuse","noi văzuserăm","voi văzuserăți","ei/ele văzuseră"],
      participiu: "văzut", gerunziu: "văzând",
      conjunctivPerfect: ["eu să fi văzut","tu să fi văzut","el/ea să fi văzut","noi să fi văzut","voi să fi văzut","ei/ele să fi văzut"],
    }
  },
  {
    verb: "a înțelege", tr: "anlamak", level: "A1-A2",
    tenses: {
      prezent: ["eu înțeleg","tu înțelegi","el/ea înțelege","noi înțelegem","voi înțelegeți","ei/ele înțeleg"],
      perfectCompus: ["eu am înțeles","tu ai înțeles","el/ea a înțeles","noi am înțeles","voi ați înțeles","ei/ele au înțeles"],
      viitor: ["eu voi înțelege","tu vei înțelege","el/ea va înțelege","noi vom înțelege","voi veți înțelege","ei/ele vor înțelege"],
      conjunctivPrezent: ["eu (să) înțeleg","tu (să) înțelegi","el/ea (să) înțeleagă","noi (să) înțelegem","voi (să) înțelegeți","ei/ele (să) înțeleagă"],
      imperfect: ["eu înțelegeam","tu înțelegeai","el/ea înțelegea","noi înțelegeam","voi înțelegeați","ei/ele înțelegeau"],
      maiMultCaPerfectul: ["eu înțelesesem","tu înțeleseseși","el/ea înțelesese","noi înțeleseserăm","voi înțeleseserăți","ei/ele înțeleseseră"],
      participiu: "înțeles", gerunziu: "înțelegând",
      conjunctivPerfect: ["eu să fi înțeles","tu să fi înțeles","el/ea să fi înțeles","noi să fi înțeles","voi să fi înțeles","ei/ele să fi înțeles"],
    }
  },
  {
    verb: "a trimite", tr: "göndermek", level: "A1-A2",
    tenses: {
      prezent: ["eu trimit","tu trimiți","el/ea trimite","noi trimitem","voi trimiteți","ei/ele trimit"],
      perfectCompus: ["eu am trimis","tu ai trimis","el/ea a trimis","noi am trimis","voi ați trimis","ei/ele au trimis"],
      viitor: ["eu voi trimite","tu vei trimite","el/ea va trimite","noi vom trimite","voi veți trimite","ei/ele vor trimite"],
      conjunctivPrezent: ["eu (să) trimit","tu (să) trimiți","el/ea (să) trimită","noi (să) trimitem","voi (să) trimiteți","ei/ele (să) trimită"],
      imperfect: ["eu trimiteam","tu trimiteai","el/ea trimitea","noi trimiteam","voi trimiteați","ei/ele trimiteau"],
      maiMultCaPerfectul: ["eu trimisesem","tu trimiseseși","el/ea trimisese","noi trimiseserăm","voi trimiseserăți","ei/ele trimiseseră"],
      participiu: "trimis", gerunziu: "trimițând",
      conjunctivPerfect: ["eu să fi trimis","tu să fi trimis","el/ea să fi trimis","noi să fi trimis","voi să fi trimis","ei/ele să fi trimis"],
    }
  },
  {
    verb: "a da", tr: "vermek", level: "A1-A2",
    tenses: {
      prezent: ["eu dau","tu dai","el/ea dă","noi dăm","voi dați","ei/ele dau"],
      perfectCompus: ["eu am dat","tu ai dat","el/ea a dat","noi am dat","voi ați dat","ei/ele au dat"],
      viitor: ["eu voi da","tu vei da","el/ea va da","noi vom da","voi veți da","ei/ele vor da"],
      conjunctivPrezent: ["eu (să) dau","tu (să) dai","el/ea (să) dea","noi (să) dăm","voi (să) dați","ei/ele (să) dea"],
      imperfect: ["eu dădeam","tu dădeai","el/ea dădea","noi dădeam","voi dădeați","ei/ele dădeau"],
      maiMultCaPerfectul: ["eu dădusem","tu dăduseși","el/ea dăduse","noi dăduserăm","voi dăduserăți","ei/ele dăduseră"],
      participiu: "dat", gerunziu: "dând",
      conjunctivPerfect: ["eu să fi dat","tu să fi dat","el/ea să fi dat","noi să fi dat","voi să fi dat","ei/ele să fi dat"],
    }
  },
  {
    verb: "a sta", tr: "oturmak/kalmak", level: "A1-A2",
    tenses: {
      prezent: ["eu stau","tu stai","el/ea stă","noi stăm","voi stați","ei/ele stau"],
      perfectCompus: ["eu am stat","tu ai stat","el/ea a stat","noi am stat","voi ați stat","ei/ele au stat"],
      viitor: ["eu voi sta","tu vei sta","el/ea va sta","noi vom sta","voi veți sta","ei/ele vor sta"],
      conjunctivPrezent: ["eu (să) stau","tu (să) stai","el/ea (să) stea","noi (să) stăm","voi (să) stați","ei/ele (să) stea"],
      imperfect: ["eu stăteam","tu stăteai","el/ea stătea","noi stăteam","voi stăteați","ei/ele stăteau"],
      maiMultCaPerfectul: ["eu stătusem","tu stătuseși","el/ea stătuse","noi stătuserăm","voi stătuserăți","ei/ele stătuseră"],
      participiu: "stat", gerunziu: "stând",
      conjunctivPerfect: ["eu să fi stat","tu să fi stat","el/ea să fi stat","noi să fi stat","voi să fi stat","ei/ele să fi stat"],
    }
  },
  {
    verb: "a începe", tr: "başlamak", level: "A1-A2",
    tenses: {
      prezent: ["eu încep","tu începi","el/ea începe","noi începem","voi începeți","ei/ele încep"],
      perfectCompus: ["eu am început","tu ai început","el/ea a început","noi am început","voi ați început","ei/ele au început"],
      viitor: ["eu voi începe","tu vei începe","el/ea va începe","noi vom începe","voi veți începe","ei/ele vor începe"],
      conjunctivPrezent: ["eu (să) încep","tu (să) începi","el/ea (să) înceapă","noi (să) începem","voi (să) începeți","ei/ele (să) înceapă"],
      imperfect: ["eu începeam","tu începeai","el/ea începea","noi începeam","voi începeați","ei/ele începeau"],
      maiMultCaPerfectul: ["eu începusem","tu începuseși","el/ea începuse","noi începuserăm","voi începuserăți","ei/ele începuseră"],
      participiu: "început", gerunziu: "începând",
      conjunctivPerfect: ["eu să fi început","tu să fi început","el/ea să fi început","noi să fi început","voi să fi început","ei/ele să fi început"],
    }
  },
  {
    verb: "a primi", tr: "almak", level: "A1-A2",
    tenses: {
      prezent: ["eu primesc","tu primești","el/ea primește","noi primim","voi primiți","ei/ele primesc"],
      perfectCompus: ["eu am primit","tu ai primit","el/ea a primit","noi am primit","voi ați primit","ei/ele au primit"],
      viitor: ["eu voi primi","tu vei primi","el/ea va primi","noi vom primi","voi veți primi","ei/ele vor primi"],
      conjunctivPrezent: ["eu (să) primesc","tu (să) primești","el/ea (să) primească","noi (să) primim","voi (să) primiți","ei/ele (să) primească"],
      imperfect: ["eu primeam","tu primeai","el/ea primea","noi primeam","voi primeați","ei/ele primeau"],
      maiMultCaPerfectul: ["eu primisem","tu primiseși","el/ea primise","noi primiserăm","voi primiserăți","ei/ele primiseră"],
      participiu: "primit", gerunziu: "primind",
      conjunctivPerfect: ["eu să fi primit","tu să fi primit","el/ea să fi primit","noi să fi primit","voi să fi primit","ei/ele să fi primit"],
    }
  },
  {
    verb: "a decide", tr: "karar vermek", level: "A1-A2",
    tenses: {
      prezent: ["eu decid","tu decizi","el/ea decide","noi decidem","voi decideți","ei/ele decid"],
      perfectCompus: ["eu am decis","tu ai decis","el/ea a decis","noi am decis","voi ați decis","ei/ele au decis"],
      viitor: ["eu voi decide","tu vei decide","el/ea va decide","noi vom decide","voi veți decide","ei/ele vor decide"],
      conjunctivPrezent: ["eu (să) decid","tu (să) decizi","el/ea (să) decidă","noi (să) decidem","voi (să) decideți","ei/ele (să) decidă"],
      imperfect: ["eu decideam","tu decideai","el/ea decidea","noi decideam","voi decideați","ei/ele decideau"],
      maiMultCaPerfectul: ["eu decisesem","tu deciseseși","el/ea decisese","noi deciseserăm","voi deciseserăți","ei/ele deciseseră"],
      participiu: "decis", gerunziu: "decizând",
      conjunctivPerfect: ["eu să fi decis","tu să fi decis","el/ea să fi decis","noi să fi decis","voi să fi decis","ei/ele să fi decis"],
    }
  },
];

export const tenseLabels: Record<string, string> = {
  prezent: "Prezent (Şimdiki Zaman)",
  perfectCompus: "Perfect Compus (Geçmiş Zaman)",
  viitor: "Viitor (Gelecek Zaman)",
  conjunctivPrezent: "Conjunctiv Prezent (Dilek Kipi)",
  imperfect: "Imperfect (Hikâye Geçmiş)",
  maiMultCaPerfectul: "Mai Mult Ca Perfectul (Uzak Geçmiş)",
  participiu: "Participiu (Katılım)",
  gerunziu: "Gerunziu (Ulaç)",
  conjunctivPerfect: "Conjunctiv Perfect (Bağlaç Geçmiş)",
};
