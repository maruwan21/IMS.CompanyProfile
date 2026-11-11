import Img from '../../components/Img'
import Reveal from '../../components/Reveal'
import { Title } from '../../components/SectionHead'

export default function Founder({ founder }) {
  return (
    <section className="founder">
      <div className="wrap fgrid">
        <Reveal className="fphoto" index={0}>
          <Img name={founder.image} alt={founder.imageAlt} loading="lazy" />
        </Reveal>
        <Reveal index={1}>
          <p className="tag">{founder.tag}</p>
          <Title lead={founder.titleLead} accent={founder.titleAccent} />
          <p className="lead">{founder.lead}</p>
          <div className="points">
            {founder.points.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <p className="who">
            <b>{founder.name}</b>
            {founder.role}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
