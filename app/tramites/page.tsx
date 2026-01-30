import type { Metadata } from "next";
import MailtoForm from "@/components/MailtoForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trámites y Solicitudes",
  description:
    "Trámites y Solicitudes en SOLMAS: certificaciones registrales, trámites notariales y revisión/preparación documental.",
};

export default function TramitesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Trámites y Solicitudes</div>
        <h1 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
          Gestione documentos con acompañamiento legal
        </h1>
        <p className="p" style={{ maxWidth: 920 }}>
          Podemos apoyar en gestiones documentales y trámites, verificando requisitos y manteniendo trazabilidad.
          Si necesitas enviar archivos, envíalos por correo indicando tu nombre y el tipo de trámite.
        </p>

        <div className="grid grid-2" style={{ marginTop: 18, alignItems: "start" }}>
          <div className="card">
            <h2 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>Servicios (general)</h2>
            <ol style={{ margin: 0, paddingLeft: 18, color: "var(--ink-soft)", lineHeight: 1.9 }}>
              <li>Solicitud de certificaciones y constancias registrales</li>
              <li>Trámites notariales y protocolizaciones</li>
              <li>Preparación y revisión documental para compraventas/donaciones</li>
            </ol>
            <div className="hr" />
            <p className="p-muted">
              Para adjuntos: envía documentos a <a href={`mailto:${SITE.email}`} style={{ textDecoration: "underline" }}>{SITE.email}</a>.
            </p>
          </div>

          <MailtoForm title="Formulario de trámites" intent="tramite" />
        </div>
      </div>
    </section>
  );
}
