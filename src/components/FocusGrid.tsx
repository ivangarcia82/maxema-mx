"use client";

import Image from "next/image";

function FocusBlock({
  bgType,
  bgSrc,
  videoSrc,
  children,
  className = "",
}: {
  bgType: "image" | "video";
  bgSrc: string;
  videoSrc?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {bgType === "video" && videoSrc ? (
        <>
          {/* Video background */}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster={bgSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </>
      ) : (
        <Image
          src={bgSrc}
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      )}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-8">
        {children}
      </div>
    </div>
  );
}

export function FocusGrid() {
  return (
    <section className="w-full">
      {/* Row 1: ClimatePartner - full width */}
      <FocusBlock
        bgType="video"
        bgSrc="/images/undesign_maxema_video_mcl_00_new.jpg"
        videoSrc="/images/video-climatepartner.mp4"
        className="h-[350px] w-full"
      >
        <div className="flex items-start gap-8">
          <div className="flex-1">
            <h3
              className="mb-3 text-2xl font-bold text-white"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Our company is ClimatePartner certified.
            </h3>
            <p className="max-w-2xl text-base font-light leading-relaxed text-white/90">
              To deliver our commitment in transparent fashion, we have
              calculated Maxema&apos;s corporate carbon footprint and defined new
              targets and ways to help reduce it.
            </p>
            <p className="mt-4 text-xs text-white/60">
              Printing and packaging
            </p>
          </div>
          <Image
            src="/images/climatepartner-eng.svg"
            alt="ClimatePartner certified"
            width={120}
            height={60}
            className="hidden shrink-0 md:block"
            unoptimized
          />
        </div>
      </FocusBlock>

      {/* Row 2: Two columns */}
      <div className="flex flex-col md:flex-row">
        {/* Customisation */}
        <FocusBlock
          bgType="image"
          bgSrc="/images/focus-1.jpg"
          className="h-[350px] w-full md:w-1/2"
        >
          <span className="mb-1 text-sm font-medium uppercase tracking-wider text-white/70">
            Customisation
          </span>
          <h4
            className="mb-2 text-[22px] font-bold text-white"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            As you like it, as you are
          </h4>
          <div className="mt-3">
            <a
              href="/customisation"
              className="inline-block border border-white/60 bg-white/15 px-5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/30"
            >
              Discover more
            </a>
          </div>
        </FocusBlock>

        {/* Sample kits */}
        <FocusBlock
          bgType="image"
          bgSrc="/images/focus-2.jpg"
          className="h-[350px] w-full md:w-1/2"
        >
          <span className="mb-1 text-sm font-medium uppercase tracking-wider text-white/70">
            Kit and sample cases
          </span>
          <h4
            className="mb-2 text-[22px] font-bold text-white"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Sample kits
          </h4>
          <p className="mb-3 text-base font-light text-white/80">
            A comprehensive range of products
          </p>
          <div>
            <a
              href="/sample-cases"
              className="inline-block border border-white/60 bg-white/15 px-5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/30"
            >
              Discover more
            </a>
          </div>
        </FocusBlock>
      </div>
    </section>
  );
}
