// src/components/SplashScreen.jsx
import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#0A0F1C',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <motion.img
        src="/logo.png"
        alt="Forum CareerExpo"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1.3, rotate: 360 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        style={{
          width: '180px',
          height: '180px',
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 30px #F9B233)',
        }}
      />
    </motion.div>
  );
}