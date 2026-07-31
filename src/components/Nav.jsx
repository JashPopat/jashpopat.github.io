import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'home', end: true },
  { to: '/studies-and-work', label: 'studies & work' },
  { to: '/projects', label: 'projects' },
  { to: '/extracurriculars', label: 'extracurriculars' },
  { to: '/contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="topnav">
      <div className="bar">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          jash<span className="dot">.</span>popat
        </NavLink>
        <button
          className="navtoggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          menu
        </button>
        <div className={`navlinks${open ? ' open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
