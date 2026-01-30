import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { FAQ, PRACTICES } from "@/lib/site";
import Link from "next/link";
import MailtoForm from "@/components/MailtoForm";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "SOLMAS: asesoría legal estratégica en Panamá con enfoque humano, ética y transparencia. Conoce nuestras áreas y agenda una consulta.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section" aria-label="Áreas de práctica">
        <div className="container">
          <div className="kicker">Áreas de práctica</div>
          <h2 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
            Especialización para resolver con claridad
          </h2>
          <p className="p" style={{ maxWidth: 780 }}>
            Estructuramos cada caso con diagnóstico, estrategia y ejecución, cuidando forma y fondo para decisiones seguras.
          </p>

          <div className="grid grid-3" style={{ marginTop: 18 }}>
            {PRACTICES.map((p) => (
              <Link key={p.key} className="card" href="/areas-de-practica">
                <h3 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>{p.title}</h3>
                <p className="card-text">{p.oneLiner}</p>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 18 }}>
            <Link className="btn btn-outline" href="/areas-de-practica">
              Ver todas las áreas
            </Link>
          </div>
        </div>
      </section>

      <section className="section-sm" aria-label="Nuestro compromiso" style={{ background: "rgba(176,141,87,.06)" }}>
        <div className="container">
          <div className="kicker">Nuestro compromiso</div>
          <h2 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
            Rigor legal con trato humano
          </h2>
          <p className="p" style={{ maxWidth: 920 }}>
            En SOLMAS combinamos especialización por áreas con una gestión moderna: comunicación clara, seguimiento y criterios éticos.
            Priorizamos soluciones oportunas y sustentadas, cuidando la confidencialidad y la transparencia desde el primer contacto.
          </p>

          <div className="grid grid-2" style={{ marginTop: 18 }}>
            <div className="card">
              <h3 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>Qué puedes esperar</h3>
              <ol style={{ margin: 0, paddingLeft: 18, color: "var(--ink-soft)", lineHeight: 1.8 }}>
                <li>Diagnóstico inicial</li>
                <li>Estrategia</li>
                <li>Ejecución</li>
                <li>Seguimiento</li>
              </ol>
            </div>

            <div className="card">
              <h3 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>Diferenciadores</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink-soft)", lineHeight: 1.8 }}>
                <li>Especialización por áreas</li>
                <li>Tecnología y agilidad</li>
                <li>Enfoque humano</li>
                <li>Ética y transparencia</li>
                <li>Atención a extranjeros y mercado local</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Equipo destacado">
        <div className="container">
          <div className="kicker">Equipo</div>
          <h2 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
            Profesionales que acompañan de principio a fin
          </h2>

          <div className="grid grid-2" style={{ marginTop: 18 }}>
            <div className="card">
              <div className="kicker">CEO / Abogada Senior</div>
              <h3 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>Ana Isabel C. Madrid</h3>
              <p className="card-text">
                Egresada de la USMA (Derecho). Formación en ciencias políticas con énfasis en negocios internacionales.
              </p>
              <div style={{ marginTop: 12 }}>
                <Link className="btn btn-outline" href="/equipo">
                  Ver perfil / CV
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="kicker">Socio / Abogado</div>
              <h3 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>Luis Spadafora</h3>
              <p className="card-text">Credenciales pendientes de confirmar. Perfil profesional en preparación.</p>
              <div style={{ marginTop: 12 }}>
                <Link className="btn btn-outline" href="/equipo">
                  Ver perfil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" aria-label="Trámites" style={{ background: "rgba(11,27,43,.04)" }}>
        <div className="container">
          <div className="kicker">Trámites / Solicitudes</div>
          <h2 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
            Gestione documentos con acompañamiento legal
          </h2>
          <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink-soft)", lineHeight: 1.9 }}>
            <li>Certificaciones y gestiones registrales</li>
            <li>Trámites notariales</li>
            <li>Revisión y preparación documental</li>
          </ul>
          <div style={{ marginTop: 14 }}>
            <Link className="btn btn-outline" href="/tramites">
              Ir a Trámites
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-label="FAQ">
        <div className="container">
          <div className="kicker">FAQ</div>
          <h2 className="h2" style={{ margin: "10px 0 18px 0", fontFamily: "var(--font-serif)" }}>
            Preguntas frecuentes
          </h2>

          <div className="grid grid-2">
            {FAQ.map((f, idx) => (
              <div key={idx} className="card">
                <h3 className="card-title" style={{ fontFamily: "var(--font-serif)" }}>{f.q}</h3>
                <p className="card-text" style={{ fontSize: 14, color: "var(--ink-soft)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Contacto rápido">
        <div className="container">
          <div className="kicker">Contacto</div>
          <h2 className="h2" style={{ margin: "10px 0 10px 0", fontFamily: "var(--font-serif)" }}>
            Cuéntanos tu caso
          </h2>
          <p className="p" style={{ maxWidth: 820 }}>
            Para iniciar, comparte una descripción breve. Si necesitas adjuntar documentos, envíalos por correo indicando tu nombre y el tipo de caso.
          </p>

          <div style={{ marginTop: 18 }}>
            <MailtoForm title="Formulario de contacto" intent="contacto" />
          </div>
        </div>
      </section>
    </>
  );
}
