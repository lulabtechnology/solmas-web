"use client";

import Link from "next/link";
import { site, ASSETS } from "@/lib/site";

export default function Hero() {
  return (
    <section className="heroWrap" style={{ position: "relative", minHeight: "72vh", display: "grid", placeItems: "center" }}>
      <picture style={{ position: "absolute", inset: 0 }}>
        <source media="(max-width: 720px)" srcSet={ASSETS.hero.mobile} />
        <img
          src={ASSETS.hero.desktop}
          alt="Firma legal en Panamá"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          loading="eager"
        />
      </picture>

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

          <div style={{ marginTop: 22, display: "flex", gap: 18, flexWrap: "wrap", color: "rgba(255,255,255,.78)", fontSize: 13 }}>
            <span>📞 {site.phone}</span>
            <span>✉️ {site.email}</span>
          </div>
        </div>
      </div>

      <style>{`
        /* ✅ Ajustes mobile para que el hero se vea bien en celular */
        @media (max-width: 720px){
          .heroWrap{ min-height: 78vh !important; }
          .heroInner{ padding: 46px 0 !important; }
          .heroOverlay{
            background: linear-gradient(180deg, rgba(2,6,23,.72) 0%, rgba(2,6,23,.44) 55%, rgba(2,6,23,.22) 100%) !important;
          }
        }
      `}</style>
    </section>
  );
}
