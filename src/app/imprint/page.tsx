import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal imprint for Sysogen, UNIPESSOAL LDA — EU-registered IT consultancy based in Coimbra, Portugal.",
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="site-container max-w-3xl">
        <div className="mb-12">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-[clamp(32px,4vw,52px)] font-bold tracking-tight leading-[1.1] text-(--foreground)">
            Imprint
          </h1>
          <p className="mt-4 text-(--muted) text-[15px]">
            In accordance with Portuguese commercial code and the ePrivacy Directive.
          </p>
        </div>

        <div className="prose-content space-y-10 text-(--foreground)">
          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">Company details</h2>
            <ul className="space-y-2 text-[15px] text-(--muted)">
              <li><span className="text-(--foreground) font-medium">Legal name:</span> SYSOGEN, UNIPESSOAL LDA</li>
              <li><span className="text-(--foreground) font-medium">Registered office:</span> Coimbra, Portugal</li>
              <li><span className="text-(--foreground) font-medium">Portuguese tax ID (NIF):</span> 519018265</li>
              <li><span className="text-(--foreground) font-medium">Economic activity code (CAE):</span> 62201 — IT consulting</li>
              <li><span className="text-(--foreground) font-medium">Sole shareholder and managing director:</span> Favour Nwachukwu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">Contact</h2>
            <ul className="space-y-2 text-[15px] text-(--muted)">
              <li>
                <span className="text-(--foreground) font-medium">Email:</span>{" "}
                <a href="mailto:hello@sysogen.com" className="text-(--accent) hover:underline">
                  hello@sysogen.com
                </a>
              </li>
              <li>
                <span className="text-(--foreground) font-medium">Web:</span>{" "}
                <a href="https://sysogen.com" className="text-(--accent) hover:underline">
                  https://sysogen.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">EU Online Dispute Resolution</h2>
            <p className="text-[15px] text-(--muted)">
              The European Commission provides a platform for online dispute resolution:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--accent) hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">Liability for content</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              The content of this website is created with reasonable care. We cannot guarantee its accuracy,
              completeness, or timeliness. We are not responsible for content on external sites linked from
              this website.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold mb-4 tracking-tight">Copyright</h2>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              All content on this website (text, images, logos, layout) is © Sysogen unless otherwise stated.
              Unauthorised reproduction is prohibited.
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
