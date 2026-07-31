import PathCrumb from '../components/PathCrumb.jsx'

const items = [
  {
    when: 'Sept 2023 – Jan 2024',
    role: 'Chief of Technology, Head of Lights & Sound',
    org: 'TEDxFLAMEUniversity',
  },
  {
    when: 'Sept 2021 – Mar 2022',
    role: 'Member, Documentation and PR & Marketing Teams',
    org: 'FLAME FirstCut',
  },
  {
    when: 'Jan 2022 – Mar 2022',
    role: 'Documentary Team Head & Photography/Videography Head',
    org: 'FLAME Fest — FLAME Cultural Committee',
  },
  {
    when: '2023 – 2024',
    role: 'Head of PR and Marketing',
    org: 'DotSlash FLAME — The Tech Club',
  },
  {
    when: '2020 – 2022',
    role: 'Senior Member',
    org: 'Rotaract Club of H.R. College',
  },
  {
    when: 'Sept 2022 – Jan 2023',
    role: 'Member, Technology Team',
    org: 'TEDxFLAMEUniversity',
  },
]

export default function Extracurriculars() {
  return (
    <>
      <PathCrumb current="extracurriculars" />

      <header className="hero wrap" style={{ paddingBottom: '2rem' }}>
        <div className="badge">activity log</div>
        <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3rem)' }}>Extracurriculars</h1>
        <p className="lede">
          A compilation of my contributions to local clubs and the community.
        </p>
      </header>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <p className="eyebrow">over the years</p>
        <h2>Roles &amp; contributions</h2>

        <div className="exlist">
          {items.map((it, i) => (
            <div className="exitem" key={i}>
              <span className="when">{it.when}</span>
              <div>
                <h3>{it.role}</h3>
                <p>{it.org}</p>
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
