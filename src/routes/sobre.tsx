import { createFileRoute } from "@tanstack/react-router";
import {
  Apple,
  BookOpen,
  Compass,
  Eye,
  Heart,
  HeartHandshake,
  Leaf,
  School,
  ShieldCheck,
  Sprout,
  Star,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SunflowerBackground } from "@/components/site/SunflowerBackground";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { CTA, Footer, Header, Rainbow, SectionTitle } from "@/components/site/Brand";
import { Profes } from "@/components/site/Profes";
import { cn } from "@/lib/utils";
import logoRound from "@/assets/logo-quintal.webp";
import bercario from "@/assets/bercario.webp";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós | Quintal da Nona — Educação Infantil em Campo Largo/PR" },
      {
        name: "description",
        content:
          "Conheça a história, a equipe e os valores do Quintal da Nona, escola de Educação Infantil e 1º ano em Campo Largo/PR.",
      },
      { property: "og:title", content: "Sobre o Quintal da Nona" },
      {
        property: "og:description",
        content: "Uma escola feita por educadores, com jeito de casa.",
      },
    ],
  }),
  component: Sobre,
});

// Text in [brackets] is a placeholder to fill in.
const HISTORIA = [
  "O Quintal da Nona nasceu em [ano de fundação] do sonho de Izabel e Márcio Gardin: criar um lugar onde a criança fosse vista por inteiro, junto com a sua família e a sua história.",
  "[Conte aqui como tudo começou: de onde veio a ideia, o primeiro dia, a primeira turma, uma lembrança marcante.]",
  "O nome é uma homenagem à “nona”, a avó na tradição italiana tão presente em Campo Largo. É ela quem acolhe sem pressa, conta história, deixa mexer na massa e ensina sem parecer que está ensinando. É esse o jeito que queremos ter com cada criança.",
  "[Conte como a escola cresceu até hoje: mudanças de espaço, novas turmas, a chegada do 1º ano em 2027.]",
];

const PILARES = [
  {
    i: Compass,
    t: "Missão",
    d: "[Escreva a missão da escola. Ex.: Educar crianças felizes, seguras e pertencentes, em contato diário com a natureza e em parceria com as famílias.]",
  },
  {
    i: Eye,
    t: "Visão",
    d: "[Escreva a visão da escola. Ex.: Ser referência em Campo Largo em uma infância vivida com tempo, natureza e afeto.]",
  },
  {
    i: Heart,
    t: "Valores",
    d: "Respeito ao tempo da criança · Vínculo com a família · Natureza todos os dias · [outro valor] · [outro valor]",
  },
];

const NUMEROS = [
  { n: "[X]", l: "anos de história" },
  { n: "[X]", l: "crianças no Quintal" },
  { n: "7", l: "salas climatizadas" },
  { n: "4,9", l: "nota no Google" },
];

const ESTRUTURA = [
  [ShieldCheck, "Espaço seguro e acessível"],
  [School, "7 salas climatizadas"],
  [BookOpen, "Biblioteca e sala de leitura"],
  [Apple, "Merendeira e nutricionista"],
  [Sprout, "Horta cuidada pelas crianças"],
  [Leaf, "Quintal amplo e coelhos"],
  [Users, "Turmas pequenas"],
  [HeartHandshake, "Adaptação com a família"],
] as const;

