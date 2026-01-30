import type { Metadata } from "next";
import { LEGAL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de Privacidad de SOLMAS. Tratamiento de datos, finalidad, derechos y contacto.",
};

export default function PrivacidadPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Legal</div>
        <h1 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
          Política de Privacidad
        </h1>

        <p className="p">
          Esta Política de Privacidad describe cómo <strong>{LEGAL.placeholders.legalName}</strong> (en adelante, “SOLMAS” o “la Firma”)
          recopila y trata información a través de este sitio web. Esta es una plantilla base y puede requerir ajustes según
          la operación real del sitio y obligaciones aplicables en {LEGAL.jurisdiction}.
        </p>

        <div className="hr" />

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>1. Responsable</h2>
        <p className="p">
          Responsable: <strong>{LEGAL.placeholders.legalName}</strong> — RUC: <strong>{LEGAL.placeholders.ruc}</strong>.
          Dirección: <strong>{LEGAL.placeholders.address}</strong>.
          Contacto: <a href={`mailto:${SITE.email}`} style={{ textDecoration: "underline" }}>{SITE.email}</a>.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>2. Datos que podemos recopilar</h2>
        <ul style={{ color: "var(--ink-soft)", lineHeight: 1.9 }}>
          <li>Datos de contacto: nombre, correo, teléfono.</li>
          <li>Información que el usuario decida incluir en su mensaje.</li>
          <li>Datos técnicos básicos (por ejemplo, tipo de navegador), si se habilitan analíticas.</li>
        </ul>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>3. Finalidades</h2>
        <ul style={{ color: "var(--ink-soft)", lineHeight: 1.9 }}>
          <li>Responder consultas y solicitudes.</li>
          <li>Coordinar reuniones y comunicaciones relacionadas.</li>
          <li>Mejorar el sitio (si se habilitan cookies/analíticas no esenciales con consentimiento).</li>
        </ul>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>4. Base de tratamiento</h2>
        <p className="p">
          Tratamos datos en la medida necesaria para atender solicitudes y comunicaciones iniciadas por el usuario.
          Para cookies no esenciales (analítica/marketing), el tratamiento se basa en el consentimiento.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>5. Confidencialidad y relación profesional</h2>
        <p className="p">
          Enviar información por este sitio <strong>no crea automáticamente</strong> una relación abogado–cliente.
          La representación legal se confirma formalmente por la Firma. No envíes información sensible si no has recibido
          confirmación de aceptación del asunto.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>6. Conservación</h2>
        <p className="p">
          Conservaremos la información el tiempo razonable para atender la solicitud y cumplir obligaciones aplicables.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>7. Derechos</h2>
        <p className="p">
          Puedes solicitar acceso, rectificación o actualización de tus datos escribiendo a{" "}
          <a href={`mailto:${SITE.email}`} style={{ textDecoration: "underline" }}>{SITE.email}</a>.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>8. Transferencias</h2>
        <p className="p">
          No compartimos datos con terceros salvo para operar el sitio (proveedores tecnológicos) o por requerimiento legal.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>9. Seguridad</h2>
        <p className="p">
          Aplicamos medidas razonables para proteger la información. Ningún sistema es 100% infalible; evita enviar
          información altamente sensible sin coordinación previa.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>10. Jurisdicción</h2>
        <p className="p">Esta política se rige por las leyes de la {LEGAL.jurisdiction}.</p>
      </div>
    </section>
  );
}
