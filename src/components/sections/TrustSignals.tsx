"use client";

import { AnimateIn, StaggerContainer, staggerItem } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import { Building2, Code2, Layers, Lock, BookOpen, Globe } from "lucide-react";

const items = [
  {
    title: "Senior engineers, regulated-industry experience",
    body: "Our team has shipped production systems for regulated industries — finance, logistics, healthcare, public sector — with real infrastructure, real audits, and real on-call rotations.",
    icon: Building2,
  },
  {
    title: "We ship code, not slides",
    body: "Our deliverable is working software in your repo. We write tests, run on-call shifts, and pair with your team — not roadmap decks.",
    icon: Code2,
  },
  {
    title: "Deep, not wide",
    body: "We specialize in event-driven architecture, EU-regulated AI deployments, and provenance for AI-generated code. We don't pretend to do everything.",
    icon: Layers,
  },
  {
    title: "Security and governance first",
    body: "Every system we deliver is designed for auditability and zero-trust from day one. SOC 2 controls, EU AI Act Article 50 evidence, and signed-commit provenance are built in — not bolted on.",
    icon: Lock,
  },
  {
    title: "Knowledge transfer built in",
    body: "We document as we build, pair-program with your engineers, and run a structured handover. When the engagement ends, your team owns the system.",
    icon: BookOpen,
  },
  {
    title: "EU-based, EU-regulated",
    body: "Headquartered in Coimbra, Portugal (NIF 519018265, CAE 62201). We work natively with GDPR, the EU AI Act, NIS2, and the upcoming Digital Operational Resilience Act (DORA).",
    icon: Globe,
  },
];

export function TrustSignals() {
  return (
    <section id="why" className="relative py-12 lg:py-20">
      <div className="site-container">
        <AnimateIn>
          <div className="mb-14 max-w-180">
            <span className="eyebrow">Why Sysogen</span>
            <h2 className="mt-4 font-bold tracking-tight leading-[1.1] text-(--foreground) text-[clamp(32px,3.5vw,52px)]">
              Engineering-led,
              <br />
              EU-compliant, paid for outcomes.
            </h2>
          </div>
        </AnimateIn>

        <div
          className="rounded-[14px] overflow-hidden border border-(--border)"
          style={{ background: "var(--border)" }}
        >
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px">
            {items.map((it) => (
              <motion.div
                key={it.title}
                variants={staggerItem}
                className="p-8 transition-colors duration-200 cursor-default bg-(--background) hover:bg-white/2.5"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 text-(--accent) bg-[rgba(79,140,255,0.08)] border border-[rgba(79,140,255,0.18)]">
                  <it.icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-semibold tracking-tight leading-[1.3] mb-3 text-(--foreground)">
                  {it.title}
                </h3>
                <p className="text-sm text-(--muted) leading-[1.55]">{it.body}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
