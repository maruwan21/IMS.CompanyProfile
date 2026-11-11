// specs: [[label, value], ...]
export default function SpecList({ specs }) {
  return (
    <dl>
      {specs.map(([label, value]) => (
        <SpecRow key={label} label={label} value={value} />
      ))}
    </dl>
  )
}

function SpecRow({ label, value }) {
  return (
    <>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </>
  )
}
