# Mainframe — Delivery To-Do

## 1. Establish the React, TypeScript, Vite, Tailwind, and route-manifest foundation
- [x] Use only React, ReactDOM, Tailwind CSS, and Vite; no UI library and no Lucide component usage.
- [x] Add a root route manifest at `GET /manus-routes.json` declaring the single `/` Home route.
- [x] Load `https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium` and `https://db.onlinewebfonts.com/c/1aa3377e489837a26d019bba501e779d?family=HelveticaNowDisplayW01-Rg` as stylesheet links in `index.html`.
- [x] In `index.css`, define `--font-heading: 'HelveticaNowDisplay-Medium', 'Helvetica Neue', Arial, sans-serif` and `--font-body: 'HelveticaNowDisplayW01-Rg', 'Helvetica Neue', Arial, sans-serif`; the body and page use `var(--font-body)` and only the Mainframe® logo text uses `var(--font-heading)`.

## 2. Deliver the controlled full-screen background video
- [x] Render a full-screen video fixed at `inset: 0`, `z-index: 0`, `object-fit: cover`, `object-position: 70% center`, using `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4`.
- [x] Configure the video as `muted`, `playsInline`, `preload="auto"`, without autoplay.
- [x] Listen for `mousemove` on `window`; track `prevX`; calculate `delta = currentX - prevX`; calculate time offset `(delta / window.innerWidth) * 0.8 * video.duration`; clamp target time from `0` to `video.duration`; seek with `video.currentTime`.
- [x] Use an `onSeeked` handler to queue another seek only if `targetTime` changed while a seek was outstanding, preventing seek flooding while supporting forward and backward scrubbing.

## 3. Deliver responsive Mainframe navigation
- [x] Fix the navbar at the top across the full width, z-index 10, padded `px-5 sm:px-8 py-4 sm:py-5`, with a flex row using `justify-between` and `items-center`.
- [x] Render the left logo as a `gap-3` flex row: `Mainframe®` in white at `text-[21px] sm:text-[26px]`, tight tracking, heading font, beside a white decorative `✳︎` at `text-[25px] sm:text-[30px]`, `select-none`, `letter-spacing: -0.02em`.
- [x] On md and wider, show centered white `text-[23px]` Labs, Studio, Openings, Shop navigation links separated by rendered comma-space text, each with `hover:opacity-60 transition-opacity`, plus a right aligned white `text-[23px]` underlined, underline-offset-2 Get in touch link with the same hover behavior.
- [x] Below md, replace desktop navigation with a button whose three bars are each `w-6 h-[2px] bg-white` and separated with `gap-[5px]`; while toggled, top rotates 45 degrees and translates down 7px, middle fades to opacity 0, bottom rotates -45 degrees and translates up 7px, all with duration 300ms.
- [x] Below md, show/hide a z-index 9 fixed full-screen `bg-black/90 backdrop-blur-md` navigation overlay that is a vertically centered, left-aligned `px-8 gap-8` flex column with the same large `text-[32px] font-medium` links and an underlined Get in touch action; fade via opacity and pointer-events and hide it at md and wider.

## 4. Deliver the adaptive hero message and timed motion
- [x] Render a z-index 1, overflow-hidden `h-screen` hero with flex column layout: `justify-end pb-12` on mobile, `md:justify-center md:pb-0`, and `px-5 sm:px-8 md:px-10`; use a relative z-10 `max-w-xl` content container.
- [x] Add the non-interactive, non-selectable blurred label with `mb-5 sm:mb-6`, white normal-weight `clamp(18px, 4vw, 26px)` text, line-height 1.3, blur 4px, and two lines: `Hey there, meet A.R.I.A,` and `Mainframe's Adaptive Response Interface Agent`.
- [x] Implement a custom `useTypewriter` hook that takes text, `speed` defaulting to 38ms per character, and `startDelay` defaulting to 600ms; after the delay it reveals one character per interval and returns `{ displayed, done }`.
- [x] Type the exact copy `Glad you stopped in. Good taste tends to find us. Now, what are we building?` in a white paragraph with `mb-5 sm:mb-6`, normal-weight `clamp(18px, 4vw, 26px)` text, line-height 1.35, minimum height 54px.
- [x] Show only while typing an inline blinking white cursor with `w-[2px] h-[1.1em]`, vertical alignment, `ml-[2px]`, and `blink 1s step-end infinite` animation (opaque at 0/100%, transparent at 50%).
- [x] Animate the action control group independently 400ms after page load from opacity 0 and `translateY(8px)` to opacity 1 and `translateY(0)` over opacity/transform 0.4s ease; do not wait for typing to finish.

## 5. Deliver the agency action pills and email clipboard behavior
- [x] Lay out actions in `flex flex-wrap gap-y-1`.
- [x] Render filled white pills for Pitch us an idea, Come work here, Send a brief hello, and See how we operate, each `inline-flex items-center justify-center`, `bg-white text-black border border-black/10 rounded-full`, `text-[13px] sm:text-[15px]`, `px-4 sm:px-5`, `py-[0.3em]`, `mx-[0.2em]`, `mb-[0.4em]`, with nowrap text and `bg-black text-white` hover plus 200ms color transition.
- [x] Render an outlined email pill: `Reach us: hello@mainframe.co`, with the email underlined using underline-offset-1 and a 12x12 inline SVG of two overlapping rectangles. Use white text, transparent background, white border, rounded-full, same pill sizing, `gap-2 sm:gap-3`, and inverted white-background/black-text hover treatment.
- [x] On the email-pill click, call `navigator.clipboard.writeText('hello@mainframe.co')` and provide clear transient copied feedback without changing the requested control design.

## 6. Validate and prepare the static delivery
- [x] Resolve TypeScript diagnostics and production build errors.
- [x] Confirm the manifest returns JSON at `/manus-routes.json`, the development page is live on port 3000, and desktop/mobile layouts render correctly.
- [x] Configure a static build declaration that produces `dist` and leaves auto-publication disabled.
