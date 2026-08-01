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
    title: 'History in infotech',
    body: 'Whether immersed in lines of code or crafting audiovisual narratives, my path blends academic depth with creative expression — computer science and IT have always been core.',
  },
  {
    num: '03',
    title: 'Fine-tuning',
    body: 'An eye for detail and a commitment to quality — bringing ideas to life through a seamless fusion of audio and visuals, or clean, considered code.',
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
          at UNSW Sydney. I move between code, design and story-telling —
          building things, breaking them to understand how they work, then
          explaining what I learned.
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
          <span className="logoph">[ logo: WageIndicator ]</span>
          <span className="logoph">[ logo: HDFC Bank ]</span>
          <span className="logoph">[ logo: Priyadarshni Academy ]</span>
        </div>
      </section>

      <section className="section wrap">
        <p className="eyebrow">about</p>
        <h2>Hello — I'm Jash</h2>
        <p className="sub">
          Currently completing a Master of IT specialising in Cybersecurity
          at UNSW Sydney, I'm a passionate individual with a knack for
          technology and a creative spirit — on a constant mission to
          explore the ever-evolving world of computing.
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
        <a className="btn primary" href="#" style={{ marginTop: '1rem' }}>
          Download PDF
        </a>
        <p className="sub" style={{ margin: '0.75rem auto 0' }}>
          Placeholder — link your résumé file here.
        </p>
      </section>
    </>
  )
}