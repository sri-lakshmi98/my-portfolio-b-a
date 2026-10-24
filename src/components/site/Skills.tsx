import type { CSSProperties } from 'react';
import { SectionHead } from './SectionHead';

const TOOLS = [
  { name: 'Figma', note: 'Interfaces and prototypes', mark: 'Fg', color: '#f24e1e' },
  { name: 'Photoshop', note: 'Image and visual polish', mark: 'Ps', color: '#31a8ff' },
  { name: 'Canva', note: 'Fast, on-brand content', mark: 'Cv', color: '#8ed462' },
  { name: 'Framer', note: 'Interactive web design', mark: 'Fr', color: '#f5e211' },
];

const GROUPS = [
  { title: 'Design and UX', items: ['Web design', 'UI/UX', 'Wireframing', 'UI testing', 'Visual design', 'Information architecture', 'SEO'] },
  { title: 'Technical', items: ['HTML and CSS', 'Web development', 'Content'] },
  { title: 'Operations', items: ['Executive support', 'Vendors', 'Audits', 'Inventory', 'Operations'] },
];

const RIBBON = ['Wireframing', 'Visual design', 'UI testing', 'Information architecture', 'SEO', 'Web design', 'Content'];

export function Skills() {
  return (
    <section id="skills" className="s-sec s-skills" aria-labelledby="skills-title">
      <svg className="s-wave top" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0H1440V50C1220 10 1040 12 820 50S440 84 240 48C150 32 70 30 0 46Z" fill="#f5f1e4" />
      </svg>
      <div className="s-wrap">
        <SectionHead
          id="skills-title"
          label="Skills"
          title="The toolkit behind the work."
          lead="Four tools I reach for first, and the craft around them."
        />
        <ul className="s-tools">
          {TOOLS.map((tool, i) => (
            <li key={tool.name} className="s-tool rv" style={{ '--d': `${i * 0.08}s`, '--c': tool.color } as CSSProperties}>
              <span className="s-tool-mark" aria-hidden="true">
                {tool.mark}
              </span>
              <h3>{tool.name}</h3>
              <p>{tool.note}</p>
            </li>
          ))}
        </ul>
        <div className="s-groups">
          {GROUPS.map((group, i) => (
            <div key={group.title} className="s-group rv" style={{ '--d': `${i * 0.1}s` } as CSSProperties}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="s-ribbon" aria-hidden="true">
        <div className="s-ribbon-track">
          {[0, 1].map((n) => (
            <div key={n} className="s-ribbon-set">
              {RIBBON.map((word) => (
                <span key={`${n}${word}`}>
                  {word}
                  <i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
