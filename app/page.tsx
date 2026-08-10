import Image from "next/image";
import { portfolioData } from "@/lib/portfolio-data";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg
    aria-hidden="true"
    className="arrow"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path d={diagonal ? "M4 16 16 4M7 4h9v9" : "M3 10h14m-5-5 5 5-5 5"} />
  </svg>
);

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>/</span>
      <span>{children}</span>
      <span className="section-label__rule" />
    </div>
  );
}

function ProjectMedia({ projectIndex }: { projectIndex: number }) {
  const project = portfolioData.projects[projectIndex];
  const media = project.media[0];

  return (
    <div className={`project-media project-media--${projectIndex + 1}`}>
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          loading={projectIndex === 0 ? "eager" : "lazy"}
          sizes="(max-width: 760px) 100vw, 40vw"
        />
      ) : (
        <video
          aria-label={media.alt}
          autoPlay
          loop
          muted
          playsInline
          poster={"poster" in media ? media.poster : undefined}
          preload="metadata"
        >
          <source src={media.src} />
        </video>
      )}
    </div>
  );
}

function ProjectDetails({ projectIndex }: { projectIndex: number }) {
  const project = portfolioData.projects[projectIndex];

  return (
    <div className="project-details">
      <span className="project-number">{String(projectIndex + 1).padStart(2, "0")}</span>
      <h3>{project.title}</h3>
      {project.accolade ? <p className="project-accolade">{project.accolade}</p> : null}
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        {project.links.map((link) => (
          <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
            {link.label}
            <Arrow diagonal />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { profile, contact, education, experience, projects, skills } = portfolioData;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jake Rogers, home">
          JR
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="resume-link" href={contact.resume.href} target="_blank">
          {contact.resume.label}
          <Arrow diagonal />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>{profile.name}</h1>
            <h2>{profile.bio}</h2>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                See my work
                <Arrow />
              </a>
              <a className="button button--secondary" href={`mailto:${contact.email}`}>
                Email me
                <Arrow />
              </a>
            </div>
          </div>

          <figure className="hero-visual hero-portrait">
            <Image
              alt="Cartoon portrait of Jake coding at a desk"
              className="hero-portrait__image"
              fill
              priority
              sizes="(max-width: 720px) 82vw, (max-width: 980px) 19rem, 36vw"
              src="/jake-at-work.png"
            />
          </figure>
        </div>
      </section>

      <section className="section work" id="work">
        <SectionLabel number="01">Selected work</SectionLabel>
        <div className="featured-projects">
          {projects.slice(0, 3).map((project, index) => (
            <article
              className={`project ${index % 2 === 1 ? "project--reverse" : ""}`}
              id={`project-${index + 1}`}
              key={project.title}
            >
              <ProjectDetails projectIndex={index} />
              <ProjectMedia projectIndex={index} />
            </article>
          ))}
        </div>
        <aside className="project-rail" aria-label="More projects">
          {projects.slice(3).map((project) => (
            <a href={project.links[0].href} key={project.title} target="_blank" rel="noreferrer">
              <span>{project.title}</span>
              <Arrow />
            </a>
          ))}
        </aside>
      </section>

      <section className="section experience" id="experience">
        <SectionLabel number="02">Experience</SectionLabel>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-row" key={`${item.company}-${item.role}`}>
              <div className="experience-company">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.company}</h3>
              </div>
              <div className="experience-role">
                <p>{item.role}</p>
                <span>{item.period}</span>
              </div>
              <p className="experience-date">{item.dates}</p>
              <div className="experience-summary">
                <p>{item.bullets[0]}</p>
                <p className="experience-tech">{item.tech.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-column education">
          <SectionLabel number="03">Education</SectionLabel>
          <div className="education-body">
            <div className="uk-mark" aria-hidden="true">
              UK
            </div>
            <div className="education-title">
              <h3>{education.school}</h3>
              <p>{education.degree}</p>
              <p className="education-meta">
                {education.expectedGraduation} <span>·</span> {education.gpa} GPA
              </p>
            </div>
            <ul className="education-list">
              {[...education.coursework, ...education.activities].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-column skills">
          <SectionLabel number="04">Skills</SectionLabel>
          <div className="skill-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="contact" id="contact">
        <SectionLabel number="05">Contact</SectionLabel>
        <div className="contact-grid">
          <div>
            <h2>Have something worth building?</h2>
            <a className="contact-email" href={`mailto:${contact.email}`}>
              {contact.email}
              <Arrow />
            </a>
          </div>
          <div className="contact-links">
            <a href={contact.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <Arrow />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <Arrow />
            </a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Jake Rogers</p>
      </footer>
    </main>
  );
}
