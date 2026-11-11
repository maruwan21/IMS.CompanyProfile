import Img from './Img'

// Logo digandakan agar loop tanpa putus; salinan disembunyikan dari pembaca layar.
export default function ClientMarquee({ clients }) {
  return (
    <div className="marquee" role="group" aria-label="Client logos">
      <div className="track">
        {clients.map((c) => (
          <div key={c.image}>
            <Img name={c.image} alt={c.name} loading="eager" />
          </div>
        ))}
        {clients.map((c) => (
          <div key={`${c.image}-dup`} aria-hidden="true">
            <Img name={c.image} alt="" loading="eager" />
          </div>
        ))}
      </div>
    </div>
  )
}
