import { motion } from 'framer-motion'

// A Life360-style phone (map + family sheet) with floating glass notifications, in the glass language.
const ease = [.22, 1, .36, 1]
const AV = { M: '#F7776B', L: '#3FBF8F', S: '#8B6CFF' }

const Pin = ({ x, y, k }) => (
  <div style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%,-100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', filter: 'drop-shadow(0 8px 10px rgba(40,24,90,.25))' }}>
    <div style={{ width: 40, height: 40, borderRadius: 999, background: AV[k], border: '3px solid #fff', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 600, fontSize: 15 }}>{k}</div>
    <div style={{ width: 10, height: 10, background: '#fff', transform: 'rotate(45deg)', marginTop: -6 }} />
  </div>
)

const Note = ({ style, icon, title, sub, delay }) => (
  <motion.div className="hp-note"
    initial={{ opacity: 0, y: 14, scale: .96 }} animate={{ opacity: 1, y: [0, -7, 0], scale: 1 }}
    transition={{ opacity: { duration: .9, delay, ease }, scale: { duration: .9, delay, ease }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: delay + .9 } }}
    style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px 11px 11px', borderRadius: 18, minWidth: 210,
      background: 'linear-gradient(155deg,rgba(255,255,255,.82),rgba(255,255,255,.55))', border: '1px solid rgba(255,255,255,.85)',
      backdropFilter: 'blur(18px) saturate(1.3)', WebkitBackdropFilter: 'blur(18px) saturate(1.3)',
      boxShadow: '0 20px 44px -18px rgba(48,26,110,.35),inset 0 1px 0 #fff', zIndex: 4, ...style }}>
    <div style={{ width: 34, height: 34, borderRadius: 11, flexShrink: 0, display: 'grid', placeItems: 'center', background: 'var(--teal-light)', color: 'var(--teal)' }}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={icon} /></svg>
    </div>
    <div><b style={{ display: 'block', fontSize: 13, lineHeight: 1.2 }}>{title}</b><span style={{ fontSize: 11.5, color: 'var(--ink-soft)' }}>{sub}</span></div>
  </motion.div>
)

export default function HeroPhone() {
  return (
    <div className="hp" style={{ position: 'relative', width: 380, height: 640, margin: '0 auto' }}>
      <div style={{ position: 'absolute', left: '50%', top: '48%', width: 520, height: 520, transform: 'translate(-50%,-50%)', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,.75), rgba(255,255,255,0) 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', width: 296, height: 620, borderRadius: 50, background: '#17142A', padding: 10,
        boxShadow: '0 50px 90px -40px rgba(48,26,110,.55), 0 0 0 1px rgba(255,255,255,.35)' }}>
        <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 88, height: 26, borderRadius: 14, background: '#17142A', zIndex: 5 }} />
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 40, overflow: 'hidden', background: '#EDEEF2' }}>
          <svg viewBox="0 0 276 600" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden>
            <rect width="276" height="600" fill="#ECEDF1" />
            <path d="M150 90 L250 80 L262 170 L160 184 Z" fill="#D2EBCF" />
            <path d="M0 430 C70 405 112 478 172 474 S276 506 276 506 L276 600 L0 600 Z" fill="#CFE2F6" />
            <g stroke="#fff" strokeWidth="11" fill="none" strokeLinecap="round"><path d="M-10 62 L290 50" /><path d="M-10 210 L290 196" /><path d="M-10 366 L290 352" /><path d="M58 -10 L70 610" /><path d="M138 -10 L146 610" /><path d="M222 -10 L214 610" /></g>
            <path d="M-10 300 C80 272 160 272 290 226" stroke="#F6E6B4" strokeWidth="12" fill="none" />
            <path d="M58 104 C 120 104, 176 108, 212 140 S 190 226, 142 250" fill="none" stroke="#762EEB" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="1 7" />
            <g fontFamily="Inter, sans-serif" fontSize="8.5" fill="#9A98A6" fontWeight="600"><text x="178" y="140">Lincoln High</text><text x="76" y="204">Oak St</text></g>
          </svg>
          <div style={{ position: 'absolute', top: 54, left: '50%', transform: 'translateX(-50%)', background: '#17142A', color: '#fff', fontSize: 12, fontWeight: 600, borderRadius: 999, padding: '8px 14px', whiteSpace: 'nowrap', zIndex: 3 }}>Johnson Family ▾</div>
          <Pin x={58} y={104} k="M" /><Pin x={212} y={140} k="L" /><Pin x={142} y={250} k="S" />
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '24px 24px 0 0', padding: '10px 18px 22px', boxShadow: '0 -10px 26px rgba(40,24,90,.1)' }}>
            <div style={{ width: 38, height: 4, borderRadius: 2, background: '#DCDAE6', margin: '0 auto 12px' }} />
            <b style={{ fontSize: 15 }}>Johnson Family</b>
            {[['M', 'Maya', 'At Lincoln High · since 8:02 am'], ['L', 'Leo', 'Driving · 42 km/h on Oak St'], ['S', 'Sara', 'Home · since 5:40 pm']].map(([k, n, s]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 11 }}>
                <div style={{ width: 34, height: 34, borderRadius: 999, background: AV[k], color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 600, fontSize: 13, flexShrink: 0 }}>{k}</div>
                <div><b style={{ display: 'block', fontSize: 13 }}>{n}</b><span style={{ fontSize: 11, color: '#8E8B9C' }}>{s}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Note style={{ top: 150, left: -86 }} delay={.7} icon="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" title="Maya arrived at school" sub="8:02 am · just now" />
      <Note style={{ top: 250, right: -86 }} delay={1} icon="M3 13h18v4H3zM6 13l2-5h8l2 5M7 17v2M17 17v2" title="Leo drove home safely" sub="No hard brakes" />
      <Note style={{ bottom: -14, right: -40 }} delay={1.3} icon="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" title="Crash Detection is on" sub="Help sent if needed" />
    </div>
  )
}
