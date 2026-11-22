export const site = {
  name: 'écho',
  url: 'https://echo.kimiyu.ch',
  title: 'écho: everything you’ve written, found again',
  description:
    'écho is a Mac app that reads your mail, chats, files, meetings, notes and reminders into one private, encrypted index on your Mac. Type a few words and find the message you half remember. No server, no account.',
  /** Shown under every "Coming soon" button */
  requirements: 'macOS 26 · Apple Silicon · no account needed',
};

export const contact = {
  email: 'marcel@kimiyu.ch',
};

/** Section links in the masthead, anchors on the home page */
export const nav = [
  { label: 'Search', href: '/#search' },
  { label: 'Sources', href: '/#sources' },
  { label: 'Privacy', href: '/#privacy' },
  { label: 'Assistants', href: '/#assistants' },
  { label: 'Keys', href: '/#keys' },
  { label: 'FAQ', href: '/#faq' },
];

/** Questions on the home page, also listed in llms.txt */
export const faq = [
  {
    q: 'Does my data go to the cloud?',
    a: 'No. écho indexes everything on your Mac and encrypts the index. There is no account and no server. If you connect an AI assistant, only the results it asks for go to that assistant, and only from the sources you allow.',
  },
  {
    q: 'Which mail apps work?',
    a: 'Apple Mail. Outlook and Gmail in the browser aren’t supported.',
  },
  {
    q: 'Which Macs?',
    a: 'Apple Silicon with macOS 26.',
  },
  {
    q: 'Why does it need Full Disk Access?',
    a: 'To read Mail, WhatsApp, Messages and Notes from where they store their data on your Mac. écho only reads; it never changes anything in those apps.',
  },
  {
    q: 'What about older WhatsApp chats?',
    a: 'The WhatsApp Mac app only keeps recent history. Import chat exports from your phone to search further back.',
  },
  {
    q: 'Which languages does search handle?',
    a: 'German, French and English, including parts of words: “dach” finds “Dachsanierung”.',
  },
  {
    q: 'Which AI assistants work?',
    a: 'Assistants that support MCP, such as Claude Desktop and Claude Code.',
  },
  {
    q: 'Can I delete everything?',
    a: 'Yes. One step, confirmed with Touch ID or your password, removes the index and all of écho’s data. Your mail, chats and files are not touched.',
  },
];

export const footerNav = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Changelog', href: '/changelog/' },
  { label: 'Contact', href: '/contact/' },
];
