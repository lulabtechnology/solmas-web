import Link from "next/link";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <div className="kicker">Firma legal en Panamá</div>
          <div style={{ fontWeight: 900, letterSpacing: ".10em", marginTop: 8 }}>{SITE.name}</div>
          <p className="p" style={{ marginTop: 10, maxWidth: 560 }}>
            Asesoría legal estratégica con enfoque humano, ética y transparencia. Atención a extranjeros y mercado local.
          </p>

          <div className="footerLinks" style={{ marginTop: 14 }}>
            <a href={`tel:${SITE.phoneDisplay.replace(/\s/g, "")}`}>{SITE.phoneDisplay}</a>
            <span style={{ opacity: 0.5 }}>•</span>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>{SITE.address}</span>
          </div>
        </div>

        <div>
          <div className="kicker">Legal</div>
          <div className="footerLinks" style={{ marginTop: 10 }}>
            <Link href="/legal/privacidad">Política de Privacidad</Link>
            <Link href="/legal/terminos">Términos y Condiciones</Link>
            <Link href="/legal/cookies">Política de Cookies</Link>
            <Link href="/legal/aviso-legal">Aviso Legal</Link>
            <button
              type="button"
              className="btn btn-outline"
              style={{ marginTop: 8 }}
              onClick={() => window.dispatchEvent(new Event("solmas:open-cookies"))}
            >
              Preferencias de cookies
            </button>
          </div>

          <div className="hr" />

          <div className="footerLinks">
            <a href="#" aria-label="LinkedIn (pendiente de confirmar)">
              LinkedIn
            </a>
            <a href="https://instagram.com/solmaslegal" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="Facebook (pendiente de confirmar)">
              Facebook
            </a>
          </div>

          <p className="p-muted" style={{ marginTop: 12 }}>
            La información del sitio es informativa y no crea relación abogado–cliente.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 18, color: "var(--muted)", fontSize: 13 }}>
        © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
