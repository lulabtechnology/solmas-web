import type { Metadata } from "next";
import { LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de Cookies de SOLMAS. Tipos de cookies, finalidades y configuración.",
};

export default function CookiesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Legal</div>
        <h1 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
          Política de Cookies
        </h1>

        <p className="p">
          Esta política explica qué cookies usamos y cómo puedes gestionarlas. Documento base sujeto a ajustes según herramientas
          efectivamente instaladas (analítica/marketing) en el sitio.
        </p>

        <div className="hr" />

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>1. ¿Qué son cookies?</h2>
        <p className="p">
          Son archivos pequeños que se almacenan en tu dispositivo para recordar preferencias o mejorar la experiencia.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>2. Cookies necesarias</h2>
        <p className="p">
          Son esenciales para el funcionamiento del sitio (por ejemplo, recordar tu preferencia de cookies).
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>3. Cookies no esenciales</h2>
        <p className="p">
          Incluyen analítica y marketing. Solo se activan con tu consentimiento, si el sitio integra dichas herramientas.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>4. Gestionar preferencias</h2>
        <p className="p">
          Puedes aceptar, rechazar o configurar desde el banner de cookies o desde “Preferencias de cookies” en el pie de página.
        </p>

        <h2 className="h3" style={{ fontFamily: "var(--font-serif)" }}>5. Jurisdicción</h2>
        <p className="p">Esta política se rige por {LEGAL.jurisdiction}.</p>
      </div>
    </section>
  );
}
