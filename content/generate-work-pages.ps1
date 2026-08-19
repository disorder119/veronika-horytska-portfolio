$ErrorActionPreference = "Stop"
$root = "C:\Users\joelb\Documents\Projects\veronika-horytska-portfolio"
$works = Get-Content -Raw -Encoding UTF8 -Path "$root\content\works-full.json" | ConvertFrom-Json
$dims = Get-Content -Raw -Encoding UTF8 -Path "$root\content\image-dimensions.json" | ConvertFrom-Json
$base = "https://disorder119.github.io/veronika-horytska-portfolio"

function E($s) { if ($null -eq $s) { return "" }; return $s.ToString().Replace("&","&amp;").Replace("<","&lt;").Replace(">","&gt;").Replace('"',"&quot;") }

# static-page lang code -> tech{} key (data.js kept the SPA's original "ua" key; do not rename it, the SPA depends on it)
$techKey = @{ de = "de"; en = "en"; uk = "ua" }
$segment = @{ de = "werke"; en = "works"; uk = "works" }
$homeLabel = @{ de = "Veronika Horytska"; en = "Veronika Horytska"; uk = "Вероніка Горицька" }
$worksLabel = @{ de = "Werke"; en = "Works"; uk = "Роботи" }
$skipLabel = @{ de = "Zum Inhalt springen"; en = "Skip to content"; uk = "Перейти до вмісту" }
$priceLabel = @{ de = "Preis"; en = "Price"; uk = "Ціна" }
$statusLabel = @{ de = "Status"; en = "Status"; uk = "Статус" }
$priceOnRequest = @{ de = "Auf Anfrage"; en = "On request"; uk = "За запитом" }
$statusAvail = @{ de = "Verfügbar / Anfrage"; en = "Available / on request"; uk = "Доступно / за запитом" }
$statusSold = @{ de = "Verkauft"; en = "Sold"; uk = "Продано" }
$inquireLabel = @{ de = "Anfrage senden"; en = "Send an enquiry"; uk = "Надіслати запит" }
$subjectLabel = @{ de = "Anfrage zum Werk"; en = "Enquiry about the work"; uk = "Запит щодо роботи" }
$soldNoteTxt = @{ de = " Das Werk ist bereits verkauft und bleibt als Referenz im Archiv sichtbar."; en = " This work is already sold and remains visible in the archive for reference."; uk = " Роботу вже продано, вона залишається в архіві як референс." }
$imprintLabel = @{ de = "Impressum"; en = "Imprint (DE)"; uk = "Impressum (DE)" }
$privacyLabel = @{ de = "Datenschutz"; en = "Privacy Policy (DE)"; uk = "Datenschutz (DE)" }
$galleryLabel = @{ de = "Interaktive Galerie"; en = "Interactive Gallery"; uk = "Інтерактивна галерея" }
$backToWorksLabel = @{ de = "Alle Werke"; en = "All Works"; uk = "Усі роботи" }
$prevLabel = @{ de = "Vorheriges Werk"; en = "Previous work"; uk = "Попередня робота" }
$nextLabel = @{ de = "Nächstes Werk"; en = "Next work"; uk = "Наступна робота" }
$localeTag = @{ de = "de_DE"; en = "en_US"; uk = "uk_UA" }

$roomMeta = @{
  de = @{
    acryl   = @{ crumb = "Acryl";    badge = "Malerei — Acryl"; hash = "acryl" }
    oil     = @{ crumb = "Öl";       badge = "Malerei — Öl";    hash = "oel" }
    textile = @{ crumb = "Textil";   badge = "Textilkunst";     hash = "textil" }
  }
  en = @{
    acryl   = @{ crumb = "Acrylic";  badge = "Painting — Acrylic"; hash = "acrylic" }
    oil     = @{ crumb = "Oil";      badge = "Painting — Oil";     hash = "oil" }
    textile = @{ crumb = "Textile";  badge = "Textile Art";        hash = "textile" }
  }
  uk = @{
    acryl   = @{ crumb = "Акрил";    badge = "Живопис — Акрил";        hash = "akryl" }
    oil     = @{ crumb = "Олія";     badge = "Живопис — Олія";         hash = "oliya" }
    textile = @{ crumb = "Текстиль"; badge = "Текстильне мистецтво";   hash = "tekstyl" }
  }
}

