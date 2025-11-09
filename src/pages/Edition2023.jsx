import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Edition2023() {
  const navigate = useNavigate();
  
  const photos = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500"
  ];

  return (
    <main style={{ paddingTop: '140px', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header with Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start', 
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <h1 style={{ 
            color: '#f0c76e', 
            fontSize: '1.5rem', 
            fontWeight: '900',
            margin: 0,
            flex: 1,
            lineHeight: '1.2'
          }}>
            Édition 2023 - Forum CareerExpo ENSA-M
          </h1>
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: '#f0c76e',
              color: '#0b0b0e',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              boxShadow: '0 8px 20px rgba(249, 178, 51, 0.4)',
              whiteSpace: 'nowrap'
            }}
          >
            ← Retour à l'accueil
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ 
            color: 'var(--depth-4)', 
            fontSize: '0.75rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Découvrez les highlights de notre édition record 2023
          </p>
        </motion.div>

        {/* Photo principale */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            marginBottom: '4rem',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="card"
            style={{
              padding: '0',
              overflow: 'hidden',
              height: '400px',
              width: '100%',
              maxWidth: '800px',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/editions/careerexpoold.png"
              alt="Logo Career Expo 2023"
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card"
          style={{
            padding: '3rem',
            marginBottom: '3rem'
          }}
        >
          <h2 style={{ 
            color: '#f0c76e', 
            fontSize: '1.25rem', 
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: '700'
          }}>
            À propos de l'édition 2023
          </h2>
          <div style={{ 
            color: 'var(--depth-4)', 
            fontSize: '0.65rem', 
            lineHeight: '1.6',
            textAlign: 'justify'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              L’édition de cette année du <strong style={{ color: '#f0c76e' }}>Forum Career Expo
              </strong> à <strong>l’École Nationale des Sciences Appliquées de Marrakech</strong> a eu pour objectif d’encourager les ingénieurs de demain à transformer leurs rêves en réalité grâce à de nombreuses opportunités de développement de carrière.

              De nombreux étudiants ont participé activement à l’organisation et au bon déroulement de cet événement, qui a rassemblé plusieurs entreprises et institutions de renom venues présenter leurs offres de stages, d’emplois et de formations.

              Cette édition a permis de renforcer le lien entre <strong style={{ color: '#f0c76e' }}>le monde académique</strong> et <strong style={{ color: '#f0c76e' }}>le monde professionnel</strong>, tout en créant des opportunités de recrutement et de mise en valeur des talents émergents. Les étudiants ont pu échanger directement avec des recruteurs, élargir leur réseau et mieux appréhender les exigences du marché du travail, dans un contexte où l’innovation et la compétitivité sont plus que jamais au cœur des préoccupations.
              </p>   
          </div>
        </motion.div>

        {/* PDF Download */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <motion.a
            href="/editions/Edition2023.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              background: '#f0c76e',
              color: '#0b0b0e',
              padding: '1.2rem 2.5rem',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '0.65rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 10px 30px rgba(249, 178, 51, 0.3)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            Télécharger l'archive PDF - Édition 2023
          </motion.a>
        </motion.div>

      </div>
    </main>
  );
}
