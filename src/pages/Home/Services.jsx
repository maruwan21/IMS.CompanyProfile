import PartsGallery from '../../components/PartsGallery'
import SectionHead from '../../components/SectionHead'
import ServiceRow from '../../components/ServiceRow'

export default function Services({ section, services }) {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <SectionHead tag={section.tag} lead={section.titleLead} accent={section.titleAccent} tail={section.titleTail} />
        {services.rows.map((row) => (
          <ServiceRow key={row.kicker} row={row} />
        ))}
        <PartsGallery parts={services.parts} />
      </div>
    </section>
  )
}
