import { useEffect, useRef } from 'react'

export function useScrollAnimation(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    )

    // Observe all .reveal elements inside the container
    const revealEls = el.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    revealEls.forEach((el) => observer.observe(el))

    // Also observe the container itself if it has a reveal class
    if (el.classList.contains('reveal') || el.classList.contains('reveal-left') || el.classList.contains('reveal-right')) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Stagger children
            const children = (entry.target as HTMLElement).querySelectorAll('.reveal, .reveal-left, .reveal-right')
            children.forEach((child, i) => {
              ;(child as HTMLElement).style.transitionDelay = `${i * 80}ms`
              child.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}
