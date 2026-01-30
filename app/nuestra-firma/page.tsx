import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Firma",
  description:
    "Conoce SOLMAS: firma boutique en Panamá con enfoque humano, ética, transparencia y soporte legal por áreas.",
};

export default function NuestraFirmaPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Nuestra firma</div>
        <h1 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
          Una firma boutique para decisiones importantes
        </h1>
        <p className="p" style={{ maxWidth: 900 }}>
          SOLMAS acompaña a extranjeros y panameños con un enfoque profesional, confiable y cercano.
          Trabajamos por áreas de práctica para ofrecer criterio técnico, orden documental y comunicación clara.
        </p>

        <div className="grid grid-2" style={{ marginTop: 18 }}>
          <div className="card">
            <h2 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>Cómo trabajamos</h2>
            <ol style={{ margin: 0, paddingLeft: 18, color: "var(--ink-soft)", lineHeight: 1.9 }}>
              <li><strong>Diagnóstico inicial:</strong> entendemos contexto y documentos disponibles.</li>
              <li><strong>Estrategia:</strong> definimos ruta, prioridades y riesgos relevantes.</li>
              <li><strong>Ejecución:</strong> gestionamos trámites, contratos y actuaciones necesarias.</li>
              <li><strong>Seguimiento:</strong> mantenemos trazabilidad y comunicación clara.</li>
            </ol>
          </div>

          <div className="card">
            <h2 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>Principios</h2>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink-soft)", lineHeight: 1.9 }}>
              <li>Ética y transparencia</li>
              <li>Enfoque humano y confidencialidad</li>
              <li>Uso de tecnología para orden y agilidad</li>
              <li>Especialización por áreas</li>
            </ul>
            <p className="p-muted" style={{ marginTop: 12 }}>
              La información compartida se evalúa con discreción. La relación abogado–cliente se confirma formalmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
