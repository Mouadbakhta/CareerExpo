// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      padding: scrolled ? '0.8rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(10,15,28,0.95)' : 'transparent',
      transition: 'all 0.5s ease', backdropFilter: 'blur(15px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="ENSA" style={{ height: '45px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#F9B233' }}>Forum ENSA 2025</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}>
          {['Accueil', 'À propos', 'Programme', 'Conférenciers', 'Jury CV', 'Partenaires', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} style={{
              color: '#e2e8f0', textDecoration: 'none', fontWeight: '500',
              position: 'relative', transition: 'all 0.3s'
            }}>
              {item}
              <span style={{
                position: 'absolute', bottom: '-8px', left: 0, width: 0, height: '2px',
                background: '#F9B233', transition: 'width 0.4s'
              }}></span>
            </a>
          ))}
          <button onClick={() => setDark(!dark)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {dark ? <Sun color="#F9B233" size={22} /> : <Moon color="#004AAD" size={22} />}
          </button>
        </nav>
      </div>
    </header>
  );
}