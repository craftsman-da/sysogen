"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle className="w-10 h-10 text-green-500" />
        <p className="text-(--foreground) font-semibold text-[17px]">Message sent.</p>
        <p className="text-(--muted) text-sm max-w-xs">
          We&apos;ll be back in touch within one business day.
        </p>
        <button
          type="button"
          className="mt-2 text-sm text-(--accent) underline underline-offset-4"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] font-mono-custom text-(--ink-mute) tracking-widest uppercase mb-1.5">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-(--border) bg-(--background) text-(--foreground) text-sm focus:outline-none focus:border-(--accent) transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-[12px] font-mono-custom text-(--ink-mute) tracking-widest uppercase mb-1.5">
            Work email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-(--border) bg-(--background) text-(--foreground) text-sm focus:outline-none focus:border-(--accent) transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-[12px] font-mono-custom text-(--ink-mute) tracking-widest uppercase mb-1.5">
          Company
        </label>
        <input
          type="text"
          name="company"
          className="w-full px-4 py-2.5 rounded-lg border border-(--border) bg-(--background) text-(--foreground) text-sm focus:outline-none focus:border-(--accent) transition-colors"
          placeholder="Company name"
        />
      </div>
      <div>
        <label className="block text-[12px] font-mono-custom text-(--ink-mute) tracking-widest uppercase mb-1.5">
          What are you working on?
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2.5 rounded-lg border border-(--border) bg-(--background) text-(--foreground) text-sm focus:outline-none focus:border-(--accent) transition-colors resize-none"
          placeholder="Tell us what you're trying to ship..."
        />
      </div>
      <div>
        <label className="block text-[12px] font-mono-custom text-(--ink-mute) tracking-widest uppercase mb-1.5">
          How did you hear about us?
        </label>
        <input
          type="text"
          name="source"
          className="w-full px-4 py-2.5 rounded-lg border border-(--border) bg-(--background) text-(--foreground) text-sm focus:outline-none focus:border-(--accent) transition-colors"
          placeholder="LinkedIn, referral, Google, etc."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong — please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
  );
}
