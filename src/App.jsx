import { useEffect, useState } from 'react'
import './App.css'

const featuredProjects = [
  {
    title: 'Distributed Task Queue System',
    description:
      'Distributed task processing platform built with Spring Boot, RabbitMQ, MySQL, Docker, and JPA/Hibernate. Includes secure REST APIs, retries, manual acknowledgements, worker isolation, and task status tracking.',
    meta: 'Java, Spring Boot, RabbitMQ, MySQL, Docker',
    image: '/task-queue.svg',
  },
  {
    title: 'Quiz Application',
    description:
      'Console-based Java quiz application with OOP, collections, answer validation, and automated score calculation.',
    meta: 'Java, OOP, Collections, Spring Boot, MySQL',
    image: '/security-api.svg',
  },
  {
    title: 'Student Management Console',
    description:
      'Public Java project focused on console workflows, file persistence, and structured CRUD-style management.',
    meta: 'Public GitHub repo, Java, file persistence',
    image: '/portfolio-hero.svg',
  },
]

const quickFacts = [
  { value: '600+', label: 'DSA problems solved' },
  { value: '9', label: 'Public repositories' },
  { value: '7.81', label: 'Current CGPA' },
]

const skillChips = [
  'Java',
  'Spring Boot',
  'REST APIs',
  'JWT Security',
  'MySQL',
  'Docker',
  'RabbitMQ',
  'AWS',
  'Linux',
  'JPA/Hibernate',
]

const strengths = [
  'Java, Spring Boot, REST APIs, JWT authentication, and microservices',
  'Docker, Linux, AWS EC2, IAM, S3, CloudWatch, Prometheus, and Grafana',
  'MySQL, JPA/Hibernate, and relational schema design',
  'DSA with 600+ solved problems across LeetCode and GeeksforGeeks',
]

const contactLinks = [
  { label: 'Email', value: 'anik.kumar.iiitr@gmail.com', href: 'mailto:anik.kumar.iiitr@gmail.com' },
  { label: 'GitHub', value: 'github.com/anik-ug', href: 'https://github.com/anik-ug' },
  { label: 'LinkedIn', value: 'linkedin.com/in/anik-kumar-6a8397287', href: 'https://www.linkedin.com/in/anik-kumar-6a8397287/' },
]

const education = [
  {
    title: 'Indian Institute Of Information Technology, Ranchi',
    meta: 'B.Tech - Electronics & Communication Engineering',
    time: 'Aug. 2023 – May 2027',
    detail: 'CGPA: 7.81',
  },
]

const experience = [
  {
    title: 'Software Engineer Intern',
    meta: 'Sanvro (Remote)',
    time: 'June 2025 – August 2025',
    detail:
      'Built backend modules for a patient management application using Java, Spring Boot, MySQL, and secure REST APIs.',
    bullets: [
      'Designed and implemented secure RESTful APIs with input validation and authentication for healthcare workflows.',
      'Created optimized relational schemas with data integrity and efficient query performance.',
      'Collaborated on AI-driven healthcare features while maintaining secure backend services.',
    ],
  },
]

