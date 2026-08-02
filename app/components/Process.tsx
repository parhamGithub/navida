"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/app/types";

const steps: ProcessStep[] = [
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

export default function Process() {
  return (
    <section id="process" className="py-35 px-[6%] bg-charcoal border-t border-line border-b">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-170 mx-auto mb-16 text-center"
      >
        <div className="font-serif italic text-gold-dim tracking-[4px] text-xs uppercase">How We Work</div>
        <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-ivory mt-3">روند انجام پروژه</h2>
      </motion.div>

      <div className="max-w-190 mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="flex gap-7 py-7.5 border-b border-line items-start last:border-none"
          >
            <div className="font-serif text-[34px] text-gold-dim font-semibold min-w-13">{step.num}</div>
            <div>
              <h4 className="text-[17px] text-ivory font-bold mb-2">{step.title}</h4>
              <p className="text-[13.8px] text-muted leading-[1.9] max-w-130">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
