/**
 * What's in écho so far, newest first. One entry per release or milestone; a new one is one line at the top.
 * Taken from the app repo's progress.md and git log (~/Jamon.digital/Webroot/echo.app). User-facing words only.
 */
export interface Entry {
  /** ISO date, shown as "22 November 2026" */
  date: string;
  title: string;
  items: string[];
}

export const changelog: Entry[] = [
  {
    date: '2026-11-24',
    title: 'Files, links and better search',
    items: [
      'Word, RTF, OpenDocument, text, Markdown, CSV and .eml files are read from your folders and from mail attachments. The PDF source is now called Files. New type: filter (type:word, type:pdf, …).',
      'Saved links (.webloc) in your folders are searchable. Drag a link from Safari or Finder onto écho and it’s saved, with the page’s title and description (you can switch that off). Recent has a Links filter.',
      'Search forgives small typos, finds “Straße” when you type “Strasse”, ranks matches in titles higher and understands times like “letztes Jahr” or “im Juni”. Results open on Best match; switch to Newest.',
      'Your assistant gets your mail, chats and files marked as other people’s words, to report and never to follow. Several assistants can be connected at once.',
      'In the ⌘K panel, ↑ ↓ move through the matches. Upcoming meetings come first in Meetings.',
      'No empty preview pane when nothing is selected, and a crisper app icon.',
    ],
  },
  {
    date: '2026-11-23',
    title: 'Bulk mail, source switches and a smaller index',
    items: [
      'Select mails in Recent and archive or delete them in Apple Mail, with Undo. Right-click a mail for the same, or to delete everything from one sender.',
      'Each source has an on/off switch; off removes its items from écho.',
      'Settings → Agents: choose which sources your assistant can use, whether it sees addresses and numbers, and see every access.',
      'The index takes less than half the space, and the app is 19 MB instead of 258 MB. Search is faster on large indexes.',
    ],
  },
  {
    date: '2026-11-23',
    title: 'Signal',
    items: [
      'Signal chats are read from Signal Desktop on your Mac, private chats and groups.',
      'Connect Signal… on the Sources card asks once for access to Signal’s key in your Keychain. Disconnect removes every Signal chat from écho.',
      'Disappearing messages, view-once messages and messages deleted for everyone are left out.',
      'Signal chats show up in Recent, People and search (in:signal, also in:chats), and ⌘↵ opens Signal.',
    ],
  },
  {
    date: '2026-11-22',
    title: 'Ask your AI (MCP)',
    items: [
      'Connect écho to Claude Desktop, Claude Code or another MCP client. Settings → Agents has the setup to copy and paste.',
      'Off until you turn it on. The switch tells you that what your assistant reads goes to its provider.',
      'Your assistant searches with the same words and filters as ⌘K, and reads whole mail threads, the chat around a message, PDFs and events.',
      'Its answers link back to the original: a click opens the item in écho. Ask it to, and it shows the item in écho for you.',
      'Read-only, and nothing while écho is locked. Your assistant sees names, not email addresses or phone numbers, unless you allow it.',
    ],
  },
  {
    date: '2026-11-22',
    title: 'Recent, refined',
    items: [
      'Filter Recent by kind in one control: All, Mail, Chats, Files, Meetings, Notes and Reminders.',
      'Calmer list rows: who and when on top, then the title, then a short preview.',
      'Mail previews read cleaner, without signatures or bare links.',
      'The ⌘K panel lists every match, not just the first five.',
      'Recent and People are ⌘1 and ⌘2.',
    ],
  },
  {
    date: '2026-11-22',
    title: 'App lock and privacy settings',
    items: [
      'Lock écho with Touch ID or your password: at launch, after a few minutes idle, when the screen locks, or with ⌃⌘L. Indexing goes on while it’s locked.',
      'Settings → Privacy: leave out folders, chats and senders, see how big the index is and where it’s stored, and delete all data in one step.',
    ],
  },
  {
    date: '2026-11-22',
    title: 'Notes and Reminders',
    items: [
      'Apple Notes are read from the Notes app on your Mac, except locked notes and Recently Deleted.',
      'All your reminders are read, done ones marked and due dates shown.',
      'Both show up in Recent and in search (in:notes, in:reminders), and ↵ opens them in Notes or Reminders.',
    ],
  },
  {
    date: '2026-11-22',
    title: 'A new look: Recent and People',
    items: [
      'Recent is the new home: mail, chats, files and meetings in one list, newest first, grouped by day, with a preview next to it.',
      'Recent and People sit as tabs in the title bar (⌘1, ⌘2).',
      'Search lives in a ⌘K panel. Every word you type has to match, and any part of a word counts. ↵ opens a match where it lives, ⌘↵ shows all results in the list.',
      'People shows everything from one person, with the people you are most in touch with first.',
      'The name is now written “écho”, with a new app icon.',
    ],
  },
  {
    date: '2026-11-21',
    title: 'Calendar',
    items: ['Meetings from Calendar appear in the timelines, next to the mail and messages around them.'],
  },
  {
    date: '2026-11-21',
    title: 'iMessage',
    items: ['Your Messages conversations are read and searchable, shown as chats.'],
  },
  {
    date: '2026-11-21',
    title: 'WhatsApp',
    items: ['WhatsApp chats are read from the Mac app, or from a chat export if you prefer.'],
  },
  {
    date: '2026-11-21',
    title: 'People',
    items: [
      'Every address and number someone uses is joined into one person, with your contacts as a start.',
      'Merge an unknown sender into someone, or split them out again.',
      'Type with: and a name to find everything you exchanged with someone.',
    ],
  },
  {
    date: '2026-11-21',
    title: 'Apple Mail',
    items: [
      'écho reads Apple Mail, keeps threads together and stays up to date as new mail arrives.',
      'Choose which accounts and mailboxes it reads.',
    ],
  },
  {
    date: '2026-11-21',
    title: 'PDF search',
    items: [
      'Pick your project folders and écho reads every PDF in them, scanned pages too.',
      'The index lives on your Mac, encrypted.',
    ],
  },
];
