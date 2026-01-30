import { site } from "@/lib/site";

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Contacto</div>
        <h1 className="h2" style={{ marginTop: 10 }}>Conversemos</h1>
        <p className="p" style={{ marginTop: 12, maxWidth: 860 }}>
          Para iniciar, contáctenos por WhatsApp o correo. Responderemos con la mayor brevedad posible.
        </p>

        <div className="grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="card"><div className="card-pad"><div className="kicker">Teléfono</div><p className="p" style={{ marginTop: 8 }}>{site.phone}</p></div></div>
          <div className="card"><div className="card-pad"><div className="kicker">Correo</div><p className="p" style={{ marginTop: 8 }}>{site.email}</p></div></div>
          <div className="card"><div className="card-pad"><div className="kicker">Dirección</div><p className="p" style={{ marginTop: 8 }}>{site.address}</p></div></div>
        </div>

        <div className="card" style={{ marginTop: 22 }} id="form">
          <div className="card-pad" style={{ display: "grid", gap: 10 }}>
            <h2 className="h3">Enviar mensaje por correo</h2>
            <p className="p">
              Para proteger su confidencialidad, recomendamos enviar su información por correo.
            </p>
            <a className="btn primary" href={`mailto:${site.email}?subject=${encodeURIComponent("Consulta - SOLMAS")}`}>
              Escribir correo
            </a>
            <p className="p" style={{ fontSize: 13 }}>
              Disclaimer: La información aquí es informativa y no crea relación abogado–cliente. Enviar información no garantiza relación profesional.
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
