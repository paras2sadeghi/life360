import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { to: 100, suffix: '+', label: 'Ambulances dispatched a day' },
  { text: '24/7', label: 'Emergency and roadside help' },
  { to: 30, label: 'Days of location history on Gold' },
  { to: 1, label: 'Plan covers your whole Circle' },
]

function Counter({ to, prefix = '', suffix = '', dec = 0, run }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf, t0 = performance.now(), dur = 1600
    const step = t => {
      const p = Math.min((t - t0) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setN(to * e)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [run, to])
  return <span className="serif">{prefix}{dec ? n.toFixed(dec) : Math.round(n)}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: .4 })
  return (
    <section ref={ref} style={{ padding: '70px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="stats-grid">
        {STATS.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: [.22,1,.36,1], delay: i * .12 }}
            style={{ textAlign: 'center' }}>
            <div className="serif" style={{ fontSize: 'clamp(38px,4.6vw,58px)', lineHeight: 1, color: 'var(--teal-deep)', fontVariantNumeric: 'tabular-nums' }}>
              {s.text ? <span className="serif">{s.text}</span> : <Counter {...s} run={inView} />}
            </div>
            <div style={{ color: 'var(--ink-soft)', fontSize: 14, marginTop: 10 }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
