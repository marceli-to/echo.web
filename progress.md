# Progress

Status of the écho website (https://echo.kimiyu.ch). Newest first within each section.

Design: [Figma, page "Landing · Editorial (proposal)", frame 56:33](https://www.figma.com/design/0rQpkwuhicdbvHkvUBJeaN/Echo?node-id=56-33&m=dev) (first design: [frame 46:208](https://www.figma.com/design/0rQpkwuhicdbvHkvUBJeaN/Echo?node-id=46-208&m=dev), in git up to `10e88cb`)

## Done

- **2026-11-22 · Assistants showcase** (from the brief `echo-showcase.md`): the single Q&A is replaced by two invented chats: Laura Brunner (the calendar says Thursday, WhatsApp says Wednesday) and Thomas Keller (the full picture from calendar and chat). Each one has a caption, the question, a "Searching Calendar, Mail, WhatsApp…" line, then the answer with `event` / `chat` source markers. These aren't real links. The left column stays in view on desktop. The privacy line and a "made up" note sit under the examples. New `AskExample` component plus `answer` / `source` utilities; `llms.txt` mentions the cross-check. Checked at 1440 and 390 px.
- **2026-11-22 · Deployed** from commit `174c1c3` (redesign, content update, icons, sticky header, Keys, scroll-driven motion, SEO / headers pass). Checked live: HSTS, `nosniff` and `Referrer-Policy` headers sent, `llms.txt` served.
- **2026-11-22 · SEO / a11y / headers pass** (after a Lighthouse audit: 100 performance, best practices and SEO): `llms.txt` generated from `site.ts`; HSTS (1 year, no subdomains), `nosniff` and `Referrer-Policy` in `.htaccess`; the privacy block's section tag at `text-paper/85` (was /70, 3.8:1, now 5.0:1); no canonical on the 404; manifest description lists notes and reminders. Remaining Lighthouse contrast flags are intentional (the aria-hidden echoes, source names before they light up).
- **2026-11-22 · Scroll-driven motion** (pure CSS, no script; Chrome/Edge/Safari 26, off with reduced motion, static elsewhere): reading progress under the masthead, section rules draw in, "fferte" types itself letter by letter, results / privacy points / keys rows / statements / Q&A rise in, source names light up from a ghost, the privacy block opens from the frame to full bleed, the hero echo drifts apart on scroll, the closer echo falls out from under its line. Also `global.css` rewritten with `@apply` (`--text-label` token added; built CSS unchanged), the Echo and caret `<style>` blocks replaced by utilities. Checked at 1440 and 390 px.
- **2026-11-22 · Keys redesigned, quick panel removed** (the app dropped ⌥Space in `3ee7686`): the big statement "⌘K. Type. ↵." (keys in accent mono, screen readers hear "Command K, type, Return"), a lead, and all six shortcuts in one ruled list (⌘K, ↵, ⌘↵, ⌘⌫, ⌘1 ⌘2, ⌃⌘L) with Search / Tabs / Privacy tags from md. Mocked first in Figma: [desktop 86:75](https://www.figma.com/design/0rQpkwuhicdbvHkvUBJeaN/Echo?node-id=86-75&m=dev), [phone 86:113](https://www.figma.com/design/0rQpkwuhicdbvHkvUBJeaN/Echo?node-id=86-113&m=dev). Changelog: new entry "Quick panel removed" (the earlier entry stays as history). Checked at 360, 390, 768, 1024 and 1440 px.
- **2026-11-22 · Sticky header**: the masthead stays on top (paper background, ink rule); `scroll-padding-top: 4.5rem` so menu jumps land below it; the skip link sits above it.
- **2026-11-22 · New icons**: the app icon is now the header's "é" (Manrope ExtraBold, ink) on a paper tile; `src/assets/app-icon.png` copied from the app repo, favicons / touch icon / manifest icons regenerated with `npm run assets` (square icons now on paper `#fafaf7`, was dark green). The header itself stays plain text (a brief try with the icon glyph in the wordmark was reverted). `og.png` unchanged. Confirmed by the user.
- **2026-11-22 · Updated for the app's new features**: Notes and Reminders added (Sources list, hero, meta description, privacy page); Recent described as home; To do removed (Sources block, ⌘T, ⌘3); WhatsApp note corrected (no voice-note transcripts); Keys now ⌥Space / ⌘K / ↵ / ⌘↵ plus ⌃⌘L (superseded by the Keys redesign above); Privacy points for app lock, leaving things out and deleting all data; three changelog entries. Also smaller fixes: the numbers removed from the labels, nav and Sources list, no app icon in the closer. Checked at 390, 768, 1024, 1280 and 1440 px.
- **2026-11-22 · Contact address** set to marcel@kimiyu.ch (Contact and Privacy pages).
- **2026-11-22 · Redesign: editorial direction** (Figma page "Landing · Editorial (proposal)"). Paper / ink / ultramarine, Manrope + JetBrains Mono only, numbered sections with hairline rules, "found again." with a fading echo, typed-search hero for Search, huge source names, full-bleed ultramarine Privacy block, Assistants as Q&A, giant shortcut glyphs. Privacy, Changelog, Contact and 404 restyled to match. App window, demo pictures and Phosphor icons removed. `og.png` regenerated. Checked at 1440, 1024 and 390 px.
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

- [ ] **DNS for www.echo.kimiyu.ch**: does not resolve yet. Needs A `217.26.53.36` and AAAA `2a00:d70:0:b:2002:0:d91a:3524` (the `*.kimiyu.ch` wildcard does not cover it), then add it to the certificate so the www → bare-domain redirect works.
- [ ] Optional, later: dark mode (not in the design; ask first). Real download link once the app ships.
