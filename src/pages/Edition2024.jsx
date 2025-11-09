import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Edition2024() {
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
            Édition 2024 - Forum CareerExpo ENSA-M
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
            Découvrez les highlights de notre édition record 2024
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
              alt="Logo Career Expo 2024"
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
            À propos de l'édition 2024
          </h2>
          <div style={{ 
            color: 'var(--depth-4)', 
            fontSize: '0.65rem', 
            lineHeight: '1.6',
            textAlign: 'justify'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
          L'édition 2024 du <strong style={{ color: '#f0c76e' }}>Forum Career Expo</strong> à <strong>l’École Nationale des Sciences Appliquées de Marrakech</strong> s’est affirmée comme un événement phare pour inspirer les ingénieurs de demain et leur offrir des opportunités de développement de carrière à la hauteur de leurs ambitions.

          Avec la participation active des étudiants, l'organisation de cette édition a été un véritable succès. Des entreprises et institutions prestigieuses, telles que <strong style={{ color: '#f0c76e' }}>Université Cadi Ayyad, ENSA Marrakech, Bank of Africa, AVL, Stellantis, Leyton, Akkodis, OG SBC, Capgemini, Reetain, Safy, et Webpick</strong>, étaient présentes pour présenter leurs offres de stages, d'emplois et de formations. Ces acteurs majeurs ont proposé des opportunités exceptionnelles aux étudiants, renforçant ainsi les liens entre le monde académique et le secteur privé.<br>
          </br>
          <br></br>

          L'événement a permis de mettre en lumière des entreprises leaders dans des domaines aussi variés que l’innovation technologique, l’ingénierie, la transformation numérique, la sécurité d’entreprise et la finance. Les étudiants ont eu la chance d’échanger directement avec des recruteurs et de découvrir les attentes des entreprises pour le futur.

           <strong style={{ color: '#f0c76e' }}> L'Université Cadi Ayyad et ENSA Marrakech</strong> ont, quant à elles, souligné l'importance de l’excellence académique et de l'innovation dans la formation des ingénieurs de demain. Des partenaires comme Bank of Africa ont mis en avant leur rôle clé en tant que support financier pour accompagner les jeunes talents dans leurs projets professionnels. <strong style={{ color: '#f0c76e' }}>AVL et Stellantis</strong> ont partagé leur vision de l’avenir avec des solutions technologiques innovantes, respectivement dans les domaines de l’ingénierie et de l’automobile.<br></br>
           <br></br>
            <strong style={{ color: '#f0c76e' }}>Leyton et Akkodis</strong> ont quant à eux mis l'accent sur l'accompagnement des entreprises dans leur transformation numérique et l'optimisation de leur performance. Des acteurs comme <strong style={{ color: '#f0c76e' }}>OG SBC </strong>ont présenté leurs solutions en matière de sécurité d’entreprise, tandis que <strong style={{ color: '#f0c76e' }}>Capgemini</strong> a offert des perspectives sur la transformation numérique dans divers secteurs d'activité.

           Les étudiants ont également pu découvrir des solutions plus ciblées pour les aider à s'impliquer davantage dans des projets d'engagement client avec<strong style={{ color: '#f0c76e' }}> Reetain</strong>, ou à explorer de nouvelles solutions digitales et web avec<strong style={{ color: '#f0c76e' }}>Safy et Webpick. </strong>

           Cette édition 2024 du Forum a été l’occasion idéale de tisser des liens solides, de renforcer l’employabilité des étudiants, et de favoriser l’insertion professionnelle dans un monde du travail en constante évolution.
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
            href="/editions/Edition2024.pdf"
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
            Télécharger l'archive PDF - Édition 2024
          </motion.a>
        </motion.div>

      </div>
    </main>
  );
}
