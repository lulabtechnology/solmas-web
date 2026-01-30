import type { Metadata } from "next";
import { PRACTICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Áreas de Práctica",
  description:
    "Áreas de práctica de SOLMAS: corporativo, notarías y registro, administrativo, propiedad intelectual, civil y familia.",
};

export default function AreasPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Áreas de práctica</div>
        <h1 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
          Especialización por áreas, atención a medida
        </h1>
        <p className="p" style={{ maxWidth: 920 }}>
          Estructuramos cada caso con claridad: diagnóstico, estrategia y ejecución. Selecciona el área que se ajusta a tu necesidad.
        </p>

        <div className="grid" style={{ marginTop: 18 }}>
          {PRACTICES.map((p) => (
            <div key={p.key} className="card">
              <h2 className="card-title" style={{ fontFamily: "var(--font-serif)", marginBottom: 8 }}>
                {p.title}
              </h2>
              <p className="p-muted" style={{ marginTop: 0 }}>{p.oneLiner}</p>
              <ul style={{ margin: "10px 0 0 0", paddingLeft: 18, color: "var(--ink-soft)", lineHeight: 1.9 }}>
                {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
