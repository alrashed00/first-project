/* ===== Preloader ===== */
window.addEventListener('load', function() {
    document.getElementById('preloader').classList.add('hidden');
});

/* ===== Particles ===== */
(function createParticles() {
    var container = document.getElementById('heroParticles');
    var colors = ['#6c63ff', '#00d4ff', '#ff6584'];
    for (var i = 0; i < 30; i++) {
        var p = document.createElement('div');
        p.className = 'particle';
        var size = Math.random() * 6 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDuration = (Math.random() * 10 + 8) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(p);
    }
})();

/* ===== Scroll Progress ===== */
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    document.getElementById('scrollProgress').style.width = pct + '%';
});

/* ===== Back to Top ===== */
var backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    backBtn.classList.toggle('visible', window.scrollY > 500);
});
backBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== Navbar Scroll ===== */
window.addEventListener('scroll', function() {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

/* ===== Hamburger Menu ===== */
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() { navLinks.classList.remove('active'); });
});

/* ===== Theme Toggle ===== */
var themeToggle = document.getElementById('themeToggle');
var savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    var isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

/* ===== Language Toggle ===== */
var langToggle = document.getElementById('langToggle');
var htmlEl = document.documentElement;
var savedLang = localStorage.getItem('language') || 'en';

function applyLang(lang) {
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.toggle('arabic', lang === 'ar');
    langToggle.textContent = lang === 'ar' ? 'English' : 'العربية';
    document.querySelectorAll('[data-' + lang + ']').forEach(function(el) {
        var tag = el.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') {
            el.placeholder = el.getAttribute('data-' + lang + '-placeholder') || '';
        } else {
            el.textContent = el.getAttribute('data-' + lang) || '';
        }
    });
}
applyLang(savedLang);

langToggle.addEventListener('click', function() {
    var newLang = htmlEl.getAttribute('lang') === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', newLang);
    applyLang(newLang);
});

