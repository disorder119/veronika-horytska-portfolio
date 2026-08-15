# Veronika Horytska — Website

Statische Website, gehostet auf GitHub Pages. Kein Server, keine Datenbank, keine laufenden Kosten.

Zwei Teile:

- **`/` (index.html)** — die interaktive Galerie: Lupe, Finger-Mal-/Näh-Effekte, Sprachumschalter, Lightbox. Läuft clientseitig.
- **`/de/`, `/en/`, `/uk/`** — statische, ohne JavaScript vollständig lesbare Seiten für Suchmaschinen: Hero, alle Werke als echtes HTML, Über Veronika, Ausstellungen, Kontakt. `/de/` verlinkt zusätzlich jedes Werk auf eine eigene Seite unter `/de/werke/<slug>/`.

## Online stellen (GitHub Pages, kostenlos)

1. Auf github.com einen Account anlegen.
2. Neues Repository anlegen, auf **Public** stellen.
3. Den kompletten Inhalt dieses Ordners hochladen (alles außer dem Ordner `content/`,
   der ist nur die Quelle für die statischen Seiten, siehe unten).
4. `Settings` → `Pages` → unter *Branch* `main` und `/ (root)` wählen → `Save`.
5. Nach ein bis zwei Minuten ist die Seite erreichbar unter
   `https://DEINNAME.github.io/DEINREPO/`

### Eigene Domain

Wenn eine Domain gekauft ist (ca. 10–20 € pro Jahr):

1. Im Repository eine Datei `CNAME` anlegen, Inhalt: die Domain, z. B. `veronikahorytska.com`
2. Beim Domain-Anbieter diese DNS-Einträge setzen:
   - `A` auf `185.199.108.153`
   - `A` auf `185.199.109.153`
   - `A` auf `185.199.110.153`
   - `A` auf `185.199.111.153`
   - `CNAME` für `www` auf `DEINNAME.github.io`
3. In `Settings` → `Pages` die Domain eintragen und *Enforce HTTPS* aktivieren.
4. Alle `https://disorder119.github.io/veronika-horytska-portfolio` in den Dateien
   (canonical, hreflang, og:url, sitemap.xml, robots.txt) auf die neue Domain umstellen.

Hosting kostet dauerhaft nichts. Die Domain ist die einzige laufende Ausgabe.

## Neues Werk hinzufügen

1. Bild in `img/` legen, z. B. `img/neues-werk.webp`.
2. In `data.js` einen Eintrag ergänzen — nach dem Muster der vorhandenen. Neu (zusätzlich zu den ursprünglichen Feldern) sind `category`, `description` und `alt`, jeweils `{de, en, uk}`:

```
{"id":"neues-werk","slug":"neues-werk","title":"Neues Werk","year":"2026",
 "size":"80 × 60 cm","room":"acryl","sold":false,"img":"img/neues-werk.webp",
 "tech":{"de":"Acryl auf Leinwand","en":"Acrylic on canvas","ua":"Акрил на полотні"},
 "category":{"de":"Malerei","en":"Painting","uk":"Живопис"},
 "description":{"de":"…","en":"…","uk":"…"},
 "alt":{"de":"…","en":"…","uk":"…"}}
```

- `room` ist `acryl`, `oil` oder `textile`. `sold` ist `true`/`false`. `size` bei Textilarbeiten leer lassen: `""`.
- Beschreibungen sollen beschreiben, was auf dem Bild **sichtbar** ist (Farbigkeit, Material, Komposition) — keine erfundene Bedeutung.
- Auch `content/work-descriptions.json` und `content/works-full.json` entsprechend ergänzen (gleiche Struktur, siehe vorhandene Einträge) — daraus generieren sich die statischen Seiten.
3. Statische Seiten neu bauen (PowerShell, aus dem Projektordner):
   ```
   ./content/generate-work-pages.ps1
   ```
   und die drei Sprach-Hubs neu zusammensetzen (Grid-Fragmente aus `works-full.json` neu erzeugen, dann in `content/shells/{de,en,uk}.html` einsetzen — siehe Kommentare im Generator-Skript).
