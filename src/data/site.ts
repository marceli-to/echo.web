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

/** Section links in the header, anchors on the home page */
export const nav = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Privacy', href: '/#privacy' },
  { label: 'Assistants', href: '/#assistants' },
  { label: 'Shortcuts', href: '/#shortcuts' },
];

export const footerNav = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Changelog', href: '/changelog/' },
  { label: 'Contact', href: '/contact/' },
];
