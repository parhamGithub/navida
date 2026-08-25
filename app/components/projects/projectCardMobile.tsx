"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Project } from "../../types";
import { EASE } from "@/app/data/content";

const toFa = (n: number): string =>
  String(n)
    .padStart(2, "0")
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export default function ProjectCardMobile({ project }: { project: Project }) {
  const { images, title, category, num, description } = project;

  const allImages = images.length ? images : [];
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative">
      <div className="px-[7%] py-14 sm:px-[6%]">
        <header className="mb-6">
          <div className="mb-2 font-serif text-[17px] font-semibold text-gold-dim">
            {num}.
          </div>
          <h2 className="text-[clamp(24px,7vw,30px)] font-bold leading-[1.22] text-ivory">
            {title}
          </h2>
          <div className="mt-2 font-serif italic text-[11px] tracking-[3px] text-gold-light uppercase">
            {category}
          </div>
        </header>

        <div className="mb-6">
          <Carousel
            dir="rtl"
            className="w-full"
            opts={{ direction: "rtl", align: "start" }}
            setApi={setApi}
          >
            <CarouselContent>
              {allImages.map((img, i) => (
                <CarouselItem key={img.image}>
                  <button
                    type="button"
                    aria-label={
                      openIndex === i
                        ? `پنهان کردن توضیحات ${title}`
                        : `نمایش توضیحات ${title}`
                    }
                    onClick={() => setOpenIndex((v) => (v === i ? null : i))}
                    className="relative block aspect-3/4 w-full cursor-pointer overflow-hidden border border-line bg-panel text-start"
                  >
                    <Image
                      src={img.image}
                      alt={img.alt || title}
                      fill
                      sizes="(max-width: 640px) 88vw, 88vw"
                      className="object-cover"
                    />
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          key="overlay"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="absolute inset-0 z-10 flex items-end bg-linear-to-t from-black/90 via-black/55 to-black/20 p-6"
                        >
                          <motion.p
                            initial={{ y: 18, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.45, ease: EASE }}
                            className="text-[13.5px] leading-loose text-ivory"
                          >
                            {description}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex items-center justify-center gap-2">
              <CarouselPrevious
                className="static inset-y-auto inset-s-auto my-0 border-line-strong bg-panel 
              text-gold-light hover:bg-gold hover:text-black"
              />
              <CarouselNext
                className="static inset-y-auto inset-e-auto my-0 border-line-strong bg-panel 
              text-gold-light hover:bg-gold hover:text-black"
              />
            </div>
          </Carousel>

          {allImages.length > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <span className="font-serif italic text-[11px] tracking-[3px] text-gold-light uppercase">
                Gallery
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`نمایش تصویر ${i + 1}`}
                      onClick={() => api?.scrollTo(i)}
                      className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                        i === current ? "w-5 bg-gold" : "w-1.5 bg-line-strong"
                      }`}
                    />
                  ))}
                </div>
                <span className="h-4 w-px bg-line-strong" aria-hidden />
                <span className="font-serif text-[13px] text-ivory tabular-nums">
                  {toFa(current + 1)} / {toFa(allImages.length)}
                </span>
              </div>
            </div>
          )}
        </div>

        <p className="text-[14px] leading-[2.05] text-muted">{description}</p>
      </div>
    </section>
  );
}
