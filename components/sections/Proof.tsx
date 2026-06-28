"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const testimonials = [
  {
    img: "/dep1.jpeg",
    name: "Laís Sousa",
    quote:
      "Está sendo muito enriquecedor acompanhar um trader profissional operando em tempo real, com clareza, disciplina e método. Dá pra perceber o nível de profissionalismo e consistência no trabalho, o que traz muita confiança pra quem está acompanhando.",
  },
  {
    img: "/dep2.jpeg",
    name: "Daniel Movio",
    quote:
      "Tenho usado a sala como quebra de paradigma. Fiz muitos cursos que vinham com aquela ideia engessada. Vendo o Fabrício operar, ganhei outros insights: gestão de risco, número de lotes no dia, setup de estratégias. Acabei evoluindo o meu próprio sistema. É muito positivo entender como um profissional pensa.",
  },
  {
    img: "/dep3.jpeg",
    name: "João Vaz",
    quote:
      "Sobre a sala, eu só tenho elogios. Gosto muito de observar a forma como o Fabrício lê o mercado e pensa os movimentos. Mesmo ele não dando aula, só de ficar ali no dia a dia vendo, já me ensina muito pela confiança e experiência que ele tem. Tem feito muita diferença pra mim.",
  },
];

// candles em alta para a linha do tempo (dado de mercado: verde/vermelho permitido)
const candles = [
  { h: 32, up: true }, { h: 26, up: false }, { h: 38, up: true }, { h: 44, up: true },
  { h: 36, up: false }, { h: 50, up: true }, { h: 57, up: true }, { h: 49, up: false },
  { h: 60, up: true }, { h: 66, up: true }, { h: 58, up: false }, { h: 70, up: true },
  { h: 76, up: true }, { h: 68, up: false }, { h: 80, up: true }, { h: 86, up: true },
  { h: 82, up: false }, { h: 90, up: true }, { h: 96, up: true },
];

const milestones = [
  { when: "Há 3 meses", title: "Piloto da Sala ao Vivo no ar." },
  { when: "Agora", title: "Vagas abertas pra turma do Grupo Seleto." },
  { when: "Até outubro", title: "Nova fase de testes do projeto." },
  { when: "Fim do ano", title: "Rumo aos R$ 2 milhões." },
];

const groups = [
  { n: "01", t: "Traders da ZERO7 operando em conta real." },
  { n: "02", t: "Traders que operam pela Genial." },
  { n: "03", t: "Público geral, com ressalvas." },
];

type Media = { kind: "image" | "video"; src: string };

