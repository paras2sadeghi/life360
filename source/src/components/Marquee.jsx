import { motion } from 'framer-motion'

const ITEMS = ['Live location','Place Alerts','Crash Detection','SOS','Roadside Assistance','Driver Reports','Location History','Tile trackers','Pet GPS','Breach alerts','ID theft protection','Emergency Dispatch','Smart Alerts','Driving Summary','Travel support','Medical assistance']

function Row({ reverse }) {
  return (
    <motion.div
      initial={{ x: reverse ? '-50%' : '0%' }}
      animate={{ x: reverse ? '0%' : '-50%' }}
      transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      style={{ display: 'flex', gap: 14, width: 'max-content' }}>
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} style={{ whiteSpace: 'nowrap', padding: '10px 18px', borderRadius: 999, fontSize: 14, fontWeight: 500, color: 'var(--teal-deep)',
          background: 'var(--glass)', border: '1px solid var(--glass-line)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
          {t}
        </span>
      ))}
    </motion.div>
  )
}

export default function Marquee() {
  return (
    <section style={{ padding: '30px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 22, padding: '0 40px' }}>
        <p style={{ color: 'var(--ink-soft)', fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', fontWeight: 500 }}>Everything that keeps your Circle safe</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12,
        WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
        maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}>
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}
