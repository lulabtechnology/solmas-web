import { site } from "@/lib/site";

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Trámites</div>
        <h1 className="h2" style={{ marginTop: 10 }}>Trámites y Solicitudes</h1>
        <p className="p" style={{ marginTop: 12, maxWidth: 860 }}>
          Gestione documentos y solicitudes con acompañamiento legal. Para iniciar, envíe su requerimiento por correo.
        </p>

        <div className="grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            ["Solicitud de certificaciones y constancias registrales","Acompañamiento en gestiones registrales y solicitudes documentales."],
            ["Trámites notariales y protocolizaciones","Preparación, revisión y coordinación de diligencias notariales."],
            ["Revisión documental para compraventas/donaciones","Apoyo en preparación y verificación de documentación clave."]
          ].map(([t,d]) => (
            <div key={t} className="card">
              <div className="card-pad">
                <h2 className="h3">{t}</h2>
                <p className="p" style={{ marginTop: 8 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 22 }}>
          <div className="card-pad" style={{ display: "grid", gap: 10 }}>
            <h2 className="h3">Enviar solicitud por correo</h2>
            <p className="p">
              Envíe un mensaje a <strong>{site.email}</strong> con su nombre, teléfono, tipo de trámite y detalles.
              Si necesita adjuntar archivos, inclúyalos en el correo.
            </p>
            <a className="btn primary" href={`mailto:${site.email}?subject=${encodeURIComponent("Solicitud de trámite - SOLMAS")}`}>
              Enviar correo
            </a>
            <p className="p" style={{ fontSize: 13 }}>
              Disclaimer: La información enviada es informativa y no crea relación abogado–cliente. Enviar información no garantiza relación profesional.
            </p>
          </div>
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
