"use client";

import { motion } from "framer-motion";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/data/content";

export default function CtaStrip() {
  return (
    <section id="contact" className="text-center py-30 px-[6%] bg-charcoal border-t border-line"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, rgba(201,162,39,0.10), transparent 60%), var(--color-charcoal)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
      >
        <div className="font-serif italic text-gold-dim tracking-[5px] text-xs uppercase">Let&apos;s Build</div>
        <h2 className="text-[clamp(28px,4.5vw,46px)] text-ivory font-bold mt-4 mb-7.5 max-w-175 mx-auto">
          پروژه‌ی بعدی شما، وعده‌ی نویداست
        </h2>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2.5 bg-gold text-black text-[14.5px] font-bold px-8.5 
          py-3.5 rounded-xs no-underline transition-all duration-250 hover:bg-gold-light hover:-translate-y-0.5"
        >
          تماس: {PHONE_NUMBER}
        </a>
      </motion.div>
    </section>
  );
}
