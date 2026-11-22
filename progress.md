# Progress

Status of the écho website (https://echo.kimiyu.ch). Newest first within each section.

## Done

- **2026-11-22 · Live** at https://echo.kimiyu.ch from commit `7bcb502`: SSL active, http → https redirect (301) and the 404 page work.
- **2026-11-22 · Domain moved to echo.kimiyu.ch** (was echo.app.kimiyu.ch): `astro.config.mjs`, `src/data/site.ts`, privacy page, README and `deploy.sh` (`DEST=/home/pumutuxu/www/echo.kimiyu.ch/public`).
- **2026-11-22 · Hero revised**: "Local search for your Mac" badge removed, headline scaled down to 40–64 px (was 44–80), `og.png` regenerated.
- **2026-11-22 · First full build** of the landing page from the Figma frame (46:208):
  - Sections: hero with the app window in HTML, Every word counts, One list, Assistants (MCP, marked coming soon), Privacy, Keyboard (shortcuts corrected to the app), Download.
  - Download buttons say "Coming soon" (not links) in nav, hero and download section.
  - Pages: Privacy, Changelog (from `src/data/changelog.ts`), Contact, 404.
  - Astro 7 + Tailwind 4, no JS framework, no client JS. Manrope and JetBrains Mono (subset with ⌘) self-hosted, Phosphor Light icons inlined.
  - Favicons, app icons, `og.png` via `npm run assets`; webmanifest, robots.txt, sitemap.xml, `.htaccess`.
  - `deploy.sh` (one target, `--dry-run`, refuses uncommitted changes).
  - Checked at 1440, 1024 and 390 px; no third-party requests in `dist/`.

## Open

- [ ] **Contact address**: `src/data/site.ts` still has the placeholder `hello@example.com` (shown on Contact and Privacy). Live with the placeholder; replace and redeploy.
- [ ] **DNS for www.echo.kimiyu.ch**: does not resolve yet. Needs A `217.26.53.36` and AAAA `2a00:d70:0:b:2002:0:d91a:3524` (the `*.kimiyu.ch` wildcard does not cover it), then add it to the certificate so the www → bare-domain redirect works.
- [ ] Optional, later: dark mode (not in the design; ask first). Real download link once the app ships.
