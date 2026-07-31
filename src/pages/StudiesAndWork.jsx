import PathCrumb from '../components/PathCrumb.jsx'

const academics = [
  {
    logo: 'UNSW',
    when: '2024 – 2026',
    name: 'University of New South Wales',
    place: 'Master of Information Technology · Cybersecurity',
    desc: "Ranked in the world's top universities (QS World University Rankings), UNSW is a global university with some of Australia's strongest faculties. Its Computer Science and Engineering (CSE) faculty is ranked the best in Australia, giving me the chance to push my academic journey as far as possible — with both academic knowledge and research given real weight.",
  },
  {
    logo: 'FLAME',
    when: '2021 – 2024',
    name: 'FLAME University',
    place: 'Bachelor of Science (Hons.) in Computer Science',
    desc: 'Located in Pune, India, FLAME is rooted in the philosophy of Liberal Education. Students interact across disciplines and are encouraged to tackle real-world problems from multiple angles — letting me major in Computer Science while exploring interconnected fields like Entrepreneurship and Marketing.',
  },
  {
    logo: 'HR',
    when: '2019 – 2021',
    name: 'H.R. College',
    place: 'HSC Board · 12th Grade · 92%',
    desc: null,
  },
  {
    logo: 'CAMP',
    when: '2009 – 2019',
    name: 'Campion School',
    place: 'ICSE Board · 10th Grade · 94%',
    desc: null,
  },
]

const internships = [
  {
    name: 'HDFC Bank',
    meta: '2023 · IT Dept · 3.5 months',
    intro:
      'Took part in several IT-department initiatives, including the quarterly "Success Stories" highlight and the internally-used "Investor Microsite for Tech and Digital Updates," alongside research presentations for the HDFC Ltd. / HDFC Bank merger.',
    fields: [
      ['work assigned', 'Investor Microsite for Tech & Digital Updates'],
      ['designation', 'Intern, IT Department'],
      ['role', 'Website Developer'],
      ['duration', '3.5 months'],
    ],
    subtasks: [
      ['Investor Microsite', 'A specialised website replacing the "Investor Deck" — a presentation showing the growth and statistics of the bank\'s IT department to investors, heads and shareholders.'],
      ['Success Stories highlight', "A quarterly video presentation on the IT department's progress. Traditionally built in PowerPoint — reworked and introduced in video form."],
    ],
  },
  {
    name: 'Priyadarshni Academy',
    meta: '2022–23 · 1 year',
    intro:
      "Responsible for creating and curating several of the organisation's core functions — from revamping its website and e-commerce platforms to curating speeches and presentations for its Global Awards Function, and managing its Instagram and Facebook presence. Also facilitated its scholarship programme that year.",
    fields: [
      ['work assigned', 'Website revamp, speech & presentation curation'],
      ['designation', 'Intern'],
      ['role', 'Website Developer & Graphic Designer'],
      ['duration', '1 year'],
    ],
    subtasks: [
      ['Web development', "Revamped the organisation's website to modern standards — improved UI and security for a smoother experience."],
      ['Speech & presentation curation', 'Wrote speeches introducing new and returning dignitaries, and built presentations for the Global Awards Function, September 2022.'],
      ['Social media management', 'Reintroduced and managed social media marketing across Instagram and Facebook.'],
    ],
  },
  {
    name: 'WageIndicator',
    meta: '2020–21 · 1 year',
    intro:
      'Started as an online intern across the News & Social Media and Living Wages teams, later promoted to Sub-Editor for News & Social Media. Created posts based on wage statistics from 10+ countries, researched essential-item pricing to calculate cost of living, and curated news reports on current affairs related to living wages — before proofreading and writing articles as Sub-Editor for a team of four.',
    fields: [
      ['work assigned', 'Content, news reporting, graphics, cost-of-living research'],
      ['designation', 'Intern & Sub-Editor (Online)'],
      ['role', 'Researcher & Social Media Content Creator'],
      ['duration', '1 year'],
    ],
    subtasks: [
      ['News & social media', "Created 50+ posts and reported current affairs for the organisation's international Instagram, Facebook and LinkedIn accounts."],
      ['Living wages research', 'Calculated cost of living for 50+ countries across two regions, based on essential-product pricing data.'],
    ],
  },
]

