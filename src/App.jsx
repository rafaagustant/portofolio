import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import SectionWrapper from './components/SectionWrapper';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

import './App.css';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - No wrapper needed as it has its own animations */}
      <Hero />
      
      {/* About Section */}
      <SectionWrapper 
        sectionId="about" 
        animationType="fade-slide"
        threshold={0.3}
        className="py-20 bg-white"
      >
        <About />
      </SectionWrapper>
      
      {/* Projects Section */}
      <SectionWrapper 
        sectionId="projects" 
        animationType="scale-fade"
        threshold={0.2}
        className="py-20 bg-gray-50"
      >
        <Projects />
      </SectionWrapper>
      
      {/* Experience Section */}
      <SectionWrapper 
        sectionId="experience" 
        animationType="slide-horizontal"
        threshold={0.3}
        className="py-20 bg-white"
      >
        <Experience />
      </SectionWrapper>
      
      {/* Certifications Section */}
      <SectionWrapper 
        sectionId="certifications" 
        animationType="fade-slide"
        threshold={0.3}
        className="py-20 bg-gray-50"
      >
        <Certifications />
      </SectionWrapper>
      
      {/* Contact Section */}
      <SectionWrapper 
        sectionId="contact" 
        animationType="scale-fade"
        threshold={0.3}
        className="py-20 bg-white"
      >
        <Contact />
      </SectionWrapper>
    </div>
  );
}

export default App;

