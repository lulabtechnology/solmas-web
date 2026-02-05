export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Nuestra firma</div>
        <h1 className="h2" style={{ marginTop: 10 }}>
          Boutique legal en Panamá
        </h1>

        <p className="p" style={{ marginTop: 12, maxWidth: 920 }}>
          En SOLMAS brindamos asesoría legal estratégica con estándares corporativos, comunicación clara y un enfoque
          humano. Priorizamos ética, transparencia y el uso responsable de tecnología para agilizar procesos y dar
          seguimiento oportuno a cada asunto.
        </p>

        <div className="grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            ["Enfoque", "Diagnóstico claro, estrategia y ejecución responsable."],
            ["Trato humano", "Cercanía, discreción y comunicación transparente."],
            ["Eficiencia", "Procesos ordenados y soporte ágil en cada etapa."],
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

        <div className="card" style={{ marginTop: 18 }}>
          <div className="card-pad" style={{ display: "grid", gap: 10 }}>
            <div className="kicker">Compromiso social</div>
            <h2 className="h2">Responsabilidad con la sociedad</h2>
            <p className="p" style={{ maxWidth: 980 }}>
              Creemos que el ejercicio del Derecho implica una responsabilidad con la sociedad. Por ello,
              participamos activamente en iniciativas de impacto social, contribuyendo a la formación de una
              asociación sin fines de lucro dedicada al apoyo de mujeres con endometriosis y respaldando torneos
              de tenis en Panamá, en apoyo al deporte nacional. Nuestro compromiso se basa en la ética, la
              solidaridad y el desarrollo integral de nuestra comunidad.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn" href="/equipo">
                Conocer al equipo
              </a>
              <a className="btn primary" href="/contacto">
                Agendar consulta
              </a>
            </div>
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
