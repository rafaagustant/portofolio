import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative pt-16">
      <div className="container-max section-padding text-center">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg">
              <img
                src={profileImage}
                alt="Rafa Agustant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
            Rafa Agustant
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 gradient-text font-medium">
             Undergraduate Computer Science student at Universitas Padjadjaran | Aspiring Data Analyst & UI/UX Designer
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">

          </p>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown 
            className="w-8 h-8 text-gray-400 animate-bounce cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

