# Design System — Quintal da Nona

Estilo: **caderno infantil + sticker**. Cores vivas, contorno escuro grosso, sombra dura deslocada, leve rotação, rabiscos e girassóis. Tom acolhedor e brincalhão.

Fonte da verdade: `src/styles.css` (tokens + utilities). Componentes do site: `src/components/site/`. Página: `src/routes/index.tsx`.

---

## 1. Cores

Todas em `oklch`. Definidas em `:root`, expostas ao Tailwind via `@theme inline` (`--color-<nome>` → `bg-<nome>`, `text-<nome>`, `border-<nome>`, `fill-<nome>`).

### Marca (paleta do logo)

| Token | Valor | Papel | Classe |
|---|---|---|---|
| `--primary` | `oklch(0.6 0.19 145)` | Verde folha. CTA principal, faixas, destaques | `bg-primary` / `text-primary` |
| `--secondary` | `oklch(0.9 0.18 100)` | Amarelo girassol. Kickers, badges, estrelas | `bg-secondary` |
| `--accent` | `oklch(0.7 0.19 50)` | Laranja. Ícones, pétalas | `bg-accent` |
| `--berry` | `oklch(0.6 0.23 27)` | Vermelho. Palavras-destaque, corações, margem do caderno | `text-berry` / `bg-berry` |
| `--sky` | `oklch(0.55 0.21 260)` | Azul. Texto manuscrito, links, bloco 1º ano. Também é o `--ring` | `text-sky` / `bg-sky` |
| `--forest` | `oklch(0.22 0.02 260)` | Contorno de stickers, bordas, sombras duras | `border-forest` / `text-forest` |
| `--whatsapp` | `oklch(0.68 0.17 150)` | Só botão/ações do WhatsApp | `bg-whatsapp` |

Ciclos usados em sequência (ícones, avatares, blocos ABC):

```ts
const LOGO_COLORS = ["text-primary", "text-secondary", "text-berry", "text-sky", "text-accent"];
const BG_CYCLE    = ["bg-primary", "bg-secondary", "bg-berry", "bg-sky", "bg-accent"];
```

### Fundos suaves (cards e seções)

| Token | Valor | Classe |
|---|---|---|
| `--leaf-soft` | `oklch(0.92 0.06 140)` | `bg-leaf-soft` |
| `--sun-soft` | `oklch(0.95 0.07 90)` | `bg-sun-soft` |
| `--clay-soft` | `oklch(0.92 0.05 50)` | `bg-clay-soft` |
| `--sky-soft` | `oklch(0.93 0.04 230)` | `bg-sky-soft` |

### Neutros (shadcn)

| Token | Valor | Uso |
|---|---|---|
| `--background` | `oklch(0.985 0.012 95)` | Papel creme da página |
| `--foreground` | `oklch(0.22 0.02 260)` | Texto (igual ao `forest`) |
| `--card` / `--popover` | `oklch(0.995 0.008 85)` | Superfícies brancas quentes |
| `--muted` | `oklch(0.94 0.025 85)` | Fundo discreto |
| `--muted-foreground` | `oklch(0.45 0.02 260)` | Texto de apoio, subtítulos |
| `--border` | `oklch(0.9 0.02 95)` | Borda padrão (`*`) |
| `--input` | `oklch(0.88 0.03 85)` | Borda de input |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Erro |

Texto sobre `primary`, `berry`, `sky`, `accent`: `text-primary-foreground` (creme). Sobre `secondary`: `text-forest`.

> Não há modo escuro definido (só `:root`). Variante `dark:` existe mas sem tokens.

---

## 2. Tipografia

Carregadas do Google Fonts em `src/routes/__root.tsx`.

| Família | Token / classe | Pesos | Uso |
|---|---|---|---|
| **Fredoka** | `--font-display` / `font-display` | 500, 600, 700 | `h1–h4` (automático), botões, nav, kickers, números |
| **Nunito** | `--font-sans` / `font-sans` | 400, 600, 700, 800 | Corpo (padrão do `body`) |
| **Caveat** | `--font-hand` / `font-hand` | 600, 700 | Frases manuscritas, legendas de polaroid, citações |

Headings: `letter-spacing: -0.01em`.

Escala usada:

