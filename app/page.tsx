import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="kicker">Áreas de práctica</div>
          <h2 className="h2" style={{ marginTop: 10 }}>
            Servicios legales con enfoque estratégico
          </h2>
          <p className="p" style={{ marginTop: 10, maxWidth: 760 }}>
            Estructuramos soluciones por especialidad, con comunicación clara y ejecución responsable.
          </p>

          <div
            className="grid"
            style={{
              marginTop: 22,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {[
              ["Derecho Corporativo y Mercantil", "Estructura societaria, contratos y soporte continuo para empresas."],
              ["Derecho Administrativo y Regulatorio", "Gestiones ante entidades y acompañamiento en permisos y licencias."],
              // ✅ QUITADO: Propiedad Intelectual
              ["Derecho Civil y Patrimonial", "Asuntos patrimoniales, compraventas y conflictos civiles."],
              ["Derecho de Familia", "Procesos familiares con manejo prudente y enfoque humano."],
            ].map(([t, d]) => (
              <div key={t} className="card">
                <div className="card-pad">
                  <h3 className="h3">{t}</h3>
                  <p className="p" style={{ marginTop: 8 }}>
                    {d}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18 }}>
            <a className="btn" href="/areas-de-practica">
              Ver todas las áreas
            </a>
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
                <a className="btn primary" href="/contacto">
                  Agendar consulta
                </a>
                <a className="btn" href="/nuestra-firma">
                  Conocer la firma
                </a>
              </div>
            </div>
          </div>

          {/* ✅ Compromiso Social */}
          <div className="card" style={{ marginTop: 18 }}>
            <div className="card-pad" style={{ display: "grid", gap: 10 }}>
              <div className="kicker">Compromiso social</div>
              <h2 className="h2">Responsabilidad con nuestra comunidad</h2>
              <p className="p" style={{ maxWidth: 980 }}>
                Creemos que el ejercicio del Derecho implica una responsabilidad con la sociedad. Por ello,
                participamos activamente en iniciativas de impacto social, contribuyendo a la formación de una
                asociación sin fines de lucro dedicada al apoyo de mujeres con endometriosis y respaldando torneos
                de tenis en Panamá, en apoyo al deporte nacional. Nuestro compromiso se basa en la ética, la
                solidaridad y el desarrollo integral de nuestra comunidad.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn" href="/nuestra-firma">
                  Ver más sobre SOLMAS
                </a>
                <a className="btn primary" href="/contacto">
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px){
          .grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
