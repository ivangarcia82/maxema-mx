"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const FAQ_ITEMS = [
  {
    q: "What is the minimum order quantity?",
    a: "The minimum order quantity is 1,000 pens for stock colours and 5,000 pens for Pantone-matched bodies. Sample orders below the MOQ can be discussed with our sales team.",
  },
  {
    q: "How long does production take?",
    a: "Standard lead time is 4 to 5 weeks for stock colours, 6 to 8 weeks for Pantone matching. Express service is available for time-critical campaigns.",
  },
  {
    q: "Can I order a single pen as a sample?",
    a: "Yes — request a sample kit from the Sample Cases page or contact our sales team. Single pens with mock printing are available against a small set-up fee.",
  },
  {
    q: "Which printing techniques do you offer?",
    a: "Pad printing, screen printing, laser engraving, digital UV. The right technique depends on the pen model, the artwork and the run length — we'll advise.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We ship worldwide from our facility in Volpiano (Italy). Shipping costs are quoted per order based on weight and destination.",
  },
  {
    q: "Are your pens recyclable?",
    a: "Most of our pens are made of mono-material ABS, fully recyclable. The Kind range is made of post-consumer R-PET, recyclable and refillable. The Flow Pure Recycled and Pixel Matt Recycled ranges are made of post-industrial recycled ABS.",
  },
  {
    q: "Do you offer custom-designed pens?",
    a: "Yes — our in-house design and engineering team can develop a tailor-made model for your brand, from sketch through tooling to mass production. Minimum quantities apply.",
  },
  {
    q: "How do I become a distributor?",
    a: "Send an introduction with your company profile and target markets to export@maxema.com. Approved distributors gain access to our reserved-area ordering platform.",
  },
];

const META_TITLE =
  "FAQ - Maxema - Personalized and promotional pens designed in Italy.";

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#dedede]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium text-black transition-colors hover:text-[#c23c2a] md:text-lg"
      >
        <span>{q}</span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center text-[#838383]"
          aria-hidden
        >
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <p
          className="overflow-hidden text-[15px] leading-relaxed text-[#525252]"
          style={{ fontWeight: 300 }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <PageShell>
      {/* set title via document head — metadata export not allowed in client components */}
      <title>{META_TITLE}</title>
      <section className="w-full bg-white">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            FAQ
          </span>
          <h1
            className="mt-3 text-[56px] font-bold leading-[0.95] text-black md:text-[88px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Frequently
            <br />
            asked.
          </h1>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto px-6 pb-20" style={{ maxWidth: 960 }}>
          <div className="border-t border-[#dedede]">
            {FAQ_ITEMS.map((item, idx) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
