"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { HeroImage } from "@/components/blocks/HeroImage";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
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
          headline="Our Story, Written in Olive Oil & Fire"
          subheadline="La Tavola D’Oro is an editorial Italian dining room—layered, tactile, and deeply Mediterranean."
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
              <p className="label-caps text-xs text-muted-foreground">The Mediterranean Manuscript</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading">
                A premium table—without the pretense
              </h2>
              <p className="mt-4 text-foreground/80">
                We believe the best Italian meals are unhurried. Our kitchen works with
                seasonal ingredients, classic technique, and a quiet obsession with texture:
                crisp, silky, charred, and bright.
              </p>
              <p className="mt-4 text-foreground/80">
                The room is designed like a layered menu—tonal surfaces, warm light, and
                intentional asymmetry that feels curated rather than templated.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/product-1.png"
                alt="Chef preparing a dish"
                width={1200}
                height={900}
                className="h-[360px] w-full object-cover"
              />
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
        <StatsCounter
          bgColor="bg-primary text-primary-foreground"
          stats={[
            { label: "Fresh pasta made weekly", value: "120+" },
            { label: "Seasonal dishes per year", value: "60+" },
            { label: "Italian wines curated", value: "90+" },
            { label: "Minutes we’ll never rush you", value: "∞" }
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
        <TeamGrid
          headline="The people behind the plates"
          subheadline="A small team with a shared obsession: hospitality that feels personal."
          members={[
            {
              name: "Executive Chef",
              title: "Chef de Cucina",
              bio: "Seasonal Italian cooking with a focus on handmade pasta and slow sauces.",
              imageUrl: "/images/team-1.png"
            },
            {
              name: "Sommelier",
              title: "Wine Director",
              bio: "Cellar-forward pairings that elevate without overpowering the plate.",
              imageUrl: "/images/team-2.png"
            },
            {
              name: "Dining Room Lead",
              title: "Hospitality",
              bio: "Warm, attentive service—never rushed, always thoughtful.",
              imageUrl: "/images/team-2.png"
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
        <FAQAccordion
          headline="A few thoughtful notes"
          subheadline="Everything you need to know before you arrive."
          items={[
            {
              question: "Do you accommodate dietary restrictions?",
              answer:
                "Yes. Please note allergies and dietary needs when reserving, and our team will guide you to the best options."
            },
            {
              question: "Is there a dress code?",
              answer:
                "Smart casual. We love a polished look, but comfort is welcome—especially for long dinners."
            },
            {
              question: "Do you offer private dining?",
              answer:
                "Yes. We host intimate celebrations and corporate dinners. Contact us for availability and menu options."
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
          headline="Come linger awhile"
          description="Reserve a table and let the evening unfold course by course."
          ctaLabel="Reserve"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Menu"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </div>
  );
}
