import { useRef } from 'react'
import { img } from '../utils/images'

// <img> dengan retry otomatis (maks 3x) bila gambar gagal dimuat. `name` = nama file di assets/img tanpa .webp.
export default function Img({ name, alt = '', style, ...rest }) {
  const tries = useRef(0)
  const src = img(name)

  const onError = (e) => {
    const el = e.currentTarget
    const base = (el.getAttribute('src') || '').split('?')[0]
    if (!base || tries.current >= 3) return
    tries.current++
    setTimeout(() => {
      el.src = `${base}?r=${tries.current}`
    }, 700 * tries.current)
  }

  return <img src={src} alt={alt} style={style} onError={onError} {...rest} />
}
