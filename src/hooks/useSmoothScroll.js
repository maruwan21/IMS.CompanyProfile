import { useEffect } from 'react'

// Scroll pelan dengan easing kosinus untuk link anchor (#id) dan tombol back-to-top.
const ease = (t) => -(Math.cos(Math.PI * t) - 1) / 2
let scrollJob = 0

export function goTo(get, done) {
  const rmq = matchMedia('(prefers-reduced-motion:reduce)')
  const start = window.scrollY
  const dist = get() - start
  const job = ++scrollJob
  if (rmq.matches || Math.abs(dist) < 2) {
    window.scrollTo(0, get())
    done?.()
    return
  }
  const dur = Math.min(3000, Math.max(1200, Math.abs(dist) * 0.8))
  let t0 = null
  function step(t) {
    if (job !== scrollJob) return
    if (t0 === null) t0 = t
    const p = Math.min(1, (t - t0) / dur)
    window.scrollTo(0, start + (get() - start) * ease(p))
    if (p < 1) requestAnimationFrame(step)
    else done?.()
  }
  requestAnimationFrame(step)
}

export function focusTarget(el, id) {
  if (el) {
    el.setAttribute('tabindex', '-1')
    try {
      el.focus({ preventScroll: true })
    } catch (e) {
      /* ignore */
    }
  }
  if (id && id !== 'top') {
    try {
      history.pushState(null, '', '#' + id)
    } catch (e) {
      /* ignore */
    }
  }
}

export default function useSmoothScroll(onNavigate) {
  useEffect(() => {
    const cancel = () => {
      scrollJob++
    }
    const evs = ['wheel', 'touchstart', 'pointerdown', 'keydown']
    evs.forEach((ev) => window.addEventListener(ev, cancel, { passive: true }))

    const onClick = (e) => {
      if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest && e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      const el = id && id !== 'top' ? document.getElementById(id) : null
      if (id && id !== 'top' && !el) return
      e.preventDefault()
      onNavigate?.()
      const head = document.querySelector('header')
      const target = el || document.getElementById('top')
      goTo(
        () => (el ? Math.max(0, el.getBoundingClientRect().top + window.scrollY - (head ? head.offsetHeight : 70)) : 0),
        () => focusTarget(target, id),
      )
    }
    document.addEventListener('click', onClick)
    return () => {
      evs.forEach((ev) => window.removeEventListener(ev, cancel))
      document.removeEventListener('click', onClick)
    }
  }, [onNavigate])
}