$langs = @("de","en","uk")
$totalCount = 0

foreach ($room in @("acryl","oil","textile")) {
  $items = @($works | Where-Object { $_.room -eq $room })
  for ($idx = 0; $idx -lt $items.Count; $idx++) {
    $w = $items[$idx]
    $prev = $items[(($idx - 1) + $items.Count) % $items.Count]
    $next = $items[($idx + 1) % $items.Count]
    $d = $dims.($w.img.Substring(4))

    foreach ($lang in $langs) {
      $seg = $segment.$lang
      $ri = $roomMeta.$lang.$room
      $tKey = $techKey.$lang
      $techTxt = $w.tech.$tKey
      $descTxt = $w.description.$lang
      $altTxt = $w.alt.$lang
      $sizeLine = @($w.year, $techTxt, $w.size) | Where-Object { $_ -and $_.ToString().Trim() -ne "" }
      $sizeLineTxt = ($sizeLine -join " · ")
      $priceTxt = if ($w.sold) { $statusSold.$lang } else { $priceOnRequest.$lang }
      $statusTxt = if ($w.sold) { $statusSold.$lang } else { $statusAvail.$lang }
      $soldNote = if ($w.sold) { $soldNoteTxt.$lang } else { "" }
      $pageTitle = "$(E($w.title)) – $(E($techTxt)) | Veronika Horytska"
      $metaDesc = "$descTxt $techTxt" + $(if ($w.size) { ", $($w.size)" } else { "" }) + "."
      if ($metaDesc.Length -gt 300) { $metaDesc = $metaDesc.Substring(0,297) + "..." }
      $pageUrl = "$base/$lang/$seg/$($w.slug)/"
      $mailto = "mailto:veronikahorytska@icloud.com?subject=" + [Uri]::EscapeDataString("$($subjectLabel.$lang): $($w.title)")

      # hreflang siblings
      $hreflangLinks = ""
      foreach ($l2 in $langs) {
        $seg2 = $segment.$l2
        $hreflangLinks += "`n<link rel=`"alternate`" hreflang=`"$l2`" href=`"$base/$l2/$seg2/$($w.slug)/`">"
      }
      $hreflangLinks += "`n<link rel=`"alternate`" hreflang=`"x-default`" href=`"$base/de/werke/$($w.slug)/`">"

      $langSwitchLinks = ""
      foreach ($l2 in $langs) {
        $seg2 = $segment.$l2
        $cur = if ($l2 -eq $lang) { ' aria-current="true"' } else { "" }
        $lbl = $l2.ToUpper()
        $langSwitchLinks += "`n    <a href=`"$base/$l2/$seg2/$($w.slug)/`"$cur>$lbl</a>"
      }

      $depthPrefix = "../../../"  # LANG/seg/slug/ -> repo root

      $jsonLd = @"
{"@context":"https://schema.org","@graph":[
{"@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"$(E($homeLabel.$lang))","item":"$base/$lang/"},
  {"@type":"ListItem","position":2,"name":"$(E($worksLabel.$lang))","item":"$base/$lang/#$($ri.hash)"},
  {"@type":"ListItem","position":3,"name":"$(E($ri.crumb))","item":"$base/$lang/#$($ri.hash)"},
  {"@type":"ListItem","position":4,"name":"$(E($w.title))","item":"$pageUrl"}
]},
{"@type":"VisualArtwork","name":"$(E($w.title))","creator":{"@type":"Person","name":"Veronika Horytska","url":"$base/"},"dateCreated":"$($w.year)","artMedium":"$(E($techTxt))","image":{"@type":"ImageObject","url":"$base/img/$($w.img.Substring(4))","width":$($d.width),"height":$($d.height)},"description":"$(E($descTxt))","url":"$pageUrl","inLanguage":"$lang"$(if($w.sold){',"offers":{"@type":"Offer","availability":"https://schema.org/SoldOut"}'}else{''})}
]}
"@

      $html = @"
<!DOCTYPE html>
<html lang="$lang">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>$pageTitle</title>
<meta name="description" content="$(E($metaDesc))">
<meta name="robots" content="index, follow">
<link rel="canonical" href="$pageUrl">$hreflangLinks
<meta name="theme-color" content="#0c0a08">
<meta name="color-scheme" content="dark">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Veronika Horytska">
<meta property="og:title" content="$(E($w.title)) — Veronika Horytska">
<meta property="og:description" content="$(E($metaDesc))">
<meta property="og:url" content="$pageUrl">
<meta property="og:locale" content="$($localeTag.$lang)">
<meta property="og:image" content="$base/img/$($w.img.Substring(4))">
<meta property="og:image:width" content="$($d.width)">
<meta property="og:image:height" content="$($d.height)">
<meta property="og:image:alt" content="$(E($altTxt))">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="$(E($w.title)) — Veronika Horytska">
<meta name="twitter:description" content="$(E($metaDesc))">
<meta name="twitter:image" content="$base/img/$($w.img.Substring(4))">
<link rel="icon" href="${depthPrefix}img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${depthPrefix}img/signature.png">
<link rel="stylesheet" href="${depthPrefix}assets/site.css">
<script type="application/ld+json">
$jsonLd
</script>
</head>
<body>
<a class="skip-link" href="#main">$($skipLabel.$lang)</a>
<header class="site-header">
  <a class="brand" href="${depthPrefix}$lang/">
    <img src="${depthPrefix}img/signature.png" alt="VVH">
    <span class="brand-name">$($homeLabel.$lang)</span>
  </a>
  <nav class="langswitch" aria-label="Language">$langSwitchLinks
  </nav>
</header>
<main id="main">
<div class="wrap">
  <nav class="breadcrumb" aria-label="Breadcrumb" style="margin-top:22px">
    <a href="${depthPrefix}$lang/">$($homeLabel.$lang)</a><span aria-hidden="true">/</span>
    <a href="${depthPrefix}$lang/#$($ri.hash)">$(E($worksLabel.$lang))</a><span aria-hidden="true">/</span>
    <a href="${depthPrefix}$lang/#$($ri.hash)">$(E($ri.crumb))</a><span aria-hidden="true">/</span>
    <span>$(E($w.title))</span>
  </nav>
  <article class="work-detail">
    <figure>
      <img src="${depthPrefix}img/$($w.img.Substring(4))" alt="$(E($altTxt))" width="$($d.width)" height="$($d.height)" loading="eager" decoding="async">
      <figcaption class="visually-hidden">$(E($w.title)), $($w.year), $(E($techTxt))$(if($w.size){", $($w.size)"})</figcaption>
    </figure>
    <div>
      <span style="font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--accent-2)">$(E($ri.badge))</span>
      <h1 style="margin:8px 0 6px;font-size:clamp(30px,6vw,48px)">$(E($w.title))</h1>
      <p style="margin:0;color:var(--muted)">$(E($sizeLineTxt))</p>
      <div class="work-meta">
        <div><span>$($priceLabel.$lang)</span><b>$priceTxt</b></div>
        <div><span>$($statusLabel.$lang)</span><b>$statusTxt</b></div>
      </div>
      <p style="color:var(--muted);line-height:1.7;max-width:56ch">$(E($descTxt))$(E($soldNote))</p>
      <a class="btn btn-primary" style="margin-top:10px" href="$mailto">$($inquireLabel.$lang)</a>
      <div class="work-nav">
        <a href="../$($prev.slug)/">&larr; $(E($prev.title))</a>
        <a href="${depthPrefix}$lang/#$($ri.hash)">$($backToWorksLabel.$lang)</a>
        <a href="../$($next.slug)/">$(E($next.title)) &rarr;</a>
      </div>
    </div>
  </article>
</div>
</main>
<footer class="site-footer">
  <div class="rule-full" aria-hidden="true"></div>
  <div class="row">
    <a class="legal" href="${depthPrefix}de/impressum/">$($imprintLabel.$lang)</a>
    <a class="legal" href="${depthPrefix}de/datenschutz/">$($privacyLabel.$lang)</a>
    <a class="legal" href="${depthPrefix}">$($galleryLabel.$lang)</a>
    <span class="copy">&copy; 2026 Veronika Horytska</span>
  </div>
</footer>
</body>
</html>
"@
      $slugDir = "$root\$lang\$seg\$($w.slug)"
      New-Item -ItemType Directory -Force -Path $slugDir | Out-Null
      [System.IO.File]::WriteAllText("$slugDir\index.html", $html, [System.Text.UTF8Encoding]::new($false))
      $totalCount++
    }
  }
}
Write-Output "Generated $totalCount work pages (43 works x 3 languages)."