const ventures = [
  {
    thumb: 'Triforce',
    estd: 'Est. 2023',
    name: 'Triforce Technologies',
    desc: 'A consulting agency providing web development, social media management and audio/video editing services.',
    tags: [
      ['web development', 'Website creation, security testing and hosting'],
      ['social media mgmt', 'Posts, stories, reels and videos'],
      ['audio/video editing', 'Advertisements, short films and music'],
      ['technical support', 'Web scraping, software install & servicing'],
    ],
  },
  {
    thumb: 'Quickie',
    estd: 'Est. 2022',
    name: 'Quickie Delivers',
    desc: 'A delivery service co-founded with three others, providing in-campus deliveries — "from the gate to your doorstep."',
    tags: [
      ['food deliveries', 'Getting food from any campus cafe to your room'],
      ['item deliveries', 'Getting items from local stores to your doorstep'],
      ['grocery collection', 'Weekly collection of essential foods'],
      ['working app', 'An intuitive interface to place delivery orders'],
    ],
  },
]

export default function StudiesAndWork() {
  return (
    <>
      <PathCrumb current="studies-and-work" />

      <header className="hero wrap" style={{ paddingBottom: '2rem' }}>
        <div className="badge">work experience log</div>
        <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3rem)' }}>Studies and Work</h1>
        <p className="lede">
          A record of academics, internships and the start-ups I've built
          along the way.
        </p>
      </header>

      <section className="strip wrap">
        <p className="eyebrow">worked with</p>
        <div className="logos">
          <span className="logoph">[ logo: WageIndicator ]</span>
          <span className="logoph">[ logo: HDFC Bank ]</span>
          <span className="logoph">[ logo: Priyadarshni Academy ]</span>
        </div>
      </section>

      <section className="section wrap" id="academics">
        <p className="eyebrow">academics</p>
        <h2>Academic history</h2>
        <p className="sub">My history in education, summarised.</p>

        <div className="timeline">
          {academics.map((a) => (
            <div className="tl-item" key={a.name}>
              <div className="tl-logo">{a.logo}</div>
              <span className="when">{a.when}</span>
              <h3>{a.name}</h3>
              <p className="place">{a.place}</p>
              {a.desc && <p className="desc">{a.desc}</p>}
            </div>
          ))}
        </div>
      </section>

      <section
        className="section wrap"
        id="internships"
        style={{ borderTop: '1px solid var(--ink-line)' }}
      >
        <p className="eyebrow">internships</p>
        <h2>Work in the field</h2>
        <p className="sub">
          Contributions across three organisations, in web development,
          content and research.
        </p>

        {internships.map((job) => (
          <div className="log" key={job.name}>
            <div className="log-head">
              <h3>{job.name}</h3>
              <span className="meta">{job.meta}</span>
            </div>
            <div className="log-body">
              <p>{job.intro}</p>
              <div className="log-fields">
                {job.fields.map(([k, v]) => (
                  <span key={k} style={{ display: 'contents' }}>
                    <span className="k">{k}</span>
                    <span className="v">{v}</span>
                  </span>
                ))}
              </div>
              {job.subtasks.map(([title, body], i) => (
                <div className="subtask" key={title}>
                  <span className="idx">{i + 1}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="quotes">
          <div className="quote">
            <p>
              Praised as efficient, hardworking and easy to collaborate with
              — the kind of intern a team would happily bring back.
            </p>
            <span className="who">
              Employer · <b>Priyadarshni Academy</b>
            </span>
          </div>
          <div className="quote">
            <p>
              Recognised for consistently delivering on time and staying
              easy to work with even when issues came up — teammates said
              they learned a lot from him.
            </p>
            <span className="who">
              Employer · <b>HDFC Bank</b>
            </span>
          </div>
        </div>
      </section>

      <section
        className="section wrap"
        id="startups"
        style={{ borderTop: '1px solid var(--ink-line)' }}
      >
        <p className="eyebrow">start-ups</p>
        <h2>Ventures I've built</h2>
        <p className="sub">Businesses started with a vision for innovation.</p>

        {ventures.map((v) => (
          <div className="venture" key={v.name}>
            <div className="venture-head">
              <div className="venture-thumb">{v.thumb}</div>
              <div>
                <span className="estd">{v.estd}</span>
                <h3 style={{ marginTop: '0.2rem' }}>{v.name}</h3>
              </div>
            </div>
            <p className="desc">{v.desc}</p>
            <div className="venture-tags">
              {v.tags.map(([lbl, txt]) => (
                <div className="vtag" key={lbl}>
                  <span className="lbl">{lbl}</span>
                  {txt}
                </div>
              ))}
            </div>
          </div>
        ))}
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
