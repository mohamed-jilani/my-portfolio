import { useEffect, useRef, useState } from 'react'
import { X, ExternalLink, Play } from 'lucide-react'

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
import { projects, type Project } from '../../data/portfolio'

function TechTag({ tech }: { tech: string }) {
  return <span className="tech-tag">{tech}</span>
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur text-muted-foreground hover:text-foreground hover:bg-background transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Video embed */}
          {project.video && (
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${project.video}`}
                title={project.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          )}

          {/* Tech stack */}
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => <TechTag key={t} tech={t} />)}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <GithubIcon size={14} /> GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      className="project-card group cursor-pointer rounded-2xl border border-border bg-card overflow-hidden"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        {project.video && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center">
              <Play size={18} className="text-primary-foreground ml-0.5" />
            </div>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
            Featured
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((t) => <TechTag key={t} tech={t} />)}
          {project.technologies.length > 3 && (
            <span className="tech-tag">+{project.technologies.length - 3}</span>
          )}
        </div>
        <div className="flex items-center gap-3 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={15} />
            </a>
          )}
          <span className="text-xs text-muted-foreground/60 ml-auto group-hover:text-primary transition-colors">
            View details →
          </span>
        </div>
      </div>
    </div>
  )
}

const FILTERS = ['All', 'Featured', 'Java', 'Python', 'PHP', 'Mobile']

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selected, setSelected] = useState<Project | null>(null)
  const [filter, setFilter] = useState('All')

  const filtered = projects.filter((p) => {
    if (filter === 'All') return true
    if (filter === 'Featured') return p.featured
    return p.technologies.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
  })

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
    <>
      <section id="projects" ref={sectionRef} className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 reveal">
            <p className="text-primary text-sm font-mono font-medium mb-2 tracking-wider">02 / PROJECTS</p>
            <h2 className="section-heading mb-3">
              What I've <span className="gradient-text">Built</span>
            </h2>
            <p className="section-subheading">
              A selection of projects from internships and personal development.
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded mt-4" />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8 reveal">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  filter === f
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <div key={project.id} className="reveal">
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-sm">No projects match this filter.</p>
            </div>
          )}
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
