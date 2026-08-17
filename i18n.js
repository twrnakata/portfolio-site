const translations = {
  en: {
    "nav.impact": "Impact",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.timeline": "Timeline",
    "nav.contact": "Contact",
    "hero.eyebrow": "Senior Software Engineer",
    "hero.lead":
      "Building multi-tenant CRM and loyalty backends adopted across enterprise deployments, supporting consumer brands in F&B and retail. Experienced in Go modernization, performance tuning, and platform-wide engineering standards.",
    "hero.cv": "Download CV",
    "impact.title": "Impact at a glance",
    "impact.members": "Members on loyalty platform",
    "impact.brands": "Brands supported",
    "impact.latency": "Promotion API (PHP → Go)",
    "impact.services": "Microservices on shared Go library",
    "exp.title": "Selected experience",
    "exp.crm.title": "CRM multi-tenant backend",
    "exp.crm.meta": "DeepBlok · Go · Hexagonal / Clean Architecture",
    "exp.crm.body":
      "Designed loyalty backend services for membership, points, coupons, and transactions across multi-tenant enterprise deployments.",
    "exp.crm.li1": "Public and internal service layers for high-volume loyalty workflows",
    "exp.crm.li2": "Shared Go library adopted across 10+ microservices and batch jobs",
    "exp.crm.li3": "Kafka event publishing, Redis caching, AWS Lambda integrations",
    "exp.php.title": "PHP → Go modernization",
    "exp.php.meta": "Promotion API · Query optimization · Team lead",
    "exp.php.body":
      "Led migration from legacy PHP and stored procedures to Go, replacing database-heavy logic with optimized queries and clearer service structure.",
    "exp.php.li1": "Reduced nonprod response time from ~20s to ~5s",
    "exp.php.li2": "Improved maintainability and operational reliability",
    "exp.obs.title": "Observability & platform standards",
    "exp.obs.meta": "OpenSearch · Grafana · CloudWatch",
    "exp.obs.body":
      "Introduced runtime-configurable log levels and rolled out observability patterns across nonprod and production environments.",
    "exp.obs.li1": "Technical point of contact for shared platform standards",
    "exp.obs.li2": "Mentored developers on testing, CI/CD, and code quality",
    "proj.title": "Portfolio projects",
    "proj.badge": "Personal demo",
    "proj.body":
      "Register/login, points wallet (top-up / redeem) with idempotent redeem — a simplified loyalty backend pattern in Go with hexagonal layout and TDD.",
    "proj.github": "View on GitHub",
    "proj.demo": "Live demo — coming soon",
    "skills.title": "Technical skills",
    "skills.backend": "Backend",
    "skills.data": "Data & messaging",
    "skills.cloud": "Cloud & ops",
    "skills.obs": "Observability & quality",
    "about.title": "About",
    "about.body":
      "Computer Science graduate with a prior degree in Accounting. That mix of engineering and business context is useful when building loyalty and CRM systems that have to be correct for finance-adjacent workflows as well as scalable for product teams.",
    "about.edu1": "B.Sc. Computer Science, Ramkhamhaeng University (2018–2022), GPA 3.31",
    "about.edu2": "B.B.A. Accounting, Ramkhamhaeng University (2010–2015)",
    "tl.title": "Timeline",
    "tl.db.title": "Senior Software Engineer · DeepBlok",
    "tl.db.body":
      "CRM and loyalty backends on a multi-tenant platform. Led PHP-to-Go migration, shared library adoption, and observability rollout across client deliveries.",
    "tl.wp.title": "Freelance · WordPress",
    "tl.wp.body": "Built and maintained WordPress / WooCommerce sites for small businesses.",
    "contact.title": "Contact",
    "contact.lead": "Bangkok · Open to Senior Backend / Platform roles",
  },
  th: {
    "nav.impact": "ผลงานเด่น",
    "nav.experience": "ประสบการณ์",
    "nav.projects": "โปรเจกต์",
    "nav.skills": "ทักษะ",
    "nav.about": "เกี่ยวกับ",
    "nav.timeline": "ไทม์ไลน์",
    "nav.contact": "ติดต่อ",
    "hero.eyebrow": "วิศวกรซอฟต์แวร์อาวุโส",
    "hero.lead":
      "ออกแบบและพัฒนาแบ็กเอนด์ CRM และระบบสะสมแต้มแบบ multi-tenant สำหรับองค์กร รองรับแบรนด์ในกลุ่ม F&B และค้าปลีก มีประสบการณ์ย้ายระบบจาก PHP ไป Go ปรับประสิทธิภาพ และวางมาตรฐานวิศวกรรมร่วมกันทั้งแพลตฟอร์ม",
    "hero.cv": "ดาวน์โหลด CV",
    "impact.title": "ผลลัพธ์โดยสรุป",
    "impact.members": "สมาชิกบนแพลตฟอร์มสะสมแต้ม",
    "impact.brands": "แบรนด์ที่รองรับ",
    "impact.latency": "Promotion API (PHP → Go)",
    "impact.services": "ไมโครเซอร์วิสที่ใช้ไลบรารี Go ร่วมกัน",
    "exp.title": "ประสบการณ์ที่คัดมา",
    "exp.crm.title": "แบ็กเอนด์ CRM แบบ multi-tenant",
    "exp.crm.meta": "DeepBlok · Go · Hexagonal / Clean Architecture",
    "exp.crm.body":
      "ออกแบบบริการแบ็กเอนด์ระบบสมาชิก คะแนน คูปอง และธุรกรรม สำหรับการใช้งานแบบ multi-tenant ในองค์กร",
    "exp.crm.li1": "แยกเลเยอร์บริการภายนอกและภายในสำหรับเวิร์กโฟลว์สะสมแต้มปริมาณสูง",
    "exp.crm.li2": "ไลบรารี Go ร่วมถูกนำไปใช้ในไมโครเซอร์วิสและจ็อบมากกว่า 10 ตัว",
    "exp.crm.li3": "ส่งอีเวนต์ผ่าน Kafka, แคชด้วย Redis, เชื่อม AWS Lambda",
    "exp.php.title": "ย้ายระบบ PHP → Go",
    "exp.php.meta": "Promotion API · ปรับคิวรี · นำทีมเทคนิค",
    "exp.php.body":
      "นำการย้ายจาก PHP และ stored procedure ไปสู่ Go แทนที่โลจิกที่หนักที่ฐานข้อมูลด้วยคิวรีที่ปรับแล้ว และโครงสร้างบริการที่ชัดขึ้น",
    "exp.php.li1": "ลดเวลาตอบสนองใน nonprod จากประมาณ 20 วินาที เหลือประมาณ 5 วินาที",
    "exp.php.li2": "ดูแลรักษาง่ายขึ้น และระบบเสถียรขึ้นตอนปฏิบัติงาน",
    "exp.obs.title": "Observability และมาตรฐานแพลตฟอร์ม",
    "exp.obs.meta": "OpenSearch · Grafana · CloudWatch",
    "exp.obs.body":
      "ริเริ่มกรอบระดับล็อกที่ปรับตอนรันไทม์ได้ และขยายรูปแบบการสังเกตระบบทั้ง nonprod และ production",
    "exp.obs.li1": "เป็นจุดประสานด้านเทคนิคของมาตรฐานแพลตฟอร์มร่วม",
    "exp.obs.li2": "โค้ชนักพัฒนาเรื่องเทส, CI/CD และคุณภาพโค้ด",
    "proj.title": "โปรเจกต์พอร์ตโฟลิโอ",
    "proj.badge": "เดโมส่วนตัว",
    "proj.body":
      "สมัคร/เข้าสู่ระบบ กระเป๋าแต้ม (เติม / ใช้) พร้อม redeem แบบ idempotent — แบบจำลองแบ็กเอนด์สะสมแต้มด้วย Go โครง hexagonal และ TDD",
    "proj.github": "ดูบน GitHub",
    "proj.demo": "ไลฟ์เดโม — เร็วๆ นี้",
    "skills.title": "ทักษะทางเทคนิค",
    "skills.backend": "แบ็กเอนด์",
    "skills.data": "ข้อมูลและข้อความ",
    "skills.cloud": "คลาวด์และปฏิบัติการ",
    "skills.obs": "Observability และคุณภาพ",
    "about.title": "เกี่ยวกับ",
    "about.body":
      "จบวิทยาการคอมพิวเตอร์ และมีปริญญาบัญชีมาก่อน การผสมวิศวกรรมกับบริบทธุรกิจช่วยตอนสร้างระบบสะสมแต้มและ CRM ที่ต้องถูกต้องสำหรับเวิร์กโฟลว์ใกล้การเงิน และขยายได้สำหรับทีมผลิตภัณฑ์",
    "about.edu1": "วท.บ. วิทยาการคอมพิวเตอร์ มหาวิทยาลัยรามคำแหง (2018–2022) GPA 3.31",
    "about.edu2": "บธ.บ. การบัญชี มหาวิทยาลัยรามคำแหง (2010–2015)",
    "tl.title": "ไทม์ไลน์",
    "tl.db.title": "วิศวกรซอฟต์แวร์อาวุโส · DeepBlok",
    "tl.db.body":
      "แบ็กเอนด์ CRM และระบบสะสมแต้มบนแพลตฟอร์ม multi-tenant นำการย้าย PHP ไป Go การใช้ไลบรารีร่วม และการวาง observability ในงานส่งมอบ",
    "tl.wp.title": "ฟรีแลนซ์ · WordPress",
    "tl.wp.body": "พัฒนาและดูแลเว็บ WordPress / WooCommerce สำหรับธุรกิจขนาดเล็ก",
    "contact.title": "ติดต่อ",
    "contact.lead": "กรุงเทพฯ · สนใจงาน Senior Backend / Platform",
  },
};

const STORAGE_KEY = "portfolio-lang";

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === "th" ? "th" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
}

function init() {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const lang = saved === "th" ? "th" : "en";
  applyLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.lang === "th" ? "th" : "en";
      localStorage.setItem(STORAGE_KEY, next);
      applyLanguage(next);
    });
  });
}

document.addEventListener("DOMContentLoaded", init);
