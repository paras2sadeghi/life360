import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import logo from '../img/life360-logo.svg'
import { motion } from 'framer-motion'
export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [cart, setCart] = useState(0)
  useEffect(() => { const on = e => setCart(c => c + (e.detail || 1)); addEventListener('cart:add', on); return () => removeEventListener('cart:add', on) }, [])
  useEffect(() => {
    const on = () => setSolid(scrollY > 40)
    addEventListener('scroll', on, { passive: true }); return () => removeEventListener('scroll', on)
  }, [])
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5, ease: [.22,1,.36,1] }}
      style={{
        position: 'fixed', inset: 'var(--bar,0px) 0 auto 0', zIndex: 60, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '14px clamp(18px,4vw,40px)',
        background: solid ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.32)',
        backdropFilter: 'blur(20px) saturate(1.3)', WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
        borderBottom: `1px solid ${solid ? 'rgba(26,20,48,.08)' : 'rgba(255,255,255,.42)'}`,
        transition: 'background .3s, border-color .3s',
      }}>
      <a href="#" aria-label="Life360" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 19, color: 'var(--teal-deep)', letterSpacing: '-.01em' }}>
        <img src={logo} alt="Life360" style={{ height: 30, display: 'block' }} />
      </a>
      <div className="nav-links" style={{ display: 'flex', gap: 28, fontSize: 13.5, fontWeight: 500 }}>
        {[['Family safety','#features'],['Tile & Pets','#tile'],['Stories','#stories']].map(([l,h]) => <a key={l} href={h} style={{ opacity: .85 }}>{l}</a>)}
        <a href="#plans" style={{ color: 'var(--teal)' }}>Membership</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <a href="#tile" aria-label={`Cart, ${cart} items`} style={{ position: 'relative', width: 40, height: 40, borderRadius: 999, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.7)', color: 'var(--teal-deep)' }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 7h12l-1 13H7z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>
          <AnimatePresence>{cart > 0 && <motion.span key={cart} initial={{ scale: .4 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 500, damping: 18 }}
            style={{ position: 'absolute', top: -3, right: -3, minWidth: 19, height: 19, padding: '0 5px', borderRadius: 999, background: 'var(--amber)', color: '#2A1A00', fontSize: 11, fontWeight: 700, display: 'grid', placeItems: 'center' }}>{cart}</motion.span>}</AnimatePresence>
        </a>
        <a href="#plans" style={{ background: 'var(--teal)', color: '#fff', borderRadius: 999, padding: '11px 20px', fontWeight: 600, fontSize: 13 }}>Try Gold free</a>
      </div>
    </motion.nav>
  )
}
