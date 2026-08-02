"use client";

import { motion } from "framer-motion";

const skyline =
  "M0 300 L0 210 L60 210 L60 150 L120 150 L120 300 M150 300 L150 120 L230 120 L230 300 M260 300 L260 180 L300 180 L300 90 L340 90 L340 300 M558 300 L682 300 L682 296 L664 292 L664 286 L648 280 L648 274 L634 270 L628 110 L652 96 L660 84 L654 76 L646 76 L646 68 L638 68 L638 60 L632 60 L632 54 L620 50 L608 54 L608 60 L602 60 L602 68 L594 68 L594 76 L586 76 L580 84 L588 96 L612 110 L606 270 L592 274 L592 280 L576 286 L576 292 L558 296 L558 300 Z M620 50 L620 8 M614 22 L626 22 M615 40 L625 40 M900 300 L900 140 L960 140 L960 300 M990 300 L990 60 L1010 60 L1010 30 L1030 30 L1030 60 L1050 60 L1050 300 M1080 300 L1080 190 L1160 190 L1160 300 M1300 300 L1300 100 L1360 100 L1360 200 L1420 200 L1420 300 M1450 300 L1450 220 L1600 220 L1600 300";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-[6%] pt-40 pb-[110px] overflow-hidden">
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
        className="absolute top-[8%] left-1/2 -translate-x-1/2 z-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,0.10), transparent 70%)",
        }}
      />

      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-auto z-0 opacity-30 text-gold-dim"
        viewBox="0 0 1600 300"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d={skyline} stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>

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
            transition={{ duration: 2.1, ease: [0.65, 0, 0.35, 1] }}
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
              ease: [0.65, 0, 0.35, 1],
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
              ease: [0.65, 0, 0.35, 1],
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
          className="text-[clamp(40px,8vw,96px)] font-bold leading-[1.15] max-w-[920px] text-ivory"
        >
          هر بنا، <span className="text-gold-light">نویدِ</span> روزی بهتر است
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="max-w-[620px] mx-auto mt-[26px] text-[16.5px] leading-8 text-muted"
        >
          گروه فنی و مهندسی نویدا؛ از طراحی و نقشه‌کشی تا اجرا، بازسازی و طراحی
          داخلی — همه در یک مجموعه‌ی یکپارچه، با یک استاندارد کیفی، تا کلید
          تحویل پروژه.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="flex gap-4 mt-10 justify-center max-sm:flex-col max-sm:w-full max-sm:max-w-[300px] max-sm:mx-auto"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-[10px] bg-gold text-black text-[14.5px] font-bold px-[34px] 
            py-[14px] rounded-[2px] no-underline transition-all duration-250 hover:bg-gold-light hover:-translate-y-0.5"
          >
            درخواست مشاوره رایگان
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-[10px] border border-cream/25 text-cream text-[14.5px] 
            font-semibold px-[34px] py-[14px] rounded-[2px] no-underline tracking-[.3px] transition-all duration-250 
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
