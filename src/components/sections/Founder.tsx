"use client";

import { AnimateIn } from "@/components/AnimateIn";

const stats = [
  ["9+", "Years engineering"],
  ["93M+", "Rows migrated"],
  ["18+", "Microservices modernized"],
];

export function Founder() {
  return (
    <section id="founder" className="relative py-20">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <AnimateIn>
            <span className="eyebrow">Meet the founder</span>
            <h2 className="mt-4 mb-6 font-bold tracking-tight leading-[1.1] text-(--foreground) text-[clamp(32px,3.5vw,52px)]">
              Built by an engineer,
              <br />
              not a salesperson.
            </h2>
            <p className="text-[16.5px] leading-[1.65] mb-4.5 text-(--foreground)">
              <strong className="font-semibold">Favour Nwachukwu</strong> is a
              Senior Software Engineer with 9+ years building distributed systems
              across automotive (Ford / Autonomic), aviation (Indra Avitech),
              logistics (GLS Germany), fintech (Interswitch), and pet-tech (Kinship
              Partners).
            </p>
            <p className="text-[15.5px] leading-[1.65] mb-8 text-(--muted)">
              Specializes in Java / Spring Boot microservices, Kafka event-driven
              architectures, Kubernetes infrastructure, and AI integration. Based in
              the EU. Nigerian-born, globally experienced.
            </p>

            <blockquote className="m-0 pl-6 border-l-2 border-(--accent) font-serif-custom italic text-(--foreground) leading-[1.4] text-[clamp(18px,1.8vw,22px)] max-w-130">
              "I believe the best consulting happens when you ship code, not slides."
            </blockquote>
          </AnimateIn>

          {/* Right: avatar + stats */}
          <AnimateIn delay={0.15}>
            <div
              className="relative w-full max-w-90 rounded-[18px] overflow-hidden flex items-center justify-center border border-(--border-strong)"
              style={{
                aspectRatio: "1 / 1",
                background:
                  "radial-gradient(circle at 30% 30%,rgba(79,140,255,0.25),transparent 60%)," +
                  "radial-gradient(circle at 70% 80%,rgba(34,211,238,0.18),transparent 60%)," +
                  "var(--bg-2)",
              }}
            >
              <svg aria-hidden="true" className="absolute inset-0 opacity-30" width="100%" height="100%">
                <defs>
                  <pattern id="fa-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#fa-grid)" />
              </svg>

              <span className="relative font-serif-custom italic leading-none gradient-text-blue select-none text-[clamp(80px,14vw,140px)] tracking-tight">
                FN
              </span>

              <span className="font-mono-custom absolute top-4 left-4 text-[10px] text-(--ink-mute) tracking-[0.12em]">
                FOUNDER · PRINCIPAL ENGINEER
              </span>
              <span className="font-mono-custom absolute bottom-4 left-4 text-[10px] text-(--ink-mute) tracking-[0.12em]">
                FAVOUR NWACHUKWU
              </span>
              <span className="font-mono-custom absolute bottom-4 right-4 text-[10px] text-(--ink-mute) tracking-[0.12em]">
                EU · PT
              </span>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-3">
              {stats.map(([n, l]) => (
                <div key={l} className="card-base p-6 text-left">
                  <div className="text-[28px] font-medium mb-1 gradient-text-blue tracking-tight">
                    {n}
                  </div>
                  <div className="text-xs text-(--ink-dim) leading-[1.3]">{l}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
