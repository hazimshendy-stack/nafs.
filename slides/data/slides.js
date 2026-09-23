/* نفس — Final Slides Data + Renderer API
 * المحتوى: نسخة معاد تصميمها بالعربية المصرية، مع الحفاظ على المحاور الاستراتيجية الأساسية من final readme.txt.
 * Schema: {id, type, title, subtitle?, content[], notes}
 * المتصفح: window.Presentation | Node: module.exports
 */
(function (root, factory) {
  if (typeof module !== "undefined" && module.exports)
    module.exports = factory();
  else root.Presentation = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";
  var slides = [
    {
      id: 1,
      type: "cover",
      title: "نفس",
      content: [
        {
          type: "callout",
          variant: "info",
          text: "اسم مبدئي للمؤسسة — عرض شامل للمفهوم والمنتج والاستراتيجية",
        },
      ],
      notes: "غلاف العرض. الاسم «نفس» مبدئي كما ورد في الوثيقة.",
    },
    {
      id: 2,
      type: "content",
      title: "إحنا بنبني مؤسسة… مش مجرد تطبيق",
      content: [
        {
          type: "text",
          text: "الفكرة الأساسية إن المؤسسة تكون أكبر من منصة علاج نفسي واحدة. هي مؤسسة موجهة للصحة النفسية وعلم النفس والرفاهية والصحة الرقمية، ومع الوقت تقدر تضم رعاية، أبحاث، تعليم، تدريب، فعاليات وشراكات عامة وخاصة.",
        },
        {
          type: "callout",
          variant: "info",
          text: "أول منتج كبير للمؤسسة: منصة علاج نفسي بشري احترافي مبنية حول الخصوصية من الأساس.",
        },
      ],
    },
    {
      id: 3,
      type: "quote",
      title: "أطروحة المؤسسة",
      content: [
        {
          type: "quote",
          text: "نبني بنية تحتية موثوقة للصحة النفسية، يكون الوصول للرعاية المهنية فيها أسهل، ويكون كشف الهوية غير الضروري أقل بالتصميم.",
        },
      ],
      subtitle: "Institutional Thesis",
    },
    {
      id: 4,
      type: "quote",
      title: "أطروحة المنتج",
      content: [
        {
          type: "quote",
          text: "علاج نفسي بشري مهني من غير كشف هوية مش ضروري.",
        },
      ],
      subtitle: "Product Thesis",
    },
    {
      id: 5,
      type: "table",
      title: "الفكرة الأساسية في علاقة الطرفين",
      content: [
        {
          type: "table",
          headers: ["الطرف", "التجربة"],
          rows: [
            ["المعالج", "معروف، علني، موثّق ومؤهل"],
            ["العميل", "مستعار افتراضيًا داخل تجربة العلاج"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "إحنا لا ندّعي إن العميل مستحيل يتعرف عليه أي طرف في العالم. الهدف هو تقليل الربط غير الضروري، خصوصًا عن المعالج.",
        },
      ],
    },
    {
      id: 6,
      type: "list",
      title: "المنتج مش مجرد إيه؟",
      content: [
        {
          type: "list",
          items: [
            "مش مجرد Marketplace عادي للمواعيد.",
            "مش مجرد Anonymous Chat أو Community.",
            "مش Peer Support فقط.",
            "مش AI Therapist.",
            "ومش Telehealth تقليدي أضفنا له زر «Anonymous».",
          ],
        },
      ],
    },
    {
      id: 7,
      type: "diagram",
      title: "التركيبة الأساسية للمشروع",
      content: [
        {
          type: "diagram",
          lines: [
            "Professional Human Therapy",
            "+ Pseudonymous Client Identity",
            "+ Privacy-by-Design",
            "+ Secure Communication",
            "+ Network + Metadata Privacy",
            "+ Voice Protection",
            "+ Therapist Verification",
            "+ Manual + Automatic Matching",
            "+ Urgent Access",
            "+ Emergency/Crisis Routing",
            "+ Institutional Partnerships",
            "+ Research + Education potential",
          ],
        },
      ],
    },
    {
      id: 8,
      type: "content",
      title: "أين القيمة الحقيقية؟",
      content: [
        {
          type: "text",
          text: "أكبر فرصة محتملة مش في كلمة «مجهول» لوحدها، لأن عناصر زي الـmatching والـinstant access والدعم المجهول موجودة بأشكال مختلفة عند منافسين مختلفين.",
        },
        {
          type: "text",
          text: "الفرصة الاستراتيجية المفترضة هي جمع الرعاية البشرية المهنية مع pseudonymity وخصوصية الشبكة والـmetadata وحماية الصوت وعدم التسجيل وإدارة بصلاحيات محدودة، مع طبقة مؤسسية أوسع.",
        },
        {
          type: "callout",
          variant: "info",
          text: "دي فرضية تنافسية تحتاج validation من المستخدمين والمعالجين والسوق، وليست حقيقة محسومة.",
        },
      ],
    },
    {
      id: 9,
      type: "content",
      title: "المشكلة اللي المؤسسة بتحاول تحلها",
      content: [
        {
          type: "list",
          items: [
            "الخوف من كشف الهوية أو إن حد يعرف إن الشخص بياخد علاج.",
            "الاحتكاك قبل أول تواصل مع متخصص.",
            "صعوبة اختيار المعالج المناسب.",
            "تفاوت الوصول للرعاية.",
            "تشتت خدمات الطوارئ والدعم العام بين جهات مختلفة.",
            "ضعف فصل الهوية والبيانات في بعض المنتجات الرقمية.",
            "قلة البنية العربية المحلية المبنية على الخصوصية والأدلة.",
            "الفصل بين الرعاية والبحث والتعليم والخدمات المؤسسية.",
          ],
        },
      ],
    },
    {
      id: 10,
      type: "quote",
      title: "السؤال اللي بنبني حوله المنتج",
      content: [
        {
          type: "quote",
          text: "إزاي نوصل الشخص لمساعدة نفسية احترافية، بأقل كشف غير ضروري لهويته، من غير ما نضحي بجودة العلاج أو الأمان؟",
        },
      ],
    },
    {
      id: 11,
      type: "table",
      title: "أربع طرق عامة لفهم منصات الصحة النفسية",
      content: [
        {
          type: "table",
          headers: ["النموذج", "الفكرة"],
          rows: [
            ["1 — علاج تقليدي", "هوية حقيقية → حساب → معالج → علاج"],
            [
              "2 — مجهول للمعالج",
              "المنصة تعرف المستخدم، والمعالج يشوف اسمًا مستعارًا",
            ],
            [
              "3 — دعم مجهول/Peer/AI",
              "دعم أو مجتمع أو AI من غير علاج بشري احترافي كامل بالضرورة",
            ],
            [
              "4 — النموذج المقترح",
              "معالج موثّق + عميل مستعار + أقل بيانات + خصوصية اتصال + Matching + Urgent + Crisis",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "النموذج الرابع وصف للمشروع، وليس تصنيفًا صناعيًا رسميًا.",
        },
      ],
    },
    {
      id: 12,
      type: "content",
      title: "يعني إيه Pseudonymous؟",
      content: [
        {
          type: "text",
          text: "المستخدم عنده هوية داخل النظام، لكن الهوية دي مش اسمه الحقيقي بالضرورة.",
        },
        {
          type: "diagram",
          lines: [
            "العالم الحقيقي",
            "↓",
            "هوية مستعارة داخل المنصة",
            "↓",
            "علاقة علاجية آمنة مع Therapist",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Pseudonymous مش معناها «غير قابل للتعرف عليه في كل الظروف».",
        },
      ],
    },
    {
      id: 13,
      type: "content",
      title: "التسجيل… من غير حساب تقليدي تقيل",
      content: [
        {
          type: "text",
          text: "الفكرة إن إنشاء هوية العميل يكون بأقل بيانات ممكنة، مثل: Username أو معرف مستعار + Password أو Passkey + Avatar + آلية استرداد مناسبة للخصوصية.",
        },
        {
          type: "list",
          items: [
            "الاسم الحقيقي مش افتراضي.",
            "رقم الموبايل مش افتراضي.",
            "الإيميل مش افتراضي.",
            "مفيش Social Profile عام.",
            "قد تبقى بعض معلومات السن أو الدولة/المنطقة ضرورية حسب القانون ونموذج الخدمة.",
          ],
        },
      ],
    },
    {
      id: 14,
      type: "content",
      title: "الـAvatar جزء من التجربة",
      content: [
        {
          type: "text",
          text: "المستخدم يختار شخصية من مكتبة جاهزة بدل صورة شخصية حقيقية. الاتجاه المقترح شبابي وهادئ من غير ما يبقى طفولي.",
        },
        {
          type: "list",
          items: [
            "Aliens",
            "Abstract characters",
            "Creatures",
            "Minimal faces",
            "Shapes",
            "Emotional characters",
          ],
        },
      ],
    },
    {
      id: 15,
      type: "content",
      title: "مفيش Social Profile للعميل",
      content: [
        {
          type: "list",
          items: [
            "مفيش Bio عام.",
            "مفيش Followers أو Posts.",
            "مفيش صورة حقيقية مطلوبة.",
            "مفيش Public Location.",
            "الـIdentity هنا للعلاج والتواصل، مش للسوشيال ميديا.",
          ],
        },
      ],
    },
    {
      id: 16,
      type: "content",
      title: "استرداد الحساب له ثمن خصوصية",
      content: [
        {
          type: "text",
          text: "كل ما ربطنا Recovery بالهوية الحقيقية، سهلنا استرجاع الحساب لكن زودنا قابلية ربط الـpseudonym بالشخص. وكل ما زودنا الخصوصية، ممكن يبقى فقدان مفاتيح الاسترداد أخطر.",
        },
        {
          type: "list",
          items: [
            "Username + Password",
            "Passkeys",
            "Device keys",
            "Recovery code/kit",
            "خيارات إضافية فقط لو لها مبرر واضح",
          ],
        },
      ],
    },
    {
      id: 17,
      type: "diagram",
      title: "الفصل بين الهوية والعلاج",
      content: [
        {
          type: "diagram",
          lines: [
            "Identity Layer",
            "↓ فصل منطقي وصلاحيّات مختلفة",
            "Therapy Layer",
            "├─ Therapist",
            "├─ Sessions",
            "├─ Messages",
            "├─ Voice / Video",
            "└─ Therapy Data",
          ],
        },
      ],
    },
    {
      id: 18,
      type: "content",
      title: "قاعدة Data Minimization",
      content: [
        {
          type: "text",
          text: "المنصة تسأل: «إيه اللي نحتاجه فعلًا؟» مش «إيه اللي نقدر نجمعه؟»",
        },
        {
          type: "list",
          items: [
            "تقديم الخدمة.",
            "السلامة.",
            "الأمن ومنع الإساءة.",
            "الدفع عند اللزوم.",
            "التشغيل الضروري.",
            "المتطلبات القانونية والتنظيمية.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "«ممكن نحتاجها يومًا ما» مش سبب كفاية لجمع البيانات.",
        },
      ],
    },
    {
      id: 19,
      type: "content",
      title: "المعالج شايف إيه؟",
      content: [
        {
          type: "text",
          text: "المعالج ياخد الحد الأدنى اللي يحتاجه للعلاج، مش قاعدة بيانات كاملة عن الشخص.",
        },
        {
          type: "table",
          headers: ["ممكن يشوف", "مش مطلوب افتراضيًا"],
          rows: [
            ["Client M7K29", "الاسم الحقيقي"],
            ["اللغة: عربي", "الإيميل"],
            ["نوع الجلسة: Protected Voice", "رقم الهاتف"],
            ["الموضوع الأساسي: Anxiety", "بيانات الدفع / IP / GPS الدقيق"],
          ],
        },
      ],
    },
    {
      id: 20,
      type: "content",
      title: "مفيش ملف عميل مركزي ضخم",
      content: [
        {
          type: "text",
          text: "الهدف نتجنب سجل واحد يجمع الاسم والرقم والدفع والـIP وكل التاريخ العلاجي في كيان واحد مفتوح لناس كتير.",
        },
        {
          type: "diagram",
          lines: [
            "Identity",
            "Therapy",
            "Payment",
            "Security / Audit",
            "Operations",
            "Research-approved datasets",
            "كل نطاق بصلاحياته وحدوده",
          ],
        },
      ],
    },
    {
      id: 21,
      type: "content",
      title: "خصوصية الشبكة: الـIP جزء من القصة",
      content: [
        {
          type: "text",
          text: "إحنا مش بس بنخفي الاسم. في الاستخدام العادي، المعالج ما ينفعش يحصل على عنوان IP الحقيقي للعميل.",
        },
        {
          type: "list",
          items: [
            "Privacy relay / proxy.",
            "TURN أو Media Relay.",
            "تجنب Direct Peer Exposure قدر الإمكان.",
            "فصل الاتصال عن طبقة الهوية.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الـRelay نفسه قد يشوف بيانات تقنية؛ المطلوب تقليل ما يحتفظ به وربطه بالعلاج.",
        },
      ],
    },
    {
      id: 22,
      type: "content",
      title: "الموقع الجغرافي مش مطلوب افتراضيًا",
      content: [
        {
          type: "list",
          items: [
            "Precise GPS = Off by default.",
            "العلاج العادي لا يحتاج موقعًا دقيقًا.",
            "قد نحتاج Country/Region بسبب الولاية المهنية.",
            "قد نحتاج موقعًا تقريبيًا في مسار أزمة محدد.",
            "أي طلب للموقع لازم يكون له سبب واضح.",
          ],
        },
      ],
    },
    {
      id: 23,
      type: "content",
      title: "الـMetadata ممكن تفضحك حتى لو الرسالة مشفرة",
      content: [
        {
          type: "list",
          items: [
            "مين اتكلم مع مين؟",
            "إمتى؟",
            "مدة الجلسة قد إيه؟",
            "هل الشخص Online؟",
            "معدل الجلسات؟",
            "كام مرة اتصل؟",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "تشفير المحتوى مهم، لكن تقليل الـMetadata والاحتفاظ بها مهم كمان.",
        },
      ],
    },
    {
      id: 24,
      type: "content",
      title: "E2EE: يعني الخادم ما يقرأش العلاج ببساطة",
      content: [
        {
          type: "diagram",
          lines: [
            "Client",
            "↓ Encrypted",
            "Platform infrastructure",
            "↓ Encrypted",
            "Therapist",
          ],
        },
        {
          type: "text",
          text: "الهدف إن المحتوى العلاجي يكون End-to-End Encrypted في الحالات المناسبة، باستخدام بروتوكولات ومكتبات معروفة ومراجعة متخصصة.",
        },
        {
          type: "callout",
          variant: "info",
          text: "Database Encryption مش هو نفسه E2EE.",
        },
      ],
    },
    {
      id: 25,
      type: "content",
      title: "التشفير المحلي على الجهاز",
      content: [
        {
          type: "list",
          items: [
            "Encrypted local storage.",
            "Secure OS key stores.",
            "Key rotation.",
            "Automatic session lock.",
            "Device lock.",
            "Biometric unlock محليًا عند الحاجة.",
          ],
        },
      ],
    },
    {
      id: 26,
      type: "content",
      title: "المراسلة جزء أساسي من العلاج",
      content: [
        {
          type: "list",
          items: [
            "Text.",
            "Voice messages.",
            "Attachments عند الحاجة.",
            "حالات التسليم لو كانت مناسبة للخصوصية.",
            "الحذف حسب القيود السريرية والقانونية.",
            "خيارات Ephemeral عندما تكون مناسبة.",
            "إشعارات خاصة وغير كاشفة.",
          ],
        },
      ],
    },
    {
      id: 27,
      type: "content",
      title: "الصوت الطبيعي أو الصوت المحمي",
      content: [
        {
          type: "table",
          headers: ["الاختيار", "المعنى"],
          rows: [
            ["Natural Voice", "الصوت الطبيعي المعتاد"],
            ["Protected Voice", "تحويل للصوت بهدف تقليل قابلية التعرف عليه"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Protected Voice تقلل المخاطر، لكنها لا تضمن إن الشخص مستحيل يتعرف عليه بسبب اللهجة والكلمات وطريقة الكلام والسياق.",
        },
      ],
    },
    {
      id: 28,
      type: "content",
      title: "الفيديو موجود… لكن مش إجباري",
      content: [
        {
          type: "list",
          items: ["Text", "Voice", "Protected Voice", "Video"],
        },
        {
          type: "text",
          text: "الفكرة إن الخصوصية ما تبقاش سبب إننا نحول العلاج كله إلى Text-only. المستخدم يختار شكل التواصل المناسب.",
        },
      ],
    },
    {
      id: 29,
      type: "content",
      title: "No Recording by Default",
      content: [
        {
          type: "quote",
          text: "التسجيل = Off",
        },
        {
          type: "text",
          text: "الصوت والفيديو لا يتم تسجيلهم افتراضيًا. أي تسجيل مستقبلي، لو وُجد، لازم يكون وظيفة منفصلة بموافقة وسياسة واضحة ومتطلبات قانونية ومهنية مناسبة.",
        },
      ],
    },
    {
      id: 30,
      type: "content",
      title: "الدفع منفصل عن العلاج",
      content: [
        {
          type: "diagram",
          lines: ["Payment Provider / Payment Layer", "≠", "Therapy Identity"],
        },
        {
          type: "list",
          items: [
            "المعالج لا يرى بيانات البطاقة.",
            "نقلل تخزين بيانات الدفع الحساسة داخل المنصة.",
            "مزود الدفع قد يحتاج بيانات الدفع المطلوبة للمعاملة.",
            "المهم: Payment Identity مش هي Therapy Identity.",
          ],
        },
      ],
    },
    {
      id: 31,
      type: "content",
      title: "العلاج مش مساحة إعلانات",
      content: [
        {
          type: "list",
          items: [
            "لا Behavioral Advertising داخل المساحة العلاجية.",
            "لا Retargeting مبني على العلاج.",
            "لا Marketing Profile من الحالة النفسية.",
            "تقليل Third-party Trackers داخل الشاشات الحساسة.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Therapy is a protected environment, not advertising inventory.",
        },
      ],
    },
    {
      id: 32,
      type: "content",
      title: "المحادثات مش مادة تدريب AI افتراضيًا",
      content: [
        {
          type: "text",
          text: "محتوى العلاج لا يستخدم افتراضيًا لتدريب نماذج AI العامة.",
        },
        {
          type: "list",
          items: [
            "أي استخدام مستقبلي لهدف مختلف يحتاج Governance واضح.",
            "لازم Purpose محدد.",
            "لازم أساس قانوني وموافقات عند اللزوم.",
            "لازم حماية وقيود وصول وأخلاقيات مناسبة.",
          ],
        },
      ],
    },
    {
      id: 33,
      type: "content",
      title: "خصوصية على مستوى الإدارة",
      content: [
        {
          type: "list",
          items: [
            "Least Privilege.",
            "RBAC.",
            "Separation of Duties.",
            "Access Logs.",
            "Audit Trails.",
            "Key Separation.",
            "صلاحيات استثنائية محدودة ومبررة.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "وجود Admin لا يعني إن عنده مفتاح «شوف كل حاجة».",
        },
      ],
    },
    {
      id: 34,
      type: "content",
      title: "No God Mode",
      content: [
        {
          type: "text",
          text: "مافيش زر واحد يفتح كل المحادثات أو الملاحظات أو الهويات لمجرد إن المستخدم Admin.",
        },
        {
          type: "text",
          text: "لو القانون أو السلامة احتاجوا وصولًا استثنائيًا، يكون ضيقًا، مبررًا، محدود الوقت، قابلًا للتدقيق، ومشروطًا بالحوكمة.",
        },
      ],
    },
    {
      id: 35,
      type: "content",
      title: "Privacy by Default",
      content: [
        {
          type: "list",
          items: [
            "Recording: Off",
            "Precise Location: Off",
            "Advertising Tracking: Off",
            "Therapy-content AI Training: Off",
            "Real Identity Exposure: Off unless necessary",
            "Public Client Profile: None",
            "Voice Protection: Available",
            "Data Sharing: Minimum",
          ],
        },
      ],
    },
    {
      id: 36,
      type: "content",
      title: "اختيار المعالج يدويًا",
      content: [
        {
          type: "list",
          items: [
            "Specialization.",
            "Language.",
            "Therapeutic approach.",
            "Concern.",
            "Price.",
            "Availability.",
            "Session format.",
            "الفئة العمرية.",
            "Gender preference عند الحاجة.",
          ],
        },
      ],
    },
    {
      id: 37,
      type: "content",
      title: "Match Me: لو مش عارف تختار",
      content: [
        {
          type: "text",
          text: "مش كل واحد هيعرف يختار Therapist من أول مرة. لذلك يوجد مسار «Match Me» باختبار قصير يسأل عن الاحتياج والتفضيلات وطريقة التواصل والوقت والميزانية.",
        },
        {
          type: "callout",
          variant: "info",
          text: "الاختبار هدفه المساعدة في الاختيار، مش تشخيص طبي.",
        },
      ],
    },
    {
      id: 38,
      type: "diagram",
      title: "رحلة الـAutomatic Matching",
      content: [
        {
          type: "diagram",
          lines: [
            "What brings you here?",
            "↓",
            "Needs + preferences",
            "↓",
            "Language + modality + availability + price",
            "↓",
            "Therapist compatibility",
            "↓",
            "مجموعة Therapists مناسبين محتملًا",
            "↓",
            "المستخدم يختار",
          ],
        },
      ],
    },
    {
      id: 39,
      type: "table",
      title: "الـMatching بيبص على إيه؟",
      content: [
        {
          type: "table",
          headers: ["البعد", "مثال"],
          rows: [
            ["احتياج المستخدم", "الموضوع اللي عايز يناقشه"],
            ["تخصص المعالج", "مجال الخبرة"],
            ["اللغة", "عربي / إنجليزي"],
            ["الأسلوب العلاجي", "Approach"],
            ["الوقت", "Availability"],
            ["نوع الجلسة", "Text / Voice / Video"],
            ["السعر", "Budget / Price"],
            ["التفضيلات", "اختيارات المستخدم"],
          ],
        },
      ],
    },
    {
      id: 40,
      type: "content",
      title: "Matching مش Diagnosis",
      content: [
        {
          type: "quote",
          text: "Based on your answers, these therapists may be a good fit.",
        },
        {
          type: "text",
          text: "مش المفروض النظام يقول: «أنت عندك X، إذن لازم Y». القرار السريري يفضل عند المختص.",
        },
      ],
    },
    {
      id: 41,
      type: "table",
      title: "ثلاث طرق للوصول للمعالج",
      content: [
        {
          type: "table",
          headers: ["الوضع", "التجربة"],
          rows: [
            ["Choose for Me", "المستخدم يتصفح ويختار بنفسه"],
            ["Match Me", "النظام يساعده يلاقي الأنسب"],
            ["Talk Now", "طلب سريع حسب المتاح الآن"],
          ],
        },
      ],
    },
    {
      id: 42,
      type: "content",
      title: "التأكد من إن المعالج مؤهل",
      content: [
        {
          type: "list",
          items: [
            "Identity verification للمعالج.",
            "Professional credential verification.",
            "License / registration حيث ينطبق.",
            "Scope of practice.",
            "تاريخ انتهاء وتجديد الاعتماد.",
            "التخصصات.",
            "Professional policy training.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "المنصة لا تسمح لأي شخص يكتب «Therapist» ويبدأ علاج.",
        },
      ],
    },
    {
      id: 43,
      type: "diagram",
      title: "الجلسة العادية",
      content: [
        {
          type: "diagram",
          lines: [
            "Choose Therapist",
            "↓",
            "Choose Session Type",
            "↓",
            "Choose Time",
            "↓",
            "Payment when applicable",
            "↓",
            "Secure Session",
            "↓",
            "Continuity with same pseudonymous identity",
          ],
        },
      ],
    },
    {
      id: 44,
      type: "content",
      title: "Urgent Session: محتاج حد دلوقتي",
      content: [
        {
          type: "text",
          text: "الـUrgent Session مصمم للوصول السريع لمعالج متاح، مش لمجرد إن المستخدم عايز موعد بعد أسبوع.",
        },
        {
          type: "diagram",
          lines: [
            "Talk to a Therapist Now",
            "↓",
            "النوع + المدة + تفضيلات أساسية",
            "↓",
            "Eligible available therapists",
            "↓",
            "Request routing",
            "↓",
            "Therapist accepts",
            "↓",
            "Secure session",
          ],
        },
      ],
    },
    {
      id: 45,
      type: "content",
      title: "Availability-first بدل Therapist-first",
      content: [
        {
          type: "table",
          headers: ["Normal", "Urgent"],
          rows: [
            [
              "المستخدم يختار Therapist أولًا",
              "المستخدم يطلب Therapist متاحًا الآن",
            ],
            ["موعد محدد", "توزيع الطلب على المتاحين والمؤهلين"],
          ],
        },
      ],
    },
    {
      id: 46,
      type: "content",
      title: "Urgent مش Emergency",
      content: [
        {
          type: "table",
          headers: ["Urgent", "Emergency"],
          rows: [
            [
              "«عايز أتكلم مع Therapist الليلة»",
              "خطر فوري على الحياة أو إيذاء النفس/الآخرين",
            ],
            ["خدمة علاج سريعة", "مسار أزمة/طوارئ منفصل"],
            ["يمكن مطابقة مع المعالج المتاح", "قد يحتاج جهة محلية/طبية مختصة"],
          ],
        },
      ],
    },
    {
      id: 47,
      type: "content",
      title: "Emergency & Crisis Support",
      content: [
        {
          type: "list",
          items: [
            "قسم مستقل للطوارئ والأزمات.",
            "Emergency services الرسمية.",
            "Crisis lines.",
            "Addiction services.",
            "Public mental-health services.",
            "جهات حكومية متخصصة.",
            "منظمات متخصصة.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "المنصة مش بديل عن خدمات الطوارئ المحلية.",
        },
      ],
    },
    {
      id: 48,
      type: "diagram",
      title: "مراحل مسار الأزمة",
      content: [
        {
          type: "diagram",
          lines: [
            "Level 0 — Education",
            "↓",
            "Level 1 — Safety Gate",
            "↓",
            "Level 2 — Clinical Escalation",
            "↓",
            "Level 3 — Official Emergency Service",
            "↓",
            "Level 4 — Partner Crisis Service",
            "↓",
            "Level 5 — Continuity / Referral",
          ],
        },
      ],
    },
    {
      id: 49,
      type: "content",
      title: "أمثلة للمخاطر العالية",
      content: [
        {
          type: "list",
          items: [
            "Suicide / self-harm.",
            "Harm to others.",
            "Abuse / violence.",
            "Sexual exploitation.",
            "Severe intoxication.",
            "Acute medical issues.",
            "High-acuity psychiatric presentations.",
            "Domestic violence أو خطر مباشر.",
          ],
        },
      ],
    },
    {
      id: 50,
      type: "content",
      title: "الطوارئ من مجرد أرقام إلى خدمة حقيقية",
      content: [
        {
          type: "text",
          text: "في البداية: موارد رسمية محدثة، توجيه واضح، وأرقام وخدمات مناسبة حسب البلد.",
        },
        {
          type: "text",
          text: "لاحقًا: اتفاقيات تكامل تخلي الجهات الحكومية أو المتخصصة تقدم خدمة داخل المنصة بدل إننا نقول للمستخدم «اتصل بالرقم ده وخلاص».",
        },
      ],
    },
    {
      id: 51,
      type: "content",
      title: "شراكات مجانية وخدمات عامة",
      content: [
        {
          type: "list",
          items: [
            "جهات مكافحة وعلاج الإدمان.",
            "جهات الصحة النفسية العامة.",
            "جهات الأزمات.",
            "منظمات غير ربحية.",
            "جهات حماية الشباب.",
            "مؤسسات حكومية.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "لو الشريك بيقدم الخدمة مجانًا، ممكن تظهر للمستخدم كخدمة مجانية داخل الـecosystem.",
        },
      ],
    },
    {
      id: 52,
      type: "content",
      title: "مسؤولية المنصة وحدودها",
      content: [
        {
          type: "list",
          items: [
            "المنصة لا تدّعي إنها بديل عن الإسعاف أو المستشفى أو تدخل الشرطة.",
            "الخطر الفوري يحتاج الجهة المحلية المناسبة.",
            "حدود المسؤولية الفعلية تتحدد بالقانون والعقود والسياسات المهنية.",
            "حدود السرية والطوارئ يجب أن تكون معلنة بوضوح.",
          ],
        },
      ],
    },
    {
      id: 53,
      type: "content",
      title: "Gen Z… بس بشكل مهني",
      content: [
        {
          type: "list",
          items: [
            "Modern",
            "Calm",
            "Fast",
            "Simple",
            "Human",
            "Mobile-first",
            "Not hospital-like",
            "Not childish",
            "واضح في اللغة والخطوات.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الهدف إن المنتج يبقى مألوف كأداة تواصل حديثة، من غير ما يفقد جديته العلاجية.",
        },
      ],
    },
    {
      id: 54,
      type: "content",
      title: "PWA: موقع بيتصرف كتطبيق",
      content: [
        {
          type: "list",
          items: [
            "Installable على الهاتف والكمبيوتر حسب دعم النظام والمتصفح.",
            "Standalone mode.",
            "App icon.",
            "Push notifications حيث يدعمها الجهاز.",
            "Responsive UI.",
            "تجربة قريبة من التطبيق من غير Native app في البداية.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "قدرات الـPWA تختلف بين المتصفحات والأجهزة، فلازم اختبار فعلي.",
        },
      ],
    },
    {
      id: 55,
      type: "content",
      title: "Mobile + Desktop",
      content: [
        {
          type: "text",
          text: "Mobile-first مش معناها Mobile-only.",
        },
        {
          type: "list",
          items: [
            "الهاتف: تجربة سريعة، لمس، Swipe، جلسات سهلة.",
            "الكمبيوتر: مساحة مريحة للجلسات الطويلة وأعمال المعالج والإدارة.",
            "نفس الهوية والـlogic مع layouts مختلفة حسب الشاشة.",
          ],
        },
      ],
    },
    {
      id: 56,
      type: "content",
      title: "إشعار مايفضحش العلاج",
      content: [
        {
          type: "table",
          headers: ["مش مناسب", "المناسب"],
          rows: [
            ["«د. أحمد رد على موضوع الاكتئاب»", "«عندك رسالة خاصة جديدة»"],
            ["اسم الطبيب + موضوع حساس على Lock Screen", "إشعار عام ومحايد"],
          ],
        },
      ],
    },
    {
      id: 57,
      type: "content",
      title: "خصوصية الملفات",
      content: [
        {
          type: "list",
          items: [
            "فحص نوع الملف.",
            "التعامل مع Malware.",
            "تشفير.",
            "تنظيف Metadata عند الحاجة.",
            "Controlled access URLs.",
            "Expiration.",
            "Size limits.",
            "تخزين مؤقت آمن.",
          ],
        },
      ],
    },
    {
      id: 58,
      type: "content",
      title: "Local-first لما يفيد",
      content: [
        {
          type: "text",
          text: "بعض الأشياء ممكن تتعمل على جهاز المستخدم بدل إرسالها للسيرفر لو ده يحسن الخصوصية من غير ما يبوظ العلاج.",
        },
        {
          type: "list",
          items: [
            "UI state.",
            "Drafts.",
            "بعض الإعدادات.",
            "بعض مفاتيح التشفير.",
            "بيانات مؤقتة.",
          ],
        },
      ],
    },
    {
      id: 59,
      type: "content",
      title: "رحلة العميل الكاملة",
      content: [
        {
          type: "diagram",
          lines: [
            "فتح المنصة",
            "↓",
            "يفهم الخدمة وحدود الخصوصية",
            "↓",
            "Avatar",
            "↓",
            "Username + Password / Passkey",
            "↓",
            "Recovery choice",
            "↓",
            "الموافقة والشروط المطلوبة",
            "↓",
            "Choose / Match / Talk Now / Emergency",
            "↓",
            "Text / Voice / Protected Voice / Video",
            "↓",
            "Booking + Payment عند اللزوم",
            "↓",
            "Private waiting room",
            "↓",
            "Session",
            "↓",
            "Rebook / Continue",
          ],
        },
      ],
    },
    {
      id: 60,
      type: "content",
      title: "رحلة الـMatch",
      content: [
        {
          type: "diagram",
          lines: [
            "Open",
            "↓",
            "Pseudonymous identity",
            "↓",
            "Match Me",
            "↓",
            "أسئلة قصيرة",
            "↓",
            "Needs + Preferences",
            "↓",
            "Compatible Therapists",
            "↓",
            "Compare",
            "↓",
            "Choose",
            "↓",
            "Session",
          ],
        },
      ],
    },
    {
      id: 61,
      type: "content",
      title: "رحلة الـUrgent",
      content: [
        {
          type: "diagram",
          lines: [
            "Talk Now",
            "↓",
            "Basic preferences",
            "↓",
            "Available qualified therapists",
            "↓",
            "Request routing",
            "↓",
            "One therapist accepts",
            "↓",
            "Secure session",
          ],
        },
      ],
    },
    {
      id: 62,
      type: "content",
      title: "رحلة الطوارئ",
      content: [
        {
          type: "diagram",
          lines: [
            "Immediate Help",
            "↓",
            "Emergency & Crisis Support",
            "↓",
            "اختيار نوع الأزمة",
            "↓",
            "Official / Partner Service",
            "↓",
            "Immediate Assistance",
          ],
        },
      ],
    },
    {
      id: 63,
      type: "content",
      title: "رحلة المعالج",
      content: [
        {
          type: "diagram",
          lines: [
            "Apply",
            "↓",
            "Real identity verification",
            "↓",
            "Credential / scope check",
            "↓",
            "Training + secure setup",
            "↓",
            "Payout setup",
            "↓",
            "Public professional profile",
            "↓",
            "Availability",
            "↓",
            "Session",
            "↓",
            "Clinical notes / referral / escalation",
            "↓",
            "Renewal + education",
          ],
        },
      ],
    },
    {
      id: 64,
      type: "content",
      title: "رحلة الـAdmin",
      content: [
        {
          type: "list",
          items: [
            "صحة النظام.",
            "Verification للمعالجين.",
            "Expiry للcredentials.",
            "Scheduling / payouts.",
            "الموارد الطارئة.",
            "Privacy requests.",
            "Technical support.",
            "Incidents.",
            "Security logs.",
            "Partner programs.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الإدارة تشغل النظام من غير ما تتحول لمشاهد شامل للمحتوى العلاجي.",
        },
      ],
    },
    {
      id: 65,
      type: "content",
      title: "المؤسسة: 7 طبقات نمو",
      content: [
        {
          type: "list",
          items: [
            "1. Care & Access",
            "2. Crisis / Prevention / Public Health",
            "3. Professional Network",
            "4. Education / Media",
            "5. Research / Evidence",
            "6. Institutional / Government Infrastructure",
            "7. Events / Convening",
          ],
        },
      ],
    },
    {
      id: 66,
      type: "content",
      title: "الرعاية والوصول",
      content: [
        {
          type: "list",
          items: [
            "دلوقتي: Marketplace + verified therapists + secure care.",
            "بعدها: Matching + Urgent + Protected Voice + Video maturity.",
            "لاحقًا: Specialized pathways وReferral networks.",
            "طويل المدى: بنية إقليمية/عالمية للرعاية.",
          ],
        },
      ],
    },
    {
      id: 67,
      type: "content",
      title: "الأزمات والصحة العامة",
      content: [
        {
          type: "list",
          items: [
            "موارد أزمات محدثة في البداية.",
            "شراكات NGO/Public Health.",
            "مسارات Crisis متكاملة لاحقًا.",
            "ربط خدمات عامة وتمويل برامج.",
            "بنية interoperable للـcrisis routing على المدى الطويل.",
          ],
        },
      ],
    },
    {
      id: 68,
      type: "content",
      title: "شبكة المتخصصين",
      content: [
        {
          type: "diagram",
          lines: [
            "Recruitment",
            "→ Verification",
            "→ Quality",
            "→ Community",
            "→ Supervision",
            "→ Continuing Education",
            "→ Professional Network / Academy",
          ],
        },
      ],
    },
    {
      id: 69,
      type: "content",
      title: "التعليم والإعلام",
      content: [
        {
          type: "list",
          items: [
            "Mental-health literacy.",
            "Therapy literacy.",
            "Webinars.",
            "University programs.",
            "Professional education.",
            "Books / media.",
            "Multilingual knowledge institution.",
          ],
        },
      ],
    },
    {
      id: 70,
      type: "content",
      title: "البحث: المؤسسة تبني Evidence",
      content: [
        {
          type: "list",
          items: [
            "Mental health.",
            "Behavioral science.",
            "Digital care.",
            "Privacy.",
            "Arabic/MENA psychology.",
            "Clinical outcomes.",
            "Public-health systems.",
            "AI safety.",
            "Accessibility.",
          ],
        },
      ],
    },
    {
      id: 71,
      type: "content",
      title: "الفعاليات مش Event والسلام",
      content: [
        {
          type: "list",
          items: [
            "University forums.",
            "Therapist workshops.",
            "Public talks.",
            "Research conferences.",
            "Privacy + mental-health summits.",
            "Corporate wellbeing sessions.",
            "Government/NGO roundtables.",
            "Community events.",
          ],
        },
        {
          type: "text",
          text: "الهدف: تعليم + علاقات + توظيف معالجين + PR + تبادل بحثي + حضور مؤسسي.",
        },
      ],
    },
    {
      id: 72,
      type: "content",
      title: "من المؤسسة إلى البنية التحتية",
      content: [
        {
          type: "diagram",
          lines: [
            "Institution",
            "├─ Care",
            "├─ Trust: Privacy + Security + Governance",
            "├─ Knowledge: Research + Education",
            "└─ Partnerships: Government + NGOs + Corporates + Universities + Hospitals",
            "↓",
            "Public-health impact",
          ],
        },
      ],
    },
    {
      id: 73,
      type: "content",
      title: "A–Z: Access إلى Zero-Data-Excess",
      content: [
        {
          type: "list",
          items: [
            "A Access — اكتشاف ومطابقة ووصول عاجل وإحالات.",
            "B Behavioral Science — أبحاث سلوكية وتصميم تدخلات.",
            "C Clinical Care — علاج ورعاية وإحالات متخصصة.",
            "D Digital Health — Telepsychology واتصال آمن.",
            "E Education — توعية وتدريب.",
            "F Family/Community — خدمات أسرية ومجتمعية مستقبلية.",
            "G Government — برامج عامة وأزمات.",
            "H Human Wellbeing — رفاهية مع حدود واضحة.",
            "I Institutional Services — جامعات وشركات ومستشفيات وNGOs.",
            "J Jobs — صحة نفسية في العمل.",
            "K Knowledge — مكتبة أدلة ومحتوى.",
            "L Low-Bandwidth Care — Text-first وصوت خفيف.",
          ],
        },
      ],
    },
    {
      id: 74,
      type: "content",
      title: "A–Z: Matching إلى Quality",
      content: [
        {
          type: "list",
          items: [
            "M Matching — يدوي وقواعد ثم خوارزميات أكثر تطورًا لاحقًا.",
            "N Network Privacy — Relays وIP/Metadata minimization.",
            "O Outcomes — قياس النتائج والجودة.",
            "P Professional Network — Therapists وأخصائيون ومشرفون ومعلّمون.",
            "Q Quality — Clinical governance وشكاوى وتدقيق.",
            "R Research — أبحاث سريرية وسلوكية ورقمية وخصوصية وتقنية.",
            "S Safety — أزمات وحماية واستجابة للحوادث.",
            "T Training — تدريب مهني وتعليم.",
            "U Universities — رعاية وبرامج وأبحاث وفعاليات.",
            "V Voice — Natural + Protected Voice.",
            "W Wellbeing at Work — رعاية ممولة من أصحاب العمل مع Privacy Firewall.",
            "X eXchange — مؤتمرات وRoundtables.",
            "Y Youth — برامج مستقبلية مع Safeguarding منفصل.",
            "Z Zero-Data-Excess — ماتجمعش بيانات لمجرد إنك تقدر.",
          ],
        },
      ],
    },
    {
      id: 75,
      type: "table",
      title: "الأشكال المحتملة للمؤسسة",
      content: [
        {
          type: "table",
          headers: ["الخيار", "ملامح"],
          rows: [
            ["For-profit", "تشغيل تجاري واستثمار وإيرادات مباشرة"],
            ["Nonprofit", "برامج عامة ومنح وتمويل مجتمعي"],
            [
              "Mission-led / Social Enterprise",
              "كيان تجاري برسالة واضحة وبرامج منفعة عامة",
            ],
            ["Hybrid طويل المدى", "ذراع تجاري + ذراع منفعة عامة/Nonprofit"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الاختيار القانوني النهائي يحتاج محاماة متخصصة حسب الدولة.",
        },
      ],
    },
    {
      id: 76,
      type: "content",
      title: "الحوكمة لازم تبقى مستقلة عن ضغط النمو",
      content: [
        {
          type: "list",
          items: [
            "Clinical & Safety Committee.",
            "Privacy & Data Governance.",
            "Security / Risk.",
            "Audit / Finance.",
            "Research / Ethics.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الـClinical leadership ماينفعش يبقى تابع للنمو، والخصوصية ماينفعش تبقى تابعة للإعلانات، والأمان ماينفعش يبقى تابع للراحة.",
        },
      ],
    },
    {
      id: 77,
      type: "content",
      title: "مين هم المستخدمون الأساسيون؟",
      content: [
        {
          type: "list",
          items: [
            "Silent Seeker — خايف من انكشاف طلب العلاج.",
            "First-time Client — مش عارف يختار.",
            "Urgent Seeker — محتاج حد بسرعة.",
            "Continuity Client — عايز يكمل مع نفس المعالج.",
            "Low-Bandwidth / Accessibility User.",
            "Institution-Referred Client — جهة ممولة أو إحالة.",
          ],
        },
      ],
    },
    {
      id: 78,
      type: "content",
      title: "مين الـStakeholders؟",
      content: [
        {
          type: "list",
          items: [
            "Clients.",
            "Therapists.",
            "Platform operations.",
            "Clinical governance.",
            "Privacy/DPO.",
            "Security.",
            "Government.",
            "NGOs.",
            "Universities.",
            "Hospitals.",
            "Employers.",
            "Researchers.",
            "Funders.",
          ],
        },
      ],
    },
    {
      id: 79,
      type: "content",
      title: "Jobs to Be Done",
      content: [
        {
          type: "list",
          items: [
            "العميل: «ساعدني أوصل لرعاية حقيقية من غير كشف غير ضروري».",
            "«ساعدني أعرف مين يناسبني».",
            "«لو محتاج بسرعة، وصلني لمعالج مناسب».",
            "المعالج: «ساعدني أشتغل بأمان وكفاءة من غير بيانات أكتر من اللازم».",
            "الشريك: «خلينا نمول أو نقدم خدمة من غير ما نستلم المحتوى العلاجي الفردي».",
          ],
        },
      ],
    },
    {
      id: 80,
      type: "content",
      title: "النموذج الاقتصادي الأساسي",
      content: [
        {
          type: "list",
          items: [
            "B2C جلسات علاج.",
            "Packages / recurring plans عندما تكون مناسبة.",
            "Therapist professional tools.",
            "B2B employer programs.",
            "University / institution programs.",
            "NGO-funded access.",
            "B2G / public-sector contracts.",
            "Education / training.",
            "Research services / grants.",
            "Events.",
            "Infrastructure / API / white-label على المدى الطويل.",
          ],
        },
      ],
    },
    {
      id: 81,
      type: "content",
      title: "طبقة مجانية محتملة",
      content: [
        {
          type: "list",
          items: [
            "Crisis resources.",
            "Emergency guidance.",
            "Mental-health literacy.",
            "Privacy education.",
            "Public/partner-funded services.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الفكرة إن الخصوصية مش هي المنتج اللي بنبيعه. والبيانات الشخصية مش business model.",
        },
      ],
    },
    {
      id: 82,
      type: "content",
      title: "Privacy Firewall في B2B/B2G",
      content: [
        {
          type: "diagram",
          lines: [
            "Employer / University / Government",
            "↓ funding / entitlement",
            "Platform",
            "↓ pseudonymous access",
            "Client",
            "↓",
            "Clinical care",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "التقرير الافتراضي للشريك يكون Aggregate، مش قائمة بأسماء الناس اللي راحوا علاج.",
        },
      ],
    },
    {
      id: 83,
      type: "content",
      title: "اقتصاد الـUrgent",
      content: [
        {
          type: "text",
          text: "الـUrgent محتاج كثافة كافية من المعالجين وتوفر حقيقي. وعد «24/7» من أول يوم ممكن يبقى مكلف وغير واقعي.",
        },
        {
          type: "list",
          items: [
            "ابدأ بنطاق جغرافي وزمني محدود.",
            "قِس الطلب ومعدل قبول الطلبات.",
            "وسع حسب البيانات الفعلية.",
          ],
        },
      ],
    },
    {
      id: 84,
      type: "content",
      title: "الحكومة: فرصة كبيرة بس مش الحل الوحيد",
      content: [
        {
          type: "list",
          items: [
            "Impact عالي.",
            "عقود محتملة كبيرة.",
            "لكن procurement أطول.",
            "تعقيد قانوني وتنظيمي.",
            "دورات بيع أطول.",
            "أولوية الحكومة تكون قناة نمو، مش الدليل الوحيد على Product-Market Fit.",
          ],
        },
      ],
    },
    {
      id: 85,
      type: "content",
      title: "الـBusiness مايبقاش قائم على بيانات المرضى",
      content: [
        {
          type: "quote",
          text: "The patient’s private life is not the business model.",
        },
        {
          type: "list",
          items: [
            "لا بيع بيانات.",
            "لا therapy-based advertising.",
            "لا raw conversation licensing.",
            "لا hidden AI training.",
          ],
        },
      ],
    },
    {
      id: 86,
      type: "content",
      title: "المنظمة نفسها لها 3 أنظمة داخلية",
      content: [
        {
          type: "diagram",
          lines: [
            "CARE SYSTEM",
            "Clinical quality + therapists + service delivery",
            "↓",
            "TRUST SYSTEM",
            "Privacy + security + governance + safety",
            "↓",
            "GROWTH SYSTEM",
            "Business + marketing + partnerships + scale",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الثلاثة لازم يكونوا مستقلين لكن متصلين.",
        },
      ],
    },
    {
      id: 87,
      type: "content",
      title: "فريق البداية: أقل منظمة تقدر تشتغل بأمان",
      content: [
        {
          type: "list",
          items: [
            "Founder / CEO / Strategy.",
            "Product + UX.",
            "CTO / Engineering + Security.",
            "Licensed Clinical Lead.",
            "Therapist Operations / Network.",
          ],
        },
        {
          type: "text",
          text: "دي مش كل الوظائف النهائية؛ دي نواة تشغيل آمنة، مش مجرد نواة برمجة.",
        },
      ],
    },
    {
      id: 88,
      type: "content",
      title: "خبرات خارجية من البداية",
      content: [
        {
          type: "list",
          items: [
            "Healthcare / regulatory lawyer.",
            "Privacy / DPO specialist.",
            "Cybersecurity + penetration testing.",
            "Accountant / tax advisor.",
            "Clinical advisors.",
            "Branding / design specialist.",
          ],
        },
      ],
    },
    {
      id: 89,
      type: "content",
      title: "فريق 8–10 أشخاص لاحقًا",
      content: [
        {
          type: "list",
          items: [
            "Product Manager.",
            "UI/UX Designer.",
            "Backend / Full-stack Engineer.",
            "Frontend Engineer.",
            "Security/privacy engineering capacity.",
            "Support / Trust & Safety / Operations.",
          ],
        },
      ],
    },
    {
      id: 90,
      type: "content",
      title: "الإدارة الكاملة لاحقًا",
      content: [
        {
          type: "list",
          items: [
            "Executive + Strategy.",
            "Product + UX Research + Design.",
            "Technology + Infrastructure.",
            "Cybersecurity + Privacy.",
            "Clinical Governance + Quality & Safety.",
            "Therapist Operations + Support.",
            "Research + Education.",
            "Partnerships + Government Relations.",
            "Marketing + Communications + Community + Events.",
            "Finance + HR + Legal + Compliance + Data/Analytics.",
          ],
        },
      ],
    },
    {
      id: 91,
      type: "content",
      title: "بناء شبكة المعالجين",
      content: [
        {
          type: "diagram",
          lines: [
            "Professional associations / clinics / postgraduate networks / specialist communities / referrals",
            "↓",
            "Application",
            "↓",
            "Identity + Credential verification",
            "↓",
            "Scope check",
            "↓",
            "Training",
            "↓",
            "Payout setup",
            "↓",
            "Profile + Sandbox",
            "↓",
            "Activation",
          ],
        },
      ],
    },
    {
      id: 92,
      type: "content",
      title: "إزاي نخلي المعالج يكمل؟",
      content: [
        {
          type: "list",
          items: [
            "Payouts متوقعة.",
            "Qualified demand.",
            "Scheduling وأدوات مهنية.",
            "Education.",
            "Community.",
            "Clinician support.",
            "Safety policies.",
            "Research participation.",
            "Continuing education.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الهدف إن الشبكة تكون Professional Network مش مجرد قائمة أسماء.",
        },
      ],
    },
    {
      id: 93,
      type: "content",
      title: "التعليم: من توعية عامة إلى Academy",
      content: [
        {
          type: "list",
          items: [
            "Now: Mental-health literacy + Therapy literacy + Crisis awareness + Privacy education.",
            "Near future: Webinars + University workshops + Employer education + Therapist workshops.",
            "Later: Continuing development + Supervision partnerships + Professional education platform.",
            "Long-term: Academy + Academic partnerships + Recognized pathways عندما يسمح الإطار المهني/الأكاديمي.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Educational content لا يساوي Professional qualification معترف به.",
        },
      ],
    },
    {
      id: 94,
      type: "content",
      title: "البحث العلمي: إيه اللي المؤسسة ممكن تدرسه؟",
      content: [
        {
          type: "list",
          items: [
            "هل الـPseudonymous onboarding يقلل تردد الناس في بدء العلاج؟",
            "هل تقليل كشف الهوية يرفع إتمام أول جلسة؟",
            "هل Privacy UX يؤثر على الاستمرار؟",
            "إيه الـmodality الأنسب لكل مستخدم؟",
            "هل Protected Voice يقلل التعرف بدون ما يضر العلاقة العلاجية؟",
            "إيه أكبر مخاطر الخصوصية في العلاج الرقمي؟",
          ],
        },
      ],
    },
    {
      id: 95,
      type: "content",
      title: "تكملة أجندة البحث العلمي",
      content: [
        {
          type: "list",
          items: [
            "إزاي نبني Crisis interop بأقل بيانات؟",
            "هل الـMatching العادل ممكن يفضل Transparent؟",
            "إيه تصميم الـLow-bandwidth الأفضل؟",
            "إزاي نعرب مصطلحات الصحة النفسية بطريقة طبيعية؟",
            "إزاي نقيم AI في الصحة النفسية بدون كشف بيانات العلاج؟",
            "إزاي تصميم الإشعارات يقلل كشف استخدام العلاج؟",
          ],
        },
      ],
    },
    {
      id: 96,
      type: "content",
      title: "حوكمة البحث",
      content: [
        {
          type: "list",
          items: [
            "Ethics review / IRB حيث يلزم.",
            "Informed consent عند اللزوم.",
            "Purpose محدد.",
            "Datasets منفصلة.",
            "De-identification.",
            "Access committee.",
            "Secure storage.",
            "Publication integrity.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "بيانات العلاج الإنتاجية لا تتحول تلقائيًا إلى Research Dataset.",
        },
      ],
    },
    {
      id: 97,
      type: "content",
      title: "Research Flywheel",
      content: [
        {
          type: "diagram",
          lines: [
            "Care",
            "→ Questions",
            "→ Research",
            "→ Evidence",
            "→ Better Care",
            "→ Education",
            "→ Professional Development",
            "→ Trust",
            "→ Partnerships",
            "→ Access",
            "→ Care",
          ],
        },
      ],
    },
    {
      id: 98,
      type: "content",
      title: "نظام التسويق عندنا 3 قصص مختلفة",
      content: [
        {
          type: "list",
          items: [
            "Institution Marketing — «إحنا بنبني بنية صحة نفسية موثوقة ومبنية على الخصوصية».",
            "Platform Marketing — «ابدأ العلاج من غير كشف هوية مش ضروري».",
            "Therapist Marketing — «اشتغل ضمن شبكة رعاية رقمية مهنية وآمنة».",
          ],
        },
      ],
    },
    {
      id: 99,
      type: "content",
      title: "قنوات النمو",
      content: [
        {
          type: "list",
          items: [
            "SEO.",
            "Educational content.",
            "Social media.",
            "Universities + campus programs.",
            "Therapist ambassadors.",
            "Professional communities.",
            "PR.",
            "Events.",
            "Employers.",
            "NGOs.",
            "Government/community partnerships.",
            "Referrals + word of mouth.",
          ],
        },
      ],
    },
    {
      id: 100,
      type: "content",
      title: "محتوى يبني الثقة مش مجرد Reach",
      content: [
        {
          type: "list",
          items: [
            "Mental-health literacy.",
            "Therapy literacy.",
            "Privacy literacy.",
            "Therapist education.",
            "Research/evidence.",
            "Youth/MENA wellbeing.",
            "Crisis awareness.",
          ],
        },
        {
          type: "diagram",
          lines: [
            "Educational value",
            "→ Transparent product",
            "→ Professional verification",
            "→ Privacy evidence",
            "→ Real experience",
            "→ Referral / Word of Mouth",
          ],
        },
      ],
    },
    {
      id: 101,
      type: "content",
      title: "الـTechnology Strategy",
      content: [
        {
          type: "list",
          items: [
            "اختيار الـArchitecture يبدأ من الـThreat Model والاحتياجات السريرية، مش من الموضة التقنية.",
            "Frontend: Web/PWA stack حديث ومناسب.",
            "Backend: Auth + Authorization + secure APIs + secrets + resilience.",
            "Database: فصل منطقي لنطاقات الهوية والعلاج والدفع والأمان والبحث.",
            "Monitoring: نراقب الخدمة، مش محتوى العلاج.",
          ],
        },
      ],
    },
    {
      id: 102,
      type: "content",
      title: "مجالات التقنية الحساسة",
      content: [
        {
          type: "list",
          items: [
            "Opaque internal IDs.",
            "Passkeys / strong auth.",
            "MFA للمعالجين والإدارة.",
            "Device management.",
            "E2EE + key lifecycle.",
            "WebRTC / STUN / TURN / relay.",
            "Protected Voice.",
            "Secure files.",
            "Notification privacy.",
            "Encrypted backups.",
            "Regional/cloud strategy.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "ممنوع Custom Cryptography: نستخدم تصاميم ومكتبات معروفة ويُراجعها متخصصون.",
        },
      ],
    },
    {
      id: 103,
      type: "content",
      title: "Security References",
      content: [
        {
          type: "list",
          items: [
            "OWASP ASVS — Application Security.",
            "OWASP MASVS — Mobile/App Security.",
            "NIST SSDF — Secure Software Development.",
            "NIST Privacy Framework — Privacy Risk.",
            "WCAG 2.2 — Accessibility.",
            "WebRTC — real-time media.",
          ],
        },
        {
          type: "text",
          text: "دي مراجع تنظيمية وتقنية تساعدنا نحدد المطلوب، مش شهادة تلقائية إن النظام آمن.",
        },
      ],
    },
    {
      id: 104,
      type: "content",
      title: "AI في المؤسسة: قوة إنتاجية، مش سلطة سريرية",
      content: [
        {
          type: "list",
          items: [
            "Research: تلخيص مصادر، مصفوفات منافسين، تنظيم الأدلة.",
            "Strategy: سيناريوهات ومخاطر وBusiness Model alternatives.",
            "Brand: Naming وTaglines وPositioning.",
            "UX/UI: Flows وIA وMicrocopy وHeuristics.",
            "Product: PRDs وStories وAcceptance Criteria.",
            "Coding: Prototyping + tests + documentation.",
            "Operations: SOPs + ticket classification + routine summaries.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الإنسان يراجع المصادر، السلامة، القانون، الطب، ويملك القرار النهائي.",
        },
      ],
    },
    {
      id: 105,
      type: "table",
      title: "AI Tools — لقطة سبتمبر 2026",
      content: [
        {
          type: "table",
          headers: ["الأداة", "استخدام مناسب", "ملاحظة"],
          rows: [
            [
              "ChatGPT Free",
              "Research / strategy / writing",
              "بدون بيانات علاج حساسة",
            ],
            ["Claude Free", "Analysis / writing", "بدون محتوى سريري حساس"],
            ["Perplexity", "Source discovery", "راجع المصادر"],
            [
              "Gemini Free",
              "Research + multimodal ideation",
              "تحقق من الخطة والخصوصية",
            ],
            ["Figma Starter", "UX/UI + wireframes", "لا بيانات مرضى"],
            ["Canva Free", "Visual/content", "لا بيانات سريرية"],
            ["GitHub Copilot Free", "Coding / tests", "مراجعة بشرية"],
            ["Cursor Hobby", "Prototyping", "راجع الكود"],
            [
              "Lovable / Bolt / v0 / Builder",
              "Prototyping",
              "سرعة النمو ≠ جاهزية إنتاج",
            ],
          ],
        },
      ],
      notes:
        "الأدوات والخطط تتغير؛ هذه لقطة مصدرية من README وليست وعدًا دائمًا.",
    },
    {
      id: 106,
      type: "content",
      title: "AI Data Rule",
      content: [
        {
          type: "quote",
          text: "استخدم AI كطبقة إنتاجية، مش كـTrust Boundary.",
        },
        {
          type: "list",
          items: [
            "Consumer AI: استخدم Public/Synthetic/Non-sensitive data.",
            "البيانات الحساسة تحتاج بيئة معتمدة وعقود وضوابط مناسبة.",
            "ممنوع وضع Raw Therapy Data في أدوات AI استهلاكية.",
            "الصوت العلاجي الخام لا يذهب لأدوات Voice عامة بدون موافقة الخصوصية والقانون.",
          ],
        },
      ],
    },
    {
      id: 107,
      type: "content",
      title: "تشغيل المؤسسة: من غير ما نخلط الأدوار",
      content: [
        {
          type: "text",
          text: "المؤسسة الأفضل يكون عندها 3 أنظمة مستقلة لكن متصلة:",
        },
        {
          type: "diagram",
          lines: [
            "CARE SYSTEM",
            "Therapists + clinical governance + sessions + notes + crisis",
            "TRUST SYSTEM",
            "Privacy + security + identity + consent + audits + data governance",
            "GROWTH SYSTEM",
            "Marketing + partnerships + product + revenue + community + education/events",
          ],
        },
      ],
    },
    {
      id: 108,
      type: "content",
      title: "دورة البيانات من أولها لآخرها",
      content: [
        {
          type: "diagram",
          lines: [
            "Collect",
            "↓",
            "Use for declared purpose",
            "↓",
            "Store securely + role limits",
            "↓",
            "Share minimum necessary",
            "↓",
            "Retain by data class",
            "↓",
            "Delete when legally/clinically possible",
            "↓",
            "Archive / Legal Hold when required",
          ],
        },
        {
          type: "list",
          items: [
            "الهوية المستعارة.",
            "هوية حقيقية عند الضرورة.",
            "Credentials للمعالجين.",
            "Clinical data.",
            "Messages / media metadata.",
            "Payment.",
            "IP / network.",
            "Location.",
            "Security / support / crisis / research / partner data.",
          ],
        },
      ],
    },
    {
      id: 109,
      type: "content",
      title: "برنامج Security كامل مش مجرد Encryption",
      content: [
        {
          type: "list",
          items: [
            "Secure by Design.",
            "Least Privilege.",
            "Defense in Depth.",
            "Assume Compromise.",
            "Separate Keys.",
            "Protect Secrets.",
            "Redacted Logs.",
            "Continuous Monitoring.",
            "External Testing.",
            "Tested Recovery.",
          ],
        },
        {
          type: "diagram",
          lines: [
            "Threat Model",
            "→ Architecture",
            "→ Implementation",
            "→ Code Review",
            "→ Automated Tests",
            "→ Independent Assessment",
            "→ Remediation",
            "→ Monitoring",
            "→ Incident Response",
            "→ Repeat",
          ],
        },
      ],
    },
    {
      id: 110,
      type: "content",
      title: "إيه اللي يتسجل وإيه اللي مايتسجلش؟",
      content: [
        {
          type: "table",
          headers: ["نسجل", "ماينفعش يكون Logging عادي"],
          rows: [
            ["Security events", "Raw message bodies"],
            ["Authorization decisions", "Clinical notes"],
            ["Authentication failures", "Audio transcripts الحساسة"],
            ["Infrastructure health", "أي محتوى علاجي غير ضروري للتشغيل"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "السجل الأمني هدفه الأمن والـAudit، مش بناء نسخة تانية من جلسات العلاج.",
        },
      ],
    },
    {
      id: 111,
      type: "content",
      title: "الوصول الحساس له شروط",
      content: [
        {
          type: "list",
          items: [
            "Role واضح.",
            "سبب واضح.",
            "Scope محدد.",
            "Time limit.",
            "Audit.",
            "Review بعد التنفيذ.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الـBreak-glass مش «وضع طبيعي». هو استثناء محدود ومبرر عندما يتطلب القانون أو السلامة ذلك.",
        },
      ],
    },
    {
      id: 112,
      type: "content",
      title: "35 خطر أساسي… والأهم فيهم",
      content: [
        {
          type: "list",
          items: [
            "Clinical harm / missed crisis.",
            "Unqualified therapist.",
            "Identity leakage.",
            "Insider abuse.",
            "E2EE/key compromise.",
            "Account takeover.",
            "Cross-border violation.",
            "Privacy non-compliance.",
            "Outdated crisis resources.",
            "Insufficient urgent supply.",
            "Urgent used as emergency.",
            "Protected voice harms alliance.",
          ],
        },
      ],
    },
    {
      id: 113,
      type: "content",
      title: "تكملة أهم المخاطر",
      content: [
        {
          type: "list",
          items: [
            "Payment fraud / chargebacks.",
            "Weak unit economics.",
            "Low user trust.",
            "Therapist recruitment/churn.",
            "Vendor/cloud breach.",
            "Excessive third-party telemetry.",
            "Backup/deletion conflict.",
            "Research misuse.",
            "AI data leak.",
            "Matching bias.",
            "Partner identity leakage.",
            "Shared-device leakage.",
          ],
        },
      ],
    },
    {
      id: 114,
      type: "content",
      title: "أكبر خطر استراتيجي",
      content: [
        {
          type: "quote",
          text: "Scope Explosion",
        },
        {
          type: "text",
          text: "أخطر سيناريو إننا نحاول نطلق علاج + Urgent + Crisis + Protected Voice + E2EE + Video + Research + Education + Government + Corporate كله مرة واحدة قبل ما نثبت محرك الرعاية نفسه.",
        },
        {
          type: "callout",
          variant: "info",
          text: "الحل: نثبت Workflow واحد عالي الجودة، وبعدها نوسّع.",
        },
      ],
    },
    {
      id: 115,
      type: "content",
      title: "أصعب جزء تقني",
      content: [
        {
          type: "text",
          text: "تركيب E2EE + Multi-device Identity + Secure Media + Metadata minimization + Abuse prevention + Crisis handling + Payment separation + Recovery أصعب بكتير من Booking App عادي.",
        },
        {
          type: "callout",
          variant: "info",
          text: "ده محتاج Architecture وThreat Model ومراجعة Security حقيقية، مش مجرد AI-generated code.",
        },
      ],
    },
    {
      id: 116,
      type: "content",
      title: "Protected Voice: ميزة قوية لكن مش أول افتراض",
      content: [
        {
          type: "text",
          text: "Protected Voice ممكن يبقى Differentiator مهم، لكنه تقنيًا وسريريًا حساس.",
        },
        {
          type: "list",
          items: [
            "لازم اختبار وضوح الصوت.",
            "Latency.",
            "التعبير العاطفي.",
            "تأثير اللهجة.",
            "العلاقة العلاجية.",
            "مقاومة محاولات إعادة التعرف.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "قد تكون Experimental / staged feature بدل Day-One requirement.",
        },
      ],
    },
    {
      id: 117,
      type: "content",
      title: "إيه اللي ممكن يضر العلاج نفسه؟",
      content: [
        {
          type: "list",
          items: [
            "قلة السياق السريري.",
            "Friction زيادة عن اللزوم.",
            "تحويل الصوت يضر Rapport.",
            "ضعف الاستمرارية.",
            "جودة Therapist ضعيفة.",
            "حدود Crisis غير واضحة.",
            "مشاكل تقنية أثناء الجلسة.",
          ],
        },
      ],
    },
    {
      id: 118,
      type: "content",
      title: "إيه اللي ممكن يبعد المعالجين؟",
      content: [
        {
          type: "list",
          items: [
            "Payout قليل.",
            "Demand ضعيف.",
            "Admin كتير.",
            "مخاطر مع عملاء غير آمنين.",
            "أدوات Clinical ضعيفة.",
            "عدم وضوح قانوني.",
            "معاملة المعالج كأنه مجرد Inventory في Marketplace.",
          ],
        },
      ],
    },
    {
      id: 119,
      type: "content",
      title: "إيه اللي ممكن يدمّر الثقة؟",
      content: [
        {
          type: "list",
          items: [
            "Privacy breach.",
            "Privacy claims مبالغ فيها.",
            "Data use غير معلن.",
            "Employer / partner يستلم معلومة المستخدم كان فاكرها خاصة.",
            "عدم وجود دليل على الأمان رغم كثرة الشعارات.",
          ],
        },
      ],
    },
    {
      id: 120,
      type: "table",
      title: "ترتيب البناء بدل محاولة بناء كل شيء",
      content: [
        {
          type: "table",
          headers: ["الطبقة", "التركيز"],
          rows: [
            [
              "Must Have",
              "Pseudonymity + verified therapists + clinical governance + privacy/security foundation + scheduled therapy + crisis path + documentation",
            ],
            [
              "Should Have",
              "Matching + voice messages + video + urgent + multi-device + partner entitlements + outcome measures",
            ],
            [
              "Could Have",
              "Groups + therapist community + education library + portals + advanced analytics",
            ],
            [
              "Later",
              "Government integration + research platform + academy + public programs + API/white-label + regional expansion",
            ],
            [
              "Experimental",
              "Protected Voice at scale + privacy-preserving ML + on-device risk assistance + advanced cryptographic identity",
            ],
            [
              "Do Not Build Yet",
              "AI therapist core + social network + ad network + therapy-data marketplace + continuous location/emotion surveillance + default recording",
            ],
          ],
        },
      ],
    },
    {
      id: 121,
      type: "content",
      title: "الموديل الاقتصادي على مراحل",
      content: [
        {
          type: "table",
          headers: ["المرحلة", "مصادر الإيراد"],
          rows: [
            [
              "Now",
              "B2C therapy + limited partner-funded care + optional professional tools",
            ],
            [
              "Near Future",
              "Packages + B2B employers + universities + NGOs + therapist SaaS + workshops",
            ],
            [
              "Later",
              "B2G + research services + continuing education + conferences + public-health contracts",
            ],
            [
              "Long-term",
              "Secure infrastructure/API + white-label + embedded care + research platform + international network",
            ],
          ],
        },
      ],
    },
    {
      id: 122,
      type: "content",
      title: "التنظيم اليوم الأول مقابل النمو",
      content: [
        {
          type: "list",
          items: [
            "Day 1: 5 أدوار أساسية تشغّل المؤسسة بأمان.",
            "بعدها: PM + Designer + Engineers + Trust & Safety.",
            "ثم: Security + Privacy + QA + Research + Growth + B2B + Government + Clinical Quality + Finance/HR.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الهدف إن أقل فريق يكون قادر يشغّل خدمة مسؤولة، مش بس يطلع Release.",
        },
      ],
    },
    {
      id: 123,
      type: "content",
      title: "المؤسسة تتوسع مع الوقت كـKnowledge System",
      content: [
        {
          type: "list",
          items: [
            "Public education.",
            "Student programs.",
            "Professional workshops.",
            "Research lab.",
            "Evidence library.",
            "Books / media.",
            "Professional development.",
            "Conferences.",
            "Academic partnerships.",
          ],
        },
      ],
    },
    {
      id: 124,
      type: "content",
      title: "أجندة الـResearch Labs",
      content: [
        {
          type: "list",
          items: [
            "Digital Mental Health Lab.",
            "Behavioral Science Lab.",
            "Privacy & Health Technology Lab.",
            "Arabic Mental Health Lab.",
            "Clinical Outcomes Lab.",
            "AI + Psychology Safety Lab.",
            "Public Mental Health Systems Lab.",
          ],
        },
      ],
    },
    {
      id: 125,
      type: "content",
      title: "لماذا البحث جزء من المؤسسة؟",
      content: [
        {
          type: "text",
          text: "عشان أي Feature جديدة مايبقاش أساسها «شكلها حلو». نحتاج Evidence عن الفعالية والخصوصية والعدالة والسلامة.",
        },
        {
          type: "callout",
          variant: "info",
          text: "كل Novel Feature لها Evidence/Risk basis خاص بها، ومش كل Digital Feature مثبت سريريًا لمجرد وجوده.",
        },
      ],
    },
    {
      id: 126,
      type: "content",
      title: "الفعاليات كأداة نمو وأثر",
      content: [
        {
          type: "list",
          items: [
            "تجيب Therapists.",
            "تعلم المستخدمين.",
            "تبني علاقات مؤسسية.",
            "تدعم PR.",
            "تبادل Research.",
            "تفتح قنوات Government.",
            "تزيد Brand authority.",
          ],
        },
        {
          type: "text",
          text: "لكن الـEvents لازم تخدم الرعاية والرسالة، مش تبقى Business منفصل يشتت المؤسسة.",
        },
      ],
    },
    {
      id: 127,
      type: "table",
      title: "أنواع الشراكات الممكنة",
      content: [
        {
          type: "table",
          headers: ["النوع", "مثال"],
          rows: [
            ["Referral", "إحالة من وإلى جهات متخصصة"],
            ["Funded therapy", "جهة تمول جلسات للمستفيدين"],
            ["Free public service", "خدمة حكومية/مجتمعية مجانية"],
            ["Crisis support", "خدمة أزمة متصلة بالمنصة"],
            ["Public health", "برنامج صحة نفسية عام"],
            ["Technology integration", "ربط أنظمة أو خدمات"],
            ["Research", "أبحاث مشتركة"],
            ["Education", "برامج توعية وتعليم"],
            ["Professional training", "تطوير مهني"],
            ["Infrastructure/API", "الخدمة تصبح طبقة تقنية لمؤسسة أخرى"],
          ],
        },
      ],
    },
    {
      id: 128,
      type: "content",
      title: "Partner Privacy Firewall",
      content: [
        {
          type: "diagram",
          lines: [
            "Sponsor",
            "↓",
            "Entitlement / Voucher",
            "↓",
            "Pseudonymous User",
            "↓",
            "Clinical Care",
          ],
        },
        {
          type: "text",
          text: "الجهة الممولة تشوف عادةً استخدامًا إجماليًا وبيانات برنامج، وليس أسماء الناس أو محتوى جلساتهم، إلا إذا كان هناك سبب قانوني/تشغيلي واضح ومحدد.",
        },
      ],
    },
    {
      id: 129,
      type: "content",
      title: "Marketing: ثقة قبل الـReach",
      content: [
        {
          type: "list",
          items: [
            "التسويق لازم يشرح المنتج بدل ما يبالغ فيه.",
            "Privacy explainers.",
            "Verification.",
            "Research.",
            "Expert voices.",
            "Real product demos.",
            "Transparent policies.",
            "Stories عن الوصول والرعاية بدون كشف حساس.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "اللغة التسويقية: «Pseudonymous by default» و«Reveal only what is necessary» بدل «Untraceable».",
        },
      ],
    },
    {
      id: 130,
      type: "content",
      title: "Retention هنا معناها Continuity",
      content: [
        {
          type: "list",
          items: [
            "Recurring appointments.",
            "استمرار مع نفس Therapist.",
            "Secure reminders.",
            "Rebooking.",
            "Matching help لو حصل Mismatch.",
            "Care plans عندما تكون مناسبة سريريًا.",
          ],
        },
        {
          type: "text",
          text: "الهدف مش إن المستخدم يفضل فاتح التطبيق؛ الهدف إن العلاج المناسب يكمل.",
        },
      ],
    },
    {
      id: 131,
      type: "content",
      title: "مؤشرات نجاح العميل",
      content: [
        {
          type: "list",
          items: [
            "Time to first appropriate care.",
            "Onboarding completion.",
            "Booking conversion.",
            "Session completion.",
            "Second-session continuation.",
            "Repeat care.",
            "Cancellations.",
            "Satisfaction.",
            "Working alliance عندما تكون طريقة القياس مناسبة.",
            "Crisis referral completion.",
          ],
        },
      ],
    },
    {
      id: 132,
      type: "content",
      title: "مؤشرات نجاح المعالج والمنصة",
      content: [
        {
          type: "list",
          items: [
            "Verification time.",
            "Profile activation.",
            "Utilization / fill rate.",
            "Response reliability.",
            "Therapist retention.",
            "Payout satisfaction.",
            "Contribution margin/session.",
            "CAC / LTV.",
            "B2B/B2G pipeline.",
            "Free / paid mix.",
          ],
        },
      ],
    },
    {
      id: 133,
      type: "content",
      title: "مؤشرات الخصوصية والأمان",
      content: [
        {
          type: "list",
          items: [
            "Privacy incidents.",
            "Unauthorized access.",
            "كمية البيانات الحساسة المخزنة.",
            "Retention duration.",
            "Exact-location records.",
            "Third-party trackers داخل therapy modules.",
            "Privileged access events.",
            "High-severity vulnerabilities.",
            "Patch time.",
            "Account takeover.",
            "Recovery success.",
            "Backup restore success.",
          ],
        },
      ],
    },
    {
      id: 134,
      type: "content",
      title: "مقاييس Clinical Safety",
      content: [
        {
          type: "list",
          items: [
            "Incidents per session volume.",
            "Crisis-routing success.",
            "Response times.",
            "False/missed escalation.",
            "Inappropriate provider assignment.",
            "Referral completion.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "الـNorth Star المقترح لازم يقيس «وصول مناسب لرعاية حقيقية» مع الثقة والسلامة، مش الوقت داخل التطبيق.",
        },
      ],
    },
    {
      id: 135,
      type: "content",
      title: "خطة التنفيذ من الفكرة إلى المؤسسة",
      content: [
        {
          type: "diagram",
          lines: [
            "1. Validate problem",
            "↓",
            "2. Clinical + legal feasibility",
            "↓",
            "3. Privacy threat model",
            "↓",
            "4. Business model",
            "↓",
            "5. UX research",
            "↓",
            "6. Prototype",
            "↓",
            "7. Therapist network",
            "↓",
            "8. Secure product build",
            "↓",
            "9. Pilot",
            "↓",
            "10. Launch",
            "↓",
            "11. Measure trust + outcomes",
            "↓",
            "12. Expand research / education / partnerships",
          ],
        },
      ],
    },
    {
      id: 136,
      type: "content",
      title: "مراحل المنتج: Now / Near Future / Later / Long-term",
      content: [
        {
          type: "table",
          headers: ["المرحلة", "التركيز"],
          rows: [
            [
              "Now",
              "Pseudonymous identity + therapist discovery + verification + scheduled therapy + secure communication + payment + crisis hub + basic PWA",
            ],
            [
              "Near Future",
              "Automatic matching + urgent sessions + protected voice pilot + secure video maturity + therapist tools + B2B/B2B2C",
            ],
            [
              "Later",
              "Professional education + research lab + events + NGO/public programs + institutional portals",
            ],
            [
              "Long-term",
              "Government integrations + APIs + white-label + regional expansion + academy + responsible clinical AI where supported",
            ],
          ],
        },
      ],
    },
    {
      id: 137,
      type: "content",
      title: "بوابات قبل التوسع",
      content: [
        {
          type: "list",
          items: [
            "Gate 1: هل المشكلة حقيقية؟",
            "Gate 2: هل الرعاية آمنة داخل النطاق؟",
            "Gate 3: هل التشغيل قانوني؟",
            "Gate 4: هل ادعاءات الخصوصية تصمد أمام Threat Model؟",
            "Gate 5: هل التقنية والاسترداد والدفع ثابتين؟",
            "Gate 6: هل لدينا Therapist supply كفاية؟",
            "Gate 7: هل الاقتصاد مستدام؟",
            "Gate 8: هل الـPilot ينجح؟",
            "Gate 9: هل الدعم والأمان والحوكمة يقدروا يكبروا؟",
          ],
        },
      ],
    },
    {
      id: 138,
      type: "content",
      title: "الأسئلة اللي لازم تتحسم",
      content: [
        {
          type: "list",
          items: [
            "إيه الكيان القانوني واسم المؤسسة؟",
            "مين أول جغرافيا؟",
            "إيه نطاق الخدمة السريري؟",
            "إيه الحد الفاصل بين Urgent وEmergency؟",
            "إيه أقل Intake سريري؟",
            "إيه نموذج الـNotes والسجلات؟",
            "إيه بالضبط اللي المنصة والمعالج والدعم يعرفوه؟",
            "إيه حدود E2EE والـMetadata؟",
            "إزاي المفاتيح والأجهزة والاسترداد تشتغل؟",
            "إيه نموذج السعر وتوزيع الإيراد؟",
            "مين أول جمهور وأول قناة نمو؟",
            "إيه أول دراسة بحثية ومن شريكها؟",
          ],
        },
      ],
    },
    {
      id: 139,
      type: "content",
      title: "المبادئ التشغيلية الأساسية",
      content: [
        {
          type: "list",
          items: [
            "ابنِ المؤسسة قبل ما تعتبر المشروع مجرد Software.",
            "حافظ على الرؤية، لكن رتّب التنفيذ.",
            "ابدأ بالبالغين لو ده يقلل تعقيد البداية، مع Pathway منفصل للقاصرين لاحقًا.",
            "خلّي هوية المعالج أقوى من هوية العميل.",
            "افصل الدفع والهوية والبيانات السريرية قدر الإمكان.",
            "استخدم pseudonymity بدل وعود «مجهول 100%».",
            "اعتبر IP وMetadata جزءًا من Privacy.",
          ],
        },
      ],
    },
    {
      id: 140,
      type: "content",
      title: "المبادئ التشغيلية — تكملة",
      content: [
        {
          type: "list",
          items: [
            "استخدم AI للإنتاجية، بحذر في السلطة السريرية.",
            "استخدم Synthetic Data قدر الإمكان.",
            "ماتحطش Raw Therapy Data في أدوات AI استهلاكية.",
            "خلّي Partner-funded care محميًا بالعقد والـArchitecture.",
            "انشر فقط Claims تقدر تثبتها.",
            "قِس النتائج والثقة، مش النمو بس.",
            "اعمل مراجعات مستقلة للخصوصية والأمان والـClinical.",
            "وسع للبحث والتعليم والفعاليات والـInfrastructure بعد ما يشتغل محرك الرعاية نفسه.",
          ],
        },
      ],
    },
    {
      id: 141,
      type: "diagram",
      title: "المؤسسة كلها في صورة واحدة",
      content: [
        {
          type: "diagram",
          lines: [
            "                المؤسسة",
            "                     │",
            "       ┌─────────────┼─────────────┐",
            "       │             │             │",
            "     CARE          TRUST        KNOWLEDGE",
            "       │             │             │",
            "   Therapists   Privacy/Sec    Research",
            "   Therapy      Identity       Education",
            "   Matching     Encryption     Evidence",
            "   Urgent       Governance     Training",
            "   Crisis       Audit          Publications",
            "       │             │             │",
            "       └─────────────┼─────────────┘",
            "                     │",
            "                PARTNERSHIPS",
            "                     │",
            "      Government / NGOs / Corporates / Universities",
            "                     ↓",
            "             PUBLIC-HEALTH IMPACT",
          ],
        },
        {
          type: "text",
          text: "المنصة الأولى تجلس أساسًا داخل CARE + TRUST، ثم تكبر المؤسسة حولها بالمعرفة والشراكات.",
        },
      ],
    },
    {
      id: 142,
      type: "content",
      title: "مراحل التنفيذ التفصيلية",
      content: [
        {
          type: "diagram",
          lines: [
            "0 Alignment",
            "→ 1 Problem Validation",
            "→ 2 Competitive Research",
            "→ 3 Institution Design",
            "→ 4 Legal Mapping",
            "→ 5 Clinical Governance",
            "→ 6 Business Model",
            "→ 7 Privacy Threat Model",
            "→ 8 Brand",
            "→ 9 UX Research",
            "→ 10 IA",
            "→ 11 Low-fi",
            "→ 12 High-fi",
            "→ 13 Product Spec",
            "→ 14 Tech Architecture",
            "→ 15 Security Architecture",
            "→ 16 Prototype",
            "→ 17 Therapist Pilot",
            "→ 18 Alpha",
            "→ 19 Security Review",
            "→ 20 Clinical Review",
            "→ 21 Legal Readiness",
            "→ 22 Controlled Pilot",
          ],
        },
      ],
    },
    {
      id: 143,
      type: "content",
      title: "من الـPilot إلى مؤسسة كاملة",
      content: [
        {
          type: "diagram",
          lines: [
            "23 Measurement",
            "→ 24 Iteration",
            "→ 25 Controlled Launch",
            "→ 26 Therapist Growth",
            "→ 27 User Growth",
            "→ 28 B2B/B2B2C",
            "→ 29 NGO/Public Programs",
            "→ 30 Research Arm",
            "→ 31 Education Arm",
            "→ 32 Events",
            "→ 33 Government Integration",
            "→ 34 Infrastructure",
            "→ 35 Regional Expansion",
            "→ 36 Global Expansion",
          ],
        },
      ],
    },
    {
      id: 144,
      type: "content",
      title: "ترتيب UX قبل الـUI",
      content: [
        {
          type: "list",
          items: [
            "Product principles.",
            "Personas.",
            "Jobs to Be Done.",
            "Journey maps.",
            "Information Architecture.",
            "User flows.",
            "Low-fidelity wireframes.",
            "Usability testing.",
            "High-fidelity UI.",
            "Design system.",
            "Accessibility.",
            "Privacy UX.",
            "Crisis UX.",
            "Prototype.",
            "Therapist/Admin/Partner UX.",
          ],
        },
      ],
    },
    {
      id: 145,
      type: "content",
      title: "أول 20 شاشة لازم نفهمها",
      content: [
        {
          type: "list",
          items: [
            "Landing.",
            "Privacy explanation.",
            "Pseudonymous onboarding.",
            "Avatar.",
            "Username/password/passkey.",
            "Recovery.",
            "Home.",
            "Therapist discovery.",
            "Therapist profile.",
            "Match Me.",
            "Talk Now.",
            "Emergency.",
            "Booking.",
            "Payment.",
            "Waiting room.",
            "Therapy room.",
            "Therapist onboarding.",
            "Therapist session.",
            "Notes.",
            "Privacy / Settings / Devices.",
          ],
        },
      ],
    },
    {
      id: 146,
      type: "content",
      title: "حالات الفشل اللي لازم التصميم يحسبها",
      content: [
        {
          type: "list",
          items: [
            "Weak internet.",
            "Therapist unavailable.",
            "Reconnecting.",
            "Payment failure.",
            "Session timeout.",
            "Recovery problem.",
            "Device revoked.",
            "Suspicious login.",
            "Crisis escalation.",
            "Emergency referral.",
            "Service outage.",
          ],
        },
      ],
    },
    {
      id: 147,
      type: "content",
      title: "Naming: المؤسسة لازم تعيش أكتر من أول Product",
      content: [
        {
          type: "text",
          text: "الاسم ماينفعش يحبس المؤسسة في «Therapy App» لو الخطة طويلة المدى فيها Research وEducation وProfessional Development وInfrastructure وشراكات عامة.",
        },
        {
          type: "list",
          items: [
            "One brand — أبسط.",
            "Endorsed brand — المؤسسة تظل المظلة.",
            "House of brands — Brands منفصلة حسب الجمهور.",
          ],
        },
      ],
    },
    {
      id: 148,
      type: "content",
      title: "أمثلة أسماء من مرحلة الـBrainstorm",
      content: [
        {
          type: "table",
          headers: ["اتجاه", "أمثلة"],
          rows: [
            [
              "Arabic-rooted",
              "Nawa، Awn، Wasl، Masar، Sukun، Sama، Rawa، Afaq، Namaa، Aman",
            ],
            [
              "Abstract / international",
              "Veyra، Veora، Avenra، Nuvora، Neria، Mavora، Oriva، Lumera، Sovara، Elora، Nuvia",
            ],
            [
              "Privacy / infrastructure tone",
              "Privia، Veilera، Veritya، Civora، Sentria، Nivora، Aegira",
            ],
            [
              "Platform-style",
              "Nook، Wasl، Masar، Sukun، Veora، Awn، Nava، Mira، Sora",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "دي أسماء Brainstorm، مش تأكيد على توفر Trademark أو Domain، وكثير منها قد يكون عالي التعارض.",
        },
      ],
    },
    {
      id: 149,
      type: "content",
      title: "طريقة اختيار الاسم",
      content: [
        {
          type: "list",
          items: [
            "نطلع 50–100 اسم.",
            "نراجع المعاني عربي/إنجليزي.",
            "اختبار النطق.",
            "Domains + handles.",
            "WIPO search.",
            "Egyptian/national trademark search مع counsel.",
            "Healthcare/software conflicts.",
            "Trademark classes.",
            "Legal screening.",
            "Reserve بعد الفحص.",
          ],
        },
      ],
    },
    {
      id: 150,
      type: "content",
      title: "جاهزية قانونية في مصر: Checklist",
      content: [
        {
          type: "list",
          items: [
            "تأسيس الكيان.",
            "الضرائب والمحاسبة.",
            "تصنيف الخدمة الصحية.",
            "ترخيص/اعتماد المهن.",
            "Telepsychology / telehealth.",
            "قواعد الصحة النفسية.",
            "Personal Data Protection Law + Executive Regulations.",
            "Sensitive health data.",
            "DPO عند اللزوم.",
            "Cross-border transfers.",
            "Payment compliance.",
            "Consumer protection.",
            "Electronic records.",
            "Advertising claims.",
            "Breach response.",
            "Data subject rights.",
            "Clinical record retention.",
            "Minors/consent.",
            "Crisis disclosure.",
            "Vendor contracts.",
            "Insurance/liability.",
            "Trademark/IP.",
            "Government procurement.",
            "Research ethics.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "ده Checklist للدراسة، مش رأي قانوني نهائي.",
        },
      ],
    },
    {
      id: 151,
      type: "content",
      title: "لماذا الخصوصية القانونية مهمة الآن؟",
      content: [
        {
          type: "text",
          text: "الـREADME يحدد أن بيانات الصحة النفسية حساسة ويشير إلى الإطار المصري المتعلق بحماية البيانات، مع متطلبات مرتبطة بالمعالجة عالية الخطورة وDPO ونقل البيانات والتعامل مع الحوادث.",
        },
        {
          type: "callout",
          variant: "info",
          text: "الوضع الدقيق للخدمة المقترحة لازم يراجعه Counsel مصري والجهة التنظيمية المختصة قبل الإطلاق.",
        },
      ],
    },
    {
      id: 152,
      type: "content",
      title: "Data Governance: كل Field له بطاقة تعريف",
      content: [
        {
          type: "list",
          items: [
            "Name.",
            "Classification.",
            "Purpose.",
            "Source.",
            "Controller / Processor role.",
            "Recipients.",
            "Access roles.",
            "Encryption.",
            "Storage region.",
            "Retention.",
            "Deletion.",
            "Legal basis / consent.",
            "Transfer mechanism.",
            "Incident process.",
          ],
        },
      ],
    },
    {
      id: 153,
      type: "content",
      title: "DPIA وVendor Review",
      content: [
        {
          type: "list",
          items: [
            "DPIA للمعالجة الحساسة، Matching/Profiling، Crisis، وAI.",
            "كل Vendor يتراجع على: Data access، Region، Subprocessors، Security، Retention، Deletion، AI training use، Breach terms، Transfers، Contracts.",
          ],
        },
      ],
    },
    {
      id: 154,
      type: "content",
      title: "صورة المنافسة كما يصفها البحث الموجود في الـREADME",
      content: [
        {
          type: "list",
          items: [
            "Shezlong — سوق مصري/إقليمي للعلاج ومختصين ووصول سريع.",
            "O7 — شبكة عربية ومطابقة/Filtering.",
            "Labayh — جلسات فردية ومجموعات/ويبينارات وخدمات فورية وبرامج وB2B.",
            "Vezeeta — Discovery وFilters وAvailability وBooking.",
            "BetterHelp — Matching + Messaging + Phone/Video.",
            "Talkspace — Messaging + live audio/video/chat.",
            "7 Cups — Anonymous support منفصل عن licensed therapy.",
            "Wysa — AI-first support مع human pathways.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "هذه لقطة بحثية من الوثيقة الأصلية؛ الخصائص والسياسات تتغير حسب البلد والوقت والخطة.",
        },
      ],
    },
    {
      id: 155,
      type: "content",
      title: "إحنا بنتعلم من المنافسين من غير ما نقلدهم",
      content: [
        {
          type: "list",
          items: [
            "Marketplace discovery.",
            "Matching.",
            "Instant/urgent access.",
            "Arabic professional networks.",
            "Asynchronous therapy.",
            "Anonymous peer support.",
            "Crisis specialization.",
          ],
        },
        {
          type: "text",
          text: "أما فرضية التمايز عندنا فتركز على عمق الـArchitecture والحوكمة، مش Feature واحدة.",
        },
      ],
    },
    {
      id: 156,
      type: "content",
      title: "Evidence: ليه لازم نكون حذرين؟",
      content: [
        {
          type: "list",
          items: [
            "الصحة النفسية عبء عالمي كبير مع فجوات وصول.",
            "الـDigital interventions ممكن تكون مفيدة، لكن فعاليتها تعتمد على التصميم والسكان والالتزام والتنفيذ والسياق.",
            "Telepsychology ممارسة لها اعتبارات خاصة: Competence وConsent وPrivacy وDocumentation وJurisdiction وEmergency.",
            "Digital crisis/addiction tools ممكن تكون مكونات دعم محددة، لكنها مش تلقائيًا بديل للعلاج المتخصص.",
            "AI في الصحة يحتاج Safety وEthics وEquity وHuman rights وPrivacy وGovernance.",
          ],
        },
      ],
    },
    {
      id: 157,
      type: "content",
      title: "المراجع الأمنية والتقنية داخل التصور",
      content: [
        {
          type: "list",
          items: [
            "OWASP ASVS 5.x.",
            "OWASP MASVS.",
            "NIST SSDF.",
            "NIST Privacy Framework.",
            "WCAG 2.2.",
            "Established cryptographic protocols.",
            "WebRTC + secure media + relay infrastructure.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "المرجع الأمني يساعدنا نبني منهج، لكنه مش شهادة تلقائية على أمان المنتج.",
        },
      ],
    },
    {
      id: 158,
      type: "content",
      title: "خلاصة التفكير النقدي",
      content: [
        {
          type: "quote",
          text: "مش هدفنا أقصى Anonymity بأي ثمن.",
        },
        {
          type: "text",
          text: "هدفنا أقصى Privacy عملية نقدر نحققها مع رعاية بشرية حقيقية، Safety، Continuity، Accessibility، اقتصاد مستدام، ودليل علمي.",
        },
        {
          type: "diagram",
          lines: [
            "Privacy",
            "↔",
            "Clinical Quality",
            "↔",
            "Safety",
            "↔",
            "Technology",
            "↔",
            "Evidence",
          ],
        },
      ],
    },
    {
      id: 159,
      type: "closing",
      title: "المبدأ النهائي للمؤسسة",
      content: [
        {
          type: "quote",
          text: "Privacy that enables therapy — not privacy that replaces therapy.",
        },
        {
          type: "text",
          text: "الخصوصية هنا وسيلة عشان تقلل الخوف وتسهّل طلب العلاج، مش بديل عن المعالج أو الحوكمة أو الأمان.",
        },
      ],
    },
  ];

  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderContentItem(item) {
    if (!item || !item.type) return "";
    switch (item.type) {
      case "text":
        return '<p class="nfs-text">' + esc(item.text) + "</p>";

      case "list":
        return (
          '<ul class="nfs-list">' +
          (item.items || [])
            .map(function (x) {
              return "<li>" + esc(x) + "</li>";
            })
            .join("") +
          "</ul>"
        );

      case "table":
        var th = (item.headers || [])
          .map(function (h) {
            return "<th>" + esc(h) + "</th>";
          })
          .join("");

        var tr = (item.rows || [])
          .map(function (r) {
            return (
              "<tr>" +
              r
                .map(function (c) {
                  return "<td>" + esc(c) + "</td>";
                })
                .join("") +
              "</tr>"
            );
          })
          .join("");

        return (
          '<div class="nfs-table-wrap"><table class="nfs-table"><thead><tr>' +
          th +
          "</tr></thead><tbody>" +
          tr +
          "</tbody></table></div>"
        );

      case "diagram":
        return (
          '<div class="nfs-diagram">' +
          (item.lines || [])
            .map(function (l) {
              return '<div class="nfs-diag-line">' + esc(l) + "</div>";
            })
            .join("") +
          "</div>"
        );

      case "quote":
        return (
          '<blockquote class="nfs-quote">' + esc(item.text) + "</blockquote>"
        );

      case "callout":
        return (
          '<div class="nfs-callout nfs-callout--' +
          esc(item.variant || "info") +
          '">' +
          esc(item.text) +
          "</div>"
        );

      default:
        return "";
    }
  }

  function renderSlide(slide, index, total) {
    var idx = index == null ? slide.id - 1 : index,
      tot = total || slides.length,
      num = String(idx + 1).padStart(2, "0");

    var cls = "nfs-slide nfs-slide--" + esc(slide.type);

    var body = (slide.content || []).map(renderContentItem).join("");

    var sub = slide.subtitle
      ? '<div class="nfs-subtitle">' + esc(slide.subtitle) + "</div>"
      : "";

    var tag = slide.type === "cover" || slide.type === "closing" ? "h1" : "h2";

    return (
      '<article class="' +
      cls +
      '" id="nfs-slide-' +
      num +
      '" data-slide="' +
      slide.id +
      '" dir="rtl" lang="ar" role="group" aria-roledescription="slide" aria-label="شريحة ' +
      (idx + 1) +
      " من " +
      tot +
      '">' +
      '<div class="nfs-slide-head"><span class="nfs-counter">' +
      num +
      " / " +
      String(tot).padStart(2, "0") +
      "</span></div>" +
      '<div class="nfs-slide-body">' +
      sub +
      "<" +
      tag +
      ' class="nfs-title">' +
      esc(slide.title) +
      "</" +
      tag +
      ">" +
      body +
      "</div></article>"
    );
  }

  function injectPresentation(id) {
    var host = document.getElementById(id);
    if (!host) return null;

    host.classList.add("nfs-root");

    var inner = "";
    for (var i = 0; i < slides.length; i++) {
      inner += renderSlide(slides[i], i, slides.length);
    }

    host.innerHTML =
      '<div class="nfs-viewport" role="region" aria-label="عرض تقديمي">' +
      inner +
      "</div>" +
      '<nav class="nfs-nav" aria-label="التنقل">' +
      '<button class="nfs-btn nfs-btn--prev" type="button" aria-label="السابق">‹ السابق</button>' +
      '<div class="nfs-dots" role="tablist"></div>' +
      '<button class="nfs-btn nfs-btn--next" type="button" aria-label="التالي">التالي ›</button>' +
      "</nav>";

    return host;
  }

  function mount(id, options) {
    options = options || {};

    var host = injectPresentation(id);
    if (!host) {
      console.warn("Presentation: عنصر #" + id + " غير موجود");
      return null;
    }

    var viewport = host.querySelector(".nfs-viewport"),
      articles = host.querySelectorAll(".nfs-slide"),
      dotsWrap = host.querySelector(".nfs-dots"),
      prevBtn = host.querySelector(".nfs-btn--prev"),
      nextBtn = host.querySelector(".nfs-btn--next");

    var total = articles.length,
      current = 0;

    if (options.startAt >= 1 && options.startAt <= total) {
      current = options.startAt - 1;
    }

    if (options.showDots !== false) {
      for (var i = 0; i < total; i++) {
        var d = document.createElement("button");

        d.type = "button";
        d.className = "nfs-dot";
        d.setAttribute("role", "tab");
        d.setAttribute("aria-label", "اذهب للشريحة " + (i + 1));
        d.dataset.i = i;

        d.addEventListener(
          "click",
          (function (j) {
            return function () {
              goTo(j + 1);
            };
          })(i)
        );

        dotsWrap.appendChild(d);
      }
    } else {
      dotsWrap.style.display = "none";
    }

    function apply() {
      for (var i = 0; i < total; i++) {
        i === current
          ? articles[i].classList.add("is-active")
          : articles[i].classList.remove("is-active");
      }

      var dots = dotsWrap.querySelectorAll(".nfs-dot");

      for (var k = 0; k < dots.length; k++) {
        k === current
          ? dots[k].classList.add("is-active")
          : dots[k].classList.remove("is-active");
      }

      prevBtn.disabled = current === 0;
      nextBtn.disabled = current === total - 1;

      try {
        history.replaceState(
          null,
          "",
          "#slide-" + String(current + 1).padStart(2, "0")
        );
      } catch (e) {}
    }

    function goTo(n) {
      if (n < 1) n = 1;
      if (n > total) n = total;
      current = n - 1;
      apply();
    }

    function next() {
      if (current < total - 1) {
        current++;
        apply();
      }
    }

    function prev() {
      if (current > 0) {
        current--;
        apply();
      }
    }

    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);

    function onKey(e) {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;

      if (e.key === "ArrowLeft" || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowRight" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(1);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total);
      }
    }

    document.addEventListener("keydown", onKey);

    var tx = 0,
      ty = 0;

    function onStart(e) {
      if (e.touches && e.touches[0]) {
        tx = e.touches[0].clientX;
        ty = e.touches[0].clientY;
      }
    }

    function onEnd(e) {
      if (e.changedTouches && e.changedTouches[0]) {
        var dx = e.changedTouches[0].clientX - tx,
          dy = e.changedTouches[0].clientY - ty;

        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
          if (dx > 0) next();
          else prev();
        }
      }
    }

    viewport.addEventListener("touchstart", onStart, { passive: true });
    viewport.addEventListener("touchend", onEnd, { passive: true });

    try {
      var m = (location.hash || "").match(/#slide-(\d+)/);

      if (m) {
        var n = parseInt(m[1], 10);

        if (n >= 1 && n <= total) {
          current = n - 1;
        }
      }
    } catch (e) {}

    apply();

    return {
      next: next,
      prev: prev,
      goTo: goTo,
      current: function () {
        return current + 1;
      },
      total: total,
      destroy: function () {
        document.removeEventListener("keydown", onKey);
        host.innerHTML = "";
      },
    };
  }

  return {
    slides: slides,
    renderSlide: renderSlide,
    injectPresentation: injectPresentation,
    mount: mount,
    exportSlidesAsJSON: function () {
      return JSON.stringify(slides, null, 2);
    },
  };
});
