import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BG_CYCLE, SectionTitle } from "@/components/site/Brand";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const FOTOS = import.meta.glob<string>("../../assets/profes/*.webp", {
  eager: true,
  import: "default",
});

type Pessoa = {
  /** File name in src/assets/profes/ (480x504 WebP, without extension). */
  foto: string;
  nome: string;
  /** e.g. "Profe do Berçário", "Cozinha", "Direção". */
  funcao: string;
  frase: string;
};

// Text in [brackets] is a placeholder to fill in. Order here = order in the carousel.
const EQUIPE: Pessoa[] = [
  { foto: "profe-01", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-02", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-03", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-04", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-05", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-06", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-07", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-08", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-09", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-10", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-11", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-12", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-13", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-14", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-15", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-16", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-17", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
  { foto: "profe-18", nome: "[Nome]", funcao: "[Função]", frase: "[Uma frase sobre a infância]" },
];

const fotoUrl = (foto: string) => FOTOS[`../../assets/profes/${foto}.webp`];

/** Team carousel: native scroll-snap, arrows scroll one view. */
export function Profes() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    el?.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-7xl px-6">
      <SectionTitle
        kicker="Quem faz o Quintal acontecer"
        title={
          <>
            Nossas <span className="text-primary">profes</span> e{" "}
            <span className="text-berry">profissionais</span>
          </>
        }
        sub="Das salas à cozinha, da limpeza à direção: cada pessoa daqui cuida da infância do seu filho com carinho."
      />

      <div className="relative">
        <ul
          ref={track}
          aria-label="Equipe do Quintal da Nona"
          className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {EQUIPE.map((p, k) => (
            <li key={p.foto} className="w-[72%] shrink-0 snap-center sm:w-[44%] lg:w-[23%]">
              <Reveal delay={(k % 4) * 90} className="text-center">
                <div
                  className={cn(
                    "sticker blob-mask relative mx-auto aspect-[4/4.2] overflow-hidden",
                    BG_CYCLE[k % BG_CYCLE.length],
                    k % 2 ? "rotate-2" : "-rotate-2",
                  )}
                >
                  <img
                    src={fotoUrl(p.foto)}
                    alt={`${p.nome}, ${p.funcao} no Quintal da Nona`}
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={504}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span
                  className={cn(
                    "sticker-sm relative -mt-4 inline-block -rotate-2 rounded-full px-3 py-1 font-display text-sm font-semibold",
                    k % BG_CYCLE.length === 1
                      ? "bg-secondary text-forest"
                      : cn(BG_CYCLE[k % BG_CYCLE.length], "text-primary-foreground"),
                  )}
                >
                  {p.funcao}
                </span>
                <h3 className="mt-3 text-xl font-bold">{p.nome}</h3>
                <p className="mt-1 font-hand text-2xl leading-tight text-sky">{p.frase}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => scroll(-1)}
            aria-label="Anteriores"
            className="sticker-sm grid h-12 w-12 place-items-center rounded-full bg-card transition-transform hover:-translate-y-0.5"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Próximas"
            className="sticker-sm grid h-12 w-12 place-items-center rounded-full bg-secondary transition-transform hover:-translate-y-0.5"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
