import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title:
    "Services - Maxema - Promotional pens. Hi-quality pens designed in Italy.",
  description:
    "Services - Maxema - Promotional pens. Hi-quality pens designed in Italy. Promotional writing instruments and business gadgets.",
};

const SERVICES = [
  {
    title: "Sample kits",
    body:
      "Order a physical sample kit and feel the difference. We send you finished pens at no cost so you can see the colours, the finishes and the quality of the print first-hand.",
    href: "/sample-cases",
    cta: "Discover sample kits",
  },
  {
    title: "Custom design",
    body:
      "Need a unique pen? Our in-house design and engineering team can develop a tailor-made model for your brand, from sketch to mass production.",
    href: "/contacts",
    cta: "Contact us",
  },
  {
    title: "Sustainability programmes",
    body:
      "ClimatePartner-certified, post-industrial recycled and bio-based ranges. Choose pens that align with your environmental commitments.",
    href: "/recycled-plastic-pens",
    cta: "Recycled pens",
  },
  {
    title: "Distributor enquiries",
    body:
      "Interested in becoming an authorised distributor? Get in touch with our team — we'll share pricing, product availability and onboarding details.",
    href: "/contacts",
    cta: "Contact us",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="w-full bg-white">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            Services
          </span>
          <h1
            className="mt-3 text-[56px] font-bold leading-[0.95] text-black md:text-[88px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Beyond the pen.
          </h1>
          <p
            className="mt-6 max-w-[720px] text-lg text-[#838383] md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            What you can expect from working with Maxema: dedicated design
            support, transparent production timelines, sustainability
            certifications and a sales team that genuinely cares about your
            brand.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#f4f4f4]">
        <div
          className="mx-auto grid gap-8 px-6 py-20 md:grid-cols-2"
          style={{ maxWidth: 960 }}
        >
          {SERVICES.map((s) => (
            <article key={s.title} className="bg-white p-8">
              <h3
                className="text-2xl font-bold text-black"
                style={{
                  fontFamily:
                    "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {s.title}
              </h3>
              <p
                className="mt-3 text-[15px] leading-relaxed text-[#525252]"
                style={{ fontWeight: 300 }}
              >
                {s.body}
              </p>
              <Link
                href={s.href}
                className="mt-5 inline-block bg-[#3c3c3c] px-5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-black"
              >
                {s.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
