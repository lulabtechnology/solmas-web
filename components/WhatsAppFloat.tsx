"use client";

import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  const digits = site.phone.replace(/[^\d]/g, "");
  const url = `https://wa.me/${digits}?text=${encodeURIComponent("Hola, me gustaría agendar una consulta con SOLMAS.")}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp SOLMAS"
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 90,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 999,
        background: "#0b1220",
        color: "#fff",
        border: "1px solid rgba(217,194,154,.25)",
        boxShadow: "0 18px 40px rgba(2,6,23,.18)"
      }}
    >
      <span style={{ fontWeight: 700 }}>WhatsApp</span>
      <span style={{ opacity: 0.85, fontSize: 13 }}>{site.phone}</span>
    </a>
  );
}
