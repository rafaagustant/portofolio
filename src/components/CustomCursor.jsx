import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const precisePointer = window.matchMedia('(pointer: fine) and (hover: hover)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!precisePointer.matches || reducedMotion.matches) return undefined;

    const cursor = cursorRef.current;
    const move = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.dataset.visible = 'true';
      const target = event.target.closest('[data-cursor="view"]');
      cursor.dataset.mode = target ? 'view' : 'default';
    };
    const hide = () => { cursor.dataset.visible = 'false'; };

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', hide);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span>View</span></div>;
};

export default CustomCursor;
