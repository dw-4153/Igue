import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`px-5 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto scroll-mt-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
