import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';

const links = [
  ['Email', 'mailto:rafaagustant@gmail.com'],
  ['LinkedIn', 'https://www.linkedin.com/in/rafaagustant'],
  ['GitHub', 'https://github.com/rafaagustant'],
  ['Instagram', 'https://instagram.com/rafagustant'],
];

const Contact = () => (
  <section id="contact" className="contact-section reveal" aria-labelledby="contact-title">
    <div className="contact-copy">
      <p>Interested in working together?</p>
      <h2 id="contact-title">Let’s make a complex problem feel clear.</h2>
      <a className="contact-email" href="mailto:rafaagustant@gmail.com">rafaagustant@gmail.com <ArrowUpRight aria-hidden="true" /></a>
    </div>
    <div className="contact-meta">
      <nav aria-label="Social links">
        {links.map(([label, href]) => (
          <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noreferrer'}>{label}</a>
        ))}
        <a href={profile.cvHref} target="_blank" rel="noreferrer">View CV</a>
      </nav>
      <p>{profile.location}</p>
    </div>
  </section>
);

export default Contact;
