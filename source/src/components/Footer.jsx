import logo from '../img/life360-logo.svg'

const COLS = [
  ['Product', ['Location sharing', 'Driving safety', 'Crash Detection', 'Tile trackers', 'Pet GPS']],
  ['Membership', ['Plans & pricing', 'Free trial', 'Compare plans', 'Manage membership']],
  ['Company', ['About', 'Trust & Safety', 'Help Center', 'Privacy']],
]

export default function Footer() {
  return (
    <footer style={{ padding: '0 clamp(18px,4vw,40px) 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', borderTop: '1px solid rgba(26,20,48,.1)', paddingTop: 44 }}>
        <div className="foot-grid" style={{ display: 'grid', gap: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 19, color: 'var(--teal-deep)' }}>
              <img src={logo} alt="Life360" style={{ height: 30, display: 'block' }} />
            </div>
            <p style={{ color: 'var(--ink-soft)', fontSize: 13.5, marginTop: 12, maxWidth: '30ch', lineHeight: 1.6 }}>Peace of mind for everyone you love, and everything they carry.</p>
          </div>
          {COLS.map(([h, items]) => (
            <div key={h}>
              <b style={{ fontSize: 13 }}>{h}</b>
              <ul style={{ listStyle: 'none', marginTop: 12, display: 'grid', gap: 8 }}>
                {items.map(x => <li key={x}><a href="#" style={{ fontSize: 13.5, color: 'var(--ink-soft)' }}>{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 40, fontSize: 12, color: 'var(--ink-soft)', opacity: .8 }}>Concept redesign by Parastoo Sadeghi for an interview with Life360. Not affiliated with or endorsed by Life360. Product photos and logo belong to Life360; people, stories and some figures are illustrative. <a href="/case-study" style={{ color: 'var(--teal)', fontWeight: 600 }}>Read the case study →</a></p>
      </div>
    </footer>
  )
}
