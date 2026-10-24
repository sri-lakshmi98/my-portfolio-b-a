interface Props {
  id: string;
  label: string;
  title: string;
  lead?: string;
  tone?: 'dark' | 'light';
}

export function SectionHead({ id, label, title, lead, tone = 'dark' }: Props) {
  return (
    <header className={`s-head ${tone}`}>
      <p className="s-label rv">
        <span aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="s-title rv" style={{ '--d': '0.08s' } as React.CSSProperties}>
        {title}
      </h2>
      {lead && (
        <p className="s-lead rv" style={{ '--d': '0.16s' } as React.CSSProperties}>
          {lead}
        </p>
      )}
    </header>
  );
}
