export const SITE = {
  name: "SOLMAS",
  phone: "+507 6529-7584",
  email: "solmaslegal@gmail.com",
  address: "Panamá, San Francisco (Calle 65 Este)",
  instagram: "pendiente de confirmar", // @solmaslegal cuando confirmes
  social: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
} as const;

// Alias por si en otros archivos importas `site`
export const site = SITE;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/nuestra-firma", label: "Firma" },
  { href: "/areas-de-practica", label: "Áreas" },
  { href: "/equipo", label: "Equipo" },
  { href: "/tramites", label: "Trámites" },
  { href: "/contacto", label: "Contacto" },
] as const;

type LegalConfig = {
  jurisdiction: string;
  placeholders: Record<string, string>; // ✅ clave: evita que TypeScript rompa por keys nuevos
  disclaimers: {
    infoNoLegalAdvice: string;
    noRelationshipByContact: string;
    confidentialityNote: string;
  };
};

/**
 * Textos legales base.
 * Placeholders: completa cuando tengas razón social/RUC exacto.
 */
export const LEGAL: LegalConfig = {
  jurisdiction: "República de Panamá",
  placeholders: {
    // ✅ nombres usados por tus páginas (compatibilidad)
    legalName: "[PLACEHOLDER: Razón social exacta]",
    razonSocial: "[PLACEHOLDER: Razón social exacta]",

    // ✅ RUC
    ruc: "[PLACEHOLDER: RUC exacto]",

    // ✅ domicilio / address (tu error actual es por address)
    domicilio: "[PLACEHOLDER: Domicilio legal completo]",
    address: "[PLACEHOLDER: Domicilio legal completo]",

    // ✅ por si alguna página lo usa
    email: SITE.email,
    phone: SITE.phone,
    jurisdiction: "República de Panamá",
  },
  disclaimers: {
    infoNoLegalAdvice:
      "La información publicada en este sitio es de carácter informativo y no constituye asesoría legal, ni crea una relación abogado–cliente.",
    noRelationshipByContact:
      "El envío de información mediante formularios o correo no garantiza la aceptación del caso ni la existencia de una relación profesional.",
    confidentialityNote:
      "Recomendamos no incluir información sensible o confidencial hasta confirmar formalmente la contratación y el alcance del servicio.",
  },
};

export const PRACTICE_AREAS = [
  "Derecho Corporativo y Mercantil",
  "Notarías y Registro Público",
  "Derecho Administrativo y Regulatorio",
  "Propiedad Intelectual",
  "Derecho Civil y Patrimonial",
  "Derecho de Familia",
] as const;
