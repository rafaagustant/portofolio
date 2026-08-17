import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal';

export const useRevealOnScroll = (routeKey) => {
  useEffect(() => {
    const items = [...document.querySelectorAll(REVEAL_SELECTOR)];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    const observeItem = (item) => {
      if (!item.classList.contains('is-visible')) observer.observe(item);
    };

    items.forEach(observeItem);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(REVEAL_SELECTOR)) observeItem(node);
          node.querySelectorAll(REVEAL_SELECTOR).forEach(observeItem);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [routeKey]);
};
