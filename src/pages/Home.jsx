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
    { name: "Capgemini", logo: "/Logos/Capgemini.png", website: "https://www.capgemini.com/" },
    { name: "Retain", logo: "/Logos/retain.png", website: "https://www.retain.com/" },
    { name: "Bank of Africa", logo: "/Logos/BankofAfrica.png", website: "https://www.bankofafrica.ma/" },
    { name: "Istya Group", logo: "/Logos/istya.png", website: "https://www.istya.com/" },
    { name: "Oriliss Consulting", logo: "/Logos/OrilissConsulting.png", website: "https://www.orilisconsulting.ma/" },
    { name: "Green Energy Park", logo: "/Logos/greenenergypark.png", website: "https://www.greenenergypark.ma/" },
    { name: "Leyton", logo: "/Logos/Leyton.png", website: "https://www.leyton.com/" },
    { name: "Lear", logo: "/Logos/lear.png", website: "https://www.lear.com/" },
    { name: "Université Cadi Ayyad", logo: "/Logos/uca.png", website: "https://www.uca.ma/" },
    { name: "ENSA Marrakech", logo: "/Logos/ensa.png", website: "http://www.ensa.ac.ma/" }
  ];

  const [activeDay, setActiveDay] = useState(1);

  const scheduleDay1 = [
    { time: "8:30 – 9:00", event: "Accueil & Check-in des participants" },
    { time: "9:00 – 9:45", event: "Mot de Monsieur le Président de l'UCA & Mot de Monsieur le Directeur de l'ENSAM", speaker: "Professeur Belaid BOUGADIR & Professeur Hassan AYAD", location: "amphithéâtre" },
    { time: "9:45 – 10:00", event: "Présentation de l'Office Marocain de la Propriété Industrielle et Commerciale - OMPIC", location: "amphithéâtre" },
    { time: "10:00 – 11:00", event: "Conférence internationale : L'alternance et la Recherche Appliquée: De nouveau horizons pour les écoles d'ingénieurs", speaker: "REKLAOUI KAMAL & ALEXIS TODOSKOFF", location: "amphithéâtre" },
    { time: "11:15 – 12:15", event: "PANEL 1: IA et transformation du salariat: révolution ou évolution ?", location: "amphithéâtre" },
    { time: "12:15 – 13:15", event: "PANEL 2: Innover, entreprendre, évoluer: l'impact de l'IA sur les leaders de demain", location: "amphithéâtre" },
    { time: "13:15 – 18:00", event: "Sessions de recrutement et entretiens individuels avec les entreprises partenaires", location: "salles / stands dédiés" }
  ];

  const scheduleDay2 = [
    { time: "9:00 – 11:30", event: "Compétition des CVS", location: "amphithéâtre" },
    { time: "9:00 – 11:30", event: "Tables rondes", location: "amphithéâtre" }
  ];

  const currentSchedule = activeDay === 1 ? scheduleDay1 : scheduleDay2;

  const speakers = [
    { 
      name: "Alexis Todoskoff", 
      title: "- Responsable 5a/M2 Qualité Logiciel et SdF\n- Responsable M2 ITVL\n- Coordinateur ENSA-Maroc\n- Polytech Angers\n- Responsable GT Ingénierie des Exigences\n- Responsable des Relations Extérieures\n- CFTL", 
      photo: "/Conferenciers/Conferiencier1.png",
      linkedin: "https://www.linkedin.com/in/alexis-todoskoff/"
    },
    { 
      name: "Kamal Reklaoui", 
      title: "Directeur de l'École Nationale des Sciences Appliquées de Tétouan", 
      photo: "/Conferenciers/Conferencier2.jpeg",
      linkedin: "https://www.linkedin.com/in/kamal-reklaoui-b4aaa782/"
    }
  ];

  const jury = [
    { 
      name: "Fatine Elharouni", 
      title: "Docteure, Maîtresse Assistante en Gestion de Projet et en Gestion de la Chaîne d'Approvisionnement à l'École Nationale des Sciences Appliquées de Marrakech", 
      photo: "../public/jury/Jury1.jpeg",
      linkedin: "https://www.linkedin.com/in/fatine-elharouni-5a727821/"
    },
    { 
      name: "Abdellah Tajer", 
      title: "Professeur assistant à l'École nationale des Sciences Appliquées de Marrakech", 
      photo: "./public/jury/Jury2.jpeg",
      linkedin: "https://www.linkedin.com/in/abdellah-tajer-744047155/"
    },
    { 
      name: "Aissam Bekkari", 
      title: "Enseignant chercheur à l'École Nationale des Sciences Appliquées de Marrakech", 
      photo: "./public/jury/Jury3.jpeg",
      linkedin: "https://www.linkedin.com/in/aissam-bekkari-979102177/"
    }
  ];

  return (
    <main style={{ paddingTop: '100px' }}>

      {/* MODERN HERO SECTION */}
     <section
  id="accueil"
  style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    padding: '7rem 2rem',
    backgroundColor: '#0b0b0e',
    backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(40, 40, 50, 0.7) 0%, rgba(10, 10, 15, 0.95) 80%),
      url('/Logos/ENSAM.png')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
  }}
