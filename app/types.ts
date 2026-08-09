import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface Service {
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface Project {
  images: { image: string; alt: string; aspect: string }[];
  title: string;
  category: string;
  aspect: string;
  num: string;
}

export interface ContactItem {
  label: string;
  href?: string;
}

export type CubicBezier = [number, number, number, number];

export type StaggerContainer = Variants;

export type StaggerItem = Variants;
