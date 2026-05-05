import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title:
    "Company - Maxema - Promotional pens. Hi-quality pens designed in Italy. Promotional writing instruments and business gadgets.",
  description:
    "Maxema is an Italian manufacturer of promotional pens. Precision design, meticulous engineering, constant research and testing, selection of the best materials.",
};

const STORY_BLOCKS = [
  {
    title: "Fast and reliable",
    body:
      "Maxema's strength lies in being able to deliver large quantities in a very short time, thanks to highly efficient production processes and to the constant control of every stage by qualified personnel. The objective is constant: minimise lead-times and meet customer requirements with the maximum of flexibility.",
    image: "/assets/fightbean/assets/content/azienda/azienda-2.jpg",
    align: "right" as const,
  },
  {
    title: "From 2000 to 6000",
    body:
      "From 2,000 to 6,000 pens an hour: this is the average production output of every Maxema injection-moulding press, working uninterruptedly day and night. A unique testimonial to the size of our production capacity, the result of constant investment and growth in our facilities.",
    image: "/assets/fightbean/assets/content/azienda/azienda_produzione.jpg",
    align: "left" as const,
  },
  {
    title: "We select our raw materials with care.",
    body:
      "Each Maxema pen is the result of a careful selection of premium-quality raw materials. ABS plastic, special engineering polymers and food-grade compounds: every batch is tested in-house before going into production.",
    image: "/assets/fightbean/assets/content/azienda/repository-icon.png",
    align: "right" as const,
  },
  {
    title: "A good pen keeps its promise.",
    body:
      "Every Maxema pen is tested individually before leaving the factory. Smooth writing flow, perfect mechanism action, flawless print: the small details that make the difference. A good pen has to keep its promise, time after time.",
    image: "/assets/fightbean/assets/content/azienda/azienda_inchiostri.jpg",
    align: "left" as const,
  },
  {
    title: "Up to 4000 metres",
    body:
      "Every refill we produce is calibrated to deliver up to 4,000 metres of uninterrupted writing — the equivalent of more than 80 average-length novels. Reliable and consistent ink flow is what makes our pens last.",
    image: "/images/icon_5.png",
    align: "right" as const,
  },
  {
    title: "Our ink",
    body:
      "Made in Switzerland to our exclusive specification, the ink we use is engineered for an even, fade-resistant trace. Multiple colours are available; black and blue are produced in the largest quantities to meet promotional demand.",
    image: "/assets/fightbean/assets/content/azienda/azienda_inchiostri.jpg",
    align: "left" as const,
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative w-full bg-white">
        <div
          className="mx-auto flex flex-col items-start justify-center px-6 py-20 md:py-28"
          style={{ maxWidth: 960 }}
        >
          <span className="mb-4 text-sm uppercase tracking-wider text-[#838383]">
            Company
          </span>
          <h1
            className="text-[64px] font-bold leading-[0.95] text-black md:text-[96px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            An Italian
            <br />
            Heart.
          </h1>
          <p
            className="mt-6 max-w-[720px] text-lg leading-relaxed text-[#838383] md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            Precision design, meticulous engineering, constant research and
            testing, selection of the best materials. In short: a love for
            beautiful objects and care for the environment. This is what an
            Italian-made product means for Maxema.
          </p>
        </div>
      </section>

      {/* Story sections */}
      <section className="w-full bg-white">
        <div className="mx-auto px-6 pb-16" style={{ maxWidth: 960 }}>
          {STORY_BLOCKS.map((block, idx) => (
            <div
              key={block.title}
              className={`mt-16 flex flex-col gap-10 md:items-center ${
                block.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4] md:w-1/2">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-xs uppercase tracking-wider text-[#838383]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2
                  className="mt-2 text-[32px] font-bold leading-tight text-black md:text-[40px]"
                  style={{
                    fontFamily:
                      "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  }}
                >
                  {block.title}
                </h2>
                <p
                  className="mt-4 text-base leading-relaxed text-[#525252] md:text-[17px]"
                  style={{ fontWeight: 300 }}
                >
                  {block.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download company profile */}
      <section className="w-full bg-[#f4f4f4]">
        <div
          className="mx-auto flex flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row"
          style={{ maxWidth: 960 }}
        >
          <div>
            <h3
              className="text-2xl font-bold text-black"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Download the company profile
            </h3>
            <p className="mt-2 text-[#838383]">
              Get a closer look at Maxema, our facilities and our products.
            </p>
          </div>
          <Link
            href="/pdf/catalog.pdf"
            target="_blank"
            rel="noopener"
            className="inline-block bg-[#c23c2a] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-black"
          >
            Download PDF
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
