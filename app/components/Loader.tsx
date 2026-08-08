"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { CubicBezier } from "@/app/types";
import Logo from "@/app/components/Logo";

const EASE: CubicBezier = [0.65, 0, 0.35, 1];

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-black"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.7, ease: EASE }}
          className="relative overflow-hidden"
          style={{
            filter: "drop-shadow(0 0 26px rgba(232,200,102,0.28))",
          }}
        >
          <Logo className="w-[clamp(130px,19vw,200px)] aspect-[278/258] select-none" />

          <motion.div
            aria-hidden
            initial={{ x: "-130%" }}
            animate={{ x: "230%" }}
            transition={{ duration: 1.15, ease: "easeInOut", delay: 1 }}
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, transparent 0%, rgba(232,200,102,0.14) 46%, rgba(232,200,102,0.3) 50%, rgba(232,200,102,0.14) 54%, transparent 100%)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7 }}
          className="mt-5.5 text-[26px] font-bold tracking-[1px]"
          style={{ color: "var(--color-gold-light)" }}
        >
          نویدا
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.9 }}
          className="text-xs tracking-[8px] uppercase mt-1.5"
          style={{ color: "var(--color-muted)" }}
        >
          Navida
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}