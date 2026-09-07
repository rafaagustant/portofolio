import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { scrollToInstantly } from '@/utils/scrollPosition';

const narrativeSections = [
  ['Context', 'description'],
  ['Problem', 'problem'],
  ['Users', 'users'],
  ['Goal', 'goal'],
  ['Product thinking', 'productThinking'],
  ['Design / technical decisions', 'decisions'],
  ['Outcome / learning', 'learning'],
];

const ProjectModal = ({ project, onClose, pageScrollY }) => {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const closeTimerRef = useRef(null);
  const closingRef = useRef(false);
  const onCloseRef = useRef(onClose);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onCloseRef.current();
      return;
    }
    closingRef.current = true;
    setClosing(true);
    closeTimerRef.current = window.setTimeout(() => onCloseRef.current(), 160);
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  useEffect(() => {
    const lockScrollY = Number.isFinite(pageScrollY) ? pageScrollY : window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockScrollY}px`;
    document.body.style.width = '100%';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    closeRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') requestClose();
      if (event.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      document.body.style.paddingRight = previousPaddingRight;
      scrollToInstantly(lockScrollY);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [pageScrollY, requestClose]);

  return (
    <div className={`project-modal-backdrop${closing ? ' is-closing' : ''}`} onMouseDown={(event) => event.target === event.currentTarget && requestClose()}>
      <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" ref={dialogRef}>
        <button className="modal-close" type="button" onClick={requestClose} ref={closeRef} aria-label="Close project details"><X aria-hidden="true" /></button>
        <header className="modal-header">
          <p>{project.discipline} · {project.year || 'College project'}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.summary}</p>
          <dl>
            <div><dt>My role</dt><dd>{project.contribution}</dd></div>
            <div><dt>Tools</dt><dd>{project.technologies.join(' · ')}</dd></div>
          </dl>
          {project.links.length > 0 && <div className="modal-actions">{project.links.map((link) => <a className={link.variant ? `is-${link.variant}` : undefined} href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label}<ArrowUpRight aria-hidden="true" /></a>)}</div>}
        </header>
        <figure className="modal-visual" style={{ '--project-accent': project.accent }}><img src={project.mockup} alt={`${project.title} primary project mockup`} /></figure>
        <div className="modal-story">
          {(project.detailSections || narrativeSections).map(([label, field]) => project[field] && <section key={field}><h3>{label}</h3><p>{project[field]}</p></section>)}
          <section><h3>What I worked on</h3><ul>{project.workedOn.map((item) => <li key={item}>{item}</li>)}</ul></section>
          {project.keyFeatures?.length > 0 && <section><h3>Key features</h3><ul>{project.keyFeatures.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        </div>
      </article>
    </div>
  );
};

export default ProjectModal;
