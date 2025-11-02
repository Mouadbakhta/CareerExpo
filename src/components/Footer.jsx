// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{
      background: '#0A0F1C',
      color: '#ccc',
      textAlign: 'center',
      padding: '3rem 1.5rem',
      marginTop: '4rem',
      borderTop: '1px solid #333'
    }}>
      <p>© 2025 Forum ENSA Marrakech. Tous droits réservés.</p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
        Développé avec passion par les étudiants de l'ENSA
      </p>
    </footer>
  );
}