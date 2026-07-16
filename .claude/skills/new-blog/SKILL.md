---
name: new-blog
description: >-
  Author and publish a new bilingual (EN + VI) blog post for this Astro site.
  Use when the user wants to write, draft, add, or publish a blog post — whether
  the source is a Google Doc (read via the Google Drive connector) or text pasted
  into the chat. Handles slug, frontmatter, both language files, build validation,
  and pushing.
---

# New blog post (bilingual EN + VI)

This site is an Astro static blog. A post is just **two Markdown/MDX files** — one
English, one Vietnamese — that share the **same filename**. Everything else (the
blog index, RSS feed, homepage preview, reading-time, sitemap, EN↔VI language
toggle) is generated automatically from the content collection. **No list/registry
file ever needs editing.**

## Inputs — where the draft comes from

Support both:

1. **Google Docs** (preferred): the user gives a doc name or URL. Use the **Google
   Drive** connector — `search_files` to find it, then `read_file_content` to pull
   the text. If the connector's tools are not loaded, tell the user to install/enable
   the **Google Drive** connector on claude.ai (Settings → Connectors) and enable it
   in this chat, then retry. There is no separate "Google Docs" connector.
2. **Pasted text / outline** in the chat.

If the draft is only in one language, write the post in that language and **translate**
the other version (keep the technical terms; natural, fluent Vietnamese for the VI side).

## Steps

1. **Decide the slug.** Kebab-case, ASCII only, derived from the English title. Strip
   Vietnamese diacritics (e.g. "Triển khai LLM cục bộ" → `local-llm-deployment`). This
   becomes the filename **and** the URL (`/blog/<slug>/`). Keep it short and stable.

2. **Confirm metadata** with the user if unclear: title (EN + VI), one-line description
   (EN + VI), `tags` (array of short strings, shared by both languages), and `pubDate`.
   Default `pubDate` to **today's date** (`YYYY-MM-DD`). Ask before overriding.

3. **Create the two files** — same filename, one per language:
   - `src/content/blog/en/<slug>.mdx`
   - `src/content/blog/vi/<slug>.mdx`

   Use the skeletons in `templates/en.mdx` and `templates/vi.mdx` (next to this file).
   Frontmatter schema (validated by zod in `src/content.config.ts`):

   ```yaml
   ---
   title: 'Post title'                      # required
   description: 'One-line summary for cards & meta.'   # required
   pubDate: 2026-07-16                       # required, YYYY-MM-DD (unquoted)
   tags: ['LLM', 'MLOps']                    # optional, same for EN & VI
   lang: 'en'                                # 'en' in en/, 'vi' in vi/
   draft: false                              # true = hidden in prod, visible in dev
   # updatedDate: 2026-07-20                 # optional
   # heroImage: ../../../assets/posts/x.png  # optional, currently unused by layout
   ---
   ```

   **Both files must share the same `pubDate`, `tags`, and filename**; only
   `title` / `description` / `lang` and the body prose differ. Matching filenames are
   what make the EN↔VI language toggle land on the translation.

4. **Body conventions** (mirror `src/content/blog/en/local-llm-comic-pipeline.mdx`):
   plain Markdown — `##` section headings, intro paragraph, ordered/unordered lists with
   `**bold**` lead-ins, fenced code blocks with a language (```python). No MDX component
   imports are needed. For images, drop the file in `public/` and reference it with an
   absolute path: `![alt](/blog/<slug>/cover.png)`.

5. **Validate**: run `npm run build` (installs first with `npm install`/`npm ci` if
   `node_modules` is missing). The build runs the zod schema — fix any frontmatter or
   type errors it reports. Optionally `npx astro check`. To preview visually, `npm run dev`
   and open `/blog/<slug>/` and `/vi/blog/<slug>/`.

6. **Publish**:
   - Create a branch `blog/<slug>` from the latest `main`
     (`git fetch origin main && git checkout -B blog/<slug> origin/main`), then re-add
     the two files if the checkout removed them.
   - Ensure git identity: `git config user.email noreply@anthropic.com` and
     `git config user.name Claude`.
   - Commit and `git push -u origin blog/<slug>` (retry on transient network errors with
     backoff; a persistent 403 means write access isn't granted for the session — report it).
   - Ask the user whether to open a PR or merge to `main`. **Merging/pushing to `main`
     triggers the GitHub Pages deploy** (`.github/workflows/deploy.yml`). If the user
     wants it live immediately and is comfortable skipping review, pushing straight to
     `main` is fine.

## Notes / guardrails

- Slug source of truth: `postSlug()` in `src/lib/utils.ts` strips the `en/`|`vi/` prefix.
- Don't edit any index, RSS, or preview file — they read the collection automatically.
- Set `draft: true` to stage a post that shouldn't appear in production yet (still visible
  in `npm run dev`).
- Keep the two template files under this skill directory — they live **outside**
  `src/content/blog`, so Astro's collection glob never picks them up as real posts.
