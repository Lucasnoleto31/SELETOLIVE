"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { WHATSAPP_URL } from "@/lib/contact";

const VIDEO_ID = "VI0QxpDEj9U";
const WAIT_SECONDS = 15;
// Trocar para mostrar uma vez por sessao. Apague esta chave do sessionStorage
// (ou troque o valor) se quiser que o video reapareca.
const STORAGE_KEY = "seleto_video_gate_seen";

export function VideoGate() {
  const [show, setShow] = useState(true);
  const [left, setLeft] = useState(WAIT_SECONDS);

  // nao reexibe se ja viu nesta sessao
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) setShow(false);
    } catch {
      /* sessionStorage indisponivel: mostra o gate */
    }
  }, []);

  // trava o scroll do body enquanto o gate esta aberto
  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  // contagem regressiva ate liberar o acesso
  useEffect(() => {
    if (!show || left <= 0) return;
    const t = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [show, left]);

  const close = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  const ready = left <= 0;
  const progress = ((WAIT_SECONDS - left) / WAIT_SECONDS) * 100;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Recado do Fabrício antes de entrar no site"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-bg/95 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-3xl py-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-small font-bold uppercase tracking-[0.18em] text-accent">
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
          Importante
        </span>

        <h2 className="mt-5 text-balance text-h1 font-bold uppercase leading-[1.05]">
          Assista antes de entrar.
        </h2>
        <p className="mx-auto mt-3 max-w-[52ch] text-body text-fg-soft">
          O Fabrício gravou um recado rápido sobre a Seleto Live. Dá o play e assista
          antes de seguir pro site.
        </p>

        <div className="mt-6 overflow-hidden rounded-card border border-white/10 bg-surface shadow-2xl">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Recado do Fabrício sobre a Seleto Live"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6">
          {ready ? (
            <Button onClick={close} className="px-8">
              Entrar no site
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
          ) : (
            <div className="mx-auto max-w-[300px]">
              <p className="text-small text-fg-muted">
                O acesso ao site libera em{" "}
                <span className="font-display font-bold tabular-nums text-fg">
                  {left}s
                </span>
              </p>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-small font-semibold text-accent transition-colors hover:text-primary-hover"
        >
          <WhatsappIcon size={18} />
          Falar com o atendimento
        </a>
      </div>
    </div>
  );
}
