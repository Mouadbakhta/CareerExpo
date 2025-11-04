// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Gère le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Détecte la section active
      const sections = ['accueil', 'à-propos', 'programme', 'conférenciers', 'jury-cv', 'éditions', 'admin', 'partenaires', 'contact'];
      const scrollPos = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NOTE: theme is now controlled in App (passed via props).
  // Keep Navbar purely presentational and use `dark` / `setDark` from props.

  // Menu items (SANS "S'inscrire" et "Admin" pour le dissimuler)
  const menuItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'À propos', id: 'à-propos' },
    { label: 'Programme', id: 'programme' },
    { label: 'Conférenciers', id: 'conférenciers' },
    { label: 'Jury CV', id: 'jury-cv' },
    { label: 'Éditions', id: 'éditions' },
    { label: 'Partenaires', id: 'partenaires' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="site-header" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '0.8rem 0' : '1.5rem 0',
      background: scrolled
        ? (dark ? 'rgba(10,15,28,0.95)' : 'rgba(243,244,246,0.95)')
        : 'transparent',
      transition: 'all 0.5s ease',
      backdropFilter: 'blur(15px)',
      borderBottom: scrolled
        ? (dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)')
        : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="ENSA" style={{ height: '45px' }} />
        </a>

        {/* Navigation */}
        <nav className="main-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}>
          {/* Mobile toggle visible on small screens */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
          >
            {mobileOpen ? <X color="#F9B233" size={22} /> : <Menu color={dark ? "#e2e8f0" : "#1f2937"} size={22} />}
          </button>

          <div className={`nav-items ${mobileOpen ? 'open' : ''}`}>
          {menuItems.map(item => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  color: isActive ? '#F9B233' : (dark ? '#e2e8f0' : '#1f2937'),
                  textDecoration: 'none',
                  fontWeight: isActive ? '700' : '500',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  fontSize: '1.05rem'
                }}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}

                {/* Ligne dorée animée */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    width: isActive ? '100%' : '0',
                    height: '3px',
                    background: '#F9B233',
                    borderRadius: '2px',
                    transition: 'width 0.4s ease',
                    boxShadow: isActive ? '0 0 10px rgba(249,178,51,0.7)' : 'none'
                  }}
                ></span>

                {/* Hover : ligne grandit */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    width: 0,
                    height: '3px',
                    background: '#F9B233',
                    borderRadius: '2px',
                    transition: 'width 0.4s ease',
                  }}
                  onMouseEnter={e => e.target.style.width = '100%'}
                  onMouseLeave={e => e.target.style.width = isActive ? '100%' : '0'}
                ></span>
              </a>
            );
          })}

          </div>

          {/* Bouton Mode Sombre */}
          <button
            onClick={() => { setDark(!dark); setMobileOpen(false); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label={dark ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {/* Show Moon when in dark mode, Sun when in light mode */}
            {dark ? <Moon color="#F9B233" size={22} /> : <Sun color="#1a365d" size={22} />}
          </button>
        </nav>
      </div>
    </header>
  );
}