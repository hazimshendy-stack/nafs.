/* نفس — Presentation Engine v2 */
(function(){
  'use strict';
  const S = window.NAFS_SLIDES || [];
  const deck = document.getElementById('deck');
  const bar = document.getElementById('progress-bar');
  const secEl = document.getElementById('slide-section');
  const cntEl = document.getElementById('slide-counter');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnOv = document.getElementById('btn-overview');
  const btnInfo = document.getElementById('btn-info');
  const ov = document.getElementById('overview');
  const ovList = document.getElementById('overview-list');
  const info = document.getElementById('info');
  let idx = 0;
  const pad = n => String(n).padStart(2,'0');
  const esc = s => String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  function render(s){
    const num = pad(idx+1);
    const animCls = 'anim-' + (s.anim || 'fade').replace(/[^a-z-]/g,'');
    let h = '<div class="slide">' +
      '<div class="sec-label">' + esc(s.sec||'') + '</div>' +
      '<span class="slide-num">' + num + ' / ' + pad(S.length) + '</span>';

    switch(s.type){
      case 'cover':
        h = '<div class="slide cover ' + animCls + '">' +
          '<h1 class="hero">' + esc(s.t).slice(0,-1) + '<span>' + esc(s.t).slice(-1) + '</span></h1>' +
          '<div class="tag">' + esc(s.s||'') + '</div>' +
          '</div>'; break;
      case 'end':
        h = '<div class="slide end-slide ' + animCls + '">' +
          '<h1 class="hero">' + esc(s.t).slice(0,-1) + '<span>' + esc(s.t).slice(-1) + '</span></h1>' +
          '<p class="sub">' + esc(s.s||'') + '</p>' +
          '<p class="sub2">' + esc(s.sub||'') + '</p></div>'; break;
      case 'text':
        h += '<h1>' + esc(s.t) + '</h1><div class="body-text ' + animCls + '">';
        (s.b||[]).forEach(p => h += '<p>' + esc(p) + '</p>');
        h += '</div></div>'; break;
      case 'list':
        h += '<h1>' + esc(s.t) + '</h1><div class="list-block ' + animCls + '"><ul>';
        (s.items||[]).forEach(i => h += '<li>' + esc(i) + '</li>');
        h += '</ul>';
        if(s.note) h += '<div class="note">' + esc(s.note) + '</div>';
        h += '</div></div>'; break;
      case 'cards':
        h += '<h1>' + esc(s.t) + '</h1><div class="cards-grid ' + animCls + '">';
        (s.items||[]).forEach(c => {
          h += '<div class="card"><div class="card-h">' + esc(c.h) + '</div>';
          if(c.p) h += '<div class="card-p">' + esc(c.p) + '</div>';
          h += '</div>';
        });
        h += '</div>';
        if(s.note) h += '<div class="note">' + esc(s.note) + '</div>';
        h += '</div>'; break;
      case 'split':
        h += '<h1>' + esc(s.t) + '</h1><div class="split ' + animCls + '">';
        [s.a,s.b].forEach(blk => {
          if(!blk) return;
          h += '<div class="split-block"><h3>' + esc(blk.h) + '</h3><ul>';
          (blk.l||[]).forEach(x => h += '<li>' + esc(x) + '</li>');
          h += '</ul></div>';
        });
        h += '</div>';
        if(s.note) h += '<div class="note">' + esc(s.note) + '</div>';
        h += '</div>'; break;
      case 'flow':
        h += '<h1>' + esc(s.t) + '</h1><div class="flow ' + animCls + '">';
        (s.steps||[]).forEach((st,i) => {
          h += '<div class="flow-step"><div class="flow-num">' + (i+1) + '</div>' +
               '<div class="flow-txt">' + esc(st) + '</div></div>';
        });
        h += '</div>';
        if(s.note) h += '<div class="note">' + esc(s.note) + '</div>';
        h += '</div>'; break;
      case 'quote':
        h += '<h1>' + esc(s.t) + '</h1><div class="quote-block ' + animCls + '">';
        if(s.q) h += '<p class="q">' + esc(s.q) + '</p>';
        if(s.q2) h += '<p class="q2">' + esc(s.q2) + '</p>';
        if(s.note) h += '<p class="q2">' + esc(s.note) + '</p>';
        h += '</div></div>'; break;
      case 'table':
        h += '<h1>' + esc(s.t) + '</h1><div class="table-wrap ' + animCls + '"><table><thead><tr>';
        (s.head||[]).forEach(x => h += '<th>' + esc(x) + '</th>');
        h += '</tr></thead><tbody>';
        (s.rows||[]).forEach(r => {
          h += '<tr>';
          r.forEach(c => h += '<td>' + esc(c) + '</td>');
          h += '</tr>';
        });
        h += '</tbody></table></div></div>'; break;
      case 'formula':
        h += '<h1>' + esc(s.t) + '</h1><div class="formula-block ' + animCls + '">' + esc(s.formula) + '</div></div>';
        break;
      case 'arch':
        h += '<h1>' + esc(s.t) + '</h1><div class="cards-grid ' + animCls + '">';
        (s.layers||[]).forEach(l => {
          h += '<div class="card"><div class="card-h">' + esc(l.h) + '</div>';
          if(l.sub) h += '<div class="card-p">' + esc(l.sub) + '</div>';
          h += '</div>';
        });
        h += '</div></div>'; break;
      default:
        h += '<h1>' + esc(s.t) + '</h1></div>';
    }
    deck.innerHTML = h;
  }

  function update(){
    const s = S[idx]; if(!s) return;
    render(s);
    secEl.textContent = s.sec || '—';
    cntEl.textContent = pad(idx+1) + ' / ' + pad(S.length);
    bar.style.width = ((idx+1)/S.length*100) + '%';
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === S.length - 1;
    history.replaceState(null, '', '#slide-' + pad(idx+1));
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function go(n){ idx = Math.max(0, Math.min(S.length-1, n)); update(); }
  function next(){ if(idx < S.length-1) go(idx+1); }
  function prev(){ if(idx > 0) go(idx-1); }

  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);
  document.addEventListener('keydown', e => {
    if(e.target.matches('input, textarea')) return;
    if(e.key === 'ArrowLeft' || e.key === 'PageDown'){ e.preventDefault(); next(); }
    else if(e.key === 'ArrowRight' || e.key === 'PageUp'){ e.preventDefault(); prev(); }
    else if(e.key === 'Home'){ e.preventDefault(); go(0); }
    else if(e.key === 'End'){ e.preventDefault(); go(S.length-1); }
    else if(e.key === 'o' || e.key === 'O'){ ov.hidden ? openOv() : (ov.hidden = true); }
    else if(e.key === 'Escape'){ closeAll(); }
  });

  let tx = 0, ty = 0;
  document.addEventListener('touchstart', e => {
    tx = e.touches[0].clientX; ty = e.touches[0].clientY;
  }, {passive:true});
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if(Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)){
      if(dx > 0) next(); else prev();
    }
  }, {passive:true});

  function buildOv(){
    ovList.innerHTML = '';
    S.forEach((s,i) => {
      const b = document.createElement('button');
      b.className = 'ov-item';
      b.innerHTML = '<span class="ov-num">' + pad(i+1) + ' · ' + esc(s.sec||'') + '</span>' +
                    '<span class="ov-t">' + esc(s.t||'') + '</span>';
      b.addEventListener('click', () => { closeAll(); go(i); });
      ovList.appendChild(b);
    });
  }
  function openOv(){ buildOv(); ov.hidden = false; }
  function closeAll(){ ov.hidden = true; info.hidden = true; }

  btnOv.addEventListener('click', () => { info.hidden = true; ov.hidden ? openOv() : (ov.hidden = true); });
  document.getElementById('overview-close').addEventListener('click', closeAll);
  btnInfo.addEventListener('click', () => { ov.hidden = true; info.hidden = !info.hidden; });
  document.getElementById('info-close').addEventListener('click', closeAll);

  const m = location.hash.match(/#slide-(\d+)/);
  if(m){ const n = parseInt(m[1],10)-1; if(n >= 0 && n < S.length) idx = n; }
  update();

  if('serviceWorker' in navigator){
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(()=>{}));
  }
})();
