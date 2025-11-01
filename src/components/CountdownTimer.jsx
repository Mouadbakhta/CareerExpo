import React, { useEffect, useState } from 'react'

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getDiff())

  function getDiff() {
    const now = new Date()
    const diff = Math.max(0, new Date(targetDate) - now)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getDiff()), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return (
   <div className="countdown">
  <div>
    <span className="text-4xl block">{timeLeft.days}</span>
    Jours
  </div>
  <div>
    <span className="text-4xl block">{timeLeft.hours}</span>
    Heures
  </div>
  <div>
    <span className="text-4xl block">{timeLeft.minutes}</span>
    Min
  </div>
  <div>
    <span className="text-4xl block">{timeLeft.seconds}</span>
    Sec
  </div>
</div>
  )
}
