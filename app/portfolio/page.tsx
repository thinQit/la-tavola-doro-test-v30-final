"use client";

import { motion } from "framer-motion";
const Image = "img" as any;

import { HeroImage } from "@/components/blocks/HeroImage";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";
import { HoverEffect } from "@/components/ui/effects/HoverEffect";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function PortfolioPage() {
  return (
    <div className="surface">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={section}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroImage
          imageUrl="/images/hero.png"
          headline="Portfolio"
          subheadline="A curated look at our dining room, seasonal plates, and private dining moments."
          primaryCta={{ label: "Reserve", href: "/contact" }}
          secondaryCta={{ label: "View Menu", href: "/services" }}
          overlayOpacity="bg-gradient-to-b from-black/70 via-black/45 to-black/65"
        />
      </motion.div>

      <motion.section
        className="py-20 md:py-28 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={section}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="label-caps text-xs text-muted-foreground">Highlights</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading">
                The room, the plates, the glow
              </h2>
              <p className="mt-4 text-foreground/80">
                Each season brings new ingredients and new compositions—always rooted in
                Italian tradition and Mediterranean warmth.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/product-1.png"
                alt="Table setting"
                width={1200}
                height={900}
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12">
            <HoverEffect
              items={[
                {
                  title: "Seasonal Chef’s Selection",
                  description:
                    "Rotating plates built around peak ingredients—ask about tonight’s special."
                },
                {
                  title: "Private Dining Evenings",
                  description:
                    "Prix-fixe menus, pairing options, and a dedicated team for your celebration."
                },
                {
                  title: "Cellar Moments",
                  description:
                    "Italian-forward pours and thoughtful pairings—Barolo, Brunello, and beyond."
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={section}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <GalleryMasonry
          headline="Gallery"
          subheadline="A tactile, layered experience—captured in warm light."
          images={[
            { url: "/images/product-2.png", alt: "Dining room", caption: "The glow of evening" },
            { url: "/images/product-3.png", alt: "Dish close-up", caption: "Seasonal composition" },
            { url: "/images/about.png", alt: "Wine pour", caption: "From the cellar" },
            { url: "/images/gallery-1.png", alt: "Dessert", caption: "Dolci" },
            { url: "/images/team-1.png", alt: "Chef plating", caption: "Craft" },
            { url: "/images/product-2.png", alt: "Kitchen moment", caption: "Behind the pass" }
          ]}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={section}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CTAGlass
          headline="Bring your occasion to our table"
          description="From anniversaries to team dinners—let’s plan something memorable."
          ctaLabel="Private Dining"
          ctaHref="/pricing"
          secondaryCtaLabel="Reserve"
          secondaryCtaHref="/contact"
        />
      </motion.div>
    </div>
  );
}
