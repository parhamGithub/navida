"use client";

import { useState, useEffect } from "react";
import Loader from "@/app/components/Loader";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Process from "@/app/components/Process";
import CtaStrip from "@/app/components/CtaStrip";
import Footer from "@/app/components/Footer";

export default function HomeClient() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!show && <Loader />}
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <CtaStrip />
      <Footer />
    </>
  );
}
