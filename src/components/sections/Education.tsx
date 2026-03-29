import { useEffect, useRef } from 'react'
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'
import { education, certifications } from '../../data/portfolio'

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll('.reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 100)
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
    <section id="education" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-primary text-sm font-mono font-medium mb-2 tracking-wider">05 / EDUCATION</p>
          <h2 className="section-heading mb-3">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="section-subheading">
            Degrees, certifications, and continuous learning.
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Education — spans 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6 reveal">Degrees</h3>
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className="reveal group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{edu.school}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-mono mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} /> {edu.location}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications — spans 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6 reveal">Certifications</h3>
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="reveal group p-5 rounded-2xl border border-border bg-card hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Award size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground leading-snug mb-1 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs font-mono text-muted-foreground/60 mt-0.5">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Currently learning */}
            <div className="reveal p-5 rounded-2xl border border-dashed border-primary/30 bg-primary/5">
              <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Currently learning</p>
              <div className="flex flex-wrap gap-1.5">
                {['Kubernetes', 'Spring Cloud', 'AWS', 'Kafka'].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
