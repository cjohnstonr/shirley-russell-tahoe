import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE } from '../lib/motion'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

/* Scroll-triggered fade-and-rise. Fires once, honors prefers-reduced-motion
   via the app-level <MotionConfig reducedMotion="user">. */
export default function Reveal({ children, className, delay = 0, y = 28 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
