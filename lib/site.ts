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
  placeholders: Record<string, string>;
  disclaimers: {
    infoNoLegalAdvice: string;
    noRelationshipByContact: string;
    confidentialityNote: string;
  };
};

export const LEGAL: LegalConfig = {
  jurisdiction: "República de Panamá",
  placeholders: {
    legalName: "[PLACEHOLDER: Razón social exacta]",
    razonSocial: "[PLACEHOLDER: Razón social exacta]",
    ruc: "[PLACEHOLDER: RUC exacto]",
    domicilio: "[PLACEHOLDER: Domicilio legal completo]",
    address: "[PLACEHOLDER: Domicilio legal completo]",

    // opcionales por si se usan en copy legal
    email: SITE.email,
    phone: SITE.phone,
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

/**
 * ✅ Alias de compatibilidad:
 * Algunos componentes importan PRACTICES.
 * Así evitamos que el build se rompa por nombres distintos.
 */
export const PRACTICES = PRACTICE_AREAS;
