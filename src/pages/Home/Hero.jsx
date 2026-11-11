import Button from '../../components/Button'

const PATH_A = 'M176 1L53.5359 1C52.4313 1 51.5359 1.89543 51.5359 3L51.5359 56C51.5359 57.1046 50.6405 58 49.5359 58L0 58'
const PATH_B = 'M0 1L122.464 1C123.569 1 124.464 1.89543 124.464 3L124.464 56C124.464 57.1046 125.36 58 126.464 58L176 58'

function Lines({ viewBox, d }) {
  return (
    <svg className="lines" viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true">
      <path pathLength="1" d={d} />
      <path className="flow" pathLength="1" d={d} />
    </svg>
  )
}

export default function Hero({ hero }) {
  return (
    <section className="hero">
      <div className="pat" aria-hidden="true"></div>
      <Lines viewBox="0 0 177 159" d={PATH_A} />
      <Lines viewBox="0 0 176 59" d={PATH_B} />
      <div className="bg" aria-hidden="true"></div>
      <div className="wrap">
        <div className="copy">
          <p className="tag rise">{hero.tag}</p>
          <h1 className="rise d1">
            {hero.titleLead}
            <em className="gtext">{hero.titleAccent}</em>
          </h1>
          <p className="lead rise d2">{hero.lead}</p>
          <div className="cta rise d3">
            <Button variant="red" pulse arrow href="#rigs">
              View rig portfolio
            </Button>
            <Button variant="ghost" href="#contact">
              Request a quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
