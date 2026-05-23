"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { useTheme } from "@/components/ThemeProvider";
import { ArrowRight, ShieldCheck, GitCommit, FileText, Terminal, ClipboardList, Plus } from "lucide-react";

const provestackFeatures = [
  { label: "Cryptographic watermarking at generation time", icon: ShieldCheck },
  { label: "Per-commit signing — model, prompt, reviewer",  icon: GitCommit },
  { label: "Article 50 provenance manifests, on demand",    icon: FileText },
  { label: "Verifier CLI for auditors and CI pipelines",    icon: Terminal },
  { label: "Tamper-evident audit log, exportable",          icon: ClipboardList },
];

const ledgerRows = [
  { id: "a4f2…91d", model: "claude-sonnet-4.5",  file: "auth/jwt.ts",       sig: "verified",  color: "#4ade80" },
  { id: "b71e…04c", model: "gpt-5-codex",         file: "api/users.py",      sig: "verified",  color: "#4ade80" },
  { id: "c08a…f23", model: "human",               file: "lib/crypto.ts",     sig: "—",         color: "#9AA3B8" },
  { id: "d9c1…7b2", model: "claude-sonnet-4.5",  file: "web/checkout.tsx",  sig: "verified",  color: "#4ade80" },
  { id: "e442…aa9", model: "unknown",             file: "jobs/sync.go",      sig: "unsigned",  color: "#F47174" },
];

