// src/pages/Dashboard.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { logout } from '../utils/auth';

export default function Dashboard({ onLogout }) {
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    // Load inscriptions from localStorage or API
    const storedInscriptions = localStorage.getItem('careerExpoInscriptions');
    if (storedInscriptions) {
      setInscriptions(JSON.parse(storedInscriptions));
    }
  }, []);

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: '#0A0F1C' }}>
      {/* HEADER DASHBOARD */}
      <section style={{ padding: '3rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h1 style={{ color: '#F9B233', fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>
                Tableau de Bord Admin
              </h1>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                Gestion des inscriptions CareerExpo 2025
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              style={{
                background: 'linear-gradient(45deg, #F9B233, #f39c12)',
                color: '#0A0F1C',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(249, 178, 51, 0.5)',
                transition: 'all 0.3s'
              }}
            >
              Déconnexion
            </motion.button>
          </div>

          {/* STATS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(249,178,51,0.1), rgba(249,178,51,0.05))',
                border: '1px solid rgba(249,178,51,0.3)'
              }}
            >
              <h3 style={{ color: '#F9B233', fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem' }}>
                {inscriptions.length}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', fontWeight: '600' }}>
                Inscriptions Totales
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(0,74,173,0.1), rgba(0,74,173,0.05))',
                border: '1px solid rgba(0,74,173,0.3)'
              }}
            >
              <h3 style={{ color: '#004AAD', fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem' }}>
                {new Set(inscriptions.map(i => i.filiere)).size}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', fontWeight: '600' }}>
                Spécialités
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.05))',
                border: '1px solid rgba(34,197,94,0.3)'
              }}
            >
              <h3 style={{ color: '#22c55e', fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem' }}>
                {inscriptions.length > 0 ? '100%' : '0%'}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', fontWeight: '600' }}>
                Taux de Réussite
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TABLE INSCRIPTIONS */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ color: '#F9B233', fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>
            Liste des Inscriptions
          </h2>

          {inscriptions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 style={{ color: '#94a3b8', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Aucune inscription pour le moment
              </h3>
              <p style={{ color: '#64748b' }}>
                Les inscriptions apparaîtront ici une fois que les étudiants se seront inscrits via le formulaire.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card"
              style={{
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{
                overflowX: 'auto',
                maxHeight: '600px',
                overflowY: 'auto'
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.95rem'
                }}>
                  <thead>
                    <tr style={{
                      background: 'rgba(249,178,51,0.1)',
                      position: 'sticky',
                      top: 0,
                      zIndex: 1
                    }}>
                      <th style={{ padding: '1.5rem 1rem', textAlign: 'left', color: '#F9B233', fontWeight: '700' }}>Nom</th>
                      <th style={{ padding: '1.5rem 1rem', textAlign: 'left', color: '#F9B233', fontWeight: '700' }}>Prénom</th>
                      <th style={{ padding: '1.5rem 1rem', textAlign: 'left', color: '#F9B233', fontWeight: '700' }}>Email</th>
                      <th style={{ padding: '1.5rem 1rem', textAlign: 'left', color: '#F9B233', fontWeight: '700' }}>Téléphone</th>
                      <th style={{ padding: '1.5rem 1rem', textAlign: 'left', color: '#F9B233', fontWeight: '700' }}>École</th>
                      <th style={{ padding: '1.5rem 1rem', textAlign: 'left', color: '#F9B233', fontWeight: '700' }}>Niveau</th>
                      <th style={{ padding: '1.5rem 1rem', textAlign: 'left', color: '#F9B233', fontWeight: '700' }}>Filière</th>
                      <th style={{ padding: '1.5rem 1rem', textAlign: 'left', color: '#F9B233', fontWeight: '700' }}>CV</th>
                      <th style={{ padding: '1.5rem 1rem', textAlign: 'left', color: '#F9B233', fontWeight: '700' }}>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inscriptions.map((inscription, i) => (
                      <motion.tr
                        key={inscription.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        style={{
                          borderBottom: '1px solid rgba(255,255,255,0.1)',
                          transition: 'background 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.closest('tr').style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.target.closest('tr').style.background = 'transparent'}
                      >
                        <td style={{ padding: '1.5rem 1rem', color: '#e2e8f0', fontWeight: '600' }}>{inscription.nom}</td>
                        <td style={{ padding: '1.5rem 1rem', color: '#e2e8f0', fontWeight: '600' }}>{inscription.prenom}</td>
                        <td style={{ padding: '1.5rem 1rem', color: '#94a3b8' }}>{inscription.email}</td>
                        <td style={{ padding: '1.5rem 1rem', color: '#94a3b8' }}>{inscription.telephone}</td>
                        <td style={{ padding: '1.5rem 1rem', color: '#94a3b8' }}>{inscription.ecole}</td>
                        <td style={{ padding: '1.5rem 1rem', color: '#94a3b8' }}>{inscription.niveau}</td>
                        <td style={{ padding: '1.5rem 1rem', color: '#94a3b8' }}>{inscription.filiere}</td>
                        <td style={{ padding: '1.5rem 1rem' }}>
                          {inscription.cv ? (
                            <a
                              href={inscription.cv}
                              download
                              style={{
                                color: '#F9B233',
                                textDecoration: 'underline',
                                fontWeight: '600'
                              }}
                            >
                              Télécharger
                            </a>
                          ) : (
                            <span style={{ color: '#64748b' }}>Non fourni</span>
                          )}
                        </td>
                        <td style={{ padding: '1.5rem 1rem', color: '#94a3b8' }}>{inscription.date}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
