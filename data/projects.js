// Add a new app here and it shows up on the home page.
export const projects = [
  {
    id: 'onecast',
    name: 'OneCast',
    tagline: 'One keystroke for everything on your Mac.',
    description:
      'A native launcher, AI cockpit, custom docks with live widgets, a plain-English scheduler and a Swift plugin runtime. Built with SwiftUI and AppKit, zero third-party dependencies, no Electron, no telemetry.',
    platform: 'macOS 26+',
    stack: ['Swift 6', 'SwiftUI', 'AppKit'],
    license: 'AGPL-3.0',
    accent: '#58a6ff',
    install: 'brew install --cask jhasubhash/onecast/onecast',
    features: [
      ['Docks, as many as you want', 'Your own docks on any edge of any display, with 21 built-in live widgets.'],
      ['A scheduler that speaks English', '"Remind me to stretch every weekday at 4pm" and press return.'],
      ['Native Swift plugins', 'Compiled SwiftUI plugins and dock widgets, alongside Raycast extensions.'],
      ['AI, front and centre', 'Named assistants, your own Claude, Codex or Copilot CLI, MCP servers, on-device tools.'],
    ],
    images: [
      { src: '/onecast/launcher.png', alt: 'The OneCast launcher', w: 750, h: 475 },
      { src: '/onecast/notifications.png', alt: 'OneCast notification cards in nine colours', w: 882, h: 302, wide: true },
      { src: '/onecast/ai-chat.png', alt: 'AI chat in the OneCast palette', w: 750, h: 475 },
    ],
    // Shown full width under the section, styled as a dock sitting on a desktop.
    dock: { src: '/onecast/dock.png', alt: 'A custom OneCast dock with live widgets', w: 1194, h: 88 },
    links: [
      ['GitHub', 'https://github.com/jhasubhash/onecast'],
      ['Releases', 'https://github.com/jhasubhash/onecast/releases/latest'],
    ],
  },
  {
    id: 'oneprompt',
    name: 'OnePrompt',
    tagline: 'A terminal drawn like an ink painting.',
    description:
      'Text is written in by hand, ink bleeds into hand-made paper, and deleting a file cuts its name through with a sword. Under the art is a real terminal with tabs, splits, regex find and true colour.',
    platform: 'macOS 11+',
    stack: ['Rust', 'wgpu'],
    license: 'Apache 2.0',
    accent: '#e0584f',
    badge: 'Alpha',
    install: 'brew install --cask jhasubhash/tap/oneprompt',
    features: [
      ['Written by hand', 'New text is traced along each letter’s pen path as the ink bleeds and dries.'],
      ['Strikes what you delete', 'rm a file and every mention of it on screen is cut through.'],
      ['Every theme, its own way', 'Tsushima, Chalkboard and Logbook each animate in their own style.'],
      ['A real terminal', 'Tabs, splits, find with regex, clickable links, IME, mouse and images.'],
    ],
    images: [
      { src: '/oneprompt/tsushima-light.jpg', alt: 'OnePrompt, Tsushima light theme', w: 1600, h: 1000 },
      { src: '/oneprompt/tsushima-dark.jpg', alt: 'OnePrompt, Tsushima dark theme', w: 1600, h: 1000 },
      { src: '/oneprompt/chalkboard-slate.jpg', alt: 'OnePrompt, Chalkboard theme', w: 1600, h: 1000 },
    ],
    links: [
      ['GitHub', 'https://github.com/jhasubhash/oneprompt'],
      ['Releases', 'https://github.com/jhasubhash/oneprompt/releases'],
    ],
  },
];

export const site = {
  name: 'OneSyntax',
  tagline: 'Small, sharp, native apps and tools.',
  intro: 'A home for the apps and projects I build. Made by Subhash Jha.',
  github: 'https://github.com/jhasubhash',
  coffee: 'https://www.buymeacoffee.com/subhashjha',
};
