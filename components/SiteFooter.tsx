"use client";

import Link from "next/link";
import { site, ASSETS } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(15,23,42,.10)", padding: "54px 0" }}>
      <div className="container">
        <div className="grid footerGrid" style={{ gridTemplateColumns: "1.4fr 1fr 1fr", alignItems: "start" }}>
          <div style={{ display: "grid", gap: 12 }}>
            <img
              src={ASSETS.brand.logoBlue}
              alt={`${site.name} logo`}
              width={200}
              height={52}
              style={{ height: 30, width: "auto" }}
              loading="lazy"
            />
            <p className="p">Firma boutique en Panamá con enfoque humano, ético y tecnológicamente ágil.</p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn small" href={`tel:${site.phone.replace(/\s/g, "")}`}>Llamar</a>
              <a className="btn small" href={`mailto:${site.email}`}>Email</a>
              <button
                className="btn small"
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
              >
                Preferencias de cookies
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <div className="kicker">Sitio</div>
            <Link href="/">Inicio</Link>
            <Link href="/nuestra-firma">Nuestra Firma</Link>
            <Link href="/areas-de-practica">Áreas de Práctica</Link>
            <Link href="/equipo">Equipo</Link>
            <Link href="/tramites">Trámites</Link>
            <Link href="/contacto">Contacto</Link>
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <div className="kicker">Legal</div>
            <Link href="/legal/privacidad">Política de Privacidad</Link>
            <Link href="/legal/terminos">Términos y Condiciones</Link>
            <Link href="/legal/cookies">Política de Cookies</Link>
            <Link href="/legal/aviso-legal">Aviso Legal</Link>

            <div className="kicker" style={{ marginTop: 12 }}>Contacto</div>
            <div className="p">{site.address}</div>
            <div className="p">{site.phone}</div>
            <div className="p">{site.email}</div>
          </div>
        </div>

        <div className="hr" style={{ margin: "26px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", color: "rgba(71,85,105,.9)", fontSize: 13 }}>
          <span>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</span>
          <span>Jurisdicción: República de Panamá</span>
        </div>
      </div>

      {/* ✅ SIN styled-jsx */}
      <style>{`
        @media (max-width: 980px){
          .footerGrid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
