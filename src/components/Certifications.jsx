import { ArrowUpRight } from 'lucide-react';
import { certifications } from '@/data/certifications';

const Certifications = () => (
  <div className="credentials-section" aria-labelledby="credentials-title">
    <div className="credentials-heading reveal">
      <h2 id="credentials-title">Selected learning</h2>
      <p>Focused credentials supporting my data and web foundations.</p>
    </div>
    <div className="credentials-list">
      {certifications.map((certification, index) => {
        const Row = certification.credentialUrl ? 'a' : 'div';
        return (
        <Row className="credential-row reveal" style={{ '--reveal-delay': `${Math.min(index, 4) * 45}ms` }} key={certification.id} href={certification.credentialUrl || undefined} target={certification.credentialUrl ? '_blank' : undefined} rel={certification.credentialUrl ? 'noopener noreferrer' : undefined}>
          <span>{certification.title}</span>
          <span>{certification.issuer} · {certification.date}</span>
          {certification.credentialUrl ? (
            <span className="credential-action">View Certificate <ArrowUpRight aria-hidden="true" /></span>
          ) : <span className="credential-unavailable">Link unavailable</span>}
        </Row>
      )})}
    </div>
  </div>
);

export default Certifications;
