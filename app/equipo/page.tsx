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
      "Estudiante de maestría en Docencia Superior",
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
    <section className="equipoHero">
      <picture className="equipoHeroBg">
        <source media="(max-width: 720px)" srcSet={ASSETS.hero.teamMobile} />
        <img
          className="equipoHeroImg"
          src={ASSETS.hero.teamDesktop}
          alt="Equipo SOLMAS"
          loading="eager"
        />
      </picture>

      <div className="equipoHeroOverlay" aria-hidden="true" />

      <div className="container equipoHeroInner">
        <div style={{ maxWidth: 760 }}>
          <div
            className="badge"
            style={{
              marginBottom: 14,
              color: "rgba(255,255,255,.92)",
              borderColor: "rgba(217,194,154,.35)",
              background: "rgba(176,141,87,.14)",
            }}
          >
            SOLMAS · Equipo
          </div>

          <h1 className="h1" style={{ color: "#fff" }}>
            Profesionales
          </h1>

          <p
            className="p"
            style={{
              marginTop: 10,
              color: "rgba(255,255,255,.82)",
              maxWidth: 720,
              fontSize: 17,
            }}
          >
            Un equipo enfocado en excelencia técnica, trato humano y comunicación transparente.
          </p>
        </div>
      </div>

      <style>{`
        .equipoHero{
          position: relative;
          min-height: 62vh;
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .equipoHeroBg{
          position: absolute;
          inset: 0;
        }

        /* ✅ CLAVE: no recorta */
        .equipoHeroImg{
          width: 100%;
          height: 100%;
          object-fit: contain;         /* ✅ muestra completa */
          object-position: center;     /* centrada */
          background: #0b1220;         /* para que no se vea blanco si sobra espacio */
        }

        .equipoHeroOverlay{
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(2,6,23,.72) 0%, rgba(2,6,23,.40) 55%, rgba(2,6,23,.18) 100%);
        }

        .equipoHeroInner{
          position: relative;
          padding: 56px 0;
        }

        /* ✅ Mobile: más alto + overlay vertical + imagen completa */
        @media (max-width: 720px){
          .equipoHero{ min-height: 70vh; }
          .equipoHeroInner{ padding: 46px 0; }

          .equipoHeroOverlay{
            background: linear-gradient(180deg, rgba(2,6,23,.72) 0%, rgba(2,6,23,.42) 60%, rgba(2,6,23,.18) 100%);
          }

          .equipoHeroImg{
            object-fit: contain;     /* ✅ no recorta en móvil */
            object-position: center;
          }
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
          <div
            className="grid equipoGrid"
            style={{
              marginTop: 8,
              gridTemplateColumns: "repeat(2, 1fr)",
              alignItems: "stretch",
            }}
          >
            {team.map((m) => (
              <div key={m.name} className="card">
                <div className="card-pad" style={{ display: "grid", gap: 14 }}>
                  {/* ✅ Imagen NO recortada en tarjeta */}
                  <div
                    className="grid equipoCardTop"
                    style={{
                      gridTemplateColumns: "min(220px, 34%) 1fr",
                      gap: 16,
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="equipoCardImgWrap"
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
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",     // ✅ completo
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
                        <a
                          className="btn"
                          href={`mailto:${site.email}?subject=${encodeURIComponent("Consulta - SOLMAS")}`}
                        >
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
              .equipoGrid{ grid-template-columns: 1fr !important; }
              .equipoCardTop{ grid-template-columns: 1fr !important; }
              .equipoCardImgWrap{ min-height: 320px !important; }
            }
          `}</style>
        </div>
      </section>
    </main>
  );
}
