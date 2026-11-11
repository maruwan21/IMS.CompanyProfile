import ContactCard from '../../components/ContactCard'
import Reveal from '../../components/Reveal'
import { Title } from '../../components/SectionHead'

export default function Contact({ section, contact }) {
  return (
    <section className="contact" id="contact">
      <div className="wrap cgrid">
        <Reveal index={0}>
          <p className="tag">{section.tag}</p>
          <Title lead={section.titleLead} accent={section.titleAccent} />
          <p className="lead">{section.lead}</p>
        </Reveal>
        <div className="cinfo">
          <ContactCard index={0} icon="pin" label="Address" value={contact.address} />
          <ContactCard
            index={1}
            icon="phone"
            label="Phone"
            value={contact.phone}
            href={contact.phoneHref}
            copy={contact.phone}
            copyMessage="Phone number copied"
            copyLabel="Copy phone number"
          />
          <ContactCard
            index={2}
            icon="mail"
            label="Email"
            value={contact.email}
            href={contact.emailHref}
            copy={contact.email}
            copyMessage="Email address copied"
            copyLabel="Copy email address"
          />
        </div>
      </div>
    </section>
  )
}
