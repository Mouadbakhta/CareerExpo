import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Edition2022() {
  const navigate = useNavigate();
  
  const photos = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500",
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500", 
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500"
  ];

  return (
    <main style={{ paddingTop: '120px', padding: '2rem 1.5rem' }}>
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
            marginTop: '4rem',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <h1 style={{ 
            color: '#F9B233', 
            fontSize: '2.5rem', 
            fontWeight: '900',
            margin: 0,
            flex: 1,
            lineHeight: '1.2'
          }}>
            Édition 2022 - Forum CareerExpo ENSA-M
          </h1>
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
            color: '#94a3b8', 
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Revivez les moments forts de notre édition 2022
          </p>
        </motion.div>

        {/* Photos Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card"
              style={{
                padding: '0',
                overflow: 'hidden',
                height: '250px'
              }}
            >
              <img
                src={photo}
                alt={`Photo ${i + 1} - Édition 2022`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          ))}
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
            color: '#F9B233', 
            fontSize: '2rem', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            À propos de l'édition 2022
          </h2>
          <div style={{ 
            color: '#94a3b8', 
            fontSize: '1.1rem', 
            lineHeight: '1.8',
            textAlign: 'justify'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              L'édition 2022 du Forum CareerExpo a marqué un tournant décisif dans l'histoire de notre événement. 
              Avec plus de <strong style={{ color: '#F9B233' }}>400 participants</strong> et 
              <strong style={{ color: '#F9B233' }}> 25 entreprises partenaires</strong>, cette édition a battu tous les records de participation.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Les étudiants ont eu l'opportunité de rencontrer des recruteurs de grandes entreprises nationales et internationales, 
              de participer à des ateliers pratiques sur la rédaction de CV et les techniques d'entretien, 
              et d'assister à des conférences inspirantes sur l'innovation technologique et l'entrepreneuriat.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Cette édition s'est distinguée par la qualité des échanges entre étudiants et professionnels, 
              avec un taux de satisfaction de <strong style={{ color: '#F9B233' }}>95%</strong> et plus de 
              <strong style={{ color: '#F9B233' }}> 150 offres de stage</strong> proposées sur place.
            </p>
            <p>
              Les moments forts incluaient la conférence d'ouverture sur "L'avenir du travail à l'ère numérique", 
              les sessions de job dating express, et la remise des prix aux meilleurs projets étudiants.
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
            href="/editions/Edition2022.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              background: '#F9B233',
              color: '#0A0F1C',
              padding: '1.2rem 2.5rem',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 10px 30px rgba(249, 178, 51, 0.3)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            Télécharger l'archive PDF - Édition 2022
          </motion.a>
        </motion.div>

      </div>
    </main>
  );
}