import Reveal, { SectionHead } from './Reveal.jsx'
import { glass, section, inner } from './glass.js'
import Face from './Face.jsx'

const STORIES = [
  { q: 'I stopped texting "where are you?" I just know, and so does she.', n: 'Mina', r: 'Parent of two · Vancouver', c: '#F7776B', tag: 'Place Alerts' },
  { q: 'My son had a flat on the highway. Help showed up before I finished calling him.', n: 'Daniel', r: 'Gold member · Calgary', c: '#3FBF8F', tag: 'Roadside Assistance' },
  { q: 'Our teens get their freedom, and we get to sleep. Fair trade.', n: 'Priya', r: 'Platinum member · Toronto', c: '#8B6CFF', tag: 'Crash Detection' },
]

export default function Stories() {
  return (
    <section id="stories" style={section}>
      <div style={inner}>
        <SectionHead eyebrow="Real families" title="Less worry," em="more freedom." lede="What changes when the check-in texts stop." />
        <div className="stories-grid" style={{ display: 'grid', gap: 16, marginTop: 44 }}>
          {STORIES.map((s, i) => (
            <Reveal key={s.n} i={i} style={{ ...glass, borderRadius: 24, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 250 }}>
              <div>
                <span style={{ display: 'inline-block', fontSize: 11.5, fontWeight: 600, color: 'var(--teal)', background: 'var(--teal-light)', borderRadius: 999, padding: '4px 10px' }}>{s.tag}</span>
                <p className="serif" style={{ fontSize: 25, lineHeight: 1.22, marginTop: 18, letterSpacing: '-.01em' }}>“{s.q}”</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
                <Face k={i} size={42} />
                <div><b style={{ fontSize: 14 }}>{s.n}</b><div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>{s.r}</div></div>
                <span style={{ marginLeft: 'auto', color: 'var(--amber)', fontSize: 13, letterSpacing: 2 }}>★★★★★</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
