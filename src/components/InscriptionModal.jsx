// src/components/InscriptionModal.jsx
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function InscriptionModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Inscription envoyée avec succès !');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'rgba(10, 15, 28, 0.85)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8 }}
        onClick={e => e.stopPropagation()}
        className="card"
        style={{ maxWidth: '520px', width: '90%', padding: '2.5rem' }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}>
          <X size={26} color="#aaa" />
        </button>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#F9B233', textAlign: 'center' }}>
          S’inscrire au Forum
        </h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
          <input type="text" placeholder="Nom complet" required style={inputStyle} />
          <input type="email" placeholder="Email" required style={inputStyle} />
          <input type="tel" placeholder="Téléphone" required style={inputStyle} />
          <select required style={inputStyle}>
            <option value="">Filière</option>
            <option>GI</option>
            <option>GE</option>
            <option>GC</option>
            <option>IIA</option>
          </select>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F9B233', fontWeight: '600' }}>
              CV (PDF)
            </label>
            <input type="file" accept=".pdf" required style={{ ...inputStyle, padding: '0.8rem' }} />
          </div>
          <button type="submit" className="btn btn-gold" style={{ marginTop: '1rem' }}>
            Envoyer ma candidature
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

const inputStyle = {
  padding: '1rem 1.2rem',
  borderRadius: '14px',
  border: '2px solid rgba(255,255,255,0.2)',
  background: 'rgba(255,255,255,0.1)',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  transition: 'all 0.3s',
  backdropFilter: 'blur(5px)'
};