import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import productsData from "@/data/products.json";

type Product = (typeof productsData)[number];

function heroFor(p: Product): string {
  return p.hero || "/images/slider-shadow.png";
}

export async function generateStaticParams() {
  return productsData.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const p = productsData.find((x) => String(x.id) === id);
  if (!p) return { title: "Maxema" };
  return {
    title: `Maxema - ${p.name} - Personalized and promotional pens.`,
    description: p.description?.slice(0, 200) || `${p.name} - Maxema promotional pen.`,
  };
}

function findRelated(currentId: number, count = 3): Product[] {
  return productsData
    .filter((p) => p.id !== currentId)
    .slice(0, count) as Product[];
}

export default async function ProductDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const product = productsData.find((p) => String(p.id) === id) as
    | Product
    | undefined;
  if (!product) notFound();

  const hero = heroFor(product);
  const related = findRelated(product.id);

  // Strip "Italiano English Reserved Area Contacts Company Pens..."
  // chrome that came in mainText. Keep just the descriptive sentence
  // that follows the product name.
  const descRaw = product.description || "";
  const descClean = descRaw.replace(/^[^.]*?\b(?:Maxema|Reserved Area)\b[^.]*\.\s*/i, "").trim();

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative w-full bg-white">
        <div
          className="mx-auto grid gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28"
          style={{ maxWidth: 960 }}
        >
          <div>
            <Link
              href="/products"
              className="text-xs uppercase tracking-wider text-[#838383] hover:text-black"
            >
              ← Back to catalogue
            </Link>
            <h1
              className="mt-4 text-[64px] font-bold leading-[0.9] text-black md:text-[96px]"
              style={{
                fontFamily:
                  "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              {product.name}
            </h1>
            <p
              className="mt-6 max-w-[480px] text-base leading-relaxed text-[#525252] md:text-[18px]"
              style={{ fontWeight: 300 }}
            >
              {descClean || descRaw}
            </p>
            <Link
              href="/reserved-area"
              className="mt-8 inline-block bg-[#c23c2a] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-black"
            >
              Request a sample
            </Link>
          </div>

          <div className="relative aspect-square w-full overflow-hidden bg-[#f4f4f4]">
            <Image
              src={hero}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-12"
              unoptimized
              priority
            />
          </div>
        </div>
      </section>

      {/* Colour grid */}
      {product.colors.length > 0 && (
        <section className="w-full bg-[#f4f4f4]">
          <div
            className="mx-auto px-6 py-16"
            style={{ maxWidth: 960 }}
          >
            <h2
              className="text-3xl font-bold text-black md:text-[40px]"
              style={{
                fontFamily:
                  "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              {product.colors.length} colours.
            </h2>
            <p className="mt-2 text-sm text-[#838383]">
              Plus full Pantone matching from minimum quantities.
            </p>
            <div className="mt-8 grid grid-cols-4 gap-3 md:grid-cols-8">
              {product.colors.map((src, i) => (
                <div
                  key={src + i}
                  className="relative aspect-square overflow-hidden bg-white"
                >
                  <Image
                    src={src}
                    alt={`${product.name} colour ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 25vw, 12vw"
                    className="object-contain p-1"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specs strip */}
      <section className="w-full bg-white">
        <div
          className="mx-auto grid gap-10 px-6 py-16 md:grid-cols-4"
          style={{ maxWidth: 960 }}
        >
          <div>
            <span className="text-xs uppercase tracking-wider text-[#838383]">
              Refill
            </span>
            <p className="mt-2 text-sm text-black">Jumbo standard</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[#838383]">
              Ink
            </span>
            <p className="mt-2 text-sm text-black">Blue or black</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[#838383]">
              Print
            </span>
            <p className="mt-2 text-sm text-black">Pad / screen / laser</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[#838383]">
              MOQ
            </span>
            <p className="mt-2 text-sm text-black">From 1,000 pens</p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="w-full bg-[#f4f4f4]">
        <div className="mx-auto px-6 py-16" style={{ maxWidth: 960 }}>
          <h3
            className="text-2xl font-bold text-black md:text-[28px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            You might also like
          </h3>
          <div className="mt-6 grid grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.id} href={`/products/${r.id}`} className="group block">
                <div className="relative aspect-square w-full overflow-hidden bg-white">
                  <Image
                    src={heroFor(r)}
                    alt={r.name}
                    fill
                    sizes="(max-width: 768px) 33vw, 200px"
                    className="object-contain transition-transform group-hover:scale-[1.05]"
                    unoptimized
                  />
                </div>
                <h4 className="mt-3 text-base font-bold text-black">
                  {r.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
