import Image from "next/image";

export function MosaicGrid() {
  return (
    <section className="mt-[70px] w-full">
      <div className="flex flex-col md:flex-row">
        {/* Column 1: Quarter - mosaico-1 */}
        <div className="relative h-[400px] w-full md:w-1/4">
          <Image
            src="/images/mosaico-1.jpg"
            alt="Maxema pen design"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Column 2: Half - mosaico-special with text overlay */}
        <div className="relative h-[400px] w-full md:w-1/2">
          <Image
            src="/images/mosaico-special.png"
            alt="Finishes and materials"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="relative z-10 flex h-full flex-col justify-center p-10">
            <span className="mb-2 text-base text-black">
              Finishes and materials
            </span>
            <h3
              className="mb-2 text-[60px] font-bold leading-none text-black"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Maxema,
              <br />
              just a pen?
            </h3>
            <h4
              className="mb-6 text-[22px] font-light"
              style={{ color: "#838383" }}
            >
              The essence of design
            </h4>
            <div>
              <a
                href="/finishes"
                className="inline-block bg-[#3c3c3c] px-5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-black"
              >
                Discover more
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Quarter - two stacked images */}
        <div className="flex h-[400px] w-full flex-col md:w-1/4">
          <div className="relative h-1/2 w-full">
            <Image
              src="/images/mosaico-2.jpg"
              alt="Maxema pen detail"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="relative h-1/2 w-full">
            <Image
              src="/images/mosaico-3.jpg"
              alt="Maxema pen close-up"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
