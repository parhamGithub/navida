"use client";

import { motion } from "framer-motion";

export default function MoreButton() {
  return (
    <motion.button
      className="flex flex-col cursor-pointer items-center"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <p className="text-gold font-semibold text-xl">بیشتر</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="55 0 350 80"
        width="300"
        height="30"
      >
        <path
          d="M 370 70.72 L 90 70.72 L 110 65"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          d="M 370 70.72 L 90 70.72 L 110 65"
          stroke="var(--color-gold)"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          pathLength={1}
          strokeDasharray="1"
          variants={{
            rest: { strokeDashoffset: 1 },
            hover: { strokeDashoffset: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </svg>
    </motion.button>
  );
}
