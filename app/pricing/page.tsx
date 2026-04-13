"use client";

import { motion } from "framer-motion";
const Image = "img" as any;

import { HeroImage } from "@/components/blocks/HeroImage";
import { PricingTable } from "@/components/blocks/PricingTable";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function PricingPage() {
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
          headline="Private Dining & Experiences"
          subheadline="Celebrate with a curated Italian menu—crafted for intimate groups and special evenings."
          primaryCta={{ label: "Inquire", href: "/contact" }}
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
            <div className="overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/product-1.png"
                alt="Private dining table"
                width={1200}
                height={900}
                className="h-[340px] w-full object-cover"
              />
            </div>
            <div>
              <p className="label-caps text-xs text-muted-foreground">Designed for groups</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading">
                A room that feels like your own
              </h2>
              <p className="mt-4 text-foreground/80">
                Choose a prix-fixe menu, add pairings, and let our team guide the pacing.
                We’ll tailor details for birthdays, anniversaries, and corporate dinners.
              </p>
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
        <PricingTable
          headline="Group dining packages"
          subheadline="Transparent options with room for customization."
          tiers={[
            {
              name: "La Classica",
              price: "$85",
              period: "per guest",
              description: "Three courses, seasonal selections.",
              features: [
                "Antipasti + Primi + Dolci",
                "Vegetarian-friendly options",
                "Dedicated service pacing"
              ],
              ctaLabel: "Inquire",
              ctaHref: "/contact"
            },
            {
              name: "D’Oro Tasting",
              price: "$125",
              period: "per guest",
              description: "Four courses with chef’s highlights.",
              features: [
                "Antipasti + Primi + Secondi + Dolci",
                "Seasonal off-menu additions",
                "Ideal for celebrations"
              ],
              ctaLabel: "Inquire",
              ctaHref: "/contact",
              highlighted: true
            },
            {
              name: "Cellar Pairing",
              price: "+$55",
              period: "per guest",
              description: "Sommelier-selected pairings for each course.",
              features: [
                "3–4 pours matched to the menu",
                "Italian-focused cellar picks",
                "Non-alcoholic pairing available"
              ],
              ctaLabel: "Add Pairing",
              ctaHref: "/contact"
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
          headline="Private dining FAQ"
          subheadline="A few practical details for planning."
          items={[
            {
              question: "What group size can you accommodate?",
              answer:
                "We can host intimate groups and larger parties depending on the date. Share your preferred date and headcount via the contact form."
            },
            {
              question: "Can we customize the menu?",
              answer:
                "Yes. We’ll tailor courses for dietary needs and can adjust selections based on seasonal availability."
            },
            {
              question: "Do you require a deposit?",
              answer:
                "For certain dates and group sizes, a deposit may be required. We’ll confirm details during inquiry."
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
          headline="Plan a beautiful evening"
          description="Tell us your date, group size, and preferences—we’ll take it from there."
          ctaLabel="Private Dining Inquiry"
          ctaHref="/contact"
          secondaryCtaLabel="View Menu"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </div>
  );
}
