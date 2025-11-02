import { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/api';

export default function Dashboard() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    niveau: '',
    filiere: '',
    ecole: '',
    email: '',
    telephone: '',
  });

  const [cvFile, setCvFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const filieres = [
    'Génie Informatique',
    'Génie Industriel',
    'Génie Civil',
    'Génie Électrique',
    'Data Science & IA',
    'Cybersécurité',
    'Management',
  ];

  const niveaux = [
    '1ère année',
    '2ème année',
    '3ème année',
    '4ème année',
    '5ème année',
    'Master',
    'Doctorat',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setErrors(prev => ({ ...prev, cv: 'Seul le format PDF est autorisé' }));
        setCvFile(null);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, cv: 'Le CV ne doit pas dépasser 5 Mo' }));
        setCvFile(null);
        return;
      }
      setCvFile(file);
      setErrors(prev => ({ ...prev, cv: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nom) newErrors.nom = 'Nom requis';
    if (!formData.prenom) newErrors.prenom = 'Prénom requis';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.telephone || formData.telephone.length < 10) newErrors.telephone = 'Téléphone invalide';
    if (!formData.niveau) newErrors.niveau = 'Niveau requis';
    if (!formData.filiere) newErrors.filiere = 'Filière requise';
    if (!formData.ecole) newErrors.ecole = 'École requise';
    if (!cvFile) newErrors.cv = 'CV (PDF) requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const data = new FormData();
    data.append('etudiant', new Blob([JSON.stringify(formData)], { type: 'application/json' }));
    data.append('cv', cvFile);

    try {
      await api.post('/etudiants', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess(true);
      setFormData({
        nom: '', prenom: '', niveau: '', filiere: '', ecole: '', email: '', telephone: ''
      });
      setCvFile(null);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen py-20"
      style={{ paddingTop: '100px' }}
    >
      <div className="container">
        <h1 className="text-center text-4xl font-bold mb-2" style={{
          background: 'linear-gradient(90deg, #fff, var(--gold))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Inscription Étudiant
        </h1>
        <p className="text-center text-lg mb-12" style={{ color: 'var(--muted)' }}>
          Remplissez le formulaire et déposez votre CV (PDF)
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
          style={{
            background: 'var(--card)',
            padding: '2.5rem',
            borderRadius: 'var(--radius)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(33, 150, 243, 0.2)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: '500' }}>
                Nom <span style={{ color: '#f87171' }}>*</span>
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: errors.nom ? '2px solid #f87171' : '1px solid rgba(33, 150, 243, 0.5)',
                  background: '#fff',
                  color: '#0a1747',
                  fontSize: '1rem'
                }}
              />
              {errors.nom && <p style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.nom}</p>}
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: '500' }}>
                Prénom <span style={{ color: '#f87171' }}>*</span>
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: errors.prenom ? '2px solid #f87171' : '1px solid rgba(33, 150, 243, 0.5)',
                  background: '#fff',
                  color: '#0a1747'
                }}
              />
              {errors.prenom && <p style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.prenom}</p>}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: '500' }}>
                Niveau <span style={{ color: '#f87171' }}>*</span>
              </label>
              <select
                name="niveau"
                value={formData.niveau}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: errors.niveau ? '2px solid #f87171' : '1px solid rgba(33, 150, 243, 0.5)',
                  background: '#fff',
                  color: '#0a1747'
                }}
              >
                <option value="">Sélectionner</option>
                {niveaux.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              {errors.niveau && <p style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.niveau}</p>}
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: '500' }}>
                Filière <span style={{ color: '#f87171' }}>*</span>
              </label>
              <select
                name="filiere"
                value={formData.filiere}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: errors.filiere ? '2px solid #f87171' : '1px solid rgba(33, 150, 243, 0.5)',
                  background: '#fff',
                  color: '#0a1747'
                }}
              >
                <option value="">Sélectionner</option>
                {filieres.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
              {errors.filiere && <p style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.filiere}</p>}
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: '500' }}>
              École <span style={{ color: '#f87171' }}>*</span>
            </label>
            <input
              type="text"
              name="ecole"
              value={formData.ecole}
              onChange={handleChange}
              placeholder="ex: ENSIAS, EMI, EMSI"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                border: errors.ecole ? '2px solid #f87171' : '1px solid rgba(33, 150, 243, 0.5)',
                background: '#fff',
                color: '#0a1747'
              }}
            />
            {errors.ecole && <p style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.ecole}</p>}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: '500' }}>
                Email <span style={{ color: '#f87171' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: errors.email ? '2px solid #f87171' : '1px solid rgba(33, 150, 243, 0.5)',
                  background: '#fff',
                  color: '#0a1747'
                }}
              />
              {errors.email && <p style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.email}</p>}
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: '500' }}>
                Téléphone <span style={{ color: '#f87171' }}>*</span>
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="06 XX XX XX XX"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: errors.telephone ? '2px solid #f87171' : '1px solid rgba(33, 150, 243, 0.5)',
                  background: '#fff',
                  color: '#0a1747'
                }}
              />
              {errors.telephone && <p style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.telephone}</p>}
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: '500' }}>
              CV (PDF uniquement, max 5 Mo) <span style={{ color: '#f87171' }}>*</span>
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '12px',
                border: errors.cv ? '2px solid #f87171' : '1px dashed rgba(33, 150, 243, 0.5)',
                background: 'rgba(33, 150, 243, 0.05)',
                color: '#fff'
              }}
            />
            {cvFile && <p style={{ color: '#60a5fa', fontSize: '0.875rem', marginTop: '0.5rem' }}>Fichier : {cvFile.name}</p>}
            {errors.cv && <p style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.cv}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            style={{
              marginTop: '2rem',
              width: '100%',
              padding: '1rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, var(--gold), #e69c1f)',
              color: '#0a1747',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Envoi en cours...' : 'Soumettre mon inscription'}
          </motion.button>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(34, 197, 94, 0.2)',
                border: '1px solid #22c55e',
                borderRadius: '12px',
                color: '#22c55e',
                textAlign: 'center',
                fontWeight: '500'
              }}
            >
              Inscription réussie ! Votre badge sera envoyé par email.
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}