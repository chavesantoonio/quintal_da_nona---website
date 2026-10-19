import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Pencil, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SunflowerBackground } from "@/components/site/SunflowerBackground";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { CTA, Footer, Header, Rainbow } from "@/components/site/Brand";
import { PostCard } from "@/components/site/PostCard";
import { POSTS, type Post } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Quintal da Nona — Educação Infantil em Campo Largo/PR" },
      {
        name: "description",
        content:
          "Artigos para pais sobre infância, natureza, arte, adaptação escolar e como escolher a escola do seu filho.",
      },
      { property: "og:title", content: "Blog do Quintal da Nona" },
      {
        property: "og:description",
        content: "Ideias e conversas sobre infância, natureza e família.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = POSTS as [Post, ...Post[]];
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
          <Pencil
            className="animate-wiggle absolute bottom-10 right-[18%] hidden h-10 w-10 text-berry lg:block"
            aria-hidden
          />
          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-14 sm:py-24">
            <span className="animate-rise sticker-sm inline-flex -rotate-2 items-center gap-1.5 rounded-full bg-secondary px-4 py-1 font-display text-sm font-semibold">
              <BookOpen className="h-4 w-4" /> Blog do Quintal
            </span>
            <h1
              className="animate-rise mt-5 text-[2.6rem] font-bold leading-[1.05] sm:text-6xl"
              style={{ animationDelay: ".1s" }}
            >
              Conversas sobre <Rainbow text="infância" className="text-[1.05em]" />
            </h1>
            <p
              className="animate-rise mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
              style={{ animationDelay: ".2s" }}
            >
              Natureza, arte, família e as dúvidas de todo pai e mãe. Escrito por quem vive o
              quintal todos os dias.
            </p>
            <p
              className="animate-rise mt-3 font-hand text-3xl text-sky"
              style={{ animationDelay: ".25s" }}
            >
              pega um café e vem ler ☕
            </p>
          </div>
        </section>

        <section className="sunflower-section paper-dots py-16 sm:py-24">
          <SunflowerBackground />
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <PostCard post={featured} featured />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, k) => (
                <Reveal key={p.slug} delay={k * 90}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sun-soft py-16 sm:py-24">
          <Reveal className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Ler é bom. <span className="text-primary">Ver de perto</span> é melhor.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Venha conhecer o quintal, a horta e os coelhos com o seu filho.
            </p>
            <CTA
              className="mt-8"
              msg="Olá! Vim pelo blog do Quintal da Nona e quero agendar uma visita."
            />
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
