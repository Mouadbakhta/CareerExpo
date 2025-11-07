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
        ? 'rgba(0,0,0,0.95)'
        : 'transparent',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: scrolled ? 'blur(25px)' : 'blur(10px)',
      WebkitBackdropFilter: scrolled ? 'blur(25px)' : 'blur(10px)',
      borderBottom: scrolled
        ? '1px solid var(--depth-3)'
        : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '60px' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="ENSA" style={{ height: scrolled ? '48px' : '52px', transition: 'all 0.4s ease' }} />
        </a>

        {/* Navigation */}
        <nav className="main-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {/* Mobile toggle visible on small screens */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
          >
            {mobileOpen ? <X color="#f0c76e" size={22} /> : <Menu color="var(--text)" size={22} />}
          </button>

          <div className={`nav-items ${mobileOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '2rem' }}>
          {menuItems.map(item => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className="nav-link nav-link-3d luxury-focus"
                style={{
                  color: isActive ? '#f0c76e' : 'var(--text)',
                  textDecoration: 'none',
                  fontWeight: isActive ? 600 : 500,
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== '/') {
                    window.location.href = `/#${item.id}`;
                  } else {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  setActiveSection(item.id);
                }}
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
                    background: '#f0c76e',
                    borderRadius: '2px',
                    transition: 'width 0.4s ease',
                    boxShadow: isActive ? '0 0 15px var(--glow)' : 'none'
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
                    background: '#f0c76e',
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
            {dark ? <Moon color="#f0c76e" size={22} /> : <Sun color="#f0c76e" size={22} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
