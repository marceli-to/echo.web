# echo.web

Website of **écho**, the private search app for the Mac: **https://echo.kimiyu.ch**. A static site built with Astro 7 and Tailwind 4; all content lives in this repo. No analytics, no cookies, no third-party requests: fonts, icons and images are all served from the site itself. Ask before adding anything external.

The name is always written **écho** (lowercase, with the accent), also at the start of a sentence and in titles.

## Development

```sh
nvm use          # Node 24 (.nvmrc)
npm install
npm run dev      # dev server on http://127.0.0.1:4331
npm run build    # astro check + static build into dist/
npm run preview  # serve dist/ on http://127.0.0.1:4331 (Astro 7 runs it in the background: astro preview stop)
```

Optionally, Herd can proxy **https://echo.web.test** to the dev server: `herd proxy echo.web http://127.0.0.1:4331 --secure` (only works while `npm run dev` is running).

## Structure

- `src/pages/` – Home (`index.astro`), Privacy, Changelog, Contact, 404, plus the generated `robots.txt` and `sitemap.xml` (every page except the 404, `<lastmod>` = the last commit that changed the page or a `src/data` file it imports; `deploy.sh` passes the repo's `GIT_DIR` to the build).
- `src/data/site.ts` – title, description, system requirements, the contact address and the navigation.
- `src/data/changelog.ts` – the Changelog, newest first. A new entry is one object at the top; keep the wording user-facing.
- `src/components/SectionLabel.astro` – the ruled line that opens each section: "(01) Title" (the section's h2) and a tag on the right.
- `src/components/Echo.astro` – the fading repeats under a display line ("found again.", "Find it again."). Decorative, `aria-hidden`, never wrap; they are clipped at the page edge instead.
- `src/components/Button.astro` – the black slab with the arrow. Without `href` it renders a plain label: that's what `ComingSoon.astro` uses until there is a public download.
- `src/styles/global.css` – colours (paper, ink, ultramarine, grey) and the fluid type scale: every display size runs from its phone value at 390 px to the Figma value at 1440 px. Also the `frame` (page margins) and `label` (mono capitals) utilities.

When the app changes in ways the site describes (shortcuts, sources, the MCP section), update the copy and the Changelog too.

## Deployment

One-time, in the Hostpoint control panel (kimiyu account):

1. Create the subdomain **echo.kimiyu.ch** with the document root `www/echo.kimiyu.ch/public`.
2. Turn on the free Let's Encrypt SSL certificate for it.

Then:

```sh
./deploy.sh --dry-run   # show what would change
./deploy.sh             # deploy
```

`deploy.sh` refuses to run with uncommitted changes, builds the committed state (`git archive HEAD`) into `dist/` and syncs it with rsync to `/home/pumutuxu/www/echo.kimiyu.ch/public` on `pumutuxu@pumutuxu.myhostpoint.ch`, deleting files that no longer exist. `.htaccess` comes from `public/`: it redirects http and `www.` to `https://` without www, sets the caching headers and the 404 page. The server's `.well-known/` is left alone. No PHP or Node is needed on the server.

## Icons and Open Graph image

`npm run assets` (needs ImageMagick and Google Chrome) writes `public/favicon.*`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` and `og.png`:

- The icons come from the app icon "C · Serif é", `src/assets/app-icon.png`, a copy of `App/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png` from the app repo. Copy it again if the icon changes.
- `og.png` (1200 × 630) is a screenshot of the hero (the echoing headline) from a fresh build. Run it again after changing the hero.

## Fonts

Both are under the SIL Open Font License and self-hosted through Astro's fonts API (`astro.config.mjs`):

- **Manrope** (UI and headings), from Fontsource (`@fontsource-variable/manrope`), latin.
- **JetBrains Mono** (labels, the typed search, shortcuts). Fontsource's latin subset has no ⌘, so `src/fonts/jetbrains-mono-latin-keys.woff2` is a subset of the app's `JetBrainsMono-Variable.ttf` (latin plus arrows, ⌘, ⌥, ✕), licence in `src/fonts/OFL-JetBrainsMono.txt`. JetBrains Mono has no ↵ or ⌫; those come from the system font, as in Figma. To regenerate it:

  ```sh
  pip install fonttools brotli
  pyftsubset JetBrainsMono-Variable.ttf --flavor=woff2 --layout-features='*' \
    --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-21FF,U+2212,U+2215,U+2318,U+2325,U+2715,U+FEFF,U+FFFD" \
    --output-file=src/fonts/jetbrains-mono-latin-keys.woff2
  ```

## Design

Figma: [Echo](https://www.figma.com/design/0rQpkwuhicdbvHkvUBJeaN), page "Landing · Editorial (proposal)": the full page at 1440 ([frame](https://www.figma.com/design/0rQpkwuhicdbvHkvUBJeaN/Echo?node-id=56-33)) and the hero at 390. The sizes between are derived from those two. An editorial, typographic direction: Manrope and JetBrains Mono only, paper / ink / one ultramarine, hairline rules, no app screenshot. The first design (page "App icon & Landing", frame 46:208) is in git history up to commit `10e88cb`.

Where the site deliberately differs from the frames: the grey is darkened from `#787873` to `#6b6b66` so small mono text passes 4.5:1 contrast; between 768 and 1280 px the search results use the phone layout (meta line, then the text) because the four-column table gets too tight; long section tags are hidden on phones; the search caret blinks (not with reduced motion).
