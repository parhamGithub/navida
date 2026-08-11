"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectGallery from "./projectGallery";
import MoreButton from "./moreButton";
import type { Project } from "../../types";
import { EASE } from "@/app/data/content";

export default function ProjectCard({ project }: { project: Project }) {
  const { images, title, category, num } = project;

  return (
    <section className="relative px-[6%] py-20 lg:py-28 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-230">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="mb-3 font-serif text-[22px] font-semibold text-gold-dim">
              {num}.
            </div>
            <h2 className="text-[clamp(30px,4vw,46px)] font-bold leading-[1.18] text-ivory">
              {title}
            </h2>
            <div className="mt-3 font-serif italic text-[12px] tracking-[3px] text-gold-light uppercase">
              {category}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <MoreButton />
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[12.5px] text-muted no-underline 
              tracking-[1px] transition-colors duration-300 hover:text-gold-light"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              بازگشت
            </Link>
          </div>
        </motion.div>

        <ProjectGallery images={images} title={title} />
      </div>
    </section>
  );
}
