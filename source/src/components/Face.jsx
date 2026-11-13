// Small illustrated faces (no stock photos needed). k picks a person.
const PEOPLE = [
  { bg: '#FFD9D2', skin: '#F2C1A0', hair: '#3B2A22', style: 'long' },   // Maya / Mina
  { bg: '#D6F2E3', skin: '#8D5A3B', hair: '#1E1612', style: 'short' },  // Daniel
  { bg: '#E7DCFF', skin: '#C98E64', hair: '#2A1C14', style: 'bun' },    // Priya
  { bg: '#FFF0C2', skin: '#F6CFAE', hair: '#C9893E', style: 'short' },
]

export default function Face({ k = 0, size = 40, ring = false }) {
  const p = PEOPLE[k % PEOPLE.length]
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden style={{ display: 'block', borderRadius: 999, boxShadow: ring ? '0 0 0 2px #fff' : 'none', flexShrink: 0 }}>
      <circle cx="20" cy="20" r="20" fill={p.bg} />
      {p.style === 'long' && <path d="M8 22 C8 9 32 9 32 22 L32 34 L8 34 Z" fill={p.hair} />}
      {p.style === 'bun' && <circle cx="20" cy="7.5" r="5" fill={p.hair} />}
      <path d="M11 40 C11 31 29 31 29 40 Z" fill={p.skin} />
      <ellipse cx="20" cy="20" rx="8.5" ry="9.5" fill={p.skin} />
      {p.style === 'short' && <path d="M11.2 18 C11 9 29 9 28.8 18 C26 13.5 15 13 11.2 18 Z" fill={p.hair} />}
      {p.style !== 'short' && <path d="M11.4 19 C12 10 28 10 28.6 19 C25 14 15 14 11.4 19 Z" fill={p.hair} />}
      <circle cx="16.6" cy="20.5" r="1.1" fill="#2A1C14" /><circle cx="23.4" cy="20.5" r="1.1" fill="#2A1C14" />
      <circle cx="14.6" cy="23.6" r="1.6" fill="#FF8E8E" opacity=".45" /><circle cx="25.4" cy="23.6" r="1.6" fill="#FF8E8E" opacity=".45" />
      <path d="M17.4 24.4 Q20 26.6 22.6 24.4" fill="none" stroke="#2A1C14" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}
