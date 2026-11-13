import { motion } from 'framer-motion'
import { useMagnetic } from '../lib.jsx'
export default function MagneticButton({ children, primary, style }) {
  const { ref, sx, sy } = useMagnetic(primary ? 0.35 : 0.25)
  return (
    <motion.button ref={ref} style={{ x: sx, y: sy,
      borderRadius: 999, fontWeight: 600, fontSize: 14.5, padding: '16px 30px',
      background: primary ? 'var(--teal)' : 'var(--glass)',
      color: primary ? '#fff' : 'var(--teal-deep)',
      border: primary ? 'none' : '1px solid var(--glass-line)',
      backdropFilter: primary ? 'none' : 'blur(12px)', WebkitBackdropFilter: primary ? 'none' : 'blur(12px)',
      boxShadow: primary ? '0 5px 16px rgba(118,46,235,.28),0 0 30px -6px rgba(118,46,235,.5)' : 'none', ...style }}
      whileHover={{ scale: 1.03 }} whileTap={{ scale: .98 }} transition={{ type: 'spring', stiffness: 180, damping: 20 }}>
      {children}
    </motion.button>
  )
}
