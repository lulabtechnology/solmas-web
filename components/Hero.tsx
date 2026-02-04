"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { site, ASSETS } from "@/lib/site";

type Slide = { desktop: string; mobile: string; alt: string };

export default function Hero() {
  const slides = useMemo<Slide[]>(
    () => [
      {
        desktop: ASSETS.hero.desktop,
        mobile: ASSETS.hero.mobile,
        alt: "Firma legal en Panamá",
      },
      {
        desktop: ASSETS.hero.desktop2,
        mobile: ASSETS.hero.mobile2,
        alt: "Asesoría legal en Panamá",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const t = window.setInterval(() => {
      setIdx((p) => (p + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(t);
  }, [slides.length]);

  return (
    <section
      className="heroWrap"
      style={{ position: "relative", minHeight: "72vh", display: "grid", placeItems: "center" }}
    >
      {/* Media (2 slides crossfade) */}
      <div className="heroMedia" style={{ position: "absolute", inset: 0 }}>
        {slides.map((s, i) => (
          <picture
            key={s.desktop}
            className={`heroSlide ${i === idx ? "isActive" : ""}`}
            style={{ position: "absolute", inset: 0 }}
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
          background:
            "linear-gradient(90deg, rgba(2,6,23,.72) 0%, rgba(2,6,23,.42) 45%, rgba(2,6,23,.28) 100%)",
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
            <Link className="btn" href="/contacto#form">
              Cuéntanos tu caso
            </Link>
          </div>

          <p style={{ marginTop: 14, color: "rgba(255,255,255,.70)", fontSize: 13 }}>
            Respuesta inicial en 24–48 horas hábiles <span style={{ opacity: 0.8 }}>(pendiente de confirmar)</span>
          </p>

          <div
            style={{
              marginTop: 22,
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              color: "rgba(255,255,255,.78)",
              fontSize: 13,
            }}
          >
            <span>📞 {site.phone}</span>
            <span>✉️ {site.email}</span>
          </div>

          {/* Dots */}
          <div style={{ marginTop: 18, display: "flex", gap: 8 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a slide ${i + 1}`}
                onClick={() => setIdx(i)}
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.35)",
                  background: i === idx ? "rgba(255,255,255,.75)" : "rgba(255,255,255,.18)",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .heroSlide{
          opacity:0;
          transition: opacity 900ms ease;
        }
        .heroSlide.isActive{
          opacity:1;
        }

        /* ✅ Mobile: overlay vertical y más altura */
        @media (max-width: 720px){
          .heroWrap{ min-height: 78vh !important; }
          .heroInner{ padding: 46px 0 !important; }
          .heroOverlay{
            background: linear-gradient(180deg, rgba(2,6,23,.72) 0%, rgba(2,6,23,.44) 55%, rgba(2,6,23,.22) 100%) !important;
          }
        }

        /* ✅ Reduce motion */
        @media (prefers-reduced-motion: reduce){
          .heroSlide{ transition: none !important; }
        }
      `}</style>
    </section>
  );
}
