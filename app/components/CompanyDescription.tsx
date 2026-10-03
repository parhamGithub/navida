"use client";

import { motion } from "framer-motion";

export default function CompanyDescription() {
  return (
    <section id="company-description" className="py-35 px-[6%]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-170 mx-auto mb-16 text-center"
      >
        <div className="font-serif italic text-gold-dim tracking-[4px] text-xs uppercase">
          شرکت نویدا
        </div>
        <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-ivory mt-3">
          طراحی معماری و سازه
        </h2>
      </motion.div>

      <p className="text-[15.5px] leading-[2.05] text-zinc-200 mx-auto max-w-2xl">
        شرکت ما با تمرکز بر طراحی معماری و سازه ساختمان، خدمات تخصصی خود را در
        سراسر ایران ارائه می‌دهد. هدف ما خلق طرح‌هایی است که علاوه بر زیبایی، از
        نظر فنی، اجرایی و اقتصادی نیز قابل اعتماد باشند. ما در هر پروژه، نیاز
        کارفرما، شرایط فنی، ضوابط اجرایی و کیفیت نهایی را هم‌زمان در نظر
        می‌گیریم تا نتیجه‌ای دقیق و ماندگار به دست آید.
      </p>

      <div className="flex gap-4 mt-8 justify-center max-sm:flex-col max-sm:w-full max-sm:max-w-75 max-sm:mx-auto">
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 bg-gold text-black text-[14.5px] font-bold px-8.5 py-3.5 rounded-xs no-underline transition-all duration-250 hover:bg-gold-light hover:-translate-y-0.5"
        >
          درخواست مشاوره رایگان
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2.5 border border-cream/25 text-cream text-[14.5px] font-semibold px-8.5 py-3.5 rounded-xs no-underline tracking-[.3px] transition-all duration-250 hover:border-gold-light hover:text-gold-light hover:-translate-y-0.5"
        >
          مشاهده‌ی خدمات
        </a>
      </div>
    </section>
  );
}
