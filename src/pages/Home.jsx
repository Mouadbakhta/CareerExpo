// src/pages/Home.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import InscriptionModal from '../components/InscriptionModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const partners = [
    "OCP Group", "Maroc Telecom", "Attijariwafa Bank", "BMCE Bank",
    "Capgemini", "IBM", "Huawei", "Dell", "Vivo Energy", "Sopra Steria"
  ].map(name => ({ name, logo: `https://logo.clearbit.com/${name.toLowerCase().replace(/ /g, '')}.com` }));

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

      {/* ACCUEIL ROYAL */}
      <section id="accueil" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h1 className="royal-title">Forum ENSA 2025</h1>
          <p style={{
            fontSize: '1.7rem',
            color: '#94a3b8',
            margin: '2rem auto',
            maxWidth: '900px',
            lineHeight: '1.8',
            fontWeight: '500'
          }}>
            <strong>500+ talents</strong> • <strong>30 entreprises leaders</strong> • <strong>1 jour d’opportunités</strong>
          </p>
          <CountdownTimer />
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
        <p style={{
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          color: '#94a3b8',
          fontSize: '1.1rem',
          lineHeight: '1.8'
        }}>
          <strong>500+ étudiants</strong> • <strong>30 entreprises leaders</strong> • Conférences • Ateliers • Entretiens directs
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem'
        }}>
          {['Innovation', 'Réseau', 'Opportunités', 'Excellence'].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="card"
              style={{ textAlign: 'center', padding: '2.5rem' }}
            >
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                color: '#F9B233',
                filter: 'drop-shadow(0 0 15px rgba(249,178,51,0.5))'
              }}>
                Star
              </div>
              <h3 style={{ fontWeight: 'bold', color: '#F9B233', fontSize: '1.4rem' }}>{item}</h3>
            </motion.div>
          ))}
        </div>
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

      {/* PARTENAIRES */}
      <section id="partenaires" style={{ padding: '7rem 1.5rem' }}>
        <h2 className="section-title">Partenaires</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {partners.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.25, rotate: 8 }}
              className="card"
              style={{ textAlign: 'center', padding: '1.8rem' }}
            >
              <img
                src={p.logo}
                alt={p.name}
                style={{
                  height: '60px',
                  objectFit: 'contain',
                  marginBottom: '0.8rem',
                  filter: 'brightness(0) invert(1)'
                }}
              />
              <p style={{ fontWeight: '600', color: '#F9B233' }}>{p.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT - UCA MARRAKECH */}
      <section id="contact" style={{ padding: '7rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
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

      {/* MODAL INSCRIPTION */}
      <AnimatePresence>
        {showModal && <InscriptionModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </main>
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