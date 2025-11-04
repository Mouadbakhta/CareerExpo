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
        style={{
          maxWidth: '520px',
          width: '90%',
          padding: '2.5rem',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}>
          <X size={26} color="#aaa" />
        </button>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#F9B233', textAlign: 'center' }}>
          S’inscrire au Forum
        </h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F9B233', fontWeight: '600', fontSize: '0.95rem' }}>
              Nom complet
            </label>
            <input type="text" placeholder="Entrez votre nom complet" required style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F9B233', fontWeight: '600', fontSize: '0.95rem' }}>
              Email
            </label>
            <input type="email" placeholder="Entrez votre email" required style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F9B233', fontWeight: '600', fontSize: '0.95rem' }}>
              Téléphone
            </label>
            <input type="tel" placeholder="Entrez votre numéro de téléphone" required style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F9B233', fontWeight: '600', fontSize: '0.95rem' }}>
              Établissement
            </label>
            <select required style={inputStyle}>
              <option value="">Sélectionnez votre établissement</option>
              <option>FST</option>
              <option>ENSA</option>
              <option>ENS</option>
              <option>FLSH</option>
              <option>FSS</option>
              <option>FSJES</option>
              <option>FLA</option>
              <option>FP</option>
              <option>EST</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F9B233', fontWeight: '600', fontSize: '0.95rem' }}>
              Niveau d'études
            </label>
            <select required style={inputStyle}>
              <option value="">Sélectionnez votre niveau</option>
              <option>BAC + 1</option>
              <option>BAC + 2</option>
              <option>BAC + 3</option>
              <option>BAC + 4</option>
              <option>BAC + 5</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F9B233', fontWeight: '600', fontSize: '0.95rem' }}>
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