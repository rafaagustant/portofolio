import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import { profile } from '@/data/profile';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import './App.css';

const usePageBehavior = () => {
  const location = useLocation();

  useRevealOnScroll(location.pathname);

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
    }
  }, [location]);
};

const Home = () => {
  usePageBehavior();
  useEffect(() => {
    if (!window.location.pathname.startsWith('/work/')) {
      document.title = 'Rafa Agustant — Computer Science Fresh Graduate';
    }
  }, []);
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer reveal">
        <div className="footer-identity">
          <img src={profile.brandMark} alt="" width="28" height="28" />
          <p>© {new Date().getFullYear()} Rafa Agustant</p>
        </div>
        <p>{profile.location}</p>
      </footer>
    </>
  );
};

const App = () => (
  <div className="site-shell">
    <CustomCursor />
    <Home />
  </div>
);

export default App;
