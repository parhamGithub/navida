import { FOOTER_CONTACT_ITEMS, FOOTER_QUICK_LINKS } from "@/app/data/content";
import Logo from "@/app/components/Logo";

const linkClassName =
  "block text-[13.5px] text-[#c9c2ac] no-underline mb-2.5 hover:text-gold-light";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-10 px-[6%] py-15 bg-black">
      <div className="max-w-275 mx-auto grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <a href="#" className="flex items-center gap-3 no-underline mb-3.5">
            <Logo className="w-7 text-gold" />
            <span className="text-[19px] font-bold text-ivory">نویدا</span>
          </a>
          <p className="text-[13px] text-muted leading-[1.9] max-w-75">
            گروه فنی و مهندسی نویدا — طراحی، اجرا، بازسازی و طراحی داخلی.
          </p>
        </div>

        <div>
          <h5 className="text-xs text-gold-dim tracking-[1px] mb-4 uppercase">
            دسترسی سریع
          </h5>
          {FOOTER_QUICK_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClassName}>
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <h5 className="text-xs text-gold-dim tracking-[1px] mb-4 uppercase">
            تماس
          </h5>
          {FOOTER_CONTACT_ITEMS.map((item, index) =>
            item.href ? (
              <a key={index} href={item.href} className={linkClassName}>
                {item.label}
              </a>
            ) : (
              <p key={index} className={linkClassName}>
                {item.label}
              </p>
            ),
          )}
        </div>
      </div>

      <div className="max-w-275 mx-auto mt-12 pt-6 border-t border-line text-center text-xs text-muted">
        © نویدا — گروه فنی و مهندسی. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
