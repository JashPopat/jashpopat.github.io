import { Link } from 'react-router-dom'

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
        <div className="badge">clearance: public profile</div>
        <h1>Jash Popat</h1>
        <p className="role">
          Software Developer<span className="sep">/</span>Graphic Designer
          <span className="sep">/</span>Audio-Video Editor
          <span className="sep">/</span>Entrepreneur
        </p>
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

        <div className="network">
          <svg
            viewBox="0 0 800 220"
            role="img"
            aria-label="Network diagram connecting Jash's four working disciplines"
          >
            <line x1="400" y1="110" x2="130" y2="45" stroke="#2c3348" strokeWidth="1.5" />
            <line x1="400" y1="110" x2="670" y2="45" stroke="#2c3348" strokeWidth="1.5" />
            <line x1="400" y1="110" x2="130" y2="175" stroke="#2c3348" strokeWidth="1.5" />
            <line x1="400" y1="110" x2="670" y2="175" stroke="#2c3348" strokeWidth="1.5" />

            <circle cx="400" cy="110" r="7" fill="#e3a73c" />
            <circle cx="130" cy="45" r="5" fill="#4fa69c" />
            <circle cx="670" cy="45" r="5" fill="#4fa69c" />
            <circle cx="130" cy="175" r="5" fill="#4fa69c" />
            <circle cx="670" cy="175" r="5" fill="#4fa69c" />

            <text x="400" y="140" textAnchor="middle" fill="#f5f1e7" fontFamily="IBM Plex Mono, monospace" fontSize="12">
              JASH POPAT
            </text>
            <text x="130" y="30" textAnchor="middle" fill="#b9b6ac" fontFamily="IBM Plex Mono, monospace" fontSize="11">
              dev
            </text>
            <text x="670" y="30" textAnchor="middle" fill="#b9b6ac" fontFamily="IBM Plex Mono, monospace" fontSize="11">
              design
            </text>
            <text x="130" y="200" textAnchor="middle" fill="#b9b6ac" fontFamily="IBM Plex Mono, monospace" fontSize="11">
              audio / video
            </text>
            <text x="670" y="200" textAnchor="middle" fill="#b9b6ac" fontFamily="IBM Plex Mono, monospace" fontSize="11">
              venture-building
            </text>
          </svg>
          <p className="caption">four disciplines, one working method</p>
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
