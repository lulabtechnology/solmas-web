"use client";

import { useState } from "react";
import Link from "next/link";
import { ASSETS } from "@/lib/site";

export default function Hero() {
  const [fallback, setFallback] = useState(false);

  return (
    <section className="hero" aria-label="Hero">
      <div className="heroMedia" aria-hidden="true">
        {!fallback ? (
          <picture>
            <source media="(max-width: 980px)" srcSet={ASSETS.heroMobile} />
            <img
              src={ASSETS.heroDesktop}
              alt=""
              fetchPriority="high"
              onError={() => setFallback(true)}
            />
          </picture>
        ) : (
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(1200px 700px at 30% 30%, rgba(176,141,87,.25), rgba(8,18,28,1))"
          }} />
        )}
        <div className="heroOverlay" />
      </div>

      <div className="container heroContent">
        <div className="heroGrid">
          <div>
            <div className="badge">Firma boutique • Panamá</div>
            <h1 className="h1" style={{ margin: "14px 0 10px 0" }}>
              Asesoría legal estratégica en Panamá
            </h1>
            <p className="p" style={{ color: "rgba(255,255,255,.86)", fontSize: 16, maxWidth: 640 }}>
              Soluciones claras, ágiles y humanas para empresas, familias e inversionistas.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <Link className="btn btn-primary" href="/contacto">
                Agendar consulta
              </Link>
              <a className="btn btn-ghost" href="mailto:solmaslegal@gmail.com?subject=Cuéntanos%20tu%20caso%20—%20SOLMAS">
                Cuéntanos tu caso
              </a>
            </div>
          </div>

          <div className="heroCard">
            <div className="kicker" style={{ color: "rgba(255,255,255,.72)" }}>Diferenciadores</div>
            <div className="hr" style={{ background: "rgba(255,255,255,.12)" }} />
            <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,.86)", lineHeight: 1.7 }}>
              <li>Especialización por áreas</li>
              <li>Tecnología y agilidad</li>
              <li>Enfoque humano</li>
              <li>Ética y transparencia</li>
              <li>Atención a extranjeros y mercado local</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
