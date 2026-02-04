import { ASSETS, site } from "@/lib/site";

const team = [
  {
    name: "Ana Isabel Madrid",
    role: "Socio / Abogado",
    image: ASSETS.team.ana,
    bullets: [
      "Egresada de la USMA (Derecho).",
      "Formación en Derecho y Ciencias Políticas con énfasis en negocios internacionales.",
      "Especialización en procesos electorales y democracia.",
    ],
  },
  {
    name: "Luis Spadafora",
    role: "Socio / Abogado",
    image: ASSETS.team.luis,
    bullets: [
      "Abogado panameño, egresado de la Universidad Católica Santa María la Antigua (USMA), con formación en Derecho y Ciencias Políticas.",
      "Experiencia en derecho penal, corporativo, bienes raíces y migración, asesorando a personas naturales y jurídicas.",
      "Elaboración y revisión de contratos, estructuración de sociedades y fundaciones de interés privado, y trámites ante instituciones públicas.",
      "Profesional bilingüe, con enfoque práctico, ético y orientado a soluciones legales claras y eficientes.",
    ],
  },
] as const;

function EquipoHero() {
  return (
    <section style={{ position: "relative", minHeight: "44vh", display: "grid", placeItems: "center" }}>
      <picture style={{ position: "absolute", inset: 0 }}>
        <source media="(max-width: 720px)" srcSet={ASSETS.hero.teamMobile} />
        <img
          src={ASSETS.hero.teamDesktop}
          alt="Equipo SOLMAS"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          loading="eager"
        />
      </picture>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(2,6,23,.70) 0%, rgba(2,6,23,.35) 55%, rgba(2,6,23,.18) 100%)",
        }}
      />

      <div className="container" style={{ position: "relative", padding: "52px 0" }}>
        <div style={{ maxWidth: 760 }}>
          <div className="badge" style={{ marginBottom: 14, color: "rgba(255,255,255,.92)" }}>
            SOLMAS · Equipo
          </div>
          <h1 className="h1" style={{ color: "#fff" }}>
            Profesionales
          </h1>
          <p className="p" style={{ marginTop: 10, color: "rgba(255,255,255,.80)", maxWidth: 720 }}>
            Un equipo enfocado en excelencia técnica, trato humano y comunicación transparente.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px){
          section{ min-height: 52vh !important; }
        }
      `}</style>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <EquipoHero />

      <section className="section">
        <div className="container">
          <div className="grid" style={{ marginTop: 8, gridTemplateColumns: "repeat(2, 1fr)", alignItems: "stretch" }}>
            {team.map((m) => (
              <div key={m.name} className="card">
                <div className="card-pad" style={{ display: "grid", gap: 14 }}>
                  {/* Imagen NO recortada */}
                  <div
                    className="grid"
                    style={{
                      gridTemplateColumns: "min(220px, 34%) 1fr",
                      gap: 16,
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 18,
                        overflow: "hidden",
                        border: "1px solid rgba(15,23,42,.10)",
                        background: "rgba(176,141,87,.06)",
                        minHeight: 220,
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <img
                        src={m.image}
                        alt={m.name}
                        width={520}
                        height={680}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <h2 className="h3">{m.name}</h2>
                      <p className="p" style={{ marginTop: 6 }}>
                        {m.role}
                      </p>

                      <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <a className="btn primary" href="/contacto">
                          Agendar consulta
                        </a>
                        <a className="btn" href={`mailto:${site.email}?subject=${encodeURIComponent("Consulta - SOLMAS")}`}>
                          Escribir correo
                        </a>
                      </div>
                    </div>
                  </div>

                  <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(71,85,105,.95)", lineHeight: 1.7 }}>
                    {m.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 980px){
              .grid{ grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>
    </main>
  );
}
