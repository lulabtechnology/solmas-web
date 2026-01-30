const areas = [
  ["Derecho Corporativo y Mercantil","Contratos comerciales, constitución de sociedades (S.A., SRL y equivalentes), soporte a empresas, actas y reformas, acompañamiento estratégico."],
  ["Notarías y Registro Público","Trámites notariales, compraventas, donaciones, inscripción/registro, diligencias documentales. (Fundaciones/fideicomisos: si aplica, pendiente de confirmar)."],
  ["Derecho Administrativo y Regulatorio","Licencias, permisos, idoneidad, reclamos y gestiones ante entidades (DGI, Migración, Aduanas y otras)."],
  ["Propiedad Intelectual","Nombres comerciales, marcas, protección y gestión de registro."],
  ["Derecho Civil y Patrimonial","Sucesiones, asuntos patrimoniales, compraventa de bienes, conflictos civiles."],
  ["Derecho de Familia","Matrimonios, divorcios, patria potestad, custodia, pensiones alimenticias, tutelas/curatelas, régimen económico matrimonial (si aplica)."]
];

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Áreas</div>
        <h1 className="h2" style={{ marginTop: 10 }}>Áreas de práctica</h1>
        <p className="p" style={{ marginTop: 12, maxWidth: 860 }}>
          Estructuramos la atención por especialidad para brindar claridad desde el inicio y ejecutar con rigor.
        </p>

        <div className="grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(2, 1fr)" }}>
          {areas.map(([t, d]) => (
            <div key={t} className="card">
              <div className="card-pad">
                <h2 className="h3">{t}</h2>
                <p className="p" style={{ marginTop: 8 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </main>
  );
}

