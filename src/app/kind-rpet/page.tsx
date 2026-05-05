import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title:
    "R-PET Be Kind - Maxema - Promotional writing instruments and business gadgets, custom printed pens.",
  description:
    "R-PET Be Kind - Maxema - Promotional pens. Hi-quality pens designed in Italy.",
};

const COLOURS = [
  { name: "Abyss", img: "/assets/muvobit/landing/images/swiper-color/pen-abyss.png" },
  { name: "Cloud", img: "/assets/muvobit/landing/images/swiper-color/pen-cloud.png" },
  { name: "Desert", img: "/assets/muvobit/landing/images/swiper-color/pen-desert.png" },
];

export default function KindRpetPage() {
  return (
    <PageShell>
      <section className="relative w-full overflow-hidden bg-black text-white">
        <div className="mx-auto px-6 py-24 md:py-32" style={{ maxWidth: 960 }}>
          <Image
            src="/assets/muvobit/landing/images/bekind.svg"
            alt="Be Kind"
            width={220}
            height={80}
            unoptimized
            className="mb-6"
          />
          <h1
            className="text-[56px] font-bold leading-[0.95] md:text-[96px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              color: "#ffed00",
            }}
          >
            A lasting pen.
            <br />
            Loves nature.
          </h1>
          <p
            className="mt-6 max-w-[640px] text-lg text-white/80 md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            Kind is our pen in R-PET — recyclable and refillable. Designed to
            convey a message with a strong visual impact and low environmental
            impact, it is made from a special plastic obtained by gathering
            and recycling post-consumer PET bottles.
          </p>
          <Link
            href="/products/261"
            className="mt-8 inline-block bg-[#ffed00] px-6 py-3 text-sm font-medium uppercase tracking-wide text-black transition-colors hover:bg-white"
          >
            Discover the model
          </Link>
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="mx-auto grid gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
          style={{ maxWidth: 960 }}
        >
          <div className="relative aspect-square w-full overflow-hidden bg-[#f4f4f4]">
            <Image
              src="/assets/muvobit/landing/images/bekind-pen-hero-low.png"
              alt="Kind R-PET pen"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[#838383]">
              The story
            </span>
            <h2
              className="mt-2 text-3xl font-bold text-black md:text-[40px]"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              From bottle to pen.
            </h2>
            <p
              className="mt-4 text-[15px] leading-relaxed text-[#525252] md:text-[17px]"
              style={{ fontWeight: 300 }}
            >
              For every 1,000 Kind pens produced we keep approximately 1.7 kg
              of plastic waste out of the environment. The post-consumer PET
              we use is sorted, washed and re-pelletised in Italy before going
              into our injection-moulding presses.
            </p>
            <Image
              src="/assets/muvobit/landing/images/a-lasting-pen-loves-nature.jpg"
              alt="A lasting pen loves nature"
              width={620}
              height={300}
              unoptimized
              className="mt-6 h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f4f4f4]">
        <div className="mx-auto px-6 py-20" style={{ maxWidth: 960 }}>
          <span className="text-xs uppercase tracking-wider text-[#838383]">
            Available colours
          </span>
          <h2
            className="mt-2 text-3xl font-bold text-black md:text-[40px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Three muted tones.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {COLOURS.map((c) => (
              <article key={c.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-black">
                  {c.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