4. `sitemap.xml` um die neue Werk-URL ergänzen.
5. Alles committen/pushen. Die Seite aktualisiert sich nach etwa einer Minute von selbst.

## Struktur

```
index.html        interaktive Galerie (SPA)
support.js         Laufzeit für index.html, nicht ändern
data.js            alle Werke — hier wird primär gepflegt
img/               alle Bilder, Signatur, Favicon
_ds/               Stylesheet des Design-Systems (Organic)
assets/site.css    Stylesheet der statischen Seiten
assets/fonts/      lokal gehostete Schriftdateien (kein Google-Fonts-Request mehr)
de/, en/, uk/      statische, crawlbare Sprachseiten
de/werke/<slug>/   einzelne Werkseiten (aktuell nur Deutsch)
de/impressum/, de/datenschutz/   statische Rechtstexte
content/           Quelle für die statischen Seiten (JSON-Daten, Generator-Skript,
                   Shells, Grid-Fragmente) — wird nicht direkt ausgeliefert, kann
                   aber im Repo bleiben, um die Seiten später neu zu bauen
robots.txt, sitemap.xml, 404.html   SEO-Grunddateien
.nojekyll          nötig, damit GitHub Pages alle Dateien ausliefert
```

## Rechtliches — vor dem Online-Stellen ausfüllen

Im Impressum und in der Datenschutzerklärung stehen Platzhalter in eckigen Klammern.
Diese **müssen** durch die echte Anschrift ersetzt werden, sonst ist das Impressum
nicht rechtskonform. Betroffen: `index.html` (Impressum-/Datenschutz-Dialog) UND
`de/impressum/index.html` sowie `de/datenschutz/index.html` (gleicher Text, doppelt
gepflegt). Suche nach `[Straße und Hausnummer]`.

Was bereits eingebaut ist:

- **Impressum** und **Datenschutzerklärung**, sowohl im SPA-Dialog als auch als eigene,
  crawlbare Seiten unter `/de/impressum/` und `/de/datenschutz/`.
- **Keine Google Fonts mehr**: alle Schriften liegen lokal in `assets/fonts/`. Dadurch
  entfällt auch der frühere Cookie-/Schriften-Consent-Banner — es gibt nichts mehr,
  wofür eine Einwilligung nötig wäre.
- **Keine Cookies**, kein Tracking, keine Analyse. Gespeichert wird nur die Sprachwahl,
  lokal im Browser des Besuchers.

Wenn ein anderer Hoster als GitHub Pages genutzt wird, muss der Absatz *Hosting*
in der Datenschutzerklärung entsprechend angepasst werden.

## SEO

- `/de/`, `/en/`, `/uk/` sind die für Suchmaschinen bestimmten Hauptseiten (echtes HTML,
  kein JavaScript nötig). `/` (die interaktive Galerie) verweist per Canonical auf `/de/`.
- hreflang-Cluster (de/en/uk/x-default) ist auf allen drei Sprachseiten sowie auf `/` gesetzt.
- JSON-LD: `Person`, `WebSite`, `WebPage` auf den Hub-Seiten; `VisualArtwork` +
  `BreadcrumbList` auf jeder Werkseite.
- `sitemap.xml` wird aus `content/works-full.json` generiert (keine Werkseite vergessen,
  wenn neue Werke dazukommen).
- Bekannte offene Punkte: siehe Abschlussbericht des letzten SEO-Umbaus (Chat-Historie) —
  u. a. fehlen englische/ukrainische Einzelwerkseiten, Ausstellungen/CV, und Ausbildungs-/
  Geburtsdaten im „Über Veronika"-Text (bewusst nicht erfunden, als TODO markiert).

## Hinweise

- Die ukrainischen Texte sind eine Übersetzung und sollten gegengelesen werden.
- Impressum und Datenschutz sind auf Deutsch gehalten; das ist der rechtlich
  maßgebliche Wortlaut.
