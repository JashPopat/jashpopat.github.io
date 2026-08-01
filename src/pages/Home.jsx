import { Link } from 'react-router-dom'
import RotatingRole from '../components/RotatingRole.jsx'

const featureCards = [
  {
    num: '01',
    title: 'Professional experience',
    body: "Beyond academics, I've worked as a professional audio/video editor, across Photoshop, Premiere Pro, Final Cut Pro, Soundbooth, CorelDraw and more.",
  },
  {
    num: '02',
    title: 'History in Infotech',
    body: 'Whether trying to learn a new coding language or fixing a bug in my Unity game projects, my path blends academic knowledge with a hit of creative expression.',
  },
  {
    num: '03',
    title: 'Security as a standard',
    body: 'Security isn\'t a feature I bolt on at the end but a standard I build to from start to end. Whether it\'s a web app or a piece of infrastructure, the same questions apply: what data does this touch, who can reach it, and what happens if it fails.',
  },
]

export default function Home() {
  return (
    <>
      <header className="hero wrap">
        <div className="tagline">
          <h1 className="hero-title">
          Hello, I am
          
        </h1>
        <h1><RotatingRole /></h1>
        <p className="lede">
          Currently pursuing a Master of Information Technology (Cybersecurity)
          at the University of New South Wales (UNSW) Sydney, I move between code, design and story-telling as I explore 
          the ever-evolving world of computing.
        </p>
        <div className="btnrow">
          <Link className="btn primary" to="/studies-and-work">
            explore studies &amp; work →
          </Link>
          <Link className="btn ghost" to="/projects">
            view projects
          </Link>
        </div>
      </div>
    </header>

      <section className="strip wrap">
        <p className="eyebrow">worked with</p>
        <div className="logos">
          <a href="https://unsw.edu.au/" target="_blank" rel="noopener noreferrer">
            <img className="logo-img" src="/logos/unsw.svg" alt="UNSW" />
          </a>
          <a href="https://hdfcbank.com" target="_blank" rel="noopener noreferrer">
            <img className="logo-img" src="/logos/hdfcbank.svg" alt="HDFC Bank" />
          </a>
          <a href="https://wageindicator.org" target="_blank" rel="noopener noreferrer">
            <img className="logo-img" src="/logos/wageindicator.svg" alt="WageIndicator" />
          </a>
          
        </div>
      </section>

      <section className="section wrap">
        <p className="eyebrow">about</p>
        <h2>Hello — I'm Jash</h2>
        <p className="sub">
          A tech enthusiast with a knack for coding and design, I’m a person who loves a good challenge in his life. 
          If you need to make an app, create a website or design a portfolio, I’m the person you’ve been looking for.

        </p>

        <div className="triplet">
          {featureCards.map((c) => (
            <div className="card" key={c.num}>
              <span className="num">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="section tight wrap"
        style={{ textAlign: 'center', borderTop: '1px solid var(--ink-line)' }}
      >
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          resume
        </p>
        <h2>Download my CV / résumé</h2>
        <a className="btn primary" href="/files/CV.pdf" style={{ marginTop: '1rem' }}>
          Download PDF
        </a>
      </section>
    </>
  )
}