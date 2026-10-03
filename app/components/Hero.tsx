import Image from "next/image";
import Logo from "@/app/components/Logo";
import HeroScrollIndicator from "@/app/components/HeroScrollIndicator";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-[6%] pt-30 
      pb-27.5 overflow-hidden"
    >
      <Image
        src="/projects/Villa/garder_night.webp"
        alt=""
        fill
        className="object-cover z-0 opacity-40"
        priority
      />

      <div
        className="absolute inset-0 opacity-[.28] z-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 0%, transparent 75%)",
        }}
      />

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,162,39,0.14), transparent 65%)",
        }}
      />

      <div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 z-0 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-20">
        <Logo
          reveal
          className="w-40 mx-auto mb-7.5 md:w-44 max-w-[80vw] text-gold"
        />
        <p className="font-serif italic text-xs tracking-[5px] text-gold-dim uppercase mb-6">
          Navida — Engineering &amp; Architecture Group
        </p>
        <h1 className="text-[clamp(30px,6vw,72px)] font-bold leading-[1.15] max-w-230 text-ivory">
          طراحی معماری و سازه ساختمان با نگاه{" "}
          <span className="text-amber-200">حرفه‌ای</span>،{" "}
          <span className="text-amber-400">دقیق </span>و{" "}
          <span className="text-gold">متناسب</span> با نیاز شما
        </h1>

        <p className="max-w-155 mx-auto mt-6.5 text-[18px] font-semibold leading-8 text-zinc-400">
          ما در کنار کارفرمایان، سازندگان و مالکان پروژه هستیم تا برای
          ساختمان‌های مسکونی، اداری و تجاری، طرحی ایمن، کاربردی و زیبا ارائه
          کنیم.
        </p>
        <div className="flex gap-4 mt-10 justify-center max-sm:flex-col max-sm:w-full max-sm:max-w-75 max-sm:mx-auto">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-gold text-black text-[14.5px] font-bold px-8.5 
            py-3.5 rounded-xs no-underline transition-all duration-250 hover:bg-gold-light hover:-translate-y-0.5"
          >
            درخواست مشاوره رایگان
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 border border-cream/25 text-cream text-[14.5px] 
            font-semibold px-8.5 py-3.5 rounded-xs no-underline tracking-[.3px] transition-all duration-250 
            hover:border-gold-light hover:text-gold-light hover:-translate-y-0.5"
          >
            مشاهده‌ی خدمات
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-100 bg-linear-to-t from-black to-transparent z-10 pointer-events-none" />

      <HeroScrollIndicator />
    </section>
  );
}
