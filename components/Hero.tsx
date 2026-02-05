"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { site, ASSETS } from "@/lib/site";

type Slide = { desktop: string; mobile: string; alt: string };

function uniqSlides(slides: Slide[]) {
  const seen = new Set<string>();
  return slides.filter((s) => {
    const key = `${s.desktop}|${s.mobile}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default function Hero() {
  const slides = useMemo<Slide[]>(() => {
    const heroAny = ASSETS.hero as any;

    // ✅ Soporta si ya tienes desktop2/mobile2 en ASSETS.hero (no rompe si NO existen)
    const base: Slide[] = [
      { desktop: heroAny.desktop, mobile: heroAny.mobile, alt: "Firma legal en Panamá" },
      {
        desktop: heroAny.desktop2 ?? heroAny.desktop,
        mobile: heroAny.mobile2 ?? heroAny.mobile,
        alt: "Asesoría legal estratégica en Panamá",
      },
    ];

    const cleaned = uniqSlides(base).filter((s) => !!s.desktop && !!s.mobile);
    return cleaned.length ? cleaned : [{ desktop: heroAny.desktop, mobile: heroAny.mobile, alt: "Firma legal en Panamá" }];
  }, []);

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = window.setInterval(() => {
      setIdx((p) => (p + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(t);
  }, [slides.length]);

  return (
    <section className="heroWrap" style={{ position: "relative", minHeight: "72vh", display: "grid", placeItems: "center" }}>
      {/* ✅ Background carousel */}
      <div style={{ position: "absolute", inset: 0 }}>
        {slides.map((s, i) => (
          <picture
            key={s.desktop + s.mobile}
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === idx ? 1 : 0,
              transition: "opacity 700ms ease",
            }}
          >
            <source media="(max-width: 720px)" srcSet={s.mobile} />
            <img
              src={s.desktop}
              alt={s.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </picture>
        ))}
      </div>

      {/* Overlay elegante */}
      <div
        aria-hidden="true"
        className="heroOverlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(2,6,23,.72) 0%, rgba(2,6,23,.42) 45%, rgba(2,6,23,.28) 100%)",
        }}
      />

      <div className="container heroInner" style={{ position: "relative", padding: "64px 0" }}>
        <div style={{ maxWidth: 720 }}>
          <div
            className="badge"
            style={{
              marginBottom: 16,
              color: "rgba(255,255,255,.92)",
              borderColor: "rgba(217,194,154,.35)",
              background: "rgba(176,141,87,.14)",
            }}
          >
            Panamá · Firma boutique
          </div>

          <h1 className="h1" style={{ color: "#fff" }}>
            Asesoría legal estratégica en Panamá
          </h1>

          <p className="p" style={{ color: "rgba(255,255,255,.82)", marginTop: 14, fontSize: 17 }}>
            Soluciones claras, ágiles y humanas para empresas, familias e inversionistas.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
            <Link className="btn primary" href="/contacto">
              Agendar consulta
            </Link>

            {/* ✅ BOTÓN BLANCO */}
            <Link className="btn heroSecondary" href="/contacto#form">
              Cuéntanos tu caso
            </Link>
          </div>

          {/* ✅ SOLO 24 HORAS */}
          <p style={{ marginTop: 14, color: "rgba(255,255,255,.75)", fontSize: 13 }}>
            Respuesta inicial en 24 horas hábiles.
          </p>

          <div style={{ marginTop: 18, display: "flex", gap: 18, flexWrap: "wrap", color: "rgba(255,255,255,.78)", fontSize: 13 }}>
            <span>📞 {site.phone}</span>
            <span>✉️ {site.email}</span>
          </div>

          {/* Dots (si hay carrusel) */}
          {slides.length > 1 && (
            <div style={{ marginTop: 16, display: "flex", gap: 8, alignItems: "center" }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir a slide ${i + 1}`}
                  onClick={() => setIdx(i)}
                  style={{
                    width: i === idx ? 18 : 10,
                    height: 10,
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,.45)",
                    background: i === idx ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.18)",
                    cursor: "pointer",
                    transition: "all 200ms ease",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        /* ✅ Ajustes mobile para que el hero se vea bien en celular */
        @media (max-width: 720px){
          .heroWrap{ min-height: 78vh !important; }
          .heroInner{ padding: 46px 0 !important; }
          .heroOverlay{
            background: linear-gradient(180deg, rgba(2,6,23,.74) 0%, rgba(2,6,23,.46) 55%, rgba(2,6,23,.22) 100%) !important;
          }
        }

        /* ✅ Botón blanco SOLO para el hero */
        .heroSecondary{
          color:#fff !important;
          border-color: rgba(255,255,255,.55) !important;
          background: rgba(255,255,255,.10) !important;
        }
        .heroSecondary:hover{
          background: rgba(255,255,255,.16) !important;
          border-color: rgba(255,255,255,.85) !important;
        }
      `}</style>
    </section>
  );
}
