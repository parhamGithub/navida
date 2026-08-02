"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE, PROJECTS } from "@/app/data/content";
import type { StaggerContainer, StaggerItem } from "@/app/types";

const container: StaggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item: StaggerItem = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="projects" className="relative py-35 px-[6%] overflow-hidden bg-charcoal border-t border-line border-b">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-56 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 100% at 50% 0%, rgba(201,162,39,0.10), transparent 70%)",
        }}
      />

      <motion.span
        style={{ y: watermarkY }}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[34%] -translate-x-1/2 select-none font-serif italic 
        text-[clamp(70px,16vw,230px)] leading-none whitespace-nowrap text-gold-dim/[0.07]"
      >
        Portfolio
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-170 mx-auto mb-16 text-center relative"
      >
        <div className="font-serif italic text-gold-dim tracking-[4px] text-xs uppercase">Selected Works</div>
        <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-ivory mt-3">نمونه‌کارهای نویدا</h2>
        <p className="text-[13.8px] text-muted leading-[1.9] mt-4.5 max-w-130 mx-auto">
          گزیده‌ای از پروژه‌هایی که با تعهد و پیگیری، از نقشه تا کلید به سرانجام رسیده‌اند.
        </p>
      </motion.div>

      <motion.div
        ref={sectionRef}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-230 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative"
      >
        {PROJECTS.map((p) => (
          <motion.a
            key={p.num}
            variants={item}
            href="#contact"
            className={`group relative block overflow-hidden border border-line bg-panel no-underline ${p.aspect}`}
          >
            <motion.div
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-0 overflow-hidden grayscale-35 transition-[filter] duration-700 
              group-hover:grayscale-0"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/[0.14]" />
              <div
                className="absolute inset-3 border border-gold/0 transition-colors duration-500 group-hover:border-gold/45"
                aria-hidden
              />
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 pt-20">
              <div className="translate-y-1.5 transition-transform duration-500 group-hover:translate-y-0">
                <div className="font-serif italic text-gold-light text-[11px] tracking-[2px] uppercase mb-1.5">
                  {p.category}
                </div>
                <h3 className="text-[17.5px] font-bold text-ivory">{p.title}</h3>
              </div>

              <div className="flex items-center gap-3 text-gold-light shrink-0">
                <span className="font-serif text-[15px] opacity-80">{p.num}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4.5 h-4.5 translate-x-1.5 opacity-0 transition-all duration-500 
                  group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-14 text-center relative"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 border border-gold-dim text-gold-light text-[14px] font-medium 
          px-8 py-3.5 rounded-xs no-underline transition-all duration-300 hover:bg-gold hover:text-black 
          hover:border-gold hover:-translate-y-0.5"
        >
          درخواست نمونه‌کارهای بیشتر
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
            <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
