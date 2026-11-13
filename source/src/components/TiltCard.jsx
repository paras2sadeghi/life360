import { motion } from 'framer-motion'
import { useTilt } from '../lib.jsx'
import { sparkPath } from '../data.js'

export default function TiltCard({ c, i }) {
  const { ref, srx, sry, mx, my, onMove, onLeave } = useTilt(5)
  const { d, last } = sparkPath(c.spark)
  const warn = c.warn
  return (
    <motion.div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}
      initial={{ opacity: 0, y: 22, scale: .985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: .3 }}
      transition={{ duration: 1, ease: [.22,1,.36,1], delay: i*.1 }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900, transformStyle: 'preserve-3d',
        position: 'relative', borderRadius: 19, padding: 20, overflow: 'hidden',
        background: 'linear-gradient(155deg,rgba(255,255,255,.66),rgba(255,255,255,.4))',
        border: '1px solid rgba(255,255,255,.75)', backdropFilter: 'blur(18px) saturate(1.25)', WebkitBackdropFilter: 'blur(18px) saturate(1.25)',
        boxShadow: warn ? '0 18px 44px -20px rgba(48,26,110,.26),inset 0 1px 0 rgba(255,255,255,.8),0 0 0 1px rgba(232,163,61,.35)' : '0 18px 44px -20px rgba(48,26,110,.26),inset 0 1px 0 rgba(255,255,255,.8)',
        animation: warn ? 'warnGlow 3s ease-in-out infinite' : 'none' }}>
      {/* cursor light */}
      <motion.div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
        background: useLightGradient(mx, my) }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15 }}>{c.n}</div>
          <div style={{ color: 'var(--ink-soft)', fontSize: 11.5, marginTop: 3, lineHeight: 1.45, maxWidth: '24ch' }}>{c.s}</div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div className="mono" style={{ fontWeight: 500, fontSize: 26, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{c.v}</div>
          <div className="mono" style={{ color: 'var(--ink-soft)', fontSize: 10, marginTop: 3 }}>{c.u}</div>
        </div>
      </div>
      <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 0, fontWeight: 500, fontSize: 11, padding: '5px 11px', borderRadius: 999,
        background: warn ? 'rgba(232,163,61,.16)' : 'var(--teal-light)', color: warn ? '#B87A1E' : 'var(--teal)' }}>
        <span style={{ width: 6, height: 6, borderRadius: 50, background: warn ? 'var(--amber)' : 'var(--teal)' }} />
        {c.tag || (warn ? 'Needs a look' : 'All good')}
      </span>
      <svg style={{ position: 'relative', zIndex: 1, display: 'block', marginTop: 14, height: 32, width: '100%' }} viewBox="0 0 180 32">
        <motion.path d={d} fill="none" stroke={warn ? 'var(--amber)' : 'var(--teal)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [.22,1,.36,1], delay: i*.1 + .3 }} />
        <circle cx={last[0].toFixed(1)} cy={last[1].toFixed(1)} r="3" fill="var(--ink)" />
      </svg>
    </motion.div>
  )
}
import { useTransform } from 'framer-motion'
function useLightGradient(mx, my) {
  return useTransform([mx, my], ([x, y]) => `radial-gradient(220px circle at ${x}% ${y}%,rgba(118,46,235,.16),transparent 60%)`)
}
