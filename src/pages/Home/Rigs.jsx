import RigCard from '../../components/RigCard'
import SectionHead from '../../components/SectionHead'

export default function Rigs({ section, rigs }) {
  return (
    <section id="rigs">
      <div className="wrap">
        <SectionHead tag={section.tag} lead={section.titleLead} accent={section.titleAccent} note={section.note} />
        <div className="rigs">
          {rigs.map((rig, i) => (
            <RigCard key={rig.name} rig={rig} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
