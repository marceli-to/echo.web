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
    date: '2026-11-22',
    title: 'Quick panel removed',
    items: ['The ⌥Space quick panel has been removed. Search with ⌘K in écho.'],
  },
  {
    date: '2026-11-22',
    title: 'Recent, refined',
    items: [
      'Filter Recent by kind in one control: All, Mail, Chats, Files, Meetings, Notes and Reminders.',
      'Calmer list rows: who and when on top, then the title, then a short preview.',
      'Mail previews read cleaner, without signatures or bare links.',
      'The ⌘K panel lists every match, not just the first five.',
      'To do has been removed, with its tab, ⌘T and ⌘3. Recent and People are ⌘1 and ⌘2.',
    ],
  },
  {
    date: '2026-11-22',
    title: 'Quick panel, app lock and privacy settings',
    items: [
      'Press ⌥Space in any app to search écho in a small panel. ↵ shows the match in écho, ⌘↵ opens it in its own app, ⌘P opens the person. You can change the shortcut in Settings.',
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
    title: 'A new look: Recent, People and To do',
    items: [
      'Recent is the new home: mail, chats, files and meetings in one list, newest first, grouped by day, with a preview next to it.',
      'Recent, People and To do sit as tabs in the title bar (⌘1, ⌘2, ⌘3).',
      'Search lives in a ⌘K panel. Every word you type has to match, and any part of a word counts. ↵ opens a match where it lives, ⌘↵ shows all results in the list.',
      'People shows everything from one person, with the people you are most in touch with first.',
      'To do: press ⌘T on a mail, a chat or a selected sentence. Each item links back to where it came from, and due dates are suggested from the text.',
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
