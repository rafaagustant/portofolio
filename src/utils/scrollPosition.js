export const scrollToInstantly = (top) => {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, top);
  root.getBoundingClientRect();
  root.style.scrollBehavior = previousBehavior;
};
