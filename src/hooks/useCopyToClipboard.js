import { useCallback, useRef, useState } from 'react'

// status: 'idle' | 'copied' | 'failed'
export default function useCopyToClipboard() {
  const [status, setStatus] = useState('idle')
  const timer = useRef(0)

  const copy = useCallback((value) => {
    const finish = (s) => {
      setStatus(s)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setStatus('idle'), 1600)
    }
    try {
      navigator.clipboard.writeText(value).then(
        () => finish('copied'),
        () => setStatus('failed'),
      )
    } catch (e) {
      setStatus('failed')
    }
  }, [])

  return { status, copy }
}
