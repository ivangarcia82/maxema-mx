import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import productsData from "@/data/products.json";

export const metadata: Metadata = {
  title:
    "Personalized pens catalog - Maxema - Promotional pens, Promotional writing instruments and business gadgets, custom printed pens.",
  description:
    "Maxema promotional pens catalog. Hi-quality pens designed in Italy.",
};

type Product = (typeof productsData)[number];

function pickHero(p: Product): string {
  return p.hero || "/images/slider-shadow.png";
}

export default function ProductsPage() {
  return (
    <PageShell>
      <section className="w-full bg-white">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            Catalogue
          </span>
          <h1
            className="mt-3 text-[48px] font-bold leading-[0.95] text-black md:text-[80px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Promotional
            <br />
            writing instruments.
          </h1>
          <p
            className="mt-6 max-w-[640px] text-lg text-[#838383] md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            {productsData.length} signature pen families, each available in
            multiple finishes, colours and customisation options. Click any
            model to see colours, technical specs and printing area.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="mx-auto grid grid-cols-2 gap-x-6 gap-y-12 px-6 pb-20 md:grid-cols-3"
          style={{ maxWidth: 960 }}
        >
          {productsData.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="group block"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={pickHero(p as Product)}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain p-6 transition-transform group-hover:scale-[1.05]"
                  unoptimized
                />
              </div>
              <h3
                className="mt-3 text-lg font-bold text-black"
                style={{
                  fontFamily:
                    "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {p.name}
              </h3>
              <span className="text-xs uppercase tracking-wider text-[#838383]">
                {p.colors_count} colour{p.colors_count === 1 ? "" : "s"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#f4f4f4]">
        <div
          className="mx-auto flex flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row"
          style={{ maxWidth: 960 }}
        >
          <h3
            className="text-2xl font-bold text-black md:text-[28px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Browse by colour
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {[1, 2, 4, 5, 6, 7, 8, 9, 10].map((c) => (
              <Link
                key={c}
                href={`/search/${c}`}
                className="bg-white px-4 py-2 text-xs uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
              >
                Filter {c}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
