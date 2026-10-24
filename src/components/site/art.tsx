const NAVY = '#10264a';
const GOLD = '#c9a45c';
const IVORY = '#faf6ea';
const SKY = '#bcdcf2';

export function AadithyaBefore() {
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" focusable="false">
      <rect width="480" height="300" fill="#e7e7e4" />
      <rect width="480" height="30" fill="#c9c9c5" />
      <rect x="16" y="11" width="50" height="8" rx="2" fill="#a3a3a0" />
      {[260, 310, 360, 410].map((x) => (
        <rect key={x} x={x} y="12" width="34" height="6" rx="2" fill="#a3a3a0" />
      ))}
      <rect x="0" y="30" width="480" height="120" fill="#b9bdc2" />
      <text x="240" y="84" textAnchor="middle" fontSize="19" fill="#6c6f73" fontFamily="Arial, sans-serif">
        Welcome to our website
      </text>
      <rect x="150" y="98" width="180" height="7" rx="3" fill="#9a9ea3" />
      <rect x="180" y="112" width="120" height="7" rx="3" fill="#9a9ea3" />
      <rect x="208" y="130" width="64" height="12" rx="2" fill="#8c9096" />
      {[24, 176, 328].map((x) => (
        <g key={x}>
          <rect x={x} y="170" width="128" height="86" fill="#d5d5d2" />
          <rect x={x + 10} y="182" width="108" height="42" fill="#bdbdba" />
          <rect x={x + 10} y="234" width="70" height="6" rx="2" fill="#a3a3a0" />
        </g>
      ))}
      <rect x="0" y="276" width="480" height="24" fill="#c9c9c5" />
    </svg>
  );
}

export function AadithyaAfter() {
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="aa-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={SKY} />
          <stop offset="1" stopColor={IVORY} />
        </linearGradient>
        <linearGradient id="aa-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d3d70" />
          <stop offset="1" stopColor={NAVY} />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill={IVORY} />
      <rect width="480" height="150" fill="url(#aa-sky)" />
      <rect x="18" y="10" width="64" height="9" rx="3" fill={NAVY} />
      {[262, 312, 362].map((x) => (
        <rect key={x} x={x} y="11" width="34" height="6" rx="3" fill={NAVY} opacity="0.55" />
      ))}
      <rect x="410" y="6" width="54" height="17" rx="8.5" fill={GOLD} />
      <text x="28" y="76" fontSize="25" fontWeight="700" fill={NAVY} fontFamily="Manrope, Arial, sans-serif">
        Security and automation,
      </text>
      <text x="28" y="104" fontSize="25" fontWeight="700" fill={NAVY} fontFamily="Manrope, Arial, sans-serif">
        installed with care.
      </text>
      <rect x="28" y="116" width="150" height="6" rx="3" fill={NAVY} opacity="0.4" />
      <rect x="28" y="130" width="84" height="22" rx="11" fill={GOLD} />
      <text x="70" y="145" textAnchor="middle" fontSize="10" fontWeight="700" fill={NAVY} fontFamily="Inter, Arial, sans-serif">
        Get a quote
      </text>
      <g transform="translate(0 6)">
        <g transform="translate(66 174) rotate(-4)">
          <rect width="96" height="72" rx="8" fill="#fff" stroke={GOLD} strokeOpacity="0.4" />
          <rect x="16" y="22" width="64" height="14" rx="3" fill={NAVY} opacity="0.12" />
        </g>
        <g transform="translate(318 174) rotate(4)">
          <rect width="96" height="72" rx="8" fill="#fff" stroke={GOLD} strokeOpacity="0.4" />
          <rect x="16" y="22" width="64" height="14" rx="3" fill={NAVY} opacity="0.12" />
        </g>
        <g transform="translate(160 160)">
          <rect width="160" height="94" rx="10" fill="url(#aa-card)" />
          <rect x="18" y="20" width="124" height="26" rx="4" fill={GOLD} opacity="0.9" />
          <rect x="18" y="58" width="76" height="7" rx="3" fill="#fff" opacity="0.7" />
          <rect x="18" y="72" width="48" height="7" rx="3" fill="#fff" opacity="0.4" />
        </g>
      </g>
      {[210, 226, 242, 258, 274].map((x, i) => (
        <circle key={x} cx={x} cy="282" r={i === 2 ? 3.4 : 2.2} fill={i === 2 ? GOLD : NAVY} opacity={i === 2 ? 1 : 0.3} />
      ))}
    </svg>
  );
}

