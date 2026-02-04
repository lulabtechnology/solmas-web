"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/lib/site";

function enc(v: string) {
  return encodeURIComponent(v);
}

export default function ContactoMailtoForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `Contacto — ${SITE.name}`;
    const body = [
      `Nombre: ${name || "-"}`,
      `Teléfono: ${phone || "-"}`,
      `Email: ${email || "-"}`,
      ``,
      `Mensaje:`,
      `${details || "-"}`,
      ``,
      `---`,
      `Nota: Este mensaje es informativo y no crea relación abogado–cliente.`,
    ].join("\n");

    return `mailto:${SITE.email}?subject=${enc(subject)}&body=${enc(body)}`;
  }, [name, phone, email, details]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <div className="card" id="form" style={{ marginTop: 22 }}>
      <div className="card-pad" style={{ display: "grid", gap: 12 }}>
        <h2 className="h3">Enviar mensaje</h2>
        <p className="p" style={{ marginTop: -6 }}>
          Completa el formulario y se abrirá tu cliente de correo con el mensaje listo para enviar.
        </p>

        <form onSubmit={onSubmit} className="grid" style={{ gap: 12 }}>
          <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            <div>
              <label className="label">Nombre</label>
              <input className="input" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Tu nombre completo" />
            </div>
            <div>
              <label className="label">Teléfono</label>
              <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="+507 …" />
            </div>
          </div>

          <div>
            <label className="label">Correo</label>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="tu@email.com" />
          </div>

          <div>
            <label className="label">¿Qué necesitas?</label>
            <textarea
              className="textarea"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
              placeholder="Describe brevemente tu solicitud (evita incluir información sensible)."
              rows={6}
            />
            <p className="p" style={{ marginTop: 8, fontSize: 13 }}>
              Disclaimer: La información aquí es informativa y no crea relación abogado–cliente. Enviar información no garantiza relación profesional.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="submit" className="btn primary">
              Enviar por correo
            </button>
            <a className="btn" href={`mailto:${SITE.email}`}>
              Escribir a {SITE.email}
            </a>
          </div>
        </form>
      </div>

      <style>{`
        @media (max-width: 980px){
          .grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
