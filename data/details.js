// Long-form content for the dedicated /onecast and /oneprompt pages.
// Each feature: { id, kicker, title, body, bullets?, media, flip? }
// media: { type: 'img' | 'video' | 'imgs', ... }
export const details = {
  onecast: {
    heroNote: 'Built with SwiftUI and AppKit. Zero third-party dependencies, no Electron, no telemetry, under 100 MB of RAM.',
    stats: [
      ['21', 'built-in dock widgets'],
      ['0', 'third-party dependencies'],
      ['<100 MB', 'of RAM, typically'],
      ['AGPL-3.0', 'open source'],
    ],
    features: [
      {
        id: 'launcher',
        kicker: 'Launcher',
        title: 'Type. Press return. Done.',
        body: 'One shortcut summons OneCast from anywhere. Fuzzy-search apps, commands, files and quicklinks, do maths and unit and currency conversions inline, or just say what you want in plain words.',
        bullets: [
          'Tab jumps to AI Chat, ⌘K opens actions for the selected row, Esc closes.',
          'Runs the Raycast extensions you already use, natively.',
          'Global and per-app hotkeys, double-tapped modifiers and a Hyper key.',
        ],
        clip: '/onecast/launcher-demo',
      },
      {
        id: 'docks',
        kicker: 'Docks',
        title: 'Docks, as many as you want',
        body:
          'OneCast draws its own docks on any edge of any display, several at once: a bottom dock for apps, a side rail of widgets, one per monitor. Keep the macOS Dock next to them, or let OneCast take over and hide it. Your settings are restored when you switch back.',
        bullets: [
          'Liquid Glass plates with real magnification, auto-hide, drag and drop, and a lens that grows from the centre like the system Dock.',
          'Apps, folders, files, links, Shortcuts, spacers and the Trash, plus running apps and minimized windows with live previews and unread badges.',
          'Swipe or ⌘-scroll a dock through its layouts. A setup switches every dock at once from a hotkey, a onecast:// link or a Focus filter: work, home and presenting each get their own Mac.',
        ],
        media: { type: 'img', src: '/onecast/docks-settings.png', alt: 'OneCast docks settings', w: 900, h: 953, narrow: true },
        flip: true,
      },
      {
        id: 'widgets',
        kicker: 'DockWidgets',
        title: 'Live tiles, right in the dock',
        body:
          '21 widgets ship built in, and anyone can write more in Swift against OnecastPluginKit. Click the ones below. These are real captures from the app.',
        widgets: true,
        full: true,
        groups: [
          ['Time', 'Clock · World Clock · Focus Timer · Stopwatch · Countdown · Alarm · Time Progress'],
          ['Productivity', 'Calendar · Reminders · Sticky Note · Shortcut · AirDrop · Presentation'],
          ['System', 'Now Playing · Battery · System Activity · Network Activity'],
          ['Personal', 'Hydration · Weather · AI Usage (Claude Code, Codex, Copilot limits) · Stock · Watchlist'],
        ],
      },
      {
        id: 'scheduler',
        kicker: 'Scheduler',
        title: 'A scheduler that speaks English',
        body: 'Type "remind me to stretch every weekday at 4pm" into the launcher and press return. That is the whole interface.',
        bullets: [
          'An on-device parser reads "in 20 minutes", "tomorrow at 9" and "every Monday". An AI fallback handles everything else.',
          'Pick where reminders live: OneCast notifications, Apple Reminders or Things. Say "…and add it to Things" to send one somewhere specific.',
          'Scheduled scripts run shell commands on a rule, and catch up on fires missed while the app was closed.',
          'Your AI assistants can schedule things for you too, with on-device tool calling.',
        ],
        media: { type: 'img', src: '/onecast/scheduler.png', alt: 'Scheduler settings with the default reminder app picker', w: 896, h: 951, narrow: true },
      },
      {
        id: 'colour',
        kicker: 'Notifications',
        title: 'Notifications in colour',
        body:
          'OneCast draws its own notification cards instead of macOS banners, and you colour each one in the same sentence: "…make it green", "a purple reminder", "colour: teal". Nine colours, and each card picks white or black text automatically so it stays readable in light and dark mode.',
        media: { type: 'img', src: '/onecast/notifications.png', alt: 'Notification cards in blue, purple, green, orange, pink, yellow, teal and neutral', w: 882, h: 302, wide: true },
        full: true,
      },
      {
        id: 'plugins',
        kicker: 'Plugins',
        title: 'Native Swift plugins',
        body: 'When the JavaScript extension API is not enough, write a compiled SwiftUI plugin. OneCast builds it and loads it straight into the palette with full native rendering, real views and real speed.',
        bullets: [
          'Pin a plugin’s inner view to the launcher as a deep link, or pop it out into its own borderless, resizable window.',
          'The same kit powers DockWidgets, so one Swift package can ship both.',
          'Plugins and third-party widgets run only after your explicit consent.',
          'Runs the Raycast extensions you already use, natively, in JavaScriptCore.',
        ],
        media: { type: 'img', src: '/onecast/plugin.png', alt: 'A Stock Quotes plugin rendered in the palette', w: 750, h: 475 },
      },
      {
        id: 'ai',
        kicker: 'AI',
        title: 'AI, front and centre',
        body: 'Chat in the palette, or summon a floating chat bar on its own hotkey, anywhere on screen.',
        bullets: [
          'Named assistants, each with its own hotkey, tint, model and skills.',
          'Bring your own CLI: use installed Claude, Codex, GitHub Copilot or OpenCode as a first-class provider.',
          'MCP servers, remote or local, offer their tools to any chat.',
          'Streamed reasoning with an effort picker, plus Apple Intelligence that runs tools entirely on-device.',
          'Quick Actions: fix grammar, rewrite, translate or summarize the selection in any app.',
          'Local dictation (experimental): Parakeet and Qwen3-ASR on Core ML, typed into whatever app is in front.',
        ],
        media: { type: 'img', src: '/onecast/ai-chat.png', alt: 'AI Chat in the OneCast palette', w: 750, h: 475 },
        flip: true,
      },
    ],
    extras: {
      title: 'And everything a launcher should do',
      shots: [
        { src: '/onecast/calculator.png', alt: 'Inline calculator with currency conversion', w: 750, h: 475, cap: 'Maths, units and live currency as you type' },
        { src: '/onecast/emoji.png', alt: 'Emoji picker', w: 750, h: 475, cap: 'A searchable emoji and symbol grid' },
      ],
      grid: [
        ['🔎', 'Launcher', 'Fuzzy search over apps, commands, quicklinks, files and calendar events.'],
        ['🧩', 'Raycast extensions', 'Run the ones you already have, natively.'],
        ['⌨️', 'Hotkeys', 'Global and per-app chords, double-tapped modifiers, a Hyper key, inline ⌘K editing.'],
        ['📋', 'Clipboard history', 'Text and images, searchable.'],
        ['🧮', 'Calculator', 'Maths, units and live currency rates.'],
        ['📝', 'Notes', 'Unlimited plain-Markdown notes in one floating editor.'],
        ['✂️', 'Snippets', 'Keyword text expansion, off until you turn it on.'],
        ['🪟', 'Windows', 'Tile and resize from the keyboard, saved Window Layouts, Switch Windows.'],
        ['📽', 'Presentation Mode', 'One click before a screen share: tidy up, fit the window, pick a readable resolution, then undo it all.'],
        ['📅', 'Meetings', 'A join card for your next call, a Join Next Meeting hotkey, and auto-join.'],
        ['🍔', 'Menu Search', 'Press any menu item of the front app by name.'],
        ['⚙️', 'Shortcuts & commands', 'Apple Shortcuts and your own shell commands, with arguments.'],
        ['😀', 'Emoji & symbols', 'A searchable grid, one keystroke away.'],
        ['💾', 'Backup', 'Export your setup, import from Raycast, or mirror it to an editable settings.json.'],
      ],
    },
    steps: [
      ['Summon it', 'Settings → General: record a shortcut. Press it anywhere, type, then press ↵. Tab jumps to AI Chat, ⌘K opens actions.'],
      ['Add a dock', 'Settings → Docks: turn on Docks and add a widget or two.'],
      ['Wire up AI', 'Settings → AI: add a model or an installed CLI, and give the chat bar its own hotkey.'],
      ['Try the scheduler', 'Type "remind me to drink water in 2 hours" and press ↵.'],
    ],
    install: [
      ['Apple silicon', 'brew install --cask jhasubhash/tap/onecast'],
      ['Intel', 'brew install --cask jhasubhash/tap/onecast-universal'],
    ],
    installNote:
      'Or grab a DMG from Releases. Every build is signed with a Developer ID and notarized by Apple, and OneCast updates itself in place. Needs macOS 26 or later.',
    privacy:
      'Nothing is asked for up front. Accessibility is the main permission (paste, snippets, window management), requested the first time a feature needs it. Snippet keystrokes are matched locally, never stored and never sent anywhere.',
  },

  oneprompt: {
    heroNote: 'Under the art is a real terminal: tabs, splits, regex find, true colour, IME, mouse and images.',
    stats: [
      ['3', 'hand-made themes'],
      ['6', 'light and dark looks'],
      ['Rust + wgpu', 'GPU rendered'],
      ['Apache 2.0', 'open source'],
    ],
    themes: [
      {
        id: 'tsushima',
        name: 'Tsushima',
        blurb: 'Sumi on washi, after the ink-painting cutscenes of Ghost of Tsushima and Ghost of Yotei.',
        points: [
          'Golden parchment browning towards the edges, with water-stain tide lines and a flick of crimson splatter.',
          'Bold sumi swept with a slanted brush nib: thick-and-thin strokes, dry-brush streaks, ink that bleeds along the fibres.',
          'The cursor is a dab of cinnabar seal ink, different in every cell.',
          'Dark variant: the cutscenes inverted, parchment drawn through a field of ink.',
        ],
        light: '/oneprompt/theme-tsushima-light.jpg',
        dark: '/oneprompt/theme-tsushima-dark.jpg',
        lightName: 'Parchment',
        darkName: 'Ink',
      },
      {
        id: 'chalkboard',
        name: 'Chalkboard',
        blurb: 'Writing on a well-used board: charcoal on stone, chalk on slate.',
        points: [
          'Broad, grainy strokes that skip the surface’s tooth, dusty at the edges, shedding a little dust as they are written.',
          'Slate carries years of eraser swirls and ghosts of old lessons. Stone is softly mottled with fine grain.',
          'Switching themes wipes the old look away with an eraser, in a few streaky passes.',
          'Coloured chalks for the palette, a stub cursor, ring controls.',
        ],
        light: '/oneprompt/theme-chalkboard-stone.jpg',
        dark: '/oneprompt/theme-chalkboard-slate.jpg',
        lightName: 'Stone',
        darkName: 'Slate',
      },
      {
        id: 'logbook',
        name: 'Logbook',
        blurb: 'An old ship’s log, in iron-gall ink.',
        points: [
          'Cream ledger paper ruled in faded blue with a red double margin, foxing spots and a faint compass rose.',
          'Ink goes on blue-black and browns as it dries. Night is the same log read below deck by lamplight.',
          'Opening, switching and clearing turn a page. Failed commands get a red cross, long ones a wax seal pressed with an anchor.',
          'Closing a pane tears the page out of the log, down along the binding.',
        ],
        light: '/oneprompt/theme-logbook-day.jpg',
        dark: '/oneprompt/theme-logbook-night.jpg',
        lightName: 'Day',
        darkName: 'Night',
      },
    ],
    effects: [
      {
        id: 'strike',
        kicker: 'Deleting',
        title: 'Strikes what you delete',
        body:
          'Run rm and every mention of that file on screen is cut through: in ls output, in the command that deleted it, anywhere. Tsushima cuts it with a sword that flings blood, which splats and dries to a faint stain. Chalkboard draws a quick chalk line.',
        clip: '/oneprompt/clips/strike',
      },
      {
        id: 'clear',
        kicker: 'Clearing',
        title: 'Crumbles what you clear',
        body:
          'Cmd+K, or clear in the shell: the writing smoulders from the right, breaks into glowing specks and is blown away. Logbook sets the old page alight, and the Chalkboard crumbles into dust. Only the pane you cleared changes.',
        clip: '/oneprompt/clips/clear',
        flip: true,
      },
      {
        id: 'switch',
        kicker: 'Switching',
        title: 'A sword fight between themes',
        body:
          'Switching to Tsushima plays one to five quick slashes: a sweep, a cross, a claw, a zigzag or a flurry. The new look runs out of every cut like watercolour on damp paper, fingering and blooming into the grain. No two are alike.',
        clip: '/oneprompt/clips/themes',
      },
      {
        id: 'picker',
        kicker: 'Themes',
        title: 'A live theme picker',
        body:
          'Cmd+Option+T opens a card per theme, each showing your current screen as that theme draws it, live. Arrow keys to choose, return to switch with the theme’s own transition. Cmd+Shift+L flips light and dark.',
        clip: '/oneprompt/clips/picker',
        flip: true,
      },
      {
        id: 'settings',
        kicker: 'Settings',
        title: 'Tune every effect',
        body:
          'Cmd+, opens a settings panel that stays in sync with a plain settings file. Every animation can be switched off or scaled: writing speed, bleed, drying time, dust, sounds and more.',
        clip: '/oneprompt/clips/settings',
      },
    ],
    grid: [
      ['✍️', 'Written by hand', 'New text is traced along each glyph’s pen path. The ink bleeds, dries and ages.'],
      ['⚔️', 'Strikes what you delete', 'rm a file and every mention of it is cut through.'],
      ['🔥', 'Undoes what you clear', 'clear crumbles the writing to dust, or burns the page.'],
      ['🩸', 'Marks failures', 'A failed command gets a stroke of seal ink. A long one is stamped with a hanko.'],
      ['📜', 'Every theme, its own way', 'Openings, switches, split dividers, closing panes, the settings panel.'],
      ['🍁', 'Alive when idle', 'Leaves fall onto a window left alone. The cursor has a heartbeat.'],
      ['🗂️', 'A file browser', 'Cmd+B lists the shell’s folder beside it. Open Markdown, pictures and text right in the terminal.'],
      ['🖼️', 'Pictures and Markdown', 'imgcat photo.png shows it inline. md notes.md renders in the theme’s inks.'],
      ['🖥️', 'A real terminal', 'Tabs, splits, find with regex, clickable links, IME, true colour, mouse. Claude Code-friendly.'],
      ['🎨', 'Colours that fit the paper', 'True-colour programs keep their hue but move into a lightness range ink can have on the sheet.'],
      ['⏳', 'Paper that ages', 'Over hours of use a sheet yellows, creases and collects smudges. A new tab starts fresh.'],
      ['🔊', 'Synthesised sounds', 'Optional brush, sword, seal and chalk sounds, made from noise and tones with no recordings.'],
    ],
    keys: [
      ['⌘,', 'Settings'],
      ['⌘⌥T', 'Theme picker'],
      ['⌘⇧L', 'Light ↔ dark'],
      ['⌘D / ⌘⇧D', 'Split side by side / stacked'],
      ['⌘F', 'Find (⌘R for regex)'],
      ['⌘K', 'Clear'],
      ['⌘B', 'File browser'],
      ['⌘ click', 'Open a link or file'],
    ],
    install: [['macOS 11+, Apple silicon and Intel', 'brew install --cask jhasubhash/tap/oneprompt']],
    installNote: 'Or grab the dmg from Releases. Signed and notarized. It is an alpha, so expect rough edges.',
  },
}
