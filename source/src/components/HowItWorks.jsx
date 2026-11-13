import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { glass } from './glass.js'

const STEPS = [
  { n: '01', t: 'Create your Circle', s: 'Download Life360 and start a private Circle for your family. Free, in under a minute.', d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6' },
  { n: '02', t: 'Invite your people', s: 'Send a code. Everyone joins with a tap and chooses what to share.', d: 'M9 3h6M10 3v5l-4 8a3 3 0 0 0 3 4h6a3 3 0 0 0 3-4l-4-8V3M7.5 15h9' },
  { n: '03', t: 'Get the right alerts', s: 'Arrivals, drives and emergencies come to you, so the check-in texts do not have to.', d: 'M4 18V9M9 18V4M14 18v-6M19 18V7' },
]
const ease = [.22,1,.36,1]

export default function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const [active, setActive] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', v => {
    const idx = Math.min(STEPS.length - 1, Math.floor(v * STEPS.length))
    setActive(idx)
  })

  return (
    // tall track: 3 viewport-heights so each step gets a "screen" of scroll
    <section ref={ref} style={{ position: 'relative', height: `${STEPS.length * 70}vh`, padding: '0 40px' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="hiw-sticky">
          {/* left: heading + progress */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--glass)', border: '1px solid var(--glass-line)', color: 'var(--teal-deep)', borderRadius: 999, padding: '8px 16px', fontSize: 11.5, fontWeight: 500, letterSpacing: '.07em', textTransform: 'uppercase', backdropFilter: 'blur(12px)', marginBottom: 22 }}>How it works</div>
            <h2 className="serif" style={{ fontSize: 'clamp(34px,4.2vw,58px)', lineHeight: 1.04, letterSpacing: '-.02em' }}>
              Peace of mind,<br /><em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>in three steps.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 34 }}>
              {STEPS.map((st, i) => (
                <button key={st.n} onClick={() => ref.current?.scrollIntoView?.()} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', background: 'none', border: 'none', textAlign: 'left', opacity: i === active ? 1 : .4, transition: 'opacity .4s' }}>
                  <span className="mono" style={{ width: 30, fontSize: 13, color: i === active ? 'var(--teal)' : 'var(--ink-soft)' }}>{st.n}</span>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>{st.t}</span>
                </button>
              ))}
            </div>
            <div style={{ height: 3, background: 'rgba(118,46,235,.14)', borderRadius: 3, marginTop: 24, overflow: 'hidden' }}>
              <motion.div style={{ height: '100%', background: 'var(--teal)', borderRadius: 3, scaleX: scrollYProgress, transformOrigin: 'left' }} />
            </div>
          </div>

          {/* right: the active step card, cross-fades */}
          <div style={{ position: 'relative', minHeight: 340 }}>
            {STEPS.map((st, i) => (
              <motion.div key={st.n} initial={false}
                animate={{ opacity: i === active ? 1 : 0, y: i === active ? 0 : 20, scale: i === active ? 1 : .97 }}
                transition={{ duration: .7, ease }}
                style={{ ...glass, position: 'absolute', inset: 0, borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', pointerEvents: i === active ? 'auto' : 'none' }}>
                <div style={{ width: 76, height: 76, borderRadius: 20, display: 'grid', placeItems: 'center', background: 'var(--teal-light)', border: '1px solid rgba(118,46,235,.16)', marginBottom: 24 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.7"><path d={st.d} /></svg>
                </div>
                <div className="mono" style={{ fontSize: 13, color: 'var(--teal)', marginBottom: 8 }}>Step {st.n}</div>
                <h3 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.01em' }}>{st.t}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.6, marginTop: 12, maxWidth: '34ch' }}>{st.s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
