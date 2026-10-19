<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Single-page landing in src/routes/index.tsx; reusable pieces in src/components/site/. Why: one conversion goal (WhatsApp visit).
- Team carousel (home and /sobre): data in EQUIPE in src/components/site/Profes.tsx; photos in src/assets/profes/ as 480x504 WebP (crop of the originals in profissionais/). Text in [brackets] across /sobre is placeholder copy to fill.
- Blog: posts live only in src/lib/blog.ts (routes src/routes/blog/); Header/Footer/CTA shared via src/components/site/Brand.tsx. Why: adding a post = adding one object.
- WhatsApp number/links live only in src/lib/whatsapp.ts. Why: single source for contact data.
- Section background illustrations live in a reusable, decorative-only site component with reduced-motion-aware scroll effects. Why: consistent mobile placement without affecting content layout.
- Deploy (Vercel, project quintal-da-nona-cl → https://quintal-da-nona-cl.vercel.app): `NITRO_PRESET=vercel npm run build && npx vercel deploy --prebuilt --prod` (bash). Plain `npm run build` targets Cloudflare (Lovable default). og:image URL in src/routes/__root.tsx uses this domain.
- "Video" block (home, "Um dia no Quintal"): cover src/assets/video-capa.webp + song public/audio/no-quintal-da-nona.mp3 (128 kbps), in src/components/site/VideoInstitucional.tsx; audio loads only after play.
