import Image from "next/image";

/**
 * Tab icons. The Lifting App uses its shipped App Store icon. The others have
 * no finished icon yet, so each gets a plain mark in that product's own colors.
 */

const SIZE = 44;

function ChessCoachIcon() {
  return (
    <svg viewBox="0 0 44 44" width={SIZE} height={SIZE} aria-hidden>
      <rect width="44" height="44" fill="#81B64C" />
      <g
        transform="translate(7.5 6.5) scale(0.66)"
        fill="none"
        stroke="#292823"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        <path
          fill="#faf9f2"
          d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"
        />
        <path
          fill="#faf9f2"
          d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
        />
      </g>
    </svg>
  );
}

function SdoptIcon() {
  return (
    <svg viewBox="0 0 44 44" width={SIZE} height={SIZE} aria-hidden>
      <rect width="44" height="44" fill="#07111C" />
      <path
        d="M30 6c-2 8-1 14 1 20s1 10-2 14"
        fill="none"
        stroke="#7ED8CF"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 36V14"
        stroke="#B8864E"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M18.5 19.5 24 13l5.5 6.5"
        fill="none"
        stroke="#B8864E"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="1.4" fill="#7ED8CF" fillOpacity="0.7" />
      <circle cx="9" cy="24" r="1.4" fill="#7ED8CF" fillOpacity="0.5" />
      <circle cx="14" cy="32" r="1.4" fill="#7ED8CF" fillOpacity="0.6" />
    </svg>
  );
}

/** An 8 by 8 pixel spade, matching PokerLab's pixel type. */
const SPADE_ROWS = [
  "...##...",
  "..####..",
  ".######.",
  "########",
  "########",
  ".##.###.",
  "...##...",
  "..####..",
];

function PokerLabIcon() {
  const cells: { x: number; y: number }[] = [];
  SPADE_ROWS.forEach((row, y) =>
    [...row].forEach((c, x) => c === "#" && cells.push({ x, y })),
  );
  return (
    <svg
      viewBox="0 0 44 44"
      width={SIZE}
      height={SIZE}
      aria-hidden
      shapeRendering="crispEdges"
    >
      <rect width="44" height="44" fill="#2B0A0F" />
      {cells.map(({ x, y }) => (
        <rect
          key={`${x}-${y}`}
          x={10 + x * 3}
          y={10 + y * 3}
          width="3"
          height="3"
          fill="#E23B4A"
        />
      ))}
    </svg>
  );
}

function VitalsIcon() {
  return (
    <svg viewBox="0 0 44 44" width={SIZE} height={SIZE} aria-hidden>
      <defs>
        <linearGradient id="vitals-icon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F2784B" />
          <stop offset="1" stopColor="#D9482B" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" fill="url(#vitals-icon)" />
      <path
        d="M7 24h7l3-7 5 14 4-10 2 3h9"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "tla":
      return (
        <Image
          src="/projects/tla/icon.webp"
          alt=""
          width={SIZE}
          height={SIZE}
        />
      );
    case "chess-coach":
      return <ChessCoachIcon />;
    case "sdopt":
      return <SdoptIcon />;
    case "pokerlab":
      return <PokerLabIcon />;
    case "vitals":
      return <VitalsIcon />;
    default:
      return null;
  }
}
