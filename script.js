/* نفس — Presentation Engine */
(function(){
  'use strict';
  const SLIDES = window.NAFS_SLIDES || [];
  const deck = document.getElementById('deck');
  const bar = document.getElementById('progress-bar');
  const secEl = document.getElementById('slide-section');
  const cntEl = document.getElementById('slide-counter');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnOverview = document.getElementById('btn-overview');
  const btnInfo = document.getElementById('btn-info');
  const overview = document.getElementById('overview');
  const overviewList = document.getElementById('overview-list');
  const info = document.getElementById('info');
  let idx = 0;

  const pad = (n) => String(n).padStart(2,'0');

  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function renderSlide(s){
    const num = pad(idx + 1);
    const label = '<div class="sec-label">' + esc(s.sec || '') + '</div>' +
                  '<span class="slide-num">' + num + ' / ' + pad(SLIDES.length) + '</span>';
    let html = '<div class="slide">' + label;

    switch(s.type){
      case 'cover':
        html = '<div class="slide cover">' +
          '<div class="sec-label">البداية</div>' +
          '<h1 class="hero">' + esc(s.t) + '</h1>' +
          '<div class="tag">' + esc(s.s || '') + '</div>' +
          '<p class="sub">' + esc(s.sub || '') + '</p>' +
          '<div class="foot">' + esc(s.foot || '') + '</div>' +
          '</div>';
        break;

      case 'end':
        html = '<div class="slide end-slide">' +
          '<h1 class="hero">' + esc(s.t).slice(0,-1) + '<span>' + esc(s.t).slice(-1) + '</span></h1>' +
          '<p class="sub">' + esc(s.s || '') + '</p>' +
          '<p class="sub" style="color:var(--green);font-size:14px;">' + esc(s.sub || '') + '</p>' +
          '</div>';
        break;

      case 'text':
        html += '<h1>' + esc(s.t) + '</h1><div class="body-text">';
        (s.b || []).forEach(p => html += '<p>' + esc(p) + '</p>');
        html += '</div></div>';
        break;

      case 'list':
        html += '<h1>' + esc(s.t) + '</h1><div class="list-block"><ul>';
        (s.items || []).forEach(i => html += '<li>' + esc(i) + '</li>');
        html += '</ul>';
        if(s.note) html += '<div class="note">' + esc(s.note) + '</div>';
        html += '</div></div>';
        break;

      case 'cards':
        html += '<h1>' + esc(s.t) + '</h1><div class="cards-grid">';
        (s.items || []).forEach(c => {
          html += '<div class="card"><div class="card-h">' + esc(c.h) + '</div>';
          if(c.p) html += '<div class="card-p">' + esc(c.p) + '</div>';
          html += '</div>';
        });
        html += '</div>';
        if(s.note) html += '<div class="note">' + esc(s.note) + '</div>';
        html += '</div>';
        break;

      case 'split':
        html += '<h1>' + esc(s.t) + '</h1><div class="split">';
        [s.a, s.b].forEach(blk => {
          if(!blk) return;
          html += '<div class="split-block"><h3>' + esc(blk.h) + '</h3><ul>';
          (blk.l || []).forEach(x => html += '<li>' + esc(x) + '</li>');
          html += '</ul></div>';
        });
        html += '</div>';
        if(s.note) html += '<div class="note">' + esc(s.note) + '</div>';
        html += '</div>';
        break;

      case 'flow':
        html += '<h1>' + esc(s.t) + '</h1><div class="flow">';
        (s.steps || []).forEach((st, i) => {
          html += '<div class="flow-step"><div class="flow-num">' + (i+1) + '</div><div class="flow-txt">' + esc(st) + '</div></div>';
        });
        html += '</div>';
        if(s.note) html += '<div class="note">' + esc(s.note) + '</div>';
        html += '</div>';
        break;

      case 'quote':
        html += '<h1>' + esc(s.t) + '</h1><div class="quote-block">';
        if(s.q) html += '<p class="q">' + esc(s.q) + '</p>';
        if(s.q2) html += '<p class="q2">' + esc(s.q2) + '</p>';
        html += '</div></div>';
        break;

      case 'table':
        html += '<h1>' + esc(s.t) + '</h1><div class="table-wrap"><table><thead><tr>';
        (s.head || []).forEach(h => html += '<th>' + esc(h) + '</th>');
        html += '</tr></thead><tbody>';
        (s.rows || []).forEach(r => {
          html += '<tr>';
          r.forEach(c => html += '<td>' + esc(c) + '</td>');
          html += '</tr>';
        });
        html += '</tbody></table></div></div>';
        break;

      case 'timeline':
        html += '<h1>' + esc(s.t) + '</h1><div class="timeline">';
        (s.items || []).forEach(it => {
          html += '<div class="tl-item"><div class="tl-p">' + esc(it.p) + '</div>' +
                  '<div class="tl-body"><p class="tl-t">' + esc(it.t) + '</p>' +
                  '<p class="tl-d">' + esc(it.d) + '</p></div></div>';
        });
        html += '</div></div>';
        break;

      case 'arch':
        html += '<h1>' + esc(s.t) + '</h1><div class="arch">';
        (s.layers || []).forEach(l => {
          html += '<div class="arch-layer"><h4>' + esc(l.h) + '</h4>';
          if(l.sub) html += '<p>' + esc(l.sub) + '</p>';
          html += '</div>';
        });
        html += '</div>';
        if(s.note) html += '<div class="note">' + esc(s.note) + '</div>';
        html += '</div>';
        break;

      default:
        html += '<h1>' + esc(s.t) + '</h1></div>';
    }

    deck.innerHTML = html;
  }

  function update(){
    const s = SLIDES[idx];
    if(!s) return;
    renderSlide(s);
    secEl.textContent = s.sec || '—';
    cntEl.textContent = pad(idx + 1) + ' / ' + pad(SLIDES.length);
    bar.style.width = ((idx + 1) / SLIDES.length * 100) + '%';
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === SLIDES.length - 1;
    history.replaceState(null, '', '#slide-' + pad(idx + 1));
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function go(n){
    idx = Math.max(0, Math.min(SLIDES.length - 1, n));
    update();
  }
  function next(){ if(idx < SLIDES.length - 1) go(idx + 1); }
  function prev(){ if(idx > 0) go(idx - 1); }

  // Navigation
  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);
  document.addEventListener('keydown', (e) => {
    if(e.target.matches('input, textarea')) return;
    if(e.key === 'ArrowLeft' || e.key === 'PageDown') { e.preventDefault(); next(); }
    else if(e.key === 'ArrowRight' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    else if(e.key === 'Home') { e.preventDefault(); go(0); }
    else if(e.key === 'End') { e.preventDefault(); go(SLIDES.length - 1); }
    else if(e.key === 'o' || e.key === 'O') { toggleOverview(); }
    else if(e.key === 'Escape') { closeAll(); }
  });

  // Touch
  let tx = 0, ty = 0;
  document.addEventListener('touchstart', (e) => {
    tx = e.touches[0].clientX; ty = e.touches[0].clientY;
  }, {passive:true});
  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if(Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)){
      // RTL: swipe right → next, swipe left → prev
      if(dx > 0) next(); else prev();
    }
  }, {passive:true});

  // Overview
  function buildOverview(){
    overviewList.innerHTML = '';
    SLIDES.forEach((s, i) => {
      const b = document.createElement('button');
      b.className = 'ov-item';
      b.innerHTML = '<span class="ov-num">' + pad(i+1) + ' · ' + esc(s.sec || '') + '</span>' +
                    '<span class="ov-t">' + esc(s.t || '') + '</span>';
      b.addEventListener('click', () => { closeAll(); go(i); });
      overviewList.appendChild(b);
    });
  }
  function openOverview(){ buildOverview(); overview.hidden = false; }
  function toggleOverview(){ overview.hidden ? openOverview() : (overview.hidden = true); }
  function closeAll(){ overview.hidden = true; info.hidden = true; }

  btnOverview.addEventListener('click', () => { info.hidden = true; toggleOverview(); });
  document.getElementById('overview-close').addEventListener('click', closeAll);
  btnInfo.addEventListener('click', () => { overview.hidden = true; info.hidden = !info.hidden; });
  document.getElementById('info-close').addEventListener('click', closeAll);

  // Deep-link
  function fromHash(){
    const m = location.hash.match(/#slide-(\d+)/);
    if(m){
      const n = parseInt(m[1], 10) - 1;
      if(n >= 0 && n < SLIDES.length) idx = n;
    }
  }
  window.addEventListener('hashchange', fromHash);

  // Init
  fromHash();
  update();

  // PWA
  if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(()=>{});
    });
  }
})();
