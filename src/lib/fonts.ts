import { Bodoni_Moda, Manrope } from "next/font/google";
import localFont from "next/font/local";

export const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const materialSymbols = localFont({
  variable: "--font-material-symbols",
  src: "../fonts/material-symbols-outlined.woff2",
  weight: "100 700",
  style: "normal",
  display: "swap",
});
