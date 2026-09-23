# نفس · Nafs — Presentation

```bash
node fix.cjs
python -m http.server 8080
```

- 150 شريحة · Tajawal · Black + Green (#00FF88)
- Navigation: ← → · Home/End · Swipe · Deep-link (#slide-NN)
- PWA · Responsive · بدون Backend
- API: `mount()`, `injectPresentation()`, `exportSlidesAsJSON()`
- جاهز لـGitHub Pages

## البنية

```
index.html · style.css · manifest.json · sw.js
fix.cjs                            ← مولّد المشروع
slides/data/slides.js              ← البيانات + Renderer API
assets/icons/ · assets/logos/
workflow/ · github/workflows/ · deployment/
```
