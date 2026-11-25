/**
 * Ilustraciones temáticas en SVG (decorativas, sin texto). viewBox común 160x120.
 * Las clases anim-* se animan en globals.css y se desactivan con prefers-reduced-motion.
 */
import type { CSSProperties, ReactElement } from "react";

const origin = (x: number, y: number): CSSProperties => ({
  transformOrigin: `${x}px ${y}px`,
  transformBox: "view-box",
});

function Sequia() {
  return (
    <>
      <rect width="160" height="120" fill="#fbe7c8" />
      <g className="anim-pulse" style={origin(118, 34)}>
        <circle cx="118" cy="34" r="15" fill="#f5a524" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line key={a} x1="118" y1="11" x2="118" y2="5" stroke="#f5a524" strokeWidth="3" strokeLinecap="round" transform={`rotate(${a} 118 34)`} />
        ))}
      </g>
      <g stroke="#eab27a" strokeWidth="2" fill="none" strokeLinecap="round" className="anim-shimmer">
        <path d="M18 46 q5 -4 10 0 t10 0 t10 0" />
        <path d="M30 58 q5 -4 10 0 t10 0" />
      </g>
      <path d="M0 76 Q40 68 80 74 T160 72 V120 H0Z" fill="#c98b55" />
      <path d="M0 76 Q40 68 80 74 T160 72 V78 Q120 76 80 80 T0 82Z" fill="#b57a47" />
      <g stroke="#7d4f2a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 84 l8 10 l-4 9 l10 9" />
        <path d="M32 94 l-12 5" />
        <path d="M74 80 l-6 12 l9 7 l-3 13" />
        <path d="M77 99 l15 3" />
        <path d="M118 82 l7 9 l-8 10 l6 11" />
        <path d="M125 91 l13 -2" />
      </g>
      <g stroke="#7a5530" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path d="M52 76 q-2 -14 4 -26" />
        <path d="M55 60 q7 -4 11 -1" />
        <path d="M54 67 q-7 -3 -10 0" />
      </g>
      <ellipse cx="67" cy="62" rx="4" ry="2" fill="#b98a4e" transform="rotate(35 67 62)" />
      <ellipse cx="43" cy="69" rx="4" ry="2" fill="#b98a4e" transform="rotate(-30 43 69)" />
    </>
  );
}

function Leaf({ x, y, s = 1, flip = false, fill }: { x: number; y: number; s?: number; flip?: boolean; fill: string }) {
  return (
    <path
      d="M0 0 C-10 -8 -18 -7 -22 -1 C-14 6 -6 6 0 0Z"
      fill={fill}
      transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}
    />
  );
}

function Plantas() {
  return (
    <>
      <rect width="160" height="120" fill="#e9f5ea" />
      <circle cx="136" cy="22" r="10" fill="#ffe08a" />
      <g fill="#7cc3ea">
        <path className="anim-drop" style={{ animationDelay: "0s" }} d="M34 22 q5 7 0 11 q-5 -4 0 -11Z" />
        <path className="anim-drop" style={{ animationDelay: "0.7s" }} d="M46 14 q5 7 0 11 q-5 -4 0 -11Z" />
        <path className="anim-drop" style={{ animationDelay: "1.4s" }} d="M58 24 q5 7 0 11 q-5 -4 0 -11Z" />
      </g>
      <ellipse cx="80" cy="108" rx="74" ry="14" fill="#8a5b3a" />
      <ellipse cx="80" cy="102" rx="66" ry="8" fill="#9c6a44" />
      <g className="anim-sway" style={origin(80, 100)}>
        <path d="M80 100 C80 84 81 70 80 52" stroke="#3d8b4f" strokeWidth="3" fill="none" strokeLinecap="round" />
        <Leaf x={80} y={68} s={1.1} fill="#5bb26e" />
        <Leaf x={80} y={58} s={1.2} flip fill="#3f9b5f" />
        <Leaf x={80} y={52} s={0.7} fill="#6cc17f" />
      </g>
      <g className="anim-sway" style={{ ...origin(40, 101), animationDelay: "0.6s" }}>
        <path d="M40 101 C40 92 41 86 40 78" stroke="#3d8b4f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <Leaf x={40} y={84} s={0.8} fill="#6cc17f" />
        <Leaf x={40} y={79} s={0.85} flip fill="#4fa865" />
      </g>
      <g className="anim-sway" style={{ ...origin(122, 101), animationDelay: "1.1s" }}>
        <path d="M122 101 C122 94 122 90 121 84" stroke="#3d8b4f" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <Leaf x={121} y={88} s={0.6} fill="#6cc17f" />
        <Leaf x={121} y={85} s={0.65} flip fill="#4fa865" />
      </g>
    </>
  );
}

