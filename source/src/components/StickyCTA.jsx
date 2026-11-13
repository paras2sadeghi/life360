import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Phones only: after the hero, keep the trial one tap away. Hides over the pricing section.
export default function StickyCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => {
      const plans = document.getElementById('plans')
      const r = plans ? plans.getBoundingClientRect() : null
      const overPlans = r && r.top < innerHeight && r.bottom > 0
      setShow(scrollY > 650 && !overPlans)
    }
    on(); addEventListener('scroll', on, { passive: true }); return () => removeEventListener('scroll', on)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="sticky-cta" initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 90, opacity: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          style={{ position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 70, display: 'flex', alignItems: 'center', gap: 12, padding: '10px 10px 10px 18px', borderRadius: 999,
            background: 'rgba(255,255,255,.88)', backdropFilter: 'blur(18px) saturate(1.3)', WebkitBackdropFilter: 'blur(18px) saturate(1.3)',
            border: '1px solid rgba(255,255,255,.9)', boxShadow: '0 18px 40px -16px rgba(48,26,110,.45)' }}>
          <div style={{ flex: 1, lineHeight: 1.25 }}><b style={{ fontSize: 14 }}>Gold, free for 7 days</b><div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>Then $13.33/mo · cancel anytime</div></div>
          <a href="#plans" style={{ background: 'var(--teal)', color: '#fff', borderRadius: 999, padding: '11px 18px', fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap' }}>Try free</a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