const highlights = [
  {
    title: 'Certifications',
    points: [
      'AWS Cloud Practitioner Essentials',
      'Self-learning: OWASP Top 10 for Web Application Security',
      'Udemy: Master Java - Fundamentals, Collections, Multithreading',
      'Udemy: Spring Boot - Fundamentals, JPA, Security',
    ],
  },
  {
    title: 'Achievements',
    points: [
      'Ranked among the top 5% of candidates nationwide in JEE Main.',
      'Solved 600+ DSA problems across LeetCode and GeeksforGeeks.',
      'Built scalable backend applications with Java, Spring Boot, Docker, RabbitMQ, and monitoring tools.',
    ],
  },
  {
    title: 'Public GitHub Signals',
    points: [
      '9 public repositories on the GitHub profile.',
      'Pinned projects include distributed-task-queue-system, quiz-app, and student-management-console.',
      'Profile tagline: Pre-final year developer focused on Java, Spring Boot, and MERN.',
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

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">AK</span>
          <span className="brand-copy">
            <strong>Anik Kumar</strong>
            <small>Backend Developer</small>
          </span>
        </a>

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
            <strong>{theme === 'dark' ? 'Dark mode' : 'Light mode'}</strong>
          </span>
        </button>

        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#experience">Background</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-panel" id="top">
        <div className="eyebrow">Backend Developer Portfolio</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-topline">
              <span className="status-pill">Open to backend internships and entry-level roles</span>
              <span className="hero-location">IIIT Ranchi · India</span>
            </div>
            <p className="intro">Hi, I’m Anik Kumar</p>
            <h1>Java backend developer focused on secure APIs and reliable systems.</h1>
            <p className="lede">
              I’m a backend developer from IIIT Ranchi working with Java, Spring Boot, REST APIs,
              MySQL, Docker, JWT security, and cloud tools. I care most about clean implementation,
              reliability, and code that is easy to maintain.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work
              </a>
              <a className="button button-secondary" href="/Anik-Kumar-CV.pdf" download>
                Download CV
              </a>
              <a className="button button-secondary" href="#contact">
                Contact me
              </a>
            </div>

            <div className="hero-chips" aria-label="Core technologies">
              {skillChips.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <aside className="hero-card" aria-label="Profile highlights">
            <div className="hero-visual-frame">
              <img className="hero-visual" src="/portfolio-hero.svg" alt="Portfolio visual composition" />
            </div>
            <div className="hero-card-header">
              <p className="project-meta">Snapshot</p>
              <h2>Selected metrics and profile signals.</h2>
            </div>
            <div className="stat-grid">
              {quickFacts.map((fact) => (
                <div className="stat" key={fact.label}>
                  <span className="stat-value">{fact.value}</span>
                  <span className="stat-label">{fact.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-note">
              Backend delivery, problem solving, and systems work.
            </div>
          </aside>
        </div>
      </section>

      <section className="section two-column" id="about">
        <div>
          <p className="section-label">About</p>
          <h2>Java backend developer with a focus on security, reliability, and clean systems.</h2>
        </div>
        <div className="section-copy">
          <p>
            I’m currently pursuing a B.Tech in Electronics & Communication Engineering at IIIT
            Ranchi. My work centers on backend architecture, secure APIs, authentication, database
            design, and cloud deployment.
          </p>
          <p>
            I also keep a strong problem-solving baseline through DSA practice, with 600+ solved
            problems and hands-on experience with Java, Spring Boot, Docker, RabbitMQ, AWS, and
            monitoring tools.
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-label">Selected Work</p>
          <h2>Projects that show backend implementation and system design.</h2>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-frame">
                <img className="project-image" src={project.image} alt="" aria-hidden="true" />
              </div>
              <p className="project-meta">{project.meta}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="section-label">Experience & Education</p>
          <h2>Academic background and internship experience.</h2>
        </div>
        <div className="timeline-grid">
          {education.map((item) => (
            <article className="timeline-card" key={item.title}>
              <p className="project-meta">Education</p>
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
              <p className="timeline-time">{item.time}</p>
              <p>{item.detail}</p>
            </article>
          ))}

          {experience.map((item) => (
            <article className="timeline-card" key={item.title}>
              <p className="project-meta">Experience</p>
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
              <p className="timeline-time">{item.time}</p>
              <p>{item.detail}</p>
              <ul className="bullet-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Skills & Recognition</p>
          <h2>Technical strengths, certifications, and public profile signals.</h2>
        </div>
        <div className="project-grid project-grid-alt">
          {highlights.map((item) => (
            <article className="project-card" key={item.title}>
              <p className="project-meta">{item.title}</p>
              <h3>{item.title}</h3>
              <ul className="bullet-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-panel">
        <div className="skills-card">
          <p className="section-label">Core Stack</p>
          <h2>Software and tools I use regularly.</h2>
          <ul className="bullet-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="contact-card" id="contact">
          <p className="section-label">Contact</p>
          <h2>Available for backend internships and entry-level roles.</h2>
          <div className="contact-links">
            
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>Open to Software Engineering, Backend Development, and Generative AI opportunities. Feel free to connect!</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  )
}

export default App
