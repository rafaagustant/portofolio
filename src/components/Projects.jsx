import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { compactProjects, projectBySlug, projects } from '@/data/projects';
import ProjectModal from '@/components/ProjectModal';
import { scrollToInstantly } from '@/utils/scrollPosition';

const filters = ['All', 'Product', 'Data', 'Web', 'AI', 'UI/UX', 'Research'];

const ProjectCard = ({ project, index, onOpen }) => (
  <article className="project-card reveal" style={{ '--project-accent': project.accent, '--reveal-delay': `${(index % 2) * 70}ms` }}>
    <button className="project-media" type="button" data-cursor="view" onClick={(event) => onOpen(project, event.currentTarget)} aria-label={`Open ${project.title} project details`}>
      <img src={project.mockup} alt={`${project.title} project mockup`} width="1664" height="936" loading={index < 2 ? 'eager' : 'lazy'} />
      <span>View project <ArrowUpRight aria-hidden="true" /></span>
    </button>
    <div className="project-card-copy">
      <p>{project.discipline} · {project.year || 'College project'}</p>
      <h3><button type="button" onClick={(event) => onOpen(project, event.currentTarget)}>{project.title}</button></h3>
      <p className="project-card-summary">{project.summary}</p>
    </div>
  </article>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const location = useLocation();
  const navigate = useNavigate();
  const returnFocusRef = useRef(null);
  const savedScrollYRef = useRef(null);
  const previousProjectRef = useRef(null);
  const slug = location.pathname.startsWith('/work/') ? location.pathname.split('/work/')[1] : null;
  const activeProject = slug ? projectBySlug[slug] : null;

  useEffect(() => {
    if (activeProject) document.title = `${activeProject.title} — Rafa Agustant`;
  }, [activeProject]);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previousScrollRestoration; };
  }, []);

  const restorePageContext = useCallback(() => {
    const savedScrollY = savedScrollYRef.current;
    if (!Number.isFinite(savedScrollY)) return;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      scrollToInstantly(savedScrollY);
      const trigger = returnFocusRef.current;
      if (trigger) {
        try {
          trigger.focus({ preventScroll: true });
        } catch {
          trigger.focus();
          scrollToInstantly(savedScrollY);
        }
      }
      scrollToInstantly(savedScrollY);
    }));
  }, []);

  useEffect(() => {
    if (activeProject && location.state?.modal && Number.isFinite(location.state.scrollY)) {
      savedScrollYRef.current = location.state.scrollY;
    }
    if (previousProjectRef.current && !activeProject) restorePageContext();
    previousProjectRef.current = activeProject;
  }, [activeProject, location.state, restorePageContext]);

  const visibleProjects = useMemo(() => activeFilter === 'All' ? projects : projects.filter((project) => project.categories?.includes(activeFilter)), [activeFilter]);
  const visibleCompact = useMemo(() => activeFilter === 'All' ? compactProjects : compactProjects.filter((project) => project.categories?.includes(activeFilter)), [activeFilter]);

  const openProject = (project, trigger) => {
    const scrollY = window.scrollY;
    savedScrollYRef.current = scrollY;
    returnFocusRef.current = trigger;
    navigate(`/work/${project.slug}`, { state: { modal: true, scrollY } });
  };

  const closeProject = () => {
    if (location.state?.modal) {
      navigate(-1);
      return;
    }
    navigate('/#work', { replace: true });
  };

  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="section-heading reveal">
        <h2 id="work-title">Work</h2>
        <p>Product, design, data, and intelligent systems—one collection organized by the problems behind the work.</p>
      </div>
      <div className="project-filters reveal" style={{ '--reveal-delay': '70ms' }} role="group" aria-label="Filter projects by category">
        {filters.map((filter) => <button type="button" key={filter} className={activeFilter === filter ? 'is-active' : ''} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
      </div>
      <div className="project-grid" aria-live="polite">
        {visibleProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} onOpen={openProject} />)}
      </div>
      {visibleCompact.length > 0 && (
        <div className="compact-work" aria-label="Additional technical projects">
          <div className="compact-work-heading reveal"><h3>Additional technical work</h3><p>Focused academic builds and experiments.</p></div>
          {visibleCompact.map((project, index) => <a className="reveal" style={{ '--reveal-delay': `${Math.min(index, 4) * 40}ms` }} href={project.href} target="_blank" rel="noreferrer" key={project.title}><span><strong>{project.title}</strong><small>{project.discipline}</small></span><span>{project.summary}</span><ArrowUpRight aria-hidden="true" /></a>)}
        </div>
      )}
      {slug && !activeProject && <p className="project-not-found">Project not found. Choose another project from the collection.</p>}
      {activeProject && <ProjectModal project={activeProject} onClose={closeProject} pageScrollY={savedScrollYRef.current} />}
    </section>
  );
};

export default Projects;
