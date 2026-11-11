import Reveal from './Reveal'

// <h2>{lead}<em>{accent}</em>{tail}</h2>
export function Title({ lead, accent, tail }) {
  return (
    <h2>
      {lead}
      <em>{accent}</em>
      {tail}
    </h2>
  )
}

export default function SectionHead({ tag, lead, accent, tail, note }) {
  return (
    <Reveal className="sec-head">
      <div>
        <p className="tag">{tag}</p>
        <Title lead={lead} accent={accent} tail={tail} />
      </div>
      {note && <p>{note}</p>}
    </Reveal>
  )
}