function Fish({ x, y, fill, flip = false, s = 1 }: { x: number; y: number; fill: string; flip?: boolean; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <ellipse cx="0" cy="0" rx="10" ry="6" fill={fill} />
      <path d="M8 0 L17 -6 L17 6Z" fill={fill} />
      <circle cx="-5" cy="-1.5" r="1.4" fill="#1d3557" />
    </g>
  );
}

function Oceano() {
  return (
    <>
      <rect width="160" height="120" fill="#dff0f8" />
      <rect y="40" width="160" height="80" fill="#3d8fc4" />
      <rect y="84" width="160" height="36" fill="#2a6f9e" />
      <g className="anim-wave">
        <path d="M-40 40 Q-20 32 0 40 T40 40 T80 40 T120 40 T160 40 T200 40 V48 H-40Z" fill="#5aa9d6" />
      </g>
      <g className="anim-swim">
        <Fish x={58} y={70} fill="#f4a259" />
      </g>
      <g className="anim-swim" style={{ animationDelay: "1.5s" }}>
        <Fish x={112} y={98} fill="#ffd166" flip s={0.8} />
      </g>
      <g fill="none" stroke="#e6f4fb" strokeWidth="1.5" opacity="0.8">
        <circle className="anim-rise" cx="36" cy="100" r="3" />
        <circle className="anim-rise" style={{ animationDelay: "1s" }} cx="44" cy="108" r="2" />
        <circle className="anim-rise" style={{ animationDelay: "2s" }} cx="132" cy="80" r="2.5" />
      </g>
    </>
  );
}

function Coral() {
  return (
    <>
      <rect width="160" height="120" fill="#3f93c4" />
      <rect y="60" width="160" height="60" fill="#2f7fb0" />
      <g fill="#ffffff" opacity="0.15">
        <path d="M20 0 L40 0 L10 90 L0 90Z" />
        <path d="M70 0 L84 0 L60 80 L50 80Z" />
      </g>
      <path d="M0 104 Q40 96 80 102 T160 100 V120 H0Z" fill="#e8d3a0" />
      <g stroke="#ff7f6e" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M38 104 V84 M38 94 L28 82 M38 90 L48 76 M28 82 V72 M48 76 V66" />
      </g>
      <g stroke="#ffb84d" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M92 104 V88 M92 96 L84 86 M92 92 L100 82 M84 86 V78 M100 82 V74" />
      </g>
      <path d="M118 104 A20 20 0 0 1 158 104Z" fill="#e86a92" opacity="0.9" />
      <g stroke="#c94d77" strokeWidth="1.2">
        <path d="M138 104 L124 92 M138 104 L132 86 M138 104 L144 86 M138 104 L152 92" />
      </g>
      <circle cx="64" cy="100" r="5" fill="#9b5de5" />
      <circle cx="70" cy="102" r="4" fill="#b388eb" />
      <g className="anim-swim">
        <Fish x={70} y={48} fill="#ffd166" s={0.8} />
      </g>
      <g className="anim-swim" style={{ animationDelay: "1.2s" }}>
        <Fish x={120} y={62} fill="#f4a259" flip s={0.7} />
      </g>
    </>
  );
}

