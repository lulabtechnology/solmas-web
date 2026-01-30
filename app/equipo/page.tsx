import { site, ASSETS } from "@/lib/site";

const team = [
  {
    name: "Ana Isabel C. Madrid",
    role: "CEO / Abogada Senior",
    image: ASSETS.team.ana,
    bullets: [
      "Egresada de la USMA (Derecho).",
      "Formación en ciencias políticas con énfasis en negocios internacionales (según formulario).",
      "Diplomado en procesos electorales (según formulario).",
      "Estudiante de maestría en Docencia Superior (según formulario).",
    ],
  },
  {
    name: "Luis Spadafora",
    role: "Socio / Abogado",
    image: ASSETS.team.luis,
    bullets: [
      "Credenciales pendientes de confirmar.",
      "Solicitar CV para completar el perfil profesional en el sitio.",
    ],
  },
] as const;

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Equipo</div>
        <h1 className="h2" style={{ marginTop: 10 }}>Profesionales</h1>
        <p className="p" style={{ marginTop: 12, maxWidth: 860 }}>
          Un equipo enfocado en excelencia técnica, trato humano y comunicación transparente.
        </p>

        <div className="grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(2, 1fr)", alignItems: "stretch" }}>
          {team.map((m) => (
            <div key={m.name} className="card">
              <div className="card-pad" style={{ display: "grid", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: 14, alignItems: "center" }}>
                  <img
                    src={m.image}
                    alt={m.name}
                    width={96}
                    height={96}
                    style={{ width: 96, height: 96, borderRadius: 18, objectFit: "cover", border: "1px solid rgba(15,23,42,.10)" }}
                    loading="lazy"
                  />
                  <div>
                    <h2 className="h3">{m.name}</h2>
                    <p className="p" style={{ marginTop: 4 }}>{m.role}</p>
                  </div>
                </div>

                <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(71,85,105,.95)", lineHeight: 1.7 }}>
                  {m.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a className="btn primary" href="/contacto">Agendar consulta</a>
                  <a
                    className="btn"
                    href={`mailto:${site.email}?subject=${encodeURIComponent("Solicitud de perfil profesional - SOLMAS")}`}
                  >
                    Solicitar perfil por correo
                  </a>
                </div>
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
    </main>
  );
}
