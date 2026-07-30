"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "10+", label: "سال تجربه‌ی اجرایی" },
  { num: "4", label: "حوزه‌ی خدمات تخصصی" },
  { num: "100%", label: "شفافیت در قرارداد" },
  { num: "1", label: "تیم، از طرح تا تحویل" },
];

export default function About() {
  return (
    <section id="about" className="py-[140px] px-[6%] bg-charcoal border-t border-line border-b border-line">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-[680px] mx-auto mb-16 text-center"
      >
        <div className="font-serif italic text-gold-dim tracking-[4px] text-xs uppercase">About Navida</div>
        <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-ivory mt-3">مهندسی که به وعده‌اش عمل می‌کند</h2>
      </motion.div>

      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-[60px] items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[15.5px] leading-[2.05] text-[#c9c2ac] mb-[18px]">
            نام «نویدا» برگرفته از واژه‌ی «نوید» است — مژده و بشارت. فلسفه‌ی کاری ما نیز از همین‌جا شکل گرفته: هر پروژه، وعده‌ای است برای فضایی بهتر برای زندگی یا کار، وعده‌ای که با دقت فنی و پیگیری تا آخرین روز کار دنبال می‌شود.
          </p>
          <p className="text-[15.5px] leading-[2.05] text-[#c9c2ac]">
            دفتر خدمات فنی و مهندسی نویدا، طراحی، اجرا، بازسازی و طراحی داخلی را در یک مجموعه‌ی یکپارچه گرد هم آورده تا مشتری از ایده‌ی اولیه تا تحویل کلید، تنها با یک تیم پاسخگو طرف باشد.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="border border-line rounded-[4px] p-9"
          style={{
            background: "radial-gradient(120% 120% at 20% 0%, rgba(201,162,39,0.08), transparent 60%)",
          }}
        >
          <div className="grid grid-cols-2 gap-[26px_20px]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[56px] text-gold-light font-semibold">{s.num}</div>
                <div className="text-xs text-muted mt-1 tracking-[.3px]">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