| Elemento | Classes |
|---|---|
| H1 hero | `text-[2.6rem] sm:text-6xl lg:text-7xl font-bold leading-[1.05]` |
| H2 seção | `text-3xl sm:text-5xl font-bold leading-tight` |
| H3 card | `text-xl font-bold` (ou `text-lg`) |
| Lead | `text-lg sm:text-xl text-muted-foreground` |
| Corpo | `text-base` / `text-muted-foreground` |
| Manuscrito | `font-hand text-2xl`–`text-3xl text-sky` |
| Rótulo | `text-xs font-bold uppercase tracking-wide text-muted-foreground` |

Destaque de palavra no título: `<span className="text-primary">` ou `text-berry`. Palavra-arco-íris: componente `Rainbow` (cada letra cicla `LOGO_COLORS` + `text-outline`).

---

## 3. Forma, borda e sombra

- `--radius: 1.25rem`. Escala: `rounded-sm … rounded-4xl` = radius −4px … +16px.
- Uso real: botões e pílulas `rounded-full`; ícones `rounded-2xl`; cards `rounded-3xl`; blocos grandes `rounded-[2.5rem]`; foto hero `blob-mask`.
- Bordas internas entre imagem e conteúdo: `border-[3px] border-forest`. Header: `border-b-2 border-forest`.

| Utility / token | Definição | Uso |
|---|---|---|
| `sticker` | borda 3px `forest` + sombra `5px 5px 0` `forest` | Cards, CTA, fotos |
| `sticker-sm` | borda 2.5px + sombra `3px 3px 0` | Ícones, pílulas, badges |
| `shadow-pop` | `6px 6px 0 0 forest` | Painel do widget WhatsApp |
| `shadow-soft` | sombra difusa `forest` 35% | Botão flutuante, balão |
| `text-outline` | contorno 2px + sombra 3px `forest` | Texto `Rainbow` |

Rotação leve dá o ar "colado no caderno": `-rotate-2`, `rotate-1`, `rotate-2`, `-rotate-3`.

---

## 4. Texturas e decoração

| Utility / classe | Efeito | Onde |
|---|---|---|
| `notebook` | linhas azuis de caderno a cada 34px | Hero |
| `paper-dots` | pontos `forest` 10% a cada 22px | Seções "Dia", "Mídia", widget |
| `blob-mask` | borda orgânica | Foto do hero |
| Margem do caderno | `w-0.5 bg-berry/40` vertical | Hero |
| Sublinhado desenhado | SVG com `stroke="var(--secondary)"` + `draw-line` | Palavra "natureza" |
| Onda | SVG `fill-primary` no rodapé do hero | Transição hero → faixa verde |
| Doodles lucide | `Sun`, `Star`, `Heart` com `fill-*` + `text-forest` | Espalhados, `aria-hidden` |
| `SunflowerBackground` | 2 girassóis SVG, opacidade ~0.12, parallax no scroll | Seções com `sunflower-section` |

`SunflowerBackground`: colocar como primeiro filho de uma `<section className="sunflower-section …">`. Prop `hero` ajusta a posição. É só decorativo (`aria-hidden`, `pointer-events: none`) e respeita `prefers-reduced-motion`.

---

## 5. Movimento

| Utility | Animação |
|---|---|
| `animate-rise` | entra subindo 24px, 0.9s. Escalonar com `style={{ animationDelay: ".1s" }}` |
| `animate-float` | flutua 12px, 5s loop. Rotação base via `--r` |
| `animate-spin-slow` | gira 22s (sol, selo circular) |
| `animate-wiggle` | balança ±4°, 3s |
| `animate-pulse-ring` | anel verde WhatsApp, 1.8s |
| `draw-line` | desenha traço SVG em 1.4s |
| `.reveal` / `<Reveal delay>` | fade + subida ao entrar na tela (IntersectionObserver). Delay em ms, passo típico 60–120 |

Hover: cards `hover:-translate-y-1` (+ `hover:-rotate-1`); imagens `group-hover:scale-110 duration-700`; CTA `hover:-translate-y-1 hover:shadow-none`.

`prefers-reduced-motion: reduce` desliga todas as animações e o `.reveal`.

---

## 6. Layout

- Container: `mx-auto max-w-7xl px-6` (FAQ `max-w-3xl`, Quem cuida `max-w-6xl`).
- Ritmo vertical de seção: `py-20 sm:py-28`.
- Grids: cards `sm:grid-cols-2 lg:grid-cols-4`; turmas `grid-cols-2 lg:grid-cols-5`; depoimentos `md:grid-cols-3`; blocos split `lg:grid-cols-2`.
- Gaps: `gap-4`–`gap-6` entre cards, `gap-12`–`gap-14` entre colunas.
- Raiz: `overflow-x-clip` evita scroll lateral pelos decorativos.
- Alternância de fundo das seções: creme (com girassol/textura) → cor suave (`sun-soft`, `leaf-soft`, `sky-soft`) → creme…

