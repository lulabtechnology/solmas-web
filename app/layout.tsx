import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: `${site.name} | Firma de Abogados en Panamá`,
  description:
    "Asesoría legal estratégica en Panamá. Soluciones claras, ágiles y humanas para empresas, familias e inversionistas.",
  metadataBase: new URL("https://solmas-web.vercel.app"),
  openGraph: {
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
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieBanner />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
