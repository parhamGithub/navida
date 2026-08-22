"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/app/components/Loader";

export default function HomeLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(
      () => setShowLoader(false),
      2900,
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>{showLoader && <Loader key="loader" />}</AnimatePresence>
  );
}
