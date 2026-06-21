import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  COMMUNITY_URL,
} from "@/lib/contact";

const nav = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#prova", label: "Prova" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

const social = [
  { href: INSTAGRAM_URL, label: "Instagram" },
  { href: YOUTUBE_URL, label: "YouTube" },
  { href: COMMUNITY_URL, label: "Comunidade" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <Image
                src="/zeve-logo.png"
                alt="Zeve"
                width={30}
                height={22}
                className="h-[22px] w-auto"
              />
              <span className="font-display text-body font-bold uppercase tracking-tight">
                Sala ao Vivo
              </span>
            </div>
            <p className="mt-4 text-small text-fg-soft">
              Opere o pregão ao lado do Fabrício Gonçalvez, ao vivo, todo dia.
            </p>
            <div className="mt-5 flex gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-fg-soft transition-colors hover:text-fg"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-caption font-bold uppercase tracking-wider text-fg-muted">
              Navegação
            </p>
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-small text-fg-soft transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3">
            <p className="text-caption font-bold uppercase tracking-wider text-fg-muted">
              Comece agora
            </p>
            <p className="text-small text-fg-soft">
              Garanta sua vaga na sala falando com o atendimento.
            </p>
            <Button href={WHATSAPP_URL} size="md">
              Falar com o atendimento
            </Button>
            <a
              href={WHATSAPP_URL}
              className="text-small text-fg-soft transition-colors hover:text-fg"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-caption leading-relaxed text-fg-muted">
          <p>
            Investir envolve riscos. Day trade é modalidade de altíssimo risco,
            podendo gerar perdas superiores ao capital investido. Rentabilidade
            passada não garante resultados futuros. O conteúdo desta página é
            informativo e educacional e não constitui recomendação, oferta ou
            promessa de resultado.
          </p>
          <p>
            Zeve AI Ltda. CNPJ 57.644.614/0001-23. Assessoria de investimentos
            vinculada à Genial, atuando conforme a Resolução CVM nº 178/2023.
          </p>
          <p>© 2026 Zeve. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
