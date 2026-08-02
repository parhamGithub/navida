import type {
  ContactItem,
  CubicBezier,
  NavLink,
  ProcessStep,
  Project,
  Service,
  Stat,
} from "@/app/types";

export const EASE: CubicBezier = [0.65, 0, 0.35, 1];

export const SKYLINE: string =
  "M0 300 L0 210 L60 210 L60 150 L120 150 L120 300 M150 300 L150 120 L230 120 L230 300 M260 300 L260 180 L300 180 L300 90 L340 90 L340 300 M558 300 L682 300 L682 296 L664 292 L664 286 L648 280 L648 274 L634 270 L628 110 L652 96 L660 84 L654 76 L646 76 L646 68 L638 68 L638 60 L632 60 L632 54 L620 50 L608 54 L608 60 L602 60 L602 68 L594 68 L594 76 L586 76 L580 84 L588 96 L612 110 L606 270 L592 274 L592 280 L576 286 L576 292 L558 296 L558 300 Z M620 50 L620 8 M614 22 L626 22 M615 40 L625 40 M900 300 L900 140 L960 140 L960 300 M990 300 L990 60 L1010 60 L1010 30 L1030 30 L1030 60 L1050 60 L1050 300 M1080 300 L1080 190 L1160 190 L1160 300 M1300 300 L1300 100 L1360 100 L1360 200 L1420 200 L1420 300 M1450 300 L1450 220 L1600 220 L1600 300";

export const PHONE_NUMBER: string = "۰۹۱۲۳۷۰۱۶۹۱";
export const PHONE_HREF: string = "tel:+989123701691";

export const NAV_LINKS: NavLink[] = [
  { href: "#", label: "خانه" },
  { href: "#about", label: "درباره ما" },
  { href: "#services", label: "خدمات" },
  { href: "#process", label: "روند کار" },
  { href: "#projects", label: "پروژه‌ها" },
];

export const ABOUT_STATS: Stat[] = [
  { num: "10+", label: "سال تجربه‌ی اجرایی" },
  { num: "4", label: "حوزه‌ی خدمات تخصصی" },
  { num: "100%", label: "شفافیت در قرارداد" },
  { num: "1", label: "تیم، از طرح تا تحویل" },
];

export const SERVICES: Service[] = [
  {
    title: "طراحی و نقشه‌کشی",
    desc: "از ایده تا نقشه، با دقتی که می‌ماند. تهیه‌ی نقشه‌های معماری و سازه و اخذ مجوزهای لازم.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9.5 h-9.5 mb-5">
        <path d="M6 34V12l14-8 14 8v22" stroke="#c9a227" strokeWidth="1.6" />
        <path d="M14 34V20h12v14" stroke="#c9a227" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "اجرا و ساخت",
    desc: "تعهد به کیفیت، در هر مرحله‌ی اجرا. مدیریت کامل پروژه با نظارت مستمر مهندس ناظر.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9.5 h-9.5 mb-5">
        <path d="M4 34h32M8 34V16l8-6 8 6v18M24 34V22h8v12" stroke="#c9a227" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "بازسازی و نوسازی",
    desc: "جانی تازه به فضاهای قدیمی، با حداقل اختلال در زمان‌بندی زندگی یا کسب‌وکار شما.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9.5 h-9.5 mb-5">
        <path d="M20 4v10M20 34V24M8 20h24M12 12l16 16M28 12L12 28" stroke="#c9a227" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "طراحی داخلی",
    desc: "سلیقه‌ای که در جزئیات دیده می‌شود؛ از چیدمان و متریال تا نورپردازی.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9.5 h-9.5 mb-5">
        <rect x="6" y="8" width="28" height="24" stroke="#c9a227" strokeWidth="1.6" />
        <path d="M6 24h28M16 32V24" stroke="#c9a227" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "مشاوره و بازدید",
    desc: "بازدید رایگان از محل و بررسی نیاز شما، بدون هیچ تعهدی.",
  },
  {
    num: "02",
    title: "برآورد و قرارداد",
    desc: "اعلام شفاف هزینه و زمان‌بندی، پیش از شروع هرگونه کار اجرایی.",
  },
  {
    num: "03",
    title: "اجرا با گزارش‌دهی",
    desc: "اجرای مرحله‌به‌مرحله همراه با گزارش منظم پیشرفت کار به شما.",
  },
  {
    num: "04",
    title: "تحویل و پشتیبانی",
    desc: "تحویل نهایی با مستندات فنی و دوره‌ی گارانتی اجرا.",
  },
];

export const PROJECTS: Project[] = [
  {
    image: "/projects/IMG_5462.webp",
    title: "ویلای پلکانی کردان",
    category: "معماری و اجرا",
    aspect: "aspect-[3/4]",
    num: "01",
  },
  {
    image: "/projects/IMG_4275.webp",
    title: "مجتمع مسکونی گلچین",
    category: "اجرا و ساخت",
    aspect: "aspect-[16/10] md:col-span-2",
    num: "02",
  },
  {
    image: "/projects/IMG_2716.webp",
    title: "بازسازی دفتر مرکزی",
    category: "بازسازی و نوسازی",
    aspect: "aspect-[3/4]",
    num: "03",
  },
  {
    image: "/projects/IMG_2262.webp",
    title: "کافه‌رستوران باغ",
    category: "طراحی داخلی",
    aspect: "aspect-[4/5]",
    num: "04",
  },
  {
    image: "/projects/IMG_1953.webp",
    title: "ویلای مدرن لواسان",
    category: "معماری و اجرا",
    aspect: "aspect-[4/5]",
    num: "05",
  },
  {
    image: "/projects/IMG_1834.webp",
    title: "نوسازی خانه‌ی قدیمی",
    category: "بازسازی و نوسازی",
    aspect: "aspect-[16/10] md:col-span-2",
    num: "06",
  },
  {
    image: "/projects/IMG_1792.webp",
    title: "ساختمان اداری ونک",
    category: "اجرا و ساخت",
    aspect: "aspect-[3/4]",
    num: "07",
  },
  {
    image: "/projects/IMG_1746.webp",
    title: "پنت‌هاوس میرداماد",
    category: "طراحی داخلی",
    aspect: "aspect-[4/5]",
    num: "08",
  },
  {
    image: "/projects/IMG_1144.webp",
    title: "رستوران سنتی بازار",
    category: "بازسازی و نوسازی",
    aspect: "aspect-[4/5]",
    num: "09",
  },
  {
    image: "/projects/IMG_1142.webp",
    title: "خانه‌ی حیاط‌دار",
    category: "معماری و اجرا",
    aspect: "aspect-[3/4]",
    num: "10",
  },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { href: "#about", label: "درباره ما" },
  { href: "#services", label: "خدمات" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#process", label: "روند کار" },
];

export const FOOTER_CONTACT_ITEMS: ContactItem[] = [
  { label: "۰۹۱۲۳۷۰۱۶۹۱" },
  { label: "تهران، خیابان قلعه مرغی، میدان گلچین، ساختمان امیران" },
  { label: "navida-eng.ir", href: "#" },
  { label: "@navida.eng", href: "#" },
];
