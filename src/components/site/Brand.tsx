import { useState } from "react";
import { CalendarCheck, Menu, X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ADDRESS, waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import logoSticker from "@/assets/logo-sticker.webp";

export const LOGO_COLORS = [
  "text-primary",
  "text-secondary",
  "text-berry",
  "text-sky",
  "text-accent",
];
export const BG_CYCLE = ["bg-primary", "bg-secondary", "bg-berry", "bg-sky", "bg-accent"];

export function Rainbow({ text, className }: { text: string; className?: string }) {
  let i = 0;
  return (
    <span className={cn("text-outline inline-block", className)}>
      {text.split("").map((c, k) =>
        c === " " ? (
          <span key={k}> </span>
        ) : (
          <span key={k} className={cn("inline-block", LOGO_COLORS[i++ % LOGO_COLORS.length])}>
            {c}
          </span>
        ),
      )}
    </span>
  );
}

export function CTA({
  children = "Agendar visita",
  className,
  msg,
}: {
  children?: React.ReactNode;
  className?: string;
  msg?: string;
}) {
  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noopener"
      className={cn(
        "sticker inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-lg font-bold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-none active:translate-y-0",
        className,
      )}
    >
      <CalendarCheck className="h-5 w-5" /> {children}
    </a>
  );
}

export function SectionTitle({
  kicker,
  title,
  sub,
  center = true,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("mb-10 max-w-2xl", center && "mx-auto text-center")}>
      <span className="sticker-sm inline-block -rotate-2 rounded-full bg-secondary px-4 py-1 font-display text-sm font-semibold">
        {kicker}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

// "/#..." so the anchors also work from the blog pages.
const NAV = [
  ["/sobre", "Sobre nós"],
  ["/#dia", "O dia a dia"],
  ["/#proposta", "Proposta"],
  ["/#turmas", "Turmas"],
  ["/blog", "Blog"],
  ["/#duvidas", "Dúvidas"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-forest bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
        <a href="/#topo" className="shrink-0" aria-label="Quintal da Nona — início">
          <img
            src={logoSticker}
            alt="CEI Quintal da Nona"
            className="h-11 w-auto sm:h-14"
            width={160}
            height={56}
          />
        </a>
        <nav className="hidden items-center gap-6 font-display font-semibold lg:flex">
          {NAV.map(([h, l]) => (
            <a key={h} href={h} className="transition-colors hover:text-primary">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CTA className="hidden px-5 py-2.5 text-base sm:inline-flex" />
          <button
            onClick={() => setOpen(!open)}
            className="sticker-sm rounded-xl bg-card p-2 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="animate-rise border-t-2 border-forest bg-card px-4 py-4 lg:hidden">
          {NAV.map(([h, l]) => (
            <a
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-lg font-semibold"
            >
              {l}
            </a>
          ))}
          <CTA className="mt-3 w-full" />
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t-[3px] border-forest bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-center">
        <img src={logoSticker} alt="CEI Quintal da Nona" loading="lazy" className="h-16 w-auto" />
        <p className="text-sm text-muted-foreground">
          Escola de Educação Infantil e 1º ano em Campo Largo/PR · {ADDRESS}
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Quintal da Nona. Imagens ilustrativas.
        </p>
      </div>
      {/* Faixa de créditos da agência (cores e fonte próprias da Aatlas, fora do design system). */}
      <a
        href="https://www.aatlascompany.com.br/?utm_source=site_cliente&utm_medium=quintal-da-nona&utm_campaign=rodape&utm_id=01&utm_term=UTM&utm_content=botao"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-t-3xl bg-[#E09F3E] px-4 py-[18px] text-center text-[15.6px] tracking-[0.025em] no-underline transition-colors hover:bg-[#d4922f]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span className="font-medium text-[#3E3324]">Construído pela</span>{" "}
        <span className="font-bold text-black">AATLAS</span>
      </a>
    </footer>
  );
}
