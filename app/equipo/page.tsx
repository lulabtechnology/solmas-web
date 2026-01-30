export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Equipo</div>
        <h1 className="h2" style={{ marginTop: 10 }}>Profesionales</h1>
        <p className="p" style={{ marginTop: 12, maxWidth: 860 }}>
          Un equipo enfocado en excelencia técnica, trato humano y comunicación transparente.
        </p>

        <div className="grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div className="card">
            <div className="card-pad">
              <img
                src="/assets/img/team/ana-isabel.jpg"
                alt="Ana Isabel C. Madrid"
                width={900}
                height={1125}
                style={{ borderRadius: 14, aspectRatio: "4/5", objectFit: "cover", border: "1px solid rgba(15,23,42,.10)" }}
                loading="lazy"
              />
              <h2 className="h3" style={{ marginTop: 14 }}>Ana Isabel C. Madrid</h2>
              <p className="p" style={{ marginTop: 6 }}>CEO / Abogada Senior</p>
              <ul className="p" style={{ marginTop: 10, paddingLeft: 18 }}>
                <li>Egresada de la USMA (Derecho).</li>
                <li>Formación en ciencias políticas con énfasis en negocios internacionales (según formulario).</li>
                <li>Diplomado en procesos electorales (según formulario).</li>
                <li>Estudiante de maestría en Docencia Superior (según formulario).</li>
              </ul>
              <a className="btn small" href="#" style={{ marginTop: 10 }}>Ver perfil/CV (placeholder)</a>
            </div>
          </div>

          <div className="card">
            <div className="card-pad">
              <img
                src="/assets/img/team/luis-spadafora.jpg"
                alt="Luis Spadafora"
                width={900}
                height={1125}
                style={{ borderRadius: 14, aspectRatio: "4/5", objectFit: "cover", border: "1px solid rgba(15,23,42,.10)" }}
                loading="lazy"
              />
              <h2 className="h3" style={{ marginTop: 14 }}>Luis Spadafora</h2>
              <p className="p" style={{ marginTop: 6 }}>Socio / Abogado</p>
              <p className="p" style={{ marginTop: 10 }}>
                Credenciales pendientes de confirmar. (Solicitar CV para completar perfil.)
              </p>
              <a className="btn small" href="#" style={{ marginTop: 10 }}>Ver perfil/CV (placeholder)</a>
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
