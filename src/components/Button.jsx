// variant: 'red' | 'dark' | 'ghost'. Dirender sebagai <a> (link/anchor).
export default function Button({ variant = 'red', pulse = false, arrow = false, className = '', children, ...props }) {
  const cls = ['btn', `btn-${variant}`, pulse && 'btn-pulse', className].filter(Boolean).join(' ')
  return (
    <a className={cls} {...props}>
      {children}
      {arrow && (
        <>
          {' '}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </>
      )}
    </a>
  )
}
