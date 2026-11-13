import Reveal, { SectionHead } from './Reveal.jsx'
import { section, inner } from './glass.js'
import family from '../img/family.jpg'
import driving from '../img/driving.jpg'
import sos from '../img/sos.jpg'
import identity from '../img/identity.jpg'

// Each feature is tied to the plan that unlocks it, so every card quietly sells the ladder.
const FEATURES = [
  { img: family, t: 'Location sharing', s: 'See everyone on one map, with alerts when they arrive and leave.', plan: 'Free' },
  { img: driving, t: 'Driving safety', s: 'Crash detection and weekly driver reports for new drivers.', plan: 'Silver +' },
  { img: sos, t: 'SOS & emergency help', s: 'One press alerts your Circle and sends dispatch, day or night.', plan: 'Gold +' },
  { img: identity, t: 'Digital safety', s: 'Breach alerts and identity theft cover for the whole family.', plan: 'Platinum' },
]

export default function Features() {
  return (
    <section id="features" style={section}>
      <div style={inner}>
        <SectionHead eyebrow="Family safety" title="Peace of mind," em="quietly on." lede={'Fewer “where are you?” texts. More “see you soon.”'} />
      </div>
      <div className="feat-rail" style={{ display: 'grid', gap: 16, marginTop: 44 }}>
        {FEATURES.map((f, i) => (
          <Reveal key={f.t} i={i} className="feat-card" style={{ position: 'relative', borderRadius: 26, overflow: 'hidden', aspectRatio: '3 / 4',
            boxShadow: '0 26px 50px -26px rgba(48,26,110,.45)', background: '#dfe9ee' }}>
            <img src={f.img} alt={f.t} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12, borderRadius: 18, padding: '16px 18px',
              background: 'linear-gradient(155deg,rgba(255,255,255,.86),rgba(255,255,255,.66))', border: '1px solid rgba(255,255,255,.8)',
              backdropFilter: 'blur(16px) saturate(1.3)', WebkitBackdropFilter: 'blur(16px) saturate(1.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <b style={{ fontSize: 16 }}>{f.t}</b>
                <span style={{ fontSize: 11.5, fontWeight: 600, whiteSpace: 'nowrap', color: 'var(--teal)', background: 'var(--teal-light)', borderRadius: 999, padding: '3px 9px' }}>{f.plan}</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ink-soft)', marginTop: 6 }}>{f.s}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
