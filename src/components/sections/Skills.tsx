import { useEffect, useRef, useState } from 'react'
import { Code2, Layers, Database, Terminal } from 'lucide-react'
import { skillCategories } from '../../data/portfolio'

const iconMap: Record<string, React.ComponentType<{ size: number; className?: string }>> = {
  Code2,
  Layers,
  Database,
  Terminal,
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [width, setWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setWidth(level), delay)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [level, delay])

  const getColor = () => {
    if (level >= 80) return 'from-primary to-accent'
    if (level >= 65) return 'from-primary/80 to-primary'
    return 'from-muted-foreground to-primary/60'
  }

  return (
    <div ref={barRef} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${getColor()} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll('.reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 80)
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
    <section id="skills" ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-primary text-sm font-mono font-medium mb-2 tracking-wider">04 / SKILLS</p>
          <h2 className="section-heading mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subheading">
            Languages, frameworks, databases, and tools I work with.
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded mt-4" />
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] ?? Code2
            return (
              <div
                key={cat.category}
                className="reveal p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cat.category}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={(ci * 100) + (si * 120)}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tool badges strip */}
        <div className="reveal mt-8 p-6 rounded-2xl border border-border bg-card">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Agile Scrum', 'REST API', 'Figma', 'Postman', 'VS Code', 'IntelliJ IDEA',
              'Linux', 'Swagger', 'JWT', 'Maven', 'Gradle', 'JUnit', 'Hibernate', 'JPA',
            ].map((tool) => (
              <span key={tool} className="tech-tag">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
