export const site = {
  name: 'écho',
  url: 'https://echo.kimiyu.ch',
  title: 'écho: everything you’ve written, found again',
  description:
    'écho is a Mac app that reads your mail, chats, files and meetings into one private, encrypted index on your Mac. Type a few words and find the message you half remember. No server, no account.',
  /** Shown under every "Coming soon" button */
  requirements: 'macOS 26 · Apple Silicon · no account needed',
};

export const contact = {
  // TODO: the address comes from the user
  email: 'hello@example.com',
};

/** Section links in the masthead, anchors on the home page */
export const nav = [
  { number: '01', label: 'Search', href: '/#search' },
  { number: '02', label: 'Sources', href: '/#sources' },
  { number: '03', label: 'Privacy', href: '/#privacy' },
  { number: '04', label: 'Assistants', href: '/#assistants' },
  { number: '05', label: 'Keys', href: '/#keys' },
];

export const footerNav = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Changelog', href: '/changelog/' },
  { label: 'Contact', href: '/contact/' },
];
