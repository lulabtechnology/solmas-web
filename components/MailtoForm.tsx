"use client";

import { useMemo, useState } from "react";
import { PRACTICES, SITE } from "@/lib/site";

type Props = {
  title: string;
  subtitle?: string;
  intent: "contacto" | "tramite";
};

export default function MailtoForm({ title, subtitle, intent }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState(PRACTICES[0]?.title ?? "Derecho Corporativo y Mercantil");
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(false);

  const subject = useMemo(() => {
    return intent === "tramite" ? `Trámite/Solicitud — ${name || "Cliente"}` : `Consulta — ${name || "Cliente"}`;
  }, [intent, name]);

  const body = useMemo(() => {
    const lines = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Teléfono: ${phone}`,
      `Tipo: ${area}`,
      "",
      "Detalle:",
      message,
      "",
      "—",
      "Nota: Si necesitas adjuntar documentos, envíalos directamente a este correo indicando tu nombre y el tipo de trámite/caso.",
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [name, email, phone, area, message]);

  const mailto = useMemo(() => {
    return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }, [subject, body]);

  const canSend = name.trim() && email.trim() && message.trim();

  return (
    <div className="card">
      <h2 className="h3" style={{ margin: 0 }}>{title}</h2>
      {subtitle ? <p className="p" style={{ marginTop: 8 }}>{subtitle}</p> : null}

      <div className="hr" />

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!canSend) return;
          window.location.href = mailto;
          setOk(true);
        }}
      >
        <div className="grid grid-2">
          <div className="field">
            <span className="label">Nombre</span>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="field">
            <span className="label">Email</span>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>

        <div className="grid grid-2">
          <div className="field">
            <span className="label">Teléfono</span>
            <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="field">
            <span className="label">Tipo de caso / área</span>
            <select className="select" value={area} onChange={(e) => setArea(e.target.value)}>
              {PRACTICES.map((p) => (
                <option key={p.key} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <span className="label">Mensaje</span>
          <textarea className="textarea" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>

        <label className="checkRow">
          <input type="checkbox" required />
          <span>
            He leído y acepto la <a href="/legal/privacidad" style={{ textDecoration: "underline" }}>Política de Privacidad</a>.
            <br />
            <strong>Disclaimer:</strong> Este formulario es informativo y no crea relación abogado–cliente. Enviar información no garantiza relación profesional.
          </span>
        </label>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <button className="btn btn-primary" type="submit" disabled={!canSend}>
            Enviar por correo
          </button>
          <a className="btn btn-outline" href={`mailto:${SITE.email}?subject=Consulta%20—%20${SITE.name}`}>
            Abrir correo
          </a>
        </div>

        {ok ? <div className="p-muted">Listo: se abrirá tu correo para enviar el mensaje.</div> : null}
      </form>
    </div>
  );
}
