# نفس · Nafs — Presentation

> عرض مؤسسي تفاعلي لمؤسسة **نفس** (اسم مبدئي / Working Name) ولمنصتها الأولى.
> يغطي كامل `final readme.txt` موزّعًا على Slides منظمة.

## التشغيل

```bash
node setup.js          # يُنشئ كل الملفات
python -m http.server 8080
# افتح http://localhost:8080
```

أو مباشرة بفتح `index.html` في المتصفح (بعض ميزات PWA تحتاج سيرفر).

## المميزات

- Presentation Website تفاعلي بالعربية (RTL)
- خط **Tajawal** فقط
- هوية **Black + Green + White**
- تنقل: ← → · Home/End · O للفصول · Touch Swipe
- Deep-linking `#slide-01`
- PWA (manifest + service worker + installable)
- Responsive (موبايل + سطح مكتب)
- بدون Backend — Static site جاهز لـGitHub Pages

## الهيكل

```
index.html              نقطة الدخول
style.css               نظام التصميم الموحد
script.js               محرك العرض والتنقل
manifest.json           PWA manifest
sw.js                   Service Worker
setup.js                مولّد المشروع
slides/data/slides.js   محتوى كل الـSlides
assets/                 أيقونات وشعارات
workflow/               توثيق العملية
github/workflows/       GitHub Actions
deployment/             إرشادات النشر
```

## النشر على GitHub Pages

1. ارفع المشروع إلى مستودع GitHub.
2. Settings → Pages → Source: `GitHub Actions`.
3. ادفع إلى `main` وسينشر تلقائيًا (راجع `github/workflows/deploy.yml`).

## ملاحظة

هذا عرض Presentation — **ليس** منصة العلاج نفسها.
