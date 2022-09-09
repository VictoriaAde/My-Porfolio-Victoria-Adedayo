import ScrollReveal from 'scrollreveal';

const els = [
  document.querySelector('.hero__welcome'),
  document.querySelector('.hero__heading'),
  document.querySelector('.hero__subheading'),
  document.querySelector('.hero__description'),
  document.querySelector('.hero__cta'),
  document.querySelector('.hero__img'),
  //  TODO: Add more selectors to scroll reveal here
];

export const runScrollReveal = () => {
  ScrollReveal().reveal(els, {
    duration: 500,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-in',
    opacity: 0,
    reset: true,
  });
};
