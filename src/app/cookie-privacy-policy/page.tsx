import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Cookie & Privacy Policy - Maxema",
  description:
    "Cookie & Privacy Policy - Maxema - Promotional pens. Hi-quality pens designed in Italy.",
};

export default function CookiePrivacyPage() {
  return (
    <PageShell>
      <section className="w-full bg-white">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            Legal
          </span>
          <h1
            className="mt-3 text-[40px] font-bold leading-[1] text-black md:text-[64px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Cookie &amp; Privacy Policy
          </h1>
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="mx-auto grid gap-10 px-6 pb-20 text-[#525252] md:grid-cols-[1fr_2fr]"
          style={{ maxWidth: 960, fontWeight: 300 }}
        >
          {/* Sidebar TOC */}
          <aside>
            <nav className="sticky top-16 space-y-2 text-sm">
              <a href="#data-controller" className="block text-[#838383] hover:text-black">
                1. Data controller
              </a>
              <a href="#data-collected" className="block text-[#838383] hover:text-black">
                2. Data collected
              </a>
              <a href="#purposes" className="block text-[#838383] hover:text-black">
                3. Purposes
              </a>
              <a href="#cookies" className="block text-[#838383] hover:text-black">
                4. Cookies
              </a>
              <a href="#rights" className="block text-[#838383] hover:text-black">
                5. Your rights
              </a>
              <a href="#updates" className="block text-[#838383] hover:text-black">
                6. Policy updates
              </a>
            </nav>
          </aside>

          <div className="space-y-8 text-[15px] leading-relaxed">
            <section id="data-controller">
              <h2 className="mb-3 text-xl font-bold text-black">
                1. Data controller
              </h2>
              <p>
                The data controller is Maxema S.r.l., with registered office at
                Via Vittime delle Foibe 15, 10088 Volpiano (Torino), Italy. For
                any privacy-related enquiry write to{" "}
                <a className="underline hover:text-black" href="mailto:privacy@maxema.com">
                  privacy@maxema.com
                </a>
                .
              </p>
            </section>

            <section id="data-collected">
              <h2 className="mb-3 text-xl font-bold text-black">
                2. Data collected
              </h2>
              <p>
                We collect personal data that you voluntarily provide through
                contact forms (name, email, company, country, message) and
                technical data automatically transmitted by your browser (IP
                address, browser type, pages visited, timestamps).
              </p>
            </section>

            <section id="purposes">
              <h2 className="mb-3 text-xl font-bold text-black">3. Purposes</h2>
              <p>
                The data is used solely to respond to your enquiries, deliver
                the services you have requested, comply with legal obligations
                and — where you have given specific consent — send commercial
                communications about our promotional pens range.
              </p>
            </section>

            <section id="cookies">
              <h2 className="mb-3 text-xl font-bold text-black">4. Cookies</h2>
              <p>
                This website uses technical cookies necessary for navigation,
                analytics cookies (anonymised) to understand site usage, and —
                only with your explicit consent — third-party marketing
                cookies. You can withdraw consent at any time through the cookie
                preferences panel in the footer.
              </p>
            </section>

            <section id="rights">
              <h2 className="mb-3 text-xl font-bold text-black">
                5. Your rights
              </h2>
              <p>
                Under articles 15 to 22 of the GDPR you have the right of
                access, rectification, deletion, restriction of processing,
                data portability and objection. To exercise these rights write
                to{" "}
                <a className="underline hover:text-black" href="mailto:privacy@maxema.com">
                  privacy@maxema.com
                </a>
                .
              </p>
            </section>

            <section id="updates">
              <h2 className="mb-3 text-xl font-bold text-black">
                6. Policy updates
              </h2>
              <p>
                Maxema reserves the right to update this policy at any time.
                Substantial changes will be communicated through a banner on
                the home page. The current version was last revised on May
                2026.
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
