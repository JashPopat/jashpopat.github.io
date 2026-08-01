import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <span>© Jash Popat</span>
        <div className="foot-links">
          <Link to="/studies-and-work">studies &amp; work</Link>
          <Link to="/projects">projects</Link>
          <Link to="/extracurriculars">extracurriculars</Link>
          <Link to="/contact">contact</Link>
        </div>
        <span>designed &amp; built by Jash</span>
      </div>
    </footer>
  )
}