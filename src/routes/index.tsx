import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Apple,
  Baby,
  BookOpen,
  ChefHat,
  ChevronDown,
  Clock,
  Heart,
  HeartHandshake,
  Leaf,
  MapPin,
  Newspaper,
  Palette,
  Phone,
  Rabbit,
  School,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Sun,
  Users,
  Instagram,
  GraduationCap,
  Mic,
  Tv,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SunflowerBackground } from "@/components/site/SunflowerBackground";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { BG_CYCLE, CTA, Footer, Header, Rainbow, SectionTitle } from "@/components/site/Brand";
import { PostCard } from "@/components/site/PostCard";
import { Profes } from "@/components/site/Profes";
import { VideoInstitucional } from "@/components/site/VideoInstitucional";
import { ADDRESS, PHONE_DISPLAY } from "@/lib/whatsapp";
import { POSTS } from "@/lib/blog";
import { cn } from "@/lib/utils";
import logoRound from "@/assets/logo-quem-cuida.webp";
import hero from "@/assets/hero-quintal.webp";
import horta from "@/assets/horta.webp";
import coelhos from "@/assets/coelhos.webp";
import culinaria from "@/assets/culinaria.webp";
import bercario from "@/assets/bercario.webp";
import arte from "@/assets/arte.webp";
import primeiroAno from "@/assets/primeiro-ano.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quintal da Nona | Escola de Educação Infantil em Campo Largo/PR" },
      {
        name: "description",
        content:
          "Berçário ao 1º ano em Campo Largo. Aqui seu filho aprende brincando com a natureza: horta, animais, culinária e vínculo com a família. Agende sua visita.",
      },
      { property: "og:title", content: "Quintal da Nona | Onde o pertencimento floresce" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Escola de Educação Infantil em Campo Largo/PR. Natureza todos os dias. Agende uma visita pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden notebook">
      <SunflowerBackground hero />
      {/* margem vermelha do caderno */}
      <div
        className="pointer-events-none absolute inset-y-0 left-6 w-0.5 bg-berry/40 sm:left-12"
        aria-hidden
      />
      {/* doodles */}
      <Sun
        className="pointer-events-none animate-spin-slow absolute right-5 top-1 h-8 w-8 text-secondary sm:right-8 sm:top-3 sm:h-16 sm:w-16 lg:h-28 lg:w-28"
        strokeWidth={1.5}
        aria-hidden
      />
      <Star
        className="animate-float absolute left-[8%] top-24 hidden h-8 w-8 fill-sky text-forest sm:block lg:left-[4%]"
        aria-hidden
      />
      <Heart
        className="animate-float absolute bottom-24 left-[46%] hidden h-7 w-7 fill-berry text-forest lg:block"
        style={{ animationDelay: "1s" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 sm:px-14 lg:min-h-[calc(100svh-174px)] lg:grid-cols-[1.15fr_1fr] lg:pb-[4.5rem] lg:pt-8">
        <div className="relative z-10">
          <div className="animate-rise flex flex-wrap items-center gap-2">
            <span className="sticker-sm inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-sm font-bold">
              <MapPin className="h-4 w-4 text-berry" /> Campo Largo/PR
            </span>
            <span className="sticker-sm inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-bold">
              <Sparkles className="h-4 w-4" /> Matrículas 2027 abertas
            </span>
          </div>

          <h1
            className="animate-rise mt-6 text-[2.6rem] font-bold leading-[1.05] sm:text-6xl lg:mt-5 lg:text-[3.25rem]"
            style={{ animationDelay: ".1s" }}
          >
            Aqui seu filho aprende <Rainbow text="brincando" className="text-[1.08em]" /> com a{" "}
            <span className="relative inline-block text-primary">
              natureza
              <svg viewBox="0 0 300 24" className="absolute -bottom-3 left-0 w-full" aria-hidden>
                <path
                  d="M4 16 C 60 4, 120 22, 180 10 S 280 6, 296 14"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  className="draw-line"
                />
              </svg>
            </span>
            .
          </h1>

          <p
            className="animate-rise mt-7 max-w-xl text-lg text-muted-foreground sm:text-xl lg:mt-5 lg:text-lg"
            style={{ animationDelay: ".2s" }}
          >
            Do <strong className="text-foreground">Berçário ao 1º ano</strong>, com horta,
            bichinhos, culinária e muito vínculo com a sua família.
          </p>

          <p
            className="animate-rise mt-3 font-hand text-3xl text-sky lg:mt-3 lg:text-2xl"
            style={{ animationDelay: ".25s" }}
          >
            “Onde o pertencimento floresce” 🌻
          </p>

          <div
            className="animate-rise mt-8 flex flex-col gap-4 lg:mt-7 sm:flex-row sm:items-center"
            style={{ animationDelay: ".3s" }}
          >
            <CTA />
            <a
              href="#dia"
              className="inline-flex items-center justify-center gap-1 font-display font-semibold underline decoration-secondary decoration-4 underline-offset-4"
            >
              Ver como é um dia aqui <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          <div
            className="animate-rise mt-8 flex items-center gap-3 lg:mt-6"
            style={{ animationDelay: ".4s" }}
          >
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-forest" />
              ))}
            </div>
            <p className="text-sm font-semibold">
              <span className="font-display text-lg">4,9</span> no Google · famílias de Campo Largo
            </p>
          </div>
        </div>

        {/* Colagem pedagógica */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-[420px]">
          <div
            className="animate-rise sticker blob-mask relative overflow-hidden bg-primary"
            style={{ animationDelay: ".15s" }}
          >
            <img
              src={hero}
              fetchPriority="high"
              alt="Crianças brincando descalças no quintal da escola entre girassóis"
              width={1280}
              height={883}
              className="aspect-[4/4.2] w-full object-cover"
            />
          </div>

          {/* polaroid */}
          <div
            className="animate-float absolute -bottom-10 -left-4 w-32 rotate-[-8deg] bg-card p-2 pb-6 sticker-sm sm:-left-10 sm:w-40"
            style={{ ["--r" as string]: "-8deg" }}
          >
            <img
              src={horta}
              alt="Crianças plantando na horta"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
            <p className="mt-1 text-center font-hand text-xl">nossa horta!</p>
          </div>

          {/* blocos ABC */}
          <div className="absolute -top-5 left-6 flex gap-1.5 sm:left-10">
            {["A", "B", "C"].map((l, i) => (
              <span
                key={l}
                className={cn(
                  "animate-float sticker-sm grid h-11 w-11 place-items-center rounded-lg font-display text-xl font-bold text-primary-foreground",
                  BG_CYCLE[i + 2],
                )}
                style={{ animationDelay: `${i * 0.4}s`, ["--r" as string]: `${(i - 1) * 8}deg` }}
              >
                {l}
              </span>
            ))}
          </div>

          {/* badge rotativo */}
          <div className="absolute -right-2 top-1/3 sm:-right-6">
            <div className="sticker-sm relative grid h-28 w-28 place-items-center rounded-full bg-secondary">
              <svg
                viewBox="0 0 100 100"
                className="animate-spin-slow absolute inset-0 h-full w-full"
                aria-hidden
              >
                <defs>
                  <path id="circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <text className="fill-forest font-display text-[11px] font-bold tracking-[2px]">
                  <textPath href="#circ">NATUREZA • TODOS • OS • DIAS •</textPath>
                </text>
              </svg>
              <Sprout className="h-9 w-9 text-primary" />
            </div>
          </div>

          {/* card idade */}
          <div
            className="animate-float sticker absolute -bottom-6 right-2 rounded-2xl bg-card px-4 py-3 sm:right-6"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Turmas
            </p>
            <p className="font-display text-lg font-bold">0 a 6 anos</p>
          </div>
        </div>
      </div>

      {/* onda */}
      <svg
        viewBox="0 0 1440 80"
        className="absolute bottom-0 left-0 w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z"
          className="fill-primary"
        />
      </svg>
    </section>
  );
}

