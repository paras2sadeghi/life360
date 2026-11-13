import Reveal from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'

export default function CTA() {
  return (
    <section style={{ padding: '80px clamp(18px,4vw,40px) 90px', position: 'relative' }}>
      <Reveal style={{ maxWidth: 1180, margin: '0 auto', borderRadius: 28, padding: '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(150deg,var(--teal),var(--teal-deep))', boxShadow: '0 30px 70px -24px rgba(59,26,134,.5)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 80% at 80% 0%,rgba(255,255,255,.16),transparent 60%)', pointerEvents: 'none' }} />
        <h2 className="serif" style={{ position: 'relative', color: '#fff', fontSize: 'clamp(34px,4.4vw,56px)', lineHeight: 1.05, letterSpacing: '-.02em', maxWidth: '18ch', margin: '0 auto' }}>
          Less “where are you?” More “see you soon.”
        </h2>
        <p style={{ position: 'relative', color: 'rgba(255,255,255,.82)', fontSize: 16.5, marginTop: 18, maxWidth: '46ch', marginInline: 'auto' }}>
          Start free today. Try Gold for 7 days, and we will remind you before your trial ends.
        </p>
        <div style={{ position: 'relative', display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
          <MagneticButton style={{ background: '#fff', color: 'var(--teal-deep)', border: 'none' }}>Try Gold free</MagneticButton>
          <MagneticButton style={{ background: 'rgba(255,255,255,.14)', color: '#fff', border: '1px solid rgba(255,255,255,.4)', backdropFilter: 'blur(8px)' }}>View plans</MagneticButton>
        </div>
      </Reveal>
    </section>
  )
}
