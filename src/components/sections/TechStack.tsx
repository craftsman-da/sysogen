"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { useTheme } from "@/components/ThemeProvider";

const cats = [
  { label: "Languages & Frameworks", items: ["Java", "Spring Boot", "Kotlin", "Rust", "Python", "TypeScript"] },
  { label: "Infrastructure",         items: ["Kubernetes", "AWS / EKS", "Terraform", "Docker", "Helm", "KEDA"] },
  { label: "Data & Messaging",       items: ["Kafka", "PostgreSQL", "Redis", "Elasticsearch", "Pulsar", "ClickHouse"] },
  { label: "AI / ML",                items: ["LangChain", "RAG pipelines", "OpenAI API", "Anthropic API", "Vector DBs", "PyTorch"] },
  { label: "DevOps",                 items: ["Jenkins", "GitHub Actions", "ArgoCD", "Vault", "Prometheus", "Grafana"] },
];

export function TechStack() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section
      id="stack"
      className="relative py-20"
      style={{
        background: isDark
          ? "linear-gradient(180deg,transparent,rgba(11,16,32,0.4) 30%,rgba(11,16,32,0.4) 70%,transparent)"
          : "radial-gradient(900px 600px at 8% 65%,rgba(79,140,255,0.1),transparent 65%)," +
            "radial-gradient(700px 500px at 92% 25%,rgba(34,211,238,0.08),transparent 60%)," +
            "linear-gradient(180deg,transparent,rgba(228,234,255,0.75) 20%,rgba(228,234,255,0.75) 80%,transparent)",
      }}
    >
      <div className="site-container">
        <AnimateIn>
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <div className="max-w-160">
              <span className="eyebrow">Our technology DNA</span>
              <h2 className="mt-4 font-bold tracking-tight leading-[1.1] text-(--foreground) text-[clamp(32px,3.5vw,52px)]">
                The stack we know
                <br />
                down to the threading model.
              </h2>
            </div>
            <p className="text-(--muted) text-sm leading-relaxed max-w-80">
              We pick tools because they're right for the job — not because
              they're trending on Hacker News.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="rounded-[14px] overflow-hidden border border-(--border)">
            {cats.map((cat, i) => (
              <div
                key={cat.label}
                className="grid items-center gap-5 px-7 py-5"
                style={{
                  gridTemplateColumns: "220px 1fr",
                  borderTop: i === 0 ? "none" : "1px solid var(--border)",
                }}
              >
                <div className="font-mono-custom text-[11px] text-(--ink-dim) tracking-[0.12em] uppercase">
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {cat.items.map((t) => (
                    <span
                      key={t}
                      className="text-sm text-(--ink-dim) font-medium transition-colors duration-150 hover:text-(--foreground) cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