---

## 7. Componentes

### CTA (botão principal)
Sempre leva ao WhatsApp via `waLink(msg)` de `src/lib/whatsapp.ts`.
```
sticker inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4
font-display text-lg font-bold text-primary-foreground
hover:-translate-y-1 hover:shadow-none
```
Ícone `CalendarCheck`. Variante em fundo verde/azul: `bg-secondary text-forest`.

### Link secundário
`font-display font-semibold underline decoration-secondary decoration-4 underline-offset-4`

### SectionTitle (kicker + título + sub)
Kicker: `sticker-sm -rotate-2 rounded-full bg-secondary px-4 py-1 font-display text-sm font-semibold`. Envolto em `<Reveal>`. Centralizado por padrão (`center={false}` alinha à esquerda).

### Pílula / badge
`sticker-sm inline-flex items-center gap-1.5 rounded-full bg-card|bg-secondary|bg-leaf-soft px-3 py-1.5 text-sm font-bold`

### Card de foto
`sticker rounded-3xl overflow-hidden bg-*-soft` → imagem `aspect-[4/3]` com `border-b-[3px] border-forest` → corpo `p-5` com ícone sobreposto `-mt-11`.

### Ícone em bloco
`sticker-sm grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground` + cor do `BG_CYCLE`. Tamanhos 10/12/14. Ícone `h-6 w-6`.

### Card de pilar / depoimento
`sticker rounded-3xl bg-card p-5|p-6`. Depoimentos com rotação alternada `md:rotate-1` / `md:-rotate-1 md:translate-y-4`. Estrelas: `Star fill-secondary text-forest`.

### Polaroid
`bg-card p-2 pb-6 sticker-sm rotate-[-8deg]` + legenda `font-hand text-xl`.

### Acordeão (FAQ)
`sticker rounded-2xl bg-card`, pergunta `font-display text-lg font-semibold p-5`, abre com `grid-rows-[0fr] → [1fr]`, `ChevronDown rotate-180`. Usa `aria-expanded`.

### Header
Sticky, `bg-background/90 backdrop-blur border-b-2 border-forest`. Nav `font-display font-semibold hover:text-primary`. Menu mobile: botão `sticker-sm rounded-xl`.

### Bloco destaque (1º ano / CTA final)
`sticker rounded-[2.5rem] overflow-hidden bg-sky|bg-primary text-primary-foreground lg:grid-cols-2`, mídia separada por `border-[3px] border-forest`.

### Blog (`PostCard.tsx`, `src/routes/blog/`)
Card `sticker rounded-3xl bg-card` com capa (foto, ou ícone em `sticker` sobre a cor do post + `paper-dots`) e `CategoryPill` na cor do post. Variante `featured` em 2 colunas no desktop. Artigo: corpo `max-w-2xl text-lg leading-relaxed`, listas com `Sprout`, citação `font-hand text-sky` em sticker, dica em `bg-sun-soft` com `Lightbulb`.

### WhatsAppWidget
Botão flutuante `h-16 w-16 rounded-full bg-whatsapp animate-pulse-ring shadow-soft`. Painel `rounded-3xl border-2 border-forest shadow-pop`, topo `bg-primary`, corpo `paper-dots`. Input: `rounded-xl border-2 border-border focus:border-primary`.

---

## 8. Ícones e imagens

- Ícones: **lucide-react**. Traço padrão; doodles com `strokeWidth={1.5}`.
- Imagens: `object-cover`, `loading="lazy"` (exceto hero), `width`/`height` explícitos, `alt` descritivo em português.
- Decorativos sempre `aria-hidden`.

---

## 9. Regras

1. Cor nova: adicionar em `:root` **e** registrar em `@theme inline` como `--color-<nome>`. Sempre `oklch`.
2. Contorno e sombra são sempre `forest`, nunca preto puro.
3. Todo elemento "colável" usa `sticker` ou `sticker-sm`, não `shadow-*` comum.
4. Contato/WhatsApp só via `src/lib/whatsapp.ts`.
5. Movimento novo precisa funcionar com `prefers-reduced-motion`.
6. Componentes `src/components/ui/*` (shadcn, estilo new-york) existem mas a landing usa os padrões acima.
