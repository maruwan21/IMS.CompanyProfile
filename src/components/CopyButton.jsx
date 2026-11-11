import useCopyToClipboard from '../hooks/useCopyToClipboard'

export default function CopyButton({ value, message, label }) {
  const { status, copy } = useCopyToClipboard()
  const text = status === 'copied' ? 'Copied' : status === 'failed' ? 'Select text' : 'Copy'
  return (
    <>
      <button className="cp" type="button" aria-label={label} onClick={() => copy(value)}>
        {text}
      </button>
      <span className="sr" role="status" aria-live="polite">
        {status === 'copied' ? message : ''}
      </span>
    </>
  )
}
