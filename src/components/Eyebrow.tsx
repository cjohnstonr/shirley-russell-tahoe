import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  tone?: 'teal' | 'ivory'
  className?: string
}

/* Section kicker: hairline rule + tracked small caps */
export default function Eyebrow({ children, tone = 'teal', className = '' }: Props) {
  return (
    <p
      className={`eyebrow flex items-center gap-4 ${
        tone === 'teal' ? 'text-teal' : 'text-seafoam'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-px w-10 ${tone === 'teal' ? 'bg-teal/50' : 'bg-seafoam/50'}`}
      />
      <span>{children}</span>
    </p>
  )
}
