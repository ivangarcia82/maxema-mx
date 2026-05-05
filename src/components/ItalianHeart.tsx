import Image from "next/image";

export function ItalianHeart() {
  return (
    <section className="my-[70px] bg-white">
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <div className="flex items-start gap-3">
          <Image
            src="/images/ico_maxema_p.png"
            alt="Maxema"
            width={20}
            height={20}
            className="mt-1 shrink-0"
            unoptimized
          />
          <div>
            <h3
              className="mb-4 text-[28px] font-bold leading-tight text-black"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              An Italian heart.
            </h3>
            <p
              className="text-base font-light leading-relaxed"
              style={{ color: "#838383" }}
            >
              Precision design, meticulous engineering, constant research and
              testing, selection of the best materials. In short: a love for
              beautiful objects and care for the environment. This is what an
              Italian-made product means for Maxema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