function ProofStrip() {
  const items = [
    { i: Star, t: "4,9 no Google", s: "avaliação das famílias" },
    { i: Leaf, t: "Natureza", s: "todos os dias" },
    { i: Users, t: "Turmas pequenas", s: "olhar para cada criança" },
    { i: Apple, t: "Alimentação", s: "com nutricionista" },
  ];
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 lg:grid-cols-4 lg:py-6">
        {items.map(({ i: I, t, s }, k) => (
          <Reveal key={t} delay={k * 90} className="flex items-center gap-3">
            <div
              className={cn(
                "sticker-sm grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-forest",
                ["bg-secondary", "bg-card", "bg-secondary", "bg-card"][k],
              )}
            >
              <I className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="font-display text-lg font-bold leading-tight">{t}</p>
              <p className="text-sm opacity-90">{s}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function DiaNoQuintal() {
  const cards = [
    {
      img: horta,
      i: Sprout,
      t: "Mãos na terra",
      d: "Plantamos, regamos e colhemos. Aprendem ciência e paciência.",
      c: "bg-leaf-soft",
    },
    {
      img: coelhos,
      i: Rabbit,
      t: "Cuidar dos bichinhos",
      d: "Os coelhos do Quintal ensinam empatia e responsabilidade.",
      c: "bg-sky-soft",
    },
    {
      img: culinaria,
      i: ChefHat,
      t: "Culinária",
      d: "Medir, misturar e provar: matemática e autonomia na prática.",
      c: "bg-sun-soft",
    },
    {
      img: arte,
      i: Palette,
      t: "Arte e releituras",
      d: "Mondrian no quintal! Cores, formas e muita expressão.",
      c: "bg-clay-soft",
    },
  ];
  return (
    <section id="dia" className="sunflower-section paper-dots py-20 sm:py-28">
      <SunflowerBackground />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          kicker="Um dia no Quintal"
          title={
            <>
              Mostrar antes de <span className="text-berry">explicar</span>
            </>
          }
          sub="Assim é a rotina das crianças: brincar, explorar e aprender com o corpo inteiro."
        />
        <Reveal className="mb-14">
          <VideoInstitucional />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ img, i: I, t, d, c }, k) => (
            <Reveal key={t} delay={k * 110}>
              <article
                className={cn(
                  "sticker group h-full overflow-hidden rounded-3xl transition-transform hover:-rotate-1 hover:-translate-y-1",
                  c,
                )}
              >
                <div className="overflow-hidden border-b-[3px] border-forest">
                  <img
                    src={img}
                    alt={t}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div
                    className={cn(
                      "sticker-sm relative z-10 -mt-11 mb-3 grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground",
                      BG_CYCLE[k + 1],
                    )}
                  >
                    <I className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proposta() {
  const pilares = [
    {
      i: Leaf,
      t: "Natureza todo dia",
      d: "Brincar ao ar livre, na terra e até na chuva. O quintal é a nossa maior sala de aula.",
      c: "bg-primary",
    },
    {
      i: HeartHandshake,
      t: "Vínculo com a família",
      d: "Vemos a criança junto com a família e a história dela. Vocês fazem parte da escola.",
      c: "bg-berry",
    },
    {
      i: Clock,
      t: "Respeito ao tempo",
      d: "Cada criança tem seu ritmo. Adaptação acolhedora e brincar livre, com a criança como protagonista.",
      c: "bg-sky",
    },
  ];
  return (
    <section id="proposta" className="relative overflow-hidden bg-sun-soft py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <SectionTitle
            center={false}
            kicker="Nossa proposta"
            title={
              <>
                Pedagogia sistêmica, <span className="text-primary">em linguagem simples</span>
              </>
            }
            sub="Inspirada em Piaget, Paulo Freire e Renata Meirelles: a criança aprende quando se sente segura, pertencente e livre para explorar."
          />
          <div className="space-y-5">
            {pilares.map(({ i: I, t, d, c }, k) => (
              <Reveal
                key={t}
                delay={k * 120}
                className="sticker flex gap-4 rounded-3xl bg-card p-5"
              >
                <div
                  className={cn(
                    "sticker-sm grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-primary-foreground",
                    c,
                  )}
                >
                  <I className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold">{t}</h3>
                  <p className="mt-1 text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <CTA>Quero conhecer a proposta</CTA>
          </Reveal>
        </div>
        <Reveal className="relative">
          <div className="sticker rotate-2 overflow-hidden rounded-[2.5rem]">
            <img
              src={bercario}
              alt="Professora lendo uma história para bebês"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="sticker absolute -bottom-6 -left-2 max-w-[230px] -rotate-3 rounded-2xl bg-card p-4 sm:-left-8">
            <p className="font-hand text-2xl leading-tight">
              “Brincar é a forma mais séria de aprender.”
            </p>
          </div>
          <div className="absolute -right-3 -top-4 flex flex-wrap gap-2">
            {["Yoga infantil", "Psicomotricidade", "Literatura"].map((t, i) => (
              <span
                key={t}
                className={cn(
                  "sticker-sm rounded-full px-3 py-1 text-sm font-bold",
                  ["bg-secondary", "bg-card", "bg-leaf-soft"][i],
                )}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Turmas() {
  const turmas = [
    { n: "Berçário", a: "a partir de 4 meses", i: Baby },
    { n: "Infantil I", a: "1 ano", i: Heart },
    { n: "Infantil II", a: "2 anos", i: Sun },
    { n: "Infantil III", a: "3 anos", i: Sprout },
    { n: "Infantil IV", a: "4 a 5 anos", i: BookOpen },
  ];
  return (
    <section id="turmas" className="sunflower-section py-20 sm:py-28">
      <SunflowerBackground />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          kicker="Turmas e horários"
          title={
            <>
              Tem lugar para o seu <Rainbow text="pequeno" />
            </>
          }
          sub="Meio período (manhã ou tarde) e período integral."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {turmas.map(({ n, a, i: I }, k) => (
            <Reveal key={n} delay={k * 80}>
              <div
                className={cn(
                  "sticker flex h-full flex-col items-center rounded-3xl p-5 text-center transition-transform hover:-translate-y-1.5",
                  ["bg-leaf-soft", "bg-sun-soft", "bg-clay-soft", "bg-sky-soft", "bg-card"][k],
                )}
              >
                <div
                  className={cn(
                    "sticker-sm grid h-14 w-14 place-items-center rounded-full text-primary-foreground",
                    BG_CYCLE[k],
                  )}
                >
                  <I className="h-7 w-7" />
                </div>
                <h3 className="mt-3 text-xl font-bold">{n}</h3>
                <p className="text-sm font-semibold text-muted-foreground">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="sticker relative grid overflow-hidden rounded-[2.5rem] bg-sky text-primary-foreground lg:grid-cols-2">
            <div className="relative z-10 p-8 sm:p-12">
              <span className="sticker-sm inline-flex -rotate-2 items-center gap-1.5 rounded-full bg-secondary px-4 py-1 font-display font-bold text-forest">
                <GraduationCap className="h-4 w-4" /> Novo em 2027
              </span>
              <h3 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
                1º ano do Ensino Fundamental
              </h3>
              <p className="mt-4 max-w-md text-lg opacity-95">
                Seu filho continua no Quintal, com a mesma equipe e o mesmo afeto, e dá o primeiro
                passo na alfabetização brincando.
              </p>
              <CTA
                className="mt-8 bg-secondary text-forest"
                msg="Olá! Vim pelo site e quero saber sobre as vagas do 1º ano em 2027."
              >
                Quero uma vaga 2027
              </CTA>
            </div>
            <img
              src={primeiroAno}
              alt="Criança escrevendo as primeiras letras"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-72 w-full border-t-[3px] border-forest object-cover lg:h-full lg:border-l-[3px] lg:border-t-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Depoimentos() {
  const deps = [
    {
      t: "Ambiente acolhedor, contato diário com a natureza e alimentação saudável. A equipe é muito atenciosa!",
      a: "Família do Quintal",
      r: "Avaliação no Google",
    },
    {
      t: "Meu filho chega em casa contando da horta e dos coelhos. Ele ama ir para a escola.",
      a: "Mãe do Infantil III",
      r: "Depoimento de exemplo",
    },
    {
      t: "A adaptação foi no tempo dela, com muito respeito. Nos sentimos parte da escola.",
      a: "Pai do Berçário",
      r: "Depoimento de exemplo",
    },
  ];
  return (
    <section className="bg-leaf-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          kicker="Quem conhece, recomenda"
          title={
            <>
              Nota <span className="text-primary">4,9</span> das famílias
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {deps.map((d, k) => (
            <Reveal key={k} delay={k * 120}>
              <figure
                className={cn(
                  "sticker h-full rounded-3xl bg-card p-6",
                  k === 1 ? "md:-rotate-1 md:translate-y-4" : "md:rotate-1",
                )}
              >
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-forest" />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg">“{d.t}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className={cn(
                      "sticker-sm grid h-10 w-10 place-items-center rounded-full font-display font-bold text-primary-foreground",
                      BG_CYCLE[k + 2],
                    )}
                  >
                    {d.a[0]}
                  </span>
                  <span>
                    <span className="block font-bold">{d.a}</span>
                    <span className="text-sm text-muted-foreground">{d.r}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <CTA>Agendar minha visita</CTA>
        </Reveal>
      </div>
    </section>
  );
}

function QuemCuida() {
  return (
    <section className="sunflower-section py-20 sm:py-28">
      <SunflowerBackground />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="relative mx-auto w-full max-w-xs">
          <div className="sticker grid aspect-square place-items-center overflow-hidden rounded-full bg-card">
            <img
              src={logoRound}
              width={640}
              height={640}
              alt="Logo do Quintal da Nona"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <Heart className="animate-float absolute -right-2 top-2 h-10 w-10 fill-berry text-forest" />
        </Reveal>
        <Reveal>
          <span className="sticker-sm inline-block -rotate-2 rounded-full bg-secondary px-4 py-1 font-display text-sm font-semibold">
            Quem cuida
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Uma escola feita por <span className="text-berry">educadores</span>, com jeito de casa
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            O Quintal da Nona nasceu do sonho de Izabel e Márcio Gardin: um lugar onde a criança é
            vista por inteiro, junto com a sua família. Nossa equipe passa por formação continuada,
            porque cuidar bem começa por{" "}
            <strong className="text-foreground">cuidar de quem cuida</strong>.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              [ShieldCheck, "Espaço seguro e acessível"],
              [School, "7 salas climatizadas"],
              [BookOpen, "Biblioteca e sala de leitura"],
              [Apple, "Merendeira e nutricionista"],
            ].map(([I, t]) => {
              const Icon = I as typeof ShieldCheck;
              return (
                <li key={t as string} className="flex items-center gap-2 font-semibold">
                  <Icon className="h-5 w-5 shrink-0 text-primary" /> {t as string}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function NaMidia() {
  const slots = [
    { i: Newspaper, tipo: "Jornal / Portal", c: "bg-sun-soft" },
    { i: Tv, tipo: "TV / Vídeo", c: "bg-sky-soft" },
    { i: Mic, tipo: "Rádio / Podcast", c: "bg-clay-soft" },
    { i: School, tipo: "Evento / Prefeitura", c: "bg-leaf-soft" },
  ];
  return (
    <section id="midia" className="sunflower-section paper-dots py-20 sm:py-28">
      <SunflowerBackground />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          kicker="O Quintal na mídia"
          title={
            <>
              Onde fomos <Rainbow text="citados" />
            </>
          }
          sub="Reportagens, entrevistas e eventos que falaram sobre o nosso jeito de educar."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {slots.map(({ i: I, tipo, c }, k) => (
            <Reveal key={tipo} delay={k * 100}>
              <article
                className={cn(
                  "sticker flex h-full flex-col rounded-3xl p-6 transition-transform hover:-translate-y-1",
                  c,
                )}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "sticker-sm grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground",
                      BG_CYCLE[k],
                    )}
                  >
                    <I className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {tipo}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">Título da matéria em breve</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">Nome do veículo · data</p>
                <span className="mt-4 font-display font-semibold text-sky">Ler matéria →</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogTeaser() {
  return (
    <section id="blog" className="bg-clay-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          kicker="Blog do Quintal"
          title={
            <>
              Para ler com um <span className="text-berry">cafezinho</span>
            </>
          }
          sub="Ideias e conversas sobre infância, natureza e família."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p, k) => (
            <Reveal key={p.slug} delay={k * 110}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-1 font-display text-lg font-semibold underline decoration-secondary decoration-4 underline-offset-4"
          >
            Ver todos os artigos →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const FAQ = [
  [
    "Qual a idade aceita?",
    "Recebemos crianças do Berçário ao Infantil IV e, a partir de 2027, também o 1º ano do Ensino Fundamental. Fale com a gente para confirmar a turma ideal.",
  ],
  [
    "Quais são os horários?",
    "Temos meio período (manhã ou tarde) e período integral. Os horários de entrada e saída são combinados na visita.",
  ],
  [
    "Como funciona a adaptação?",
    "Respeitamos o tempo de cada criança e de cada família. A adaptação é gradual e os pais participam no início.",
  ],
  [
    "Como é a alimentação?",
    "Temos merendeira própria e nutricionista. As refeições são saudáveis e pensadas para cada idade.",
  ],
  [
    "Qual o valor da mensalidade?",
    "Os valores variam conforme turma e turno. Chame no WhatsApp que enviamos todas as informações.",
  ],
  [
    "Como a escola se comunica com os pais?",
    "Mantemos contato próximo com as famílias, com reuniões, eventos e conversas sempre que precisar.",
  ],
] as const;

function Duvidas() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas" className="bg-sky-soft py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle kicker="Dúvidas frequentes" title="Perguntas que os pais fazem" />
        <div className="space-y-4">
          {FAQ.map(([q, a], k) => (
            <Reveal key={q} delay={k * 60}>
              <div className="sticker overflow-hidden rounded-2xl bg-card">
                <button
                  onClick={() => setOpen(open === k ? null : k)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-lg font-semibold"
                  aria-expanded={open === k}
                >
                  {q}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 transition-transform",
                      open === k && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    open === k ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <p className="overflow-hidden px-5 text-muted-foreground">
                    <span className="block pb-5">{a}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="sunflower-section py-20 sm:py-28">
      <SunflowerBackground />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="sticker grid overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground lg:grid-cols-2">
            <div className="relative p-8 sm:p-12">
              <Sun
                className="pointer-events-none animate-spin-slow mb-4 ml-auto h-12 w-12 text-secondary"
                aria-hidden
              />
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                Venha conhecer o Quintal!
              </h2>
              <p className="mt-4 max-w-md text-lg opacity-95">
                Traga seu filho para brincar e aprender conosco. A visita é o melhor jeito de sentir
                a escola.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-secondary" /> {ADDRESS}
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-secondary" />{" "}
                  <a href="tel:+5541991517835" className="underline">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Instagram className="h-5 w-5 shrink-0 text-secondary" />{" "}
                  <a
                    href="https://www.instagram.com/quintaldanona._/"
                    target="_blank"
                    rel="noopener"
                    className="underline"
                  >
                    @quintaldanona._
                  </a>
                </li>
              </ul>
              <CTA className="mt-8 bg-secondary px-4 text-base text-forest sm:text-lg">
                Agendar visita pelo WhatsApp
              </CTA>
            </div>
            <iframe
              title="Mapa do Quintal da Nona"
              src="https://www.google.com/maps?q=Av.+Padre+Natal+Pigato,+2194,+Campo+Largo+PR&output=embed"
              className="h-80 w-full border-t-[3px] border-forest lg:h-full lg:border-l-[3px] lg:border-t-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <DiaNoQuintal />
        <Proposta />
        <Turmas />
        <Depoimentos />
        <QuemCuida />
        <section id="profes" className="bg-sun-soft py-20 sm:py-28">
          <Profes />
        </section>
        <NaMidia />
        <BlogTeaser />
        <Duvidas />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
