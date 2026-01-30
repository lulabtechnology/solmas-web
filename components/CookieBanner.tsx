"use client";

import { useEffect, useMemo, useState } from "react";

type Consent = "accepted" | "rejected" | "unset";

const KEY = "solmas_cookie_consent";

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>("unset");
  const [openPrefs, setOpenPrefs] = useState(false);

  const stored = useMemo<Consent>(() => {
    if (typeof window === "undefined") return "unset";
    const v = window.localStorage.getItem(KEY) as Consent | null;
    return v ?? "unset";
  }, []);

  useEffect(() => {
    setConsent(stored);
  }, [stored]);

  useEffect(() => {
    const onOpen = () => setOpenPrefs(true);
    window.addEventListener("open-cookie-preferences", onOpen);
    return () => window.removeEventListener("open-cookie-preferences", onOpen);
  }, []);

  function save(v: Consent) {
    setConsent(v);
    window.localStorage.setItem(KEY, v);
    setOpenPrefs(false);
  }

  const showBanner = consent === "unset";

  return (
    <>
      {showBanner && (
        <div
          style={{
            position: "fixed",
            left: 16,
            right: 16,
            bottom: 16,
            zIndex: 90,
            display: "grid",
            placeItems: "center"
          }}
        >
          <div
            className="card"
            style={{
              width: "min(980px, 100%)",
              borderRadius: 18,
              background: "rgba(255,255,255,.95)",
              backdropFilter: "blur(10px)"
            }}
          >
            <div className="card-pad" style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 420px" }}>
                <div className="kicker">Cookies</div>
                <p className="p" style={{ marginTop: 6 }}>
                  Usamos cookies para mejorar la experiencia y medir rendimiento básico. Puedes aceptar, rechazar o configurar tus preferencias.
                </p>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button className="btn" type="button" onClick={() => setOpenPrefs(true)}>
                  Configurar
                </button>
                <button className="btn" type="button" onClick={() => save("rejected")}>
                  Rechazar
                </button>
                <button className="btn primary" type="button" onClick={() => save("accepted")}>
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {openPrefs && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 95,
            background: "rgba(2,6,23,.55)",
            display: "grid",
            placeItems: "center",
            padding: 18
          }}
          onClick={() => setOpenPrefs(false)}
        >
          <div className="card" style={{ width: "min(720px, 100%)", background: "#fff" }} onClick={(e) => e.stopPropagation()}>
            <div className="card-pad" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <strong>Preferencias de cookies</strong>
              <button className="btn small" type="button" onClick={() => setOpenPrefs(false)}>
                Cerrar
              </button>
            </div>
            <div className="hr" />
            <div className="card-pad" style={{ display: "grid", gap: 12 }}>
              <p className="p">
                Cookies esenciales: siempre activas. Cookies de analítica: opcionales (pendiente de confirmar si se usará analítica).
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button className="btn" type="button" onClick={() => save("rejected")}>
                  Guardar: Rechazar
                </button>
                <button className="btn primary" type="button" onClick={() => save("accepted")}>
                  Guardar: Aceptar
                </button>
              </div>
              <p className="p" style={{ fontSize: 13 }}>
                Para más información, revisa la página de <a href="/legal/cookies" style={{ textDecoration: "underline" }}>Política de Cookies</a>.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
