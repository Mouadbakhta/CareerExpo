// src/components/SplashScreen.jsx
import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, var(--bg) 0%, var(--depth-1) 50%, var(--depth-2) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.08 }}
        transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        {/* Logo with Royal Animation */}
        <motion.div
          initial={{ rotate: -180, scale: 0.3 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ 
            duration: 2.5,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{
            position: 'relative',
            padding: '2rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--depth-2), var(--depth-3))',
            border: '2px solid #f0c76e',
            backdropFilter: 'blur(20px)'
          }}
        >
          <motion.img
            src="/logo.png"
            alt="Forum CareerExpo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 8px 32px var(--glow))',
            }}
          />
          
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              border: '2px solid transparent',
              borderTop: '2px solid #f0c76e',
              borderRadius: '50%',
              opacity: 0.6
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ textAlign: 'center' }}
        >
          <motion.h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(135deg, var(--text), #f0c76e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
              transformStyle: 'preserve-3d'
            }}
          >
            Forum CareerExpo
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            style={{
              fontSize: '1rem',
              color: 'var(--depth-5)',
              fontWeight: '500',
              letterSpacing: '0.05em'
            }}
          >
            MARRAKECH 2025
          </motion.p>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 2.5, delay: 1.5, ease: 'easeInOut' }}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, #f0c76e, var(--text))',
            borderRadius: '1px',
            marginTop: '1rem'
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [-20, -100],
            x: [0, (i % 2 === 0 ? 50 : -50)]
          }}
          transition={{
            duration: 3,
            delay: 2 + i * 0.2,
            repeat: Infinity,
            repeatDelay: 2
          }}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: i % 2 === 0 ? '#f0c76e' : 'var(--text)',
            borderRadius: '50%',
            top: '60%',
            left: `${45 + i * 2}%`
          }}
        />
      ))}
    </motion.div>
  );
}
