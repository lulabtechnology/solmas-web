import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import CookieBanner from "@/components/CookieBanner";
import { SITE } from "@/lib/site";
import { Cormorant_Garamond, Inter } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solmas.example"; // placeholder hasta definir dominio

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SOLMAS — Firma de Abogados en Panamá",
    template: "%s — SOLMAS",
  },
  description:
    "Asesoría legal estratégica en Panamá. Derecho corporativo, notarías y registro, administrativo, propiedad intelectual, civil y familia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SOLMAS — Firma de Abogados en Panamá",
    description:
      "Soluciones claras, ágiles y humanas para empresas, familias e inversionistas.",
    url: SITE_URL,
    siteName: "SOLMAS",
    locale: "es_PA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE.name,
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "Panamá",
      addressCountry: "PA",
      streetAddress: "Calle 65 Este",
    },
    areaServed: "Panamá",
    url: SITE_URL,
  };

  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body style={{ fontFamily: "var(--font-sans)" }}>
        <a
          href="#contenido"
          style={{
            position: "absolute",
            left: 8,
            top: 8,
            padding: "10px 12px",
            background: "#fff",
            border: "1px solid rgba(11,27,43,.14)",
            borderRadius: 12,
            transform: "translateY(-160%)",
          }}
        >
          Ir al contenido
        </a>

        <SiteHeader />

        <main id="contenido">{children}</main>

        <SiteFooter />
        <WhatsAppFloating />
        <CookieBanner />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
