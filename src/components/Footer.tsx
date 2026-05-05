import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="w-full bg-white"
      style={{ borderTop: "1px solid #e5e5e5" }}
    >
      <div
        className="mx-auto flex flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row"
        style={{ maxWidth: 960 }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.gif"
            alt="Maxema"
            width={40}
            height={47}
            unoptimized
          />
          <span className="text-xs text-[#838383]">
            &copy; 2026 Maxema S.r.l. &mdash; All rights reserved
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/cookie-privacy-policy"
            className="text-xs text-[#838383] transition-colors hover:text-black"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookie-privacy-policy"
            className="text-xs text-[#838383] transition-colors hover:text-black"
          >
            Cookie Policy
          </Link>
          <Link
            href="/contacts"
            className="text-xs text-[#838383] transition-colors hover:text-black"
          >
            Contacts
          </Link>
        </div>
      </div>
    </footer>
  );
}
