import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import Lenis from 'lenis'

export const useReducedMotion = () => {
  const [r, setR] = useState(false)
  useEffect(() => {
    const m = matchMedia('(prefers-reduced-motion: reduce)')
    setR(m.matches)
    const on = e => setR(e.matches)
    m.addEventListener('change', on)
    return () => m.removeEventListener('change', on)
  }, [])
  return r
}

export function useLenis(disabled) {
  useEffect(() => {
    if (disabled) return
    const lenis = new Lenis({ duration: 1.1, easing: t => 1 - Math.pow(1 - t, 3), smoothWheel: true })
    let id
    const raf = t => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [disabled])
}

/* magnetic button — pulls slightly toward the cursor */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 120, damping: 20 })
  const sy = useSpring(y, { stiffness: 120, damping: 20 })
  useEffect(() => {
    const el = ref.current; if (!el) return
    const move = e => {
      const r = el.getBoundingClientRect()
      x.set((e.clientX - (r.left + r.width / 2)) * strength)
      y.set((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const leave = () => { x.set(0); y.set(0) }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave) }
  }, [strength, x, y])
  return { ref, sx, sy }
}

/* 3D tilt that follows the cursor over a card */
export function useTilt(max = 8) {
  const ref = useRef(null)
  const rx = useMotionValue(0), ry = useMotionValue(0)
  const mx = useMotionValue(50), my = useMotionValue(50)
  const srx = useSpring(rx, { stiffness: 90, damping: 20 })
  const sry = useSpring(ry, { stiffness: 90, damping: 20 })
  const onMove = e => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * max * 2)
    rx.set(-(py - 0.5) * max * 2)
    mx.set(px * 100); my.set(py * 100)
  }
  const onLeave = () => { rx.set(0); ry.set(0) }
  return { ref, srx, sry, mx, my, onMove, onLeave }
}
