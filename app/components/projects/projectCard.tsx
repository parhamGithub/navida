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
    <section className="relative border-t border-line overflow-hidden">
      <div className="mx-auto grid grid-cols-1 items-center gap-10 lg:h-[85vh] lg:grid-cols-[1fr_3fr] px-[6%] py-16 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="order-2 flex flex-col lg:order-1"
        >
          <div className="mb-3 font-serif text-[22px] font-semibold text-gold-dim">
            {num}.
          </div>
          <h2 className="text-[clamp(30px,4vw,46px)] font-bold leading-[1.18] text-ivory">
            {title}
          </h2>
          <div className="mt-3 font-serif italic text-[12px] tracking-[3px] text-gold-light uppercase">
            {category}
          </div>

          <div className="mt-10 flex flex-col items-start gap-6">
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

        <div className="order-1 lg:order-2 h-[65vh] lg:h-full">
          <ProjectGallery images={images} title={title} />
        </div>
      </div>
    </section>
  );
}
