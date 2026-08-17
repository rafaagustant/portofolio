import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
import profileImage from '@/assets/profile.jpg';

const socialLinks = [
  ['GitHub', 'https://github.com/rafaagustant'],
  ['LinkedIn', 'https://www.linkedin.com/in/rafaagustant'],
  ['Email', 'mailto:rafaagustant@gmail.com'],
];

const Hero = () => (
  <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <h1 id="hero-title" className="hero-enter hero-enter-1">Hi, I’m Rafa Agustant.</h1>
      <p className="hero-thesis hero-enter hero-enter-2">
        I work across product, design, data, and intelligent systems, turning user needs and technical problems into clear digital solutions.
      </p>
      <p className="hero-location hero-enter hero-enter-3">{profile.location} · Open to early-career opportunities</p>
      <div className="hero-actions">
        <div className="hero-cta-group hero-enter hero-enter-4">
          <a className="hero-primary-action" href="#work">
            Explore my work <ArrowDownRight aria-hidden="true" />
          </a>
          <a className="text-link hero-cv-link" href={profile.cvHref} target="_blank" rel="noreferrer">
            View CV <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero-socials hero-enter hero-enter-5" aria-label="Social links">
          {socialLinks.map(([label, href]) => (
            <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noreferrer'}>
              {label}<ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <figure className="hero-portrait hero-portrait-enter">
      <img src={profileImage} alt="Portrait of Rafa Agustant" width="800" height="800" fetchPriority="high" />
    </figure>
  </section>
);

export default Hero;
