import type { CSSProperties, ReactNode } from 'react';
import { SectionHead } from './SectionHead';

interface Team {
  name: string;
  focus: string;
  points: string[];
  icon: ReactNode;
}

const STROKE = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

const TEAMS: Team[] = [
  {
    name: 'First Welding Certification Pvt. Ltd.',
    focus: 'Website, search and operations',
    points: [
      'Designed UI layouts and contributed directly to building the primary company website',
      'Led SEO, digital marketing and content strategy to grow visibility and organic search reach',
      'Ran administration, accounts, monthly budgets and vendor and audit coordination',
    ],
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" focusable="false">
        <rect x="8" y="12" width="48" height="36" rx="5" {...STROKE} />
        <path d="M8 22h48M22 56h20M32 48v8" {...STROKE} />
        <path d="M18 34h10M18 40h18" {...STROKE} />
      </svg>
    ),
  },
  {
    name: 'Wisflux Tech Labs',
    focus: 'UX testing and people operations',
    points: [
      'Ran comprehensive UI/UX quality testing on websites and digital products to surface usability issues',
      'Created promotional and informational content',
      'Supported onboarding and team efficiency initiatives',
    ],
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" focusable="false">
        <circle cx="28" cy="28" r="16" {...STROKE} />
        <path d="M40 40l14 14M22 28l5 5 9-10" {...STROKE} />
      </svg>
    ),
  },
  {
    name: 'Layam Group',
    focus: 'Executive support and procurement',
    points: [
      'Primary administrative contact and Secretary to the CEO: calendars, daily task allocation and high-priority operations',
      'Handled vendor relations and procurement end to end, from purchase orders to inventory records and invoice checks',
      'Coordinated internal departments on staffing and delivery of corporate initiatives',
    ],
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" focusable="false">
        <rect x="10" y="16" width="44" height="40" rx="5" {...STROKE} />
        <path d="M10 28h44M22 10v12M42 10v12M20 38h8M20 46h14M40 40l4 4 6-8" {...STROKE} />
      </svg>
    ),
  },
];

export function Teams() {
  return (
    <section id="teams" className="s-sec s-teams" aria-labelledby="teams-title">
      <svg className="s-wave top" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0H1440V44C1260 86 1090 80 890 48S470 6 270 42C180 58 90 66 0 50Z" fill="#460607" />
      </svg>
      <div className="s-wrap">
        <SectionHead
          id="teams-title"
          tone="light"
          label="Where I've put this to work"
          title="Design skills, tested in real teams."
          lead="A website team, a product team, a leadership office. Each one asked for something different, and each one sharpened how I design."
        />
        <div className="s-teams-grid">
          {TEAMS.map((team, i) => (
            <article
              key={team.name}
              className="s-team rv"
              style={{ '--d': `${i * 0.1}s` } as CSSProperties}
              aria-labelledby={`team-${i}`}
            >
              <div className="s-team-icon">{team.icon}</div>
              <p className="s-team-focus">{team.focus}</p>
              <h3 id={`team-${i}`} className="s-team-name">
                {team.name}
              </h3>
              <ul>
                {team.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="s-thread rv">
          The common thread: make it clearer for the next person who has to use it.
        </p>
      </div>
    </section>
  );
}
