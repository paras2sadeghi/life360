import { motion } from 'framer-motion'
const ease = [.22,1,.36,1]
/* calm, spa-like entrance used across sections */
export default function Reveal({ children, i = 0, y = 24, style, as = 'div', ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .25 }}
      transition={{ duration: 1.1, ease, delay: i * .12 }}
      style={style} {...rest}>
      {children}
    </M>
  )
}
export const SectionHead = ({ eyebrow, title, em, lede }) => (
  <div style={{ maxWidth: 720 }}>
    <Reveal style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--glass)', border: '1px solid var(--glass-line)', color: 'var(--teal-deep)', borderRadius: 999, padding: '8px 16px', fontSize: 11.5, fontWeight: 500, letterSpacing: '.07em', textTransform: 'uppercase', backdropFilter: 'blur(12px)', marginBottom: 22 }}>{eyebrow}</Reveal>
    <Reveal i={1} as="h2" className="serif" style={{ fontSize: 'clamp(34px,4.2vw,58px)', lineHeight: 1.04, letterSpacing: '-.02em' }}>
      {title} {em && <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>{em}</em>}
    </Reveal>
    {lede && <Reveal i={2} as="p" style={{ color: 'var(--ink-soft)', fontSize: 16.5, lineHeight: 1.6, maxWidth: '48ch', marginTop: 18 }}>{lede}</Reveal>}
  </div>
)
