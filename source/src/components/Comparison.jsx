import Reveal, { SectionHead } from './Reveal.jsx'
import { glass, section, inner } from './glass.js'

const COLS = ['Free', 'Silver', 'Gold', 'Platinum']
const HERO = 2
const ROWS = [
  { label: 'Location history', v: ['2 days', '7 days', '30 days', '30 days'] },
  { label: 'Place Alerts', v: ['2', '5', 'Unlimited', 'Unlimited'] },
  { label: 'Crash Detection', v: ['no', 'yes', 'yes', 'yes'] },
  { label: 'Emergency Dispatch', v: ['no', 'no', 'yes', 'yes'] },
  { label: '24/7 Roadside Assistance', v: ['no', 'no', 'yes', 'yes'] },
  { label: 'Individual Driver Reports', v: ['no', 'no', 'yes', 'yes'] },
  { label: 'Breach alerts', v: ['yes', 'yes', 'yes', 'yes'] },
  { label: 'ID theft coverage', v: ['no', 'no', 'no', 'yes'] },
  { label: 'Disaster & medical help', v: ['no', 'no', 'no', 'yes'] },
  { label: 'Pet GPS devices', v: ['no', 'Up to 2', '3–5', '6–10'] },
  { label: 'Price, billed yearly', v: ['$0', '$8.33/mo', '$13.33/mo', '$20.83/mo'] },
]

const Cell = ({ x, hero }) => {
  if (x === 'yes') return <span style={{ display: 'inline-grid', placeItems: 'center', width: 22, height: 22, borderRadius: 999, background: hero ? 'var(--teal)' : 'var(--teal-light)' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={hero ? '#fff' : 'var(--teal)'} strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg></span>
  if (x === 'no') return <span style={{ color: 'rgba(26,20,48,.32)', fontSize: 18 }}>—</span>
  return <span className={x.includes('$') ? 'mono' : ''} style={{ fontSize: 13, fontWeight: hero ? 600 : 400, color: hero ? 'var(--teal-deep)' : 'var(--ink-soft)' }}>{x}</span>
}

export default function Comparison() {
  return (
    <section style={section}>
      <div style={inner}>
        <SectionHead eyebrow="Compare plans" title="Find the right plan" em="for your family." lede="Every paid plan covers everyone in your Circle." />
        <Reveal style={{ ...glass, borderRadius: 22, padding: 8, marginTop: 44, overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
            <thead><tr>
              <th style={{ textAlign: 'left', padding: '16px 18px' }}></th>
              {COLS.map((c, i) => (
                <th key={c} style={{ padding: '16px 18px', textAlign: 'center', fontSize: 12.5, fontWeight: 600,
                  color: i === HERO ? 'var(--teal-deep)' : 'var(--ink-soft)',
                  background: i === HERO ? 'rgba(118,46,235,.08)' : 'transparent',
                  borderRadius: i === HERO ? '12px 12px 0 0' : 0 }}>{c}</th>
              ))}
            </tr></thead>
            <tbody>
              {ROWS.map((r, ri) => (
                <tr key={r.label} style={{ borderTop: '1px solid rgba(26,20,48,.07)' }}>
                  <td style={{ padding: '15px 18px', fontSize: 13.5, fontWeight: 500 }}>{r.label}</td>
                  {r.v.map((x, ci) => (
                    <td key={ci} style={{ padding: '15px 18px', textAlign: 'center',
                      background: ci === HERO ? 'rgba(118,46,235,.08)' : 'transparent',
                      borderRadius: ci === HERO && ri === ROWS.length - 1 ? '0 0 12px 12px' : 0 }}>
                      <Cell x={x} hero={ci === HERO} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
