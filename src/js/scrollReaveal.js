import ScrollReveal from 'scrollreveal';

const scrollRevealOptions = {
  duration: 500,
  origin: 'bottom',
  distance: '20px',
  easing: 'ease-in',
  opacity: 0,
  reset: false,
};

const heroSelectors = [
  // Hero
  { el: '.hero__welcome' },
  { el: '.hero__heading' },
  { el: '.hero__subheading' },
  { el: '.hero__description' },
  { el: '.hero__cta' },
  { el: '.hero__img' },
  // About
  { el: '.about__heading' },
  { el: '.about__text--1' },
  { el: '.about__text--2' },
  { el: '.about__text--3' },
  { el: '.about__text--4' },
  { el: '.about__text--5' },
  { el: '.about__img', options: { origin: 'right' } },

  //  TODO: Add more selectors to scroll reveal here
];

const selectors = [...heroSelectors];

export const runScrollReveal = () => {
  heroSelectors.forEach((el, index) => {
    ScrollReveal().reveal(el.el, {
      ...scrollRevealOptions,
      ...{ delay: index * 100 },
      ...el.options,
    });
  });
};
