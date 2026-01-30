import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solmas.example";

  const routes = [
    "",
    "/nuestra-firma",
    "/areas-de-practica",
    "/equipo",
    "/tramites",
    "/contacto",
    "/legal/privacidad",
    "/legal/terminos",
    "/legal/cookies",
    "/legal/aviso-legal",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
