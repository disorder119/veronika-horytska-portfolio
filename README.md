# Veronika Horytska — Website

Fertige, statische Website. Kein Server, keine Datenbank, keine laufenden Kosten.

## Online stellen (GitHub Pages, kostenlos)

1. Auf github.com einen Account anlegen.
2. Neues Repository anlegen, z. B. `veronika-horytska`, auf **Public** stellen.
3. Auf `Add file` → `Upload files` klicken und **den Inhalt dieses Ordners** hochladen
   (also `index.html`, `support.js`, `data.js`, den Ordner `img/` und den Ordner `_ds/`) —
   nicht den Ordner `site` selbst.
4. `Settings` → `Pages` → unter *Branch* `main` und `/ (root)` wählen → `Save`.
5. Nach ein bis zwei Minuten ist die Seite erreichbar unter
   `https://DEINNAME.github.io/veronika-horytska/`

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

Hosting kostet dauerhaft nichts. Die Domain ist die einzige laufende Ausgabe.

## Neues Werk hinzufügen

1. Das Bild in den Ordner `img/` legen, z. B. `img/neues-werk.webp`.
2. In `data.js` einen Eintrag ergänzen — nach dem Muster der vorhandenen:

```
{"id":"neues-werk",
 "title":"Neues Werk",
 "year":"2026",
 "size":"80 × 60 cm",
 "room":"acryl",
 "sold":false,
 "img":"img/neues-werk.webp",
 "tech":{"de":"Acryl auf Leinwand",
         "en":"Acrylic on canvas",
         "ua":"Акрил на полотні"}}
```

- `room` ist `acryl`, `oil` oder `textile`
- `sold` ist `true` oder `false`
- `size` bei Textilarbeiten leer lassen: `""`

3. Beide geänderten Dateien wieder ins Repository hochladen. Die Seite aktualisiert sich
   nach etwa einer Minute von selbst.

## Struktur

```
index.html   die Seite
support.js   Laufzeit, nicht ändern
data.js      alle Werke — hier wird gepflegt
img/         alle Bilder, Signatur, Favicon
_ds/         Stylesheet des Designsystems
.nojekyll    nötig, damit GitHub Pages alle Dateien ausliefert
```

## Rechtliches — vor dem Online-Stellen ausfüllen

Im Impressum und in der Datenschutzerklärung stehen Platzhalter in eckigen Klammern.
Diese **müssen** durch die echte Anschrift ersetzt werden, sonst ist das Impressum
nicht rechtskonform. Zu finden in `index.html`, Suche nach `[Straße und Hausnummer]`:

```
[Straße und Hausnummer]
[Postleitzahl und Ort]
[Land]
[Anschrift wie im Impressum]
```

Was bereits eingebaut ist:

- **Impressum** und **Datenschutzerklärung** als eigene Seiten, erreichbar am Seitenfuß.
- **Einwilligung für Schriften**: Google Fonts wird erst geladen, wenn der Besucher
  zustimmt. Vorher zeigt die Seite die Systemschrift. Damit ist keine IP-Adresse
  ohne Einwilligung an Google übertragen — der häufigste Abmahngrund entfällt.
- **Keine Cookies**, kein Tracking, keine Analyse. Gespeichert werden nur Sprachwahl
  und Schrift-Entscheidung, lokal im Browser des Besuchers.
- Die Entscheidung ist über „Einstellungen" am Seitenfuß jederzeit widerrufbar.

Wenn ein anderer Hoster als GitHub Pages genutzt wird, muss der Absatz *Hosting*
in der Datenschutzerklärung entsprechend angepasst werden.

## Hinweise

- Ohne Einwilligung des Besuchers wird die Seite in einer Systemschrift dargestellt.
  Das ist beabsichtigt und rechtlich der sichere Weg.
- Die ukrainischen Texte sind eine Übersetzung und sollten gegengelesen werden.
- Impressum und Datenschutz sind auf Deutsch gehalten; das ist der rechtlich
  maßgebliche Wortlaut.
