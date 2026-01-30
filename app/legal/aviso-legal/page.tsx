import type { Metadata } from "next";
import { LEGAL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso Legal de SOLMAS. Información informativa, no asesoría legal, y disclaimers de relación profesional.",
};

export default function AvisoLegalPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Legal</div>
        <h1 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
          Aviso Legal
        </h1>

        <p className="p">
          El contenido de este sitio es de carácter informativo. No constituye asesoría legal, ni sustituye una consulta formal.
        </p>

        <div className="hr" />

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>1. No relación abogado–cliente</h2>
        <p className="p">
          La visita al sitio, el envío de formularios o correos, o la comunicación por cualquier medio <strong>no crea</strong> relación abogado–cliente.
          La relación profesional se establece únicamente mediante confirmación expresa de la Firma.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>2. Confidencialidad del contacto</h2>
        <p className="p">
          Enviar información no garantiza que la Firma asuma el asunto. Evita compartir información altamente sensible hasta recibir confirmación.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>3. Exactitud</h2>
        <p className="p">
          Aunque procuramos mantener información actualizada, no garantizamos que el contenido sea completo o vigente para todos los casos.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>4. Jurisdicción</h2>
        <p className="p">
          Este aviso se rige por las leyes de la {LEGAL.jurisdiction}. Contacto:{" "}
          <a href={`mailto:${SITE.email}`} style={{ textDecoration: "underline" }}>{SITE.email}</a>.
        </p>
      </div>
    </section>
  );
}
