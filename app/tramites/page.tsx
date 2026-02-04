import TramitesMailtoForm from "@/components/TramitesMailtoForm";

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Trámites</div>
        <h1 className="h2" style={{ marginTop: 10 }}>
          Trámites y Solicitudes
        </h1>
        <p className="p" style={{ marginTop: 12, maxWidth: 860 }}>
          Selecciona el trámite y envíanos tu solicitud. Nuestro equipo revisará tu requerimiento y te orientará sobre los próximos pasos.
        </p>

        <div className="grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            ["Solicitud de certificaciones y constancias registrales", "Acompañamiento en gestiones registrales y solicitudes documentales."],
            ["Trámites notariales y protocolizaciones", "Preparación, revisión y coordinación de diligencias notariales."],
            ["Revisión documental para compraventas/donaciones", "Apoyo en preparación y verificación de documentación clave."],
            ["Otros servicios", "Si no ves tu trámite aquí, descríbelo y te indicamos cómo proceder."],
          ].map(([t, d]) => (
            <div key={t} className="card">
              <div className="card-pad">
                <h2 className="h3">{t}</h2>
                <p className="p" style={{ marginTop: 8 }}>
                  {d}
                </p>
              </div>
            </div>
          ))}
        </div>

        <TramitesMailtoForm />

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </main>
  );
}
