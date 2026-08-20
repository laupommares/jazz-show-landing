import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { bodoniModa, manrope, materialSymbols } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Las Coquettes - Dúo de Jazz Dance en Barcelona",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`light ${bodoniModa.variable} ${manrope.variable} ${materialSymbols.variable}`}
    >
      <body className="overflow-x-hidden antialiased selection:bg-surface-variant selection:text-primary">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
