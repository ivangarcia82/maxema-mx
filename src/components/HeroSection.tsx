"use client";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-black"
      style={{ height: "670px" }}
    >
      {/* Background video */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        suppressHydrationWarning
      >
        <source src="/images/home-zed.mp4" type="video/mp4" />
      </video>

      {/* Text content overlay */}
      <div
        className="relative z-10 mx-auto flex items-end px-6"
        style={{
          maxWidth: "960px",
          height: "100%",
          paddingBottom: "40px",
        }}
      >
        <div className="flex flex-col">
          {/* PIR Badge */}
          {/* stylelint-disable-next-line */}
          <img
            src="/images/pir.svg"
            alt="PIR Recycled Plastic"
            style={{ height: "40px", marginBottom: "16px", width: "auto" }}
          />

          {/* Heading */}
          <h1
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "rgb(255, 237, 0)",
              lineHeight: "48px",
              letterSpacing: "1.2px",
              marginBottom: "10px",
            }}
          >
            Restart from Zed.
          </h1>

          {/* Subtitle */}
          <h2
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "clamp(16px, 2.5vw, 24px)",
              fontWeight: 300,
              color: "rgb(255, 237, 0)",
              lineHeight: "1.4",
              maxWidth: "900px",
            }}
          >
            Discover our new pen made of post-industrial recycled (PIR) ABS
            plastic, turning the end of a process into a conscious new
            beginning.
          </h2>

          {/* Buttons */}
          <div
            className="flex flex-row flex-wrap"
            style={{ gap: "20px", marginTop: "25px" }}
          >
            <a
              href="/recycled-plastic-pens"
              style={{
                padding: "6px 20px",
                fontSize: "12px",
                fontWeight: 500,
                color: "white",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid #dedede",
                borderRadius: 0,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                letterSpacing: "0.5px",
              }}
            >
              Discover more
            </a>

            <a
              href="/media"
              style={{
                padding: "6px 20px",
                fontSize: "12px",
                fontWeight: 500,
                color: "white",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid #dedede",
                borderRadius: 0,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                letterSpacing: "0.5px",
              }}
            >
              <span aria-hidden="true">&#9654;</span>
              Watch the video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
