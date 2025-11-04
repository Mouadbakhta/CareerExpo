import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Edition2022() {
  const navigate = useNavigate();

  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Photo ${i + 1}`,
    placeholder: `https://images.unsplash.com/photo-${1591115765373 + i}?w=400&h=300&fit=crop`
  }));

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: '#F9B233',
              color: '#0A0F1C',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← Retour
          </motion.button>

          <h1 className="section-title">Édition 2022</h1>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {photos.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  height: '250px',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(249,178,51,0.3), rgba(0,74,173,0.3))'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: '#F9B233',
                  fontWeight: 'bold'
                }}>
                  {photo.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}