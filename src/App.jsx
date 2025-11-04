// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Edition2020 from './pages/Edition2020';
import Edition2021 from './pages/Edition2021';
import Edition2022 from './pages/Edition2022';
import Edition2023 from './pages/Edition2023';
import Edition2024 from './pages/Edition2024';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StarsBackground from './components/StarsBackground';
import { isAuthenticated } from './utils/auth';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [dark, setDark] = useState(true); // État global ici
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  // Synchronize body class so `body.light` CSS rules take effect
  useEffect(() => {
    document.body.classList.toggle('light', !dark);
  }, [dark]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setAdminLoggedIn(isAuthenticated());
  }, []);

  const handleAdminLogin = () => {
    setAdminLoggedIn(true);
  };

  const handleAdminLogout = () => {
    setAdminLoggedIn(false);
  };

  return (
    <div className={dark ? 'dark-mode' : 'light-mode'}>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      {!showSplash && (
        <Router>
          <StarsBackground dark={dark} />
          <Navbar dark={dark} setDark={setDark} />
          <Routes>
            <Route path="/" element={<Home onAdminLogin={handleAdminLogin} />} />
            <Route path="/dashboard" element={<Dashboard onLogout={handleAdminLogout} />} />
            <Route path="/edition-2020" element={<Edition2020 />} />
            <Route path="/edition-2021" element={<Edition2021 />} />
            <Route path="/edition-2022" element={<Edition2022 />} />
            <Route path="/edition-2023" element={<Edition2023 />} />
            <Route path="/edition-2024" element={<Edition2024 />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Router>
      )}
    </div>
  );
}