function Pine({ x, y, s = 1, fill = "#2f7a4a" }: { x: number; y: number; s?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-2" y="-6" width="4" height="8" fill="#7a5230" />
      <path d="M0 -40 L13 -16 L6 -16 L16 -4 L-16 -4 L-6 -16 L-13 -16Z" fill={fill} />
    </g>
  );
}

function RoundTree({ x, y, s = 1, fill = "#3f9b5f" }: { x: number; y: number; s?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-2.5" y="-12" width="5" height="14" fill="#7a5230" />
      <circle cx="0" cy="-22" r="14" fill={fill} />
      <circle cx="-5" cy="-26" r="5" fill="#ffffff" opacity="0.12" />
    </g>
  );
}

function Bosque() {
  return (
    <>
      <rect width="160" height="120" fill="#e6f3ea" />
      <circle className="anim-pulse" style={origin(30, 28)} cx="30" cy="28" r="12" fill="#f7c948" />
      <g stroke="#33473b" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M96 24 q4 -4 8 0 q4 -4 8 0" />
        <path d="M118 34 q3 -3 6 0 q3 -3 6 0" />
      </g>
      <path d="M0 84 Q50 60 100 78 T160 70 V120 H0Z" fill="#9fd3a8" />
      <path d="M0 98 Q60 82 120 96 T160 92 V120 H0Z" fill="#6dbb7f" />
      <Pine x={30} y={92} s={1.1} />
      <RoundTree x={58} y={96} />
      <Pine x={84} y={88} s={0.9} fill="#3a8a57" />
      <RoundTree x={112} y={100} s={1.1} fill="#4fa865" />
      <Pine x={138} y={94} s={1} />
    </>
  );
}

function Abejas() {
  return (
    <>
      <rect width="160" height="120" fill="#fdf5e1" />
      <path d="M104 118 C104 100 102 90 102 78" stroke="#4f9a5d" strokeWidth="3" fill="none" />
      <Leaf x={103} y={104} s={1} fill="#5bb26e" />
      <g transform="translate(102 70)">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="0" cy="-13" rx="7" ry="12" fill="#ffffff" stroke="#f0d49b" transform={`rotate(${a})`} />
        ))}
        <circle r="9" fill="#f5b82e" />
        <circle r="4" fill="#e09a12" opacity="0.6" />
      </g>
      <path d="M44 118 C44 108 44 100 45 94" stroke="#4f9a5d" strokeWidth="2.5" fill="none" />
      <g transform="translate(45 88)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse key={a} cx="0" cy="-8" rx="5" ry="8" fill="#f28fb0" transform={`rotate(${a})`} />
        ))}
        <circle r="5" fill="#ffd166" />
      </g>
      <path d="M30 40 Q50 20 66 36 T92 52" stroke="#b08a4a" strokeWidth="1.5" strokeDasharray="3 4" fill="none" />
      <g className="anim-bob">
        <g transform="translate(60 38)">
          <ellipse cx="-3" cy="-9" rx="7" ry="5" fill="#ffffff" stroke="#bcd6ea" opacity="0.9" />
          <ellipse cx="5" cy="-10" rx="6" ry="4.5" fill="#ffffff" stroke="#bcd6ea" opacity="0.9" />
          <clipPath id="ilu-bee-body">
            <ellipse cx="0" cy="0" rx="12" ry="8" />
          </clipPath>
          <ellipse cx="0" cy="0" rx="12" ry="8" fill="#f5c22e" />
          <g clipPath="url(#ilu-bee-body)" fill="#3a2e1f">
            <rect x="-4" y="-9" width="3.5" height="18" />
            <rect x="3" y="-9" width="3.5" height="18" />
          </g>
          <circle cx="-10" cy="-1" r="1.6" fill="#3a2e1f" />
          <path d="M12 0 L16 1 L12 2Z" fill="#3a2e1f" />
        </g>
      </g>
    </>
  );
}

