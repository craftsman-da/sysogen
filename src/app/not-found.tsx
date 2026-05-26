import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.3,
        }}
      />

      <div className="relative text-center max-w-2xl mx-auto px-6">
        <div className="font-mono-custom text-[11px] text-(--ink-mute) tracking-[0.16em] uppercase mb-6">
          404
        </div>

        <h1 className="text-[clamp(36px,5vw,60px)] font-bold tracking-tight leading-[1.1] text-(--foreground) mb-5">
          Page not found.
        </h1>

        <p className="text-(--muted) text-[16px] leading-relaxed mb-3">
          If you got here from a link we sent you, email{" "}
          <a href="mailto:hello@sysogen.com" className="text-(--accent) hover:underline">
            hello@sysogen.com
          </a>{" "}
          and we&apos;ll fix it.
        </p>

        <p className="text-(--muted) text-[15px] mb-10">
          Otherwise, one of these should get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
          <Link href="/" className="btn-ghost flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <Link href="/labs/provestack" className="btn-ghost">
            ProveStack
          </Link>
          <Link href="/services" className="btn-ghost">
            Services
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
