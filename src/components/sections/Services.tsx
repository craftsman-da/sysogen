"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { ShieldCheck, Code2, Cpu } from "lucide-react";

const pillars = [
  {
    tag: "PILLAR 01",
    title: "AI Adoption & Governance",
    lead: "Adopt AI at scale — securely, responsibly, measurably.",
    accent: "var(--accent)",
    accentBg: "rgba(79,140,255,0.1)",
    accentBorder: "rgba(79,140,255,0.28)",
    icon: ShieldCheck,
    bullets: [
      "Shadow AI audits and policy frameworks",
      "AI tool evaluation and vendor selection",
      "Custom AI integration into existing workflows",
      "Governance and compliance (EU AI Act ready)",
      "ROI measurement and reporting dashboards",
    ],
  },
  {
    tag: "PILLAR 02",
    title: "Enterprise Software Engineering",
    lead: "Build, modernize, and scale the systems your business runs on.",
    accent: "var(--accent-2)",
    accentBg: "rgba(34,211,238,0.1)",
    accentBorder: "rgba(34,211,238,0.28)",
    icon: Code2,
    bullets: [
      "Java / Spring Boot microservices architecture",
      "Cloud-native infrastructure (AWS/EKS, Kubernetes, Terraform)",
      "Event-driven systems with Kafka",
      "Legacy modernization and migration",
      "CI/CD pipeline engineering and DevOps",
      "Database architecture and optimization",
    ],
  },
  {
    tag: "PILLAR 03",
    title: "AI Engineering & Custom Solutions",
    lead: "Custom AI tools and pipelines tailored to your business.",
    accent: "var(--gold)",
    accentBg: "rgba(232,177,74,0.1)",
    accentBorder: "rgba(232,177,74,0.28)",
    icon: Cpu,
    bullets: [
      "RAG pipelines and knowledge management systems",
      "LLM integration and fine-tuning",
      "AI-powered automation workflows",
      "Data pipelines for ML/AI workloads",
      "Internal AI tooling and developer platforms",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative py-20">
      <div className="site-container">
        <AnimateIn>
          <div className="mb-14 max-w-180">
            <span className="eyebrow">How we help</span>
            <h2 className="mt-4 font-bold tracking-tight leading-[1.1] text-(--foreground) text-[clamp(32px,3.5vw,52px)]">
              Three deep specialties.
              <br />
              No generalist filler.
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="flex flex-col gap-3.5">
            {pillars.map((p, i) => {
              const open = active === i;
              return (
                <div
                  key={p.title}
                  onClick={() => setActive(i)}
                  className="card-base cursor-pointer overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: open ? "rgba(255,255,255,0.18)" : undefined,
                    background: open
                      ? "linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.01))"
                      : undefined,
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
                    {/* Left */}
                    <div className="p-9 md:border-r border-b md:border-b-0 border-(--border)">
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                          style={{
                            background: open ? p.accentBg : "rgba(255,255,255,0.04)",
                            border: `1px solid ${open ? p.accentBorder : "var(--border)"}`,
                            color: open ? p.accent : "var(--ink-dim)",
                          }}
                        >
                          <p.icon className="w-5 h-5" strokeWidth={1.4} />
                        </div>
                        <span className="font-mono-custom text-[11px] tracking-[0.16em] text-(--ink-mute)">
                          {p.tag}
                        </span>
                      </div>
                      <h3 className="font-medium leading-[1.1] mb-3 text-(--foreground) text-[clamp(20px,2vw,28px)] tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-[15px] text-(--muted)">{p.lead}</p>
                    </div>

                    {/* Right */}
                    <div className="p-9">
                      <ul className="grid gap-3">
                        {p.bullets.map((b, k) => (
                          <li key={k} className="flex items-start gap-3.5 text-[14.5px] text-(--foreground)">
                            <span
                              className="mt-2.25 w-4 h-px shrink-0 transition-opacity duration-200"
                              style={{ background: p.accent, opacity: open ? 0.9 : 0.35 }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
