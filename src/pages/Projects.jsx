import { Link } from 'react-router-dom'
import PathCrumb from '../components/PathCrumb.jsx'

const projects = [
  {
    thumb: '[ screenshot: Thready ]',
    tag: 'Games',
    name: 'Thready',
    desc: 'An educational game teaching multithreaded processes — playable on mobile and desktop.',
    linkText: 'view on gdevelop →',
    linkHref: 'https://gd.games/instant-builds/7a89a58c-45e2-461b-a51f-aa8ec7cb3f8d',
    external: true,
  },
  {
    thumb: '[ photo: City Runner ]',
    tag: 'Programs & code',
    name: 'City Runner',
    desc: 'A video board game designed to demonstrate the key aspects of urban development and good governance.',
    linkText: 'in development →',
    linkHref: '/contact',
    external: false,
  },
  {
    thumb: '[ screenshot: Bookie ]',
    tag: 'Software development',
    name: 'Bookie — a slot booking app',
    desc: 'A booking service for facilities around campus, with separate versions for average users and manager access.',
    linkText: 'view on GitHub →',
    linkHref: 'https://github.com/JashPopat/CSIT205_App.git',
    external: true,
  },
  {
    thumb: '[ mockup: Flaming Hot Deliveries ]',
    tag: 'UI/UX',
    name: 'Flaming Hot Deliveries',
    desc: 'A user interface designed from the perspective of both the deliverer and the deliveree, for a campus delivery service.',
    linkText: 'view on Figma →',
    linkHref: 'https://www.figma.com/file/xzKdad6K5N6YA7iGyTL8qn/Delivery-App-Wireframe',
    external: true,
  },
  {
    thumb: '[ repo preview: Academic codes ]',
    tag: 'Programs & code',
    name: 'Academic codes',
    desc: 'A compilation of programs and code written across the course of my academic journey.',
    linkText: 'view on GitHub →',
    linkHref: 'https://github.com/JashPopat/Geno.git',
    external: true,
  },
]

export default function Projects() {
  return (
    <>
      <PathCrumb current="projects" />

      <header className="hero wrap" style={{ paddingBottom: '2rem' }}>
        <div className="badge">build log</div>
        <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3rem)' }}>Projects</h1>
        <p className="lede">
          A glimpse into the projects and innovations that demonstrate what
          I've learned along the way.
        </p>
      </header>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <p className="eyebrow">academic projects</p>
        <h2>Built during my studies</h2>
        <p className="sub">
          Games, software, UI/UX and programs written across the course of
          my academic journey.
        </p>

        <div className="projects">
          {projects.map((p) => (
            <div className="proj" key={p.name}>
              <div className="proj-thumb">{p.thumb}</div>
              <div className="proj-body">
                <span className="proj-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                {p.external ? (
                  <a className="link" href={p.linkHref} target="_blank" rel="noopener noreferrer">
                    {p.linkText}
                  </a>
                ) : (
                  <Link className="link" to={p.linkHref}>
                    {p.linkText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="section tight wrap"
        style={{ textAlign: 'center', borderTop: '1px solid var(--ink-line)' }}
      >
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          get in touch
        </p>
        <h2>Wish to know more about my work?</h2>
        <p className="sub" style={{ margin: '0 auto 1rem' }}>
          Email me and we'll take it from there.
        </p>
        <a className="btn primary" href="mailto:jashpopat@gmail.com?subject=Reg%3A%20Your%20Website">
          Email me
        </a>
      </section>
    </>
  )
}
