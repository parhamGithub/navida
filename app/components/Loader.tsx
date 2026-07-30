"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
      >
        <svg viewBox="0 0 106 112" className="w-[120px] h-[127px]">
          <motion.path
            d="M14 102 L14 34 L23 10 L32 34 L32 102"
            fill="none"
            stroke="var(--color-gold-light)"
            strokeWidth="2.2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.1, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.path
            d="M32 40 L92 102 M32 52 L92 90"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="2.2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.1, ease: [0.65, 0, 0.35, 1], delay: 0.25 }}
          />
          <motion.path
            d="M32 40 L34 26 L37 40"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="2.2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.1, ease: [0.65, 0, 0.35, 1], delay: 0.25 }}
          />
          <motion.path
            d="M74 102 L74 20 L92 20 L92 102"
            fill="none"
            stroke="var(--color-gold-light)"
            strokeWidth="2.2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.1, ease: [0.65, 0, 0.35, 1], delay: 0.55 }}
          />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.9 }}
          className="mt-[22px] text-[26px] font-bold tracking-[1px]"
          style={{ color: "var(--color-gold-light)" }}
        >
          نویدا
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.1 }}
          className="text-xs tracking-[8px] uppercase mt-1.5"
          style={{ color: "var(--color-muted)" }}
        >
          Navida
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
