// src/components/CountdownTimer.jsx
import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date('2025-04-15T09:00:00');
    const interval = setInterval(() => {
      const diff = target - new Date();
      if (diff > 0) {
        setTime({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / (1000 * 60)) % 60),
          s: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', margin: '2rem 0', flexWrap: 'wrap' }}>
      {Object.entries(time).map(([unit, value]) => (
        <div key={unit} style={{ textAlign: 'center' }}>
          <div
            style={{
              background: '#004AAD',
              color: 'white',
              padding: '1rem',
              borderRadius: '16px',
              minWidth: '80px',
              fontSize: '2rem',
              fontWeight: 'bold',
              boxShadow: '0 8px 25px rgba(0, 74, 173, 0.3)',
            }}
          >
            {String(value).padStart(2, '0')}
          </div>
          <small style={{ textTransform: 'uppercase', color: '#6B7280', fontSize: '0.8rem', letterSpacing: '1px' }}>
            {unit === 'd' ? 'Jours' : unit === 'h' ? 'Heures' : unit === 'm' ? 'Minutes' : 'Secondes'}
          </small>
        </div>
      ))}
    </div>
  );
}