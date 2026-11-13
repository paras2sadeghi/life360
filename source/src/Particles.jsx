import { useEffect, useRef } from 'react'

/* Ambient "dust in sunlight" — slow drifting soft light motes across the hero sky.
   Pure canvas, no Three.js. Calm, spa-like: low count, low speed, gentle opacity breathing. */
export default function Particles({ reduced }) {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, dpr = Math.min(devicePixelRatio || 1, 2)
    const motes = []
    const COUNT = reduced ? 0 : 34

    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < COUNT; i++) {
      motes.push({
        x: Math.random() * w, y: Math.random() * h,
        r: 1 + Math.random() * 3.5,
        vx: (Math.random() - 0.5) * 0.12,   // very slow drift
        vy: -0.06 - Math.random() * 0.12,   // gentle upward float
        base: 0.12 + Math.random() * 0.28,
        ph: Math.random() * Math.PI * 2,    // phase for opacity breathing
        sp: 0.4 + Math.random() * 0.6,      // breathing speed
        warm: Math.random() < 0.35,         // some amber, most white/teal-white
      })
    }

    let raf, t0 = performance.now()
    const draw = () => {
      const t = (performance.now() - t0) / 1000
      ctx.clearRect(0, 0, w, h)
      for (const m of motes) {
        m.x += m.vx; m.y += m.vy
        if (m.y < -10) { m.y = h + 10; m.x = Math.random() * w }
        if (m.x < -10) m.x = w + 10
        if (m.x > w + 10) m.x = -10
        const o = m.base * (0.55 + 0.45 * Math.sin(t * m.sp + m.ph))
        const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 4)
        const col = m.warm ? '232,163,61' : '255,255,255'
        g.addColorStop(0, `rgba(${col},${o})`)
        g.addColorStop(1, `rgba(${col},0)`)
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r * 4, 0, Math.PI * 2); ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    if (!reduced) draw()

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [reduced])

  return <canvas ref={ref} style={{ width: '100%', height: '100%', display: 'block' }} aria-hidden="true" />
}
