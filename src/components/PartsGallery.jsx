import Img from './Img'
import Reveal from './Reveal'

export default function PartsGallery({ parts }) {
  return (
    <Reveal className="parts">
      <div>
        <h3>
          {parts.titleLead}
          <em style={{ fontStyle: 'normal', color: 'var(--red)' }}>{parts.titleAccent}</em>
        </h3>
        <p>{parts.text}</p>
      </div>
      <div className="pg">
        {parts.images.map((p) => (
          <div key={p.image}>
            <Img name={p.image} alt={p.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </Reveal>
  )
}
