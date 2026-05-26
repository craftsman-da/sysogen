import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sysogen is a team of engineers building software and consulting on AI adoption for regulated industries. EU-headquartered, Coimbra, Portugal.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="site-container max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <span className="eyebrow">About Sysogen</span>
          <h1 className="mt-4 text-[clamp(36px,5vw,64px)] font-bold tracking-tight leading-[1.05] text-(--foreground)">
            We build software for teams
            <br />
            <span className="gradient-text">shipping AI in regulated environments.</span>
          </h1>
          <p className="mt-6 text-(--muted) text-[clamp(16px,1.6vw,18px)] leading-[1.65] max-w-2xl">
            We also consult on the engineering, security, and compliance work that goes with it.
          </p>
        </div>

        {/* Intro */}
        <div className="card-base p-10 mb-6">
          <p className="text-[16px] text-(--foreground) leading-[1.7]">
            Sysogen is headquartered in Coimbra, Portugal, and operates across the EU. Our engineers have
            shipped production systems for regulated industries — finance, logistics, healthcare, public sector
            — across event-driven architectures, Kubernetes infrastructure, distributed databases, and AI
            integration in compliance-heavy environments.
          </p>
        </div>

        {/* What we build */}
        <div className="mb-6">
          <h2 className="text-[26px] font-bold tracking-tight mb-4 text-(--foreground)">What we build</h2>
          <div className="card-base p-10 space-y-5">
            <p className="text-[15px] text-(--muted) leading-[1.7]">
              ProveStack is our first product. It signs AI-generated code at the moment a model writes it, so
              teams shipping under the EU AI Act, SOC 2, and ISO 42001 can prove which lines came from which
              model, when, under whose review.
            </p>
            <p className="text-[15px] text-(--muted) leading-[1.7]">
              ProveStack is the first in a family of tools we&apos;re building for the same audience: companies
              that need to use AI in production without giving up auditability, security, or governance. Each
              tool solves a problem we keep seeing — in our own engineering work, and in our clients&apos;.
            </p>
            <Link href="/labs/provestack" className="inline-flex items-center gap-1.5 text-(--accent) text-sm font-medium hover:underline">
              Learn about ProveStack <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* What we consult on */}
        <div className="mb-6">
          <h2 className="text-[26px] font-bold tracking-tight mb-4 text-(--foreground)">What we consult on</h2>
          <div className="card-base p-10">
            <p className="text-[15px] text-(--muted) leading-[1.7] mb-6">
              We embed with engineering teams to ship the things our products don&apos;t cover. Typical engagements:
            </p>
            <ul className="space-y-3">
              {[
                "AI adoption and governance — Shadow-AI inventory, EU AI Act readiness, vendor selection, ROI measurement",
                "Production engineering — event-driven architecture, Kubernetes migrations, zero-downtime database refactors, CI/CD with provenance built in",
                "AI engineering — internal AI assistants on private corpora, RAG pipelines, provenance instrumentation, LLM cost optimization",
                "Custom tooling — CLIs, IDE extensions, CI integrations, developer-platform observability",
                "Anything else tech, where the work is hard and the standards are high",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-(--foreground)">
                  <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The team */}
        <div className="mb-6">
          <h2 className="text-[26px] font-bold tracking-tight mb-4 text-(--foreground)">The team</h2>
          <div className="card-base p-10">
            <p className="text-[15px] text-(--muted) leading-[1.7]">
              Sysogen is a team of experienced engineers with deep production experience across event-driven
              systems, Kubernetes infrastructure, AI integration, and regulated-industry compliance.
              Engagements are led by a named Sysogen engineer end-to-end, with the rest of the team
              supporting — security review, ML engineering, infrastructure, frontend, whatever the project
              calls for. Your engagement lead doesn&apos;t change between week one and handover.
            </p>
          </div>
        </div>

        {/* How we work */}
        <div className="mb-6">
          <h2 className="text-[26px] font-bold tracking-tight mb-4 text-(--foreground)">How we work</h2>
          <div className="card-base p-10">
            <ul className="space-y-3">
              {[
                "One named engineering lead per engagement, backed by the team",
                "6–16 week scopes — long enough to ship, short enough to stay focused",
                "We document as we build; handover is a deliverable, not an afterthought",
                "EU-registered, GDPR-native, EU AI Act-aware",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-(--foreground)">
                  <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why trust */}
        <div className="mb-6">
          <h2 className="text-[26px] font-bold tracking-tight mb-4 text-(--foreground)">Why trust a new company</h2>
          <div className="card-base p-10">
            <p className="text-[15px] text-(--muted) leading-[1.7] mb-6">Sysogen is new. What we build is verifiable today:</p>
            <ul className="space-y-3">
              {[
                "We ship our own software. ProveStack is in early access, built and operated by our engineers.",
                "We're EU-registered with full legal disclosure (NIF 519018265, CAE 62201, Coimbra, Portugal).",
                "Our engagement model, deliverables, and pricing-band are documented openly.",
                "First call is free. Thirty minutes tells you whether we fit. No commitment.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-(--foreground)">
                  <span className="mt-2 w-4 h-px bg-(--accent) shrink-0 opacity-80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company box */}
        <div
          className="card-base p-8 mb-12"
          style={{ background: "rgba(79,140,255,0.04)", borderColor: "rgba(79,140,255,0.2)" }}
        >
          <div className="font-mono-custom text-[11px] text-(--ink-mute) tracking-[0.12em] uppercase mb-4">Company</div>
          <ul className="space-y-1 text-[14px] text-(--muted)">
            <li className="text-(--foreground) font-medium">SYSOGEN, UNIPESSOAL LDA</li>
            <li>NIF 519018265 · CAE 62201</li>
            <li>Coimbra, Portugal</li>
            <li>
              <a href="mailto:hello@sysogen.com" className="text-(--accent) hover:underline">
                hello@sysogen.com
              </a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Book a discovery call
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/labs/provestack" className="btn-ghost">
            See ProveStack
          </Link>
        </div>
      </div>
    </div>
  );
}
