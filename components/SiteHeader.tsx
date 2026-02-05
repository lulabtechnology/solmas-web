"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { nav, site, ASSETS } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = useMemo(() => nav, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          background: "rgba(255,255,255,.88)",
          backdropFilter: "blur(10px)",
          borderBottom: scrolled ? "1px solid rgba(15,23,42,.10)" : "1px solid transparent",
        }}
      >
        <div className="container headerRow" style={{ height: 74, display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/" aria-label={`${site.name} Inicio`} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              className="brandLogo"
              src={ASSETS.brand.logoBlue}
              alt={`${site.name} logo`}
              width={240}
              height={70}
              style={{ height: 40, width: "auto" }}
            />
          </Link>

          <nav style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 18 }}>
            <div className="hideMobile" style={{ display: "flex", gap: 18, alignItems: "center" }}>
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  style={{
                    fontSize: 14,
                    color: "rgba(11,18,32,.82)",
                    padding: "10px 8px",
                    borderRadius: 999,
                  }}
                >
                  {it.label}
                </Link>
              ))}
            </div>

            <Link className="btn primary small" href="/contacto">
              Agendar consulta
            </Link>

            <button
              className="btn small showMobile"
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              style={{ display: "none" }}
            >
              Menú
            </button>
          </nav>
        </div>
      </header>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "rgba(2,6,23,.55)",
            display: "grid",
            placeItems: "center",
            padding: 18,
          }}
          onClick={() => setOpen(false)}
        >
          <div className="card" style={{ width: "min(520px, 100%)", background: "#fff" }} onClick={(e) => e.stopPropagation()}>
            <div className="card-pad" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <strong>{site.name}</strong>
              <button className="btn small" type="button" onClick={() => setOpen(false)}>
                Cerrar
              </button>
            </div>
            <div className="hr" />
            <div className="card-pad" style={{ display: "grid", gap: 10 }}>
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="btn"
                  style={{ justifyContent: "flex-start" }}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .hideMobile { display: none !important; }
          .showMobile { display: inline-flex !important; }
        }

        /* ✅ Logo más grande y consistente */
        .brandLogo{ height: 40px !important; width: auto !important; }
        @media (max-width: 720px){
          .brandLogo{ height: 36px !important; }
        }
      `}</style>
    </>
  );
}
