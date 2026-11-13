import { motion } from 'framer-motion'
import Particles from '../Particles.jsx'
import MagneticButton from './MagneticButton.jsx'
import HeroPhone from './HeroPhone.jsx'

const CLOUDS = [
  { l: '-6%', top: '14%', w: 420, o: .9, dx: 30, t: 26 },
  { l: '38%', top: '6%', w: 340, o: .75, dx: -24, t: 30 },
  { l: '70%', top: '20%', w: 380, o: .7, dx: 26, t: 34 },
  { l: '8%', top: '74%', w: 520, o: .85, dx: -30, t: 32 },
  { l: '58%', top: '78%', w: 460, o: .8, dx: 22, t: 28 },
]

const ease = [.22,1,.36,1]
const rise = { hidden: { opacity: 0, y: 22 }, show: i => ({ opacity: 1, y: 0, transition: { duration: 1.1, ease, delay: .15 + i*.14 } }) }


export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '130px 40px 70px', overflow: 'hidden' }}>
      {/* deeper sky + soft drifting clouds (replaces the photo) */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg,#B7CDFA 0%,#CDD8FB 38%,rgba(226,222,250,.6) 72%,rgba(255,255,255,0) 100%)' }}>
        {CLOUDS.map((c, i) => (
          <motion.div key={i} animate={{ x: [0, c.dx, 0] }} transition={{ duration: c.t, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', left: c.l, top: c.top, width: c.w, height: c.w * .42, opacity: c.o }}>
            {[[0, 30, 60, 46], [22, 8, 46, 62], [48, 20, 44, 54], [12, 42, 76, 40]].map(([x, y, w, h], k) => (
              <span key={k} style={{ position: 'absolute', left: x + '%', top: y + '%', width: w + '%', height: h + '%', borderRadius: '50%',
                background: 'radial-gradient(closest-side,#fff 0%,rgba(255,255,255,.85) 45%,rgba(255,255,255,0) 100%)', filter: 'blur(10px)' }} />
            ))}
          </motion.div>
        ))}
      </div>

      {/* ambient light particles across the whole hero sky */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <Particles reduced={matchMedia('(prefers-reduced-motion: reduce)').matches} />
      </div>

      <div className="hero-grid" style={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 40, alignItems: 'center' }}>
        <div style={{ maxWidth: 640 }}>
          <motion.div custom={0} variants={rise} initial="hidden" animate="show"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--glass)', border: '1px solid var(--glass-line)', color: 'var(--teal-deep)', borderRadius: 999, padding: '8px 16px', fontSize: 11.5, fontWeight: 500, letterSpacing: '.07em', textTransform: 'uppercase', backdropFilter: 'blur(12px)' }}>
            <span style={{ width: 6, height: 6, borderRadius: 50, background: 'var(--teal)' }} /> Loved by 100M+ families
          </motion.div>

          <motion.h1 custom={1} variants={rise} initial="hidden" animate="show" className="serif"
            style={{ fontSize: 'clamp(44px,5.6vw,80px)', lineHeight: .99, letterSpacing: '-.025em', margin: '22px 0 0' }}>
            Know your people<br />are safe, <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>without asking</em>.
          </motion.h1>

          <motion.p custom={2} variants={rise} initial="hidden" animate="show"
            style={{ maxWidth: 500, marginTop: 22, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
            Live location, crash detection and help on the road for everyone you love. Plus Tile, for the keys that live in the couch. <b style={{ color: 'var(--ink)', fontWeight: 600 }}>All in one app.</b>
          </motion.p>

          <motion.div custom={3} variants={rise} initial="hidden" animate="show" style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <MagneticButton primary>Try Gold free</MagneticButton>
            <MagneticButton>See plans</MagneticButton>
          </motion.div>

          <motion.div custom={4} variants={rise} initial="hidden" animate="show" style={{ marginTop: 16, fontSize: 13, color: 'var(--ink-soft)' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>$0</strong> to start · 7-day free trial · Reminder before you're charged
          </motion.div>

          <motion.div custom={5} variants={rise} initial="hidden" animate="show" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 30 }}>
            <div style={{ display: 'flex' }}>{['#F7776B', '#3FBF8F', '#8B6CFF', '#E8A33D'].map((c, k) => <span key={c} style={{ width: 30, height: 30, borderRadius: 999, background: c, border: '2px solid #fff', marginLeft: k ? -9 : 0 }} />)}</div>
            <span style={{ fontSize: 13.5, color: 'var(--ink-soft)' }}><b style={{ color: 'var(--ink)' }}>★ 4.8</b> on the App Store · loved by 100M+ members</span>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease, delay: .35 }}>
          <HeroPhone />
        </motion.div>
      </div>
    </section>
  )
}
