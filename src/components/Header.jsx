import { useEffect } from 'react'
import Button from './Button'
import Img from './Img'

const links = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#services', label: 'Services' },
  { href: '#rigs', label: 'Rigs' },
]

export default function Header({ brand, open, setOpen }) {
  // Esc menutup menu; melebar > 920px menutup otomatis.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        document.getElementById('menuBtn')?.focus()
      }
    }
    const mq = matchMedia('(min-width:921px)')
    const onChange = () => setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener?.('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener?.('change', onChange)
    }
  }, [open, setOpen])

  return (
    <header>
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Indorig Mitra Sejati, home">
          <Img name="logo" alt="" width="36" height="36" />
          <span>
            <b>{brand.main}</b>
            <small>{brand.sub}</small>
          </span>
        </a>
        <nav id="mnav" aria-label="Main" className={open ? 'open' : undefined}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="nm" href="#contact">
            Contact
          </a>
        </nav>
        <div className="hright">
          <Button variant="red" href="#contact">
            Contact
          </Button>
          <button
            className="menu-btn"
            id="menuBtn"
            type="button"
            aria-expanded={open ? 'true' : 'false'}
            aria-controls="mnav"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
