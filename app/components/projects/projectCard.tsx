"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ProjectGallery from "./projectGallery";
import MoreButton from "./moreButton";
import type { Project } from "../../types";
import { EASE } from "@/app/data/content";

export default function ProjectCard({ project }: { project: Project }) {
  const { images, mainImage, title, category, num, description } = project;
  const [showMain, setShowMain] = useState(false);

  return (
    <section className="relative border-t pt-10 border-line overflow-hidden">
      <div className="mx-auto grid grid-cols-1 items-start gap-10 lg:h-[85vh] lg:grid-cols-[1fr_3fr] lg:items-center px-[6%] py-16 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="z-30 col-start-1 row-start-1 flex flex-col bg-linear-to-b from-black/65 to-transparent p-6 lg:z-auto lg:h-full lg:bg-none lg:p-0"
        >
          <motion.div
            layout
            transition={{ duration: 0.7, ease: EASE }}
            className={`flex flex-col justify-start lg:flex-1 ${showMain ? "lg:justify-start" : "lg:justify-center"}`}
          >
            <motion.div
              layout
              animate={{ opacity: showMain ? 0 : 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mb-3 font-serif text-[22px] font-semibold text-gold-dim"
            >
              {num}.
            </motion.div>

            <motion.h2
              layout
              transition={{ duration: 0.7, ease: EASE }}
              className="text-[clamp(30px,4vw,46px)] font-bold leading-[1.18] text-ivory"
            >
              {title}
            </motion.h2>

            <AnimatePresence initial={false} mode="wait">
              {showMain ? (
                <motion.p
                  key="description"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
                  className="mt-4 max-w-105 text-[14.5px] leading-[2.05] text-ivory/90 lg:text-muted"
                >
                  {description}
                </motion.p>
              ) : (
                <motion.div
                  key="category"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="mt-3 font-serif italic text-[12px] tracking-[3px] text-gold-light uppercase"
                >
                  {category}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

<motion.div
              layout
              transition={{ duration: 0.7, ease: EASE }}
              className={`shrink-0 lg:hidden ${showMain ? "h-24" : "h-0"}`}
            />

            <motion.div
              layout
              transition={{ duration: 0.7, ease: EASE }}
              className="mt-10 shrink-0 lg:mt-0"
            >
              <MoreButton
                onClick={() => setShowMain((v) => !v)}
                label={showMain ? "بازگشت" : "بیشتر"}
              />
            </motion.div>

          <div className="hidden flex-1 lg:block" />
        </motion.div>

        <div className="relative col-start-1 row-start-1 h-[65vh] lg:col-start-2 lg:h-full overflow-hidden">
          <ProjectGallery images={images} title={title} showMain={showMain} />
          <AnimatePresence>
            {showMain && (
              <motion.div
                key="mainImage"
                initial={{ x: "-104%" }}
                animate={{ x: 0 }}
                exit={{ x: "-104%" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="absolute inset-0 z-20 overflow-hidden border border-line bg-panel"
              >
                <Image
                  src={mainImage.image}
                  alt={mainImage.alt || title}
                  fill
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
