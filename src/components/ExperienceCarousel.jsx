import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { experienceMoments } from '@/data/experienceMoments';

const AUTOPLAY_INTERVAL = 5000;
const MANUAL_PAUSE = 8000;
const slides = [...experienceMoments, ...experienceMoments.slice(0, 5)];

const ExperienceCarousel = () => {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const activeIndexRef = useRef(0);
  const hoverRef = useRef(false);
  const focusRef = useRef(false);
  const pointerRef = useRef(false);
  const pauseUntilRef = useRef(0);
  const scrollTimerRef = useRef(null);
  const suppressNormalizeUntilRef = useRef(0);
  const moveByRef = useRef(null);

  const getSlideElements = () => [...(trackRef.current?.querySelectorAll('.experience-moment') ?? [])];

  const scrollToIndex = (index, behavior = 'smooth') => {
    const slide = getSlideElements()[index];
    const track = trackRef.current;
    if (!slide || !track) return;
    if (behavior === 'auto') {
      const inlineScrollBehavior = track.style.scrollBehavior;
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = slide.offsetLeft;
      track.getBoundingClientRect();
      track.style.scrollBehavior = inlineScrollBehavior;
      return;
    }
    track.scrollTo({ left: slide.offsetLeft, behavior });
  };

  const pauseAfterInteraction = () => {
    pauseUntilRef.current = Date.now() + MANUAL_PAUSE;
  };

  const moveBy = (direction) => {
    pauseAfterInteraction();
    const lastIndex = experienceMoments.length - 1;
    const current = activeIndexRef.current;

    if (direction < 0 && current === 0) {
      suppressNormalizeUntilRef.current = Date.now() + 800;
      scrollToIndex(experienceMoments.length, 'auto');
      requestAnimationFrame(() => scrollToIndex(lastIndex));
      activeIndexRef.current = lastIndex;
      return;
    }

    const next = direction > 0 ? current + 1 : current - 1;
    scrollToIndex(next);
    activeIndexRef.current = next % experienceMoments.length;
  };
  moveByRef.current = moveBy;

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return () => window.clearTimeout(scrollTimerRef.current);

    const interval = window.setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel || document.hidden || hoverRef.current || focusRef.current || pointerRef.current || Date.now() < pauseUntilRef.current) return;
      const bounds = carousel.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      moveByRef.current?.(1);
    }, AUTOPLAY_INTERVAL);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const handleScroll = () => {
    window.clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = window.setTimeout(() => {
      if (Date.now() < suppressNormalizeUntilRef.current) return;
      const slidesInTrack = getSlideElements();
      const scrollLeft = trackRef.current?.scrollLeft ?? 0;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slidesInTrack.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex >= experienceMoments.length) {
        closestIndex -= experienceMoments.length;
        scrollToIndex(closestIndex, 'auto');
      }
      activeIndexRef.current = closestIndex;
    }, 140);
  };

  const handleKeyDown = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    moveBy(event.key === 'ArrowRight' ? 1 : -1);
  };

  return (
    <div
      className="experience-carousel reveal"
      ref={carouselRef}
      role="region"
      aria-label="Experience photo carousel"
      onMouseEnter={() => { hoverRef.current = true; }}
      onMouseLeave={() => { hoverRef.current = false; }}
      onFocusCapture={() => { focusRef.current = true; }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) focusRef.current = false;
      }}
    >
      <div className="experience-carousel-controls">
        <button type="button" onClick={() => moveBy(-1)} aria-label="Show previous experience photo"><ChevronLeft aria-hidden="true" /></button>
        <button type="button" onClick={() => moveBy(1)} aria-label="Show next experience photo"><ChevronRight aria-hidden="true" /></button>
      </div>
      <div
        className="experience-carousel-track"
        ref={trackRef}
        tabIndex="0"
        aria-label="Scrollable experience photographs. Use the left and right arrow keys to navigate."
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        onWheel={pauseAfterInteraction}
        onPointerDown={() => {
          pointerRef.current = true;
          pauseAfterInteraction();
        }}
        onPointerUp={() => {
          pointerRef.current = false;
          pauseAfterInteraction();
        }}
        onPointerCancel={() => {
          pointerRef.current = false;
          pauseAfterInteraction();
        }}
      >
        {slides.map((moment, index) => {
          const duplicate = index >= experienceMoments.length;
          return (
            <figure
              className="experience-moment"
              style={{ '--moment-ratio': moment.cardRatio }}
              aria-hidden={duplicate || undefined}
              key={`${moment.caption}-${duplicate ? 'duplicate' : 'original'}`}
            >
              <img
                src={moment.src}
                alt={duplicate ? '' : moment.alt}
                loading="lazy"
                width={moment.width}
                height={moment.height}
                style={{ objectPosition: moment.objectPosition }}
              />
              <figcaption>{moment.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCarousel;
