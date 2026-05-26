import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Sysogen Terms of Service — governing use of sysogen.com and engagements with SYSOGEN, UNIPESSOAL LDA.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="site-container max-w-3xl">
        <div className="mb-12">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-[clamp(32px,4vw,52px)] font-bold tracking-tight leading-[1.1] text-(--foreground)">
            Terms of Service
          </h1>
          <p className="mt-4 text-(--muted) text-[15px]">Last updated: 26 May 2026</p>
          <p className="mt-3 text-(--muted) text-[15px] leading-relaxed">
            These terms govern your use of sysogen.com and any engagement with SYSOGEN, UNIPESSOAL LDA
            (&quot;Sysogen&quot;, &quot;we&quot;, &quot;us&quot;).
          </p>
        </div>

        <div className="space-y-10 text-(--foreground)">
          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">1. Website use</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              You may browse this site for lawful purposes. You may not attempt to compromise its security or
              use automated tools to scrape it beyond standard search-engine indexing.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">2. Engagement terms</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              Any consulting engagement is governed by a separate Master Services Agreement (MSA) and Statement
              of Work (SoW) signed by both parties. Nothing on this website constitutes a binding offer.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">3. Intellectual property</h2>
            <ul className="space-y-3 text-[15px] text-(--muted)">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Code we deliver during a paid engagement: ownership transfers to the client per the SoW.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Open-source contributions: licensed under the OSI license stated in the project repository.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-70" />
                Sysogen tooling (ProveStack, InboxGraph, internal libraries): owned by Sysogen unless explicitly licensed.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">4. ProveStack early-access</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              Early-access participants agree to the separate ProveStack Beta Terms presented at signup.
              Sysogen makes no production-readiness guarantee during early access.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">5. Liability</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              To the maximum extent permitted by law, Sysogen&apos;s aggregate liability for any claim arising
              from website use is limited to €100. Engagement-specific liability is governed by the MSA.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">6. Governing law</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              Portuguese law. Disputes are subject to the courts of Coimbra, Portugal, except where mandatory
              consumer law dictates otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">7. Changes</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              We may update these terms; material changes will be posted here.
            </p>
            <p className="mt-4 text-[15px] text-(--muted)">
              Contact:{" "}
              <a href="mailto:hello@sysogen.com" className="text-(--accent) hover:underline">
                hello@sysogen.com
              </a>
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
