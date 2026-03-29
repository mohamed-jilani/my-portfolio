import { useEffect, useRef } from 'react'
import { Code2, Server, Layers, GitBranch } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    label: 'Fullstack Dev',
    desc: 'Java · Spring Boot · React',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Server,
    label: 'Backend Focus',
    desc: 'REST APIs · Microservices',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Layers,
    label: 'Architecture',
    desc: 'Scalable · Distributed Systems',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: GitBranch,
    label: 'DevOps',
    desc: 'CI/CD · Docker · GitLab',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p className="text-primary text-sm font-mono font-medium mb-2 tracking-wider">01 / ABOUT</p>
          <h2 className="section-heading mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Story */}
          <div className="space-y-5">
            <div className="reveal">
              <p className="text-foreground/90 leading-relaxed text-base">
                I'm <strong className="text-foreground font-semibold">Mohamed Jilani</strong>, a software engineering student
                specialising in <span className="text-primary font-medium">Information Systems Architecture</span> at
                ISTY (Institut des Sciences et Techniques des Yvelines), Versailles, France.
              </p>
            </div>

            <div className="reveal">
              <p className="text-muted-foreground leading-relaxed text-base">
                Before France, I earned a <span className="text-foreground/80">Master's degree in Mobile Application Development</span> and
                a Bachelor's in Information Technology. That foundation gave me a strong grasp of the full software lifecycle —
                from mobile UI to distributed backend systems.
              </p>
            </div>

            <div className="reveal">
              <p className="text-muted-foreground leading-relaxed text-base">
                My professional journey includes internships building fullstack applications with
                <span className="text-primary font-medium"> Spring Boot & React</span>,
                analytics dashboards with <span className="text-primary font-medium">Python & Flask</span>,
                and Laravel CMS platforms — all in real production environments with Agile Scrum workflows.
              </p>
            </div>

            <div className="reveal">
              <p className="text-muted-foreground leading-relaxed text-base">
                I'm passionate about <span className="text-foreground/80">scalable architectures</span>, clean API design,
                and the DevOps culture. Currently seeking a
                <strong className="text-foreground font-semibold"> 1–2 year apprenticeship</strong> as a Fullstack Java Developer
                where I can contribute meaningfully while continuing to grow.
              </p>
            </div>

            {/* Languages spoken */}
            <div className="reveal pt-2">
              <div className="flex flex-wrap gap-2">
                {['French 🇫🇷', 'English C1 🇬🇧', 'Arabic 🇹🇳'].map((lang) => (
                  <span key={lang} className="tech-tag">{lang}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc, color, bg }, i) => (
              <div
                key={label}
                className="reveal p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon size={18} className={color} />
                </div>
                <p className="text-sm font-semibold text-foreground mb-0.5">{label}</p>
                <p className="text-xs text-muted-foreground font-mono">{desc}</p>
              </div>
            ))}

            {/* Stats card */}
            <div className="reveal col-span-2 p-5 rounded-xl border border-border bg-card">
              <div className="grid grid-cols-3 divide-x divide-border">
                {[
                  { value: '4+', label: 'Internships' },
                  { value: '5+', label: 'Projects' },
                  { value: '3+', label: 'Years Coding' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center px-4 first:pl-0 last:pr-0">
                    <p className="text-2xl font-bold gradient-text">{value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