function Contaminacion() {
  return (
    <>
      <rect width="160" height="120" fill="#e6e3de" />
      <g className="anim-drift" fill="#8f8f8f" opacity="0.85">
        <circle cx="48" cy="26" r="9" />
        <circle cx="60" cy="20" r="11" />
        <circle cx="74" cy="24" r="9" />
      </g>
      <g className="anim-drift" style={{ animationDelay: "1.5s" }} fill="#a3a3a3" opacity="0.8">
        <circle cx="84" cy="36" r="7" />
        <circle cx="94" cy="30" r="9" />
        <circle cx="106" cy="34" r="7" />
      </g>
      <rect x="38" y="34" width="10" height="44" fill="#565a60" />
      <rect x="58" y="44" width="9" height="34" fill="#565a60" />
      <rect x="38" y="38" width="10" height="4" fill="#c0392b" />
      <rect x="58" y="48" width="9" height="4" fill="#c0392b" />
      <path d="M28 110 V76 L48 66 V76 L68 66 V76 L88 66 V76 L108 66 V110Z" fill="#6b6f75" />
      <g fill="#f2c14e">
        <rect x="38" y="86" width="8" height="8" />
        <rect x="56" y="86" width="8" height="8" />
        <rect x="74" y="86" width="8" height="8" />
        <rect x="92" y="86" width="8" height="8" />
      </g>
      <rect x="116" y="70" width="28" height="40" fill="#7d8187" />
      <rect x="0" y="108" width="160" height="12" fill="#8c8f93" />
      <path d="M118 112 q4 -2 8 0 q4 2 8 0" stroke="#5c6c7a" strokeWidth="1.5" fill="none" />
    </>
  );
}

function Reciclaje() {
  return (
    <>
      <rect width="160" height="120" fill="#e9f4ed" />
      <defs>
        <g id="ilu-rc-arrow">
          <path d="M85.2 30.5 A30 30 0 0 1 106.4 63.5" stroke="#2f8f5b" strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M100 62 L113 61 L106 73Z" fill="#2f8f5b" />
        </g>
      </defs>
      <g className="anim-spin-slow" style={origin(80, 56)}>
        <g transform="translate(0 -4)">
          <use href="#ilu-rc-arrow" />
          <use href="#ilu-rc-arrow" transform="rotate(120 80 60)" />
          <use href="#ilu-rc-arrow" transform="rotate(240 80 60)" />
        </g>
      </g>
      {[
        { x: 22, c: "#f2c14e" },
        { x: 120, c: "#4a90d9" },
      ].map((b) => (
        <g key={b.x} transform={`translate(${b.x} 88)`}>
          <rect x="0" y="4" width="18" height="22" rx="2" fill={b.c} />
          <rect x="-2" y="0" width="22" height="5" rx="2" fill={b.c} />
          <rect x="6" y="10" width="2" height="12" fill="#ffffff" opacity="0.5" />
          <rect x="11" y="10" width="2" height="12" fill="#ffffff" opacity="0.5" />
        </g>
      ))}
    </>
  );
}

function Energia() {
  return (
    <>
      <rect width="160" height="120" fill="#eaf4fb" />
      <circle className="anim-pulse" style={origin(30, 26)} cx="30" cy="26" r="13" fill="#f7c948" />
      <path d="M0 100 Q80 92 160 100 V120 H0Z" fill="#8fcf8f" />
      <rect x="44" y="84" width="3" height="16" fill="#8a98a6" />
      <polygon points="18,84 70,84 82,64 30,64" fill="#2d5f8a" />
      <g stroke="#8fb8dc" strokeWidth="1">
        <line x1="24" y1="74" x2="76" y2="74" />
        <line x1="43" y1="84" x2="55" y2="64" />
        <line x1="56" y1="84" x2="68" y2="64" />
        <line x1="31" y1="84" x2="43" y2="64" />
      </g>
      <polygon points="114,104 116,40 118,40 120,104" fill="#e0e6eb" stroke="#b8c3cc" strokeWidth="0.8" />
      <g className="anim-spin" style={origin(117, 40)}>
        {[0, 120, 240].map((a) => (
          <path key={a} d="M116 40 Q114.5 22 117 8 Q119.5 22 118 40Z" fill="#ffffff" stroke="#b8c3cc" strokeWidth="0.8" transform={`rotate(${a} 117 40)`} />
        ))}
      </g>
      <circle cx="117" cy="40" r="3" fill="#cfd8df" stroke="#9aa7b2" />
    </>
  );
}

