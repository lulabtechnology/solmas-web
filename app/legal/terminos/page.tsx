import type { Metadata } from "next";
import { LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y Condiciones del sitio web de SOLMAS. Uso, limitaciones y disclaimers.",
};

export default function TerminosPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Legal</div>
        <h1 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
          Términos y Condiciones
        </h1>

        <p className="p">
          Al acceder y utilizar este sitio web (el “Sitio”), aceptas estos Términos y Condiciones. Si no estás de acuerdo, por favor no uses el Sitio.
          Documento base sujeto a ajuste según operación real. Jurisdicción: {LEGAL.jurisdiction}.
        </p>

        <div className="hr" />

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>1. Uso del sitio</h2>
        <p className="p">
          El contenido es informativo y no constituye asesoría legal. El uso del Sitio no crea relación abogado–cliente.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>2. Propiedad intelectual</h2>
        <p className="p">
          Textos, marcas, logotipos y diseño del Sitio pertenecen a <strong>{LEGAL.placeholders.legalName}</strong> o a sus licenciantes.
          No se permite reproducción sin autorización, salvo usos permitidos por ley.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>3. Enlaces externos</h2>
        <p className="p">
          El Sitio puede contener enlaces a terceros. No controlamos su contenido ni asumimos responsabilidad por ellos.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>4. Limitación de responsabilidad</h2>
        <p className="p">
          La Firma no garantiza que el Sitio esté libre de errores o interrupciones. En la medida permitida, no será responsable por daños
          derivados del uso o imposibilidad de uso del Sitio.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>5. Comunicaciones</h2>
        <p className="p">
          Enviar información por el Sitio o por correo electrónico no garantiza aceptación del asunto ni crea relación profesional.
          La representación se confirma por la Firma.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>6. Modificaciones</h2>
        <p className="p">
          Podemos actualizar estos términos en cualquier momento. La versión vigente se publicará en esta página.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>7. Jurisdicción</h2>
        <p className="p">
          Estos términos se rigen por las leyes de la {LEGAL.jurisdiction}. Cualquier disputa se someterá a los tribunales competentes en Panamá.
        </p>
      </div>
    </section>
  );
}
