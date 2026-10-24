import type { CSSProperties } from 'react';
import { SectionHead } from './SectionHead';

const FACTS = [
  { k: 'Based in', v: 'Chennai, Jaipur and remote' },
  { k: 'Education', v: 'BCA, ICFAI University, Jaipur' },
  { k: 'Languages', v: 'English, Hindi, Tamil' },
  { k: 'Looking for', v: 'An Associate Designer role' },
];

const OFFSCREEN = [
  { title: 'Abhivyakti', text: 'Head of the cultural representation club' },
  { title: 'Football', text: 'Captain of the girls’ team' },
  { title: 'Events', text: 'Anchor and host at many events' },
];

export function About() {
  return (
    <section id="about" className="s-sec s-about" aria-labelledby="about-title">
      <svg className="s-wave top" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0H1440V36C1240 70 1060 78 860 46S470 4 270 40C180 56 90 62 0 44Z" fill="#460607" />
      </svg>
      <div className="s-wrap">
        <SectionHead id="about-title" tone="light" label="About" title="A designer who knows how the business runs." />
        <div className="s-about-grid">
          <div className="s-about-text rv">
            <p className="s-big">
              I&rsquo;m Shri Lakshmi, a BCA graduate moving into UI/UX and web design, with hands-on work in website
              creation, content strategy and UI quality testing.
            </p>
            <p>
              I&rsquo;ve also kept organisations running, so I design with the real constraints in view: budgets,
              vendors, deadlines and the people who have to use the thing. That makes my screens clear, and my
              hand-offs easy.
            </p>
            <p>I&rsquo;m aiming for an Associate Designer role where I can keep turning muddled screens into clear ones.</p>
          </div>
          <dl className="s-facts rv" style={{ '--d': '0.1s' } as CSSProperties}>
            {FACTS.map((fact) => (
              <div key={fact.k}>
                <dt>{fact.k}</dt>
                <dd>{fact.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <h3 className="s-offscreen-title rv">Off the screen</h3>
        <ul className="s-offscreen">
          {OFFSCREEN.map((item, i) => (
            <li key={item.title} className="rv" style={{ '--d': `${i * 0.1}s` } as CSSProperties}>
              <b>{item.title}</b>
              {item.text}
            </li>
          ))}
        </ul>
        <p className="s-note rv">Leading a club, captaining a team and hosting a room: the same skill as presenting a design.</p>
      </div>
    </section>
  );
}
