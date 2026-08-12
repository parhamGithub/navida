import type { Metadata } from "next";
import { Cormorant_Garamond, Vazirmatn, Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "نویدا | گروه فنی و مهندسی",
  description:
    "گروه فنی و مهندسی نویدا — طراحی، اجرا، بازسازی و طراحی داخلی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn(vazirmatn.variable, cormorant.variable, "font-sans", geist.variable)}
    >
      <body>
        <Header />
        {children}
        <Footer /></body>
    </html>
  );
}
