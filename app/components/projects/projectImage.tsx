"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  image: string;
  alt: string;
};

export default function ProjectImage({ image, alt }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={false}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative h-full aspect-3/4"
      >
        <Image
          alt={alt}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