function Ciudad() {
  return (
    <>
      <rect width="160" height="120" fill="#edf3ef" />
      <g fill="#bccac3">
        <rect x="8" y="40" width="22" height="70" />
        <rect x="34" y="28" width="18" height="82" />
        <rect x="96" y="34" width="20" height="76" />
        <rect x="122" y="46" width="26" height="64" />
      </g>
      <g fill="#8ea39a">
        <rect x="56" y="50" width="34" height="60" />
        <rect x="18" y="62" width="24" height="48" />
        <rect x="110" y="60" width="22" height="50" />
      </g>
      <g fill="#e9efe9" opacity="0.85">
        {[60, 70, 80].flatMap((x) => [56, 68, 80].map((y) => <rect key={`${x}-${y}`} x={x} y={y} width="5" height="6" />))}
      </g>
      <rect y="104" width="160" height="16" fill="#d8d2c4" />
      <g className="anim-sway" style={origin(26, 106)}>
        <RoundTree x={26} y={106} s={1.05} />
      </g>
      <g className="anim-sway" style={{ ...origin(80, 106), animationDelay: "0.8s" }}>
        <RoundTree x={80} y={106} s={1.15} fill="#4fa865" />
      </g>
      <g className="anim-sway" style={{ ...origin(134, 106), animationDelay: "1.4s" }}>
        <RoundTree x={134} y={106} s={1} />
      </g>
    </>
  );
}

function Hielo() {
  return (
    <>
      <rect width="160" height="120" fill="#e6f3fb" />
      <circle className="anim-pulse" style={origin(130, 24)} cx="130" cy="24" r="12" fill="#f5a524" />
      <rect y="76" width="160" height="44" fill="#4a9fd1" />
      <polygon points="62,76 72,44 84,36 96,48 104,76" fill="#ffffff" />
      <polygon points="84,36 96,48 104,76 90,76" fill="#d4ecf7" />
      <polygon points="58,76 106,76 98,104 70,108" fill="#a9d6ee" opacity="0.7" />
      <g fill="#7cc3ea">
        <path className="anim-drop" d="M66 70 q3 5 0 8 q-3 -3 0 -8Z" />
        <path className="anim-drop" style={{ animationDelay: "0.9s" }} d="M100 68 q3 5 0 8 q-3 -3 0 -8Z" />
      </g>
      <g transform="translate(24 30)">
        <rect x="-4" y="0" width="8" height="38" rx="4" fill="#ffffff" stroke="#c0392b" strokeWidth="1.5" />
        <rect x="-1.5" y="8" width="3" height="32" fill="#e74c3c" />
        <circle cx="0" cy="44" r="7" fill="#e74c3c" stroke="#c0392b" strokeWidth="1.5" />
      </g>
      <path d="M0 82 q10 -3 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#7fbfe2" strokeWidth="2" fill="none" />
    </>
  );
}

