import { Clock } from "lucide-react";
import { formatDate, type Post } from "@/lib/blog";
import { cn } from "@/lib/utils";

// Text on secondary (yellow) must be forest; the other brand colors take the cream foreground.
const onColor = (color: string) =>
  color === "bg-secondary" ? "text-forest" : "text-primary-foreground";

export function PostCover({
  post,
  className,
  eager = false,
}: {
  post: Post;
  className?: string;
  eager?: boolean;
}) {
  const Icon = post.icon;
  return post.cover ? (
    <img
      src={post.cover}
      alt=""
      loading={eager ? "eager" : "lazy"}
      width={1024}
      height={768}
      className={cn("w-full object-cover", className)}
    />
  ) : (
    <div
      className={cn("paper-dots grid w-full place-items-center", post.color, className)}
      aria-hidden
    >
      <div className="sticker grid h-24 w-24 -rotate-6 place-items-center rounded-3xl bg-card text-forest sm:h-28 sm:w-28">
        <Icon className="h-12 w-12 sm:h-14 sm:w-14" />
      </div>
    </div>
  );
}

export function CategoryPill({ post, className }: { post: Post; className?: string }) {
  return (
    <span
      className={cn(
        "sticker-sm inline-block rounded-full px-3 py-1 font-display text-sm font-semibold",
        post.color,
        onColor(post.color),
        className,
      )}
    >
      {post.category}
    </span>
  );
}

export function PostMeta({ post, className }: { post: Post; className?: string }) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-muted-foreground",
        className,
      )}
    >
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-4 w-4" /> {post.readMinutes} min de leitura
      </span>
    </p>
  );
}

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className={cn(
        "sticker group flex h-full flex-col overflow-hidden rounded-3xl bg-card transition-transform hover:-translate-y-1 hover:-rotate-1",
        featured && "lg:grid lg:grid-cols-[1.1fr_1fr] lg:rounded-[2.5rem] lg:hover:rotate-0",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b-[3px] border-forest",
          featured && "lg:border-b-0 lg:border-r-[3px]",
        )}
      >
        <PostCover
          post={post}
          eager={featured}
          className={cn(
            "aspect-[4/3] transition-transform duration-700 group-hover:scale-110",
            featured && "lg:h-full",
          )}
        />
        <CategoryPill post={post} className="absolute left-4 top-4 -rotate-2" />
      </div>
      <div className={cn("flex flex-1 flex-col p-5", featured && "lg:justify-center lg:p-10")}>
        <h3
          className={cn(
            "text-xl font-bold leading-snug group-hover:text-primary",
            featured && "lg:text-4xl",
          )}
        >
          {post.title}
        </h3>
        <p
          className={cn(
            "mt-2 flex-1 text-muted-foreground",
            featured && "lg:mt-4 lg:flex-none lg:text-lg",
          )}
        >
          {post.excerpt}
        </p>
        <PostMeta post={post} className="mt-4" />
        <span className="mt-3 font-display font-semibold text-sky">Ler artigo →</span>
      </div>
    </a>
  );
}
