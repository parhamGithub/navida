"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/app/data/content";

const toFa = (n: number): string =>
  String(n)
    .padStart(2, "0")
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

type GalleryImage = { image: string; alt: string };

type ProjectGalleryProps = {
  images: GalleryImage[];
  title: string;
};

function RollingColumn({
  img,
  title,
  onAdvance,
}: {
  img: GalleryImage;
  title: string;
  onAdvance: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onAdvance}
      aria-label="تصویر بعدی"
      className="group relative block h-full w-full cursor-pointer overflow-hidden bg-panel border border-line"
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={img.image}
          className="absolute inset-0"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <Image
            src={img.image}
            alt={img.alt || title}
            fill
            sizes="(max-width: 768px) 30vw, 40vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const count = images.length;
  const [page, setPage] = useState<number>(0);

  const next = () => setPage((p) => (p + 1) % count);
  const prev = () => setPage((p) => (p - 1 + count) % count);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="grid h-full grid-cols-3 gap-4">
        {[0, 1, 2].map((col) => (
          <RollingColumn
            key={col}
            img={images[(col + page) % count]}
            title={title}
            onAdvance={next}
          />
        ))}
      </div>

      <div className="mt-6 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-serif italic text-[11px] tracking-[3px] text-gold-light uppercase">
            Switch Photos
          </span>
          <span className="h-4 w-px bg-line-strong" aria-hidden />
          <span className="font-serif text-[15px] text-ivory tabular-nums">
            {toFa(page + 1)} / {toFa(count)}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="تصویر قبلی"
            onClick={prev}
            className="grid h-10 w-10 cursor-pointer place-items-center border border-line-strong text-gold-light 
            transition-all duration-300 hover:border-gold hover:bg-gold hover:text-black"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="تصویر بعدی"
            onClick={next}
            className="grid h-10 w-10 cursor-pointer place-items-center border border-line-strong text-gold-light 
            transition-all duration-300 hover:border-gold hover:bg-gold hover:text-black"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M19 12H5M11 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
