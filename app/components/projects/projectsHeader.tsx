export default function ProjectsHeader() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 px-[6%]">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        select-none font-serif italic text-[clamp(70px,16vw,230px)] leading-none whitespace-nowrap 
        text-gold-dim/[0.07] animate-fade-in"
      >
        Navida
      </span>

      <div className="relative max-w-170 mx-auto text-center animate-slide-up">
        <div className="font-serif italic text-gold-dim tracking-[4px] text-xs uppercase">
          Selected Works
        </div>
        <h1 className="text-[clamp(34px,5vw,52px)] font-bold text-ivory mt-3">
          نمونه‌کارهای نویدا
        </h1>
        <p className="text-[14px] text-muted leading-loose mt-4 max-w-130 mx-auto">
          گزیده‌ای از پروژه‌هایی که با تعهد و پیگیری، از نقشه تا کلید به سرانجام
          رسیده‌اند؛ هر یک داستانی از یک وعده‌ی تحقق‌یافته.
        </p>
      </div>
    </section>
  );
}
