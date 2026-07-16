import './App.css'

const featuredProjects = [
  {
    title: 'Distributed Task Queue System',
    description:
      'A distributed task processing platform built with Spring Boot, RabbitMQ, MySQL, Docker, and JPA/Hibernate. It includes secure REST APIs, retries, manual acknowledgements, worker isolation, and task status tracking.',
    meta: 'Java, Spring Boot, RabbitMQ, MySQL, Docker',
  },
  {
    title: 'Quiz Application',
    description:
      'A console-based Java quiz app that uses OOP, collections, answer validation, and automated score calculation with a modular design.',
    meta: 'Java, OOP, Collections, Spring Boot, MySQL',
  },
  {
    title: 'Student Management Console',
    description:
      'A public GitHub project that demonstrates console-based Java workflows with file persistence and structured CRUD-style management.',
    meta: 'Public GitHub repo, Java, file persistence',
  },
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
      'Profile tagline: Pre-final year full stack developer focused on Java Spring Boot and MERN.',
    ],
  },
]

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">AK</span>
          <span className="brand-copy">
            <strong>Anik Kumar</strong>
            <small>Backend Portfolio</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-panel" id="top">
        <div className="eyebrow">Backend Engineer Portfolio</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="intro">Hi, I’m Anik Kumar</p>
            <h1>Pre-final year ECE student building secure Java backend systems.</h1>
            <p className="lede">
              I’m a backend-focused developer from IIIT Ranchi working with Java, Spring Boot,
              REST APIs, MySQL, Docker, JWT security, and cloud tooling. My GitHub profile shows
              public projects in distributed systems, console applications, and backend workflows.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
              </a>
              <a className="button button-secondary" href="/Anik-Kumar-CV.pdf" download>
                Download CV
              </a>
              <a className="button button-secondary" href="#contact">
                Contact details
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Profile highlights">
            <div className="stat">
              <span className="stat-value">600+</span>
              <span className="stat-label">DSA problems solved across LeetCode and GFG</span>
            </div>
            <div className="stat">
              <span className="stat-value">9</span>
              <span className="stat-label">Public repositories on GitHub</span>
            </div>
            <div className="stat">
              <span className="stat-value">7.81</span>
              <span className="stat-label">Current CGPA at IIIT Ranchi</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section two-column" id="about">
        <div>
          <p className="section-label">About</p>
          <h2>Java backend engineer focused on security, reliability, and clean systems.</h2>
        </div>
        <div className="section-copy">
          <p>
            I’m currently pursuing a B.Tech in Electronics & Communication Engineering at IIIT
            Ranchi. My work centers on backend architecture, secure APIs, authentication, database
            design, and cloud-backed deployment.
          </p>
          <p>
            I also keep a strong problem-solving baseline through DSA practice, with 600+ solved
            problems and hands-on experience using Java, Spring Boot, Docker, RabbitMQ, AWS, and
            monitoring tools.
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-label">Selected Work</p>
          <h2>Projects pulled from your CV and public GitHub profile.</h2>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-meta">{project.meta}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Experience & Education</p>
          <h2>Academic background and internship experience.</h2>
        </div>
        <div className="project-grid">
          {education.map((item) => (
            <article className="project-card" key={item.title}>
              <p className="project-meta">Education</p>
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
              <p>{item.time}</p>
              <p>{item.detail}</p>
            </article>
          ))}

          {experience.map((item) => (
            <article className="project-card" key={item.title}>
              <p className="project-meta">Experience</p>
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
              <p>{item.time}</p>
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
          <h2>Technical strengths, certifications, and public profile context.</h2>
        </div>
        <div className="project-grid">
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
          <h2>What I work with most often.</h2>
          <ul className="bullet-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="contact-card" id="contact">
          <p className="section-label">Contact</p>
          <h2>Let’s build, review, or discuss backend work.</h2>
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
        <p>Built with React and Vite. Contact details, projects, and credentials are based on your CV and public GitHub profile.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  )
}

export default App
