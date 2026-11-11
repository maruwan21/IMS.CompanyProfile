import Img from './Img'

export default function Footer({ company, contact }) {
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div className="f1">
            <Img name="logo" alt="" />
            <div>
              <h3>{company.name}</h3>
              <p style={{ margin: 0, maxWidth: '38ch' }}>{company.tagline}</p>
            </div>
          </div>
          <div>
            <h3>Pages</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#rigs">Rigs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <address>
              {contact.addressLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={contact.emailHref}>{contact.email}</a>
            </address>
          </div>
        </div>
        <small>{company.copyright}</small>
      </div>
    </footer>
  )
}
