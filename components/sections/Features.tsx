"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/Container";

const steps = [
  {
    n: "01",
    t: "Opere ao vivo, junto",
    d: "O Fabrício abre a tela e opera o pregão em tempo real. Você acompanha cada entrada e saída na hora.",
  },
  {
    n: "02",
    t: "Entenda o raciocínio",
    d: "Não é sinal solto. Ele explica o porquê de cada decisão e a gestão de risco enquanto opera.",
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
    <section id="como-funciona" className="relative scroll-mt-20 py-20 md:py-28">
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
            Não é curso gravado. É operar{" "}
            <span className="text-primary">junto, ao vivo.</span>
          </h2>
          <p className="mt-4 text-body-lg text-fg-soft">
            Todo pregão você senta do lado do Fabrício e vê o mercado pelos olhos de
            quem opera de verdade.
          </p>
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
      </Container>
    </section>
  );
}
