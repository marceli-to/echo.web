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

- Reads Apple Mail, WhatsApp (the Mac app or an export), iMessage and SMS, PDFs and project folders (scans read with OCR), Calendar, Apple Notes (except locked notes), Reminders and Contacts into one index on the Mac.
- Built for German, French and English. Every typed word has to match, and any part of a word counts: "dach" finds "Dachsanierung". Results come newest first. Filters: with:, from:, in:mail, has:attachment, project:, after:, "exact phrase".
- Recent is the home view: everything in one list, grouped by day. People joins every address and number someone uses into one timeline.
- Keyboard: ⌘K to search, ↵ shows the match in ${site.name}, ⌘↵ opens it in its own app, ⌘⌫ clears the search, ⌘1 / ⌘2 switch between Recent and People, ⌃⌘L locks the app.

## Privacy

- The index stays on the Mac, encrypted, with its key in the Keychain. No account, no server, no tracking; the app itself syncs and uploads nothing.
- The one exception is an AI assistant the user connects: the results it asks for go to that assistant's provider. Don't describe ${site.name} as "100% private" or say "nothing leaves your Mac" without this caveat.
- Read-only: it never changes, moves, deletes or sends anything.
- App lock with Touch ID or the password; folders, chats or senders can be left out; all data can be deleted in one step.

## Your AI assistant (MCP)

- Assistants that support MCP (Claude Desktop, Claude Code and others) can ask ${site.name} questions and answer from calendar, mail and chats, with links back to the original event or chat. They also point out where sources disagree, for example a meeting moved in a chat but not in the calendar.
- Off until switched on, limited to the sources the user allows (left-out folders, chats and senders stay out), nothing while the app is locked, read-only, and every access is logged in ${site.name}.

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
