import Icon from './Icon'
import Reveal from './Reveal'

export default function ExpertiseCard({ item, index }) {
  return (
    <Reveal as="article" index={index} lift>
      <div className="top">
        <span className={item.turn ? 'ico turn' : 'ico'}>
          <Icon name={item.icon} />
        </span>
        <small>{item.no}</small>
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </Reveal>
  )
}
