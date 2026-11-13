import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal, { SectionHead } from './Reveal.jsx'
import { glass } from './glass.js'

/* Drop files into /public/videos/ and set src+poster here.
   Leave src empty to show a labelled placeholder card (no broken video). */
const CLIPS = [
  { name: 'Meet the Parks', line: 'Knew their teen got home safe', src: '', poster: '' },
  { name: 'Meet Daniel', line: 'Roadside help in 20 minutes', src: '', poster: '' },
  { name: 'Meet Priya', line: 'Found her keys with Tile', src: '', poster: '' },
  { name: 'Meet the Riveras', line: 'Biscuit came home with Pet GPS', src: '', poster: '' },
]

function Clip({ c, i }) {
  const vref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = vref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => {
      setVis(e.isIntersecting)
      if (e.isIntersecting) el.play?.().catch(() => {})
      else el.pause?.()
    }, { threshold: .4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Reveal i={i} style={{ ...glass, borderRadius: 20, padding: 8, flex: '0 0 auto', width: 240 }}>
      <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '9/16', background: 'linear-gradient(160deg,#CFE9F5,#E8F3F0)' }}>
        {c.src ? (
          <video ref={vref} src={c.src} poster={c.poster || undefined} muted loop playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: 'var(--teal)', textAlign: 'center', padding: 16 }}>
            <div>
              <div style={{ width: 46, height: 46, borderRadius: 999, margin: '0 auto 10px', display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.6)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--teal)"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <div style={{ fontSize: 11.5, opacity: .7 }} className="mono">video coming soon</div>
            </div>
          </div>
        )}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px 14px 12px', background: 'linear-gradient(to top,rgba(26,20,48,.6),transparent)', color: '#fff' }}>
          <b style={{ fontSize: 14 }}>{c.name}</b>
          <div style={{ fontSize: 12, opacity: .85, marginTop: 2 }}>{c.line}</div>
        </div>
      </div>
    </Reveal>
  )
}

export default function VideoWall() {
  return (
    <section style={{ padding: '104px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>
        <SectionHead eyebrow="Real families" title="Real families," em="real peace of mind." lede="Short stories from families who use Life360 every day." />
      </div>
      <div style={{ display: 'flex', gap: 18, overflowX: 'auto', padding: '44px 40px 12px', scrollSnapType: 'x mandatory' }} className="vwall">
        {CLIPS.map((c, i) => <div key={c.name} style={{ scrollSnapAlign: 'start' }}><Clip c={c} i={i} /></div>)}
      </div>
    </section>
  )
}
