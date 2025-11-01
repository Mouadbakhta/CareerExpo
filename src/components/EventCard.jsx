import React from 'react'
import Button from './Button'

export default function EventCard({ title, date, location, children }) {
  return (
    <article className="event-card" style={{maxWidth:720}}>
      <h3 style={{marginTop:0}}>{title}</h3>
      <p style={{margin:'0.25rem 0'}}>{date} — {location}</p>
      <div style={{marginTop:8}}>{children}</div>
      <div style={{marginTop:12}}>
        <Button>Register</Button>
      </div>
    </article>
  )
}
