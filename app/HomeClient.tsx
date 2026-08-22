import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Process from "@/app/components/Process";
import Projects from "@/app/components/Projects";
import CtaStrip from "@/app/components/CtaStrip";
import HomeLoader from "@/app/components/HomeLoader";

export default function HomeClient() {
  return (
    <>
      <HomeLoader />
      <Hero />
      <Projects />
      <About />
      <Process />
      <Services />
      <CtaStrip />
    </>
  );
}
