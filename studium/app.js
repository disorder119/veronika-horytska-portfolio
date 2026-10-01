(() => {
  const D = window.STUDY_DATA;
  const state = { filter:'all', city:null, sort:'fit' };
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const today = new Date();
  const clamp = (n,min,max)=>Math.max(min,Math.min(max,n));
  const deg2rad = d=>d*Math.PI/180;
  function distanceKm(a,b){const R=6371;const dLat=deg2rad(b.lat-a.lat),dLon=deg2rad(b.lon-a.lon);const q=Math.sin(dLat/2)**2+Math.cos(deg2rad(a.lat))*Math.cos(deg2rad(b.lat))*Math.sin(dLon/2)**2;return Math.round(R*2*Math.atan2(Math.sqrt(q),Math.sqrt(1-q)));}
  D.programs.forEach(p=>{p.distance=distanceKm(D.home,D.cities[p.city]);});
  function daysUntil(raw){if(!raw)return Infinity;const d=new Date(raw);return Math.ceil((d-today)/(1000*60*60*24));}
  function status(p){const n=daysUntil(p.deadline);if(n<0)return 'past';if(n<=14)return 'urgent';if(n<=60)return 'soon';return 'later';}
  function deadlineText(p){const n=daysUntil(p.deadline);if(!Number.isFinite(n))return 'Termin beobachten';if(n<0)return 'Frist abgelaufen';if(n===0)return 'heute';if(n===1)return 'morgen';return `noch ${n} Tage`;}
  function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

  function renderDeadlines(){
    const items=D.programs.filter(p=>p.deadline && daysUntil(p.deadline)>=0).sort((a,b)=>new Date(a.deadline)-new Date(b.deadline)).slice(0,8);
    $('#deadlineList').innerHTML=items.map(p=>`<button class="deadline ${status(p)}" data-open="${p.id}" type="button"><span class="when">${esc(p.deadlineLabel)}</span><h3>${esc(p.program)}</h3><span class="city">${esc(D.cities[p.city].name)} · ${esc(p.institution)}</span><span class="days">${esc(deadlineText(p).replace('noch ',''))}</span></button>`).join('');
  }

  function pinPosition(city){
    const west=5.5,east=15.5,north=55.1,south=47.2;
    return {x:clamp((city.lon-west)/(east-west)*100,5,95),y:clamp((north-city.lat)/(north-south)*100,4,96)};
  }
  function renderMap(){
    const cities=[...new Set(D.programs.map(p=>p.city))];
    $('#mapPins').innerHTML=cities.map(id=>{const c=D.cities[id],pos=pinPosition(c),best=Math.max(...D.programs.filter(p=>p.city===id).map(p=>p.fit));return `<button type="button" class="pin ${state.city===id?'active':''}" data-city="${id}" style="left:${pos.x}%;top:${pos.y}%" aria-label="${esc(c.name)}"><span class="pin-mark" style="background:${best>=93?'var(--accent)':best>=88?'var(--green)':'var(--blue)'}"></span><span class="pin-label">${esc(c.name.replace(' (Saale)',''))}</span></button>`}).join('');
  }
  function renderCityPanel(){
    const el=$('#cityPanel');
    if(!state.city){el.innerHTML=`<p class="eyebrow">STADT AUSWÄHLEN</p><h3>Wo willst du schauen?</h3><p>Klicke auf einen Punkt. Du bekommst Programme, Fristen und direkte offizielle Links.</p><button class="text-link" id="clearCity" type="button">Alle Städte zeigen</button>`;return;}
    const c=D.cities[state.city],ps=D.programs.filter(p=>p.city===state.city).sort((a,b)=>b.fit-a.fit);
    el.innerHTML=`<p class="eyebrow">${esc(c.name.toUpperCase())}</p><h3>${ps.length} ${ps.length===1?'Weg':'Wege'}</h3><p>ca. ${ps[0].distance} km Luftlinie ab Aschaffenburg.</p><div class="city-programs">${ps.map(p=>`<button class="city-mini text-link" data-open="${p.id}" type="button"><strong>${esc(p.program)}</strong><span>${p.fit}/100 Portfolio-Match · ${esc(p.deadlineLabel)}</span></button>`).join('')}</div><button class="text-link" id="clearCity" type="button">× Stadtfilter entfernen</button>`;
  }

  function renderFilters(){
    $('#filterRow').innerHTML=D.filters.map(f=>`<button class="chip ${state.filter===f.id?'active':''}" data-filter="${f.id}" type="button">${esc(f.label)}</button>`).join('');
  }
  function filteredPrograms(){
    let ps=D.programs.filter(p=>!state.city||p.city===state.city);
    if(state.filter!=='all'){
      if(state.filter==='urgent') ps=ps.filter(p=>status(p)==='urgent'||status(p)==='soon');
      else ps=ps.filter(p=>p.categories.includes(state.filter));
    }
    const sorters={fit:(a,b)=>b.fit-a.fit,deadline:(a,b)=>{const da=a.deadline?new Date(a.deadline):new Date('2999-01-01'),db=b.deadline?new Date(b.deadline):new Date('2999-01-01');return da-db||b.fit-a.fit;},distance:(a,b)=>a.distance-b.distance||b.fit-a.fit,city:(a,b)=>D.cities[a.city].name.localeCompare(D.cities[b.city].name,'de')};
    return ps.sort(sorters[state.sort]);
  }
  function renderPrograms(){
    const ps=filteredPrograms();$('#resultsCount').textContent=`${ps.length} von ${D.programs.length} Programmen`;
    $('#programGrid').innerHTML=ps.length?ps.map(p=>`<article class="program-card ${p.featured?'featured':''}"><div class="card-top"><span class="tag">${esc(p.categories.includes('kunst')&&!p.categories.includes('mode')&&!p.categories.includes('textil')?'KUNST-Nebenweg':p.categories.includes('kostuem')?'KOSTÜM / BÜHNE':p.categories.includes('textil')&&!p.categories.includes('mode')?'TEXTIL':p.categories.includes('mode')?'MODE':'KUNST')}</span><div class="fit">${p.fit}<small>/100</small></div></div><h3>${esc(p.program)}</h3><p class="school">${esc(p.institution)} · ${esc(D.cities[p.city].name)}</p><div class="meta-row"><span class="pill">${esc(p.degree)}</span><span class="pill deadline-pill">${esc(p.deadlineLabel)}</span></div><p class="why">${esc(p.why)}</p><div class="card-bottom"><span class="distance">≈ ${p.distance} km</span><button type="button" class="open-details" data-open="${p.id}">Details & Bewerbung →</button></div></article>`).join(''):`<div class="empty">Keine Programme mit diesem Filter. <button class="text-link" data-filter="all">Alle zeigen</button></div>`;
  }

  function openProgram(id){
    const p=D.programs.find(x=>x.id===id);if(!p)return;const c=D.cities[p.city];
    $('#dialogContent').innerHTML=`<div class="dialog-body"><div class="dialog-title"><p class="eyebrow">${esc(c.name)} · PORTFOLIO-MATCH ${p.fit}/100</p><h2>${esc(p.program)}</h2><p class="institution">${esc(p.institution)} · ${esc(p.degree)}</p></div><div class="dialog-score"><span>Frist: ${esc(p.deadlineLabel)}</span><span>≈ ${p.distance} km ab Aschaffenburg</span><span>${esc(p.internship)}</span></div><p>${esc(p.why)}</p><div class="warning"><strong>Was ich vor der Bewerbung verbessern würde:</strong><br>${esc(p.improve)}</div><div class="dialog-grid"><section class="info-block"><h3>So bewirbst du dich</h3><ol>${p.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></section><section class="info-block"><h3>Mappe / Auswahl</h3><p>${esc(p.portfolio)}</p><h3>Sprache</h3><p>${esc(p.language)}</p><h3>Praktikum</h3><p>${esc(p.internship)}</p></section></div>${p.deadlineNote?`<div class="warning">${esc(p.deadlineNote)}</div>`:''}<div class="sources">${p.sources.map(s=>`<a class="source-link" href="${s.url}" target="_blank" rel="noopener">↗ ${esc(s.label)}</a>`).join('')}</div></div>`;
    const dlg=$('#programDialog');if(typeof dlg.showModal==='function')dlg.showModal();else dlg.setAttribute('open','');
  }

  function renderChecklist(){
    const saved=JSON.parse(localStorage.getItem('nika-study-tasks')||'{}');
    $('#checklist').innerHTML=D.tasks.map(t=>`<label class="task ${saved[t.id]?'done':''}"><input type="checkbox" data-task="${t.id}" ${saved[t.id]?'checked':''}><span class="task-main"><strong>${esc(t.title)}</strong><span>${esc(t.text)}</span></span><span class="task-date">${esc(t.date)}</span></label>`).join('');
  }
  function renderHelp(){
    $('#helpGrid').innerHTML=D.help.map(h=>`<article class="help-card"><span class="date">${esc(h.date)}</span><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p><a href="${h.url}" target="_blank" rel="noopener">Offizielle Info ↗</a></article>`).join('');
  }
  function rerender(){renderMap();renderCityPanel();renderFilters();renderPrograms();}

  document.addEventListener('click',e=>{
    const city=e.target.closest('[data-city]');if(city){state.city=city.dataset.city;rerender();$('#programs')?.scrollIntoView({behavior:'smooth',block:'start'});return;}
    const filter=e.target.closest('[data-filter]');if(filter){state.filter=filter.dataset.filter;renderFilters();renderPrograms();return;}
    const open=e.target.closest('[data-open]');if(open){openProgram(open.dataset.open);return;}
    if(e.target.closest('#clearCity')){state.city=null;rerender();return;}
    if(e.target.closest('.dialog-close')){$('#programDialog').close();return;}
  });
  $('#programDialog').addEventListener('click',e=>{if(e.target===$('#programDialog'))$('#programDialog').close();});
  $('#sortSelect').addEventListener('change',e=>{state.sort=e.target.value;renderPrograms();});
  document.addEventListener('change',e=>{if(e.target.matches('[data-task]')){const saved=JSON.parse(localStorage.getItem('nika-study-tasks')||'{}');saved[e.target.dataset.task]=e.target.checked;localStorage.setItem('nika-study-tasks',JSON.stringify(saved));e.target.closest('.task').classList.toggle('done',e.target.checked);}});

  renderDeadlines();renderMap();renderCityPanel();renderFilters();renderPrograms();renderChecklist();renderHelp();
})();
