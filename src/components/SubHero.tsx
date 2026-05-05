"use client";

import Link from "next/link";

export function SubHero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ height: 150 }}
    >
      <div
        className="mx-auto flex h-full items-center gap-8 px-6"
        style={{ maxWidth: 960 }}
      >
        <Link
          href="/recycled-plastic-pens"
          className="text-sm font-medium uppercase tracking-wider text-[#3c3c3c] transition-colors hover:text-[#c23c2a]"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Post-consumer Recycled Collection
        </Link>
        <Link
          href="/kind-rpet"
          className="text-sm font-medium uppercase tracking-wider text-[#c23c2a] transition-colors hover:text-[#3c3c3c]"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Kind R-Pet
        </Link>
      </div>
    </section>
  );
}
