import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { POSTS } from "@/lib/blog";
import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the blog index and every post, with unique slugs", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    expect(router.matchRoutes("/blog").at(-1)?.routeId).toBe("/blog/");
    expect(router.matchRoutes("/sobre").at(-1)?.routeId).toBe("/sobre");
    for (const p of POSTS)
      expect(router.matchRoutes(`/blog/${p.slug}`).at(-1)?.routeId).toBe("/blog/$slug");
    expect(new Set(POSTS.map((p) => p.slug)).size).toBe(POSTS.length);
  });
});
