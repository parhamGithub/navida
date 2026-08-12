"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/app/data/content";
import type { Project } from "@/app/types";

function ratioOf(aspect: string): string {
  const m = /aspect-\[(\d+)\s*\/\s*(\d+)\]/.exec(aspect);
  if (!m) return "1 / 1";
  return `${m[1]} / ${m[2]}`;
}

function RevealImage({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["14%", "100%"]);

  return (
    <div ref={ref} className="reveal-container">
      <motion.div
        className="reveal-mask h-[68vh] max-h-175 border border-line bg-panel"
        style={{ aspectRatio: ratioOf(project.mainImage.aspect), width }}
      >
        <Image
          src={project.mainImage.image}
          alt={project.mainImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="projects" className="relative py-35 px-[6%]">
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

      <div ref={sectionRef} className="max-w-230 mx-auto relative">
        {PROJECTS.map((p) => (
          <div key={p.num} className="flex flex-col items-center gap-6 lg:gap-8">
            <RevealImage project={p} />

            <div className="text-center max-w-130">
              <div className="flex items-center justify-center gap-3 font-serif italic text-[12px] tracking-[3px] text-gold-light uppercase">
                <span className="text-gold-dim">{p.num}</span>
                <span className="h-px w-8 bg-line-strong" aria-hidden />
                <span>{p.category}</span>
              </div>
              <h3 className="mt-3 text-[clamp(24px,2.6vw,34px)] font-bold leading-[1.25] text-ivory">
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] text-muted leading-[2]">
                {p.description}
              </p>
              <a
                href="/projects"
                className="mt-5 inline-flex items-center gap-2.5 text-[14px] font-medium text-gold-light no-underline 
                transition-colors duration-300 hover:text-gold"
              >
                مشاهده پروژه
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

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