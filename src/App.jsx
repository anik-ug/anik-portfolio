import { useEffect, useState } from 'react'
import './App.css'

const featuredProjects = [
  {
    title: 'Distributed Task Queue System',
    description:
      'A backend system for processing tasks asynchronously using RabbitMQ workers. Tasks are stored in MySQL, processed by separate workers, and tracked through their status.',
    meta: 'Java · Spring Boot · RabbitMQ · MySQL · Docker',
    image: '/task-queue.svg',
    link: 'https://github.com/anik-ug/distributed-task-queue-system',
  },
  {
    title: 'Secure Auth',
    description:
      'Authentication and authorization backend with JWT-based security, Spring Security, and protected REST APIs.',
    meta: 'Java · Spring Boot · Spring Security · JWT',
    image: '/security-api.svg',
    link: 'https://github.com/anik-ug/secure-auth',
  },
  {
    title: 'Quiz Application',
    description:
      'A Java-based quiz application built to practice object-oriented programming, collections, input handling, and score calculation.',
    meta: 'Java · OOP · Collections',
    image: '/portfolio-hero.svg',
    link: 'https://github.com/anik-ug/quiz-app',
  },
  {
    title: 'Student Management Console',
    description:
      'A console application for managing student records with CRUD operations and file-based data persistence.',
    meta: 'Java · File I/O · CRUD',
    image: '/portfolio-hero.svg',
    link: 'https://github.com/anik-ug/student-management-console',
  },
]

const quickFacts = [
  { value: '600+', label: 'DSA problems' },
  { value: '9', label: 'Public GitHub repos' },
  { value: '7.81', label: 'CGPA' },
]

const skillChips = [
  'Java',
  'Spring Boot',
  'REST APIs',
  'Spring Security',
  'MySQL',
  'Docker',
  'RabbitMQ',
  'AWS',
  'Linux',
  'JPA / Hibernate',
]

const strengths = [
  'Java, Spring Boot, REST APIs, Spring Security, and JWT authentication',
  'Docker, Linux, AWS EC2, S3, IAM, CloudWatch, Prometheus, and Grafana',
  'MySQL, JPA/Hibernate, SQL, and database design',
  'Data structures and algorithms with 600+ problems solved',
]

const contactLinks = [
  {
    label: 'Email',
    value: 'anik.kumar.iiitr@gmail.com',
    href: 'mailto:anik.kumar.iiitr@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/anik-ug',
    href: 'https://github.com/anik-ug',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anik-kumar-6a8397287',
    href: 'https://www.linkedin.com/in/anik-kumar-6a8397287/',
  },
]

const education = [
  {
    title: 'Indian Institute of Information Technology, Ranchi',
    meta: 'B.Tech in Electronics & Communication Engineering',
    time: '2023 – 2027',
    detail: 'CGPA: 7.81',
  },
]

const experience = [
  {
    title: 'Software Engineer Intern',
    meta: 'Sanvro · Remote',
    time: 'June 2025 – August 2025',
    detail:
      'Worked on backend modules for a patient management application using Java, Spring Boot, MySQL, and REST APIs.',
    bullets: [
      'Built REST APIs for healthcare-related workflows with validation and authentication.',
      'Worked on relational database schemas and SQL queries.',
      'Contributed to backend features used by AI-driven healthcare workflows.',
    ],
  },
]

