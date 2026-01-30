"use client";

import { useMemo, useState } from "react";
import { PRACTICES, SITE } from "@/lib/site";

type Props = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
};

function enc(v: string) {
  return encodeURIComponent(v);
}

export default function MailtoForm({
  title = "Cuéntanos tu caso",
  subtitle = "Respuesta inicial en 24–48 horas hábiles (pendiente de confirmar).",
  ctaLabel = "Enviar por correo",
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState<string>(PRACTICES[0] ?? "Derecho Corporativo y Mercantil");
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = `Solicitud de contacto — ${SITE.name}`;
    const body = [
      `Nombre: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Teléfono: ${phone || "-"}`,
      `Área: ${area || "-"}`,
      ``,
      `Mensaje:`,
      `${message || "-"}`,
      ``,
      `---`,
      `Nota: Este mensaje es informativo y no crea relación abogado–cliente.`,
    ].join("\n");

    return `mailto:${SITE.email}?subject=${enc(subject)}&body=${enc(body)}`;
  }, [name, email, phone, area, message]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOk(true);
    // abre el cliente de correo
    window.location.href = mailtoHref;
    // opcional: limpiar
    // setName(""); setEmail(""); setPhone(""); setMessage("");
  }

  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <div className="card-pad" style={{ display: "grid", gap: 12 }}>
            <div>
              <h2 className="h2">{title}</h2>
              <p className="p" style={{ marginTop: 8, maxWidth: 820 }}>
                {subtitle}
              </p>
            </div>

            <form onSubmit={onSubmit} className="grid" style={{ gap: 12 }}>
              <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                <div>
                  <label className="label">Nombre</label>
                  <input
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                <div>
                  <label className="label">Teléfono</label>
                  <input
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+507 …"
                  />
                </div>
                <div>
                  <label className="label">Tipo de caso</label>
                  <select className="select" value={area} onChange={(e) => setArea(e.target.value)}>
                    {PRACTICES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="label">Mensaje</label>
                <textarea
                  className="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos brevemente tu situación (sin incluir información sensible)."
                  rows={6}
                  required
                />
                <p className="micro" style={{ marginTop: 8 }}>
                  Este formulario no crea relación abogado–cliente. Evita incluir información sensible hasta confirmar formalmente el alcance del servicio.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <button type="submit" className="btn primary">
                  {ctaLabel}
                </button>
                <a className="btn" href={`mailto:${SITE.email}`}>
                  Escribir a {SITE.email}
                </a>
                {ok ? <span className="micro">Abriendo tu cliente de correo…</span> : null}
              </div>
            </form>
          </div>
        </div>

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
