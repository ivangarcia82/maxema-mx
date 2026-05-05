"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LEFT = [
  { label: "Pens", href: "/products" },
  { label: "Customisation", href: "/customisation" },
  { label: "Sample kits", href: "/sample-cases" },
  { label: "Finishes", href: "/finishes" },
  { label: "Recycled pens", href: "/recycled-plastic-pens" },
  { label: "More \u25bc", href: "/services" },
] as const;

const NAV_RIGHT = [
  { label: "Company", href: "/about" },
  { label: "Contacts", href: "/contacts" },
  { label: "Reserved Area", href: "/reserved-area" },
] as const;

const SOCIAL_ICONS = [
  { src: "/images/linkedin-logo.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/maxema/" },
  { src: "/images/instagram-logo.svg", alt: "Instagram", href: "https://www.instagram.com/maxema_official/" },
  { src: "/images/youtube-logo.svg", alt: "YouTube", href: "https://www.youtube.com/user/MAXEMAchannel" },
] as const;

export function Header() {
  return (
    <>
      {/*
       * Fixed logo — sits above the nav bar at the same left edge as the
       * 960 px centered container.  On a 1440 px viewport the container
       * starts at (1440-960)/2 = 240 px from the left.  We replicate that
       * with `left-[max(0px,calc((100vw-960px)/2))]`.
       */}
      <div
        className="fixed top-0 z-[201] hidden lg:block"
        style={{ left: "max(0px, calc((100vw - 960px) / 2))" }}
      >
        <Link href="/" aria-label="Maxema home">
          <div className="flex items-center justify-center bg-[#c23c2a]" style={{ width: 90, height: 106 }}>
            <Image
              src="/images/logo.gif"
              alt="Maxema"
              width={90}
              height={106}
              priority
              unoptimized
            />
          </div>
        </Link>
      </div>

      {/* Nav bar */}
      <header
        className="fixed top-0 left-0 right-0 z-[200] h-10"
        style={{ backgroundColor: "rgb(60, 60, 60)" }}
      >
        {/* 960 px centred container — padded left to clear the logo */}
        <div className="mx-auto hidden h-full w-full max-w-[960px] items-center lg:flex" style={{ paddingLeft: 96 }}>

          {/* Left nav group */}
          <nav aria-label="Primary navigation" className="flex items-center gap-5">
            {NAV_LEFT.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="whitespace-nowrap text-[14px] font-medium uppercase leading-none tracking-wide text-[#cccccc] transition-colors hover:text-white"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontStretch: "condensed" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Spacer pushes right group + utilities to the far right */}
          <div className="flex-1" />

          {/* Right nav group */}
          <nav aria-label="Secondary navigation" className="flex items-center gap-5">
            {NAV_RIGHT.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="whitespace-nowrap text-[14px] font-medium uppercase leading-none tracking-wide text-[#cccccc] transition-colors hover:text-white"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontStretch: "condensed" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Language switcher */}
          <button
            type="button"
            aria-label="Change language"
            className="ml-5 flex items-center gap-1 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/flags.png"
              alt="English"
              width={18}
              height={12}
              unoptimized
              /*
               * flags.png is a sprite; we only need the English flag portion.
               * If the sprite position is unknown we fall back to a neutral
               * globe-style placeholder via a simple div.
               */
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="5"
              viewBox="0 0 8 5"
              aria-hidden="true"
              className="fill-[#cccccc]"
            >
              <path d="M0 0l4 5 4-5z" />
            </svg>
          </button>

          {/* Social icons */}
          <div className="ml-4 flex items-center gap-2">
            {SOCIAL_ICONS.map(({ src, alt, href }) => (
              <Link
                key={alt}
                href={href}
                aria-label={alt}
                className="flex h-6 w-6 items-center justify-center rounded-full border border-[#666666] transition-opacity hover:opacity-80"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={14}
                  height={14}
                  unoptimized
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile: minimal bar — full nav hidden at <lg */}
        <div className="flex h-full items-center justify-between px-4 lg:hidden">
          <Link href="/" aria-label="Maxema home">
            <div className="flex items-center justify-center bg-[#c23c2a]" style={{ width: 45, height: 53 }}>
              <Image
                src="/images/logo.gif"
                alt="Maxema"
                width={45}
                height={53}
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Hamburger placeholder */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex flex-col gap-1.5 p-2"
          >
            <span className="block h-0.5 w-6 bg-[#cccccc]" />
            <span className="block h-0.5 w-6 bg-[#cccccc]" />
            <span className="block h-0.5 w-6 bg-[#cccccc]" />
          </button>
        </div>
      </header>
    </>
  );
}
