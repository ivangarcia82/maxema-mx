import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Media - Maxema",
  description: "maxema writing instruments — press images and brand assets.",
};

const PRESS_KITS = [
  {
    title: "Brand assets",
    desc: "Logos, brand guidelines and typography reference. PNG, SVG and PDF formats.",
    href: "#",
    cover: "/images/logo.gif",
  },
  {
    title: "Catalogue 2026",
    desc: "Full product line in a single PDF, ready for sharing with prospects and procurement teams.",
    href: "/pdf/catalog.pdf",
    cover: "/images/home-box-kind.png",
  },
  {
    title: "Press releases",
    desc: "Recent news from Maxema — sustainability, new product launches and trade-show announcements.",
    href: "#",
    cover: "/images/focus-1.jpg",
  },
  {
    title: "Photography",
    desc: "High-resolution product photography. Free for editorial use with credit.",
    href: "#",
    cover: "/images/mosaico-1.jpg",
  },
];

export default function MediaPage() {
  return (
    <PageShell>
      <section className="w-full bg-white">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            Media
          </span>
          <h1
            className="mt-3 text-[56px] font-bold leading-[0.95] text-black md:text-[88px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Press &amp; brand kit.
          </h1>
          <p
            className="mt-6 max-w-[640px] text-lg text-[#838383] md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            For interview requests, sample loans and editorial co-operation,
            write to <a href="mailto:press@maxema.com" className="underline hover:text-black">press@maxema.com</a>.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto grid gap-8 px-6 pb-20 md:grid-cols-2" style={{ maxWidth: 960 }}>
          {PRESS_KITS.map((k) => (
            <Link
              key={k.title}
              href={k.href}
              className="group block bg-[#f4f4f4] p-8 transition-colors hover:bg-[#eaeaea]"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-white">
                <Image
                  src={k.cover}
                  alt={k.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <h3
                className="mt-5 text-2xl font-bold text-black"
                style={{
                  fontFamily:
                    "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {k.title}
              </h3>
              <p className="mt-2 text-[15px] text-[#525252]" style={{ fontWeight: 300 }}>
                {k.desc}
              </p>
              <span className="mt-4 inline-block text-xs uppercase tracking-wider text-[#c23c2a] group-hover:text-black">
                Download →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
