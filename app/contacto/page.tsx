import type { Metadata } from "next";
import MailtoForm from "@/components/MailtoForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto SOLMAS. Agenda consulta y comparte tu caso. Atención a extranjeros y panameños.",
};

export default function ContactoPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Contacto</div>
        <h1 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
          Agenda una consulta
        </h1>
        <p className="p" style={{ maxWidth: 920 }}>
          Cuéntanos tu necesidad y te indicaremos el alcance y modalidad. Si necesitas adjuntar documentos, envíalos por correo.
        </p>

        <div className="grid grid-2" style={{ marginTop: 18, alignItems: "start" }}>
          <div className="card">
            <h2 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>Datos</h2>
            <div className="hr" />
            <p className="p" style={{ margin: 0 }}><strong>Teléfono:</strong> {SITE.phoneDisplay}</p>
            <p className="p" style={{ margin: "8px 0 0 0" }}><strong>Correo:</strong> {SITE.email}</p>
            <p className="p" style={{ margin: "8px 0 0 0" }}><strong>Dirección:</strong> {SITE.address}</p>

            <div className="hr" />

            <p className="p-muted">
              Disclaimer: La información es informativa y no crea relación abogado–cliente. Enviar información no garantiza relación profesional.
            </p>
          </div>

          <MailtoForm title="Formulario de contacto" intent="contacto" />
        </div>
      </div>
    </section>
  );
}
