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

const preloaderBootScript = `
(function () {
  try {
    var isHome = window.location.pathname === "/" || window.location.pathname === "";
    var alreadySeen = window.sessionStorage.getItem("solmas-initial-preloader-seen") === "1";
    if (isHome && !alreadySeen) {
      document.documentElement.classList.add("solmas-preloader-active");
    }
  } catch (error) {
    console.error("SOLMAS preloader init error", error);
  }
})();
`;

const preloaderCriticalCss = `
html.solmas-preloader-active,
html.solmas-preloader-active body {
  overflow: hidden;
}

#site-shell {
  opacity: 1;
  visibility: visible;
  transition: opacity .28s ease, visibility .28s ease;
}

html.solmas-preloader-active #site-shell {
  opacity: 0;
  visibility: hidden;
}

#solmas-preloader-shell {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: 24px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  background:
    radial-gradient(circle at 50% 22%, rgba(176,141,87,.16), transparent 28%),
    linear-gradient(135deg, #ffffff 0%, #f6f3ec 52%, #edf2f8 100%);
  transition: opacity .42s ease, visibility .42s ease;
}

html.solmas-preloader-active #solmas-preloader-shell {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

#solmas-preloader-shell.is-closing {
  opacity: 0;
  visibility: hidden;
}

.solmas-preloader__card {
  position: relative;
  width: min(360px, 84vw);
  display: grid;
  justify-items: center;
  gap: 18px;
  padding: 34px 28px 28px;
  border-radius: 28px;
  background: rgba(255,255,255,.80);
  border: 1px solid rgba(176,141,87,.24);
  box-shadow: 0 30px 80px rgba(2,6,23,.12);
  backdrop-filter: blur(14px);
}

.solmas-preloader__halo {
  position: absolute;
  inset: 18px 24px auto;
  height: 110px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(176,141,87,.18) 0%, rgba(176,141,87,0) 72%);
  filter: blur(8px);
  pointer-events: none;
}

.solmas-preloader__logoWrap {
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  padding-top: 4px;
}

.solmas-preloader__logo {
  position: relative;
  width: min(240px, 62vw);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 24px rgba(11,18,32,.10));
  animation: solmasPreloaderLogo 1.15s ease both;
}

.solmas-preloader__divider {
  width: min(220px, 58vw);
  height: 1px;
  background: linear-gradient(90deg, rgba(176,141,87,0), rgba(176,141,87,.50), rgba(176,141,87,0));
}

.solmas-preloader__bar {
  position: relative;
  width: min(210px, 56vw);
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(11,18,32,.08);
}

.solmas-preloader__bar::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 42%;
  border-radius: inherit;
  background: linear-gradient(90deg, rgba(11,18,32,0), rgba(176,141,87,.95), rgba(11,18,32,0));
  animation: solmasPreloaderBar 1s ease-in-out infinite;
}

@keyframes solmasPreloaderLogo {
  0% { transform: translateY(6px) scale(.97); opacity: 0; filter: blur(2px); }
  55% { opacity: 1; filter: blur(0); }
  100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
}

@keyframes solmasPreloaderBar {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(255%); }
}

@media (max-width: 720px) {
  .solmas-preloader__card {
    width: min(310px, 86vw);
    padding: 30px 22px 24px;
    border-radius: 24px;
  }

  .solmas-preloader__logo {
    width: min(210px, 62vw);
  }
}

@media (prefers-reduced-motion: reduce) {
  #site-shell,
  #solmas-preloader-shell,
  .solmas-preloader__logo,
  .solmas-preloader__bar::after {
    animation: none !important;
    transition: none !important;
  }
}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloaderBootScript }} />
        <style dangerouslySetInnerHTML={{ __html: preloaderCriticalCss }} />
      </head>
      <body>
        <div id="solmas-preloader-shell" role="status" aria-label={`Cargando ${site.name}`}>
          <div className="solmas-preloader__card">
            <span className="solmas-preloader__halo" aria-hidden="true" />
            <div className="solmas-preloader__logoWrap">
              <img className="solmas-preloader__logo" src={ASSETS.brand.logoBlue} alt={`${site.name} logo`} />
            </div>
            <span className="solmas-preloader__divider" aria-hidden="true" />
            <span className="solmas-preloader__bar" aria-hidden="true" />
          </div>
        </div>

        <InitialPreloader />

        <div id="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
          <CookieBanner />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
