"use client";

import { AnimateIn, StaggerContainer, staggerItem } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import { Building2, Code2, Layers, Lock, BookOpen, Globe } from "lucide-react";

const items = [
  {
    title: "9+ years building production systems",
    body: "Our founder has built and maintained systems processing millions of transactions at companies like Ford, GLS, and Kinship. Real infrastructure at scale.",
    icon: Building2,
  },
  {
    title: "We ship, not slide",
    body: "Our deliverable is working code in your repo, not a PowerPoint deck. We write tests, not roadmap slides.",
    icon: Code2,
  },
  {
    title: "Deep, not wide",
    body: "We specialize in JVM ecosystems, event-driven architecture, and AI integration. We don't pretend to do everything.",
    icon: Layers,
  },
  {
    title: "Security & governance first",
    body: "Every system we build is designed for auditability, compliance, and zero-trust from day one — not bolted on later.",
    icon: Lock,
  },
  {
    title: "Knowledge transfer built in",
    body: "We document, pair-program, and train your team. When we leave, your team is stronger — not dependent.",
    icon: BookOpen,
  },
  {
    title: "EU-based, EU-compliant",
    body: "Headquartered in Portugal (NIF 519018265). We understand GDPR, the EU AI Act, and European regulatory requirements natively.",
    icon: Globe,
  },
];

export function TrustSignals() {
  return (
    <section id="why" className="relative py-20">
      <div className="site-container">
        <AnimateIn>
          <div className="mb-14 max-w-180">
            <span className="eyebrow">Why companies choose Sysogen</span>
            <h2 className="mt-4 font-bold tracking-tight leading-[1.1] text-(--foreground) text-[clamp(32px,3.5vw,52px)]">
              Quiet confidence.
              <br />
              Production-grade output.
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
