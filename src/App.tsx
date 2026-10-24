import { useEffect, useState } from 'react';
import { useTypewriter } from './hooks/useTypewriter';
import { GazeCanvas } from './components/GazeCanvas';
import { JourneySection } from './components/JourneySection';
import { Work } from './components/site/Work';
import { Teams } from './components/site/Teams';
import { Skills } from './components/site/Skills';
import { About } from './components/site/About';
import { Contact } from './components/site/Contact';
import { EMAIL, NAV_ITEMS, PROJECT_PILLS, RESUME } from './components/site/data';
import { useCopy } from './hooks/useCopy';
import { useReveal } from './hooks/useReveal';
import './components/site/site.css';

const HERO_MESSAGE =
  'I design websites that say what a business sells, then test them until they are easy to use.';

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3 w-3 shrink-0"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="1" width="7" height="7" rx="0.7" stroke="currentColor" />
      <rect x="1" y="4" width="7" height="7" rx="0.7" stroke="currentColor" />
    </svg>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [actionsVisible, setActionsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { displayed, done } = useTypewriter(HERO_MESSAGE);
  const { copied, copy: copyEmail } = useCopy(EMAIL);

  useReveal();

  useEffect(() => {
    const timer = window.setTimeout(() => setActionsVisible(true), 400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-[#460607] text-white">
      <GazeCanvas />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-black/20"
        aria-hidden="true"
      />

      <nav
        className={`site-nav fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 ${
          scrolled ? 'solid' : ''
        }`}
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="M. Shri Lakshmi, home">
          <span
            className="text-[21px] tracking-tight text-white sm:text-[26px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Shri Lakshmi
          </span>
          <span
            className="select-none text-[25px] text-white sm:text-[30px]"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </a>

        <div className="hidden text-[23px] text-white md:flex md:items-center">
          {NAV_ITEMS.map((item, index) => (
            <span key={item.label} className="flex items-center">
              {index > 0 && <span aria-hidden="true">,&nbsp;</span>}
              <a href={item.href} className="transition-opacity hover:opacity-60">
                {item.label}
              </a>
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden text-[23px] text-white underline underline-offset-2 transition-opacity hover:opacity-60 md:block"
        >
          Get in touch
        </a>

        <button
          type="button"
          className="flex flex-col gap-[5px] md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className={`h-[2px] w-6 origin-center bg-white transition duration-300 ${
              isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[2px] w-6 origin-center bg-white transition duration-300 ${
              isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[9] flex flex-col justify-center gap-8 bg-black/90 px-8 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[32px] font-medium text-white transition-opacity hover:opacity-60"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="text-[32px] font-medium text-white underline underline-offset-2 transition-opacity hover:opacity-60"
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          Get in touch
        </a>
      </div>

      <main className="relative z-[1] flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0">
        <div className="relative z-10 max-w-xl">
          <p className="mb-4 text-[clamp(15px,3.4vw,20px)] font-normal leading-[1.3] text-white/85 sm:mb-5">
            M. Shri Lakshmi
            <span className="mx-2 text-white/50" aria-hidden="true">/</span>
            UI/UX and web designer
          </p>

          <h1 className="sr-only">M. Shri Lakshmi, UI/UX and web designer</h1>
          <p className="mb-5 min-h-[54px] text-[clamp(20px,4.4vw,30px)] font-normal leading-[1.3] text-white sm:mb-6" style={{ textShadow: '0 1px 14px rgba(0,0,0,0.5)' }}>
            {displayed}
            {!done && <span className="blink-cursor" aria-hidden="true" />}
          </p>

          <p className="mb-2 mt-7 text-[13px] uppercase tracking-[0.18em] text-white/70">
            Selected work
          </p>
          <div className="mb-6 flex flex-wrap gap-y-1">
            {PROJECT_PILLS.map((work) => (
              <a
                key={work.name}
                href={work.href}
                className="group mb-[0.4em] mx-[0.2em] inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/70 bg-black/25 px-4 py-[0.3em] text-[13px] text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-black sm:px-5 sm:text-[15px]"
              >
                {work.name}
                <span className="text-[11px] opacity-60 group-hover:opacity-70">{work.kind}</span>
              </a>
            ))}
          </div>

          <div
            className={`flex flex-wrap gap-y-1 ${
              actionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
            style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}
          >
            <a
              href="#work"
              className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]"
            >
              See the work
            </a>

            <a
              href={RESUME}
              download="Shri-Lakshmi-Resume.pdf"
              className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-[#b6f23c] px-4 py-[0.3em] text-[13px] font-medium text-[#1c3a07] transition-colors duration-200 hover:bg-white sm:px-5 sm:text-[15px]"
            >
              Download resume
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
              aria-label={copied ? 'Email copied to clipboard' : `Copy ${EMAIL} to clipboard`}
              title={copied ? 'Email copied' : 'Copy email address'}
            >
              <span>
                Say hello: <span className="underline underline-offset-1">{EMAIL}</span>
              </span>
              <CopyIcon />
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Email copied to clipboard.' : ''}
            </span>
          </div>
        </div>
      </main>

      <JourneySection />
      <Work />
      <Teams />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
