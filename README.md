# Veronika Horytska — Website

Statische Website, gehostet auf GitHub Pages. Kein Server, keine Datenbank, keine laufenden Kosten
außer der Domain selbst.

**Live unter:** `veronikahorytska.de` (eigene Domain, siehe „Eigene Domain" unten für den DNS-Stand).

Zwei Teile:

- **`/` (index.html)** — die interaktive Galerie: Lupe, Finger-Mal-/Näh-Effekte, Sprachumschalter, Lightbox. Läuft clientseitig, bewusst `noindex` (kein eigener, ohne JS lesbarer SEO-Inhalt; die Sprachseiten sind die Suchmaschinen-Version).
- **`/de/`, `/en/`, `/uk/`** — statische, ohne JavaScript vollständig lesbare Seiten für Suchmaschinen: Hero, alle Werke als echtes HTML, Über Veronika, Kontakt. Jedes Werk hat außerdem eine eigene, indexierbare Seite in allen drei Sprachen: `/de/werke/<slug>/`, `/en/works/<slug>/`, `/uk/works/<slug>/` (gleicher Slug in allen drei Sprachen, sauber per hreflang verknüpft).
- Ein „Ausstellungen"-Abschnitt existiert bewusst (noch) nicht öffentlich — es liegen keine echten Daten vor, ein sichtbarer Platzhalter wäre schlechter als gar keiner. Siehe Kommentar in `content/shells/*.html`.

## Online stellen (GitHub Pages, kostenlos)

1. Auf github.com einen Account anlegen.
2. Neues Repository anlegen, auf **Public** stellen.
3. Den kompletten Inhalt dieses Ordners hochladen (alles außer dem Ordner `content/`,
   der ist nur die Quelle für die statischen Seiten, siehe unten).
4. `Settings` → `Pages` → unter *Branch* `main` und `/ (root)` wählen → `Save`.
5. Nach ein bis zwei Minuten ist die Seite erreichbar unter
   `https://DEINNAME.github.io/DEINREPO/`

### Eigene Domain

**Aktueller Stand:** `veronikahorytska.de` ist gekauft (Porkbun) und als `CNAME`-Datei im Repo
hinterlegt. Alle Canonical-/hreflang-/OG-/JSON-LD-URLs sowie `sitemap.xml` und `robots.txt` zeigen
bereits auf diese Domain. Was noch fehlt: die DNS-Einträge unten müssen bei Porkbun tatsächlich
gesetzt werden, danach in `Settings` → `Pages` die Domain bestätigen und „Enforce HTTPS" aktivieren
(erscheint erst, sobald DNS erkannt wurde).

Allgemeine Anleitung für eine neue Domain (ca. 10–20 € pro Jahr):

1. Im Repository eine Datei `CNAME` anlegen, Inhalt: die Domain, z. B. `veronikahorytska.de`
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
de/werke/<slug>/   einzelne Werkseiten, Deutsch
en/works/<slug>/   einzelne Werkseiten, Englisch
uk/works/<slug>/   einzelne Werkseiten, Ukrainisch (gleicher Slug wie DE/EN)
de/impressum/, de/datenschutz/   statische Rechtstexte (nur Deutsch, das ist Absicht)
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
- Jedes Werk hat eine indexierbare Seite in allen drei Sprachen (129 Werkseiten total),
  mit vollem hreflang-Cluster (de/en/uk/x-default) und self-referencing Canonical.
- Offene Punkte, die echte Informationen von Veronika brauchen (bewusst nicht erfunden,
  nur als interner Code-Kommentar markiert, nirgends sichtbar): Impressum-Adresse,
  Ausbildung/Geburtsdaten, Ausstellungen/CV. Siehe „Rechtliches" unten und
  Abschlussbericht in der Chat-Historie.

## Hinweise

- Die ukrainischen Texte sind eine Übersetzung und sollten gegengelesen werden.
- Impressum und Datenschutz sind auf Deutsch gehalten; das ist der rechtlich
  maßgebliche Wortlaut.
