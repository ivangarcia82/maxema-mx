"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  name: string;
  subtitle: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  thumbnails: string[];
}

const SLIDES: Slide[] = [
  {
    name: "Kind",
    subtitle: "message from a bottle",
    image: "/images/slider-kind.png",
    imageWidth: 822,
    imageHeight: 150,
    thumbnails: ["/images/40x00_maxema-KINDMATTRP01.jpg"],
  },
  {
    name: "Flow Pure Recycled",
    subtitle: "post-consumer recycled plastic",
    image: "/images/slider-flowpure.png",
    imageWidth: 760,
    imageHeight: 84,
    thumbnails: ["/images/40x00_maxema-35921.jpg"],
  },
  {
    name: "Pixel Matt Recycled",
    subtitle: "post-consumer recycled plastic",
    image: "/images/slider-PIXELmatt.png",
    imageWidth: 756,
    imageHeight: 83,
    thumbnails: ["/images/40x00_maxema-207329.jpg"],
  },
  {
    name: "Tag Green Recycled Antibacterial",
    subtitle: "design that combines safety and environment friendliness",
    image: "/images/slider-Taggreen.png",
    imageWidth: 760,
    imageHeight: 84,
    thumbnails: [
      "/images/40x00_maxema-603236.jpg",
      "/images/40x00_maxema-797142.jpg",
    ],
  },
  {
    name: "Dot Antibacterial",
    subtitle: "take it safe, take it easy",
    image: "/images/slider-Dotantibacterial.png",
    imageWidth: 760,
    imageHeight: 84,
    thumbnails: ["/images/40x00_maxema-899440.jpg"],
  },
  {
    name: "Mood Metal",
    subtitle: "luxury is a state of mind",
    image: "/images/slider-moodmetal.png",
    imageWidth: 760,
    imageHeight: 84,
    thumbnails: [
      "/images/40x00_maxema-147418.jpg",
      "/images/40x00_maxema-948235.jpg",
    ],
  },
  {
    name: "Icon Pure",
    subtitle: "all-round personality",
    image: "/images/slider-iconpurepng.png",
    imageWidth: 760,
    imageHeight: 84,
    thumbnails: [
      "/images/40x00_maxema-151447.jpg",
      "/images/40x00_maxema-234846.jpg",
    ],
  },
];

export function ProductSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[activeIndex];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto" style={{ maxWidth: 960 }}>
        {/* Swiper area */}
        <div className="relative overflow-hidden" style={{ height: 475 }}>
          {/* Product name and subtitle */}
          <div className="mb-4 text-center">
            <h3
              className="text-[35px] font-bold leading-tight text-black"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              {slide.name}
            </h3>
            <p
              className="mt-1 text-[22px] font-light"
              style={{ color: "#838383" }}
            >
              {slide.subtitle}
            </p>
          </div>

          {/* Main pen image */}
          <div className="flex items-center justify-center py-8">
            <Image
              src={slide.image}
              alt={slide.name}
              width={slide.imageWidth}
              height={slide.imageHeight}
              className="max-w-full object-contain"
              style={{ height: "auto" }}
              unoptimized
            />
          </div>

          {/* Pen color thumbnails */}
          <div className="flex items-end justify-center gap-2">
            {slide.thumbnails.map((thumb) => (
              <Image
                key={thumb}
                src={thumb}
                alt={`${slide.name} variant`}
                width={40}
                height={243}
                className="object-contain"
                style={{ height: 150, width: "auto" }}
                unoptimized
              />
            ))}
          </div>
        </div>

        {/* Slide navigation - product names */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {SLIDES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => goToSlide(i)}
              className={`text-xs font-medium uppercase tracking-wider transition-colors ${
                i === activeIndex
                  ? "text-black"
                  : "text-[#b0b0b0] hover:text-[#838383]"
              }`}
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-8 text-center">
          <a
            href="/products"
            className="inline-block bg-[#c23c2a] px-5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#a03020]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Discover the complete catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
