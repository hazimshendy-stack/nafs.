# Production Notes

- الموقع Static بالكامل.
- لا بيانات مستخدمين. لا Backend.
- يمكن استخدام أي مضيف ثابت: Netlify، Cloudflare Pages، Vercel، S3، إلخ.
- تأكد من إعدادات MIME عند الاستخدام مع خوادم مخصّصة (`.svg`, `.webmanifest`).
- الـService Worker يعمل على HTTPS أو `localhost` فقط.
