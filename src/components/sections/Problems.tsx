"use client";

import { AnimateIn, StaggerContainer, staggerItem } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import { ShieldAlert, Activity, LayoutGrid, Clock } from "lucide-react";

const problems = [
  {
    n: "01",
    title: "Shadow AI is spreading unchecked",
    body: "Employees pasting confidential data into ChatGPT, Copilot, and a dozen other tools. No inventory, no policy, no audit trail. Compliance and security teams flying blind.",
    icon: ShieldAlert,
  },
  {
    n: "02",
    title: "AI pilots that never reach production",
    body: "POCs that demo beautifully but die at the first scale test. Data isn't ready. Pipelines don't exist. Nobody owns it. The Slack channel goes quiet.",
    icon: Activity,
  },
  {
    n: "03",
    title: "No provenance, no audit trail",
    body: "Auditors ask which lines of code came from which model, when, under whose review — and the engineering team can't answer. With the EU AI Act now in force, that's a regulatory exposure, not just a documentation gap.",
    icon: LayoutGrid,
  },
  {
    n: "04",
    title: "No clear AI strategy",
    body: "Leadership wants AI yesterday. Nobody knows what to build, what to buy, or how to measure ROI. Vendor pitches blur together. The roadmap is a wish list.",
    icon: Clock,
  },
];

export function Problems() {
  return (
    <section id="problem" className="relative py-12 lg:py-20">
      <div className="site-container">
        <AnimateIn>
          <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
            <div className="max-w-180">
              <span className="eyebrow">Where AI Adoption Breaks Down</span>
              <h2 className="mt-4 font-bold tracking-tight leading-[1.1] text-(--foreground) text-[clamp(32px,3.5vw,52px)]">
                Most enterprise AI initiatives fail
                <br className="hidden sm:block" /> in the same four ways.
              </h2>
            </div>
            <p className="text-(--muted) text-[15px] leading-relaxed max-w-90">
              We've seen the pattern across automotive, aviation, logistics, and
              fintech — and we know how to break it.
            </p>
          </div>
        </AnimateIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((it) => (
            <motion.div
              key={it.n}
              variants={staggerItem}
              className="card-base p-8 cursor-default transition-all duration-300 hover:-translate-y-1 hover:bg-white/4"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-(--accent) bg-[rgba(79,140,255,0.08)] border border-[rgba(79,140,255,0.18)]">
                  <it.icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                </div>
                <span className="font-mono-custom text-[11px] text-(--ink-mute) tracking-widest">
                  {it.n}
                </span>
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.01em] leading-[1.3] mb-3 text-(--foreground)">
                {it.title}
              </h3>
              <p className="text-sm text-(--muted) leading-[1.55]">{it.body}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
