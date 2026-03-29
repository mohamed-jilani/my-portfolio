import { useEffect, useRef, useState } from 'react'
import { Mail, Send, CheckCircle, MapPin } from 'lucide-react'

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

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
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')
    // Simulate sending (replace with real API call)
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jilanimed07@gmail.com',
      href: 'mailto:jilanimed07@gmail.com',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jilani-m',
      href: 'https://linkedin.com',
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Versailles, France',
      href: null,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-primary text-sm font-mono font-medium mb-2 tracking-wider">06 / CONTACT</p>
          <h2 className="section-heading mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subheading">
            Looking for a Fullstack Java Developer apprentice? I'd love to hear from you.
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="reveal">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm actively seeking a <strong className="text-foreground">1–2 year apprenticeship</strong> as a Fullstack Java Developer in France.
                If you have an opportunity or simply want to chat about tech, feel free to reach out.
              </p>
            </div>

            {contacts.map(({ icon: Icon, label, value, href, color, bg }) => (
              <div key={label} className="reveal flex items-center gap-4 group">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="reveal mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Available from September 2025</span>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl border border-border bg-card">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 active:scale-98 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sent' ? (
                  <>
                    <CheckCircle size={15} />
                    Message sent!
                  </>
                ) : status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-xs text-destructive text-center">Failed to send. Please try emailing directly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
