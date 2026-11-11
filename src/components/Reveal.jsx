import { createElement, useEffect, useRef } from 'react'
import { animate, inView } from 'motion'

const reduced = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion:reduce)').matches

/**
 * Animasi masuk saat scroll (fade + naik) dan, bila `lift`, kartu terangkat saat hover mouse.
 * Konten tetap terlihat bila Motion gagal atau prefers-reduced-motion aktif.
 * `index` = posisi di antara saudara, dipakai untuk delay bertingkat (maks 5 x 0.08s).
 */
export default function Reveal({ as = 'div', index = 0, lift = false, children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    const cleanups = []
    try {
      el.style.opacity = '0'
      const delay = Math.min(index, 5) * 0.08
      const stop = inView(
        el,
        () => {
          animate(el, { opacity: [0, 1], y: [28, 0] }, { duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] })
        },
        { margin: '0px 0px -10% 0px' },
      )
      cleanups.push(stop)
      const failsafe = setTimeout(() => {
        const r = el.getBoundingClientRect()
        if (el.style.opacity === '0' && r.top < innerHeight && r.bottom > 0) el.style.opacity = '1'
      }, 6000)
      cleanups.push(() => clearTimeout(failsafe))

      if (lift) {
        const enter = (e) => e.pointerType === 'mouse' && animate(el, { y: -6 }, { duration: 0.3, ease: 'easeOut' })
        const leave = (e) => e.pointerType === 'mouse' && animate(el, { y: 0 }, { duration: 0.4, ease: 'easeOut' })
        el.addEventListener('pointerenter', enter)
        el.addEventListener('pointerleave', leave)
        cleanups.push(() => {
          el.removeEventListener('pointerenter', enter)
          el.removeEventListener('pointerleave', leave)
        })
      }
    } catch (e) {
      el.style.opacity = ''
    }
    return () => cleanups.forEach((fn) => fn && fn())
  }, [index, lift])

  return createElement(as, { ref, ...props }, children)
}
