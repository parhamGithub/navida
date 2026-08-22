"use client";

import { motion } from "framer-motion";
import HeroReveal from "@/app/components/HeroReveal";

export default function HeroScrollIndicator() {
  return (
    <HeroReveal
      delay={1.1}
      className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5"
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
    </HeroReveal>
  );
}
