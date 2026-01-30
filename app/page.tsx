import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="kicker">Áreas de práctica</div>
          <h2 className="h2" style={{ marginTop: 10 }}>Servicios legales con enfoque estratégico</h2>
          <p className="p" style={{ marginTop: 10, maxWidth: 760 }}>
            Estructuramos soluciones por especialidad, con comunicación clara y ejecución responsable.
          </p>

          <div className="grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(3, 1fr)" }}>
            {[
              ["Derecho Corporativo y Mercantil", "Estructura societaria, contratos y soporte continuo para empresas."],
              ["Notarías y Registro Público", "Trámites notariales, inscripciones y diligencias documentales."],
              ["Derecho Administrativo y Regulatorio", "Gestiones ante entidades y acompañamiento en permisos y licencias."],
              ["Propiedad Intelectual", "Registro y protección de marcas y nombres comerciales."],
              ["Derecho Civil y Patrimonial", "Asuntos patrimoniales, compraventas y conflictos civiles."],
              ["Derecho de Familia", "Procesos familiares con manejo prudente y enfoque humano."]
            ].map(([t, d]) => (
              <div key={t} className="card">
                <div className="card-pad">
                  <h3 className="h3">{t}</h3>
                  <p className="p" style={{ marginTop: 8 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18 }}>
            <a className="btn" href="/areas-de-practica">Ver todas las áreas</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card">
            <div className="card-pad" style={{ display: "grid", gap: 12 }}>
              <div className="kicker">Nuestro compromiso</div>
              <h2 className="h2">Rigurosidad legal con cercanía humana</h2>
              <p className="p" style={{ maxWidth: 900 }}>
                En SOLMAS combinamos especialización por áreas, herramientas tecnológicas y una atención transparente.
                Cada caso se aborda con diagnóstico, estrategia, ejecución y seguimiento.
              </p>

              <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginTop: 8 }}>
                {["Diagnóstico inicial", "Estrategia", "Ejecución", "Seguimiento"].map((x) => (
                  <div key={x} className="card" style={{ boxShadow: "none" }}>
                    <div className="card-pad">
                      <span className="badge">{x}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn primary" href="/contacto">Agendar consulta</a>
                <a className="btn" href="/nuestra-firma">Conocer la firma</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 980px){
          .grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
