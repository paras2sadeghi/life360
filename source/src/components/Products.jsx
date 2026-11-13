import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal, { SectionHead } from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'
import { glass, section, inner } from './glass.js'
import mate from '../img/tile-mate.png'
import pro from '../img/tile-pro.png'
import slim from '../img/tile-slim.png'
import sticker from '../img/tile-sticker.png'
import petgps from '../img/pet-gps.png'
import pettag from '../img/pet-tag.png'
import bundle from '../img/bundle.png'
import petLife from '../img/petgps-life.jpg'

const TILES = [
  { img: mate, n: 'Tile', use: 'Keys & backpacks', range: '76 m range', price: '34.99' },
  { img: pro, n: 'Tile Pro', use: 'Bags & luggage', range: '152 m range', price: '49.99', tag: 'Best seller' },
  { img: slim, n: 'Tile Slim', use: 'Wallets & passports', range: '76 m range', price: '34.99' },
  { img: sticker, n: 'Tile Sticker', use: 'Remotes & bikes', range: '76 m range', price: '34.99' },
]

function AddBtn() {
  const [added, setAdded] = useState(false)
  return (
    <button onClick={() => { if (!added) dispatchEvent(new CustomEvent('cart:add', { detail: 1 })); setAdded(true) }} aria-label="Add to cart"
      style={{ border: 'none', borderRadius: 999, padding: '9px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'background .25s',
        background: added ? 'var(--teal)' : 'rgba(255,255,255,.75)', color: added ? '#fff' : 'var(--teal-deep)', boxShadow: added ? 'none' : 'inset 0 0 0 1px rgba(118,46,235,.25)' }}>
      {added ? 'Added ✓' : 'Add'}
    </button>
  )
}

const Stage = ({ img, alt }) => (
  <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 18, background: 'radial-gradient(circle at 50% 42%,#fff 0%,rgba(255,255,255,.4) 55%,rgba(255,255,255,0) 72%)' }}>
    <motion.img src={img} alt={alt} loading="lazy" whileHover={{ y: -6, rotate: -3 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      style={{ position: 'absolute', inset: '10%', width: '80%', height: '80%', objectFit: 'contain', filter: 'drop-shadow(0 18px 18px rgba(20,40,40,.22))' }} />
  </div>
)

export default function Products() {
  return (
    <section id="tile" style={section}>
      <div style={inner}>
        <SectionHead eyebrow="Tile & Pets" title="Find their things," em="and their pets." lede="Keys, bags, and the dog who thinks the fence is a suggestion. All on the same map as your family. Gold members save 10% on Tile." />

        <div className="tiles-grid" style={{ display: 'grid', gap: 14, marginTop: 44 }}>
          {TILES.map((t, i) => (
            <Reveal key={t.n} i={i} style={{ ...glass, borderRadius: 24, padding: 14, position: 'relative' }}>
              {t.tag && <span style={{ position: 'absolute', top: 16, left: 16, zIndex: 2, fontSize: 11, fontWeight: 600, background: 'var(--amber)', color: '#3A2300', borderRadius: 999, padding: '4px 10px' }}>{t.tag}</span>}
              <Stage img={t.img} alt={t.n} />
              <div style={{ padding: '6px 6px 4px' }}>
                <b style={{ fontSize: 16 }}>{t.n}</b>
                <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 2 }}>{t.use} · {t.range}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                  <span className="serif" style={{ fontSize: 26, color: 'var(--teal-deep)' }}>${t.price}</span>
                  <AddBtn />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="duo-grid" style={{ display: 'grid', gap: 16, marginTop: 16 }}>
          {/* Pets: lifestyle photo + both pet products */}
          <Reveal style={{ ...glass, borderRadius: 26, padding: 14, display: 'grid', gap: 14 }} className="pet-card">
            <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', minHeight: 260 }}>
              <img src={petLife} alt="A beagle wearing Life360 Pet GPS" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '8% 35%' }} />
            </div>
            <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ alignSelf: 'flex-start', fontSize: 11.5, fontWeight: 600, color: 'var(--teal)', background: 'var(--teal-light)', borderRadius: 999, padding: '3px 9px' }}>New</span>
              <h3 className="serif" style={{ fontSize: 30, lineHeight: 1.05, marginTop: 12, letterSpacing: '-.01em' }}>Pet GPS, with escape alerts.</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 8, lineHeight: 1.55 }}>Real-time GPS and an alert the moment they leave the yard. Up to 14 days of battery.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 22 }}>
                {[[petgps, 'Pet GPS', '129.99'], [pettag, 'Pet Tag', '10.99']].map(([img, n, p]) => (
                  <div key={n} style={{ background: 'rgba(255,255,255,.55)', borderRadius: 16, padding: 10, textAlign: 'center' }}>
                    <img src={img} alt={n} loading="lazy" style={{ width: '72%', aspectRatio: '1/1', objectFit: 'contain', margin: '0 auto', filter: 'drop-shadow(0 10px 10px rgba(20,40,40,.18))' }} />
                    <b style={{ display: 'block', fontSize: 13.5, marginTop: 4 }}>{n}</b>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--teal-deep)' }}>${p}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Bundle: anchor price + saving, the revenue lever for hardware */}
          <Reveal i={1} style={{ borderRadius: 26, padding: 28, position: 'relative', overflow: 'hidden', color: '#fff',
            background: 'linear-gradient(150deg,var(--teal),var(--teal-deep))', boxShadow: '0 30px 60px -28px rgba(59,26,134,.6)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 70% at 85% 10%,rgba(255,255,255,.18),transparent 60%)', pointerEvents: 'none' }} />
            <span style={{ position: 'relative', alignSelf: 'flex-start', fontSize: 11.5, fontWeight: 600, background: 'rgba(255,255,255,.16)', borderRadius: 999, padding: '4px 10px' }}>Bundle · Save 21%</span>
            <h3 className="serif" style={{ position: 'relative', fontSize: 34, lineHeight: 1.05, marginTop: 14, letterSpacing: '-.01em' }}>The Essentials Pack.</h3>
            <p style={{ position: 'relative', fontSize: 14.5, opacity: .85, marginTop: 8, maxWidth: '30ch', lineHeight: 1.55 }}>Tile Pro, Tile, Tile Slim and Tile Sticker. One for everything they carry.</p>
            <img src={bundle} alt="Tile Essentials Pack" loading="lazy" style={{ position: 'relative', width: '78%', maxWidth: 340, margin: '10px auto 0', filter: 'drop-shadow(0 24px 22px rgba(0,0,0,.3))' }} />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 'auto', paddingTop: 16, flexWrap: 'wrap' }}>
              <div><span className="serif" style={{ fontSize: 36 }}>$109.99</span><span style={{ marginLeft: 10, opacity: .6, textDecoration: 'line-through', fontSize: 15 }}>$139.96</span></div>
              <div onClick={() => dispatchEvent(new CustomEvent('cart:add', { detail: 4 }))}><MagneticButton style={{ background: '#fff', color: 'var(--teal-deep)', border: 'none', padding: '13px 22px' }}>Add the pack</MagneticButton></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
