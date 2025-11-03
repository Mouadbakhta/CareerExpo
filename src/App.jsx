// src/App.jsx
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StarsBackground from './components/StarsBackground';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [dark, setDark] = useState(true); // État global ici

  // Synchronize body class so `body.light` CSS rules take effect
  useEffect(() => {
    document.body.classList.toggle('light', !dark);
  }, [dark]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={dark ? 'dark-mode' : 'light-mode'}>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <StarsBackground dark={dark} />
          <Navbar dark={dark} setDark={setDark} />
          <Home />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}