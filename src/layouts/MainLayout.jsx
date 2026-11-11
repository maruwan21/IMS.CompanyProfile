import { useCallback, useState } from 'react'
import { Outlet } from 'react-router-dom'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import Header from '../components/Header'
import useAsync from '../hooks/useAsync'
import useSmoothScroll from '../hooks/useSmoothScroll'
import { getCompany } from '../services/companyService'
import { getContact } from '../services/contactService'

export default function MainLayout() {
  const [open, setOpen] = useState(false)
  const closeMenu = useCallback(() => setOpen(false), [])
  useSmoothScroll(closeMenu)

  const { data: company } = useAsync(getCompany)
  const { data: contact } = useAsync(getContact)

  if (!company || !contact) return null

  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Header brand={company.brand} open={open} setOpen={setOpen} />
      <main id="top" tabIndex={-1}>
        <Outlet context={{ company, contact }} />
      </main>
      <Footer company={company} contact={contact} />
      <BackToTop />
    </>
  )
}
