import { useState } from 'react'
import PathCrumb from '../components/PathCrumb.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder — connect this form to a service like Formspree or Netlify Forms.
    alert('Placeholder — connect this form to a service like Formspree or Netlify Forms.')
  }

  return (
    <>
      <PathCrumb current="contact" />

      <header className="hero wrap" style={{ paddingBottom: '1rem' }}>
        <div className="badge">open channel</div>
        <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3rem)' }}>Contact Me</h1>
        <p className="lede">
          Have a project, opportunity, or just want to say hi? Reach out
          below.
        </p>
      </header>

      <section className="section wrap" style={{ paddingTop: '1rem' }}>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn primary" type="submit">
              Send message
            </button>
          </form>

          <div className="contact-links">
            <a href="mailto:jashpopat@gmail.com?subject=Reg%3A%20Your%20Website">
              <span>Email</span>
              <span>jashpopat@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/jash-popat-42ba181b5/" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
              <span>jash-popat</span>
            </a>
            <a href="https://www.instagram.com/jashhpopat/" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span>
              <span>@jashhpopat</span>
            </a>
            <a href="https://github.com/JashPopat" target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
              <span>JashPopat</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
