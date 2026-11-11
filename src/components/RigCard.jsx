import Img from './Img'
import Reveal from './Reveal'
import SpecList from './SpecList'

export default function RigCard({ rig, index }) {
  return (
    <Reveal as="article" className="rig" index={index} lift>
      <div className="im">
        <Img
          name={rig.image}
          alt={rig.imageAlt}
          loading="lazy"
          style={rig.objectPosition ? { objectPosition: rig.objectPosition } : undefined}
        />
      </div>
      <h3>{rig.name}</h3>
      <p className="client">
        {rig.clientLabel}: <b>{rig.clients}</b>
      </p>
      <SpecList specs={rig.specs} />
    </Reveal>
  )
}
