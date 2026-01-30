import { SITE } from "@/lib/site";

export default function WhatsAppFloating() {
  const text = encodeURIComponent(`Hola SOLMAS, me gustaría coordinar una consulta.`);
  const href = `https://wa.me/${SITE.phoneDigits}?text=${text}`;

  return (
    <a className="fab" href={href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp SOLMAS">
      WhatsApp
    </a>
  );
}
