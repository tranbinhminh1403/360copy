export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
