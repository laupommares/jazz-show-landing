import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { TopNavBar } from "@/components/layout/top-nav-bar";
import { bodoniModa, manrope, materialSymbols } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "LAS COQUETTES - Dúo de Jazz Dance en Barcelona",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`light ${bodoniModa.variable} ${manrope.variable} ${materialSymbols.variable}`}
    >
      <body className="overflow-x-hidden antialiased selection:bg-surface-variant selection:text-primary">
        <TopNavBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
