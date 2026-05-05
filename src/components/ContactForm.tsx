"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      country: String(formData.get("country") ?? ""),
      message: String(formData.get("message") ?? ""),
      privacy: formData.get("privacy") === "on",
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 border border-[#dedede] bg-white p-8 text-center">
        <h3
          className="text-2xl font-bold text-black"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          Thank you.
        </h3>
        <p className="mt-3 text-[#525252]">
          Your message has been sent. We&apos;ll get back to you within one
          working day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 bg-[#c23c2a] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-black"
        >
          Send another message
        </button>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="flex flex-col">
        <span className="mb-1 text-xs uppercase tracking-wider text-[#838383]">
          Name *
        </span>
        <input
          required
          name="name"
          type="text"
          disabled={isSubmitting}
          className="border border-[#dedede] bg-white px-4 py-3 text-sm text-black focus:border-black focus:outline-none disabled:opacity-60"
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-1 text-xs uppercase tracking-wider text-[#838383]">
          Email *
        </span>
        <input
          required
          name="email"
          type="email"
          disabled={isSubmitting}
          className="border border-[#dedede] bg-white px-4 py-3 text-sm text-black focus:border-black focus:outline-none disabled:opacity-60"
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-1 text-xs uppercase tracking-wider text-[#838383]">
          Company
        </span>
        <input
          name="company"
          type="text"
          disabled={isSubmitting}
          className="border border-[#dedede] bg-white px-4 py-3 text-sm text-black focus:border-black focus:outline-none disabled:opacity-60"
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-1 text-xs uppercase tracking-wider text-[#838383]">
          Country
        </span>
        <input
          name="country"
          type="text"
          disabled={isSubmitting}
          className="border border-[#dedede] bg-white px-4 py-3 text-sm text-black focus:border-black focus:outline-none disabled:opacity-60"
        />
      </label>
      <label className="flex flex-col md:col-span-2">
        <span className="mb-1 text-xs uppercase tracking-wider text-[#838383]">
          Message *
        </span>
        <textarea
          required
          name="message"
          rows={6}
          disabled={isSubmitting}
          className="border border-[#dedede] bg-white px-4 py-3 text-sm text-black focus:border-black focus:outline-none disabled:opacity-60"
        />
      </label>
      <label className="flex items-start gap-3 md:col-span-2">
        <input
          type="checkbox"
          name="privacy"
          required
          disabled={isSubmitting}
          className="mt-1"
        />
        <span className="text-xs text-[#838383]">
          I have read and accept the{" "}
          <a
            href="/cookie-privacy-policy"
            className="underline hover:text-black"
          >
            privacy policy
          </a>
          .
        </span>
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#c23c2a] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p className="mt-4 text-sm text-[#c23c2a]" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