function Agua() {
  return (
    <>
      <rect width="160" height="120" fill="#e4f1f8" />
      <rect x="0" y="22" width="44" height="10" rx="3" fill="#8a98a6" />
      <path d="M40 22 h14 a8 8 0 0 1 8 8 v12 h-10 v-10 h-12Z" fill="#9eabb8" />
      <rect x="30" y="14" width="18" height="6" rx="3" fill="#6f7d8b" />
      <rect x="37" y="18" width="4" height="6" fill="#6f7d8b" />
      <path className="anim-drop" d="M57 46 q4 6 0 10 q-4 -4 0 -10Z" fill="#4a9fd1" />
      <path className="anim-drop" style={{ animationDelay: "1s" }} d="M57 46 q4 6 0 10 q-4 -4 0 -10Z" fill="#4a9fd1" />
      <ellipse cx="57" cy="106" rx="30" ry="6" fill="#7cc3ea" />
      <ellipse className="anim-ripple" style={origin(57, 106)} cx="57" cy="106" rx="12" ry="2.5" fill="none" stroke="#e4f1f8" strokeWidth="1.5" />
      <path d="M118 30 C118 30 98 58 98 72 a20 20 0 0 0 40 0 C138 58 118 30 118 30Z" fill="#4a9fd1" />
      <path d="M108 70 a10 10 0 0 0 8 12" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
    </>
  );
}

function Deforestacion() {
  return (
    <>
      <rect width="160" height="120" fill="#f3eee4" />
      <path d="M0 92 Q40 86 70 90 V120 H0Z" fill="#8cc17a" />
      <path d="M70 90 Q120 84 160 90 V120 H70Z" fill="#c49a6c" />
      <Pine x={16} y={94} s={1} />
      <RoundTree x={38} y={96} s={0.95} />
      <Pine x={58} y={92} s={0.85} fill="#3a8a57" />
      {[
        { x: 88, y: 98 },
        { x: 112, y: 94 },
        { x: 138, y: 100 },
      ].map((s) => (
        <g key={s.x} transform={`translate(${s.x} ${s.y})`}>
          <rect x="-6" y="-8" width="12" height="10" fill="#8a5a32" />
          <ellipse cx="0" cy="-8" rx="6" ry="2.4" fill="#d6a46e" />
          <ellipse cx="0" cy="-8" rx="3" ry="1.2" fill="none" stroke="#a8763f" strokeWidth="0.8" />
        </g>
      ))}
      <g transform="rotate(-8 118 110)">
        <rect x="96" y="106" width="44" height="7" rx="3.5" fill="#9a6a3c" />
        <ellipse cx="140" cy="109.5" rx="3" ry="3.5" fill="#d6a46e" />
      </g>
      <g className="anim-drift" fill="#b9b1a6" opacity="0.7">
        <circle cx="118" cy="56" r="6" />
        <circle cx="126" cy="50" r="7" />
        <circle cx="134" cy="56" r="5" />
      </g>
    </>
  );
}

export const illustrations: Record<string, { label: string; Art: () => ReactElement; tint: string; border: string }> = {
  sequia: { label: "Sequía", Art: Sequia, tint: "#fcf3e6", border: "#f0dcbc" },
  plantas: { label: "Plantas", Art: Plantas, tint: "#f0f8f0", border: "#d3e9d6" },
  oceano: { label: "Océano", Art: Oceano, tint: "#eef6fb", border: "#cfe4f0" },
  coral: { label: "Arrecife", Art: Coral, tint: "#eef6fb", border: "#cfe4f0" },
  bosque: { label: "Bosque", Art: Bosque, tint: "#eff8f2", border: "#d3e9d9" },
  abejas: { label: "Polinizadores", Art: Abejas, tint: "#fdf8ea", border: "#f1e4bd" },
  contaminacion: { label: "Contaminación", Art: Contaminacion, tint: "#f3f1ee", border: "#e0dcd5" },
  reciclaje: { label: "Reciclaje", Art: Reciclaje, tint: "#eff8f2", border: "#d3e9d9" },
  energia: { label: "Energía limpia", Art: Energia, tint: "#eef6fb", border: "#cfe4f0" },
  ciudad: { label: "Ciudad verde", Art: Ciudad, tint: "#f1f6f2", border: "#d9e5dc" },
  hielo: { label: "Deshielo", Art: Hielo, tint: "#eef6fb", border: "#cfe4f0" },
  agua: { label: "Agua", Art: Agua, tint: "#eef6fb", border: "#cfe4f0" },
  deforestacion: { label: "Deforestación", Art: Deforestacion, tint: "#f8f3ea", border: "#eadfca" },
};
