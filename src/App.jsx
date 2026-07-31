import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import StudiesAndWork from './pages/StudiesAndWork.jsx'
import Projects from './pages/Projects.jsx'
import Extracurriculars from './pages/Extracurriculars.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studies-and-work" element={<StudiesAndWork />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
