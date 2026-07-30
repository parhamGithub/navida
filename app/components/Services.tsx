"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "طراحی و نقشه‌کشی",
    desc: "از ایده تا نقشه، با دقتی که می‌ماند. تهیه‌ی نقشه‌های معماری و سازه و اخذ مجوزهای لازم.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[38px] h-[38px] mb-5">
        <path d="M6 34V12l14-8 14 8v22" stroke="#c9a227" strokeWidth="1.6" />
        <path d="M14 34V20h12v14" stroke="#c9a227" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "اجرا و ساخت",
    desc: "تعهد به کیفیت، در هر مرحله‌ی اجرا. مدیریت کامل پروژه با نظارت مستمر مهندس ناظر.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[38px] h-[38px] mb-5">
        <path d="M4 34h32M8 34V16l8-6 8 6v18M24 34V22h8v12" stroke="#c9a227" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "بازسازی و نوسازی",
    desc: "جانی تازه به فضاهای قدیمی، با حداقل اختلال در زمان‌بندی زندگی یا کسب‌وکار شما.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[38px] h-[38px] mb-5">
        <path d="M20 4v10M20 34V24M8 20h24M12 12l16 16M28 12L12 28" stroke="#c9a227" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "طراحی داخلی",
    desc: "سلیقه‌ای که در جزئیات دیده می‌شود؛ از چیدمان و متریال تا نورپردازی.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[38px] h-[38px] mb-5">
        <rect x="6" y="8" width="28" height="24" stroke="#c9a227" strokeWidth="1.6" />
        <path d="M6 24h28M16 32V24" stroke="#c9a227" strokeWidth="1.6" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Services() {
  return (
    <section id="services" className="py-[140px] px-[6%]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-[680px] mx-auto mb-16 text-center"
      >
        <div className="font-serif italic text-gold-dim tracking-[4px] text-xs uppercase">Services</div>
        <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-ivory mt-3">خدمات نویدا</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px border border-line"
        style={{ backgroundColor: "var(--color-line)" }}
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="p-[38px_26px] transition-colors duration-300 relative overflow-hidden group"
            style={{ backgroundColor: "var(--color-black)" }}
            whileHover={{ backgroundColor: "var(--color-panel)" }}
          >
            <div className="absolute top-0 right-0 w-0 h-[2px] bg-gold transition-all duration-400 group-hover:w-full" />
            {s.icon}
            <h3 className="text-[17px] text-ivory font-bold mb-[10px]">{s.title}</h3>
            <p className="text-[13px] leading-[1.9] text-muted">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
