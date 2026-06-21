---
name: frontend-design
description: Sistema de design e regras de UI do site da Sala ao Vivo (Zeve). Use SEMPRE ao criar ou estilizar qualquer página, seção, componente ou animação — define escala tipográfica, grid de espaçamento de 8px, tokens de cor, padrões de componente, regras de movimento e PROÍBE a estética genérica de IA.
---

# Frontend Design — Sala ao Vivo (Zeve)

Regras não-negociáveis. Toda UI deste projeto segue isto. Quando faltar uma decisão, escolha a opção mais **intencional e específica** — nunca o default genérico. Público-alvo: traders. Tom: confiante, direto, "mercado de verdade", sem infantilizar.

---

## 0. Regra nº 1 — evite a estética genérica de IA

**Banido (se aparecer, está errado):**
- Gradiente roxo→azul ("AI purple"), mesh gradients e "blobs" de fundo decorativos.
- Glassmorphism em tudo; sombras suaves padrão em cards brancos flutuando.
- Tudo centralizado; três cards de feature idênticos lado a lado; `border-radius` gigante em tudo.
- Emoji no lugar de ícone; ícones genéricos sem significado.
- Headlines vagas ("Transforme seu X", "O futuro do Y"); texto cinza-claro ilegível (contraste < 4.5:1).
- Lorem ipsum, números inventados, placeholders que vão pro ar.

**Em vez disso:**
- Paleta com **ponto de vista** e contraste real; hierarquia tipográfica com salto forte (display pesado × corpo calmo).
- **Assimetria intencional**, densidade de informação onde o trader quer (dados, números, prova), respiro onde precisa de foco.
- **Imagem/vídeo real** do Fabrício operando e da tela — não ilustração genérica.
- Microcopy **específico** ("opere o pregão ao lado do Fabrício", não "junte-se à nossa comunidade").
- Números com **tabular figures** e unidades claras.

---

## 1. Tipografia

**Fontes** (via `next/font`):
- Display/títulos: **Space Grotesk** (caráter, geométrica) — pesos 500/700.
- Corpo/UI: **Inter** — 400/500/600, `font-feature-settings: "tnum"` para qualquer número.

**Escala** (rem, ratio ~1.25 — não invente tamanhos fora dela):
| Token | Tamanho | Uso | line-height |
|---|---|---|---|
| `display` | 3.5–4.5rem (clamp) | hero | 1.05 |
| `h1` | 2.5rem | título de seção | 1.1 |
| `h2` | 1.75rem | subtítulo | 1.2 |
| `h3` | 1.25rem | card/bloco | 1.3 |
| `body-lg` | 1.125rem | lead | 1.6 |
| `body` | 1rem | texto | 1.6 |
| `small` | 0.875rem | apoio | 1.5 |
| `caption` | 0.75rem | legenda/disclaimer | 1.4 |

**Regras:** títulos `letter-spacing: -0.02em`; corpo nunca abaixo de 0.875rem; medida de leitura 60–75 caracteres (`max-w-[65ch]`); 2 pesos por bloco, no máximo.

---

## 2. Espaçamento — grid base de 8px

Tudo é múltiplo de **8** (4px só para ajuste fino de ícone/borda). Escala: `4, 8, 16, 24, 32, 48, 64, 96, 128`.
- Tailwind: use valores pares (`p-2`=8, `p-4`=16, `gap-6`=24, `py-24`=96…).
- Ritmo vertical de seção: `96px` (mobile `64px`). Padding de container: `24px` (mobile) / `32–48px` (desktop).
- Container: `max-w-[1200px]` centralizado; conteúdo de texto `max-w-[680px]`.
- Nada de espaçamento "no olho" fora da escala.

---

## 3. Cor — tokens (dark-first)

Defina como CSS variables e mapeie no Tailwind. **Valores de partida — se a Zeve tiver cores oficiais, elas mandam.**

