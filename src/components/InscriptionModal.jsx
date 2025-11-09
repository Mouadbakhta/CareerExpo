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
    
    // Structure selon la documentation API
    const etudiantData = {
      nom: formData.get('nom'),
      prenom: formData.get('prenom'),
      etablissement: formData.get('etablissement'),
      telephone: formData.get('email'), // Utilise email comme telephone temporairement
      niveau: formData.get('niveau'),
      competition: { id: 3 }
    };

    const apiFormData = new FormData();
    apiFormData.append('etudiant', JSON.stringify(etudiantData));
    apiFormData.append('cvPdf', formData.get('cv'));
    
    if (formData.get('video')) {
      apiFormData.append('cvVideo', formData.get('video'));
    }

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
          S'inscrire au Forum
        </h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
          {error && <div style={{ color: '#f87171', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
                Nom
              </label>
              <input name="nom" type="text" placeholder="Votre nom" required style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
                Prénom
              </label>
              <input name="prenom" type="text" placeholder="Votre prénom" required style={inputStyle} />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
              Email
            </label>
            <input name="email" type="email" placeholder="votre.email@exemple.com" required style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
              Établissement
            </label>
            <input name="etablissement" type="text" placeholder="Votre établissement" defaultValue="ENSA Marrakech" required style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
              Niveau d'études
            </label>
            <select name="niveau" required style={{...inputStyle, color: 'var(--text)'}}>
              <option value="" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>Sélectionnez votre niveau</option>
              <option value="Licence 1" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>Licence 1</option>
              <option value="Licence 2" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>Licence 2</option>
              <option value="Licence 3" style={{background: 'var(--depth-1)', color: 'var(--text)'}}>Licence 3</option>
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
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--violet)', fontWeight: '600', fontSize: '0.95rem' }}>
              Vidéo de présentation (optionnel)
            </label>
            <input name="video" type="file" accept="video/*" style={{ ...inputStyle, padding: '0.8rem' }} />
            <small style={{ color: 'var(--depth-4)', fontSize: '0.8rem', marginTop: '0.3rem', display: 'block' }}>
              Formats acceptés: MP4, AVI, MOV (max 50MB)
            </small>
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