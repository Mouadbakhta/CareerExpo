import React from 'react'
import CountdownTimer from '../components/CountdownTimer'
import EventCard from '../components/EventCard'

export default function Home() {
  const eventDate = new Date()
  eventDate.setDate(eventDate.getDate() + 30)

  return (
    <section style={{maxWidth:960,margin:'32px auto',padding:'0 16px'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <h1 style={{color:'var(--accent)'}}>Welcome to CareerExpo</h1>
          <p style={{color:'var(--muted)'}}>Connect with employers, workshops, and career support.</p>
        </div>
        <CountdownTimer targetDate={eventDate} />
      </header>

      <hr style={{margin:'24px 0',borderColor:'var(--card)'}} />

      <EventCard title="Main Expo" date={eventDate.toDateString()} location="University Hall">
        <p style={{color:'var(--accent-2)'}}>Join hundreds of employers and students at CareerExpo.</p>
      </EventCard>
    </section>
  )
}
