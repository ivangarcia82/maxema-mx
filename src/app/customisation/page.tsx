import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title:
    "Customisation - Maxema - Promotional pens. Hi-quality pens designed in Italy.",
  description:
    "Customisation - Maxema - Promotional pens. Hi-quality pens designed in Italy. Promotional writing instruments and business gadgets.",
};

const PRINTING_TECHS = [
  {
    title: "Pad printing",
    body:
      "The most flexible printing technique for promotional pens. Pad printing reproduces logos and graphics with precision on the body, the cap and the clip. Up to four colours per pass, full Pantone matching.",
    image: "/assets/fightbean/assets/content/personalizzazione/slider-laser-fronte.png",
  },
  {
    title: "Screen printing",
    body:
      "Ideal for larger areas of solid colour, screen printing offers vivid, opaque coverage and excellent durability. Perfect for monochrome logotypes that need maximum visual impact.",
    image: "/assets/fightbean/assets/content/personalizzazione/canvas-pen.png",
  },
  {
    title: "Laser engraving",
    body:
      "For metal trims and rubberised finishes, laser engraving delivers a permanent, refined mark. The result is sober, elegant and impossible to wear off — ideal for premium ranges.",
    image:
      "/assets/fightbean/assets/content/personalizzazione/slider-laser-fronte.png",
  },
  {
    title: "Digital UV",
    body:
      "Digital UV printing is the right choice for short runs, photo-realistic images, and complex full-colour graphics. No screens, no setup costs, no compromises on colour fidelity.",
    image: "/assets/fightbean/assets/content/personalizzazione/packaging.png",
  },
];

const REFILLS = [
  { name: "Jumbo", desc: "Standard ballpoint refill, blue or black ink, up to 4000 m of writing trace.", img: "/assets/fightbean/assets/content/personalizzazione/refill/jumbo.png" },
  { name: "Fast Dry Gel", desc: "Quick-drying gel ink for left-handers and high-end ranges.", img: "/assets/fightbean/assets/content/personalizzazione/refill/fast_dry_gel.png" },
  { name: "RT 90", desc: "Refill with extended writing length, available in five colours.", img: "/assets/fightbean/assets/content/personalizzazione/refill/rt90.png" },
];

export default function CustomisationPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative w-full bg-white">
        <div
          className="mx-auto px-6 py-20 md:py-28"
          style={{ maxWidth: 960 }}
        >
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            Customisation
          </span>
          <h1
            className="mt-3 text-[64px] font-bold leading-[0.95] text-black md:text-[96px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            As you like it,
            <br />
            in your colours.
          </h1>
          <p
            className="mt-6 max-w-[720px] text-lg text-[#838383] md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            Every Maxema pen can be customised in body colour, cap colour, clip
            colour and trims, then printed with your logo using the technique
            that best suits your message and your budget.
          </p>
        </div>
      </section>

      {/* Printing techniques */}
      <section id="print" className="w-full bg-white">
        <div
          className="mx-auto px-6 pb-20"
          style={{ maxWidth: 960 }}
        >
          <h2
            className="mb-2 text-xs uppercase tracking-wider text-[#838383]"
          >
            Section
          </h2>
          <h3
            className="text-3xl font-bold text-black md:text-[40px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Printing techniques.
          </h3>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {PRINTING_TECHS.map((t) => (
              <article key={t.title}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4]">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
                <h4
                  className="mt-4 text-xl font-bold text-black"
                  style={{
                    fontFamily:
                      "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  }}
                >
                  {t.title}
                </h4>
                <p
                  className="mt-2 text-[15px] leading-relaxed text-[#525252]"
                  style={{ fontWeight: 300 }}
                >
                  {t.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pantone */}
      <section id="pantone" className="w-full bg-[#f4f4f4]">
        <div
          className="mx-auto grid gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
          style={{ maxWidth: 960 }}
        >
          <div>
            <span className="text-xs uppercase tracking-wider text-[#838383]">
              Pantone matching
            </span>
            <h3
              className="mt-2 text-3xl font-bold text-black md:text-[40px]"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Your colour, exactly.
            </h3>
            <p
              className="mt-4 text-base leading-relaxed text-[#525252] md:text-[17px]"
              style={{ fontWeight: 300 }}
            >
              From minimum quantities, we colour-match the entire pen — body,
              cap, clip, plug — to your Pantone reference. The same chip is
              kept in our archive so re-orders match identically, even years
              later.
            </p>
          </div>
          <div className="relative aspect-[5/4] w-full overflow-hidden bg-white">
            <Image
              src="/assets/fightbean/assets/content/finiture/glossy-solid.png"
              alt="Pantone matching"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Refills */}
      <section className="w-full bg-white">
        <div
          className="mx-auto px-6 py-20"
          style={{ maxWidth: 960 }}
        >
          <span className="text-xs uppercase tracking-wider text-[#838383]">
            Inside
          </span>
          <h3
            className="mt-2 text-3xl font-bold text-black md:text-[40px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Refills.
          </h3>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {REFILLS.map((r) => (
              <article key={r.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden">
                  <Image
                    src={r.img}
                    alt={r.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <h4 className="mt-4 text-lg font-bold text-black">
                  {r.name}
                </h4>
                <p className="mt-2 text-sm text-[#525252]">{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section id="packaging" className="w-full bg-[#f4f4f4]">
        <div
          className="mx-auto grid gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
          style={{ maxWidth: 960 }}
        >
          <div className="relative aspect-[5/4] w-full overflow-hidden bg-white order-2 md:order-1">
            <Image
              src="/assets/fightbean/assets/content/personalizzazione/packaging.png"
              alt="Custom packaging"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs uppercase tracking-wider text-[#838383]">
              Packaging
            </span>
            <h3
              className="mt-2 text-3xl font-bold text-black md:text-[40px]"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Custom packaging.
            </h3>
            <p
              className="mt-4 text-base leading-relaxed text-[#525252] md:text-[17px]"
              style={{ fontWeight: 300 }}
            >
              Branded boxes, tubes, sleeves and giftsets — any quantity. Our
              in-house finishing department designs and produces presentation
              packaging that lifts the perceived value of your promotional
              article.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