>
  {/* Elegant animated overlay */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background:
        'linear-gradient(135deg, rgba(189,175,255,0.07) 0%, rgba(240,199,110,0.07) 100%)',
      animation: 'floatBg 10s ease-in-out infinite alternate',
      zIndex: 0,
      mixBlendMode: 'soft-light',
    }}
  ></div>

  {/* Optional subtle vignette for contrast */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
      zIndex: 1,
    }}
  ></div>

  {/* Main content */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    style={{
      zIndex: 2,
      position: 'relative',
      maxWidth: '900px',
      width: '100%',
    }}
  >
    <h1
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '4rem',
        fontWeight: '700',
        color: '#f0c76e',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        lineHeight: '1.2',
        marginBottom: '1.5rem',
      }}
    >
      Forum <span style={{ color: '#f0c76e' }}>CareerExpo 2025</span>
    </h1>

    

    <CountdownTimer targetDate={new Date('2025-11-15T09:00:00')} />

    <div
      style={{
        display: 'flex',
        gap: '1.2rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '3rem',
      }}
    >
      <button
        onClick={() => setShowModal(true)}
        style={{
          padding: '0.9rem 2.2rem',
          background: 'transparent',
          border: '2px solid #f0c76e',
          color: '#f0c76e',
          borderRadius: '8px',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          fontSize: '1rem',
          letterSpacing: '1px',
          cursor: 'pointer',
          transition: 'all 0.4s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f0c76e';
          e.currentTarget.style.color = '#0b0b0e';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#f0c76e';
        }}
      >
        S’inscrire
      </button>

      <a
        href="/guide.pdf"
        download
        style={{
          padding: '0.9rem 2.2rem',
          background: 'transparent',
          border: '2px solid rgba(255,255,255,0.3)',
          color: 'rgba(255,255,255,0.9)',
          borderRadius: '8px',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          fontSize: '1rem',
          letterSpacing: '1px',
          transition: 'all 0.4s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.color = '#f0c76e';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
        }}
      >
        Télécharger le Guide
      </a>
    </div>
  </motion.div>
