"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/app/data/content";
import Logo from "@/app/components/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-[6vw] transition-all duration-400
        ${scrolled
          ? "bg-black/60 backdrop-blur-[22px] saturate-[1.7] py-3.5 border-b border-line-strong shadow-[0_8px_34px_rgba(0,0,0,0.4)]"
          : "bg-charcoal/40 backdrop-blur-[18px] saturate-[1.5] py-5.5 border-b border-line shadow-[0_4px_30px_rgba(0,0,0,0.18)]"
        }`}
      style={{ direction: "rtl" }}
    >
      <a href="#" className="flex items-center gap-3 no-underline">
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          whileHover={{ scale: 1.06 }}
          className="shrink-0"
        >
          <Logo breathe className="h-9 aspect-278/258 select-none" />
        </motion.div>
        <div className="flex flex-col leading-none">
          <span className="text-[19px] font-bold tracking-[.5px] text-ivory">نویدا</span>
          <span className="font-serif italic text-[9.5px] tracking-[3px] text-gold-light uppercase mt-1">
            ARCHITECTURE · ENGINEERING
          </span>
        </div>
      </a>

      <nav className="hidden md:flex items-center gap-9.5">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-muted no-underline pb-1 relative transition-colors duration-250 
            hover:text-cream
              after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-px after:bg-gold-light 
              after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-10">
        <a
          href="#contact"
          className="hidden md:inline-block border border-gold-dim text-gold-light text-[13.5px] font-medium px-6.5 
          py-2.75 rounded-xs no-underline transition-all duration-300 hover:bg-gold hover:text-black 
          hover:border-gold whitespace-nowrap"
        >
          مشاوره رایگان
        </a>
        <div className="md:hidden w-5.5 h-4 relative cursor-pointer">
          <span className="absolute right-0 left-0 h-px bg-gold-light top-0" />
          <span className="absolute right-0 left-0 h-px bg-gold-light top-1.75 w-[65%] ml-auto" />
          <span className="absolute right-0 left-0 h-px bg-gold-light top-3.5" />
        </div>
      </div>
    </motion.header>
  );
}
