"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import {
  WHATSAPP_URL,
  CHECKOUT_MENSAL_URL,
  CHECKOUT_TRIMESTRAL_URL,
} from "@/lib/contact";

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-primary"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const bullets = [
  "Sala ao vivo com o Fabrício, todo pregão",
  "Operações comentadas em tempo real",
  "Tira-dúvidas durante o pregão",
  "Acesso à comunidade",
];

type Action = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

const plans: {
  name: string;
  price: string;
  period: string;
  altPrice: string;
  forWho: string;
  highlight: string;
  featured: boolean;
  actions: Action[];
  note: string;
}[] = [
  {
    name: "ZERO7",
    price: "Gratuito",
    period: "",
    altPrice: "",
    forWho: "Para clientes com conta real ativa",
    highlight: "Você opera, você entra. Sem mensalidade.",
    featured: false,
    actions: [
      { label: "Garantir vaga grátis", href: WHATSAPP_URL, variant: "secondary" },
    ],
    note: "Acesso gratuito à Sala AO VIVO enquanto a conta real estiver ativa.",
  },
  {
    name: "ZEVE",
    price: "R$ 997",
    period: "/mês",
    altPrice: "",
    forWho: "Para clientes da assessoria Zeve",
    highlight: "Atingiu 3.000 lotes no mês? O próximo mês é financiado pela Zeve.",
    featured: true,
    actions: [
      { label: "Garantir vaga", href: WHATSAPP_URL, variant: "primary" },
    ],
    note: "Ao atingir 3.000 lotes operados no mês pela assessoria Zeve, o mês seguinte é por nossa conta.",
  },
  {
    name: "Público geral",
    price: "R$ 997",
    period: "/mês",
    altPrice: "ou R$ 2.497 no trimestre (economia de ~R$ 494)",
    forWho: "Pra quem ainda não opera pela Genial via Zeve",
    highlight: "",
    featured: false,
    actions: [
      { label: "Assinar mensal", href: CHECKOUT_MENSAL_URL, variant: "secondary" },
      { label: "Assinar trimestral", href: CHECKOUT_TRIMESTRAL_URL, variant: "secondary" },
    ],
    note: "Quer parar de pagar? Migre sua conta pra Genial através da Zeve e seu acesso passa a ser bancado por nós.",
  },
];

export function Pricing() {
  return (
    <section
      id="planos"
      className="relative scroll-mt-20 border-t border-white/5 py-20 md:py-28"
    >
      <Container>
        <Reveal className="max-w-prose">
          <p className="text-caption font-bold uppercase tracking-[0.14em] text-primary">
            Planos
          </p>
          <h2 className="mt-3 text-balance text-h1 font-bold uppercase leading-[1.05]">
            Escolha como entrar na <span className="text-primary">sala.</span>
          </h2>
          <p className="mt-4 text-body-lg text-fg-soft">
            Se você opera pela Genial através da Zeve, a sala é por nossa conta. Se
            ainda não opera, entra como público geral e migra quando quiser.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1040px] gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={0.06 * i}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-card bg-surface p-7",
                  p.featured ? "border-2 border-[#1f6bff]" : "border border-white/10",
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-caption font-bold uppercase tracking-wider text-primary-fg">
                    Recomendado
                  </span>
                )}

                <p className="text-h3 font-semibold">{p.name}</p>

                <div className="mt-4 flex items-end gap-1.5">
                  <span
                    className={cn(
                      "font-display text-[2.5rem] font-bold leading-none",
                      p.featured ? "text-primary" : "text-fg",
                    )}
                  >
                    {p.price}
                  </span>
                  {p.period && (
                    <span className="pb-1 text-body text-fg-muted">{p.period}</span>
                  )}
                </div>

                {p.altPrice && (
                  <p className="mt-1.5 text-small text-fg-muted">{p.altPrice}</p>
                )}

                <p className="mt-2 text-small text-fg-soft">{p.forWho}</p>

                {p.highlight && (
                  <p className="mt-4 inline-flex items-start gap-2 rounded-card border border-primary/30 bg-primary/10 px-3 py-2 text-small font-medium text-accent">
                    <Check />
                    {p.highlight}
                  </p>
                )}

                <ul className="mt-6 flex flex-col gap-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-small text-fg-soft">
                      <Check />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-2 pt-1">
                  {p.actions.map((a) => (
                    <Button
                      key={a.label}
                      href={a.href}
                      variant={a.variant}
                      className="w-full"
                    >
                      {a.label}
                    </Button>
                  ))}
                </div>

                <p className="mt-4 text-caption text-fg-muted">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-prose text-center text-caption text-fg-muted">
            Day trade é de altíssimo risco e pode gerar perdas superiores ao capital.
            Não é promessa de ganho.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
