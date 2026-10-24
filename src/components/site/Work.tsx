import type { CSSProperties, ReactNode } from 'react';
import { CompareSlider } from './CompareSlider';
import { SectionHead } from './SectionHead';
import {
  AadithyaAfter,
  AadithyaBefore,
  ArrivalAfter,
  ArrivalBefore,
  NestAfter,
  NestBefore,
} from './art';

interface Project {
  id: string;
  index: string;
  kind: string;
  title: string;
  intro: string;
  did: string[];
  outcome: string;
  tags: string[];
  href: string;
  cta: string;
  beforeLabel: string;
  afterLabel: string;
  before: ReactNode;
  after: ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: 'aadithya',
    index: '01',
    kind: 'Website refresh',
    title: 'Aadithya Automation & Security Systems',
    intro: 'A before-and-after redesign for a company whose old site never quite said what it sold.',
    did: [
      'Rewrote the hero around what the client actually sells',
      'Built a new palette of light blue, deep navy, champagne gold and ivory, set in Manrope and Inter',
      'Showed clients as an auto-advancing 3D coverflow',
      'Gave products depth with pointer tilt',
      'Sent every quote button to the contact details',
    ],
    outcome:
      'The page now opens on the offer, shows its clients in motion and gives every quote button somewhere to land.',
    tags: ['Visual design', 'Typography', 'Interaction'],
    href: 'https://aadithya-automation.vercel.app/',
    cta: 'Visit the live site',
    beforeLabel: 'Before',
    afterLabel: 'After',
    before: <AadithyaBefore />,
    after: <AadithyaAfter />,
  },
  {
    id: 'nest',
    index: '02',
    kind: 'UX testing and guidance',
    title: 'Nest by Emmple',
    intro: 'Hands-on usability testing of a live product, followed by guidance the team could act on.',
    did: [
      'Tested the product screen by screen for usability issues',
      'Pinpointed where people would hesitate, stall or misread',
      'Turned each finding into clear guidance on how to improve it',
    ],
    outcome: 'Friction points were named and turned into direction the product team could build from.',
    tags: ['UX testing', 'Usability', 'Product guidance'],
    href: 'https://nest.emmple.com',
    cta: 'See the product',
    beforeLabel: 'Friction found',
    afterLabel: 'Guided fix',
    before: <NestBefore />,
    after: <NestAfter />,
  },
  {
    id: 'new-arrival',
    index: '03',
    kind: 'Concept and experience',
    title: 'New Arrival Experience',
    intro: 'A selling idea for e-commerce: let the product introduce itself in motion.',
    did: [
      'Shaped the concept: sellers upload vertical videos and reels to promote their products',
      'Built it around a format that is hugely popular on social media in the Indian market',
      'Designed the experience as a unique selling point against static product grids',
    ],
    outcome: 'A distinct e-commerce idea where discovery happens through short vertical video, not still listings.',
    tags: ['Concept', 'E-commerce', 'Mobile first'],
    href: 'https://new-arrival-experience.vercel.app/',
    cta: 'Try the prototype',
    beforeLabel: 'Static listings',
    afterLabel: 'Reel first',
    before: <ArrivalBefore />,
    after: <ArrivalAfter />,
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
      <path d="M5 15L15 5M7 5h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Work() {
  return (
    <section id="work" className="s-sec s-work" aria-labelledby="work-title">
      <svg className="s-wave top" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0H1440V40C1250 84 1080 80 880 46S480 4 280 40C190 56 90 70 0 56Z" fill="#f5f1e4" />
      </svg>
      <div className="s-wrap">
        <SectionHead
          id="work-title"
          label="Selected work"
          title="Proof first. Drag to see what changed."
          lead="Three projects, each with what I did and what it did for the people using it."
        />

        <div className="s-cases">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className={`s-case rv ${i % 2 === 1 ? 'flip' : ''}`}
              aria-labelledby={`${p.id}-title`}
            >
              <div className="s-case-art">
                <CompareSlider
                  before={p.before}
                  after={p.after}
                  beforeLabel={p.beforeLabel}
                  afterLabel={p.afterLabel}
                  title={p.title}
                />
              </div>
              <div className="s-case-body">
                <p className="s-case-kicker">
                  <b>{p.index}</b>
                  <i aria-hidden="true" />
                  {p.kind}
                </p>
                <h3 id={`${p.id}-title`} className="s-case-title">
                  {p.title}
                </h3>
                <p className="s-case-intro">{p.intro}</p>
                <h4 className="s-mini">What I did</h4>
                <ul className="s-did">
                  {p.did.map((line, n) => (
                    <li key={line} style={{ '--n': n } as CSSProperties}>
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="s-outcome">
                  <span>Outcome</span>
                  {p.outcome}
                </p>
                <div className="s-case-foot">
                  <ul className="s-chips" aria-label="Focus areas">
                    {p.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className="s-link" href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.cta}
                    <Arrow />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
