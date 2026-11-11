import ExpertiseCard from '../../components/ExpertiseCard'
import SectionHead from '../../components/SectionHead'

export default function Expertise({ section, items }) {
  return (
    <section id="expertise">
      <div className="wrap">
        <SectionHead tag={section.tag} lead={section.titleLead} accent={section.titleAccent} note={section.note} />
        <div className="exp">
          {items.map((item, i) => (
            <ExpertiseCard key={item.no} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
