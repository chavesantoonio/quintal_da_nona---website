import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Lightbulb, Sprout } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SunflowerBackground } from "@/components/site/SunflowerBackground";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { CTA, Footer, Header } from "@/components/site/Brand";
import { CategoryPill, PostCard, PostCover, PostMeta } from "@/components/site/PostCard";
import { getPost, POSTS, type Block } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  // Only validates: loader data is serialized for SSR and Post holds a component (icon).
  loader: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const post = getPost(params.slug);
    return {
      meta: post
        ? [
            { title: `${post.title} | Blog Quintal da Nona` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
            { property: "og:type", content: "article" },
            { property: "article:published_time", content: post.date },
          ]
        : [],
    };
  },
  component: PostPage,
});

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 text-2xl font-bold leading-tight sm:text-3xl">{block.text}</h2>;
    case "p":
      return <p className="mt-5 text-lg leading-relaxed text-foreground/85">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((t) => (
            <li key={t} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
              <Sprout className="mt-1 h-5 w-5 shrink-0 text-primary" /> <span>{t}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="sticker my-10 -rotate-1 rounded-2xl bg-card p-6 text-center font-hand text-3xl leading-tight text-sky">
          “{block.text}”
        </blockquote>
      );
    case "tip":
      return (
        <aside className="sticker mt-8 rounded-3xl bg-sun-soft p-5">
          <p className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="sticker-sm grid h-9 w-9 place-items-center rounded-xl bg-secondary">
              <Lightbulb className="h-5 w-5" />
            </span>
            {block.title}
          </p>
          <p className="mt-3 text-lg leading-relaxed">{block.text}</p>
        </aside>
      );
  }
}

function PostPage() {
  const post = getPost(Route.useParams().slug)!; // loader guarantees it exists
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <article>
          <header className="relative overflow-hidden notebook">
            <div
              className="pointer-events-none absolute inset-y-0 left-6 w-0.5 bg-berry/40 sm:left-12"
              aria-hidden
            />
            <div className="relative mx-auto max-w-4xl px-6 pb-12 pt-10 sm:px-14 sm:pt-14">
              <a
                href="/blog"
                className="inline-flex items-center gap-1 font-display font-semibold hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" /> Todos os artigos
              </a>
              <div className="animate-rise mt-6">
                <CategoryPill post={post} className="-rotate-2" />
              </div>
              <h1
                className="animate-rise mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
                style={{ animationDelay: ".1s" }}
              >
                {post.title}
              </h1>
              <p
                className="animate-rise mt-5 text-lg text-muted-foreground sm:text-xl"
                style={{ animationDelay: ".2s" }}
              >
                {post.excerpt}
              </p>
              <PostMeta post={post} className="animate-rise mt-5" />
              <div
                className="animate-rise sticker mt-10 rotate-1 overflow-hidden rounded-[2.5rem]"
                style={{ animationDelay: ".3s" }}
              >
                <PostCover post={post} eager className="aspect-[16/9]" />
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-2xl px-6 pb-16 pt-4 sm:pb-24">
            {post.body.map((b, k) => (
              <BlockView key={k} block={b} />
            ))}
            <p className="mt-12 font-hand text-2xl text-muted-foreground">
              — Equipe Quintal da Nona 🌻
            </p>
          </div>
        </article>

        <section className="px-6 pb-16 sm:pb-24">
          <Reveal className="sticker mx-auto max-w-4xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Gostou? Venha ver de pertinho.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-lg opacity-95">
              Agende uma visita e traga o seu filho para brincar no quintal.
            </p>
            <CTA className="mt-7 bg-secondary text-forest" msg={post.cta}>
              Agendar visita
            </CTA>
          </Reveal>
        </section>

        <section className="sunflower-section bg-clay-soft py-16 sm:py-24">
          <SunflowerBackground />
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">Leia também</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {others.map((p, k) => (
                <Reveal key={p.slug} delay={k * 110}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