/* ===== AI Solutions Engine ===== */
var solutionsDB = {
    business: {
        en: [
            { icon: 'fas fa-chart-line', title: 'Data-Driven Decision Making', text: 'Implement advanced analytics tools to gather insights from your business data, enabling more informed and strategic decisions that improve efficiency and profitability.' },
            { icon: 'fas fa-users', title: 'Customer-Centric Approach', text: 'Develop a deep understanding of your customers through research and feedback mechanisms, then align your products and services to better meet their needs.' },
            { icon: 'fas fa-cogs', title: 'Process Optimization', text: 'Analyze and streamline your business processes to eliminate inefficiencies, reduce costs, and improve overall productivity through automation.' },
            { icon: 'fas fa-handshake', title: 'Strategic Partnerships', text: 'Form alliances with complementary businesses to expand your market reach, share resources, and create mutually beneficial growth opportunities.' },
            { icon: 'fas fa-lightbulb', title: 'Innovation Culture', text: 'Foster an environment that encourages creativity and experimentation, allowing your team to develop new ideas that differentiate your business.' }
        ],
        ar: [
            { icon: 'fas fa-chart-line', title: 'اتخاذ قرارات مبنية على البيانات', text: 'تنفيذ أدوات تحليل متقدمة لجمع رؤى من بيانات عملك، مما يتيح اتخاذ قرارات أكثر استنارة واستراتيجية تحسن الكفاءة والربحية.' },
            { icon: 'fas fa-users', title: 'نهج يركز على العميل', text: 'تطوير فهم عميق لعملائك من خلال البحث وآليات التغذية الراجعة، ثم محاذاة منتجاتك وخدماتك لتلبية احتياجاتهم بشكل أفضل.' },
            { icon: 'fas fa-cogs', title: 'تحسين العمليات', text: 'تحليل وتبسيط عمليات عملك للقضاء على عدم الكفاءة وتقليل التكاليف وتحسين الإنتاجية العامة من خلال الأتمتة.' },
            { icon: 'fas fa-handshake', title: 'الشراكات الاستراتيجية', text: 'تشكيل تحالفات مع الأعمال التكميلية لتوسيع نطاق وصولك إلى السوق ومشاركة الموارد وخلق فرص نمو مفيدة للطرفين.' },
            { icon: 'fas fa-lightbulb', title: 'ثقافة الابتكار', text: 'تعزيز بيئة تشجع الإبداع والتجريب، مما يسمح لفريقك بتطوير أفكار جديدة تميز عملك في السوق.' }
        ]
    },
    technology: {
        en: [
            { icon: 'fas fa-shield-alt', title: 'Enhanced Security Measures', text: 'Implement multi-layered security protocols including encryption, authentication systems, and regular security audits to protect your digital assets.' },
            { icon: 'fas fa-server', title: 'Scalable Architecture', text: 'Design your systems with scalability in mind, using cloud services and microservices to handle growth without performance degradation.' },
            { icon: 'fas fa-robot', title: 'AI Integration', text: 'Incorporate artificial intelligence to automate repetitive tasks, provide intelligent insights, and enhance user experiences through personalization.' },
            { icon: 'fas fa-mobile-alt', title: 'Multi-Platform Compatibility', text: 'Ensure your technology works seamlessly across different devices and platforms using responsive design and cross-platform frameworks.' },
            { icon: 'fas fa-code', title: 'Open Source Adoption', text: 'Leverage open-source solutions to reduce development costs, benefit from community-driven innovation, and maintain flexibility.' }
        ],
        ar: [
            { icon: 'fas fa-shield-alt', title: 'تدابير أمنية معززة', text: 'تنفيذ بروتوكولات أمنية متعددة الطبقات بما في ذلك التشفير وأنظمة المصادقة والتدقيقات الأمنية لحماية أصولك الرقمية.' },
            { icon: 'fas fa-server', title: 'هندسة معمارية قابلة للتوسع', text: 'تصميم أنظمتك مع مراعاة قابلية التوسع باستخدام خدمات السحابة والخدمات المصغرة للتعامل مع النمو دون تدهور الأداء.' },
            { icon: 'fas fa-robot', title: 'دمج الذكاء الاصطناعي', text: 'دمج قدرات الذكاء الاصطناعي لأتمتة المهام المتكررة وتقديم رؤى ذكية وتعزيز تجارب المستخدم من خلال التخصيص.' },
            { icon: 'fas fa-mobile-alt', title: 'توافق متعدد المنصات', text: 'التأكد من أن تقنيتك تعمل بسلاسة عبر مختلف الأجهزة والمنصات باستخدام التصميم المتجاوب وأطر التطوير المتعددة.' },
            { icon: 'fas fa-code', title: 'تبني المصادر المفتوحة', text: 'الاستفادة من حلول المصادر المفتوحة لتقليل تكاليف التطوير والاستفادة من الابتكار الجماعي والحفاظ على المرونة.' }
        ]
    },
    marketing: {
        en: [
            { icon: 'fas fa-bullhorn', title: 'Content Marketing Strategy', text: 'Develop valuable, relevant content that addresses your audience pain points, establishing your brand as a thought leader and driving organic traffic.' },
            { icon: 'fas fa-search', title: 'SEO Optimization', text: 'Improve your website visibility in search results through keyword research, on-page optimization, and building quality backlinks.' },
            { icon: 'fas fa-share-alt', title: 'Social Media Engagement', text: 'Build an active presence on relevant platforms where your audience spends time, fostering conversations and creating shareable content.' },
            { icon: 'fas fa-envelope', title: 'Email Marketing Automation', text: 'Implement segmented email campaigns with personalized content triggered by user behavior to nurture leads and maintain engagement.' },
            { icon: 'fas fa-chart-bar', title: 'Performance Analytics', text: 'Track and analyze key marketing metrics to understand what works, allowing you to allocate resources effectively and optimize ROI.' }
        ],
        ar: [
            { icon: 'fas fa-bullhorn', title: 'استراتيجية تسويق المحتوى', text: 'تطوير محتوى قيم وذو صلة يعالج نقاط ألم جمهورك، وإنشاء علامتك التجارية كقائد فكري وجذب زيارات عضوية.' },
            { icon: 'fas fa-search', title: 'تحسين محركات البحث', text: 'تحسين ظهور موقعك في نتائج البحث من خلال بحث الكلمات الرئيسية والتحسين على الصفحة وبناء روابط عالية الجودة.' },
            { icon: 'fas fa-share-alt', title: 'التفاعل على وسائل التواصل', text: 'بناء حضور نشط على المنصات ذات الصلة حيث يقضي جمهورك الوقت وتعزيز المحادثات وإنشاء محتوى قابل للمشاركة.' },
            { icon: 'fas fa-envelope', title: 'أتمتة التسويق بالبريد الإلكتروني', text: 'تنفيذ حملات بريد إلكتروني مجزأة مع محتوى مخصص بناءً على سلوك المستخدم لرعاية العملاء المحتملين والحفاظ على التفاعل.' },
            { icon: 'fas fa-chart-bar', title: 'تحليلات الأداء', text: 'تتبع وتحليل مقاييس التسويق الرئيسية لفهم ما ينجح مما يسمح بتخصيص الموارد بفعالية وتحسين العائد على الاستثمار.' }
        ]
    },
    productivity: {
        en: [
            { icon: 'fas fa-tasks', title: 'Task Prioritization System', text: 'Implement a structured approach to prioritizing tasks based on impact and urgency, ensuring focus on high-value activities.' },
            { icon: 'fas fa-clock', title: 'Time Blocking Method', text: 'Organize your schedule into dedicated blocks for specific activities, minimizing context switching and improving focus.' },
            { icon: 'fas fa-ban', title: 'Distraction Elimination', text: 'Identify and remove common distractions in your work environment, creating focused periods for deeper concentration.' },
            { icon: 'fas fa-sync-alt', title: 'Workflow Automation', text: 'Automate repetitive tasks using appropriate tools and technologies, freeing up time for more valuable creative work.' },
            { icon: 'fas fa-brain', title: 'Energy Management', text: 'Align your most important tasks with peak energy levels and incorporate regular breaks for sustainable high performance.' }
        ],
        ar: [
            { icon: 'fas fa-tasks', title: 'نظام أولوية المهام', text: 'تنفيذ نهج منظم لأولوية المهام بناءً على التأثير والضرورة لضمان التركيز على الأنشطة عالية القيمة.' },
            { icon: 'fas fa-clock', title: 'طريقة حظر الوقت', text: 'تنظيم جدولك في كتل وقت مخصصة لأنشطة محددة لتقليل تبديل السياق وتحسين التركيز.' },
            { icon: 'fas fa-ban', title: 'القضاء على التشتت', text: 'تحديد وإزالة التشتت الشائع في بيئة العمل وخلق فترات عمل مركزة لتركيز أعمق.' },
            { icon: 'fas fa-sync-alt', title: 'أتمتة سير العمل', text: 'أتمتة المهام المتكررة باستخدام الأدوات والتقنيات المناسبة لتحرير الوقت لعمل إبداعي أكثر قيمة.' },
            { icon: 'fas fa-brain', title: 'إدارة الطاقة', text: 'محاذاة أهم مهامك مع مستويات الطاقة القصوى ودمج استراحات منتظمة لأداء عالٍ مستدام.' }
        ]
    },
    general: {
        en: [
            { icon: 'fas fa-question-circle', title: 'Root Cause Analysis', text: 'Dig deeper to identify the underlying causes of your problem rather than just addressing symptoms, using techniques like the 5 Whys.' },
            { icon: 'fas fa-random', title: 'Perspective Shifting', text: 'Approach the problem from different angles by considering how various stakeholders might view it or applying frameworks from unrelated fields.' },
            { icon: 'fas fa-divide', title: 'Problem Decomposition', text: 'Break down complex problems into smaller, manageable components to tackle each part systematically toward a comprehensive solution.' },
            { icon: 'fas fa-project-diagram', title: 'Systems Thinking', text: 'Consider the broader system in which your problem exists, understanding interrelationships and how changes in one area affect others.' },
            { icon: 'fas fa-drafting-compass', title: 'Design Thinking Approach', text: 'Apply the five stages of design thinking—empathize, define, ideate, prototype, and test—to develop user-centered solutions.' }
        ],
        ar: [
            { icon: 'fas fa-question-circle', title: 'تحليل السبب الجذري', text: 'الحفر أعمق لتحديد الأسباب الكامنة وراء مشكلتك بدلاً من معالجة الأعراض باستخدام تقنيات مثل لماذا الخمس.' },
            { icon: 'fas fa-random', title: 'تحول المنظور', text: 'التعامل مع المشكلة من زوايا مختلفة من خلال النظر في كيفية رؤية أصحاب المصلحة المختلفين لها أو تطبيق أطر من مجالات غير ذات صلة.' },
            { icon: 'fas fa-divide', title: 'تفكيك المشكلة', text: 'تفكيك المشكلات المعقدة إلى مكونات أصغر وأكثر قابلية للإدارة للتعامل مع كل جزء بشكل منهجي نحو حل شامل.' },
            { icon: 'fas fa-project-diagram', title: 'التفكير النظامي', text: 'النظر في النظام الأوسع الذي توجد فيه مشكلتك وفهم العلاقات المتبادلة وكيف تؤثر التغييرات في منطقة واحدة على المناطق الأخرى.' },
            { icon: 'fas fa-drafting-compass', title: 'نهج التفكير التصميمي', text: 'تطبيق المراحل الخمس للتفكير التصميمي—التعاطف والتعريف والتفكير والنموذج الأولي والاختبار—لتطوير حلول تركز على المستخدم.' }
        ]
    }
};

