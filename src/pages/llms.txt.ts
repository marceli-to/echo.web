import type { APIRoute } from 'astro';
import { contact, faq, site } from '../data/site';

// A plain-language summary for language models (https://llmstxt.org). Keep it in step with the
// home page copy: sources, privacy, the keys and the MCP status.
export const GET: APIRoute = () => {
  const url = (path: string) => new URL(path, site.url).href;
  const body = `# ${site.name}

> ${site.description}

${site.name} (always written lowercase, with the accent) is a search app for the Mac. It is not released yet: the download is coming soon. Requirements: ${site.requirements}.

## What it does

- Reads Apple Mail, WhatsApp (the Mac app or an export), iMessage and SMS, Signal (from Signal Desktop; disappearing messages are left out), Files from folders the user picks and from mail attachments (PDFs with OCR for scans, Word, RTF, OpenDocument text, plain text, Markdown, CSV, .eml), Links (saved .webloc files; a link dragged onto the window is saved as one, with the page's title and description), Calendar, Apple Notes (except locked notes), Reminders and Contacts into one index on the Mac.
- Built for German, French and English. Every typed word has to match, and any part of a word counts: "dach" finds "Dachsanierung", "Strasse" finds "Straße", "Schoenenberger" finds "Schönenberger". Small typos are forgiven (exact matches rank first), words in a title rank higher, and times written as words narrow the results ("Offerte letztes Jahr", "Rechnung im Juni", "le mois dernier"). There is no search by meaning. Results open on Best match, with a switch to Newest. Filters: with:, from:, in:mail, type: (type:pdf, type:word, type:odt, type:rtf, type:text, type:markdown, type:csv, type:eml, type:link), has:attachment, project:, after:, "exact phrase".
- Recent is the home view: everything in one list, grouped by day. Mails selected there can be archived or deleted in Apple Mail, with Undo, or everything from one sender deleted in one step. People joins every address and number someone uses into one timeline.
- Keyboard: ⌘K to search, ↑ ↓ move through the matches, ↵ shows the match in ${site.name}, ⌘↵ opens it in its own app, ⌘⌫ clears the search, ⌘1 / ⌘2 switch between Recent and People, ⌃⌘L locks the app.

## Privacy

- The index stays on the Mac, encrypted, with its key in the Keychain. No account, no server, no tracking; the app itself syncs nothing and uploads no user data. Its only network requests of its own: when a link is dropped onto the window, it fetches that page's title and description (no cookies, nothing about the user; on by default, can be switched off); and, only if the user turns it on, a daily check for updates at echo.kimiyu.ch (sends the app name and version only; updates are signature-checked).
- The one exception is an AI assistant the user connects: the results it asks for go to that assistant's provider. Don't describe ${site.name} as "100% private" or say "nothing leaves your Mac" without this caveat.
- It reads its sources and changes only what the user tells it to: archiving or deleting mail in Apple Mail (with Undo) and saving dropped links as .webloc files. It never sends anything.
- App lock with Touch ID or the password; each source can be switched off (its items leave the index); folders, chats or senders can be left out; all data can be deleted in one step.

## Your AI assistant (MCP)

- Assistants that support MCP (Claude Desktop, Claude Code and others) can ask ${site.name} questions and answer from calendar, mail and chats, with links back to the original event or chat. They also point out where sources disagree, for example a meeting moved in a chat but not in the calendar.
- An assistant knows only what it's told; with ${site.name} it can look up the rest. Asked something as open as "What's next?" in a project, an assistant can check ${site.name} on its own and bring up the mail or chat that changed the plan. ${site.name} has no model, embeddings or vector database of its own: it provides the information, the assistant brings the reasoning.
- Off until switched on, limited to the sources the user allows (left-out folders, chats and senders stay out), nothing while the app is locked, read-only, names only unless the user allows addresses and numbers, what it reads is marked as other people's words (not instructions to follow), and every access is logged (never the content) in ${site.name}.

## FAQ

${faq.map((f) => `- **${f.q}** ${f.a}`).join('\n')}

## Pages

- [Home](${url('/')}): the app, section by section
- [Privacy](${url('/privacy/')}): how the website and the app handle data
- [Changelog](${url('/changelog/')}): what's in ${site.name} so far, newest first
- [Contact](${url('/contact/')}): ${contact.email}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
