"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/app/components/Loader";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Process from "@/app/components/Process";
import Projects from "@/app/components/Projects";
import CtaStrip from "@/app/components/CtaStrip";
import Footer from "@/app/components/Footer";

export default function HomeClient() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(
      () => setShow(true),
      2900
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{!show && <Loader key="loader" />}</AnimatePresence>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Process />
      <Services />
      <CtaStrip />
      <Footer />
    </>
  );
}
