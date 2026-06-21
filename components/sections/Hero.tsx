"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/Particles";

const ANIMATE_BG = true;

const ticker = [
  { s: "WIN", v: "+1,84%", up: true },
  { s: "WDO", v: "-0,42%", up: false },
  { s: "DOL", v: "+0,55%", up: true },
  { s: "IBOV", v: "+0,96%", up: true },
  { s: "BIT", v: "+2,10%", up: true },
  { s: "DI", v: "-0,08%", up: false },
  { s: "IND", v: "+1,12%", up: true },
  { s: "GLD", v: "+0,37%", up: true },
];

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section id="top" className="relative overflow-hidden bg-bg pt-24 md:pt-28">
      <Particles animate={ANIMATE_BG} className="z-0 opacity-70" />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.9fr] lg:gap-6">
          {/* copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 py-8 lg:py-12"
          >
            <motion.h1
              variants={item}
              className="text-balance text-display font-bold uppercase leading-[0.92]"
            >
              Tá no pregão?
              <br />
              <span className="text-primary">Senta aqui.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-prose text-body-lg text-fg-soft"
            >
              Opere ao vivo com o <span className="text-fg">Fabrício Gonçalvez</span>.
              Tela aberta, decisão na hora, todo pregão. A sala é{" "}
              <span className="text-fg">por nossa conta</span> para quem opera com a
              Zeve.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="#planos" variant="white">
                Garantir vaga
              </Button>
              <Button href="#como-funciona" variant="secondary">
                Como funciona
              </Button>
            </motion.div>

            <motion.p variants={item} className="mt-5 text-caption text-fg-muted">
              Day trade é de altíssimo risco e pode gerar perdas superiores ao capital.
              Não é promessa de ganho.
            </motion.p>
          </motion.div>

          {/* Fabrício + corte azul */}
          <div className="relative">
            <motion.div
              aria-hidden
              initial={reduce ? false : { opacity: 0, scaleY: 0.92 }}
              animate={reduce ? undefined : { opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute right-[-8%] top-[-4%] z-0 h-[90%] w-[74%] origin-top -skew-x-6 bg-primary"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 60%, transparent)",
                maskImage: "linear-gradient(to bottom, #000 60%, transparent)",
              }}
            />
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 26 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative z-10 mx-auto aspect-[2/3] w-[72%] max-w-[320px] lg:mx-0 lg:ml-auto lg:h-[520px] lg:w-auto lg:max-w-none"
            >
              <Image
                src="/fabricio.png"
                alt="Fabrício Gonçalvez operando ao vivo"
                fill
                priority
                sizes="(max-width: 1024px) 74vw, 38vw"
                className="object-cover object-top"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, #000 80%, transparent)",
                  maskImage: "linear-gradient(to bottom, #000 80%, transparent)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-bg to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* ticker */}
      <div className="relative z-10 overflow-hidden border-y border-white/10 bg-black/30 py-3">
        <motion.div
          className="flex w-max gap-10 pr-10 font-mono text-small text-fg-soft"
          animate={ANIMATE_BG && !reduce ? { x: ["0%", "-50%"] } : undefined}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-2 whitespace-nowrap">
              {t.s}{" "}
              <b className={t.up ? "text-up" : "text-down"}>
                {t.up ? "▲" : "▼"} {t.v}
              </b>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
