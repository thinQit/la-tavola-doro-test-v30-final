"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { HeroImage } from "@/components/blocks/HeroImage";
import { Tabs as AnimatedTabs } from "@/components/ui/effects/AnimatedTabs";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

function MenuCategory({
  title,
  items
}: {
  title: string;
  items: { name: string; description: string; price: string }[];
}) {
  return (
    <div className="rounded-2xl bg-secondary p-6 md:p-8">
      <p className="label-caps text-xs text-muted-foreground">{title}</p>
      <div className="mt-6 space-y-5">
        {items.map((it) => (
          <div key={it.name} className="flex items-start justify-between gap-6">
            <div>
              <p className="font-heading text-lg">{it.name}</p>
              <p className="mt-1 text-sm text-foreground/75">{it.description}</p>
            </div>
            <p className="font-medium text-foreground/90">{it.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
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
          imageUrl="/images/product-2.png"
          headline="Menu"
          subheadline="Seasonal Italian cooking—handmade pasta, bright antipasti, and secondi built around fire and restraint."
          primaryCta={{ label: "Reserve", href: "/contact" }}
          secondaryCta={{ label: "Private Dining", href: "/pricing" }}
          overlayOpacity="bg-gradient-to-b from-black/70 via-black/45 to-black/65"
        />
      </motion.div>

      <motion.section
        className="py-20 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={section}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="label-caps text-xs text-muted-foreground">Today’s Highlights</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading">
                A menu that reads like a manuscript
              </h2>
              <p className="mt-4 text-foreground/80">
                Categories are classic; ingredients are seasonal. Ask your server for
                off-menu specials and pairing notes from the cellar.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/product-1.png"
                alt="Signature pasta"
                width={1200}
                height={900}
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12">
            <AnimatedTabs
              tabs={[
                {
                  title: "Antipasti",
                  value: "antipasti",
                  content: (
                    <MenuCategory
                      title="Antipasti"
                      items={[
                        {
                          name: "Bruschetta al Pomodoro",
                          description: "Charred bread, marinated tomatoes, basil, aged balsamic.",
                          price: "14"
                        },
                        {
                          name: "Burrata & Citrus",
                          description: "Creamy burrata, blood orange, olive oil, sea salt.",
                          price: "18"
                        },
                        {
                          name: "Calamari Fritti",
                          description: "Lightly fried, lemon, herb aioli.",
                          price: "19"
                        }
                      ]}
                    />
                  )
                },
                {
                  title: "Primi",
                  value: "primi",
                  content: (
                    <MenuCategory
                      title="Primi"
                      items={[
                        {
                          name: "Tagliatelle al Ragù",
                          description: "Slow-simmered beef ragù, Parmigiano-Reggiano.",
                          price: "28"
                        },
                        {
                          name: "Cacio e Pepe",
                          description: "Pecorino Romano, black pepper, silky emulsion.",
                          price: "24"
                        },
                        {
                          name: "Risotto ai Funghi",
                          description: "Wild mushrooms, white wine, herbs, aged cheese.",
                          price: "26"
                        }
                      ]}
                    />
                  )
                },
                {
                  title: "Secondi",
                  value: "secondi",
                  content: (
                    <MenuCategory
                      title="Secondi"
                      items={[
                        {
                          name: "Branzino al Forno",
                          description: "Roasted sea bass, lemon, capers, herbs.",
                          price: "36"
                        },
                        {
                          name: "Bistecca (for two)",
                          description: "Charred steak, rosemary, olive oil, seasonal sides.",
                          price: "78"
                        },
                        {
                          name: "Pollo alla Diavola",
                          description: "Crisp-skinned chicken, chili, citrus, greens.",
                          price: "34"
                        }
                      ]}
                    />
                  )
                },
                {
                  title: "Dolci",
                  value: "dolci",
                  content: (
                    <MenuCategory
                      title="Dolci"
                      items={[
                        {
                          name: "Tiramisu",
                          description: "Espresso, mascarpone, cocoa—balanced and light.",
                          price: "14"
                        },
                        {
                          name: "Panna Cotta",
                          description: "Vanilla bean, seasonal fruit, citrus zest.",
                          price: "13"
                        },
                        {
                          name: "Affogato",
                          description: "Gelato, espresso, optional amaro.",
                          price: "12"
                        }
                      ]}
                    />
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
        <FeaturesGrid
          badge="Dining Options"
          headline="More ways to enjoy La Tavola D’Oro"
          subheadline="From intimate celebrations to curated pairings—choose the evening you want."
          features={[
            {
              icon: "🥂",
              title: "Chef’s Tasting",
              description: "A multi-course journey guided by the kitchen’s seasonal favorites."
            },
            {
              icon: "🍷",
              title: "Wine Pairing Add-On",
              description: "Sommelier-selected pours that track each course’s texture and aroma."
            },
            {
              icon: "🕯️",
              title: "Private Dining",
              description: "A dedicated space for celebrations, proposals, and corporate dinners."
            },
            {
              icon: "🎁",
              title: "Gift Cards",
              description: "Give an evening of Italian hospitality—perfect for anniversaries."
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
          headline="Ready to dine?"
          description="Reserve a table and let us set the pace—slow, warm, and unforgettable."
          ctaLabel="Reserve"
          ctaHref="/contact"
          secondaryCtaLabel="Private Dining"
          secondaryCtaHref="/pricing"
        />
      </motion.div>
    </div>
  );
}
