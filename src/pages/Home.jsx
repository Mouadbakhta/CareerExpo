// src/pages/Home.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import InscriptionModal from '../components/InscriptionModal';

import { authenticateAdmin, login } from '../utils/auth';

export default function Home({ onAdminLogin }) {
  const [showModal, setShowModal] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Raccourci clavier pour afficher/masquer la section admin
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'B' ) {
        e.preventDefault();
        setShowAdmin(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  const partners = [
    { name: "Stellantis", logo: "/Logos/Stellantis.jpg", website: "https://www.stellantis.com/" },
    { name: "Oracle", logo: "/Logos/Oracle.png", website: "https://www.oracle.com/" },
    { name: "Akkodis", logo: "/Logos/akkodis.jpg", website: "https://www.akkodis.com/" },
    { name: "AVL", logo: "/Logos/avl.png", website: "https://www.avl.com/" },
    { name: "Bank of Africa", logo: "/Logos/BankOfAfrica.png", website: "https://www.bankofafrica.ma/" },
    { name: "Capgemini", logo: "/Logos/capgemini.png", website: "https://www.capgemini.com/" },
    { name: "Inwi", logo: "/Logos/inwi0.jpg", website: "https://www.inwi.ma/" },
    { name: "Leyton", logo: "/Logos/Leyton.jpg", website: "https://www.leyton.com/" },
    { name: "Maroc Telecom", logo: "/Logos/MAROCTELECOM.jpg", website: "https://www.iam.ma/" },
    { name: "OCP Group", logo: "/Logos/ocpjpg.jpg", website: "https://www.ocpgroup.ma/" },
    { name: "Safy", logo: "/Logos/safy.png", website: "https://www.safy.ma/" }
  ];

  const schedule = [
    { time: "09:00", event: "Accueil & Inscription" },
    { time: "10:00", event: "Mot d'ouverture", speaker: "Directeur ENSA" },
    { time: "10:30", event: "IA & Innovation", speaker: "Dr. Amine El Khayati" },
    { time: "11:30", event: "Pause Café" },
    { time: "12:00", event: "Atelier CV", speaker: "Recruteurs OCP" },
    { time: "14:00", event: "Entretiens rapides" },
    { time: "16:00", event: "Remise des prix" },
    { time: "17:00", event: "Clôture" },
  ];

  const speakers = [
    { name: "Dr. Amine El Khayati", role: "Expert IA", company: "ENSIAS", photo: "https://i.pravatar.cc/150?img=1" },
    { name: "Mme. Salma Benali", role: "DRH", company: "OCP Group", photo: "https://i.pravatar.cc/150?img=2" },
    { name: "M. Youssef Alaoui", role: "CTO", company: "Maroc Telecom", photo: "https://i.pravatar.cc/150?img=3" },
  ];

  const jury = [
    { name: "M. Karim Lahlou", role: "Recruteur", company: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
    { name: "Mme. Nadia Chraibi", role: "Talent", company: "BMCE", logo: "https://logo.clearbit.com/boabank.com" },
    { name: "M. Reda Tazi", role: "HR Manager", company: "Attijariwafa", logo: "https://logo.clearbit.com/attijariwafabank.com" },
  ];

  return (
    <main style={{ paddingTop: '100px' }}>

      {/* ACCUEIL ROYAL - AVEC IMAGE EN ARRIÈRE-PLAN */}
      <section id="accueil" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        paddingTop: '2rem',
        backgroundImage: `url(/Logos/ENSAM.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay léger pour rendre le texte lisible sans trop assombrir */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(10, 15, 28, 0.5) 0%, rgba(10, 15, 28, 0.65) 50%, rgba(10, 15, 28, 0.75) 100%)',
          zIndex: 1
        }}></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <h1 className="royal-title">Forum CareerExpo 2025</h1>
          <p style={{
            marginTop: '0.6rem',
            fontSize: '0.95rem',
            color: '#94a3b8',
            letterSpacing: '1px',
            fontWeight: '600'
          }}>
            École Nationale des Sciences AppliquéS  de Marrakech
          </p>
          <p style={{
            marginTop: '0.4rem',
            fontSize: '1rem',
            color: '#F9B233',
            fontWeight: '700',
            textTransform: 'uppercase'
          }}>
            Rendez-vous le 15 et 16 Novembre 2025
          </p>
          <p style={{
            fontSize: '1.7rem',
            color: '#94a3b8',
            margin: '2rem auto',
            maxWidth: '900px',
            lineHeight: '1.8',
            fontWeight: '500'
          }}>
            <strong>500+ talents</strong> • <strong>30 entreprises leaders</strong> • <strong>2 jours d’opportunités</strong>
          </p>
          <CountdownTimer targetDate={new Date('2025-11-15T09:00:00')} />
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '3.5rem'
          }}>
            <button onClick={() => setShowModal(true)} className="btn btn-gold">
              S’inscrire
            </button>
            <a
              href="/guide.pdf"
              download
              className="btn"
              style={{
                background: 'transparent',
                border: '2px solid #F9B233',
                color: '#F9B233',
                transition: 'all 0.5s'
              }}
            >
              Télécharger le Guide
            </a>
          </div>
        </motion.div>
      </section>

      {/* À PROPOS */}
      <section id="à-propos" style={{ padding: '7rem 1.5rem' }}>
        <h2 className="section-title">À propos</h2>

        {/* Zone pour les photos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: '1100px',
            margin: '0 auto 4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {/* Photo 1 */}
          <div className="card" style={{
            padding: '0',
            overflow: 'hidden',
            height: '250px',
            background: 'linear-gradient(135deg, rgba(0,74,173,0.3), rgba(249,178,51,0.3))'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              color: '#F9B233',
              fontWeight: 'bold'
            }}>
              Photo 1
            </div>
          </div>

          {/* Photo 2 */}
          <div className="card" style={{
            padding: '0',
            overflow: 'hidden',
            height: '250px',
            background: 'linear-gradient(135deg, rgba(249,178,51,0.3), rgba(0,74,173,0.3))'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              color: '#F9B233',
              fontWeight: 'bold'
            }}>
              Photo 2
            </div>
          </div>

          {/* Photo 3 */}
          <div className="card" style={{
            padding: '0',
            overflow: 'hidden',
            height: '250px',
            background: 'linear-gradient(135deg, rgba(0,74,173,0.3), rgba(249,178,51,0.3))'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              color: '#F9B233',
              fontWeight: 'bold'
            }}>
              Photo 3
            </div>
          </div>
        </motion.div>

        {/* Texte détaillé */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '3rem',
            textAlign: 'left'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#F9B233',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Forum CareerExpo Marrakech 2025
          </h3>

          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.9',
            color: '#94a3b8'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Le <strong style={{ color: '#F9B233' }}>Forum CareerExpo Marrakech 2025</strong> est l'événement incontournable qui réunit
              <strong style={{ color: '#F9B233' }}> plus de 500 étudiants</strong> et <strong style={{ color: '#F9B233' }}>30 entreprises leaders</strong> du
              Maroc et de l'international. Organisé par l'École Nationale des Sciences Appliquées de Marrakech (ENSA-M),
              cet événement offre une plateforme unique pour connecter les talents de demain avec les opportunités professionnelles d'aujourd'hui.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Notre forum se distingue par sa diversité d'activités : des <strong style={{ color: '#F9B233' }}>conférences inspirantes</strong> animées
              par des experts de l'industrie, des <strong style={{ color: '#F9B233' }}>ateliers pratiques</strong> sur le développement de carrière,
              des <strong style={{ color: '#F9B233' }}>sessions de coaching CV</strong> personnalisées, et des <strong style={{ color: '#F9B233' }}>entretiens
              directs</strong> avec les recruteurs des plus grandes entreprises.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Que vous soyez étudiant en quête de votre premier stage, jeune diplômé à la recherche d'opportunités, ou professionnel
              souhaitant élargir votre réseau, le Forum CareerExpo est l'occasion idéale pour <strong style={{ color: '#F9B233' }}>booster votre
              carrière</strong>, découvrir les tendances du marché de l'emploi, et rencontrer les acteurs clés de votre secteur.
            </p>

            <p style={{ marginBottom: '0' }}>
              Rejoignez-nous le <strong style={{ color: '#F9B233' }}>15 novembre 2025</strong> pour une journée d'échanges, d'apprentissage
              et d'opportunités qui pourrait transformer votre avenir professionnel !
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" style={{ padding: '7rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
        <h2 className="section-title">Programme</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.2rem',
                padding: '1.8rem',
                position: 'relative'
              }}
            >
              <div>
                <strong style={{ color: '#004AAD', fontSize: '1.2rem' }}>{item.time}</strong>
                <span style={{ margin: '0 1rem', color: '#F9B233' }}>→</span>
                <span style={{ fontWeight: '600' }}>{item.event}</span>
              </div>
              {item.speaker && (
                <em style={{ color: '#F9B233', fontStyle: 'italic', fontWeight: '500' }}>
                  {item.speaker}
                </em>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONFÉRENCIERS */}
      <section id="conférenciers" style={{ padding: '7rem 1.5rem' }}>
        <h2 className="section-title">Conférenciers</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem'
        }}>
          {speakers.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15, scale: 1.02 }}
              className="card text-center"
            >
              <motion.img
                whileHover={{ scale: 1.15 }}
                src={s.photo}
                alt={s.name}
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  border: '5px solid #F9B233',
                  objectFit: 'cover',
                  boxShadow: '0 0 25px rgba(249,178,51,0.6)'
                }}
              />
              <h3 style={{ color: '#F9B233', fontWeight: 'bold', fontSize: '1.3rem' }}>{s.name}</h3>
              <p style={{ color: '#94a3b8', fontSize: '1rem' }}>{s.role} • {s.company}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* JURY CV */}
      <section id="jury-cv" style={{ padding: '7rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
        <h2 className="section-title">Jury CV</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          {jury.map((j, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.12, rotate: 3 }}
              className="card text-center"
            >
              <img
                src={j.logo}
                alt={j.company}
                style={{
                  height: '80px',
                  margin: '0 auto 1rem',
                  filter: 'brightness(0) invert(1)'
                }}
              />
              <h3 style={{ color: '#F9B233', fontWeight: 'bold' }}>{j.name}</h3>
              <p style={{ color: '#94a3b8' }}>{j.role} • {j.company}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ÉDITIONS PRÉCÉDENTES */}
      <section id="éditions" style={{ padding: '7rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
        <h2 className="section-title">Éditions Précédentes</h2>
        <p style={{
          textAlign: 'center',
          color: '#94a3b8',
          fontSize: '1.1rem',
          maxWidth: '700px',
          margin: '0 auto 4rem',
          lineHeight: '1.8'
        }}>
          Découvrez les moments forts de nos éditions passées
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { year: '2020', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500', route: '/edition-2020' },
            { year: '2021', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500', route: '/edition-2021' },
            { year: '2022', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500', route: '/edition-2022' },
            { year: '2023', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500', route: '/edition-2023' },
            { year: '2024', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500', route: '/edition-2024' }
          ].map((edition, i) => (
            <motion.div
              key={edition.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card"
              style={{
                padding: '0',
                overflow: 'hidden',
                height: '320px',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <img
                src={edition.image}
                alt={`Édition ${edition.year}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                background: 'linear-gradient(to top, rgba(10, 15, 28, 0.95), transparent)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <h3 style={{
                  color: '#F9B233',
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  margin: 0,
                  textShadow: '0 2px 10px rgba(249, 178, 51, 0.5)'
                }}>
                  {edition.year}
                </h3>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <motion.a
                  href={edition.route}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: '#F9B233',
                    color: '#0A0F1C',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  Consulter
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PARTENAIRES */}
      <section id="partenaires" style={{ padding: '7rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
        <h2 className="section-title">Partenaires</h2>
        
        {/* Logo carousel */}
        <div className="logo-carousel">
          <div className="logo-scroll">
            {partners.concat(partners).map((p, i) => (
              <img key={i} src={p.logo} alt={p.name} />
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card"
              style={{
                padding: '0',
                overflow: 'hidden',
                height: '120px',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <img
                src={p.logo}
                alt={p.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: p.name === 'AVL' ? 'contain' : p.name === 'Safy' ? 'contain' : 'cover',
                  display: 'block',
                  backgroundColor: p.name === 'AVL' ? '#f8f9fa' : 'transparent',
                  padding: p.name === 'Safy' ? '1rem' : '0'
                }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <motion.a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: '#F9B233',
                    color: '#0A0F1C',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Consulter
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT - UCA MARRAKECH */}
      <section id="contact" style={{ padding: '7rem 1.5rem', background: 'rgba(255,255,255,0.05)' }}>
        <h2 className="section-title">Contact</h2>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem'
        }}>
          <div>
            <h3 style={{ color: '#F9B233', marginBottom: '1.5rem', fontSize: '1.6rem', fontWeight: '700' }}>
              Université Cadi Ayyad
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '2', fontSize: '1.05rem' }}>
              <strong>École Nationale des Sciences Appliquées</strong><br />
              Avenue Abdelkarim El Khattabi, Guéliz<br />
              BP 575, Marrakech 40000, Maroc<br /><br />
              <strong>Tél :</strong> +212 5 24 44 81 37<br />
              <strong>Email :</strong> ensa@uca.ma<br />
              <strong>Site :</strong>{' '}
              <a href="http://www.ensa.ac.ma" style={{ color: '#004AAD', textDecoration: 'underline' }}>
                www.ensa.ac.ma
              </a>
            </p>
          </div>
          <div>
            <form style={{ display: 'grid', gap: '1.2rem' }}>
              <input type="text" placeholder="Votre nom" style={inputStyle} />
              <input type="email" placeholder="Email" style={inputStyle} />
              <textarea placeholder="Message" rows="5" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
              <button type="submit" className="btn btn-gold">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ADMIN - CONNEXION */}
      {showAdmin && (
        <section id="admin" style={{ padding: '7rem 1.5rem' }}>
          <h2 className="section-title">Espace Admin</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              padding: '3rem',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(15px)',
              borderRadius: '20px',
              border: '2px solid rgba(249, 178, 51, 0.3)',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setShowAdmin(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#F9B233',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}
              aria-label="Fermer la section admin"
            >
              ×
            </button>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                background: 'linear-gradient(135deg, #F9B233, #f39c12)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(249, 178, 51, 0.4)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A0F1C" strokeWidth="2.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 style={{ color: '#F9B233', fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                Connexion Admin
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                Accédez au tableau de bord administrateur
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoginError('');
                if (authenticateAdmin(adminEmail, adminPassword)) {
                  login();
                  onAdminLogin();
                  setShowAdmin(false);
                  setAdminEmail('');
                  setAdminPassword('');
                } else {
                  setLoginError('Email ou mot de passe incorrect');
                }
              }}
              style={{ display: 'grid', gap: '1.5rem' }}
            >
              <div>
                <label style={{
                  display: 'block',
                  color: '#e2e8f0',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  required
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  style={{
                    ...inputStyle,
                    width: '100%'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#e2e8f0',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Mot de passe
                </label>
                <input
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  required
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  style={{
                    ...inputStyle,
                    width: '100%'
                  }}
                />
              </div>

              {loginError && (
                <p style={{
                  color: '#f87171',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  margin: '0'
                }}>
                  {loginError}
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn btn-gold"
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  padding: '1.1rem',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '50px',
                  background: 'linear-gradient(45deg, #F9B233, #f39c12)',
                  color: '#0A0F1C',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(249, 178, 51, 0.5)',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                Connexion
              </motion.button>

              <p style={{
                textAlign: 'center',
                color: '#94a3b8',
                fontSize: '0.9rem',
                marginTop: '0.5rem'
              }}>
                Mot de passe oublié ? <a href="#" style={{ color: '#F9B233', textDecoration: 'underline' }}>Réinitialiser</a>
              </p>
            </form>
          </motion.div>
        </section>
      )}

      {/* MODAL INSCRIPTION */}
      <AnimatePresence>
        {showModal && <InscriptionModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </main>
  );
}