const highlights = [
  {
    title: 'Certifications',
    points: [
      'AWS Cloud Practitioner Essentials',
      'OWASP Top 10 — Self Study',
      'Master Java — Udemy',
      'Spring Boot — Udemy',
    ],
  },
  {
    title: 'Achievements',
    points: [
      'Top 5% in JEE Main nationwide.',
      '600+ DSA problems solved on LeetCode and GeeksforGeeks.',
      'Built backend projects using Spring Boot, RabbitMQ, Docker, and MySQL.',
    ],
  },
  {
    title: 'GitHub',
    points: [
      '9 public repositories.',
      'Projects include distributed-task-queue-system, secure-auth, quiz-app, and student-management-console.',
      'Regularly building and experimenting with backend technologies.',
    ],
  },
]

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem('theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <main className="page-shell">
      {/* HEADER */}

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">AK</span>

          <span className="brand-copy">
            <strong>Anik Kumar</strong>
            <small>Backend Developer</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(nextTheme)}
          aria-label={`Switch to ${nextTheme} mode`}
          aria-pressed={theme === 'dark'}
        >
          <span className="theme-toggle-track" aria-hidden="true">
            <span className="theme-toggle-thumb">
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
          </span>

          <span className="theme-toggle-copy">
            <span className="theme-toggle-label">Theme</span>
            <strong>
              {theme === 'dark' ? 'Dark mode' : 'Light mode'}
            </strong>
          </span>
        </button>
      </header>

      {/* HERO */}

      <section className="hero-panel" id="top">
        <div className="eyebrow">
          Java · Spring Boot · Backend
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-topline">
              <span className="status-pill">
                Open to opportunities
              </span>

              <span className="hero-location">
                IIIT Ranchi · India
              </span>
            </div>

            <p className="intro">
              Hi, I'm Anik.
            </p>

            <h1>
              I build backend applications with Java and Spring Boot.
            </h1>

            <p className="lede">
              I'm a pre-final year student at IIIT Ranchi interested
              in backend development, system design, and building
              things that work reliably in the real world.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="#projects"
              >
                See my projects
              </a>

              <a
                className="button button-secondary"
                href="/Anik-Kumar-CV.pdf"
                download
              >
                Download CV
              </a>

              <a
                className="button button-secondary"
                href="#contact"
              >
                Get in touch
              </a>
            </div>

            <div
              className="hero-chips"
              aria-label="Technologies"
            >
              {skillChips.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* HERO CARD */}

          <aside
            className="hero-card"
            aria-label="Profile highlights"
          >
            <div className="hero-visual-frame">
              <img
                className="hero-visual"
                src="/portfolio-hero.svg"
                alt="Anik Kumar portfolio"
              />
            </div>

            <div className="hero-card-header">
              <p className="project-meta">
                A few numbers
              </p>

              <h2>
                Things I've been working on.
              </h2>
            </div>

            <div className="stat-grid">
              {quickFacts.map((fact) => (
                <div className="stat" key={fact.label}>
                  <span className="stat-value">
                    {fact.value}
                  </span>

                  <span className="stat-label">
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="hero-note">
              Currently learning more about distributed systems,
              cloud deployment, and backend architecture.
            </div>
          </aside>
        </div>
      </section>

      {/* ABOUT */}

      <section className="section two-column" id="about">
        <div>
          <p className="section-label">
            About me
          </p>

          <h2>
            I'm interested in backend engineering and solving
            practical problems.
          </h2>
        </div>

        <div className="section-copy">
          <p>
            I'm pursuing a B.Tech in Electronics & Communication
            Engineering at IIIT Ranchi. Most of my recent work has
            been around Java, Spring Boot, REST APIs, databases,
            and authentication.
          </p>

          <p>
            Outside of projects, I spend a lot of time solving DSA
            problems and learning how backend systems work — from
            database design and APIs to queues, Docker, and cloud
            deployment.
          </p>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-label">
            Projects
          </p>

          <h2>
            Some things I've built.
          </h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              <div className="project-image-frame">
                <img
                  className="project-image"
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <p className="project-meta">
                {project.meta}
              </p>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View project <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}

      <section
        className="section"
        id="experience"
      >
        <div className="section-heading">
          <p className="section-label">
            Experience & Education
          </p>

          <h2>
            Where I've studied and worked.
          </h2>
        </div>

        <div className="timeline-grid">
          {education.map((item) => (
            <article
              className="timeline-card"
              key={item.title}
            >
              <p className="project-meta">
                Education
              </p>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.meta}
              </p>

              <p className="timeline-time">
                {item.time}
              </p>

              <p>
                {item.detail}
              </p>
            </article>
          ))}

          {experience.map((item) => (
            <article
              className="timeline-card"
              key={item.title}
            >
              <p className="project-meta">
                Experience
              </p>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.meta}
              </p>

              <p className="timeline-time">
                {item.time}
              </p>

              <p>
                {item.detail}
              </p>

              <ul className="bullet-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="section">
        <div className="section-heading">
          <p className="section-label">
            More about me
          </p>

          <h2>
            A few other things worth mentioning.
          </h2>
        </div>

        <div className="project-grid project-grid-alt">
          {highlights.map((item) => (
            <article
              className="project-card"
              key={item.title}
            >
              <p className="project-meta">
                {item.title}
              </p>

              <h3>
                {item.title}
              </h3>

              <ul className="bullet-list">
                {item.points.map((point) => (
                  <li key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS + CONTACT */}

      <section className="section split-panel">
        <div className="skills-card">
          <p className="section-label">
            Tech stack
          </p>

          <h2>
            Tools I work with.
          </h2>

          <ul className="bullet-list">
            {strengths.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="contact-card"
          id="contact"
        >
          <p className="section-label">
            Contact
          </p>

          <h2>
            Want to talk about a project or opportunity?
          </h2>

          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.label === 'Email'
                    ? undefined
                    : '_blank'
                }
                rel={
                  link.label === 'Email'
                    ? undefined
                    : 'noreferrer'
                }
              >
                <span>
                  {link.label}
                </span>

                <strong>
                  {link.value}
                </strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="site-footer">
        <p>
          Built by Anik Kumar · Java, Spring Boot & a lot of
          debugging.
        </p>

        <a href="#top">
          Back to top
        </a>
      </footer>
    </main>
  )
}

export default App
