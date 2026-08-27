import Image from "next/image";
import { PHONE_HREF } from "@/app/data/content";

export default function CtaStrip() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-center py-30 px-[6%]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/projects/Villa/villa_day.webp"
          alt=""
          fill
          className="object-cover opacity-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black" />
      </div>
      <div
        className="relative z-10 max-w-175 mx-auto border border-line/20 p-16 backdrop-blur-xl shadow-sm 
        rounded-2xl bg-black/40 animate-slide-up"
      >
        <div className="w-2 h-2 bg-gold rotate-45 mx-auto mb-8" />
        <h2 className="text-[clamp(28px,4.5vw,46px)] text-ivory font-bold mt-4 mb-6 max-w-175 mx-auto">
          سفارش پروژه
        </h2>
        <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
          ما از کارفرمایانی که به دنبال کیفیت بی‌نظیر و طراحی معماری آینده‌نگر
          هستند، دعوت به همکاری می‌کنیم.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2.5 border border-gold text-gold text-[14.5px] font-bold px-8.5
          py-3.5 rounded-xs no-underline transition-all duration-250 hover:bg-gold hover:text-black"
        >
          شروع تماس
        </a>
      </div>
    </section>
  );
}