</section>



      {/* À PROPOS */}
      <section id="à-propos" style={{ padding: '7rem 1.5rem' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2rem',
          fontWeight: '700',
          color: '#f0c76e',
          textAlign: 'center',
          marginBottom: '1rem',
          textShadow: 'none'
        }}>
          À PROPOS
        </h2>
        <div style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #f0c76e, transparent)',
          margin: '0 auto 3rem'
        }}></div>

        {/* Pourquoi participer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '3rem',
            fontFamily: 'var(--font-headings)'
          }}>
            Pourquoi devriez-vous participer ?
          </h3>
          
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                title: 'Opportunités de carrière',
                description: 'Rencontrez directement les recruteurs des plus grandes entreprises du Maroc et de l\'international. Décrochez votre stage ou emploi de rêve.'
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
                title: 'Développement professionnel',
                description: 'Participez à des ateliers pratiques sur le CV, l\'entretien d\'embauche et le personal branding pour booster votre profil.'
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: 'Networking de qualité',
                description: 'Élargissez votre réseau professionnel en rencontrant des ingénieurs, DRH, entrepreneurs et alumni expérimentés.'
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
                title: 'Innovation et IA',
                description: 'Découvrez les dernières tendances technologiques et l\'impact de l\'IA sur l\'ingénierie et l\'entrepreneuriat.'
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>,
                title: 'Compétition CV',
                description: 'Participez au concours de CV et gagnez des prix tout en recevant des conseils d\'experts pour améliorer votre candidature.'
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
                title: 'Conférences inspirantes',
                description: 'Assistez à des conférences de haut niveau animées par des experts reconnus dans leurs domaines d\'expertise.'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card card-3d"
                style={{
                  padding: '2rem',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {benefit.icon}
                </div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-headings)'
                }}>
                  {benefit.title}
                </h4>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Présentation détaillée */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card card-3d"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '3rem 2rem',
            textAlign: 'left'
          }}
        >
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '2rem',
            textAlign: 'center',
            fontFamily: 'var(--font-headings)'
          }}>
            Forum CareerExpo Marrakech 2025
          </h3>

          <div className="prose" style={{
            fontSize: '0.75rem',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'justify'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
             Dans le cadre de sa mission d’excellence et d’insertion professionnelle, <strong style={{ color: '#f0c76e' }}>l’École Nationale des Sciences Appliquées de Marrakech (ENSA-M)</strong>, à travers ses Clubs étudiants, organise la <strong style={{ color: '#f0c76e' }}>cinquième édition du Forum CareerExpo</strong>, les <strong style={{ color: '#f0c76e' }}>15 et 16 novembre 2025</strong>, sur le campus de l’établissement.<br /><br />
             Cet événement d’envergure régionale vise à rapprocher les étudiants ingénieurs de haut niveau des entreprises nationales et internationales, tout en mettant en lumière <strong style={{ color: '#f0c76e' }}>les compétences techniques, l’innovation et le professionnalisme</strong> qui caractérisent les diplômés de l’ENSA-M. Plus de <strong style={{ color: '#f0c76e' }}>500 étudiants</strong> et <strong style={{ color: '#f0c76e' }}>30 entreprises leaders</strong> du Maroc et de l’international se réuniront pour connecter les talents de demain aux opportunités d’aujourd’hui.
            </p>

            
         <p style={{ marginBottom: '1.5rem' }}>
          Notre forum se distingue par sa diversité d’activités : des <strong style={{ color: '#f0c76e' }}>conférences inspirantes</strong> animées par des experts de l’industrie, des <strong style={{ color: '#f0c76e' }}>ateliers pratiques</strong> sur le développement de carrière, des <strong style={{ color: '#f0c76e' }}>sessions de coaching CV</strong> personnalisées, et des <strong style={{ color: '#f0c76e' }}>entretiens directs</strong> avec les recruteurs des plus grandes entreprises.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
        Que vous soyez étudiant en quête de votre premier stage, jeune diplômé à la recherche d’opportunités, ou professionnel souhaitant élargir votre réseau, le <strong style={{ color: '#f0c76e' }}>Forum CareerExpo</strong> est l’occasion idéale pour <strong style={{ color: '#f0c76e' }}>booster votre carrière</strong>, découvrir les tendances du marché de l’emploi, et rencontrer les acteurs clés de votre secteur.
       </p>

       <p style={{ marginBottom: '0' }}>
       Rejoignez-nous le <strong style={{ color: '#f0c76e' }}>15 et 16 novembre 2025</strong> pour deux journées d’échanges, d’apprentissage et d’opportunités qui pourrait transformer votre avenir professionnel !
      </p>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" style={{ padding: '4rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            fontWeight: '700',
            color: '#f0c76e',
          textAlign: 'center',
          marginBottom: '1rem',
          textShadow: 'none'
        }}>
            PROGRAMME
          </h2>
          <div style={{
            width: '100px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #f0c76e, transparent)',
            margin: '0 auto 2rem'
          }}></div>
          <div className="card card-3d" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '1.5rem'
          }}>
            <pre style={{ color: '#f0c76e', fontSize: '1.5rem', fontWeight: '1000', marginBottom: '0.5rem' }}>
              C A R E E R   E X P O  -  5 È M E  É D I T I O N 
            </pre>
            <p style={{ color: 'var(--depth-4)', fontSize: '0.875rem', lineHeight: '1.4', margin: 0 }}>
              <pre>S O U S   L E   T H È M E</pre> 
              <br>
              </br> 
              <strong>L'INGÉNIERIE À L'ENTREPRENEURIAT : L'IA COMME ACCÉLÉRATEUR D'INNOVATION</strong>
            </p>
          </div>
        </motion.div>
        
        {/* Onglets Jour 1 / Jour 2 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem',
          gap: '1rem'
        }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDay(1)}
            style={{
              padding: '1rem 2rem',
              borderRadius: '25px',
              border: 'none',
              background: activeDay === 1 ? '#f0c76e' : 'rgba(255,255,255,0.1)',
              color: activeDay === 1 ? '#0b0b0e' : '#f0c76e',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            14 Novembre 2025
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDay(2)}
            style={{
              padding: '1rem 2rem',
              borderRadius: '25px',
              border: 'none',
              background: activeDay === 2 ? '#f0c76e' : 'rgba(255,255,255,0.1)',
              color: activeDay === 2 ? '#0b0b0e' : '#f0c76e',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            15 Novembre 2025
          </motion.button>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentSchedule.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="card card-3d"
                  style={{
                    padding: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                    {/* Time Badge with Icon */}
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      color: '#f0c76e',
                      padding: '1rem 1.5rem',
                      borderRadius: '15px',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      minWidth: 'fit-content',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      {item.time}
                    </div>
                    
                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                        {/* Event Icon */}
                        <div style={{
                          background: 'rgba(255,255,255,0.05)',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                            {item.event.includes('Accueil') ? 
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/> :
                             item.event.includes('Mot de') ? 
                              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/> :
                             item.event.includes('Présentation') ? 
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"/> :
                             item.event.includes('Conférence') ? 
                              <g><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></g> :
                             item.event.includes('PANEL') ? 
                              <g><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></g> :
                             item.event.includes('Sessions') ? 
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/> :
                             item.event.includes('Compétition') ? 
                              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M14 20h4.5a2.5 2.5 0 0 0 0-5H14M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM6 2h12"/> :
                             item.event.includes('Tables') ? 
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/> :
                              <g><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></g>}
                          </svg>
                        </div>
                        
                        <div style={{ flex: 1 }}>
                          <h4 style={{ 
                            color: 'var(--text)', 
                            fontWeight: '700', 
                            margin: '0 0 1rem 0', 
                            fontSize: '0.875rem',
                            lineHeight: '1.4'
                          }}>
                            {item.event}
                          </h4>
                          
                          {item.speaker && (
                            <div style={{ 
                              background: 'rgba(255,255,255,0.05)',
                              padding: '0.8rem 1.2rem',
                              borderRadius: '12px',
                              border: '1px solid rgba(255,255,255,0.1)',
                              marginBottom: '1rem'
                            }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                                <span style={{ fontSize: '1rem' }}></span>
                                <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '1rem' }}>Intervenant</span>
                              </div>
                              <p style={{ 
                                color: 'var(--text)', 
                                fontWeight: '600', 
                                margin: 0, 
                                fontSize: '0.875rem'
                              }}>
                                {item.speaker}
                              </p>
                            </div>
                          )}
                          
                          {item.location && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                              <div style={{
                                background: 'rgba(240,199,110,0.2)',
                                borderRadius: '50%',
                                width: '28px',
                                height: '28px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2">
                                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                  <polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                              </div>
                              <span style={{ 
                                color: 'var(--depth-4)', 
                                fontSize: '0.875rem',
                                fontWeight: '600'
                              }}>
                                {item.location}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CONFÉRENCIERS */}
      <section id="conférenciers" style={{ padding: '4rem 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            fontWeight: '700',
            color: '#f0c76e',
          textAlign: 'center',
          marginBottom: '1rem',
          textShadow: 'none'
        }}>
            CONFÉRENCIERS
          </h2>
          <div style={{
            width: '100px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #f0c76e, transparent)',
            margin: '0 auto 3rem'
          }}></div>
        </motion.div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {speakers.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card card-3d float-3d"
              style={{
                padding: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={s.photo}
                  alt={s.name}
                  style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    border: '3px solid #f0c76e',
                    objectFit: 'cover',
                    boxShadow: '0 0 15px rgba(249,178,51,0.3)',
                    marginBottom: '1rem'
                  }}
                />
                <motion.a
                  href={s.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#0077B5',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </motion.a>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  color: '#ffffff', 
                  fontWeight: '600', 
                  fontSize: '0.875rem', 
                  margin: '0 0 0.75rem 0',
                  textAlign: 'left'
                }}>{s.name}</h3>
                <p style={{ 
                  color: 'var(--depth-4)', 
                  fontSize: '0.875rem', 
                  lineHeight: '1.4',
                  margin: 0,
                  textAlign: 'left',
                  whiteSpace: 'pre-line'
                }}>{s.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* JURY CV */}
      <section id="jury-cv" style={{ padding: '4rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2rem',
          fontWeight: '700',
          color: '#f0c76e',
          textAlign: 'center',
          marginBottom: '1rem',
          textShadow: 'none'
        }}>
          JURY CV
        </h2>
        <div style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #f0c76e, transparent)',
          margin: '0 auto 3rem'
        }}></div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {jury.map((j, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card card-3d"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: '320px'
              }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={j.photo}
                alt={j.name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '3px solid #f0c76e',
                  objectFit: 'cover',
                  boxShadow: '0 0 15px rgba(249,178,51,0.3)',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{ 
                color: '#ffffff', 
                fontWeight: '600', 
                fontSize: '0.875rem', 
                margin: '0 0 0.75rem 0'
              }}>{j.name}</h3>
              <p style={{ 
                color: 'var(--depth-4)', 
                fontSize: '0.75rem', 
                lineHeight: '1.4',
                margin: '0 0 1rem 0',
                flex: 1
              }}>{j.title}</p>
              <motion.a
                href={j.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#0077B5',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  transition: 'all 0.3s'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ÉDITIONS PRÉCÉDENTES */}
      <section id="éditions" style={{ padding: '4rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2rem',
          fontWeight: '700',
          color: '#f0c76e',
          textAlign: 'center',
          marginBottom: '1rem',
          textShadow: 'none'
        }}>
          ÉDITIONS PRÉCÉDENTES
        </h2>
        <div style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #f0c76e, transparent)',
          margin: '0 auto 1rem'
        }}></div>
        <p style={{
          fontSize: '1rem',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '700px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6',
            textAlign: 'justify'
          }}>
            Découvrer les moments forts qui ont marqué les éditions précédentes de Career Expo
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { year: '2022', image: '/editions/Edition2022Poster.png', route: '/edition-2022' },
            { year: '2023', image: '/editions/Edition2023.png', route: '/edition-2023' },
            { year: '2024', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500', route: '/edition-2024' }
          ].map((edition, i) => (
            <motion.div
              key={edition.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card card-3d"
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
                  color: '#ffffff',
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
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <motion.a
                  href={edition.route}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: '#f0c76e',
                    color: '#0b0b0e',
                    padding: '0.8rem 2rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '1rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>Consulter</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PARTENAIRES */}
      <section id="partenaires" style={{ 
        padding: '4rem 1.5rem', 
        background: 'rgba(255,255,255,0.03)'
      }}>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}
        >
          <div style={{ display: 'none' }}>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #f0c76e, #bdafff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Partenaires d'Excellence
            </span>
          </div>
          
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            fontWeight: '700',
            color: '#f0c76e',
            marginBottom: '0.8rem',
            textShadow: 'none'
          }}>
            NOS PARTENAIRES
          </h2>
          
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '700px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6',
            textAlign: 'justify'
          }}>
            Ensemble, nous façonnons l'avenir de l'excellence académique et professionnelle
          </p>
          
          <div style={{
            width: '100px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #f0c76e, transparent)',
            margin: '0 auto'
          }}></div>
        </motion.div>
        
        {/* Luxury Logo Carousel */}
        <div style={{
          overflow: 'hidden',
          margin: '3rem 0',
          background: 'white',
          padding: '1rem 0',
          borderRadius: '10px',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="logo-scroll">
            {partners.concat(partners).map((p, i) => (
              <img 
                key={i}
                src={p.logo} 
                alt={p.name}
              />
            ))}
          </div>
        </div>

        {/* Premium Grid */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 4rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem'
          }}>
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                style={{ position: 'relative', cursor: 'pointer' }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '15px',
                  border: '2px solid rgba(240,199,110,0.2)',
                  overflow: 'hidden',
                  height: '140px',
                  position: 'relative',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    animation: 'shine 3s infinite',
                    pointerEvents: 'none'
                  }}></div>
                  
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem'
                  }}>
                    <img
                      src={p.logo}
                      alt={p.name}
                      style={{
                        width: p.name === 'Capgemini' || p.name === 'Bank of Africa' || p.name === 'Istya Group' ? '95%' : '85%',
                        height: p.name === 'Capgemini' || p.name === 'Bank of Africa' || p.name === 'Istya Group' ? '95%' : '85%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))'
                      }}
                    />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: '#f0c76e',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.8rem',
                      padding: '1rem'
                    }}
                  >
                    <h4 style={{
                      color: '#0b0b0e',
                      fontSize: '1rem',
                      fontWeight: '700',
                      textAlign: 'center',
                      margin: 0
                    }}>
                      {p.name}
                    </h4>
                    
                    <motion.a
                      href={p.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: '#0b0b0e',
                        color: '#f0c76e',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '25px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <span>Voir</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </section>

      {/* CONTACT - UCA MARRAKECH */}
      <section id="contact" style={{ padding: '4rem 1.5rem', background: 'rgba(255,255,255,0.05)' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2rem',
          fontWeight: '700',
          color: '#f0c76e',
          textAlign: 'center',
          marginBottom: '1rem',
          textShadow: 'none'
        }}>
          CONTACT
        </h2>
        <div style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #f0c76e, transparent)',
          margin: '0 auto 3rem'
        }}></div>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem'
        }}>
          <div>
            <h3 style={{ 
              color: '#ffffff', 
              marginBottom: '1.5rem', 
              fontSize: 'var(--text-xl)', 
              fontWeight: 'var(--font-semibold)',
              textAlign: 'center'
            }}>
              Informations de Contact
            </h3>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.4 }}
              className="card card-3d"
              style={{
                padding: '2rem',
                height: '440px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* University Header */}
              <div style={{
                textAlign: 'center',
                marginBottom: '2rem',
                padding: '1rem',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <h4 style={{ 
                  color: '#f0c76e', 
                  fontSize: 'var(--text-xl)', 
                  fontWeight: 'var(--font-semibold)',
                  margin: '0 0 0.5rem 0'
                }}>
                  Université Cadi Ayyad
                </h4>
                <p style={{ 
                  color: 'var(--depth-4)', 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  margin: 0
                }}>
                  École Nationale des Sciences Appliquées
                </p>
              </div>
              
              {/* Contact Details */}
              <div style={{ display: 'grid', gap: '1.2rem' }}>
                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    </svg>
                  <div>
                    <p style={{ color: 'var(--text)', fontWeight: '600', margin: '0 0 0.3rem 0', fontSize: '0.875rem' }}>Adresse</p>
                    <p style={{ color: 'var(--depth-4)', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                      Avenue Abdelkarim El Khattabi, Guéliz<br />
                      BP 575, Marrakech 40000, Maroc
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/>
                    </svg>
                  <div>
                    <p style={{ color: 'var(--text)', fontWeight: '600', margin: '0 0 0.3rem 0', fontSize: '0.875rem' }}>Téléphone</p>
                    <a href="tel:+212524448137" style={{ 
                      color: '#f0c76e', 
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      +212 5 24 44 81 37
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="2"/>
                      <path d="M3 7l9 6 9-6"/>
                    </svg>
                  <div>
                    <p style={{ color: 'var(--text)', fontWeight: '600', margin: '0 0 0.3rem 0', fontSize: '0.875rem' }}>Email</p>
                    <a href="mailto:ensa@uca.ma" style={{ 
                      color: '#f0c76e', 
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      ensa@uca.ma
                    </a>
                  </div>
                </div>
                
                {/* Website */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0c76e" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                    </svg>
                  <div>
                    <p style={{ color: 'var(--text)', fontWeight: '600', margin: '0 0 0.3rem 0', fontSize: '0.875rem' }}>Site Web</p>
                    <a href="http://www.ensa.ac.ma" target="_blank" rel="noopener noreferrer" style={{ 
                      color: '#f0c76e', 
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      www.ensa.ac.ma
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div>
            <h3 style={{ 
              color: '#ffffff', 
              marginBottom: '1.5rem', 
              fontSize: 'var(--text-xl)', 
              fontWeight: 'var(--font-semibold)',
              textAlign: 'center'
            }}>
              Notre Localisation
            </h3>
            
            {/* Google Maps Container */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.4 }}
              className="card card-3d"
              style={{
                padding: '0',
                overflow: 'hidden',
                height: '440px',
                position: 'relative'
              }}
            >
              {/* Map Header */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                background: 'rgba(0,0,0,0.8)',
                padding: '0.8rem',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#f0c76e'
                }}></div>
                <span style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>ENSA Marrakech - Campus</span>
              </div>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.524466613466!2d-8.022940425484824!3d31.646868074156284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9e5e2bd20f%3A0x2cf9300f935096fa!2sENSA%20%3A%20%C3%89cole%20Nationale%20des%20Sciences%20Appliqu%C3%A9es_Marrakech!5e0!3m2!1sfr!2sma!4v1762446374706!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  marginTop: '40px',
                  filter: 'contrast(1.1) saturate(1.2)'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ENSA Marrakech Location"
              ></iframe>
              
              {/* Map Footer */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(10, 15, 28, 0.9), transparent)',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
              }}>
                <motion.a
                  href="https://maps.google.com/?q=ENSA+Marrakech"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: '#f0c76e',
                    color: '#0b0b0e',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b0b0e" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  </svg>
                  Ouvrir dans Maps
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADMIN - CONNEXION */}
      {showAdmin && (
        <section id="admin" style={{ padding: '4rem 1.5rem' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            fontWeight: '700',
            color: '#f0c76e',
          textAlign: 'center',
          marginBottom: '3rem',
          textShadow: 'none'
        }}>
            Espace Admin
          </h2>
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
                color: '#ffffff',
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
                background: '#f0c76e',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(249, 178, 51, 0.4)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--bg)" strokeWidth="2.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                Connexion Admin
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>
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
                  color: '#f0c76e',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  fontSize: '1rem'
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
                  color: '#f0c76e',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  fontSize: '1rem'
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
                  fontSize: '1rem',
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
                className="btn btn-gold btn-premium luxury-focus loading-luxury"
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  padding: '1.1rem',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '50px',
                  background: '#f0c76e',
                  color: 'var(--bg)',
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
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.875rem',
                marginTop: '0.5rem'
              }}>
                Mot de passe oublié ? <a href="#" style={{ color: '#f0c76e', textDecoration: 'none', fontWeight: '600' }}>Réinitialiser</a>
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






