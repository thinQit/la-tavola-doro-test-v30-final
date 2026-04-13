"use client";

import { motion } from "framer-motion";
const Image = "img" as any;

import { HeroImage } from "@/components/blocks/HeroImage";
import { ContactForm } from "@/components/blocks/ContactForm";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
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
          headline="Reservations & Contact"
          subheadline="Reserve a table, inquire about private dining, or ask about tonight’s specials."
          primaryCta={{ label: "Private Dining", href: "/pricing" }}
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
              <p className="label-caps text-xs text-muted-foreground">Location</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading">
                Find us in the heart of the city
              </h2>
              <p className="mt-4 text-foreground/80">
                123 Via Mediterranea, Suite 10<br />
                Your City, ST 00000
              </p>
              <p className="mt-4 text-foreground/80">
                Mon–Thu: 5–10pm<br />
                Fri–Sat: 5–11pm<br />
                Sun: 4–9pm
              </p>
              <p className="mt-4 text-foreground/80">
                Phone: (555) 012-3456<br />
                Email: reservations@latavoladoro.com
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/product-1.png"
                alt="Restaurant ambiance"
                width={1200}
                height={900}
                className="h-[340px] w-full object-cover"
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
        <ContactForm
          headline="Request a reservation"
          subheadline="Share your preferred date/time, party size, and any dietary notes. We’ll confirm shortly."
          contactInfo={[
            { icon: "📍", label: "Address", value: "123 Via Mediterranea, Your City" },
            { icon: "🕰️", label: "Hours", value: "Mon–Thu 5–10 • Fri–Sat 5–11 • Sun 4–9" },
            { icon: "☎️", label: "Phone", value: "(555) 012-3456" }
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
          headline="Reservations FAQ"
          subheadline="Quick answers for planning."
          items={[
            {
              question: "How far in advance should we book?",
              answer:
                "Weekends fill quickly. We recommend reserving 3–7 days ahead for prime times."
            },
            {
              question: "Do you accept walk-ins?",
              answer:
                "Yes, when available. For the best experience, we recommend reserving—especially for groups."
            },
            {
              question: "Can I note a special occasion?",
              answer:
                "Absolutely. Add it to your message and we’ll do our best to make it feel personal."
            }
          ]}
        />
      </motion.div>
    </div>
  );
}
