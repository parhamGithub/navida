"use client";

import { motion } from "framer-motion";
import { EASE } from "@/app/data/content";

export default function MoreButton({
  onClick,
  label = "بیشتر",
}: {
  onClick?: () => void;
  label?: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group inline-flex cursor-pointer items-center gap-4 bg-transparent p-0 no-underline"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <span className="text-[15.5px] font-bold text-gold-light">{label}</span>
      <span className="relative h-px w-18 overflow-hidden bg-gold-dim">
        <motion.span
          className="absolute inset-0 origin-right bg-gold-light"
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.45, ease: EASE }}
        />
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4 -translate-x-1.5 text-gold-light opacity-0 transition-all duration-500 
        group-hover:translate-x-0 group-hover:opacity-100"
      >
        <path
          d="M19 12H5M11 6l-6 6 6 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
