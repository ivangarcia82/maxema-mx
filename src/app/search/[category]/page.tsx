import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import productsData from "@/data/products.json";

type Product = (typeof productsData)[number];

const VALID_CATEGORIES = new Set(["1", "2", "4", "5", "6", "7", "8", "9", "10"]);

function heroFor(p: Product): string {
  return p.hero || "/images/slider-shadow.png";
}

const CATEGORY_LABELS: Record<string, string> = {
  "1": "All colours",
  "2": "Dark tones",
  "4": "Vivid tones",
  "5": "Pastel tones",
  "6": "Neutral tones",
  "7": "Metallic finishes",
  "8": "Translucent",
  "9": "Two-tone",
  "10": "Pantone matching",
};

export async function generateStaticParams() {
  return [...VALID_CATEGORIES].map((category) => ({ category }));
}

export async function generateMetadata(props: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await props.params;
  const label = CATEGORY_LABELS[category] || "Search";
  return {
    title: `Search pens by colour — ${label} - Maxema`,
    description:
      "Search promotional pens by colour. Hi-quality promotional pens designed in Italy.",
  };
}

function rotate<T>(arr: T[], n: number): T[] {
  const k = ((n % arr.length) + arr.length) % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

export default async function SearchCategoryPage(props: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await props.params;
  if (!VALID_CATEGORIES.has(category)) notFound();

  const label = CATEGORY_LABELS[category] || "Search";
  // Reorder the catalogue per category for a different visual ordering.
  const ordered = rotate(productsData as Product[], parseInt(category, 10));

  return (
    <PageShell>
      <section className="w-full bg-white">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            Search by colour
          </span>
          <h1
            className="mt-3 text-[48px] font-bold leading-[0.95] text-black md:text-[80px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            {label}.
          </h1>

          {/* Filter pills */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {[...VALID_CATEGORIES].map((c) => (
              <Link
                key={c}
                href={`/search/${c}`}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                  c === category
                    ? "bg-black text-white"
                    : "bg-[#f4f4f4] text-black hover:bg-black hover:text-white"
                }`}
              >
                {CATEGORY_LABELS[c] || c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="mx-auto grid grid-cols-2 gap-x-6 gap-y-12 px-6 pb-20 md:grid-cols-3"
          style={{ maxWidth: 960 }}
        >
          {ordered.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="group block">
              <div className="relative aspect-square w-full overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={heroFor(p)}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain transition-transform group-hover:scale-[1.05]"
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
    </PageShell>
  );
}