function Wire({ pins }: { pins: 'friction' | 'guided' }) {
  const bad = pins === 'friction';
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" focusable="false">
      <rect width="480" height="300" fill={bad ? '#efe9dc' : '#f4f0e4'} />
      <rect x="20" y="16" width="440" height="26" rx="5" fill="#fffdf6" stroke="#460607" strokeOpacity="0.2" />
      <rect x="32" y="26" width="60" height="7" rx="3" fill="#460607" opacity="0.4" />
      <rect x="380" y="22" width="68" height="14" rx="7" fill={bad ? '#c9c2b2' : '#460607'} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${20 + i * 150} 60)`}>
          <rect width="140" height="104" rx="6" fill="#fffdf6" stroke="#460607" strokeOpacity="0.2" />
          <rect x="10" y="10" width="120" height="50" rx="3" fill="#460607" opacity={bad ? 0.1 : 0.16} />
          <rect x="10" y="70" width="80" height="7" rx="3" fill="#460607" opacity="0.45" />
          <rect x="10" y="84" width="46" height="7" rx="3" fill="#460607" opacity="0.25" />
        </g>
      ))}
      <rect x="20" y="180" width="212" height="100" rx="6" fill="#fffdf6" stroke="#460607" strokeOpacity="0.2" />
      {[196, 214, 232, 250].map((y) => (
        <rect key={y} x="34" y={y} width={bad ? 150 : 180} height="9" rx="3" fill="#460607" opacity="0.2" />
      ))}
      <rect x="250" y="180" width="210" height="100" rx="6" fill="#fffdf6" stroke="#460607" strokeOpacity="0.2" />
      <rect x="266" y="198" width="178" height="22" rx="4" fill="none" stroke="#460607" strokeOpacity="0.35" />
      <rect x="266" y="232" width="178" height="22" rx="4" fill="none" stroke="#460607" strokeOpacity="0.35" />
      <rect x="352" y="262" width="92" height="14" rx="7" fill={bad ? '#c9c2b2' : '#e8453c'} />
      {[
        { x: 168, y: 82, n: 1 },
        { x: 220, y: 214, n: 2 },
        { x: 436, y: 276, n: 3 },
      ].map((p) => (
        <g key={p.n} transform={`translate(${p.x} ${p.y})`}>
          <circle r="13" fill={bad ? '#e8453c' : '#4aa56a'} stroke="#fffdf6" strokeWidth="2.5" />
          {bad ? (
            <text y="4.5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">
              {p.n}
            </text>
          ) : (
            <path d="M-5 0l3.5 3.8L5.5 -3.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </g>
      ))}
    </svg>
  );
}

export function NestBefore() {
  return <Wire pins="friction" />;
}

export function NestAfter() {
  return <Wire pins="guided" />;
}

export function ArrivalBefore() {
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" focusable="false">
      <rect width="480" height="300" fill="#ecebe6" />
      <rect x="20" y="14" width="440" height="22" rx="11" fill="#fff" stroke="#00000020" />
      {[0, 1, 2, 3].map((col) =>
        [0, 1].map((row) => (
          <g key={`${col}${row}`} transform={`translate(${20 + col * 112} ${52 + row * 120})`}>
            <rect width="100" height="108" rx="6" fill="#fff" stroke="#00000018" />
            <rect x="8" y="8" width="84" height="58" rx="3" fill={['#d9d4c8', '#cfd5d9', '#dccfcf', '#d3dacb'][(col + row) % 4]} />
            <rect x="8" y="74" width="60" height="6" rx="3" fill="#00000030" />
            <rect x="8" y="88" width="34" height="8" rx="3" fill="#00000050" />
          </g>
        )),
      )}
    </svg>
  );
}

function Phone({ x, y, s = 1, hero = false }: { x: number; y: number; s?: number; hero?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect width="104" height="196" rx="14" fill="#1a0506" />
      <rect x="4" y="4" width="96" height="188" rx="11" fill={hero ? 'url(#ar-reel)' : 'url(#ar-reel2)'} />
      {hero && (
        <>
          <circle cx="52" cy="84" r="18" fill="#fff" fillOpacity="0.25" />
          <path d="M46 74l16 10-16 10z" fill="#fff" />
          <g fill="#fff">
            <circle cx="86" cy="116" r="5" />
            <circle cx="86" cy="134" r="5" fillOpacity="0.8" />
            <circle cx="86" cy="152" r="5" fillOpacity="0.6" />
          </g>
          <rect x="12" y="150" width="58" height="22" rx="11" fill="#fffdf6" />
          <rect x="18" y="156" width="10" height="10" rx="3" fill="#e8453c" />
          <rect x="33" y="157" width="30" height="4" rx="2" fill="#460607" opacity="0.6" />
          <rect x="33" y="164" width="18" height="3" rx="1.5" fill="#460607" opacity="0.35" />
          <rect x="12" y="180" width="80" height="3" rx="1.5" fill="#fff" fillOpacity="0.3" />
          <rect x="12" y="180" width="46" height="3" rx="1.5" fill="#fff" />
        </>
      )}
    </g>
  );
}

export function ArrivalAfter() {
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="ar-reel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5a65b" />
          <stop offset="0.55" stopColor="#e8453c" />
          <stop offset="1" stopColor="#6d0f12" />
        </linearGradient>
        <linearGradient id="ar-reel2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7fb7c9" />
          <stop offset="1" stopColor="#2b4a6b" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="#460607" />
      <circle cx="240" cy="150" r="130" fill="#e8453c" fillOpacity="0.14" />
      <Phone x={70} y={64} s={0.8} />
      <Phone x={326} y={64} s={0.8} />
      <Phone x={188} y={50} s={1.04} hero />
      <path d="M446 40l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" fill="#f5e211" />
    </svg>
  );
}
