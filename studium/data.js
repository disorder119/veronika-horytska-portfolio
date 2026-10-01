window.STUDY_DATA = {
  updated: "2026-10-01",
  home: { name: "Aschaffenburg", lat: 49.975, lon: 9.147 },
  cities: {
    berlin:{name:"Berlin",lat:52.52,lon:13.405},halle:{name:"Halle (Saale)",lat:51.482,lon:11.97},hamburg:{name:"Hamburg",lat:53.551,lon:9.994},hannover:{name:"Hannover",lat:52.375,lon:9.732},trier:{name:"Trier",lat:49.75,lon:6.637},pforzheim:{name:"Pforzheim",lat:48.892,lon:8.694},reutlingen:{name:"Reutlingen",lat:48.491,lon:9.204},stuttgart:{name:"Stuttgart",lat:48.776,lon:9.183},mainz:{name:"Mainz",lat:49.993,lon:8.247},nuernberg:{name:"Nürnberg",lat:49.452,lon:11.077},offenbach:{name:"Offenbach",lat:50.095,lon:8.777}
  },
  filters:[
    {id:"all",label:"Alle"},{id:"textil",label:"Textil"},{id:"mode",label:"Mode"},{id:"kostuem",label:"Kostüm / Bühne"},{id:"kunst",label:"Freie Kunst"},{id:"urgent",label:"Frist bald"},{id:"public",label:"Öffentlich / keine Studiengebühr"}
  ],
  programs:[
    {
      id:"burg-textile-kuenste",city:"halle",institution:"BURG Giebichenstein Kunsthochschule Halle",program:"Textile Künste",degree:"Diplom Bildende Künste · 10 Semester",categories:["textil","kunst","public"],fit:99,featured:true,
      deadlineStart:"2026-12-01",deadline:null,deadlineLabel:"ab 01.12.2026 · Enddatum 2027 noch nicht veröffentlicht",deadlineNote:"Die zentrale BURG-Seite nennt aktuell: Ende der Frist zwischen Mitte Februar und Anfang März 2027; das genaue Datum folgt.",
      language:"Deutsch C1 / TestDaF 4 / DSH 2 bis Studienbeginn",internship:"Kein fachspezifisches Vorpraktikum",portfolio:"Digitale Mappe; für Kunst nennt die BURG bis zu 20 Arbeiten. Keine starre Technikvorgabe.",
      why:"Das ist der direkteste Match: Textil ist hier freie Kunst. Weben, Stickerei, Färberei, Tufting, Objekt, Installation, Performance und Malerei dürfen zusammenkommen – genau die Logik deines Portfolios.",
      improve:"Zeige textile Prozesse noch stärker: Materialproben, Zwischenstände, Färbung/Oxidation, Knopfherstellung und die Beziehung von Körper, Objekt und Raum.",
      steps:["Ab 1. Dezember im BURG-Portal registrieren.","Studienwunschbegründung, Lebenslauf, Zeugnis/VPD und digitale Mappe hochladen.","Bei ausländischem Schulabschluss VPD über uni-assist frühzeitig beantragen (4–6 Wochen einplanen).","Bei Einladung an Aufnahmeprüfung und Gespräch teilnehmen."],
      sources:[{label:"Studiengang",url:"https://www.burg-halle.de/kunst/textile-kuenste"},{label:"Bewerbung 2027",url:"https://www.burg-halle.de/bewerben"}]
    },
    {
      id:"weissensee-textil",city:"berlin",institution:"weißensee kunsthochschule berlin",program:"BA Textil- und Material-Design",degree:"B.A. · 8 Semester · 240 ECTS",categories:["textil","public"],fit:97,featured:true,
      deadlineStart:"2026-11-01",deadline:"2027-01-05T12:00:00+01:00",deadlineLabel:"01.11.2026 – 05.01.2027 · 12:00",deadlineNote:"Zulassung nur zum Wintersemester 2027/28.",
      language:"Bewerbung: mind. A2 / Sprachkursnachweis; Studienstart: z. B. TestDaF 3, DSH 1, telc B2",internship:"Kein Pflicht-Vorpraktikum auf der aktuellen Textil-Bewerbungsseite genannt",portfolio:"Digitale Mappe mit eigenen künstlerisch/gestalterischen Arbeiten; keine zusätzliche Hausaufgabe für Textil.",
      why:"Sehr hoher Match für Material, Oberfläche, textile Objekte und künstlerische Recherche. Dein Portfolio wirkt bereits weniger wie klassische Fashion und stärker wie materialbasierte Autorinnenarbeit.",
      improve:"Ergänze systematische Materialexperimente: Reihen von Stoffmanipulationen, Färbungen, Stickerei/Weberei, Tests mit Funktion und Oberfläche.",
      steps:["Ab November CampusCore-Konto anlegen und Bewerbung wirklich erstellen.","Digitale Mappe, CV und Schulzeugnis/letztes Zeugnis hochladen.","International: bei Bewerbung mindestens A2 oder aktuellen Sprachkurs nachweisen.","Nach Vorauswahl: künstlerische Zugangsprüfung vor Ort + Gespräch.","Bei Bestehen: formale Originalunterlagen 1.–31. März einreichen."],
      sources:[{label:"Bewerbung Textil",url:"https://kh-berlin.de/studium/studienbewerbung/ba-textil-und-material-design"},{label:"Fristen",url:"https://kh-berlin.de/studium/studienbewerbung/"}]
    },
    {
      id:"burg-textildesign",city:"halle",institution:"BURG Giebichenstein Kunsthochschule Halle",program:"BA Mode- und Textildesign · Textildesign",degree:"B.A. · 8 Semester",categories:["textil","public"],fit:96,featured:true,
      deadlineStart:"2026-12-01",deadline:null,deadlineLabel:"ab 01.12.2026 · Enddatum 2027 noch offen",deadlineNote:"Aktuelle zentrale BURG-Seite: Fristende zwischen Mitte Februar und Anfang März 2027; ältere Unterseiten zeigen andere Standarddaten, deshalb hier bewusst kein erfundenes Datum.",
      language:"Deutsch C1 / TestDaF 4 / DSH 2 bis Studienbeginn",internship:"3 Monate fachbezogenes Vorpraktikum (Textilbereich; Details der aktuellen Praktikumsregel prüfen)",portfolio:"Digitale Mappe PDF; zentrale Bewerbungsseite ohne starre Technikvorgabe. Interesse und gestalterische Fähigkeiten sollen sichtbar werden.",
      why:"Ideal, wenn du vom künstlerischen Einzelstück stärker Richtung Textilgestaltung, Oberfläche, Serie und Materialentwicklung gehen willst. Die Hochschule hat Druck, Färberei, Jacquard, Weberei, Strickerei und Stickerei.",
      improve:"Baue textile Versuchsreihen und eine kleine Serie mit wiederholbaren Oberflächen/Strukturen auf – nicht nur fertige Kleidungsobjekte.",
      steps:["Ab 1. Dezember im BURG-Portal starten.","Mappe, CV, Studienwunschbegründung, Zeugnisse hochladen.","Bei ausländischem Schulabschluss VPD über uni-assist beantragen.","Vorpraktikum planen/nachweisen.","Aufnahmeprüfung und Gespräch absolvieren."],
      sources:[{label:"Textildesign",url:"https://www.burg-halle.de/design/textildesign"},{label:"Bewerbung 2027",url:"https://www.burg-halle.de/bewerben"}]
    },
    {
      id:"weissensee-mode",city:"berlin",institution:"weißensee kunsthochschule berlin",program:"BA Mode-Design",degree:"B.A. · 8 Semester · 240 ECTS",categories:["mode","textil","public"],fit:95,featured:true,
      deadlineStart:"2026-11-01",deadline:"2027-01-05T12:00:00+01:00",deadlineLabel:"01.11.2026 – 05.01.2027 · 12:00",deadlineNote:"Zusätzlich zur Mappe gibt es eine Hausaufgabe, die erst nach Anlegen der Bewerbung in CampusCore erscheint.",
      language:"Bewerbung: mind. A2 / Sprachkurs; Studienstart: B2 (z. B. TestDaF 3, DSH 1, telc B2)",internship:"6–8 Wochen berufliche Vorbildung/Vorpraktikum; Nachweis kann bis Studienstart folgen",portfolio:"Digitale Mappe + zusätzliche Hausaufgabe. Früh bewerben, damit genug Zeit für die Hausaufgabe bleibt.",
      why:"Deine fertigen Kleidungsobjekte und die Verbindung von Körper, Malerei und Material sind bereits stark. Weißensee ist interessant, weil Mode dort künstlerisch-konzeptionell gedacht wird.",
      improve:"Unbedingt Modeprozess ergänzen: Silhouettenreihen, Skizzen, Schnitt-/Toile-Fotos, Materialentscheidungen und 3–5 zusammengehörige Looks.",
      steps:["Am 1. November Bewerbung anlegen – nicht nur registrieren.","Hausaufgabe sofort aus CampusCore abrufen und bearbeiten.","Digitale Mappe, CV, Zeugnis und ggf. Praktikumsnachweis hochladen.","Nach Vorauswahl: Zugangsprüfung + Gespräch.","B2 und Vorpraktikum spätestens zum Studienstart nachweisen."],
      sources:[{label:"Bewerbung Mode",url:"https://kh-berlin.de/studium/studienbewerbung/ba-mode-design"},{label:"Fristen",url:"https://kh-berlin.de/studium/studienbewerbung/"}]
    },
    {
      id:"haw-kostuem",city:"hamburg",institution:"HAW Hamburg · Fakultät Design",program:"B.A. Kostümdesign",degree:"B.A. · 7 Semester",categories:["kostuem","textil","public","urgent"],fit:94,featured:true,
      deadlineStart:null,deadline:"2026-10-11T23:59:00+02:00",deadlineLabel:"Aufnahmeprüfung/Mappe bis 11.10.2026 · 23:59",deadlineNote:"Nach bestandener Aufnahmeprüfung folgt die eigentliche Studienplatzbewerbung 01.12.2026–15.01.2027 für SoSe 2027.",
      language:"International: Deutsch C1",internship:"Keine Vorpraxis erforderlich",portfolio:"Online-Mappe für die Aufnahmeprüfung; anschließend Hausaufgaben/Prüfungsteil 2. Kostüm profitiert von Figur, Dramaturgie, Material, Skizzen und Raumbezug.",
      why:"Sehr guter Match für deine getragenen Objekte und starke Figurenwelt. Kostüm erlaubt mehr Narration, Charakter und Experiment als klassisches industrielles Modedesign.",
      improve:"Ergänze 2–3 Figuren-/Charakterstudien: Wer trägt das Objekt, in welcher Situation, wie verändert sich Silhouette und Bewegung?",
      steps:["SOFORT: Online-Anmeldung + Mappe bis 11.10., 23:59 abschicken.","Bei Bestehen Teil 1: Hausaufgaben 02.–04.11.2026 bearbeiten/einreichen.","Ergebnis ab 20.11. abwarten.","Bei bestandener Aufnahmeprüfung 01.12.–15.01. formale Studienplatzbewerbung durchführen."],
      sources:[{label:"Fristen Aufnahmeprüfung",url:"https://bewerbung.design.haw-hamburg.de/studiengang/ba-moko/termine/"},{label:"Studiengang",url:"https://www.haw-hamburg.de/bachelor-mode-kostuem-textildesign/"}]
    },
    {
      id:"hannover-ske",city:"hannover",institution:"Hochschule Hannover · Fakultät III",program:"Szenografie – Kostüm – Experimentelle Gestaltung",degree:"B.A. · 8 Semester",categories:["kostuem","textil","kunst","public"],fit:94,featured:true,
      deadlineStart:"2026-11-15",deadline:"2027-03-15T23:59:00+01:00",deadlineLabel:"Künstlerische Bewerbung bis 15.03.2027",deadlineNote:"Portal startet etwa Mitte November. Praktische Aufnahmeprüfung findet im Mai statt.",
      language:"Deutsch auf Hochschulniveau; bei ausländischem Bildungsnachweis formale Prüfung über uni-assist zusätzlich beachten",internship:"6 Wochen Zugangspraktikum",portfolio:"Arbeitsproben + Antrag zur künstlerischen Aufnahmeprüfung; genaue Aufgaben werden studiengangsspezifisch veröffentlicht.",
      why:"Kostüm und Experimentelle Gestaltung treffen dein Portfolio besonders gut: Kleidung darf Objekt, Szene und freie künstlerische Arbeit sein.",
      improve:"Ergänze eine kleine szenische Serie: Figur + Raum + Kostüm + kurze Idee. Zeige, wie Material auf Bewegung und Inszenierung reagiert.",
      steps:["Ab Mitte November Aufnahmeportal öffnen und aktuelle Arbeitsproben-Aufgabe laden.","Arbeitsproben + Antrag bis 15. März einreichen.","6-wöchiges Zugangspraktikum planen.","Bei Einladung: eintägige praktische Prüfung im Mai.","Bei ausländischem Schulabschluss zusätzlich fristgerecht über uni-assist formal bewerben."],
      sources:[{label:"SKE",url:"https://f3.hs-hannover.de/studium/bachelor-studiengaenge/szenografie-kostuem-experimentelle-gestaltung-ske"},{label:"Aufnahmeverfahren",url:"https://f3.hs-hannover.de/studium/informationen-fuer-studieninteressierte/aufnahme-bewerbungs-und-auswahlverfahren"}]
    },
    {
      id:"burg-mode",city:"halle",institution:"BURG Giebichenstein Kunsthochschule Halle",program:"BA Mode- und Textildesign · Modedesign",degree:"B.A. · 8 Semester",categories:["mode","textil","public"],fit:93,featured:false,
      deadlineStart:"2026-12-01",deadline:null,deadlineLabel:"ab 01.12.2026 · Enddatum 2027 noch offen",deadlineNote:"Zentrale BURG-Seite veröffentlicht das exakte Enddatum erst noch (zwischen Mitte Februar und Anfang März 2027).",
      language:"Deutsch C1 / TestDaF 4 / DSH 2 bis Studienbeginn",internship:"3 Monate in Näherei, Schneiderei, Konfektion, Kostüm-/Theaterwerkstatt o. ä.",portfolio:"Digitale Mappe + Studienwunschbegründung; danach Aufnahmeprüfung und Gespräch.",
      why:"Künstlerisch orientiertes Modestudium mit starker Material- und Handschriftorientierung. Dein handwerklich-künstlerischer Ansatz passt besser als zu rein kommerziellen Fashion-Programmen.",
      improve:"Kollektion statt Einzelstück: mindestens eine kleine zusammenhängende Serie + Schnitt-/Konstruktionsentwicklung zeigen.",
      steps:["Ab 1. Dezember BURG-Bewerbung anlegen.","Mappe, Studienwunschbegründung, CV und formale Unterlagen hochladen.","3-monatiges Vorpraktikum planen bzw. Anerkennung vorhandener Erfahrung klären.","International ggf. VPD über uni-assist beantragen.","Aufnahmeprüfung + Gespräch."],
      sources:[{label:"Modedesign",url:"https://www.burg-halle.de/design/modedesign"},{label:"Bewerbung 2027",url:"https://www.burg-halle.de/bewerben"}]
    },
    {
      id:"abk-textil",city:"stuttgart",institution:"Staatliche Akademie der Bildenden Künste Stuttgart",program:"Diplom Textildesign",degree:"Diplom · 9 Semester",categories:["textil","public"],fit:93,featured:true,
      deadlineStart:null,deadline:null,deadlineLabel:"2027-Frist noch nicht veröffentlicht",deadlineNote:"Für WiSe 2026/27 war die Bewerbung 13.–30.04.2026. Für 2027 bitte die offizielle Seite beobachten; die Seite ist hier absichtlich nicht mit einer erfundenen Wiederholungsfrist versehen.",
      language:"Deutsch; Anforderungen für ausländische Zeugnisse auf der ABK-Seite prüfen",internship:"Kein Vorpraktikum in der aktuellen Übersicht für Textildesign",portfolio:"Etwa 20 digitale Arbeitsproben; freie Arbeiten, Zeichnung, Farbe, Naturstudien, Skizzen. Nach Vorauswahl folgt Hausaufgabe/Aufnahmeprüfung.",
      why:"Sehr guter Match für dein textiles Autorenprofil. Die Werkstätten umfassen Textildruck/Färberei, Weberei und Strickdesign; Malerei und freie Bildarbeit können in der Mappe sinnvoll mitlaufen.",
      improve:"Mehr textile Proben und experimentelle Flächen zeigen; einzelne Kleidungsstücke zusätzlich als Material-/Oberflächenforschung dokumentieren.",
      steps:["2027-Bewerbungsfenster auf offizieller Seite beobachten.","Ca. 20 digitale Arbeitsproben kuratieren.","Nach bestandener Vorauswahl Hausaufgabe bearbeiten.","Zur Aufnahmeprüfung antreten; danach formale Zulassung abschließen."],
      sources:[{label:"Textildesign Bewerbung",url:"https://www.abk-stuttgart.de/bewerbung/aufnahmeverfahren/textildesign-diplom/"},{label:"Allgemeines Aufnahmeverfahren",url:"https://www.abk-stuttgart.de/bewerbung/aufnahmeverfahren/"}]
    },
    {
      id:"udk-mode",city:"berlin",institution:"Universität der Künste Berlin",program:"B.A. Design · Modedesign",degree:"B.A. · 8 Semester · 240 LP",categories:["mode","public"],fit:91,featured:false,
      deadlineStart:"2027-01-15",deadline:"2027-02-15T23:59:00+01:00",deadlineLabel:"15.01.–15.02.2027",deadlineNote:"Aktuelle UdK-Bewerbungsseite nennt jährlich 15. Januar bis 15. Februar für das Wintersemester.",
      language:"Deutsch C1; Bewerbung international bereits mit B2 möglich, C1 für Zulassung",internship:"Mindestens 6 Wochen in handwerklichem Betrieb (z. B. Nähwerkstatt/Schneiderei), bis Immatrikulation nachreichbar",portfolio:"Erst formale Bewerbung + später Hausaufgabe; bei Einladung zur Zugangsprüfung ca. 20 eigene Arbeiten (max. DIN A2) mitbringen.",
      why:"Starker künstlerischer Modeweg. Deine Malerei ist hier ein Plus, weil die UdK ausdrücklich freie künstlerische Arbeiten und eine Hausaufgabe im Auswahlprozess nutzt.",
      improve:"Für den Modepfad zusätzliche Entwurfszeichnungen und klare Bekleidungs-/Silhouettenideen einbauen; nicht nur fertige textile Objekte.",
      steps:["15.01.–15.02. my.udk-Antrag stellen und 40 € Bewerbungsgebühr zahlen.","Formale PDFs + ggf. VPD, Sprache und Praktikumsnachweis einreichen.","Nach Frist Hausaufgabe bearbeiten und hochladen.","Bei Einladung: Zugangsprüfung + Mappe mit ca. 20 Arbeiten.","C1 und Praktikum spätestens zur Immatrikulation erfüllen."],
      sources:[{label:"Bewerbungsguide BA Design",url:"https://www.udk-berlin.de/bewerbung/bewerbungsguide/design-mode-und-produkt-bachelor/"},{label:"Modedesign FAQ",url:"https://www.udk-berlin.de/studium/modedesign/design-pathway-fashion-design/faq/"}]
    },
    {
      id:"trier-mode",city:"trier",institution:"Hochschule Trier · Campus Gestaltung",program:"B.A. Modedesign",degree:"B.A. · 7 Semester · 210 ECTS",categories:["mode","public","urgent"],fit:90,featured:true,
      deadlineStart:null,deadline:"2026-11-13T23:59:00+01:00",deadlineLabel:"Mappe bis 13.11.2026",deadlineNote:"Aktuelle Runde ist für Sommersemester 2027. Studienstart ist grundsätzlich Sommer- und Wintersemester möglich.",
      language:"Deutsch; formale Anforderungen für ausländische Bildungsnachweise separat über Hochschulportal prüfen",internship:"12 Wochen Vorpraktikum",portfolio:"15 selbst erstellte Arbeiten online (PDF oder JPEG) + Antragsformular; danach Prüfungsaufgabe und Online-Interview.",
      why:"Guter Mode-Match und aktuell noch realistisch erreichbar. Die vorhandene Kunst- und Textilarbeit liefert genügend Material für 15 Arbeiten – die Auswahl muss aber gezielt auf Mode umgebaut werden.",
      improve:"Für die 15 Arbeiten eine klare Dramaturgie bauen: 5 textile Hauptarbeiten, 3–4 Prozessseiten, 3 Malerei/Zeichnung, 2–3 neue Modeentwürfe.",
      steps:["Mappenberatung nutzen (20.10., 27.10. oder 03.11.).","15 Arbeiten digital kuratieren und bis 13.11. hochladen.","Antragsformular per E-Mail UND Post senden.","Nach Mappenpass Prüfungsaufgabe bearbeiten + Online-Interview.","Danach zusätzlich formale Hochschulbewerbung durchführen."],
      sources:[{label:"Bewerbung Bachelor",url:"https://www.hochschule-trier.de/gestaltung/studiengang-modedesign/studium-bewerbung/bewerben/bewerbung-bachelor-modedesign-1"},{label:"Studiengang",url:"https://www.hochschule-trier.de/gestaltung/studiengang-modedesign/studium-bewerbung/studienangebot/modedesign"}]
    },
    {
      id:"hannover-mode",city:"hannover",institution:"Hochschule Hannover · Fakultät III",program:"MODE: konzept.design.kommunikation",degree:"B.A. · 8 Semester",categories:["mode","public"],fit:89,featured:false,
      deadlineStart:"2026-11-15",deadline:"2027-03-15T23:59:00+01:00",deadlineLabel:"Künstlerische Bewerbung bis 15.03.2027",deadlineNote:"Aufnahmeportal ca. ab Mitte November; praktische Prüfung im Mai.",
      language:"Deutsch auf Hochschulniveau; ausländischer Bildungsnachweis zusätzlich über uni-assist",internship:"6 Wochen Zugangspraktikum",portfolio:"Keine klassische Mappe als erster Schritt: Motivationsskizze mit schriftlich/gestalterisch beantworteten Fragen; danach eintägige praktische Prüfung.",
      why:"Interessant, wenn du stärker in professionelle Kollektion, Modekommunikation und Praxis willst. Dein Portfolio hat die Handschrift, aber die industrielle/kollektionsbezogene Entwicklung ist noch weniger sichtbar.",
      improve:"Motivationsskizze mit klarer Haltung vorbereiten; parallel Mini-Kollektion, Modeillustration und nachvollziehbaren Designprozess erstellen.",
      steps:["Ab Mitte November aktuelle Motivationsskizzen-Aufgabe laden.","Motivationsskizze + Antrag bis 15.03. einreichen.","6-wöchiges Praktikum organisieren.","Bei Einladung: eintägige praktische Prüfung im Mai.","Bei ausländischem Bildungsnachweis formale uni-assist-Frist zusätzlich beachten."],
      sources:[{label:"Studiengang & Bewerbung",url:"https://f3.hs-hannover.de/studium/bachelor-studiengaenge/mode-konzeptdesignkommunikation-bmo"},{label:"Aufnahmeverfahren",url:"https://f3.hs-hannover.de/studium/informationen-fuer-studieninteressierte/aufnahme-bewerbungs-und-auswahlverfahren"}]
    },
    {
      id:"haw-mode",city:"hamburg",institution:"HAW Hamburg · Fakultät Design",program:"B.A. Modedesign",degree:"B.A. · 7 Semester",categories:["mode","textil","public","urgent"],fit:89,featured:false,
      deadlineStart:null,deadline:"2026-10-11T23:59:00+02:00",deadlineLabel:"Aufnahmeprüfung/Mappe bis 11.10.2026 · 23:59",deadlineNote:"Textildesign wird für neue Studierende seit 2026 nicht mehr angeboten; relevant sind Mode oder Kostüm. Formale Studienplatzbewerbung nach bestandener Aufnahmeprüfung 01.12.–15.01.",
      language:"International: Deutsch C1",internship:"Keine Vorpraxis erforderlich",portfolio:"Online-Mappe für Aufnahmeprüfung; danach Hausaufgabe/Prüfungsteil 2. Studium umfasst u. a. Schnitt, Fertigung, Textildruck, Weberei, Strick, Färberei und CAD.",
      why:"Deine textile Experimentierfreude passt. Für reines Modedesign muss die Mappe aber stärker zeigen, dass du Kleidung als entwickelte Kollektion und nicht nur als Einzelkunstwerk denken kannst.",
      improve:"Schnell 3–5 Modeentwürfe + Skizzenprozess und ein klar kuratiertes PDF ergänzen; die bestehende textile Arbeit bleibt das Zentrum.",
      steps:["SOFORT bis 11.10.: Aufnahmeprüfung anmelden + Mappe einreichen.","Bei Bestehen Teil 1: Aufgaben 02.–04.11. bearbeiten.","Bei Bestehen: 01.12.–15.01. Studienplatz formal beantragen.","International C1-Nachweis rechtzeitig sicherstellen."],
      sources:[{label:"Fristen Aufnahmeprüfung",url:"https://bewerbung.design.haw-hamburg.de/studiengang/ba-moko/termine/"},{label:"Studiengang",url:"https://www.haw-hamburg.de/bachelor-mode-kostuem-textildesign/"}]
    },
    {
      id:"reutlingen-ftd",city:"reutlingen",institution:"Hochschule Reutlingen · TEXOVERSUM",program:"B.A. Fashion and Textile Design",degree:"B.A. · 7 Semester · 210 ECTS",categories:["mode","textil","public"],fit:88,featured:false,
      deadlineStart:null,deadline:"2027-06-15T23:59:00+02:00",deadlineLabel:"Mappe + Online-Bewerbung bis 15.06.2027",deadlineNote:"Zulassung nur zum Wintersemester; Auswahl über Mappe + ganztägige künstlerische Eignungsprüfung.",
      language:"Deutsch; formale Sprach-/Zeugnisanforderungen für internationale Bewerbungen separat prüfen",internship:"Kein Vorpraktikum auf der Studiengangsseite als Zulassungspunkt genannt",portfolio:"15–25 selbst gefertigte Originale; Zeichnung, Malerei, Mischtechnik; digitale Arbeiten als Ausdruck/Fotos möglich + Inhaltsverzeichnis + Motivation.",
      why:"Die Kombination Fashion + Textile passt gut: dein Portfolio zeigt Materialgefühl und Bildkompetenz. Das Programm verlangt aber klassischere originale Arbeitsproben – deine Malerei wird hier besonders wertvoll.",
      improve:"Originalzeichnungen/Skizzen und materialbezogene Studien bewusst mit aufnehmen; für Fashion einige konkrete Kleidungsentwürfe ergänzen.",
      steps:["15–25 Originalarbeiten auswählen/ergänzen.","Motivationsschreiben + Inhaltsverzeichnis vorbereiten.","Mappe und Online-Bewerbung bis 15.06. einreichen.","Bei Einladung ganztägige Eignungsprüfung + Interview absolvieren."],
      sources:[{label:"Fashion & Textile Design",url:"https://www.tex.reutlingen-university.de/studium/bachelor/fashion-and-textile-design"},{label:"Fristen",url:"https://www.tex.reutlingen-university.de/studium/bewerbungsfristen"}]
    },
    {
      id:"weissensee-kostuem",city:"berlin",institution:"weißensee kunsthochschule berlin",program:"Diplom Bühnen- und Kostümbild",degree:"Diplom · 10 Semester · 300 ECTS",categories:["kostuem","kunst","public"],fit:88,featured:false,
      deadlineStart:"2026-11-01",deadline:"2027-01-05T12:00:00+01:00",deadlineLabel:"01.11.2026 – 05.01.2027 · 12:00",deadlineNote:"Digitale Mappe; nach Vorauswahl künstlerische Zugangsprüfung mit Aufgaben und Gespräch.",
      language:"International: C1 (z. B. TestDaF 4, DSH 2, telc C1 Hochschule)",internship:"Kein Mode-Vorpraktikum auf dieser Bewerbung genannt",portfolio:"Digitale Mappe; keine zusätzliche Mode-Hausaufgabe. Aufnahmeprüfung vor Ort nach Vorauswahl.",
      why:"Deine Kopfbedeckungen und figurenhaften Kleidungsobjekte haben bereits kostümbildnerische Qualität. Der stärkere Bühnen-/Raumbezug fehlt noch, lässt sich aber gezielt ergänzen.",
      improve:"2–3 szenische Konzepte: Figur, Kostüm, Raum, Licht und kurze dramaturgische Idee. Nicht nur Objektfoto, sondern Situation zeigen.",
      steps:["Ab 01.11. Bewerbung in CampusCore anlegen.","Digitale Mappe, CV und Zeugnisse hochladen.","Bei internationaler Bewerbung zunächst mindestens A2/Sprachkurs, C1 spätestens zum Studienstart.","Bei Einladung: Zugangsprüfung + Gespräch.","Nach Bestehen Originalunterlagen 1.–31. März einreichen."],
      sources:[{label:"Bühnen- und Kostümbild",url:"https://kh-berlin.de/studium/studienbewerbung/buehnen-und-kostuembild"},{label:"Fristen",url:"https://kh-berlin.de/studium/studienbewerbung/"}]
    },
    {
      id:"pforzheim-mode",city:"pforzheim",institution:"Hochschule Pforzheim · DesignPF",program:"B.A. Mode",degree:"B.A.",categories:["mode","public"],fit:85,featured:false,
      deadlineStart:"2027-03-15",deadline:"2027-03-30T23:59:00+02:00",deadlineLabel:"International: 15.–30.03.2027 · Deutschland: 15.–30.04.2027",deadlineNote:"Die internationalen Fristen liegen jeweils einen Monat früher. Entscheidend ist, wo die Hochschulzugangsberechtigung erworben wurde.",
      language:"International: anerkannter Deutschnachweis; aktuelle Detailanforderungen auf offizieller Seite prüfen",internship:"3 Monate extern ODER nach Zulassung ggf. 3-wöchiger Hochschulkurs (begrenzte Plätze)",portfolio:"Eine PDF: 10–15 allgemeine handgefertigte künstlerische Arbeiten + 5 studiengangsbezogene Arbeiten, dazu CV und Motivation; max. 40 MB.",
      why:"Die vorhandene Malerei erfüllt einen großen Teil der allgemeinen Kunstmappe bereits gut. Für den fachspezifischen Modeteil braucht es gezieltere Entwurfszeichnungen und Fashion-Prozess.",
      improve:"Mindestens 5 echte Modearbeiten speziell für Pforzheim erstellen: Illustration, Silhouette, Material, Schnittidee, ggf. Fotos der textilen Objekte mit Entwurfsbezug.",
      steps:["Prüfen, ob internationale oder deutsche Bewerbungsfrist gilt.","10–15 allgemeine + 5 Modearbeiten als eine PDF (max. 40 MB) bauen.","Bewerbungsportal UND Mappenportal vollständig nutzen.","Nach Vorauswahl Aufnahmeprüfung + Fachgespräch.","Vorpraktikum bis Immatrikulation organisieren."],
      sources:[{label:"BA Bewerbung",url:"https://designpf.hs-pforzheim.de/bewerben_fuer_ba"},{label:"Mappenportal",url:"https://designpf.hs-pforzheim.de/bewerben_ba/mappenportal_1"},{label:"BA Mode",url:"https://designpf.hs-pforzheim.de/ba_m"}]
    },
    {
      id:"abk-kostuem",city:"stuttgart",institution:"Staatliche Akademie der Bildenden Künste Stuttgart",program:"Diplom Bühnen- und Kostümbild",degree:"Diplom · 10 Semester",categories:["kostuem","kunst","public"],fit:85,featured:false,
      deadlineStart:null,deadline:null,deadlineLabel:"2027-Frist noch nicht veröffentlicht",deadlineNote:"Für WiSe 2026/27 galt 13.–30.04.2026. 2027-Termine bitte auf der offiziellen Aufnahme-Seite prüfen.",
      language:"Deutsch; ausländische Zeugnisse werden im Bewerbungsprozess geprüft",internship:"Kein Vorpraktikum in der zentralen Übersicht für Bühnen- und Kostümbild",portfolio:"Ca. 20 bildnerische Arbeitsproben; nach Vorauswahl Hausaufgabe und Aufnahmeprüfung.",
      why:"Guter künstlerischer Kostümweg, besonders wenn du die tragbaren Objekte stärker als Figuren-/Raumkonzepte entwickelst.",
      improve:"Raum- und Szenendenken ergänzen: kleine Bühnenmodelle/Collagen, Figurenkonstellationen, Kostümvarianten und dramaturgische Notizen.",
      steps:["2027-Frist auf offizieller Seite beobachten.","Ca. 20 Arbeitsproben digital kuratieren.","Nach Vorauswahl Hausaufgabe bearbeiten.","Aufnahmeprüfung absolvieren; formale Unterlagen parallel vorbereiten."],
      sources:[{label:"Bühnen- und Kostümbild",url:"https://www.abk-stuttgart.de/bewerbung/aufnahmeverfahren/buehnenbild-diplom/"},{label:"Aufnahmeverfahren",url:"https://www.abk-stuttgart.de/bewerbung/aufnahmeverfahren/"}]
    },
    {
      id:"offenbach-kunst",city:"offenbach",institution:"Hochschule für Gestaltung Offenbach",program:"B.F.A. Kunst · mit Bühnenbild/Szenischem Raum, Malerei u. a.",degree:"B.F.A. · 8 Semester · 240 CP",categories:["kunst","kostuem","public"],fit:85,featured:true,
      deadlineStart:"2027-04-01",deadline:"2027-04-15T23:59:00+02:00",deadlineLabel:"01.–15.04.2027",deadlineNote:"Sehr nah an Aschaffenburg. Der Fachbereich Kunst umfasst u. a. Bühnenbild/Szenischer Raum und Malerei; es ist kein klassischer Modedesign-Studiengang.",
      language:"Deutsch/Englisch im Aufnahmeverfahren möglich; aktuelle Sprachsatzung für Immatrikulation prüfen",internship:"Kein Vorpraktikum als Kernpunkt des Kunst-BFA genannt",portfolio:"Künstlerisches Aufnahmeverfahren; regelmäßige Studien- und Mappenberatung mittwochs um 12 Uhr (online/Präsenz wechselnd).",
      why:"Praktischer Nahbereich-Backup: freie, intermediale Kunst mit Bühnenbild/Szenischem Raum. Deine textile Arbeit kann hier als Kunst funktionieren, ohne in klassische Modeanforderungen gezwungen zu werden.",
      improve:"Mappe stärker als zusammenhängende künstlerische Praxis formulieren: Textil, Körper, Malerei und Objekt unter einer klaren Fragestellung verbinden.",
      steps:["Vorher Mappenberatung mittwochs nutzen.","Bewerbungsunterlagen für 01.–15.04.2027 vorbereiten.","Künstlerisches Aufnahmeverfahren absolvieren.","Formale Zulassung/Sprachnachweis nach Vorgabe des Studierendenbüros abschließen."],
      sources:[{label:"Bewerbung & Beratung",url:"https://hfg-offenbach.de/de/pages/bewerben-an-der-hfg"},{label:"BFA Kunst",url:"https://www.hfg-offenbach.de/de/pages/bachelor-und-masterstudium-kunst"}]
    },
    {
      id:"mainz-kunst",city:"mainz",institution:"Kunsthochschule Mainz",program:"Freie Bildende Kunst",degree:"Diplom",categories:["kunst","public","urgent"],fit:84,featured:false,
      deadlineStart:null,deadline:"2026-10-31T23:59:00+01:00",deadlineLabel:"Sommersemester 2027: bis 31.10.2026",deadlineNote:"Nach bestandener Eignungsprüfung ist zusätzlich die Studienplatzbewerbung an der JGU Mainz nötig (für Sommersemester bis 15.01.).",
      language:"Deutsch; internationale Anforderungen separat auf der Hochschulseite prüfen",internship:"Kein Vorpraktikum als Kernvoraussetzung genannt",portfolio:"Eignungsprüfung in zwei Teilen: Mappenprüfung + etwa 15-minütiges Prüfungsgespräch.",
      why:"Nur als Malerei-/freie-Kunst-Nebenweg. Deine Bildsprache ist stark genug für eine ernsthafte Kunstbewerbung; textile Arbeiten können als Erweiterung der Praxis mit hinein.",
      improve:"Für eine freie Kunstmappe weniger 'Design-Dokumentation', mehr künstlerische Entwicklung, Serien, Skizzen und eigenständige Fragestellungen zeigen.",
      steps:["Mappe + Bewerbung bis 31.10.2026 einreichen.","Bei Einladung Prüfungsgespräch absolvieren.","Nach bestandener Eignung zusätzlich bis 15.01. an der JGU Mainz formal bewerben."],
      sources:[{label:"Bewerben",url:"https://kunsthochschule-mainz.de/bewerbung/bewerben/"}]
    },
    {
      id:"weissensee-malerei",city:"berlin",institution:"weißensee kunsthochschule berlin",program:"Diplom Malerei",degree:"Diplom · 10 Semester · 300 ECTS",categories:["kunst","public"],fit:83,featured:false,
      deadlineStart:"2026-11-01",deadline:"2027-01-05T12:00:00+01:00",deadlineLabel:"01.11.2026 – 05.01.2027 · 12:00",deadlineNote:"Malerei ist hier bewusst Nebenpfad; du kannst dich an weißensee mehrfach bewerben.",
      language:"International: B2 bis Studienbeginn (z. B. TestDaF 3, DSH 1, telc B2)",internship:"Kein Vorpraktikum",portfolio:"Digitale künstlerische Mappe; danach Zugangsprüfung + Gespräch.",
      why:"Deine Acryl- und Ölarbeiten haben eine konsistente figurative Sprache. Sinnvoll, wenn du freie Kunst ernsthaft parallel zu Textil verfolgen möchtest.",
      improve:"Malerei als Serien denken und Skizzen/Entwicklung zeigen; textile Arbeiten nur dann einbauen, wenn sie die gleiche künstlerische Fragestellung tragen.",
      steps:["Ab 01.11. Bewerbung in CampusCore anlegen.","Digitale Mappe + CV/Zeugnisse hochladen.","Bei Einladung Zugangsprüfung + Gespräch.","Nach Bestehen formale Unterlagen im März einreichen."],
      sources:[{label:"Malerei",url:"https://kh-berlin.de/studium/studienbewerbung/malerei"},{label:"Fristen",url:"https://kh-berlin.de/studium/studienbewerbung/"}]
    },
    {
      id:"nuernberg-kunst",city:"nuernberg",institution:"Akademie der Bildenden Künste Nürnberg",program:"Bildende Kunst · Schwerpunkt Freie Kunst",degree:"Künstlerischer Studiengang",categories:["kunst","public"],fit:82,featured:false,
      deadlineStart:"2027-03-15",deadline:"2027-04-15T23:59:00+02:00",deadlineLabel:"15.03.–15.04.2027",deadlineNote:"Studienbeginn im ersten Fachsemester grundsätzlich nur zum Wintersemester.",
      language:"Deutsch; internationale Formalien auf Bewerbungsseite prüfen",internship:"Kein Vorpraktikum für Freie Kunst genannt",portfolio:"Künstlerische Bewerbung über Online-Portal; Mappenberatung wird angeboten.",
      why:"Freie-Kunst-Option, bei der textile Arbeiten und Malerei gemeinsam als künstlerische Praxis auftreten können. Weniger passend, wenn dein Ziel eindeutig professionelle Mode ist.",
      improve:"Konzeptuelle Klammer über Malerei und Textil herausarbeiten; keine reine Produkt-/Kleidungspräsentation.",
      steps:["Online-Studieninfotag/Mappenberatung im Herbst nutzen.","Bewerbung 15.03.–15.04. über Online-Portal einreichen.","Aktuelle Mappenanforderungen vor Abgabe noch einmal prüfen.","Aufnahmeverfahren absolvieren."],
      sources:[{label:"Freie Kunst",url:"https://adbk-nuernberg.de/bewerbung/studienangebot-und-beratung/freie-kunst/"},{label:"Bewerbungstermine",url:"https://adbk-nuernberg.de/bewerbung/bewerbungstermine/"}]
    }
  ],
  tasks:[
    {id:"haw",date:"11.10.",title:"HAW Hamburg entscheiden und ggf. sofort Mappe abschicken",text:"Nur 10 Tage ab Datenstand. Wenn Hamburg ernsthaft infrage kommt, ist das die erste Priorität."},
    {id:"trier-advice",date:"20.10.",title:"Trier Mappenberatung buchen",text:"Telefonisch 20.10.; alternativ 27.10. oder 03.11. in Präsenz. Vor der Abgabe Feedback holen."},
    {id:"mainz",date:"31.10.",title:"Mainz nur bei echtem Interesse an Freier Kunst abschicken",text:"Malerei-Nebenweg; nicht vor Textil/Mode priorisieren."},
    {id:"weissensee-open",date:"01.11.",title:"weißensee Bewerbungen sofort anlegen",text:"Textil + Mode + ggf. Bühnen/Kostüm. Bei Mode erscheint erst danach die Hausaufgabe."},
    {id:"trier",date:"13.11.",title:"Trier: 15 Arbeiten + Antrag vollständig einreichen",text:"Antrag laut Hochschule vorab per E-Mail und zusätzlich per Post."},
    {id:"vpd",date:"NOV",title:"Ausländischen Schulabschluss prüfen / VPD rechtzeitig starten",text:"Besonders BURG und andere Hochschulen mit uni-assist nicht bis kurz vor Frist aufschieben."},
    {id:"burg",date:"01.12.",title:"BURG öffnen: Textile Künste + Textildesign + ggf. Mode",text:"Drei sehr passende Wege an einer Hochschule. Exaktes Fristende 2027 wird noch veröffentlicht."},
    {id:"weissensee-deadline",date:"05.01.",title:"weißensee komplett fertig – nicht am letzten Vormittag",text:"Offizielle Ausschlussfrist 05.01.2027 um 12:00 Uhr."},
    {id:"portfolio-process",date:"JAN",title:"Portfolio-Versionen trennen",text:"Eigene Versionen für Textilkunst, Textildesign, Mode/Kostüm und Freie Kunst erstellen – nicht eine Mappe überall hochladen."},
    {id:"hannover",date:"15.03.",title:"Hannover SKE + Mode einreichen",text:"SKE ist der stärkere Match; Mode als zweite Option."}
  ],
  help:[
    {date:"20.10.2026 · 12:00",title:"Hochschule Trier · Mappenberatung",text:"Telefonischer Termin mit Prof. Bettina Maiburg; Anmeldung per E-Mail beim Mode-Sekretariat.",url:"https://www.hochschule-trier.de/gestaltung/studiengang-modedesign/studium-bewerbung/bewerben/bewerbung-bachelor-modedesign-1"},
    {date:"27.10.2026 · 15:15",title:"Hochschule Trier · Mappenberatung vor Ort",text:"Präsenztermin, Raum Q 106. Anmeldung per E-Mail.",url:"https://www.hochschule-trier.de/gestaltung/studiengang-modedesign/studium-bewerbung/bewerben/bewerbung-bachelor-modedesign-1"},
    {date:"03.11.2026 · 11:00",title:"Hochschule Trier · Mappenberatung vor Ort",text:"Präsenztermin mit Prof. Christian Bruns, Raum Q 106.",url:"https://www.hochschule-trier.de/gestaltung/studiengang-modedesign/studium-bewerbung/bewerben/bewerbung-bachelor-modedesign-1"},
    {date:"14.11.2026 · 11:00",title:"AdBK Nürnberg · Online-Studieninfotag",text:"Infos zu Studienangebot, Werkstätten, Bewerbungsprozess und offene Fragerunde. Keine Anmeldung nötig.",url:"https://adbk-nuernberg.de/termine/online-studieninfotag/"},
    {date:"26.11.2026",title:"AdBK Nürnberg · Mappenberatung",text:"Mappenberatungen auf dem Campus in den Klassen.",url:"https://adbk-nuernberg.de/bewerbung/studienangebot-und-beratung/"},
    {date:"dienstags · 12–13 Uhr",title:"weißensee · virtuelle Bewerbungsberatung",text:"Während des Bewerbungszeitraums offene virtuelle Fragestunde der Studienberatung.",url:"https://kh-berlin.de/studium/studienbewerbung/"},
    {date:"mittwochs · 12 Uhr",title:"HfG Offenbach · Kunst-Mappenberatung",text:"Durchgehend von Mitte Oktober bis Anfang Juli, wechselnd online oder vor Ort.",url:"https://hfg-offenbach.de/de/pages/bewerben-an-der-hfg"},
    {date:"Januar · Termin folgt",title:"BURG · Studieninformationstag",text:"Die Studienrichtungen stellen sich vor; bei Textile Künste gibt es typischerweise direkte Mappenberatung.",url:"https://www.burg-halle.de/infotag/"}
  ]
};
