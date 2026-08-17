import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experiences } from '@/data/experiences';
import ExperienceCarousel from '@/components/ExperienceCarousel';

const Experience = () => (
  <section id="experience" className="experience-section" aria-labelledby="experience-title">
    <div className="section-heading reveal">
      <h2 id="experience-title">Experience</h2>
      <p>Recent product and teaching work first, followed by selected university and organizational leadership.</p>
    </div>
    <div className="timeline" role="list">
      {experiences.map((experience, index) => (
        <article className="timeline-row reveal" style={{ '--reveal-delay': `${Math.min(index, 5) * 45}ms` }} key={experience.id} role="listitem">
          <div className="timeline-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
          <p className="timeline-period">{experience.period}</p>
          <div className="timeline-title">
            <h3>{experience.role}</h3>
            <p>{experience.organization}</p>
          </div>
          <div className="timeline-detail">
            <p>{experience.description}</p>
            {experience.linkedProjects.length > 0 && (
              <div className="timeline-links" aria-label="Related projects">
                {experience.linkedProjects.map((project) => (
                  <Link key={project.slug} to={`/work/${project.slug}`}>
                    {project.label}<ArrowUpRight aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
    <div className="experience-moments" aria-labelledby="experience-moments-title">
      <div className="experience-moments-heading reveal">
        <h3 id="experience-moments-title">Experience in moments</h3>
        <p>Real documentation from professional, teaching, project, and organizational work.</p>
      </div>
      <ExperienceCarousel />
    </div>
  </section>
);

export default Experience;
