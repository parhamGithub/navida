"use client";

import { motion } from "framer-motion";
import { EASE } from "@/app/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-[6%] pt-40 
    pb-27.5 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[.28] z-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 0%, transparent 75%)",
        }}
      />

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,162,39,0.14), transparent 65%)",
        }}
      />

      <div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 z-0 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <motion.svg
          viewBox="0 0 106 112"
          className="w-25 h-26.5 mx-auto mb-7.5 overflow-visible"
          fill="none"
        >
          <motion.path
            d="M14 102 L14 34 L23 10 L32 34 L32 102"
            stroke="var(--color-gold-light)"
            strokeWidth="3.4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.1, ease: EASE }}
          />
          <motion.path
            d="M32 40 L92 102 M32 52 L92 90"
            stroke="var(--color-gold)"
            strokeWidth="3.4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.1,
              ease: EASE,
              delay: 0.25,
            }}
          />
          <motion.path
            d="M74 102 L74 20 L92 20 L92 102"
            stroke="var(--color-gold-light)"
            strokeWidth="3.4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.1,
              ease: EASE,
              delay: 0.55,
            }}
          />
        </motion.svg>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif italic text-xs tracking-[5px] text-gold-dim uppercase mb-6"
        >
          Navida — Engineering &amp; Architecture Group
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45 }}
          className="text-[clamp(40px,8vw,96px)] font-bold leading-[1.15] max-w-230 text-ivory"
        >
          هر بنا، <span className="text-gold-light">نویدِ</span> روزی بهتر است
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="max-w-155 mx-auto mt-6.5 text-[16.5px] leading-8 text-muted"
        >
          گروه فنی و مهندسی نویدا؛ از طراحی و نقشه‌کشی تا اجرا، بازسازی و طراحی
          داخلی — همه در یک مجموعه‌ی یکپارچه، با یک استاندارد کیفی، تا کلید
          تحویل پروژه.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="flex gap-4 mt-10 justify-center max-sm:flex-col max-sm:w-full max-sm:max-w-75 max-sm:mx-auto"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-gold text-black text-[14.5px] font-bold px-8.5 
            py-3.5 rounded-xs no-underline transition-all duration-250 hover:bg-gold-light hover:-translate-y-0.5"
          >
            درخواست مشاوره رایگان
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 border border-cream/25 text-cream text-[14.5px] 
            font-semibold px-8.5 py-3.5 rounded-xs no-underline tracking-[.3px] transition-all duration-250 
            hover:border-gold-light hover:text-gold-light hover:-translate-y-0.5"
          >
            مشاهده‌ی خدمات
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center 
          gap-2.5"
      >
        <span className="font-serif italic text-[11px] tracking-[3px] text-muted">
          SCROLL
        </span>
        <div
          className="w-px h-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(var(--color-gold-light), transparent)",
          }}
        >
          <motion.div
            className="absolute w-full h-full bg-gold-light"
            animate={{ top: ["-40px", "40px"] }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
