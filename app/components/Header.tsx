"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/app/data/content";
import Logo from "@/app/components/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const sidebar = (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="sidebar"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
          className="fixed top-0 bottom-0 right-0 z-[60] w-full md:hidden flex flex-col
              bg-black/40 backdrop-blur-[22px] backdrop-saturate-[1.7] border-l border-line-strong shadow-[-18px_0_50px_rgba(0,0,0,0.55)]"
        >
          <div className="flex items-center justify-between px-6.5 pt-6 pb-5 border-b border-line">
            <div className="flex items-center gap-3">
              <Logo breathe className="select-none text-[#D7A11D] w-8.5" />
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-bold tracking-[.5px] text-ivory">
                  نویدا
                </span>
                <span className="font-serif italic text-[8.5px] tracking-[2.5px] text-gold-light uppercase mt-1">
                  ARCHITECTURE · ENGINEERING
                </span>
              </div>
            </div>
            <button
              type="button"
              aria-label="بستن منو"
              onClick={() => setOpen(false)}
              className="relative w-5.5 h-5.5 cursor-pointer bg-transparent border-0 p-0"
            >
              <span className="absolute right-0 left-0 top-1/2 h-px bg-gold-light -translate-y-1/2 rotate-45" />
              <span className="absolute right-0 left-0 top-1/2 h-px bg-gold-light -translate-y-1/2 -rotate-45" />
            </button>
          </div>

          <nav className="flex flex-col px-6.5 pt-3.5">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.12 + i * 0.07,
                  duration: 0.45,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="group flex items-center justify-between py-4.5 text-[17px] font-medium text-muted no-underline
                    border-b border-line transition-colors duration-250 hover:text-gold-light"
              >
                {link.label}
                <span className="w-2 h-2 rotate-45 border border-gold-dim transition-colors duration-250 group-hover:border-gold-light" />
              </motion.a>
            ))}
          </nav>

          <div className="mt-auto px-6.5 pb-7 pt-5">
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.4, ease: "easeOut" }}
              className="block text-center border border-gold text-gold-light text-[14.5px] font-medium
                  px-6.5 py-3.25 rounded-xs no-underline transition-all duration-300 hover:bg-gold hover:text-black"
            >
              مشاوره رایگان
            </motion.a>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.56, duration: 0.4 }}
              className="mt-4.5 text-center text-[10.5px] tracking-[3px] text-gold-dim font-serif italic uppercase"
            >
              ARCHITECTURE · ENGINEERING
            </motion.p>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-[6vw] transition-all duration-400
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-[22px] backdrop-saturate-[1.7] py-3.5 border-b border-line-strong shadow-[0_8px_34px_rgba(0,0,0,0.4)]"
              : "bg-charcoal/40 backdrop-blur-[18px] backdrop-saturate-[1.5] py-5.5 border-b border-line shadow-[0_4px_30px_rgba(0,0,0,0.18)]"
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
            <Logo breathe className="select-none text-[#D7A11D] w-10" />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="text-[19px] font-bold tracking-[.5px] text-ivory">
              نویدا
            </span>
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
          <button
            type="button"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-5.5 h-4 relative cursor-pointer bg-transparent border-0 p-0"
          >
            <span
              className={`absolute right-0 left-0 h-px bg-gold-light top-0 transition-all duration-300 ${
                open ? "top-1.75 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute right-0 left-0 h-px bg-gold-light top-1.75 transition-all duration-300 ${
                open ? "opacity-0" : "w-[65%] ml-auto"
              }`}
            />
            <span
              className={`absolute right-0 left-0 h-px bg-gold-light top-3.5 transition-all duration-300 ${
                open ? "top-1.75 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      {typeof document !== "undefined" && createPortal(sidebar, document.body)}
    </>
  );
}
