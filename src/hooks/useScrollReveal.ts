import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((child) => {
        child.classList.add('visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((child) => {
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
