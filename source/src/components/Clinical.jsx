import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal, { SectionHead } from './Reveal.jsx'
import { glass, section, inner } from './glass.js'
import Face from './Face.jsx'

// A working "who can see me" card: privacy shown, not told.
function Toggle({ on, onClick, label }) {
  return (
    <button onClick={onClick} aria-pressed={on} aria-label={label}
      style={{ width: 46, height: 28, borderRadius: 999, border: 'none', padding: 3, cursor: 'pointer', flexShrink: 0,
        background: on ? 'var(--teal)' : 'rgba(26,20,48,.16)', transition: 'background .25s' }}>
      <motion.span layout transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        style={{ display: 'block', width: 22, height: 22, borderRadius: 999, background: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,.2)', marginLeft: on ? 18 : 0 }} />
    </button>
  )
}

export default function Clinical() {
  const [sharing, setSharing] = useState(true)
  const [bubble, setBubble] = useState(false)
  const [paused, setPaused] = useState(false)
  const status = paused ? 'Paused for 1 hour' : !sharing ? 'Not sharing' : bubble ? 'Sharing a general area' : 'Sharing exact location'
  return (
    <section style={section}>
      <div style={inner}>
        <div className="clin-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <SectionHead eyebrow="Built on trust" title="You decide who sees" em="what, and when." lede="Location is personal. Teens get a say too, with Bubbles that share a general area instead of an exact spot. Try it." />
          <Reveal style={{ ...glass, borderRadius: 28, padding: 26, maxWidth: 440, width: '100%', justifySelf: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Face k={0} size={46} />
              <div style={{ flex: 1 }}>
                <b style={{ fontSize: 16 }}>Maya's sharing</b>
                <div style={{ fontSize: 13, color: paused || !sharing ? 'var(--ink-soft)' : 'var(--teal)', fontWeight: 500 }}>● {status}</div>
              </div>
            </div>
            <div style={{ marginTop: 18, display: 'grid', gap: 10 }}>
              {[['Location sharing', 'Your Circle sees you on the map', sharing, () => { setSharing(!sharing); setPaused(false) }],
                ['Bubble', 'Share a 1 km area, not your exact spot', bubble, () => setBubble(!bubble)]].map(([t, s, on, fn]) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,.6)', borderRadius: 16, padding: '12px 14px' }}>
                  <div style={{ flex: 1 }}><b style={{ fontSize: 14 }}>{t}</b><div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>{s}</div></div>
                  <Toggle on={on} onClick={fn} label={t} />
                </div>
              ))}
            </div>
            <button onClick={() => setPaused(!paused)}
              style={{ marginTop: 12, width: '100%', border: 'none', borderRadius: 999, padding: '12px', fontSize: 14, fontWeight: 600, cursor: 'pointer',
                background: paused ? 'var(--teal)' : 'rgba(255,255,255,.75)', color: paused ? '#fff' : 'var(--teal-deep)', boxShadow: paused ? 'none' : 'inset 0 0 0 1px rgba(118,46,235,.25)' }}>
              {paused ? 'Resume sharing' : 'Pause for 1 hour'}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(26,20,48,.08)' }}>
              <div style={{ display: 'flex' }}>{[1, 2, 3].map((k, i) => <span key={k} style={{ marginLeft: i ? -8 : 0 }}><Face k={k} size={28} ring /></span>)}</div>
              <span style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>Only your Circle can see you. Never sold, never public.</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
