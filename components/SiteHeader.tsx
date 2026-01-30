"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ASSETS, NAV, SITE } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const headerClass = useMemo(() => {
    if (isHome && !scrolled) return "header headerTransparent";
    return "header headerSolid";
  }, [isHome, scrolled]);

  const useWhiteLogo = isHome && !scrolled;

  return (
    <>
      <header className={headerClass} style={{ color: useWhiteLogo ? "#fff" : "inherit" }}>
        <div className="headerInner">
          <Link href="/" aria-label={`${SITE.name} — Inicio`} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Logo con fallback (si aún no está subido, se verá el nombre) */}
            <img
              src={useWhiteLogo ? ASSETS.logoWhite : ASSETS.logoBlue}
              alt={`${SITE.name}`}
              width={140}
              height={40}
              style={{ height: 34, width: "auto" }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <span style={{ fontWeight: 800, letterSpacing: ".12em", fontSize: 14, display: "inline-block" }}>
              {SITE.name}
            </span>
          </Link>

          <nav className="nav" aria-label="Navegación principal">
            {NAV.map((i) => (
              <Link key={i.href} href={i.href}>
                {i.label}
              </Link>
            ))}
            <Link className="btn btn-primary" href="/contacto">
              Agendar consulta
            </Link>
          </nav>

          <button
            className="btn mobileToggle"
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
          >
            Menú
          </button>
        </div>
      </header>

      {open && (
        <div className="mobileMenu" role="dialog" aria-modal="true" aria-label="Menú móvil">
          <div className="mobilePanel">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <strong>{SITE.name}</strong>
              <button className="btn" type="button" onClick={() => setOpen(false)}>
                Cerrar
              </button>
            </div>

            {NAV.map((i) => (
              <Link key={i.href} href={i.href} onClick={() => setOpen(false)}>
                {i.label}
              </Link>
            ))}

            <div style={{ marginTop: 10 }}>
              <Link className="btn btn-primary" href="/contacto" onClick={() => setOpen(false)}>
                Agendar consulta
              </Link>
            </div>

            <div className="hr" />

            <a className="btn btn-outline" href={`mailto:${SITE.email}?subject=Consulta%20—%20${SITE.name}`}>
              Escribir por correo
            </a>
          </div>
        </div>
      )}
    </>
  );
}
