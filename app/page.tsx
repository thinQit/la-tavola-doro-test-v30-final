"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { StickyScroll as StickyScrollReveal } from "@/components/ui/effects/StickyScrollReveal";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";
import { TestimonialsGrid } from "@/components/blocks/TestimonialsGrid";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function Page() {
  return (
    <div className="surface">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={section}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroMinimal
          headline="A Symphony of Italian Flavors"
          subheadline="A premium Mediterranean table—handcrafted pasta, seasonal produce, and cellar-worthy wines in a warm, editorial setting."
          primaryCta={{ label: "View Menu", href: "/services" }}
          secondaryCta={{ label: "Reserve a Table", href: "/contact" }}
          imageUrl="/images/hero.png"
        />
      </motion.div>

      <motion.section
        className="py-10 md:py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={section}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-secondary p-6">
              <p className="label-caps text-xs text-muted-foreground">Chef’s Selection</p>
              <p className="mt-2 font-heading text-xl">Handmade Tagliatelle al Ragù</p>
              <p className="mt-2 text-sm text-foreground/80">
                Slow-simmered beef ragù, Parmigiano-Reggiano, and a whisper of rosemary.
              </p>
              <div className="mt-5 overflow-hidden rounded-xl">
                <Image
                  src="/images/product-1.png"
                  alt="Handmade pasta dish"
                  width={900}
                  height={700}
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-muted p-6">
              <p className="label-caps text-xs text-muted-foreground">From the Cellar</p>
              <p className="mt-2 font-heading text-xl">Barolo & Super Tuscan Pairings</p>
              <p className="mt-2 text-sm text-foreground/80">
                Curated bottles and thoughtful pours designed to elevate each course.
              </p>
              <div className="mt-5 overflow-hidden rounded-xl">
                <Image
                  src="/images/product-2.png"
                  alt="Wine pairing"
                  width={900}
                  height={700}
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-secondary p-6">
              <p className="label-caps text-xs text-muted-foreground">Dolci</p>
              <p className="mt-2 font-heading text-xl">Tiramisu, Reimagined</p>
              <p className="mt-2 text-sm text-foreground/80">
                Espresso-soaked savoiardi, mascarpone cream, and cocoa—balanced, not heavy.
              </p>
              <div className="mt-5 overflow-hidden rounded-xl">
                <Image
                  src="/images/product-3.png"
                  alt="Dessert"
                  width={900}
                  height={700}
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>
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
        <FeaturesGrid
          badge="The Experience"
          headline="An Italian table, set with intention"
          subheadline="We trade hard borders for tonal depth—linen surfaces, warm light, and a menu that reads like a manuscript."
          features={[
            {
              icon: "🍝",
              title: "Handcrafted Pasta Daily",
              description:
                "Fresh dough, rolled and cut in-house—built for sauces that cling and linger."
            },
            {
              icon: "🥬",
              title: "Seasonal Mediterranean Ingredients",
              description:
                "Local produce meets Italian technique—simple plates with extraordinary sourcing."
            },
            {
              icon: "🍷",
              title: "Sommelier-Guided Pairings",
              description:
                "A cellar-forward list with thoughtful pairings for each course and mood."
            },
            {
              icon: "🕯️",
              title: "Warm, Editorial Atmosphere",
              description:
                "Soft lighting, rustic textures, and a dining room designed for unhurried evenings."
            }
          ]}
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
          <div className="mx-auto max-w-2xl text-center">
            <p className="label-caps text-xs text-muted-foreground">Chef’s Story</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading">
              The art of slow dining
            </h2>
            <p className="mt-4 text-foreground/80">
              From hand-pressed menus to long-simmered sauces, every detail is designed
              to feel tactile, layered, and deeply Mediterranean.
            </p>
          </div>

          <div className="mt-10">
            <StickyScrollReveal
              content={[
                {
                  title: "Antipasti: A first impression",
                  description:
                    "Small plates that set the tone—bright citrus, olive oil, and the crunch of toasted bread.",
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src="/images/product-2.png"
                        alt="Antipasti"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )
                },
                {
                  title: "Primi: Pasta as the centerpiece",
                  description:
                    "Silky emulsions, slow ragù, and seasonal vegetables—balanced, not heavy.",
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src="/images/product-1.png"
                        alt="Pasta course"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )
                },
                {
                  title: "Secondi: Fire, smoke, and restraint",
                  description:
                    "Proteins cooked with patience—paired with greens, grains, and sauces that whisper.",
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src="/images/product-3.png"
                        alt="Secondi course"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )
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
          headline="Moments from the table"
          subheadline="A warm room, a golden pour, and plates designed to be shared."
          images={[
            { url: "/images/product-1.png", alt: "Dining room ambiance", caption: "Candlelit evenings" },
            { url: "/images/product-2.png", alt: "Rustic table setting", caption: "Hand-pressed details" },
            { url: "/images/product-3.png", alt: "Signature dish", caption: "Seasonal plates" },
            { url: "/images/about.png", alt: "Wine glasses", caption: "Cellar-forward pours" },
            { url: "/images/gallery-1.png", alt: "Dessert close-up", caption: "Dolci, balanced" },
            { url: "/images/team-1.png", alt: "Chef plating", caption: "Craft in motion" }
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
        <TestimonialsGrid
          headline="Guests return for a reason"
          subheadline="Warm hospitality, meticulous cooking, and a room that invites you to linger."
          testimonials={[
            {
              quote:
                "The pasta tasted like it was made five minutes ago—because it was. Elegant, warm, and unforgettable.",
              name: "Local Guide",
              title: "Weekend dinner"
            },
            {
              quote:
                "A wine list with real personality. The pairing suggestions were spot-on and never pushy.",
              name: "Guest",
              title: "Anniversary"
            },
            {
              quote:
                "The room feels like a Mediterranean manuscript—soft light, beautiful textures, and food that matches the mood.",
              name: "Diner",
              title: "Chef’s tasting"
            }
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
          headline="Reserve your table"
          description="Secure a seat for tonight—or plan a long, unhurried evening with friends."
          ctaLabel="Make a Reservation"
          ctaHref="/contact"
          secondaryCtaLabel="Explore the Menu"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </div>
  );
}