```css
:root {
  /* superfícies (dark-first — direção "Energia de Pregão") */
  --bg:        #070A0E;   /* fundo near-black */
  --surface:   #0E131A;   /* cards/sections */
  --border:    rgba(255,255,255,0.08);
  /* neutros (texto) */
  --text:      #F2F5F8;   /* primário */
  --text-2:    #9AA3AF;   /* secundário */
  --text-mut:  #7E8794;   /* apoio/legenda (AA 5.46:1 no --bg) */
  /* marca Zeve */
  --primary:   #1F6BFF;   /* azul Zeve (o "V") — CTAs e marca */
  --primary-hover: #3D82FF;
  --on-primary:#FFFFFF;   /* texto sobre o primário */
  --accent:    #6EA8FF;   /* azul claro — destaque/links (parcimônia) */
  /* dados de mercado — SÓ para números/gráficos, nunca decorativo */
  --up:   #1FB877;
  --down: #FF5A5F;
}
```

**Regras:**
- **Verde e vermelho são reservados para dado de mercado** (alta/baixa). Não use como cor decorativa — num site de trader eles têm significado.
- Primário (azul Zeve `#1F6BFF`) é a única cor de ação forte; um CTA primário por seção. No hero, o CTA principal pode ser branco (máximo contraste sobre o fundo escuro).
- Contraste mínimo AA (4.5:1 texto, 3:1 elementos grandes). Texto de apoio nunca some no fundo.
- Sem gradiente decorativo. Se usar gradiente, só sutil na mesma família (ex.: surface→bg).

---

## 4. Componentes (padrões)

- **Botão primário:** fundo `--primary`, texto `--on-primary`, `radius 10px`, `h-12`, `px-6`, peso 600; hover `--primary-hover` + leve `translateY(-1px)`. **Secundário:** borda `--border`, texto `--text`, fundo transparente. **Ghost:** só texto + hover sutil.
- **Card:** fundo `--surface`, `1px solid --border`, `radius 14px`, padding `24–32px`. Sombra só funcional (não decorativa). Borda > sombra.
- **Seção:** `py-24`, header com `h1` + lead opcional, conteúdo no grid de 8px. Alterne layout (não empilhe seções idênticas).
- **Badge/pill:** `caption`, `--accent` ou neutro, padding `4px 12px`, `radius full`.
- **Input:** `h-12`, fundo `--bg`, borda `--border`, focus ring `--accent` (2px), sem sombra interna.
- **Disclaimer/aviso de risco:** `caption`, `--text-mut`, legível (não esconder), sempre presente onde há oferta. Compliance > estética.

---

## 5. Movimento (framer-motion)

Sutil e com propósito — reforça hierarquia, não chama atenção pra si.
- **Reveal on scroll:** `opacity 0→1` + `y: 16→0`, `duration 0.5s`, `ease-out`, `viewport once`. Stagger de `0.06s` em listas.
- **Hover:** micro (`scale 1.02` ou `y -1px`, `0.2s`). Nada de bounce/spring exagerado.
- **Respeite `prefers-reduced-motion`** (desligue transform/opacity grandes).
- **Banido:** parallax em tudo, auto-play distrativo em loop, entradas de 1s+, elementos "voando" da tela.

---

## 6. Conteúdo / microcopy

- Específico e concreto. Verbo no comando ("Garanta sua vaga", não "Saiba mais").
- Nada de promessa de lucro/resultado. Vender **acesso e acompanhamento**.
- Números reais e fonte clara; se não tiver o dado, não invente. Deixe placeholder marcado `[ ]`.
- **Nunca usar travessão (—) na copy.** Use ponto, vírgula ou parênteses.

---

## 7. Checklist antes de entregar uma tela

- [ ] Zero itens da lista "Banido" da seção 0.
- [ ] Todo espaçamento é múltiplo de 8.
- [ ] Tipografia só usa tokens da escala; números com tabular figures.
- [ ] Verde/vermelho só em dado de mercado.
- [ ] Contraste AA em todo texto; disclaimer de risco legível onde há oferta.
- [ ] Movimento sutil + `prefers-reduced-motion` tratado.
- [ ] Responsivo (mobile-first) e sem layout genérico de "3 cards centralizados".
