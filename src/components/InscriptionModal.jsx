// src/components/InscriptionModal.jsx
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { studentAPI } from '../api/apiService';

export default function InscriptionModal({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    const [nom, prenom] = formData.get('nom').split(' ');
    
    const etudiantData = {
      nom: nom || formData.get('nom'),
      prenom: prenom || '',
      etablissement: formData.get('etablissement') || 'ENSA',
      niveau: formData.get('niveau'),
      status: 'PENDING',
      competition: { id: 3 }
    };

    const apiFormData = new FormData();
    apiFormData.append('etudiant', JSON.stringify(etudiantData));
    apiFormData.append('cv', formData.get('cv'));

    try {
      await studentAPI.create(apiFormData);
      alert('Inscription envoyée avec succès !');
      onClose();
    } catch (err) {
      setError('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(20px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8 }}
        onClick={e => e.stopPropagation()}
        className="card card-3d glow-pulse"
        style={{
          maxWidth: '520px',
          width: '90%',
          padding: '2.5rem',
          maxHeight: '90vh',
          overflowY: 'auto',
          transformStyle: 'preserve-3d'
        }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}>
          <X size={26} color="var(--violet)" />
        </button>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--violet)', textAlign: 'center' }}>
          S’inscrire au Forum
        </h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
          {error && <div style={{ color: '#f87171', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
              Nom complet
            </label>
            <input name="nom" type="text" placeholder="Entrez votre nom complet" required style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
              Établissement
            </label>
            <input name="etablissement" type="text" placeholder="Votre établissement" defaultValue="ENSA" required style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
              Niveau d'études
            </label>
            <select name="niveau" required style={{...inputStyle, color: 'var(--text)'}}>
              <option value="" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>Sélectionnez votre niveau</option>
              <option value="BAC +1" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>BAC + 1</option>
              <option value="BAC +2" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>BAC + 2</option>
              <option value="BAC +3" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>BAC + 3</option>
              <option value="BAC +4" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>BAC + 4</option>
              <option value="BAC +5" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>BAC + 5</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
              CV (PDF)
            </label>
            <input name="cv" type="file" accept=".pdf" required style={{ ...inputStyle, padding: '0.8rem' }} />
          </div>
          <button type="submit" disabled={loading} className="btn btn-premium luxury-focus" style={{ marginTop: '1rem', background: 'var(--violet)', color: 'black', opacity: loading ? 0.6 : 1 }}>
            {loading ? 'Envoi en cours...' : 'Envoyer ma candidature'}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

const inputStyle = {
  padding: '1rem 1.2rem',
  borderRadius: '14px',
  border: '2px solid var(--depth-3)',
  background: 'linear-gradient(135deg, var(--depth-1) 0%, var(--depth-2) 100%)',
  color: 'var(--text)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'all 0.3s',
  backdropFilter: 'blur(5px)',
  transformStyle: 'preserve-3d'
};