function Sobre() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <section className="relative overflow-hidden notebook">
          <SunflowerBackground hero />
          <div
            className="pointer-events-none absolute inset-y-0 left-6 w-0.5 bg-berry/40 sm:left-12"
            aria-hidden
          />
          <Star
            className="animate-float absolute right-[10%] top-10 hidden h-8 w-8 fill-sky text-forest sm:block"
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-14 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="animate-rise sticker-sm inline-block -rotate-2 rounded-full bg-secondary px-4 py-1 font-display text-sm font-semibold">
                Sobre nós
              </span>
              <h1
                className="animate-rise mt-5 text-[2.6rem] font-bold leading-[1.05] sm:text-6xl"
                style={{ animationDelay: ".1s" }}
              >
                Uma escola com jeito de <Rainbow text="casa" className="text-[1.05em]" /> de vó
              </h1>
              <p
                className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
                style={{ animationDelay: ".2s" }}
              >
                Somos uma escola de Educação Infantil e 1º ano em Campo Largo/PR, feita por
                educadores, onde o quintal é a maior sala de aula e a família faz parte de tudo.
              </p>
              <p
                className="animate-rise mt-3 font-hand text-3xl text-sky"
                style={{ animationDelay: ".25s" }}
              >
                “Onde o pertencimento floresce” 🌻
              </p>
            </div>
            <div
              className="animate-rise relative mx-auto w-full max-w-md"
              style={{ animationDelay: ".15s" }}
            >
              <div className="sticker blob-mask overflow-hidden bg-primary">
                <img
                  src={bercario}
                  alt="Professora lendo uma história para as crianças"
                  width={1024}
                  height={1024}
                  fetchPriority="high"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="sticker absolute -bottom-6 -left-4 grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-card sm:-left-8">
                <img
                  src={logoRound}
                  alt=""
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 lg:grid-cols-4">
            {NUMEROS.map(({ n, l }, k) => (
              <Reveal key={l} delay={k * 90} className="text-center">
                <p className="font-display text-4xl font-bold sm:text-5xl">{n}</p>
                <p className="mt-1 text-sm font-semibold opacity-90">{l}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="sunflower-section paper-dots py-20 sm:py-28">
          <SunflowerBackground />
          <div className="mx-auto max-w-3xl px-6">
            <SectionTitle
              kicker="Nossa história"
              title={
                <>
                  Começou com um <span className="text-berry">sonho</span>
                </>
              }
            />
            <Reveal className="sticker rounded-3xl bg-card p-6 sm:p-10">
              {HISTORIA.map((t, k) => (
                <p
                  key={k}
                  className={cn("text-lg leading-relaxed text-foreground/85", k > 0 && "mt-5")}
                >
                  {t}
                </p>
              ))}
              <p className="mt-8 font-hand text-2xl text-muted-foreground">
                — Izabel e Márcio Gardin
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-leaf-soft py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle kicker="No que acreditamos" title="Missão, visão e valores" />
            <div className="grid gap-6 md:grid-cols-3">
              {PILARES.map(({ i: I, t, d }, k) => (
                <Reveal key={t} delay={k * 110}>
                  <div
                    className={cn(
                      "sticker h-full rounded-3xl bg-card p-6",
                      k === 1 ? "md:-rotate-1" : "md:rotate-1",
                    )}
                  >
                    <div
                      className={cn(
                        "sticker-sm grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground",
                        ["bg-primary", "bg-sky", "bg-berry"][k],
                      )}
                    >
                      <I className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">{t}</h3>
                    <p className="mt-2 text-lg text-muted-foreground">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="profes" className="bg-sun-soft py-20 sm:py-28">
          <Profes />
        </section>

        <section className="sunflower-section py-20 sm:py-28">
          <SunflowerBackground />
          <div className="mx-auto max-w-5xl px-6">
            <SectionTitle
              kicker="Nossa estrutura"
              title={
                <>
                  Pensada para <span className="text-primary">explorar</span> com segurança
                </>
              }
              sub="[Descreva o espaço: tamanho do quintal, como são as salas, áreas especiais.]"
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {ESTRUTURA.map(([I, t], k) => (
                <Reveal
                  key={t}
                  as="li"
                  delay={(k % 4) * 70}
                  className="sticker-sm flex items-center gap-3 rounded-2xl bg-card p-4 font-semibold"
                >
                  <I className="h-6 w-6 shrink-0 text-primary" /> {t}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 pb-20 sm:pb-28">
          <Reveal className="sticker mx-auto max-w-4xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">Venha nos conhecer!</h2>
            <p className="mx-auto mt-3 max-w-md text-lg opacity-95">
              A visita é o melhor jeito de sentir a escola. Traga o seu filho para brincar no
              quintal.
            </p>
            <CTA
              className="mt-7 bg-secondary text-forest"
              msg="Olá! Li a página Sobre nós e quero agendar uma visita ao Quintal da Nona."
            >
              Agendar visita
            </CTA>
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
