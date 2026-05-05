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
          className="mx-auto px-6 pb-20"
          style={{ maxWidth: 960 }}
        >
          <h2
            className="text-2xl font-bold text-black"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Email
          </h2>
          <dl className="mt-4 text-[#525252]">
            <div>
              <dt className="text-xs uppercase tracking-wider text-[#838383]">
                General enquiries
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:maxema@importacionesusb.mx"
                  className="hover:text-black"
                >
                  maxema@importacionesusb.mx
                </a>
              </dd>
            </div>
          </dl>
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