export function Workshop() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section
      id="labs"
      className="relative border-t border-b border-(--border) py-20"
      style={{
        background:
          "radial-gradient(800px 500px at 80% 10%,rgba(232,177,74,0.06),transparent 60%)," +
          "radial-gradient(700px 400px at 10% 90%,rgba(34,211,238,0.05),transparent 60%)",
      }}
    >
      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `radial-gradient(${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"} 1px,transparent 1px)`,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%,black,transparent 80%)",
        }}
      />

      <div className="site-container relative">
        {/* Header */}
        <AnimateIn>
          <div className="mb-14">
            <span className="eyebrow" style={{ color: "var(--gold)" }}>Sysogen Labs</span>
            <div className="flex flex-wrap items-end gap-x-16 gap-y-4 mt-4">
              <h2 className="font-bold tracking-tight leading-[1.1] text-(--foreground) shrink-0 text-[clamp(32px,3.5vw,52px)]">
                From our workshop.
              </h2>
              <p className="text-(--muted) text-[15px] leading-relaxed max-w-100">
                Products built in-house — to solve problems we keep seeing, and to
                demonstrate the engineering bar we hold ourselves to.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Featured: ProveStack */}
        <AnimateIn delay={0.1}>
          <div
            className="card-base overflow-hidden mb-3.5 relative"
            style={{
              background: "linear-gradient(135deg,rgba(79,140,255,0.06) 0%,rgba(232,177,74,0.04) 100%)",
              borderColor: "var(--border-strong)",
            }}
          >
            {/* Corner glow */}
            <div
              aria-hidden="true"
              className="absolute -top-12.5 -right-12.5 w-70 h-70 pointer-events-none opacity-[0.18]"
              style={{
                background: "conic-gradient(from 220deg,var(--accent),var(--gold),transparent 60%)",
                filter: "blur(40px)",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
              {/* Left */}
              <div className="p-10 lg:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <ProveStackMark />
                  <span className="text-[22px] font-semibold tracking-tight text-(--foreground)">
                    ProveStack
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full font-mono-custom tracking-[0.05em]"
                    style={{
                      background: "rgba(232,177,74,0.1)",
                      border: "1px solid rgba(232,177,74,0.25)",
                      color: "var(--gold)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-(--gold)" />
                    NEW · EARLY ACCESS
                  </span>
                </div>

                <p className="font-mono-custom text-[11px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--accent-2)" }}>
                  Shipping under the EU AI Act · Article 50 provenance, done.
                </p>

                <h3 className="font-medium leading-[1.1] mb-4 text-(--foreground) text-[clamp(22px,2.5vw,32px)] tracking-tight">
                  Every line of AI code,{" "}
                  <br />
                  <span className="gradient-text">cryptographically accounted for.</span>
                </h3>

                <p className="text-[15px] text-(--muted) leading-[1.65] mb-7 max-w-120">
                  ProveStack watermarks, signs, and verifies code the moment a model
                  writes it — so your auditor, your regulator, and your future self can
                  prove exactly what shipped, by which model, under whose review.
                </p>

                <ul className="grid gap-2.5 mb-8">
                  {provestackFeatures.map(({ label, icon: Icon }) => (
                    <li key={label} className="flex items-center gap-3 text-sm text-(--foreground)">
                      <Icon className="w-4.5 h-4.5 text-(--accent) shrink-0" strokeWidth={1.5} />
                      {label}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="btn-primary">
                  Join the waitlist
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right: mock ledger */}
              <div
                className="p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-(--border) flex items-center justify-center"
                style={{ background: isDark ? "rgba(0,0,0,0.15)" : "var(--bg-2)" }}
              >
                <div
                  className="w-full max-w-95 rounded-xl overflow-hidden border border-(--border-strong)"
                  style={{
                    background: isDark ? "rgba(7,9,15,0.85)" : "var(--card)",
                    boxShadow: isDark ? "0 24px 48px -16px rgba(0,0,0,0.6)" : "0 24px 48px -16px rgba(0,0,0,0.12)",
                  }}
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-(--border)">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((d) => (
                        <span key={d} className={`w-2 h-2 rounded-full ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                      ))}
                    </div>
                    <span className="font-mono-custom text-[10px] text-(--ink-mute)">
                      provestack › ledger › main
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-mono-custom text-[10px] text-(--ink-mute) tracking-widest uppercase">
                        Signed commits · last 24h
                      </span>
                      <span className="font-mono-custom text-[10px] text-(--danger)">
                        ● 1 unsigned
                      </span>
                    </div>
                    <div className="text-[36px] font-medium mb-4.5 text-(--foreground) tracking-tight">
                      412
                      <span className="text-sm text-(--ink-mute) ml-2">provenance records</span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {ledgerRows.map((r) => (
                        <div key={r.id} className="grid items-center gap-2.5 grid-cols-[70px_1fr_auto]">
                          <span className="font-mono-custom text-[10.5px] text-(--ink-mute)">{r.id}</span>
                          <div className="flex flex-col min-w-0">
                            <span className="font-mono-custom text-[11px] text-(--foreground) truncate">{r.file}</span>
                            <span className="font-mono-custom text-[9.5px] text-(--ink-mute)">{r.model}</span>
                          </div>
                          <span
                            className="text-[10px] px-1.5 py-0.5 rounded font-mono-custom"
                            style={{
                              background: `color-mix(in oklab,${r.color} 14%,transparent)`,
                              color: r.color,
                            }}
                          >
                            {r.sig}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Smaller cards */}
        <AnimateIn delay={0.15}>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {/* InboxGraph */}
            <div className="card-base p-8">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2.5">
                  <InboxGraphMark />
                  <span className="text-base font-semibold tracking-tight text-(--foreground)">InboxGraph</span>
                </div>
                <span className="font-mono-custom text-[10px] text-(--ink-mute) tracking-widest">R&amp;D</span>
              </div>
              <p className="text-sm text-(--muted) mb-5 leading-relaxed">
                Privacy-first email intelligence. Local-first architecture, no cloud
                dependency. AI-powered analytics that never leaves your machine.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Local-first", "On-device", "Zero telemetry"].map((t) => (
                  <span
                    key={t}
                    className="font-mono-custom text-[10.5px] px-2 py-1 rounded-md border border-(--border-strong) text-(--ink-dim) tracking-[0.05em]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Coming soon */}
            <div className="card-base p-8 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-50"
                style={{
                  background: "repeating-linear-gradient(45deg,transparent 0 8px,rgba(255,255,255,0.025) 8px 9px)",
                }}
              />
              <div className="relative">
                <div className="flex justify-between items-center mb-5">
                  <div className="w-7 h-7 rounded-md border border-dashed border-(--border-strong) inline-flex items-center justify-center text-(--ink-mute)">
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono-custom text-[10px] text-(--ink-mute) tracking-widest">TBA</span>
                </div>
                <h3 className="text-base font-semibold mb-2 text-(--foreground)">More coming soon</h3>
                <p className="text-sm text-(--muted) leading-relaxed">
                  We're prototyping a third tool focused on developer-platform
                  observability for AI workloads. Stay tuned.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function ProveStackMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="3" y="14" width="26" height="6" rx="1.5" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      <rect x="6" y="7" width="20" height="6" rx="1.5" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
      <rect x="9" y="21" width="14" height="5" rx="1.2" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
      <circle cx="16" cy="16.5" r="1.4" fill="var(--gold)" />
    </svg>
  );
}

function InboxGraphMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="4" y="7" width="24" height="18" rx="2" fill="none" stroke="var(--accent-2)" strokeWidth="1.5" />
      <path d="M4 9 l12 8 l12 -8" fill="none" stroke="var(--accent-2)" strokeWidth="1.5" />
      <circle cx="22" cy="20" r="2" fill="var(--accent-2)" />
      <circle cx="10" cy="22" r="1.5" fill="var(--accent-2)" opacity="0.6" />
      <line x1="11" y1="21" x2="21" y2="20" stroke="var(--accent-2)" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
