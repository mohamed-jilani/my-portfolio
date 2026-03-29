import { useEffect, useRef } from 'react'
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { experiences } from '../../data/portfolio'

const companyColors: Record<string, string> = {
  soteb: 'border-primary bg-primary',
  kpi: 'border-accent bg-accent',
  dyno: 'border-primary bg-primary',
  'tunisie-telecom': 'border-muted-foreground bg-muted-foreground',
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-primary text-sm font-mono font-medium mb-2 tracking-wider">03 / EXPERIENCE</p>
          <h2 className="section-heading mb-3">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <p className="section-subheading">
            Hands-on experience across France and Tunisia building production applications.
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              const dotColor = companyColors[exp.id] ?? 'border-border bg-muted'

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-5 z-10 w-3 h-3 rounded-full border-2 ${
                      exp.id === 'soteb' ? 'border-primary bg-primary' :
                      exp.id === 'kpi' ? 'border-accent bg-accent' :
                      exp.id === 'dyno' ? 'border-primary bg-primary/60' :
                      'border-muted-foreground bg-muted-foreground/60'
                    }`}
                  />

                  {/* Card */}
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className={`reveal${isLeft ? '-left' : '-right'} p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group text-left`}
                    >
                      {/* Header */}
                      <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} gap-1 mb-4`}>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-sm font-medium text-primary">{exp.role}</p>
                        <div className={`flex flex-wrap gap-3 text-xs text-muted-foreground font-mono ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="flex items-center gap-1">
                            <Calendar size={11} /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} /> {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((d, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                            <CheckCircle2 size={13} className="text-primary flex-shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      {/* Tech */}
                      <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.technologies.map((t) => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty side for spacing on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
