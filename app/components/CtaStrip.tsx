"use client";

import { motion } from "framer-motion";

export default function CtaStrip() {
  return (
    <section id="contact" className="text-center py-[120px] px-[6%]"
      style={{
        background: "radial-gradient(circle at 50% 0%, rgba(201,162,39,0.10), transparent 60%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
      >
        <div className="font-serif italic text-gold-dim tracking-[5px] text-xs uppercase">Let&apos;s Build</div>
        <h2 className="text-[clamp(28px,4.5vw,46px)] text-ivory font-bold mt-4 mb-[30px] max-w-[700px] mx-auto">
          پروژه‌ی بعدی شما، وعده‌ی نویداست
        </h2>
        <a
          href="tel:+989123701691"
          className="inline-flex items-center gap-[10px] bg-gold text-black text-[14.5px] font-bold px-[34px] py-[14px] rounded-[2px] no-underline transition-all duration-250 hover:bg-gold-light hover:-translate-y-0.5"
        >
          تماس: ۰۹۱۲۳۷۰۱۶۹۱
        </a>
      </motion.div>
    </section>
  );
}
