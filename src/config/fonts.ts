import { Funnel_Display, Funnel_Sans } from "next/font/google";

export const displayFont = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
});

export const bodyFont = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-body-face",
  display: "swap",
  preload: false,
});
