# Mainframe — Approved Implementation Plan

## Product scope
Build a single-route, full-screen creative-agency landing page for **Mainframe** using **React, TypeScript, Vite, and Tailwind CSS only**. The page is a cinematic first impression rather than a conventional scroll site: an inert full-screen film becomes an interaction surface, while the foreground contains the brand, navigation, A.R.I.A. greeting, typewriter message, and direct-response pills.

## Implementation approach

- Use a compact Vite + React + TypeScript project with Tailwind CSS for responsive utility styling and a small `index.css` layer for reset, supplied font tokens, animation keyframes, and the visual treatment unavailable as a utility.
- Mount the single home route from `src/main.tsx`; `src/App.tsx` composes the video, navbar, mobile menu, hero copy, and action pills.
- Implement `useTypewriter` in `src/hooks/useTypewriter.ts`. It accepts a text string, a default `speed` of 38ms, and a default `startDelay` of 600ms, returns `{ displayed, done }`, starts after the delay, and cleans up timers on unmount.
- Manage the background video through a `ref` in `App.tsx`. On `loadedmetadata`, initialize the target time; on `mousemove`, calculate the horizontal delta against the last pointer x-position, convert it into `(delta / window.innerWidth) * 0.8 * duration`, clamp to the media duration, then schedule a seek. While a seek is outstanding, update the target only. On `seeked`, initiate another seek only when the target changed. This avoids seek flooding while keeping reverse and forward scrubbing responsive.
- Keep the video muted, inline, preloaded, and manually controlled—never autoplay it.
- Use React state for the mobile menu, action-pill entrance (triggered at 400ms independently of text completion), and a short copied confirmation on the email control. Copy with `navigator.clipboard.writeText('hello@mainframe.co')`, with a safe fallback only when the browser does not expose clipboard support.
- Include a static `public/manus-routes.json` manifest that declares just the `/` route.

## Design direction

### Design movement
**Editorial motion minimalism**: a gallery-like black stage with oversized optical type, documentary video texture, and a deliberately restrained interactive surface.

### Core principles
1. **Atmosphere before chrome** — the video owns the canvas; foreground UI is sparse and white.
2. **Controlled imprecision** — the softened A.R.I.A. label introduces a deliberately obscured, machine-adjacent quality.
3. **Responsive restraint** — desktop navigation is typographic and linear; mobile collapses to a clean immersive overlay.
4. **Direct interaction** — mouse movement controls the visual world, and pills invite specific creative conversations rather than generic conversion.

### Color philosophy
The working palette is **monochrome**: white type and controls float above a continuously variable cinematic background; black is used for contrast in hover states and the mobile overlay. This leaves the moving image to contribute all color and makes the interface feel authored rather than decorated.

### Layout paradigm
A fixed, edge-to-edge media plane sits beneath a **corner-anchored editorial shell**. The navbar is distributed across the top edge. Hero content lives left-aligned, vertically centered on desktop and grounded to the lower edge on mobile. There are no boxed cards, section grids, or traditional page columns.

### Signature elements
- The `Mainframe® ✳︎` asymmetric wordmark pairing.
- A blurred, two-line A.R.I.A. system label.
- A mouse-scrubbed background film that transforms passive media into tactile motion.

### Interaction philosophy
Motion is purposeful and low-friction: pointer travel changes the background timeline, menu bars become a close mark, and pill inversions signal affordance. No interaction competes with the message or requires a second screen.

### Animation
- Typewriter begins after 600ms and advances at 38ms per character; its cursor blinks only while content is incomplete.
- Action pills fade in and rise 8px after 400ms, independently of the typewriter sequence.
- Hamburger bars transform over 300ms; the menu overlay changes opacity and pointer eligibility together.
- Hover colors transition over 200ms. Video seeks are event-queued rather than continuously dispatched during an outstanding seek.

### Typography system
Load the two supplied Helvetica Now Display webfont stylesheets in `index.html`.

- `--font-body`: `HelveticaNowDisplayW01-Rg`, `Helvetica Neue`, Arial, sans-serif, used throughout the page.
- `--font-heading`: `HelveticaNowDisplay-Medium`, `Helvetica Neue`, Arial, sans-serif, reserved for the `Mainframe®` wordmark.
- Hero and intro copy scale through `clamp(18px, 4vw, 26px)` so the editorial message retains proportion across devices.

### Brand essence
**Mainframe is an adaptive creative partner for teams with good taste and ambitious ideas.**

Personality: **intelligent, experimental, self-assured**.

### Brand voice
Concise, perceptive, and lightly teasing; it assumes a shared creative standard rather than selling at the visitor.

- “Good taste tends to find us.”
- “Now, what are we building?”

### Wordmark and logo
The brand mark is the Helvetica Now Display Medium `Mainframe®` wordmark paired with a close-set, oversized `✳︎` signal star. The star acts as a small visual interrupt: an editorial registration mark with the energy of a system cursor or a creative spark.

### Signature brand color
**Mainframe Black — `#000000`**: used as the hard-edged contrast color, hover inversion target, and immersive mobile navigation field.

## Project structure

```text
mainframe/
├── index.html                 # Supplied webfont links, page metadata, Vite mount point
├── package.json               # React, Vite, TypeScript, Tailwind scripts and pinned package manager
├── pnpm-workspace.yaml        # Explicit pnpm lifecycle-build policy
├── vite.config.ts             # Vite with React and Tailwind integration
├── tsconfig.json              # TypeScript project settings
├── public/
│   └── manus-routes.json      # Single home-route manifest
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Page composition, media scrub logic, menu, controls
│   ├── index.css              # Font variables, reset, animations, custom media styles
│   └── hooks/
│       └── useTypewriter.ts   # Delayed typewriter behavior
├── plan.md                    # This approved plan
└── TODO.md                    # Requirement-level implementation tracking
```

## Serving
The page is static and needs no server/database resources. Vite serves it at the configured Preview port `3000`; the production declaration will build the static `dist` directory with a frozen pnpm install followed by `pnpm build`.
