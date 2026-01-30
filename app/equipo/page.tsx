import type { Metadata } from "next";
import { ASSETS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Conoce el equipo de SOLMAS. Perfil de Ana Isabel C. Madrid y Luis Spadafora (pendiente de confirmar credenciales).",
};

function ProfileImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={900}
      height={1125}
      style={{ borderRadius: 16, border: "1px solid rgba(11,27,43,.12)", aspectRatio: "4/5", objectFit: "cover" }}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

export default function EquipoPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Equipo</div>
        <h1 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
          Cercanía, criterio y confidencialidad
        </h1>
        <p className="p" style={{ maxWidth: 920 }}>
          Un acompañamiento profesional exige comunicación clara y seguimiento. Nuestro equipo se organiza por áreas para resolver con rigor y orden documental.
        </p>

        <div className="grid" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="grid grid-2" style={{ alignItems: "start" }}>
              <div>
                <ProfileImage src={ASSETS.teamAna} alt="Ana Isabel C. Madrid" />
              </div>
              <div>
                <div className="kicker">CEO / Abogada Senior</div>
                <h2 className="h2" style={{ margin: "10px 0 8px 0", fontFamily: "var(--font-serif)" }}>
                  Ana Isabel C. Madrid
                </h2>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink-soft)", lineHeight: 1.9 }}>
                  <li>Egresada de la USMA (Derecho).</li>
                  <li>Formación en ciencias políticas con énfasis en negocios internacionales (según formulario).</li>
                  <li>Diplomado en procesos electorales (según formulario).</li>
                  <li>Estudiante de maestría en Docencia Superior (según formulario).</li>
                </ul>

                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a className="btn btn-outline" href="#" aria-label="Ver CV (pendiente de subir)">
                    Ver perfil / CV
                  </a>
                </div>

                <p className="p-muted" style={{ marginTop: 12 }}>
                  *CV disponible: pendiente de adjuntar archivo.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="grid grid-2" style={{ alignItems: "start" }}>
              <div>
                <ProfileImage src={ASSETS.teamLuis} alt="Luis Spadafora" />
              </div>
              <div>
                <div className="kicker">Socio / Abogado</div>
                <h2 className="h2" style={{ margin: "10px 0 8px 0", fontFamily: "var(--font-serif)" }}>
                  Luis Spadafora
                </h2>

                <p className="p" style={{ marginTop: 0 }}>
                  Credenciales pendientes de confirmar. Perfil profesional en preparación.
                </p>

                <div className="hr" />

                <p className="p-muted">
                  Para completar esta sección: enviar CV, áreas principales de práctica y experiencia relevante.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="kicker">Confidencialidad</div>
            <p className="p" style={{ marginTop: 8, maxWidth: 980 }}>
              Aún no publicamos testimonios sin consentimiento del cliente. Si se publican en el futuro, se permitirá ocultar nombres o información sensible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
