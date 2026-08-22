"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay: number;
  duration?: number;
};

export default function HeroReveal({
  children,
  className,
  delay,
  duration = 1,
}: HeroRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
