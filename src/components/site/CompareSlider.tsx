import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface Props {
  before: ReactNode;
  after: ReactNode;
  beforeLabel: string;
  afterLabel: string;
  title: string;
}

export function CompareSlider({ before, after, beforeLabel, afterLabel, title }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const touched = useRef(false);
  const [pos, setPos] = useState(50);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (reduced) return;
        const start = performance.now();
        const step = (now: number) => {
          if (touched.current) return;
          const t = Math.min(1, (now - start) / 2600);
          setPos(50 + Math.sin(t * Math.PI * 2) * 32 * (1 - t * 0.2));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    observer.observe(root);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="s-cmp" ref={rootRef} style={{ '--p': `${pos}%` } as CSSProperties}>
      <div className="s-cmp-layer" aria-hidden="true">
        {after}
      </div>
      <div className="s-cmp-layer s-cmp-before" aria-hidden="true">
        {before}
      </div>
      <span className="s-cmp-tag b" aria-hidden="true">
        {beforeLabel}
      </span>
      <span className="s-cmp-tag a" aria-hidden="true">
        {afterLabel}
      </span>
      <span className="s-cmp-line" aria-hidden="true">
        <i>
          <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </i>
      </span>
      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        aria-label={`Compare before and after: ${title}`}
        onChange={(e) => {
          touched.current = true;
          setPos(Number(e.target.value));
        }}
      />
    </div>
  );
}
