// src/components/Footer.jsx
import { motion } from 'framer-motion';
export default function Footer() {
  return (
    <footer className="parallax-3d" style={{
      background: 'linear-gradient(135deg, var(--bg) 0%, var(--depth-1) 100%)',
      color: 'var(--depth-5)',
      textAlign: 'center',
      padding: '4rem 2rem',
      marginTop: '6rem',
      borderTop: '2px solid var(--depth-3)',
      position: 'relative',
      boxShadow: 'inset 0 4px 16px rgba(0,0,0,0.4)',
      transformStyle: 'preserve-3d'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p className="footer-text" style={{
          color: 'var(--text)',
          marginBottom: '1rem',
          textShadow: '0 2px 8px rgba(0,0,0,0.8)'
        }}>
          © 2025 Forum CareerExpo Marrakech. Tous droits réservés.
        </p>
        <p className="footer-text shimmer-luxury" style={{
          fontWeight: 600,
          color: '#f0c76e',
          letterSpacing: '0.05em',
          textShadow: '0 0 15px var(--glow)'
        }}>
          <span className="violet-letter">É</span>COLE NATIONALE DES SCIENCES APPLIQUÉES DE MARRAKECH
        </p>
      </div>
      
      {/* Decorative gradient line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #f0c76e, transparent)',
        boxShadow: '0 0 20px var(--glow)',
        borderRadius: '2px'
      }}></div>
    </footer>
  );
}
