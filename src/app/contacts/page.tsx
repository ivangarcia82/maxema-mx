import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Maxema - Contacts - Promotional pens, Promotional writing instruments and business gadgets, custom printed pens.",
  description:
    "Contacts - Maxema promotional pens. Hi-quality pens designed in italy. Promotional writing instruments and business gadgets.",
};

export default function ContactsPage() {
  return (
    <PageShell>
      <section className="w-full bg-white">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: 960 }}>
          <span className="text-sm uppercase tracking-wider text-[#838383]">
            Contacts
          </span>
          <h1
            className="mt-3 text-[56px] font-bold leading-[0.95] text-black md:text-[88px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Get in touch.
          </h1>
          <p
            className="mt-6 max-w-[640px] text-lg text-[#838383] md:text-[22px]"
            style={{ fontWeight: 300 }}
          >
            For sales enquiries, distribution opportunities and any general
            information about our promotional pens, write to us — we&apos;ll
            reply within one working day.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="mx-auto grid gap-12 px-6 pb-20 md:grid-cols-2"
          style={{ maxWidth: 960 }}
        >
          {/* Headquarters */}
          <div>
            <h2
              className="text-2xl font-bold text-black"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Headquarters
            </h2>
            <address className="mt-4 not-italic text-[#525252] leading-relaxed">
              Maxema S.r.l.
              <br />
              Via Vittime delle Foibe, 15
              <br />
              10088 Volpiano (Torino)
              <br />
              Italy
            </address>
            <dl className="mt-6 space-y-2 text-[#525252]">
              <div className="flex gap-3">
                <dt className="w-12 text-[#838383]">T</dt>
                <dd>
                  <a href="tel:+390119704500" className="hover:text-black">
                    +39 011 970 4500
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-12 text-[#838383]">F</dt>
                <dd>+39 011 985 1100</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-12 text-[#838383]">E</dt>
                <dd>
                  <a
                    href="mailto:info@maxema.com"
                    className="hover:text-black"
                  >
                    info@maxema.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Departments */}
          <div>
            <h2
              className="text-2xl font-bold text-black"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Departments
            </h2>
            <dl className="mt-4 space-y-4 text-[#525252]">
              <div>
                <dt className="text-xs uppercase tracking-wider text-[#838383]">
                  Sales — Italy
                </dt>
                <dd className="mt-1">
                  <a href="mailto:sales@maxema.com" className="hover:text-black">
                    sales@maxema.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-[#838383]">
                  Sales — International
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:export@maxema.com"
                    className="hover:text-black"
                  >
                    export@maxema.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-[#838383]">
                  Customisation &amp; printing
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:print@maxema.com"
                    className="hover:text-black"
                  >
                    print@maxema.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-[#838383]">
                  Press &amp; PR
                </dt>
                <dd className="mt-1">
                  <a href="mailto:press@maxema.com" className="hover:text-black">
                    press@maxema.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="w-full bg-[#f4f4f4]">
        <div className="mx-auto px-6 py-16" style={{ maxWidth: 960 }}>
          <h2
            className="text-3xl font-bold text-black md:text-[40px]"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Send us a message
          </h2>
          <p className="mt-3 text-[#838383]">
            All fields marked with * are required.
          </p>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
