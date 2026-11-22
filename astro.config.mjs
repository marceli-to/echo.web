// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://echo.app.kimiyu.ch',
  // Fixed IPv4 address and an own port, so it runs next to the other sites (4322 is taken)
  server: { host: '127.0.0.1', port: 4331 },
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: ['echo.web.test'] },
  },
  // Self-hosted, nothing is loaded from a third party.
  fonts: [
    {
      // UI and headings: Fontsource, latin only (the copy is English, plus the German sample messages)
      provider: fontProviders.local(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: ['@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2'], weight: '200 800', style: 'normal' },
        ],
      },
    },
    {
      // Labels and key hints. Fontsource's latin subset has no ⌘, so this is the app's JetBrains Mono,
      // subset to latin plus arrows, ⌘ and ⌥ (see README, "Fonts"). ↵ and ⌫ come from the system font.
      provider: fontProviders.local(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      options: {
        variants: [
          { src: ['./src/fonts/jetbrains-mono-latin-keys.woff2'], weight: '100 800', style: 'normal' },
        ],
      },
    },
  ],
});
