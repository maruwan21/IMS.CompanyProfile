import Reveal from '../../components/Reveal'
import { Title } from '../../components/SectionHead'

export default function About({ about }) {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="grid">
          <Reveal index={0}>
            <p className="tag">{about.tag}</p>
            <Title lead={about.titleLead} accent={about.titleAccent} />
            <blockquote className="vision">{about.vision}</blockquote>
            <p className="lead">{about.lead}</p>
          </Reveal>
          <ul className="bmsl">
            {about.bmsl.map((b, i) => (
              <Reveal as="li" key={b.title} index={i}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
        <ul className="facts" aria-label="Company at a glance">
          {about.facts.map((f, i) => (
            <Reveal as="li" key={f.label} index={i} lift>
              <b>{f.value}</b>
              <span>{f.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
