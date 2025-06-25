import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Add fade-in animation to elements when they come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-max px-6">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Rafa Agustant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

