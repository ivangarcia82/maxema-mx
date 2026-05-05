import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title:
    "Sample Cases - Maxema - Promotional pens. Hi-quality pens designed in Italy.",
  description:
    "Sample Cases - Maxema - Promotional pens. Hi-quality pens designed in Italy. Promotional writing instruments and business gadgets.",
};

const KITS = [
  {
    name: "Mini kit",
    qty: "8 pens",
    desc: "A curated selection of best-sellers, ideal for first contact with the Maxema range.",
    img: "/assets/muvobit/landing/images/swiper-kit/minikit-8-desktop-NEW.png",
  },
  {
    name: "Antibacterial kit",
    qty: "6 pens",
    desc: "Our antibacterial-treated models, including Dot Antibacterial and Tag Green.",
    img: "/assets/fightbean/assets/content/sample-page/minikt_antibatterico.png",
  },
  {
    name: "Recycled & sustainable kit",
    qty: "10 pens",
    desc: "PIR, post-consumer R-PET and bio-based options for sustainability-led briefs.",
    img: "/assets/muvobit/landing/images/swiper-kit/slider-minikit-mobile-alto-NEW.png",
  },
  {
    name: "Premium kit",
    qty: "12 pens",
    desc: "Mood Metal, View, Bay and other refined ranges with metal trims and rubberised options.",
    img: "/assets/fightbean/assets/content/sample-page/slider_box-40.png",
  },
];

export default function SampleCasesPage() {
  return (
    <PageShell>
      <section className="w-full bg-white">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            Sample cases
          </span>
          <h1
            className="mt-3 text-[56px] font-bold leading-[0.95] text-black md:text-[88px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Try before you buy.
          </h1>
          <p
            className="mt-6 max-w-[720px] text-lg text-[#838383] md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            Pens are physical objects: their colour, weight, balance and
            tactile finish make all the difference. Order one of our sample
            cases and we&apos;ll ship a curated selection at no cost.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="mx-auto grid gap-12 px-6 pb-20 md:grid-cols-2"
          style={{ maxWidth: 960 }}
        >
          {KITS.map((k) => (
            <article key={k.name}>
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={k.img}
                  alt={k.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <span className="mt-4 inline-block text-xs uppercase tracking-wider text-[#838383]">
                {k.qty}
              </span>
              <h3
                className="mt-1 text-2xl font-bold text-black md:text-[28px]"
                style={{
                  fontFamily:
                    "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {k.name}
              </h3>
              <p
                className="mt-2 text-[15px] leading-relaxed text-[#525252]"
                style={{ fontWeight: 300 }}
              >
                {k.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#f4f4f4]">
        <div
          className="mx-auto flex flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row"
          style={{ maxWidth: 960 }}
        >
          <div>
            <h3
              className="text-2xl font-bold text-black md:text-[28px]"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Request your sample kit
            </h3>
            <p className="mt-2 text-[#838383]">
              Tell us a few details about your project and we&apos;ll send the
              right kit to your office.
            </p>
          </div>
          <Link
            href="/reserved-area"
            className="inline-block bg-[#c23c2a] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-black"
          >
            Order a kit
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