export function Proof() {
  const [media, setMedia] = useState<Media | null>(null);
  const reduce = useReducedMotion();

  const candlesContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04 } },
  };
  const candleVar: Variants = reduce
    ? { hidden: { opacity: 1, scaleY: 1 }, show: { opacity: 1, scaleY: 1 } }
    : {
        hidden: { opacity: 0, scaleY: 0 },
        show: {
          opacity: 1,
          scaleY: 1,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        },
      };

  useEffect(() => {
    if (media === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMedia(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [media]);

  return (
    <section
      id="prova"
      className="relative scroll-mt-20 border-t border-white/5 py-16 md:py-28"
    >
      <Container>
        <Reveal className="max-w-[680px]">
          <p className="text-caption font-bold uppercase tracking-[0.14em] text-primary">
            Seleto Live
          </p>
          <h2 className="mt-3 text-balance text-h1 font-bold uppercase leading-[1.05]">
            Antes de mais nada,{" "}
            <span className="text-primary">entenda os fatos.</span>
          </h2>
          <p className="mt-4 text-body-lg text-fg-soft">
            Há três meses o Fabrício abriu um piloto da Sala ao Vivo para testar se o
            formato faria sentido no longo prazo. O que apareceu foi muito além do
            trade.
          </p>
        </Reveal>

        {/* o que o piloto revelou */}
        <Reveal delay={0.05}>
          <div className="mt-8 rounded-card border border-white/10 border-l-4 border-l-primary bg-surface p-6 md:p-8">
            <p className="text-h3 font-semibold text-fg">
              A sala ajudou vários traders a evoluírem, recuperarem a confiança e
              voltarem a acreditar que dá pra ter consistência no day trade.
            </p>
            <p className="mt-3 max-w-[60ch] text-body text-fg-soft">
              Alguns estavam anos sem conseguir e encontraram ali um novo caminho. Por
              isso o Fabrício preferiu abrir espaço pra novos participantes, em vez de
              transformar a sala em mais um produto de prateleira.
            </p>
          </div>
        </Reveal>

        {/* linha do tempo em candles */}
        <Reveal delay={0.05}>
          <div className="mt-12">
            <motion.div
              variants={candlesContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex h-32 items-end gap-1 border-b border-white/10 sm:h-36 sm:gap-1.5"
              aria-hidden
            >
              {candles.map((c, i) => (
                <motion.div
                  key={i}
                  variants={candleVar}
                  style={{ height: `${c.h}%`, transformOrigin: "bottom" }}
                  className={`flex-1 rounded-[2px] ${c.up ? "bg-up" : "bg-down"}`}
                />
              ))}
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
              {milestones.map((m) => (
                <div key={m.when}>
                  <span className="flex items-center gap-2 text-caption font-bold uppercase tracking-wider text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {m.when}
                  </span>
                  <p className="mt-2 text-small font-medium text-fg">{m.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* quem pode entrar agora */}
        <Reveal delay={0.05}>
          <div className="mt-12">
            <p className="text-caption font-bold uppercase tracking-[0.14em] text-fg-muted">
              Hoje, só três grupos entram na sala
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {groups.map((g) => (
                <div
                  key={g.n}
                  className="rounded-card border border-white/10 bg-surface p-6"
                >
                  <span className="font-mono text-small text-primary">{g.n}</span>
                  <p className="mt-3 text-body font-medium text-fg">{g.t}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-[680px] text-small text-fg-soft">
              O acesso tem custo zero pra quem está construindo a jornada junto com o
              grupo. Quem ainda não chegou lá entra, acompanha as operações, aprende
              todo dia e evolui até chegar (por isso o público geral entra com
              ressalvas).
            </p>
          </div>
        </Reveal>

        {/* fase de testes + meta */}
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col gap-6 rounded-card border border-white/10 bg-surface p-7 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="max-w-[60ch]">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-caption font-bold uppercase tracking-wider text-accent">
                Nova fase de testes até o fim de outubro
              </span>
              <p className="mt-3 text-body text-fg-soft">
                Se o Seleto Live continuar gerando valor para os participantes e fizer
                sentido dentro da rotina do Fabrício, o projeto seguirá em frente. Caso
                contrário, será encerrado ao final do período de testes.
              </p>
            </div>
            <div className="shrink-0 md:text-right">
              <p className="font-display text-h1 font-bold text-fg">R$ 2 milhões</p>
              <p className="mt-1 text-small text-fg-soft">
                a meta do Fabrício até o fim do ano.
                <br className="hidden md:block" /> Esperamos ver você trade a trade.
              </p>
            </div>
          </div>
        </Reveal>

        {/* stats */}
        <Reveal delay={0.05}>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            <div className="sm:px-8 sm:first:pl-0">
              <div className="font-display text-h1 font-bold text-fg">
                <CountUp to={1750} suffix="+" />
              </div>
              <p className="mt-1 text-small text-fg-soft">membros na comunidade</p>
            </div>
            <div className="sm:px-8">
              <div className="font-display text-h1 font-bold text-fg">
                <CountUp to={20} suffix=" anos" />
              </div>
              <p className="mt-1 text-small text-fg-soft">
                de mercado com o Fabrício
              </p>
            </div>
            <div className="sm:px-8">
              <div className="font-display text-h1 font-bold text-primary">
                Todo pregão
              </div>
              <p className="mt-1 text-small text-fg-soft">ao vivo, sem gravação</p>
            </div>
          </div>
        </Reveal>

        {/* sala cheia */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-[720px] grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-card border border-white/10 bg-surface">
              <Image
                src="/foto1.jpeg"
                alt="Sala da comunidade ao vivo com o Fabrício"
                fill
                sizes="(max-width: 768px) 50vw, 350px"
                className="object-cover object-center"
              />
              <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-caption font-bold uppercase tracking-wider text-primary backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                ao vivo
              </span>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-card border border-white/10 bg-surface">
              <Image
                src="/foto2.jpeg"
                alt="Tela da operação ao vivo no pregão"
                fill
                sizes="(max-width: 768px) 50vw, 350px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </Reveal>

        {/* depoimentos reais — texto + print do WhatsApp */}
        <Reveal delay={0.1}>
          <p className="mt-14 text-caption font-bold uppercase tracking-[0.14em] text-fg-muted">
            O que dizem quem está na sala
          </p>
        </Reveal>

        {/* depoimento em vídeo */}
        <Reveal delay={0.05}>
          <div className="mt-4 grid items-center gap-6 rounded-card border border-white/10 bg-surface p-4 sm:grid-cols-[180px_1fr] sm:p-6">
            <button
              type="button"
              onClick={() => setMedia({ kind: "video", src: "/depvideo.mp4" })}
              aria-label="Assistir depoimento em vídeo"
              className="group relative mx-auto aspect-[9/16] w-[180px] overflow-hidden rounded-lg border border-white/10 bg-bg"
            >
              <Image
                src="/depvideo-poster.jpg"
                alt="Cliente da Sala ao Vivo dando depoimento"
                fill
                sizes="180px"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-fg shadow-[0_12px_34px_-16px_rgba(31,107,255,0.85)] transition-transform group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-caption font-bold uppercase tracking-wider text-accent">
                Olha o que o João disse
              </span>
              <p className="mt-3 text-h3 font-semibold text-fg">
                Quem já está na sala conta como é, na frente da câmera.
              </p>
              <p className="mt-2 text-body text-fg-soft">
                O João fala, sem roteiro, sobre a rotina de acompanhar o Fabrício
                operar ao vivo, todo pregão.
              </p>
              <button
                type="button"
                onClick={() => setMedia({ kind: "video", src: "/depvideo.mp4" })}
                className="mt-4 inline-flex items-center gap-2 text-small font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Assistir depoimento
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.img} delay={0.05 * i}>
              <figure className="flex h-full flex-col rounded-card border border-white/10 bg-surface p-6">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary/40"
                  aria-hidden="true"
                >
                  <path d="M9.5 6C6.46 6 4 8.46 4 11.5V18h6v-6H7.5c0-1.38 1.12-2.5 2.5-2.5V6Zm10 0c-3.04 0-5.5 2.46-5.5 5.5V18h6v-6h-2.5c0-1.38 1.12-2.5 2.5-2.5V6Z" />
                </svg>

                <blockquote className="mt-3 flex-1 text-body text-fg-soft">
                  {t.quote}
                </blockquote>

                <button
                  type="button"
                  onClick={() => setMedia({ kind: "image", src: t.img })}
                  className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4 text-left transition-colors hover:text-fg"
                >
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-bg">
                    <Image
                      src={t.img}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </span>
                  <span>
                    <span className="block text-small font-medium text-fg">
                      {t.name}
                    </span>
                    <span className="block text-caption text-fg-muted">
                      Sala ao Vivo
                    </span>
                  </span>
                </button>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>

      {media !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={media.kind === "video" ? "Depoimento em vídeo" : "Print do depoimento"}
          onClick={() => setMedia(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setMedia(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-fg transition-colors hover:bg-white/10"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {media.kind === "video" ? (
            <video
              src={media.src}
              poster="/depvideo-poster.jpg"
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] w-auto rounded-card border border-white/10 shadow-2xl"
            />
          ) : (
            <Image
              src={media.src}
              alt="Print do feedback enviado no WhatsApp"
              width={736}
              height={1300}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] w-auto rounded-card border border-white/10 object-contain shadow-2xl"
            />
          )}
        </div>
      )}
    </section>
  );
}
