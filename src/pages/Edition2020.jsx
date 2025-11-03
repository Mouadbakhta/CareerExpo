// src/pages/Edition2020.jsx
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Edition2020() {
  const navigate = useNavigate();

  const highlights = [
    { icon: Users, label: 'Participants', value: '300+' },
    { icon: Award, label: 'Entreprises', value: '15' },
    { icon: Calendar, label: 'Date', value: '20 Nov 2020' }
  ];

  const photos = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800'
  ];

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(135deg, rgba(249, 178, 51, 0.1), rgba(0, 74, 173, 0.1))',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ x: -5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              border: '2px solid #F9B233',
              color: '#F9B233',
              padding: '0.8rem 1.5rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '2rem',
              transition: 'all 0.3s'
            }}
          >
            <ArrowLeft size={20} />
            Retour
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="royal-title"
            style={{ fontSize: '4rem', marginBottom: '1rem' }}
          >
            Édition 2020
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '1.3rem',
              color: '#94a3b8',
              maxWidth: '800px',
              lineHeight: '1.8',
              marginBottom: '3rem'
            }}
          >
            La première édition du Forum CareerExpo a marqué le début d'une aventure exceptionnelle,
            réunissant étudiants et entreprises leaders pour créer des opportunités uniques.
          </motion.p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="card"
                style={{ textAlign: 'center', padding: '2rem' }}
              >
                <item.icon size={40} color="#F9B233" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ color: '#F9B233', fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  {item.value}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '1rem' }}>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">Galerie Photos</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  height: '250px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={photo}
                  alt={`Photo ${i + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '7rem 1.5rem', background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">Témoignages</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {[
              { name: 'Ahmed Benali', role: 'Étudiant ENSA', text: 'Une expérience incroyable qui m\'a permis de rencontrer des recruteurs de grandes entreprises.' },
              { name: 'Sarah Alami', role: 'Étudiante ENSA', text: 'J\'ai décroché mon stage grâce à ce forum. Merci à toute l\'équipe organisatrice!' },
              { name: 'Karim Tazi', role: 'Recruteur OCP', text: 'Un événement bien organisé avec des talents exceptionnels. Nous reviendrons!' }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
                style={{ padding: '2rem' }}
              >
                <p style={{
                  color: '#e2e8f0',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 style={{ color: '#F9B233', fontWeight: '700', marginBottom: '0.3rem' }}>
                    {testimonial.name}
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

