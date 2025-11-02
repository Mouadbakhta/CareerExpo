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

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <StarsBackground />
          <Navbar />
          <Home />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}