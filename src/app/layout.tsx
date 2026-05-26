import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sysogen — AI you can ship, and prove you shipped responsibly",
    template: "%s | Sysogen",
  },
  description:
    "Sysogen helps regulated enterprises adopt AI without the security and compliance debt. EU AI Act Article 50 provenance, production engineering, and AI governance consultancy. Headquartered in Coimbra, Portugal.",
  icons: {
    icon: "/Sysogen.svg",
  },
  openGraph: {
    type: "website",
    url: "https://sysogen.com",
    siteName: "Sysogen",
    title: "Sysogen — AI you can ship, and prove you shipped responsibly",
    description:
      "Sysogen helps regulated enterprises adopt AI without security and compliance debt. EU AI Act Article 50 compliance, ProveStack AI provenance, enterprise AI governance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sysogen — AI you can ship, and prove you shipped responsibly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sysogen — AI you can ship, and prove you shipped responsibly",
    description:
      "EU-headquartered engineering consultancy. AI governance, ProveStack code provenance, production-grade systems for regulated industries.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://sysogen.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
