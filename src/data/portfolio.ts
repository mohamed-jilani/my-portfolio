// ─────────────────────────────────────────────────────────────────────────────
//  Portfolio Data — Edit this file to update content without touching UI code
// ─────────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  video?: string // YouTube video ID
  github?: string
  live?: string
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies: string[]
}

export interface Skill {
  name: string
  level: number // 0-100
}

export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export interface Education {
  degree: string
  school: string
  period: string
  location: string
  description?: string
}

export interface Certification {
  title: string
  issuer: string
  year: string
  icon?: string
}

// ── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'fullstack-erp',
    title: 'Enterprise Resource Planning System',
    description:
      'A scalable fullstack ERP web application built with Spring Boot and React, featuring REST APIs, role-based access, and real-time dashboards.',
    longDescription:
      'Developed during my internship at Soteb Modula, this ERP system modernises business operations with a clean React frontend and a robust Spring Boot backend. Features include multi-role authentication, inventory management, automated reporting, and full CI/CD deployment via GitLab pipelines.',
    technologies: ['Spring Boot', 'React', 'PostgreSQL', 'GitLab CI', 'Docker', 'REST API'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 'kpi-dashboard',
    title: 'KPI Analytics Dashboard',
    description:
      'A Python/Flask web application for real-time business KPI monitoring, automated data processing, and interactive visualisations.',
    longDescription:
      'Built for KPI Associates, this dashboard aggregates data from multiple sources, applies automated ETL pipelines in Python, and presents actionable insights through interactive charts. Features include scheduled reports, CSV exports, and an admin panel.',
    technologies: ['Python', 'Flask', 'Pandas', 'Chart.js', 'MySQL', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 'laravel-cms',
    title: 'Laravel Content Management System',
    description:
      'A feature-rich CMS built with Laravel following strict MVC architecture, supporting multi-user roles, media management, and SEO tools.',
    longDescription:
      'Designed and implemented at DYNO & Motiva Systems, this CMS provides a clean admin interface for non-technical teams to manage website content, users, and media. Includes authentication, audit logs, and a public-facing REST API.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Blade', 'JavaScript', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=800&q=80',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 'mobile-expense-tracker',
    title: 'Mobile Expense Tracker',
    description:
      'A cross-platform mobile application for personal finance tracking with budget alerts, category breakdown, and data visualisation.',
    longDescription:
      "Developed as part of my Master's degree project, this mobile app lets users log daily expenses, set budgets, and receive push notifications when approaching limits. Features offline support via SQLite and sync with a NestJS backend.",
    technologies: ['React Native', 'NestJS', 'SQLite', 'Node.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 'api-gateway',
    title: 'Microservices API Gateway',
    description:
      'A lightweight API gateway built with Node.js and Express to route, authenticate, and load-balance microservice traffic.',
    longDescription:
      'A personal project exploring microservices architecture, featuring JWT authentication middleware, rate limiting, request logging, and dynamic routing. Deployed with Docker Compose and Kubernetes basics.',
    technologies: ['Node.js', 'Express', 'Docker', 'Kubernetes', 'JWT', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    github: 'https://github.com',
    featured: false,
  },
]

// ── Experience ────────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: 'soteb',
    company: 'Soteb Modula',
    role: 'Fullstack Developer Intern',
    period: '2024',
    location: 'France',
    description: [
      'Developed a fullstack web application using Spring Boot (backend) and React (frontend)',
      'Designed and implemented RESTful APIs consumed by the frontend and third-party systems',
      'Set up CI/CD pipelines with GitLab CI for automated testing and deployment',
      'Worked in an Agile Scrum environment with bi-weekly sprints and daily standups',
    ],
    technologies: ['Spring Boot', 'React', 'PostgreSQL', 'GitLab CI', 'Docker', 'Agile Scrum'],
  },
  {
    id: 'kpi',
    company: 'KPI Associates',
    role: 'Software Developer Intern',
    period: '2023',
    location: 'Tunisia',
    description: [
      'Built a Flask web application with interactive KPI dashboards for business monitoring',
      'Automated data ingestion and transformation pipelines using Python and Pandas',
      'Created scheduled reporting scripts and Excel/CSV export functionality',
      'Integrated with external data sources via REST APIs and SQL queries',
    ],
    technologies: ['Python', 'Flask', 'Pandas', 'MySQL', 'Chart.js', 'REST API'],
  },
  {
    id: 'dyno',
    company: 'DYNO & Motiva Systems',
    role: 'Web Developer Intern',
    period: '2023',
    location: 'Tunisia',
    description: [
      'Developed a full-featured Laravel web application following MVC architecture',
      'Implemented user authentication, role management, and audit logging',
      'Built reusable Blade components and responsive UI with Bootstrap',
      'Collaborated with the design team to translate Figma mockups into production code',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Bootstrap', 'JavaScript'],
  },
  {
    id: 'tunisie-telecom',
    company: 'Tunisie Telecom',
    role: 'Network Technician Intern',
    period: '2022',
    location: 'Tunisia',
    description: [
      'Assisted in maintaining and troubleshooting network infrastructure',
      'Gained hands-on experience with telecom equipment and network protocols',
      'Documented network topology and contributed to internal knowledge base',
    ],
    technologies: ['Networking', 'TCP/IP', 'VLAN', 'Cisco', 'Linux'],
  },
]

// ── Skills ────────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'Python', level: 78 },
      { name: 'PHP', level: 72 },
      { name: 'C / C++', level: 60 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'Layers',
    skills: [
      { name: 'Spring Boot', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'NestJS', level: 72 },
      { name: 'Laravel', level: 70 },
      { name: 'Flask', level: 68 },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 68 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: 'Terminal',
    skills: [
      { name: 'Git / GitLab', level: 88 },
      { name: 'Docker', level: 75 },
      { name: 'GitLab CI / CD', level: 72 },
      { name: 'Jenkins', level: 50 },
      { name: 'Kubernetes', level: 45 },
    ],
  },
]

// ── Education ─────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: "Engineering Degree — Information Systems Architecture",
    school: 'ISTY (Institut des Sciences et Techniques des Yvelines)',
    period: '2024 – Present',
    location: 'Versailles, France',
    description:
      'Specialising in software architecture, distributed systems, cloud computing, and enterprise application development.',
  },
  {
    degree: "Master's Degree — Mobile Application Development",
    school: 'Higher Institute of Technological Studies',
    period: '2022 – 2024',
    location: 'Tunisia',
    description:
      'Focused on cross-platform mobile development, UX/UI principles, backend integration, and agile methodologies.',
  },
  {
    degree: "Bachelor's Degree — Information Technology",
    school: 'Higher Institute of Technological Studies',
    period: '2019 – 2022',
    location: 'Tunisia',
    description:
      'Foundations of software engineering, algorithms, databases, web development, and networking.',
  },
]

// ── Certifications ────────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: 'Scrum Foundation Professional Certificate',
    issuer: 'CertiProf',
    year: '2023',
  },
  {
    title: 'Ethics of Data Science',
    issuer: 'University of Michigan',
    year: '2023',
  },
  {
    title: 'EF SET English Certificate — C1 Advanced',
    issuer: 'EF Education First',
    year: '2022',
  },
]
