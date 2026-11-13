import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal, { SectionHead } from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'
import { glass, section, inner } from './glass.js'

// Annual is the default: priced per month, with the yearly bill and the dollar saving underneath.
const PLANS = [
  { name: 'Free', line: 'See your people on one map.', y: '0', m: '0', yt: null, save: null,
    items: ['Live location sharing', '2 days of history', '2 Place Alerts', 'Track things with Tile'] },
  { name: 'Silver', line: 'Everyday peace of mind.', y: '8.33', m: '9.99', yt: '99.99', save: '19.89',
    items: ['Everything in Free', 'Crash Detection', '7 days of history', '5 Place Alerts'] },
  { name: 'Gold', best: true, line: 'Help on the road, sent for you.', y: '13.33', m: '15.99', yt: '159.99', save: '31.89',
    items: ['Everything in Silver', 'Emergency Dispatch', '24/7 Roadside Assistance', '30 days of history', 'Individual Driver Reports'] },
  { name: 'Platinum', line: 'Total protection, on and offline.', y: '20.83', m: '24.99', yt: '249.99', save: '49.89',
    items: ['Everything in Gold', 'ID theft coverage', 'Disaster & medical help', 'Travel support'] },
]

const Check = ({ gold }) => (
  <span style={{ width: 20, height: 20, borderRadius: 999, flexShrink: 0, display: 'grid', placeItems: 'center', background: gold ? 'var(--teal)' : 'var(--teal-light)' }}>
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={gold ? '#fff' : 'var(--teal)'} strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
  </span>
)

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  return (
    <section id="plans" style={section}>
      <div style={inner}>
        <SectionHead eyebrow="Membership" title="One plan covers" em="your whole Circle."
          lede="Start free. Every paid plan has a 7-day free trial, and we remind you before it ends. All prices in CAD." />

        <Reveal style={{ ...glass, display: 'inline-flex', borderRadius: 999, padding: 5, marginTop: 30 }}>
          {[['Annually', true], ['Monthly', false]].map(([label, val]) => (
            <button key={label} onClick={() => setAnnual(val)}
              style={{ position: 'relative', border: 'none', background: 'none', borderRadius: 999, padding: '10px 18px', fontSize: 14, fontWeight: 500,
                color: annual === val ? 'var(--ink)' : 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 8 }}>
              {annual === val && <motion.span layoutId="billPill" transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ position: 'absolute', inset: 0, borderRadius: 999, background: '#fff', boxShadow: '0 4px 12px -4px rgba(48,26,110,.22)' }} />}
              <span style={{ position: 'relative' }}>{label}</span>
              {val && <span className="mono" style={{ position: 'relative', fontSize: 10.5, background: 'var(--teal-light)', color: 'var(--teal)', borderRadius: 999, padding: '3px 8px' }}>2 months free</span>}
            </button>
          ))}
        </Reveal>

        <div className="plans-grid" style={{ display: 'grid', gap: 16, marginTop: 30 }}>
          {PLANS.map((p, i) => (
            <Reveal key={p.name} i={i} style={{ ...glass, borderRadius: 24, padding: 26, position: 'relative', display: 'flex', flexDirection: 'column',
              ...(p.best ? { background: 'linear-gradient(155deg,rgba(255,255,255,.78),rgba(232,242,239,.62))', border: '1px solid rgba(118,46,235,.35)',
                boxShadow: '0 26px 60px -24px rgba(59,26,134,.45),inset 0 1px 0 rgba(255,255,255,.9)' } : {}) }}>
              {p.best && <span style={{ position: 'absolute', top: -12, right: 20, background: 'var(--teal)', color: '#fff', fontSize: 11.5, fontWeight: 600, borderRadius: 999, padding: '5px 12px' }}>Perfect for families</span>}
              <b style={{ fontSize: 17 }}>{p.name}</b>
              <p style={{ color: 'var(--ink-soft)', fontSize: 13.5, marginTop: 4, minHeight: '2.6em' }}>{p.line}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 14 }}>
                <span className="serif" style={{ fontSize: 50, lineHeight: 1, color: 'var(--teal-deep)' }}>${annual ? p.y : p.m}</span>
                {p.yt && <span style={{ color: 'var(--ink-soft)', fontSize: 14 }}>/mo</span>}
              </div>
              <p style={{ color: 'var(--ink-soft)', fontSize: 12.5, marginTop: 6, minHeight: '1.4em' }}>
                {p.yt ? (annual ? `Billed $${p.yt}/yr` : 'Billed monthly') : 'No card needed'}
              </p>
              <span className="mono" style={{ alignSelf: 'flex-start', marginTop: 8, fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'var(--teal-light)', color: 'var(--teal)',
                visibility: p.save && annual ? 'visible' : 'hidden' }}>Save ${p.save || ''}</span>
              <div style={{ marginTop: 18 }}>
                <MagneticButton primary={p.best} style={{ width: '100%', padding: '14px 20px' }}>{p.yt ? 'Try 7 days free' : 'Get started'}</MagneticButton>
              </div>
              <div style={{ height: 1, background: 'rgba(26,20,48,.1)', margin: '22px 0 16px' }} />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
                {p.items.map(x => <li key={x} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13.5 }}><Check gold={p.best} />{x}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="trial-strip" style={{ ...glass, borderRadius: 22, padding: '20px 24px', marginTop: 18, display: 'grid', gap: 16, alignItems: 'center' }}>
          <b style={{ fontSize: 15 }}>How the free trial works</b>
          {[['Today', 'Full plan for everyone', '$0'], ['Day 5', 'We remind you by email and push', ''], ['Day 7', 'Your plan starts', annual ? '$159.99/yr' : '$15.99/mo']].map(([d, t, amt], k) => (
            <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="mono" style={{ width: 54, flexShrink: 0, fontSize: 11, color: k === 0 ? '#fff' : 'var(--teal)', background: k === 0 ? 'var(--teal)' : 'var(--teal-light)', borderRadius: 999, padding: '5px 0', textAlign: 'center' }}>{d}</span>
              <span style={{ fontSize: 13.5, color: 'var(--ink-soft)', flex: 1 }}>{t}</span>
              {amt && <span className="mono" style={{ fontSize: 13, fontWeight: 500 }}>{amt}</span>}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
