import { useRef, useState, useCallback } from 'react'
import { motion, useScroll, useMotionValueEvent, useMotionValue, useSpring } from 'framer-motion'
import { SYS } from '../data.js'
import TiltCard from './TiltCard.jsx'

const ease = [.22,1,.36,1]
// bloom color per system — subtle tint that shifts as you move through the body
const TINTS = ['118,46,235', '210,120,90', '90,150,120', '150,120,200', '230,180,80', '120,150,200']

export default function Biomarkers() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false) // if user clicks, stop auto-advancing briefly

  // scroll through a tall track pins the panel and advances systems
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', v => {
    if (locked) return
    const idx = Math.min(SYS.length - 1, Math.max(0, Math.floor(v * SYS.length)))
    setActive(idx)
  })

  // cursor-following glow across the whole section
  const gx = useMotionValue(50), gy = useMotionValue(50)
  const sgx = useSpring(gx, { stiffness: 90, damping: 22 })
  const sgy = useSpring(gy, { stiffness: 90, damping: 22 })
  const onMove = useCallback(e => {
    const r = e.currentTarget.getBoundingClientRect()
    gx.set(((e.clientX - r.left) / r.width) * 100)
    gy.set(((e.clientY - r.top) / r.height) * 100)
  }, [gx, gy])

  const pick = i => { setActive(i); setLocked(true); setTimeout(() => setLocked(false), 1200) }
  const tint = TINTS[active]

  return (
    <section ref={ref} className="bio-pin" style={{ position: 'relative', height: `${SYS.length * 52}vh`, padding: '0 40px' }}>
      <div onPointerMove={onMove}
        className="bio-sticky" style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        {/* cursor-following glow */}
        <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: useGlow(sgx, sgy, tint) }} />
        {/* ambient bloom behind cards, tinted per system */}
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease }}
          style={{ position: 'absolute', right: '6%', top: '30%', width: 520, height: 520, zIndex: 0, pointerEvents: 'none',
            borderRadius: '50%', filter: 'blur(90px)',
            background: `radial-gradient(circle, rgba(${tint},.22), transparent 68%)` }} />

        <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: '300px 1fr', gap: 26, alignItems: 'center' }} className="explorer">

          {/* left: heading + system list */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--glass)', border: '1px solid var(--glass-line)', color: 'var(--teal-deep)', borderRadius: 999, padding: '8px 16px', fontSize: 11.5, fontWeight: 500, letterSpacing: '.07em', textTransform: 'uppercase', backdropFilter: 'blur(12px)', marginBottom: 20 }}>Your Circle · at a glance</div>
            <h2 className="serif" style={{ fontSize: 'clamp(30px,3.4vw,46px)', lineHeight: 1.05, letterSpacing: '-.02em', marginBottom: 8 }}>
              A picture of your <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>whole Circle</em>.
            </h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, lineHeight: 1.55, maxWidth: '34ch', marginBottom: 24 }}>Scroll through, or tap one. Only the alerts that matter reach you.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }} className="systems">
              {SYS.map((s, i) => {
                const on = i === active
                return (
                  <motion.button key={s.name} onClick={() => pick(i)} whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 14, textAlign: 'left', width: '100%',
                      border: `1px solid ${on ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.5)'}`, color: on ? 'var(--ink)' : 'var(--ink-soft)',
                      background: on ? 'rgba(255,255,255,.72)' : 'rgba(255,255,255,.32)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                      boxShadow: on ? `0 14px 34px -16px rgba(${tint},.5)` : 'none', transition: 'box-shadow .5s' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, display: 'grid', placeItems: 'center', flexShrink: 0,
                      background: on ? 'var(--teal)' : 'var(--teal-light)', color: on ? '#fff' : 'var(--teal)' }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d={s.icon} /></svg>
                    </div>
                    <div style={{ flex: 1 }}><b style={{ display: 'block', fontSize: 13.5 }}>{s.name}</b><span style={{ fontSize: 11, opacity: .72 }}>{s.sub}</span></div>
                    <div className="mono" style={{ fontSize: 11, opacity: on ? 1 : .5, color: on ? 'var(--teal)' : 'inherit' }}>{s.cards.length}</div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* right: cards for the active system, cross-fade + stagger on change */}
          <div style={{ position: 'relative', minHeight: 420 }}>
            <motion.div key={active} style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 15 }} className="cards">
              {SYS[active].cards.map((c, i) => <TiltCard key={active + '-' + c.n + i} c={c} i={i} />)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useTransform } from 'framer-motion'
function useGlow(x, y, tint) {
  return useTransform([x, y], ([px, py]) => `radial-gradient(600px circle at ${px}% ${py}%, rgba(${tint},.12), transparent 55%)`)
}
