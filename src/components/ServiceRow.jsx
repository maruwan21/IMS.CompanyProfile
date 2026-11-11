import Img from './Img'
import Reveal from './Reveal'

export default function ServiceRow({ row }) {
  return (
    <Reveal className={row.reverse ? 'prow rev' : 'prow'}>
      <div className="im">
        <Img
          name={row.image}
          alt={row.imageAlt}
          loading="lazy"
          style={row.objectPosition ? { objectPosition: row.objectPosition } : undefined}
        />
      </div>
      <div>
        <span className="kicker">{row.kicker}</span>
        <h3>{row.title}</h3>
        <p>{row.text}</p>
      </div>
    </Reveal>
  )
}
