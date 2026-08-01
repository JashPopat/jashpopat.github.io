import { useEffect, useRef, useState } from 'react'

const ROLES = [
  { text: 'Jash Popat', color: 'var(--amber)', textColor: 'var(--ink)' },
  { text: 'a Security Engineer', color: 'var(--sage)', textColor: 'var(--ink)' },
  { text: 'a Software Developer', color: 'var(--teal)', textColor: 'var(--paper)' },
  { text: 'a Graphic Designer', color: 'var(--rose)', textColor: 'var(--paper)' },
  { text: 'an Audio/Video Editor', color: 'var(--violet)', textColor: 'var(--paper)' },
]

const HOLD_MS = 1800
const TRANSITION_MS = 320

export default function RotatingRole() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState('idle') // idle | collapsing | expanding
  const [width, setWidth] = useState(null)
  const measureRef = useRef(null)

  // Measure the pill's natural width on mount and whenever the phase
  // moves into "expanding" (after the text has updated).
  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    const hold = setTimeout(() => setPhase('collapsing'), HOLD_MS)
    return () => clearTimeout(hold)
  }, [index])

  useEffect(() => {
    if (phase === 'collapsing') {
      setWidth(0)
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length)
        setPhase('expanding')
      }, TRANSITION_MS)
      return () => clearTimeout(t)
    }
    if (phase === 'expanding') {
      requestAnimationFrame(() => {
        if (measureRef.current) setWidth(measureRef.current.offsetWidth)
      })
      const t = setTimeout(() => setPhase('idle'), TRANSITION_MS)
      return () => clearTimeout(t)
    }
  }, [phase])

  const role = ROLES[index]

  return (
    <span className="role-pill-wrap">
      <span
        className="role-pill"
        style={{
          background: role.color,
          width: width != null ? `${width}px` : 'auto',
        }}
      >
        <span
          className="role-pill-text"
          style={{
            color: role.textColor,
            opacity: phase === 'collapsing' ? 0 : 1,
          }}
        >
          {role.text}
        </span>
      </span>
      {/* Hidden measurer — same font/padding as the pill, used to size it */}
      <span ref={measureRef} className="role-pill-measure" aria-hidden="true">
        {role.text}
      </span>
    </span>
  )
}