var categoryKeywords = {
    business: ['business','company','revenue','profit','customer','sales','market','startup','growth','entrepreneur','تجارة','شركة','إيرادات','أرباح','عميل','مبيعات','سوق','نمو','مؤسسة'],
    technology: ['technology','software','app','website','digital','data','system','security','programming','تكنولوجيا','برمجيات','تطبيق','موقع','رقمي','بيانات','نظام','أمان','برمجة','حاسوب'],
    marketing: ['marketing','brand','advertising','social media','content','seo','campaign','audience','traffic','تسويق','علامة تجارية','إعلان','وسائل التواصل','محتوى','حملة','جمهور','زيارات'],
    productivity: ['productivity','time management','efficiency','focus','distraction','workload','deadline','procrastination','إنتاجية','إدارة الوقت','كفاءة','تركيز','إلهاء','عبء عمل','موعد نهائي','تسويف']
};

function categorizeProblem(text) {
    var lower = text.toLowerCase();
    for (var cat in categoryKeywords) {
        var keywords = categoryKeywords[cat];
        for (var i = 0; i < keywords.length; i++) {
            if (lower.indexOf(keywords[i]) !== -1) return cat;
        }
    }
    return 'general';
}

function downloadFile(text) {
    var blob = new Blob([text], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'task data.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

document.getElementById('generateSolutions').addEventListener('click', function() {
    var problemText = document.getElementById('problemInput').value.trim();
    var lang = htmlEl.getAttribute('lang');
    if (!problemText) {
        alert(lang === 'ar' ? 'يرجى إدخال مشكلة لتوليد الحلول' : 'Please enter a problem to generate solutions');
        return;
    }
    localStorage.setItem('userProblem', problemText);
    downloadFile(problemText);

    document.getElementById('aiLoading').classList.add('active');
    document.getElementById('aiSolutionsContainer').innerHTML = '';

    setTimeout(function() {
        document.getElementById('aiLoading').classList.remove('active');
        var cat = categorizeProblem(problemText);
        var pool = solutionsDB[cat][lang];
        var count = Math.floor(Math.random() * 3) + 3;
        var shuffled = pool.slice().sort(function() { return 0.5 - Math.random(); });
        var picked = shuffled.slice(0, count);
        var container = document.getElementById('aiSolutionsContainer');
        container.innerHTML = '';
        picked.forEach(function(s) {
            var card = document.createElement('div');
            card.className = 'ai-solution-card';
            card.innerHTML = '<div class="ai-solution-icon"><i class="' + s.icon + '"></i></div>' +
                '<h3 class="ai-solution-title">' + s.title + '</h3>' +
                '<p class="ai-solution-text">' + s.text + '</p>';
            container.appendChild(card);
        });
    }, 2000);
});

/* ===== Contact Form ===== */
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var lang = htmlEl.getAttribute('lang');
    var nameVal = document.getElementById('nameInput').value.trim();
    var emailVal = document.getElementById('emailInput').value.trim();
    var msgVal = document.getElementById('messageInput').value.trim();
    var valid = true;

    document.getElementById('nameError').style.display = nameVal ? 'none' : 'block';
    if (!nameVal) valid = false;

    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
    document.getElementById('emailError').style.display = emailOk ? 'none' : 'block';
    if (!emailOk) valid = false;

    document.getElementById('messageError').style.display = msgVal ? 'none' : 'block';
    if (!msgVal) valid = false;

    if (valid) {
        var messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        messages.push({ name: nameVal, email: emailVal, message: msgVal, time: new Date().toISOString() });
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        document.getElementById('formSuccess').style.display = 'block';
        this.reset();
        setTimeout(function() { document.getElementById('formSuccess').style.display = 'none'; }, 5000);
    }
});

/* ===== Scroll Reveal ===== */
function handleReveal() {
    var items = document.querySelectorAll('.reveal');
    for (var i = 0; i < items.length; i++) {
        var top = items[i].getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            items[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);

/* ===== Smooth Scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});