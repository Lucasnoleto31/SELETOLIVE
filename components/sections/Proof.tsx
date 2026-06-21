"use client";

import Image from "next/image";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const testimonials = [0, 1, 2];

export function Proof() {
  return (
    <section
      id="prova"
      className="relative scroll-mt-20 border-t border-white/5 py-20 md:py-28"
    >
      <Container>
        <Reveal className="max-w-prose">
          <p className="text-caption font-bold uppercase tracking-[0.14em] text-primary">
            A comunidade
          </p>
          <h2 className="mt-3 text-balance text-h1 font-bold uppercase leading-[1.05]">
            Uma comunidade que já{" "}
            <span className="text-primary">opera junto.</span>
          </h2>
          <p className="mt-4 text-body-lg text-fg-soft">
            Cerca de 200 traders no Zoom todo pregão, ao lado do Fabrício. Uma sala
            próxima, onde dá pra acompanhar de perto e tirar dúvida no meio da operação.
          </p>
        </Reveal>

        {/* stats */}
        <Reveal delay={0.05}>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            <div className="sm:px-8 sm:first:pl-0">
              <div className="font-display text-h1 font-bold text-fg">
                <CountUp to={1400} suffix="+" />
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

        {/* depoimentos — placeholders */}
        <Reveal delay={0.1}>
          <p className="mt-14 text-caption font-bold uppercase tracking-[0.14em] text-fg-muted">
            O que dizem quem está na sala
          </p>
        </Reveal>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {testimonials.map((i) => (
            <Reveal key={i} delay={0.05 * i}>
              <figure className="h-full rounded-card border border-dashed border-white/15 bg-surface p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-caption text-fg-muted">
                    foto
                  </div>
                  <figcaption>
                    <p className="text-small font-medium text-fg">
                      [ Nome do membro ]
                    </p>
                    <p className="text-caption text-fg-muted">
                      [ cidade · tempo na sala ]
                    </p>
                  </figcaption>
                </div>
                <blockquote className="mt-4 text-body text-fg-soft">
                  &ldquo;[ Depoimento real de experiência, sobre o acompanhamento,
                  a didática, a rotina. Sem promessa de resultado ou menção a
                  lucro. ]&rdquo;
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
