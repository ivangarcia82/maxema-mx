import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title:
    "Recycled Plastic Pens - Maxema - Promotional writing instruments and business gadgets, custom printed pens.",
  description:
    "Recycled Plastic Pens - Maxema - Promotional pens. Hi-quality pens designed in Italy.",
};

const RANGES = [
  {
    name: "Kind",
    badge: "R-PET",
    desc: "Made of post-consumer recycled PET, our Kind range is recyclable and refillable, with a strong visual identity and low environmental impact.",
    img: "/images/slider-kind.png",
    href: "/products/261",
  },
  {
    name: "Flow Pure Recycled",
    badge: "PIR",
    desc: "The same minimal silhouette as Flow Pure, in post-industrial recycled ABS — full Pantone matching, identical print quality.",
    img: "/images/slider-flowpure.png",
    href: "/products/198",
  },
  {
    name: "Pixel Matt Recycled",
    badge: "PIR",
    desc: "Pixel's clean-cut design in post-industrial recycled ABS, with a tactile matt finish that hides fingerprints and adds depth.",
    img: "/images/slider-PIXELmatt.png",
    href: "/products/61",
  },
  {
    name: "Tag Green Recycled Antibacterial",
    badge: "Bio + AB",
    desc: "Bio-based plastic combined with our antibacterial treatment — ideal for healthcare, food and education segments.",
    img: "/images/slider-Taggreen.png",
    href: "/products/124",
  },
];

export default function RecycledPlasticPensPage() {
  return (
    <PageShell>
      <section className="relative w-full bg-black text-white">
        <div className="mx-auto px-6 py-24 md:py-32" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#ffed00]">
            Recycled plastic pens
          </span>
          <h1
            className="mt-3 text-[56px] font-bold leading-[0.95] md:text-[88px]"
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
            className="mt-6 max-w-[720px] text-lg text-white/80 md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            Four product families, three plastics, one ambition: lower the
            environmental footprint of promotional writing without
            compromising on print quality, colour fidelity or feel.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto grid gap-12 px-6 py-20 md:grid-cols-2" style={{ maxWidth: 960 }}>
          {RANGES.map((r) => (
            <Link key={r.name} href={r.href} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={r.img}
                  alt={r.name}
                  fill
                  className="object-contain transition-transform group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-block bg-[#3c3c3c] px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                  {r.badge}
                </span>
                <h3
                  className="text-2xl font-bold text-black md:text-[28px]"
                  style={{
                    fontFamily:
                      "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  }}
                >
                  {r.name}
                </h3>
              </div>
              <p
                className="mt-2 text-[15px] leading-relaxed text-[#525252]"
                style={{ fontWeight: 300 }}
              >
                {r.desc}
              </p>
              <span className="mt-3 inline-block text-xs uppercase tracking-wider text-[#c23c2a] group-hover:text-black">
                Discover the model →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ClimatePartner */}
      <section className="w-full bg-[#f4f4f4]">
        <div
          className="mx-auto grid gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
          style={{ maxWidth: 960 }}
        >
          <div>
            <Image
              src="/images/climatepartner-eng.svg"
              alt="ClimatePartner certified"
              width={220}
              height={70}
              unoptimized
            />
            <h3
              className="mt-4 text-3xl font-bold text-black md:text-[40px]"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Carbon-neutral by certification.
            </h3>
            <p
              className="mt-4 text-[15px] leading-relaxed text-[#525252] md:text-[17px]"
              style={{ fontWeight: 300 }}
            >
              Together with ClimatePartner, we measure and offset the carbon
              footprint of every promotional pen we ship from selected ranges.
              Each batch comes with a unique tracking ID linked to a public
              report.
            </p>
          </div>
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <video
              src="/images/video-climatepartner.mp4"
              poster="/images/undesign_maxema_video_mcl_00_new.jpg"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
