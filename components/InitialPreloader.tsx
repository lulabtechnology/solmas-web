"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ASSETS, site } from "@/lib/site";

const STORAGE_KEY = "solmas-initial-preloader-seen";

export default function InitialPreloader() {
  const pathname = usePathname();
  const initialPath = useRef(pathname);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (initialPath.current !== "/" || pathname !== "/") {
      setVisible(false);
      return;
    }
    if (typeof window === "undefined") return;

    const alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    if (alreadySeen) return;

    setVisible(true);

    const closeTimer = window.setTimeout(() => setClosing(true), 1050);
    const hideTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      setVisible(false);
    }, 1450);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className={`initialPreloader${closing ? " isClosing" : ""}`} role="status" aria-label={`Cargando ${site.name}`}>
      <div className="initialPreloader__card">
        <img src={ASSETS.brand.logoBlue} alt={`${site.name} logo`} />
        <span aria-hidden="true" className="initialPreloader__line" />
      </div>

      <style>{`
        .initialPreloader{
          position:fixed;
          inset:0;
          z-index:9999;
          display:grid;
          place-items:center;
          padding:24px;
          background:
            radial-gradient(circle at 50% 35%, rgba(176,141,87,.12), transparent 34%),
            linear-gradient(135deg, #ffffff 0%, #f8f6f1 52%, #eef2f7 100%);
          opacity:1;
          visibility:visible;
          pointer-events:none;
          transition:opacity .38s ease, visibility .38s ease;
        }
        .initialPreloader.isClosing{
          opacity:0;
          visibility:hidden;
        }
        .initialPreloader__card{
          width:min(320px, 78vw);
          display:grid;
          justify-items:center;
          gap:18px;
          padding:28px 24px;
          border-radius:24px;
          background:rgba(255,255,255,.72);
          border:1px solid rgba(176,141,87,.22);
          box-shadow:0 24px 70px rgba(2,6,23,.10);
          backdrop-filter:blur(10px);
          animation:solmasPreloaderEnter .55s ease both;
        }
        .initialPreloader__card img{
          width:min(220px, 62vw);
          height:auto;
          display:block;
          object-fit:contain;
          animation:solmasPreloaderLogo 1.05s ease both;
        }
        .initialPreloader__line{
          position:relative;
          display:block;
          width:min(210px, 58vw);
          height:2px;
          overflow:hidden;
          border-radius:999px;
          background:rgba(176,141,87,.18);
        }
        .initialPreloader__line::after{
          content:"";
          position:absolute;
          inset:0;
          width:48%;
          border-radius:999px;
          background:linear-gradient(90deg, transparent, var(--accent), transparent);
          animation:solmasPreloaderLine .95s ease-in-out infinite;
        }
        @keyframes solmasPreloaderEnter{
          from{ transform:translateY(10px); opacity:0; }
          to{ transform:translateY(0); opacity:1; }
        }
        @keyframes solmasPreloaderLogo{
          0%{ transform:scale(.96); opacity:0; filter:blur(2px); }
          45%{ opacity:1; filter:blur(0); }
          100%{ transform:scale(1); opacity:1; filter:blur(0); }
        }
        @keyframes solmasPreloaderLine{
          0%{ transform:translateX(-110%); }
          100%{ transform:translateX(230%); }
        }
        @media (max-width:720px){
          .initialPreloader__card{
            width:min(286px, 82vw);
            padding:24px 20px;
            border-radius:22px;
          }
          .initialPreloader__card img{
            width:min(190px, 60vw);
          }
        }
        @media (prefers-reduced-motion: reduce){
          .initialPreloader,
          .initialPreloader__card,
          .initialPreloader__card img,
          .initialPreloader__line::after{
            animation:none !important;
            transition:none !important;
          }
        }
      `}</style>
    </div>
  );
}
