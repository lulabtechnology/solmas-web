"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Pref = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const KEY = "solmas_cookie_pref_v1";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"bar" | "settings">("bar");
  const [pref, setPref] = useState<Pref>({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (!saved) setOpen(true);

    const onOpen = () => {
      setOpen(true);
      setMode("settings");
    };
    window.addEventListener("solmas:open-cookies", onOpen);
    return () => window.removeEventListener("solmas:open-cookies", onOpen);
  }, []);

  const save = (p: Pref) => {
    localStorage.setItem(KEY, JSON.stringify(p));
    setPref(p);
    setOpen(false);
    setMode("bar");
  };

  if (!open) return null;

  return (
    <div className="cookieBar" role="dialog" aria-label="Preferencias de cookies" aria-modal="true">
      {mode === "bar" ? (
        <div className="cookieRow">
          <div style={{ maxWidth: 760 }}>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Cookies</div>
            <div className="p-muted">
              Usamos cookies necesarias para el funcionamiento del sitio. Puedes aceptar o rechazar cookies no esenciales.
              Consulta la <Link href="/legal/cookies" style={{ textDecoration: "underline" }}>Política de Cookies</Link>.
            </div>
          </div>

          <div className="cookieActions">
            <button className="btn btn-outline" onClick={() => save({ necessary: true, analytics: false, marketing: false })}>
              Rechazar
            </button>
            <button className="btn btn-outline" onClick={() => { setMode("settings"); }}>
              Configurar
            </button>
            <button className="btn btn-primary" onClick={() => save({ necessary: true, analytics: true, marketing: true })}>
              Aceptar
            </button>
          </div>
        </div>
      ) : (
        <div className="cookieRow">
          <div style={{ maxWidth: 760 }}>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Configurar cookies</div>
            <div className="p-muted">
              Las cookies necesarias siempre están activas. Las no esenciales ayudan a medir rendimiento y marketing.
              Si no usamos herramientas de analítica/ads aún, mantenerlas desactivadas es válido.
            </div>

            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              <label className="checkRow">
                <input type="checkbox" checked disabled />
                <span>
                  <strong>Necesarias</strong> (siempre activas) — funcionamiento básico del sitio.
                </span>
              </label>

              <label className="checkRow">
                <input
                  type="checkbox"
                  checked={pref.analytics}
                  onChange={(e) => setPref((p) => ({ ...p, analytics: e.target.checked }))}
                />
                <span>
                  <strong>Analítica</strong> — métricas para mejorar el sitio.
                </span>
              </label>

              <label className="checkRow">
                <input
                  type="checkbox"
                  checked={pref.marketing}
                  onChange={(e) => setPref((p) => ({ ...p, marketing: e.target.checked }))}
                />
                <span>
                  <strong>Marketing</strong> — personalización y campañas.
                </span>
              </label>
            </div>
          </div>

          <div className="cookieActions">
            <button className="btn btn-outline" onClick={() => { setMode("bar"); }}>
              Volver
            </button>
            <button className="btn btn-primary" onClick={() => save(pref)}>
              Guardar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
