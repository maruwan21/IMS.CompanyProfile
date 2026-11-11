import CopyButton from './CopyButton'
import Icon from './Icon'
import Reveal from './Reveal'

// Satu kartu kontak: ikon, label, nilai (teks atau link), dan tombol Copy opsional.
export default function ContactCard({ icon, label, value, href, copy, copyMessage, copyLabel, index }) {
  return (
    <Reveal index={index} lift>
      <span className="ico">
        <Icon name={icon} />
      </span>
      <p style={{ margin: 0 }}>
        <small>{label}</small>
        {href ? (
          <a className="v" href={href}>
            {value}
          </a>
        ) : (
          <span className="v">{value}</span>
        )}
      </p>
      {copy && <CopyButton value={copy} message={copyMessage} label={copyLabel} />}
    </Reveal>
  )
}
