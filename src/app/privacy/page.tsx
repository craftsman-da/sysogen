import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Sysogen privacy policy — how we collect, use, and protect your data under GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="site-container max-w-3xl">
        <div className="mb-12">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-[clamp(32px,4vw,52px)] font-bold tracking-tight leading-[1.1] text-(--foreground)">
            Privacy Policy
          </h1>
          <p className="mt-4 text-(--muted) text-[15px]">Last updated: 26 May 2026</p>
        </div>

        <div className="space-y-10 text-(--foreground)">
          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">Data controller</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              SYSOGEN, UNIPESSOAL LDA (NIF 519018265), Coimbra, Portugal.
              Contact:{" "}
              <a href="mailto:hello@sysogen.com" className="text-(--accent) hover:underline">
                hello@sysogen.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">What we collect</h2>
            <ul className="space-y-3 text-[15px] text-(--muted)">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Identification data you submit voluntarily (name, work email, company) via our contact form and waitlist signup.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Technical data automatically collected when you visit (IP address, browser type, referring URL, pages visited). Used for security and aggregated analytics only.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                We do not use third-party advertising trackers. We do not sell or share data with advertisers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">Lawful basis</h2>
            <ul className="space-y-3 text-[15px] text-(--muted)">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Article 6(1)(b) GDPR — contract preparation (when you contact us about an engagement).
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Article 6(1)(f) GDPR — legitimate interest (security logs, analytics in aggregate).
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Article 6(1)(a) GDPR — consent (cookies beyond strictly necessary).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">How long we keep it</h2>
            <ul className="space-y-3 text-[15px] text-(--muted)">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Contact-form submissions: 24 months from last interaction.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Waitlist signups: until you unsubscribe or we close the waitlist.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Server logs: 90 days.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">Who we share it with (subprocessors)</h2>
            <ul className="space-y-3 text-[15px] text-(--muted)">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Netlify (USA / EU) — website hosting.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Cal.com (EU) — booking management.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Resend (EU) — transactional email.
              </li>
            </ul>
            <p className="mt-4 text-[15px] text-(--muted)">
              All subprocessors have a Data Processing Agreement in place.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">Your rights under GDPR</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              You have the right to access, rectify, erase, restrict processing, port, and object. To exercise
              any of these, email{" "}
              <a href="mailto:hello@sysogen.com" className="text-(--accent) hover:underline">
                hello@sysogen.com
              </a>. You can also lodge a complaint with the Portuguese data-protection authority (CNPD,{" "}
              <a
                href="https://www.cnpd.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--accent) hover:underline"
              >
                https://www.cnpd.pt
              </a>).
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">International transfers</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              Some subprocessors operate outside the EEA. Transfers rely on EU Standard Contractual Clauses.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">Changes</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              We post material changes on this page and update the &quot;Last updated&quot; date.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-(--border)">
          <Link href="/" className="text-sm text-(--muted) hover:text-(--foreground) transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
