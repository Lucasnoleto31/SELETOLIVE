import { WHATSAPP_URL } from "@/lib/contact";
import { WhatsappIcon } from "@/components/WhatsappIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o atendimento no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-primary-fg shadow-[0_14px_38px_-12px_rgba(31,107,255,0.9)] transition-all duration-200 hover:-translate-y-px hover:bg-primary-hover md:bottom-6 md:right-6"
    >
      <WhatsappIcon size={22} />
      <span className="hidden text-small sm:inline">Falar com o atendimento</span>
    </a>
  );
}
