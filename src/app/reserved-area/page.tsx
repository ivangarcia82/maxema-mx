import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title:
    "Reserved Area - Maxema - Production of promotional pens. Reseller of promotional articles reserved area.",
  description:
    "Production of promotional pens, pens production, personalized pens, design pens, company pens.",
};

const PERKS = [
  {
    title: "Live stock",
    desc: "Real-time inventory across all our Italian warehouses.",
    icon: "/images/icon_5.png",
  },
  {
    title: "Generate quotations",
    desc: "Branded PDF quotations with your distributor pricing in two clicks.",
    icon: "/assets/images/ar_generazione-pdf.png",
  },
  {
    title: "Manage favourites",
    desc: "Save the configurations you sell most often, share lists with your team.",
    icon: "/assets/images/ar_gestione-preferiti.png",
  },
  {
    title: "Download centre",
    desc: "High-resolution images, technical drawings, brand guidelines and the full catalogue.",
    icon: "/assets/images/ar_area-download.png",
  },
];

export default function ReservedAreaPage() {
  return (
    <PageShell>
      <section className="w-full bg-white">
        <div
          className="mx-auto grid gap-12 px-6 py-20 md:grid-cols-[5fr_4fr] md:py-28"
          style={{ maxWidth: 960 }}
        >
          <div>
            <span className="text-sm uppercase tracking-wider text-[#838383]">
              Reserved area
            </span>
            <h1
              className="mt-3 text-[48px] font-bold leading-[0.95] text-black md:text-[80px]"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Distributor
              <br />
              sign-in.
            </h1>
            <p
              className="mt-6 max-w-[520px] text-lg text-[#838383] md:text-[20px]"
              style={{ fontWeight: 300 }}
            >
              Authorised Maxema distributors gain access to our online ordering
              platform, live stock, custom pricing and downloadable assets.
            </p>
          </div>

          {/* Login form */}
          <form className="bg-[#f4f4f4] p-8">
            <h2
              className="text-2xl font-bold text-black"
              style={{
                fontFamily:
                  "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Sign in
            </h2>
            <p className="mt-1 text-sm text-[#838383]">
              Use your email and password.
            </p>
            <label className="mt-5 flex flex-col">
              <span className="mb-1 text-xs uppercase tracking-wider text-[#838383]">
                Email *
              </span>
              <input
                required
                type="email"
                name="email"
                className="border border-[#dedede] bg-white px-4 py-3 text-sm text-black focus:border-black focus:outline-none"
              />
            </label>
            <label className="mt-3 flex flex-col">
              <span className="mb-1 text-xs uppercase tracking-wider text-[#838383]">
                Password *
              </span>
              <input
                required
                type="password"
                name="password"
                className="border border-[#dedede] bg-white px-4 py-3 text-sm text-black focus:border-black focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="mt-5 w-full bg-[#c23c2a] py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-black"
            >
              Sign in
            </button>
            <div className="mt-4 flex items-center justify-between text-xs text-[#838383]">
              <a href="#" className="hover:text-black">
                Forgot password?
              </a>
              <Link href="/contacts" className="hover:text-black">
                Become a distributor
              </Link>
            </div>
          </form>
        </div>
      </section>

      <section className="w-full bg-[#f4f4f4]">
        <div
          className="mx-auto grid gap-8 px-6 py-16 md:grid-cols-4"
          style={{ maxWidth: 960 }}
        >
          {PERKS.map((p) => (
            <article key={p.title} className="text-center">
              <div className="relative mx-auto h-16 w-16">
                <img
                  src={p.icon}
                  alt={p.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-base font-bold text-black">
                {p.title}
              </h3>
              <p className="mt-2 text-xs text-[#525252]">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
