export const SITE = {
  name: "SOLMAS",
  phoneDisplay: "+507 6529-7584",
  phoneDigits: "50765297584",
  email: "solmaslegal@gmail.com",
  address: "Panamá, San Francisco (Calle 65 Este)",
  instagramHandle: "@solmaslegal",
  socials: {
    linkedin: { label: "LinkedIn", href: "#" }, // Pendiente de confirmar
    instagram: { label: "Instagram", href: "https://instagram.com/solmaslegal" },
    facebook: { label: "Facebook", href: "#" }, // Pendiente de confirmar
  },
} as const;

export const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Firma", href: "/nuestra-firma" },
  { label: "Áreas", href: "/areas-de-practica" },
  { label: "Equipo", href: "/equipo" },
  { label: "Trámites", href: "/tramites" },
  { label: "Contacto", href: "/contacto" },
] as const;

export type PracticeKey =
  | "corporativo"
  | "notarias"
  | "administrativo"
  | "pi"
  | "civil"
  | "familia";

export const PRACTICES: Array<{
  key: PracticeKey;
  title: string;
  oneLiner: string;
  bullets: string[];
}> = [
  {
    key: "corporativo",
    title: "Derecho Corporativo y Mercantil",
    oneLiner: "Estructura, contratos y acompañamiento estratégico para operar con seguridad.",
    bullets: [
      "Contratos comerciales y revisión integral de términos.",
      "Constitución de sociedades (S.A., SRL y equivalentes).",
      "Actas, reformas y soporte corporativo continuo.",
      "Acompañamiento estratégico para decisiones empresariales.",
    ],
  },
  {
    key: "notarias",
    title: "Notarías y Registro Público",
    oneLiner: "Trámites y registros con orden, rapidez y trazabilidad documental.",
    bullets: [
      "Trámites notariales y diligencias documentales.",
      "Compraventas, donaciones y formalización de acuerdos.",
      "Inscripción y registro de documentos.",
      "Gestiones registrales y acompañamiento en procesos de inscripción.",
    ],
  },
  {
    key: "administrativo",
    title: "Derecho Administrativo y Regulatorio",
    oneLiner: "Gestiones ante entidades públicas con rigor, criterio y claridad.",
    bullets: [
      "Licencias, permisos e idoneidades (según corresponda).",
      "Gestiones y seguimiento ante instituciones (DGI, Migración, Aduanas y otras).",
      "Reclamos y escritos administrativos (según proceda).",
      "Acompañamiento en cumplimiento y requerimientos regulatorios.",
    ],
  },
  {
    key: "pi",
    title: "Propiedad Intelectual",
    oneLiner: "Protección de marcas y nombres comerciales, con enfoque estratégico.",
    bullets: [
      "Búsqueda y evaluación preliminar de viabilidad (cuando aplique).",
      "Registro y gestión de marcas y nombres comerciales.",
      "Acompañamiento en procesos y requerimientos.",
      "Estrategia de protección y administración de activos intangibles.",
    ],
  },
  {
    key: "civil",
    title: "Derecho Civil y Patrimonial",
    oneLiner: "Patrimonio, sucesiones y transacciones con respaldo y enfoque humano.",
    bullets: [
      "Sucesiones y asuntos patrimoniales.",
      "Compraventa de bienes y revisión documental.",
      "Conflictos civiles y apoyo en negociación (según el caso).",
      "Estructuración documental para protección patrimonial.",
    ],
  },
  {
    key: "familia",
    title: "Derecho de Familia",
    oneLiner: "Acompañamiento firme y respetuoso en asuntos familiares sensibles.",
    bullets: [
      "Matrimonios y divorcios (según corresponda).",
      "Patria potestad, custodia y régimen de visitas.",
      "Pensiones alimenticias y acuerdos familiares.",
      "Tutelas/curatelas y régimen económico matrimonial (si aplica).",
    ],
  },
];

export const FAQ = [
  {
    q: "¿La consulta inicial tiene costo?",
    a: "Depende del tipo de asunto y su complejidad. Al contactarnos, te indicaremos el alcance y la modalidad antes de iniciar.",
  },
  {
    q: "¿Atienden a clientes fuera de Panamá?",
    a: "Sí. Atendemos a extranjeros y panameños dentro y fuera del país, coordinando reuniones por videollamada y gestión documental a distancia.",
  },
  {
    q: "¿Qué documentos debo tener para iniciar?",
    a: "Varía según el caso. Recomendamos describir tu necesidad y adjuntar o listar los documentos disponibles; te orientaremos sobre lo esencial para una evaluación inicial.",
  },
  {
    q: "¿Cuánto tarda un trámite típico?",
    a: "Depende de la entidad, requisitos y tiempos institucionales. Te daremos una estimación razonable una vez validemos el tipo de trámite y la documentación.",
  },
  {
    q: "¿Cómo manejan la confidencialidad?",
    a: "Tratamos la información con discreción y cuidado. Enviar información no crea por sí mismo una relación abogado–cliente; te confirmaremos formalmente si asumimos la representación.",
  },
];

export const LEGAL = {
  jurisdiction: "República de Panamá",
  placeholders: {
    legalName: "[RAZÓN SOCIAL / NOMBRE LEGAL]",
    ruc: "[RUC]",
    address: "[DIRECCIÓN COMPLETA]",
  },
} as const;

export const ASSETS = {
  logoBlue: "/assets/img/brand/logo-azul.svg",
  logoWhite: "/assets/img/brand/logo-blanco.svg",
  heroDesktop: "/assets/img/hero/hero-desktop.jpg",
  heroMobile: "/assets/img/hero/hero-mobile.jpg",
  teamAna: "/assets/img/team/ana-isabel.jpg",
  teamLuis: "/assets/img/team/luis-spadafora.jpg",
  office01: "/assets/img/office/oficina-01.jpg",
} as const;
