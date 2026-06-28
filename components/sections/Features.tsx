"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/contact";

const steps = [
  {
    n: "01",
    t: "Opere ao vivo, junto",
    d: "O Fabrício abre sua tela e opera o mercado em tempo real. Você acompanha as análises, as operações, a gestão de risco e os critérios por trás de cada decisão, além de poder fazer perguntas e tirar dúvidas ao vivo.",
  },
  {
    n: "02",
    t: "Aprenda as estratégias",
    d: "Exaustão, Alaska e Square, além de todas as estratégias e habilidades que o ajudaram nos últimos 20 anos operando o mercado de day trade.",
  },
  {
    n: "03",
    t: "Tire dúvida na hora",
    d: "Travou numa operação? Pergunta ali mesmo e resolve no calor do pregão, sem esperar suporte.",
  },
];

export function Features() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section id="como-funciona" className="relative scroll-mt-20 py-16 md:py-28">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-prose"
        >
          <p className="text-caption font-bold uppercase tracking-[0.14em] text-primary">
            Como funciona
          </p>
          <h2 className="mt-3 text-balance text-h1 font-bold uppercase leading-[1.05]">
            Não é curso gravado. É{" "}
            <span className="text-primary">mercado ao vivo.</span>
          </h2>
          <div className="mt-4 space-y-4 text-body text-fg-soft">
            <p className="text-body-lg">
              Todos os dias durante o pregão,{" "}
              <span className="text-fg">Fabrício Gonçalvez</span> abre sua tela e
              compartilha sua rotina operacional em tempo real. Acompanhe suas
              análises, leitura de mercado, os pontos de entrada e saída, sua gestão
              de risco e o processo de tomada de decisão que sustenta anos de
              consistência no mercado de trading.
            </p>
            <p>
              Mais do que aprender uma estratégia, você entende como ele pensa,
              reage e se comporta diante das operações de day trade.
            </p>
            <p>
              Durante toda a transmissão, você pode interagir, fazer perguntas e
              esclarecer suas dúvidas diretamente ao vivo.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5"
        >
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={item}
              className="group relative overflow-hidden rounded-card border border-white/10 bg-surface p-6 transition-colors duration-200 hover:border-[#1f6bff]/50"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1 -top-5 font-display text-[88px] font-bold leading-none text-white/[0.04]"
              >
                {s.n}
              </span>
              <div className="relative">
                <span className="font-mono text-small text-primary">{s.n}</span>
                <h3 className="mt-3 text-h3 font-semibold">{s.t}</h3>
                <p className="mt-2 text-body text-fg-soft">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-start gap-5 rounded-card border border-white/10 bg-surface p-7 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <p className="max-w-[48ch] text-body-lg text-fg">
            Amanhã o mercado abre com você dentro da sala ou tentando entender sozinho
            o que aconteceu.
          </p>
          <Button href={WHATSAPP_URL} className="shrink-0">
            Garantir meu lugar na sala
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
