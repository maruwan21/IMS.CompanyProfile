import ClientMarquee from '../../components/ClientMarquee'
import SectionHead from '../../components/SectionHead'

export default function Clients({ section, clients }) {
  return (
    <section className="clients" id="clients">
      <div className="wrap">
        <SectionHead tag={section.tag} lead={section.titleLead} accent={section.titleAccent} />
        <ClientMarquee clients={clients} />
      </div>
    </section>
  )
}
