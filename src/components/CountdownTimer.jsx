// src/components/CountdownTimer.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer({ targetDate }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = targetDate instanceof Date ? targetDate : new Date(targetDate || '2025-11-15T09:00:00');
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
  }, [targetDate]);

  return (
    <div className="countdown" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', margin: '2.5rem 0', flexWrap: 'wrap' }}>
      {Object.entries(time).map(([unit, value]) => (
        <div key={unit} style={{ textAlign: 'center' }}>
          <motion.div
            className="countdown-box card-3d glow-pulse"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{
              background: 'linear-gradient(135deg, var(--depth-1), var(--depth-2))',
              color: 'var(--text)',
              padding: '1.25rem 1rem',
              borderRadius: 'var(--radius)',
              minWidth: '80px',
              fontSize: '2rem',
              fontWeight: '700',
              fontFamily: 'Poppins, sans-serif',
              boxShadow: 'var(--shadow-base)',
              border: '1px solid var(--depth-2)',
              transition: 'var(--transition)',
              transformStyle: 'preserve-3d'
            }}
          >
            {String(value).padStart(2, '0')}
          </motion.div>
          <small style={{ 
            textTransform: 'uppercase', 
            color: 'var(--text)', 
            fontSize: '0.8rem', 
            letterSpacing: '0.05em',
            fontWeight: '500',
            fontFamily: 'Inter, sans-serif',
            marginTop: '0.5rem',
            display: 'block'
          }}>
            {unit === 'd' ? 'Jours' : unit === 'h' ? 'Heures' : unit === 'm' ? 'Minutes' : 'Secondes'}
          </small>
        </div>
      ))}
    </div>
  );
}
