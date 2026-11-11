import { useEffect, useState } from 'react'
import { focusTarget, goTo } from '../hooks/useSmoothScroll'
import Icon from './Icon'

export default function BackToTop() {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const chk = () => setOn(window.scrollY > 700)
    window.addEventListener('scroll', chk, { passive: true })
    chk()
    return () => window.removeEventListener('scroll', chk)
  }, [])

  return (
    <button
      className={on ? 'totop on' : 'totop'}
      type="button"
      aria-label="Back to top"
      onClick={() =>
        goTo(
          () => 0,
          () => focusTarget(document.getElementById('top'), 'top'),
        )
      }
    >
      <Icon name="up" />
    </button>
  )
}
