$ErrorActionPreference = "Stop"
$root = "C:\Users\joelb\Documents\Projects\veronika-horytska-portfolio"
$works = Get-Content -Raw -Encoding UTF8 -Path "$root\content\works-full.json" | ConvertFrom-Json
$dims = Get-Content -Raw -Encoding UTF8 -Path "$root\content\image-dimensions.json" | ConvertFrom-Json
$base = "https://disorder119.github.io/veronika-horytska-portfolio"

function E($s) { if ($null -eq $s) { return "" }; return $s.ToString().Replace("&","&amp;").Replace("<","&lt;").Replace(">","&gt;").Replace('"',"&quot;") }

$roomInfo = @{
  acryl   = @{ label = "Malerei — Acryl"; crumb = "Acryl"; hash = "acryl"; badge = "I";   color = "" }
  oil     = @{ label = "Malerei — Öl";    crumb = "Öl";    hash = "oel";   badge = "II";  color = "" }
  textile = @{ label = "Textilkunst";     crumb = "Textil"; hash = "textil"; badge = "III"; color = "tex" }
}
$roomLabelDe = @{ acryl = "Malerei"; oil = "Malerei"; textile = "Textilkunst" }

$count = 0
foreach ($room in @("acryl","oil","textile")) {
  $items = @($works | Where-Object { $_.room -eq $room })
  for ($idx = 0; $idx -lt $items.Count; $idx++) {
    $w = $items[$idx]
    $prev = $items[(($idx - 1) + $items.Count) % $items.Count]
    $next = $items[($idx + 1) % $items.Count]
    $d = $dims.($w.img.Substring(4))
    $ri = $roomInfo.$room
    $descDe = $w.description.de
    $techDe = $w.tech.de
    $sizeLine = @($w.year, $techDe, $w.size) | Where-Object { $_ -and $_.ToString().Trim() -ne "" }
    $sizeLineTxt = ($sizeLine -join " · ")
    $priceTxt = if ($w.sold) { "Verkauft" } else { "Auf Anfrage" }
    $statusTxt = if ($w.sold) { "Verkauft" } else { "Verfügbar / Anfrage" }
    $soldNote = if ($w.sold) { " Das Werk ist bereits verkauft und bleibt als Referenz im Archiv sichtbar." } else { "" }
    $pageTitle = "$(E($w.title)) ($($w.year)) — $($roomLabelDe.$room) von Veronika Horytska"
    $metaDesc = "$descDe $techDe" + $(if ($w.size) { ", $($w.size)" } else { "" }) + ". Werk von Veronika Horytska."
    if ($metaDesc.Length -gt 300) { $metaDesc = $metaDesc.Substring(0,297) + "..." }
    $slugDir = "$root\de\werke\$($w.slug)"
    New-Item -ItemType Directory -Force -Path $slugDir | Out-Null
    $mailto = "mailto:veronikahorytska@icloud.com?subject=" + [Uri]::EscapeDataString("Anfrage zum Werk: $($w.title)")

    $jsonLd = @"
{"@context":"https://schema.org","@graph":[
{"@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"Veronika Horytska","item":"$base/de/"},
  {"@type":"ListItem","position":2,"name":"Werke","item":"$base/de/#werke"},
  {"@type":"ListItem","position":3,"name":"$(E($ri.crumb))","item":"$base/de/#$($ri.hash)"},
  {"@type":"ListItem","position":4,"name":"$(E($w.title))","item":"$base/de/werke/$($w.slug)/"}
]},
{"@type":"VisualArtwork","name":"$(E($w.title))","creator":{"@type":"Person","name":"Veronika Horytska","url":"$base/"},"dateCreated":"$($w.year)","artMedium":"$(E($techDe))","artform":"$(E($roomLabelDe.$room))","width":"$($w.size)","image":{"@type":"ImageObject","url":"$base/img/$($w.img.Substring(4))","width":$($d.width),"height":$($d.height)},"description":"$(E($descDe))","url":"$base/de/werke/$($w.slug)/"$(if($w.sold){',"offers":{"@type":"Offer","availability":"https://schema.org/SoldOut"}'}else{''})}
]}
"@

    $html = @"
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>$pageTitle</title>
<meta name="description" content="$(E($metaDesc))">
<meta name="robots" content="index, follow">
<link rel="canonical" href="$base/de/werke/$($w.slug)/">
<meta name="theme-color" content="#0c0a08">
<meta name="color-scheme" content="dark">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Veronika Horytska">
<meta property="og:title" content="$(E($w.title)) — Veronika Horytska">
<meta property="og:description" content="$(E($metaDesc))">
<meta property="og:url" content="$base/de/werke/$($w.slug)/">
<meta property="og:locale" content="de_DE">
<meta property="og:image" content="$base/img/$($w.img.Substring(4))">
<meta property="og:image:width" content="$($d.width)">
<meta property="og:image:height" content="$($d.height)">
<meta property="og:image:alt" content="$(E($w.alt.de))">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="$(E($w.title)) — Veronika Horytska">
<meta name="twitter:description" content="$(E($metaDesc))">
<meta name="twitter:image" content="$base/img/$($w.img.Substring(4))">
<link rel="icon" href="../../../img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="../../../img/signature.png">
<link rel="stylesheet" href="../../../assets/site.css">
<script type="application/ld+json">
$jsonLd
</script>
</head>
<body>
<a class="skip-link" href="#main">Zum Inhalt springen</a>
<header class="site-header">
  <a class="brand" href="../../../de/">
    <img src="../../../img/signature.png" alt="VVH">
    <span class="brand-name">Veronika Horytska</span>
  </a>
  <nav class="langswitch" aria-label="Sprache">
    <a href="../../../de/" aria-current="true">DE</a>
    <a href="../../../#werk/$($w.slug)">EN</a>
    <a href="../../../#werk/$($w.slug)">UK</a>
  </nav>
</header>
<main id="main">
<div class="wrap">
  <nav class="breadcrumb" aria-label="Breadcrumb" style="margin-top:22px">
    <a href="../../../de/">Veronika Horytska</a><span aria-hidden="true">/</span>
    <a href="../../../de/#werke">Werke</a><span aria-hidden="true">/</span>
    <a href="../../../de/#$($ri.hash)">$(E($ri.crumb))</a><span aria-hidden="true">/</span>
    <span>$(E($w.title))</span>
  </nav>
  <article class="work-detail">
    <figure>
      <img src="../../../img/$($w.img.Substring(4))" alt="$(E($w.alt.de))" width="$($d.width)" height="$($d.height)" loading="eager" decoding="async">
    </figure>
    <div>
      <span style="font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--accent-2)">$(E($ri.label))</span>
      <h1 style="margin:8px 0 6px;font-size:clamp(30px,6vw,48px)">$(E($w.title))</h1>
      <p style="margin:0;color:var(--muted)">$(E($sizeLineTxt))</p>
      <div class="work-meta">
        <div><span>Preis</span><b>$priceTxt</b></div>
        <div><span>Status</span><b>$statusTxt</b></div>
      </div>
      <p style="color:var(--muted);line-height:1.7;max-width:56ch">$(E($descDe))$(E($soldNote))</p>
      <a class="btn btn-primary" style="margin-top:10px" href="$mailto">Anfrage senden</a>
      <div class="work-nav">
        <a href="../$($prev.slug)/">&larr; $(E($prev.title))</a>
        <a href="../$($next.slug)/">$(E($next.title)) &rarr;</a>
      </div>
    </div>
  </article>
</div>
</main>
<footer class="site-footer">
  <div class="rule-full" aria-hidden="true"></div>
  <div class="row">
    <a class="legal" href="../../impressum/">Impressum</a>
    <a class="legal" href="../../datenschutz/">Datenschutz</a>
    <span class="copy">&copy; 2026 Veronika Horytska</span>
  </div>
</footer>
</body>
</html>
"@
    [System.IO.File]::WriteAllText("$slugDir\index.html", $html, [System.Text.UTF8Encoding]::new($false))
    $count++
  }
}
Write-Output "Generated $count work pages."
