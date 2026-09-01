import type {
  ContactItem,
  CubicBezier,
  NavLink,
  ProcessStep,
  Project,
  Service,
  Stat,
} from "@/app/types";
import { Mail } from "lucide-react";
import { BsInstagram, BsTelegram } from "react-icons/bs";

export const EASE: CubicBezier = [0.65, 0, 0.35, 1];

export const PHONE_NUMBER: string = "۰۹۱۲۳۷۰۱۶۹۱";
export const PHONE_HREF: string = "tel:+989123701691";
export const TELEGRAM_HREF: string = "tg://resolve?phone=989123701691";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "خانه" },
  { href: "#about", label: "درباره ما" },
  { href: "#services", label: "خدمات" },
  { href: "#process", label: "روند کار" },
  { href: "/projects", label: "پروژه‌ها" },
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
        <path
          d="M4 34h32M8 34V16l8-6 8 6v18M24 34V22h8v12"
          stroke="#c9a227"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "بازسازی و نوسازی",
    desc: "جانی تازه به فضاهای قدیمی، با حداقل اختلال در زمان‌بندی زندگی یا کسب‌وکار شما.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9.5 h-9.5 mb-5">
        <path
          d="M20 4v10M20 34V24M8 20h24M12 12l16 16M28 12L12 28"
          stroke="#c9a227"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "طراحی داخلی",
    desc: "سلیقه‌ای که در جزئیات دیده می‌شود؛ از چیدمان و متریال تا نورپردازی.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9.5 h-9.5 mb-5">
        <rect
          x="6"
          y="8"
          width="28"
          height="24"
          stroke="#c9a227"
          strokeWidth="1.6"
        />
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
    mainImage: {
      image: "/projects/Villa/villa_day.webp",
      alt: "ویلای بابلسر",
      aspect: "aspect-[16/10] md:col-span-2",
    },
    images: [
      {
        image: "/projects/Villa/gazebo_night.webp",
        alt: "آلاچیق ویلای بابلسر در شب",
        aspect: "aspect-[3/4]",
      },
      {
        image: "/projects/Villa/garder_night.webp",
        alt: "باغ ویلای بابلسر در شب",
        aspect: "aspect-[3/4]",
      },
      {
        image: "/projects/Villa/gazebo_sunset.webp",
        alt: "آلاچیق ویلای بابلسر در غروب",
        aspect: "aspect-[3/4]",
      },
      {
        image: "/projects/Villa/villa_day.webp",
        alt: "ویلای بابلسر در روز",
        aspect: "aspect-[3/4]",
      },
      {
        image: "/projects/Villa/garder_day.webp",
        alt: "باغ ویلای بابلسر در روز",
        aspect: "aspect-[3/4]",
      },
      {
        image: "/projects/Villa/gazebo_day.webp",
        alt: "آلاچیق ویلای بابلسر در روز",
        aspect: "aspect-[3/4]",
      },
    ],
    title: "ویلای بابلسر",
    category: "معماری و اجرا",
    aspect: "aspect-[3/4]",
    num: "01",
    description:
      "یک ویلای مدرن با طراحی پلکانی و نورپردازی که با طبیعت اطراف خود هماهنگ است.",
  },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { href: "#about", label: "درباره ما" },
  { href: "#services", label: "خدمات" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#process", label: "روند کار" },
];

export const FOOTER_CONTACT_ITEMS: ContactItem[] = [
  { label: "خیابان قلعه مرغی-ابتدای خیابان ابوذر-نبش خیابان تشیع-پلاک ۲۷" },
  { label: PHONE_NUMBER, href: PHONE_HREF },
  {
    label: (
      <span className="text-[#ea4335]">
        <Mail />
      </span>
    ),
    href: "#",
  },
  {
    label: (
      <span className="text-[#0088cc]">
        <BsTelegram size={23} />
      </span>
    ),
    href: TELEGRAM_HREF,
  },
  {
    label: (
      <span className="text-[#e4405f]">
        <BsInstagram size={23} />
      </span>
    ),
    href: "https://www.instagram.com/mohammad_navid96?igsi=aDVpanBmOWEzOWd5",
  },
];
