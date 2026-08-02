"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/app/data/content";
import type { StaggerContainer, StaggerItem } from "@/app/types";

const container: StaggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: StaggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Services() {
  return (
    <section id="services" className="py-35 px-[6%]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-170 mx-auto mb-16 text-center"
      >
        <div className="font-serif italic text-gold-dim tracking-[4px] text-xs uppercase">Services</div>
        <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-ivory mt-3">خدمات نویدا</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-1100 mx-auto grid grid-cols-2 md:grid-cols-4 gap-px border border-line"
        style={{ backgroundColor: "var(--color-line)" }}
      >
        {SERVICES.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="p-9.5 transition-colors duration-300 relative overflow-hidden group"
            style={{ backgroundColor: "var(--color-black)" }}
            whileHover={{ backgroundColor: "var(--color-panel)" }}
          >
            <div className="absolute top-0 right-0 w-0 h-0.5 bg-gold transition-all duration-400 group-hover:w-full" />
            {s.icon}
            <h3 className="text-[17px] text-ivory font-bold mb-2.5">{s.title}</h3>
            <p className="text-[13px] leading-[1.9] text-muted">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
