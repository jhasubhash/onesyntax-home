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
    install: 'brew install --cask jhasubhash/tap/onecast',
    features: [
      ['Docks, as many as you want', 'Your own docks on any edge of any display, with 21 built-in live widgets.'],
      ['A scheduler that speaks English', '"Remind me to stretch every weekday at 4pm" and press return.'],
      ['Native Swift plugins', 'Compiled SwiftUI plugins and dock widgets, alongside Raycast extensions.'],
      ['AI, front and centre', 'Named assistants, your own Claude, Codex or Copilot CLI, MCP servers, on-device tools.'],
    ],
    images: [
      { src: '/onecast/launcher.png', alt: 'The OneCast launcher', w: 750, h: 475 },
      { src: '/onecast/stock-quotes.png', alt: 'A Stock Quotes plugin rendered in the OneCast palette', w: 750, h: 475 },
    ],
    // Coloured notification cards resting along the bottom of the section, above the dock. x/y are % of the section; depth sets scroll parallax.
    notifications: [
      { text: 'Drink a glass of water', bg: '#0a8cff', fg: '#fff', x: 51, y: 82, rot: -5, depth: 0.25 },
      { text: 'Grab coffee with Sam', bg: '#ffd60a', fg: '#2a2200', x: 76, y: 85, rot: 5, depth: -0.3 },
      { text: 'Call mom', bg: '#ff3862', fg: '#fff', x: 57, y: 91, rot: -4, depth: 0.3 },
      { text: 'Water the plants', bg: '#34d158', fg: '#06210f', x: 79, y: 92, rot: 4, depth: -0.25 },
    ],
    // Vertical dock hugging the right edge of the screenshots (desktop only).
    sideDock: {
      src: '/onecast/dock-vertical.png', alt: 'A vertical OneCast dock with AirDrop, usage, CPU, RAM and network widgets', w: 88, h: 611,
      widgets: [
      { id: 'airdrop', label: 'AirDrop', x: 26, y: 27, w: 48, h: 44, shot: { src: '/onecast/widgets/airdrop.png', w: 344, h: 159 } },
      { id: 'aiusage', label: 'AI Usage', x: 26, y: 80, w: 48, h: 98, shot: { src: '/onecast/widgets/aiusage.png', w: 344, h: 482 } },
      { id: 'system', label: 'System Activity', x: 26, y: 188, w: 48, h: 205, shot: { src: '/onecast/widgets/system.png', w: 364, h: 384 } },
      { id: 'network', label: 'Network', x: 26, y: 403, w: 48, h: 98, shot: { src: '/onecast/widgets/network.png', w: 364, h: 275 } },
      { id: 'habit', label: 'Daily LeetCode', x: 26, y: 510, w: 48, h: 44, shot: { src: '/onecast/widgets/habit.png', w: 354, h: 596 } },
      ],
    },
    // Shown full width under the section, styled as a dock sitting on a desktop.
    dock: {
      src: '/onecast/dock.png', alt: 'A custom OneCast dock with live widgets', w: 1194, h: 88,
      hint: 'Click a widget',
      widgets: [
      // x/y/w/h are the widget tile's exact pixel bounds in the dock image; shot is the real detail view captured from the app.
      { id: 'stock', label: 'Stock', x: 108, y: 26, w: 209, h: 48, shot: { src: '/onecast/widgets/stock.png', w: 344, h: 403 } },
      { id: 'nowplaying', label: 'Now Playing', x: 323, y: 26, w: 209, h: 48, shot: { src: '/onecast/widgets/nowplaying.png', w: 364, h: 433 } },
      { id: 'reminders', label: 'Reminders', x: 538, y: 26, w: 209, h: 48, shot: { src: '/onecast/widgets/reminders.png', w: 344, h: 188 } },
      { id: 'calendar', label: 'Calendar', x: 753, y: 26, w: 209, h: 48, shot: { src: '/onecast/widgets/calendar.png', w: 344, h: 166 } },
      { id: 'presentation', label: 'Presentation Mode', x: 968, y: 26, w: 102, h: 48, shot: { src: '/onecast/widgets/presentation.png', w: 344, h: 193 } },
      ],
    },
    links: [
      ['GitHub', 'https://github.com/jhasubhash/onecast'],
      ['Releases', 'https://github.com/jhasubhash/onecast/releases/latest'],
    ],
  },
  {
    id: 'onepaper',
    name: 'OnePaper',
    tagline: 'Beautiful notes for engineers.',
    description:
      'A Craft-style block editor for Mac, iPad and iPhone, made for code, math, papers and whiteboards. Read and annotate PDFs right beside your notes. Every page is a sheet in its own colour, and everything syncs privately through your own iCloud.',
    platform: 'macOS · iOS 26+',
    stack: ['Swift 6', 'SwiftUI', 'SwiftData + CloudKit'],
    license: 'Free',
    accent: '#3fbf9b',
    install: 'brew install --cask jhasubhash/tap/onepaper',
    flip: false,
    features: [
      ['A block editor that keeps up', 'Slash commands, Markdown as you type, [[links]] with backlinks, and links that embed.'],
      ['Made for code and ML', 'Highlighted code in 20 languages, LaTeX math, tables and databases.'],
      ['Papers and PDFs', 'Paste an arXiv link and get the PDF. Highlight, box figures, pin notes and send them to the page.'],
      ['Whiteboards and tasks', 'A full Excalidraw canvas, offline, and every to-do gathered in one place.'],
    ],
    images: [
      { src: '/onepaper/library.png', alt: 'The OnePaper library: page previews as cards in their page colours', w: 1440, h: 900 },
      { src: '/onepaper/pdf-reader.png', alt: 'The PDF reader with highlights, a boxed figure and the Notes pane', w: 1440, h: 900 },
      { src: '/onepaper/whiteboard.png', alt: 'A Transformer diagram on a whiteboard', w: 1440, h: 900 },
    ],
    links: [
      ['Releases', 'https://github.com/jhasubhash/onepaper-releases/releases'],
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
    // Its video sits on the left and reaches into the margin (see .big-media).
    flip: true,
    install: 'brew install --cask jhasubhash/tap/oneprompt',
    features: [
      ['Written by hand', 'New text is traced along each letter’s pen path as the ink bleeds and dries.'],
      ['Strikes what you delete', 'rm a file and every mention of it on screen is cut through.'],
      ['Every theme, its own way', 'Tsushima, Chalkboard and Logbook each animate in their own style.'],
      ['A real terminal', 'Tabs, splits, find with regex, clickable links, IME, mouse and images.'],
    ],
    video: { src: '/oneprompt/demo.mp4', poster: '/oneprompt/demo-poster.jpg', label: 'OnePrompt demo', w: 1280, h: 720 },
    images: [
      { src: '/oneprompt/logbook-day.jpg', alt: 'OnePrompt, Logbook light theme', w: 1600, h: 1000 },
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
