"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "É ao vivo mesmo ou é gravado?",
    a: "100% ao vivo, todo pregão. Você acompanha o Fabrício operando em tempo real. Não é curso gravado.",
  },
  {
    q: "Quanto custa?",
    a: "Depende de como você entra. Operando em conta real pela ZERO7, o acesso é gratuito. Operando pela Genial através da Zeve, a sala é por nossa conta (ao girar 3.000 lotes no mês, o mês seguinte é financiado pela Zeve). No público geral, R$ 997/mês ou R$ 2.497/trimestre. O grande desejo é que a sala seja isenta pra você.",
  },
  {
    q: "Como eu entro?",
    a: "São três maneiras: procure seu assessor de contas na ZERO7, procure seu assessor de contas na Zeve, ou compre seu acesso direto pelo site.",
  },
  {
    q: "Preciso já ser experiente?",
    a: "Não. A sala existe justamente pra você não operar sozinho no escuro, acompanhando quem está no mercado todo dia.",
  },
  {
    q: "Posso sair quando quiser?",
    a: "Pode, sem multa.",
  },
  {
    q: "A sala garante que eu vou ganhar?",
    a: "Não, e desconfie de quem promete isso. É acompanhamento e conteúdo ao vivo. Day trade é de altíssimo risco e pode gerar perdas superiores ao capital.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 border-t border-white/5 py-20 md:py-28"
    >
      <Container>
        <Reveal className="max-w-prose">
          <p className="text-caption font-bold uppercase tracking-[0.14em] text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-h1 font-bold uppercase leading-[1.05]">
            Perguntas <span className="text-primary">frequentes.</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-[760px]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-body font-medium text-fg">{f.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={cn(
                      "shrink-0 text-fg-muted transition-transform duration-300",
                      isOpen && "rotate-180 text-primary",
                    )}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-prose pb-5 text-body text-fg-soft">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
