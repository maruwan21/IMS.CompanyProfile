import { useOutletContext } from 'react-router-dom'
import useAsync from '../../hooks/useAsync'
import { getClients } from '../../services/clientService'
import { getExpertise } from '../../services/expertiseService'
import { getRigs } from '../../services/rigService'
import { getServices } from '../../services/servicesService'
import About from './About'
import Clients from './Clients'
import Contact from './Contact'
import Expertise from './Expertise'
import Founder from './Founder'
import Hero from './Hero'
import Rigs from './Rigs'
import Services from './Services'

export default function Home() {
  const { company, contact } = useOutletContext()
  const { data: expertise } = useAsync(getExpertise)
  const { data: services } = useAsync(getServices)
  const { data: rigs } = useAsync(getRigs)
  const { data: clients } = useAsync(getClients)

  return (
    <>
      <Hero hero={company.hero} />
      <About about={company.about} />
      <Founder founder={company.founder} />
      {expertise && <Expertise section={company.sections.expertise} items={expertise} />}
      {services && <Services section={company.sections.services} services={services} />}
      {rigs && <Rigs section={company.sections.rigs} rigs={rigs} />}
      {clients && <Clients section={company.sections.clients} clients={clients} />}
      <Contact section={company.sections.contact} contact={contact} />
    </>
  )
}
