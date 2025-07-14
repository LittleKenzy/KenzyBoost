'use client'

import { motion } from "motion/react"

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedXPosition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedXReversePosition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateFlip({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      whileInView={{ rotate: 180 }}
      transition={{ duration: 2 }}>
      {children}
    </motion.div>
  )
}

export function AnimateDownToUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export function AnimateUpToDown({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export function AnimateScale({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}