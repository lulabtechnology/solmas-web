import "./globals.css";
import type { Metadata } from "next";
import { ASSETS, site } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InitialPreloader from "@/components/InitialPreloader";

export const metadata: Metadata = {
  title: `${site.name} | Firma de Abogados en Panamá`,
  description:
    "Asesoría legal estratégica en Panamá. Soluciones claras, ágiles y humanas para empresas, familias e inversionistas.",
  metadataBase: new URL("https://solmaslegal.com/"),
  icons: {
    icon: ASSETS.brand.favicon,
    shortcut: ASSETS.brand.favicon,
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    url: "https://solmaslegal.com/",
    title: `${site.name} | Firma de Abogados en Panamá`,
    description:
      "Asesoría legal estratégica en Panamá. Soluciones claras, ágiles y humanas para empresas, familias e inversionistas.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <InitialPreloader />
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieBanner />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
