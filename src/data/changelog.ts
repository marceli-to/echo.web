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
