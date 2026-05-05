import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title:
    "Finishes and Materials - Maxema - Promotional pens. Hi-quality pens designed in Italy.",
  description:
    "Finishes and Materials - Maxema - Promotional pens. Hi-quality pens designed in Italy. Promotional writing instruments and business gadgets.",
};

const FINISHES = [
  {
    name: "Glossy solid",
    desc: "The signature Maxema look: brilliant high-shine surfaces in vivid solid colours, achieved through high-precision injection moulding.",
    img: "/assets/fightbean/assets/content/finiture/glossy-solid.png",
  },
  {
    name: "Glossy transparent",
    desc: "Translucent finishes that play with light and let the inner mechanics show through. Available in any Pantone shade.",
    img: "/assets/fightbean/assets/content/finiture/glossy-transparent.png",
  },
  {
    name: "Matt",
    desc: "A soft, refined surface that reduces fingerprints and adds a contemporary feel. Pairs beautifully with metal trims.",
    img: "/assets/fightbean/assets/content/finiture/matt.png",
  },
  {
    name: "Frost",
    desc: "Lightly textured semi-transparent finish, halfway between matt and glossy transparent. Perfect for tone-on-tone palettes.",
    img: "/assets/fightbean/assets/content/finiture/frost.png",
  },
  {
    name: "Rubberised",
    desc: "Soft-touch coating with a velvety hand-feel. Especially suited to premium ranges and gift-giving applications.",
    img: "/assets/fightbean/assets/content/finiture/maxema-rubberised.png",
  },
  {
    name: "Diamond mirror",
    desc: "High-precision polished metal-look finish on caps and clips, achieved through proprietary tooling refinement.",
    img: "/assets/fightbean/assets/content/finiture/diamond-mirror.png",
  },
  {
    name: "Canvas",
    desc: "Tactile woven-effect surface that adds character and visual depth. A distinctive option for differentiated promotional ranges.",
    img: "/assets/fightbean/assets/content/finiture/canvas-pen.png",
  },
];

export default function FinishesPage() {
  return (
    <PageShell>
      <section className="w-full bg-white">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            Finishes &amp; materials
          </span>
          <h1
            className="mt-3 text-[64px] font-bold leading-[0.95] text-black md:text-[96px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Maxema,
            <br />
            just a pen?
          </h1>
          <p
            className="mt-6 max-w-[720px] text-lg text-[#838383] md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            The essence of design. Every Maxema model can be ordered with a
            choice of seven distinct surface finishes, each one designed to
            change the personality of the pen and the way light interacts
            with it.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="mx-auto grid gap-12 px-6 pb-20 md:grid-cols-2"
          style={{ maxWidth: 960 }}
        >
          {FINISHES.map((f, i) => (
            <article
              key={f.name}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <div
                className={`relative w-full overflow-hidden bg-[#f4f4f4] ${
                  i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <h3
                className="mt-4 text-2xl font-bold text-black md:text-[28px]"
                style={{
                  fontFamily:
                    "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {f.name}
              </h3>
              <p
                className="mt-2 text-base leading-relaxed text-[#525252]"
                style={{ fontWeight: 300 }}
              >
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
