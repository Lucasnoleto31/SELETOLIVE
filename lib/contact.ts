// Atendimento da Zeve (WhatsApp)
export const WHATSAPP_DISPLAY = "+55 62 9994-4855";

// Apenas dígitos, no padrão internacional (DDI + DDD + número), para o link wa.me
const WHATSAPP_DIGITS = "556299944855";

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Sala ao Vivo e quero garantir minha vaga.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// Redes do Fabrício e comunidade
export const INSTAGRAM_URL = "https://www.instagram.com/fabricio_goncalvez/";
export const YOUTUBE_URL = "https://www.youtube.com/@fabriciogoncalvez";
export const COMMUNITY_URL = "https://chat.whatsapp.com/GIXWd7ctS7nKrbNSJceanc";
