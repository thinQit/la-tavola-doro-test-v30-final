import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";

import { NavbarFloating } from "@/components/blocks/NavbarFloating";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const heading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "La Tavola D’Oro | Premium Italian Restaurant",
  description:
    "La Tavola D’Oro — an elegant Italian dining experience with seasonal menus, handcrafted pasta, and warm Mediterranean hospitality."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarFloating
            logo="La Tavola D’Oro"
            navItems={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" }
            ]}
            ctaLabel="Reserve"
            ctaHref="/contact"
          />
        </div>

        <main className="pt-20">{children}</main>

        <FooterMultiColumn
          brand="La Tavola D’Oro"
          description="An editorial Italian dining experience—seasonal ingredients, handcrafted pasta, and a warm Mediterranean table."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" }
              ]
            },
            {
              title: "Plan Your Visit",
              links: [
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" }
              ]
            },
            {
              title: "Hours",
              links: [
                { label: "Mon–Thu: 5–10pm", href: "/contact" },
                { label: "Fri–Sat: 5–11pm", href: "/contact" },
                { label: "Sun: 4–9pm", href: "/contact" }
              ]
            }
          ]}
          copyright={`© ${new Date().getFullYear()} La Tavola D’Oro. All rights reserved.`}
        />
      </body>
    </html>
  );
}
