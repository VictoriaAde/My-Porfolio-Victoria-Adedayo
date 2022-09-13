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
  //project
  { el: '.project_con__heading' },
  { el: '.project_con__text' },
  { el: '.project_con__projects' },
  { el: '.project_con__github_link' },
  { el: '.project_con__triangle_shape--mobile' },
  { el: '.project_con__triangle_shape--desktop' },
  //blog
  { el: '.blog__heading' },
  { el: '.blog__item_img_one' },
  { el: '.blog__item_description' },
  { el: '.blog__item_img_two' },
  { el: '.blog__item_img_three' },
  //contact
  { el: '.contact__heading' },
  { el: '.contact__text' },
  { el: '.contact__uptriangle_shape_mobile' },
  { el: '.contact__uptriangle_shape_desktop' },
  { el: 'input' },
  { el: 'textarea' },
  //footer
  { el: '.footer__logo_div' },
  { el: '.footer__links_div' },
  { el: '.footer__copyright_div' },
  //  TODO: Add more selectors to scroll reveal here
];

const selectors = [...heroSelectors];

export const runScrollReveal = () => {
  heroSelectors.forEach((el, index) => {
    ScrollReveal().reveal(el.el, {
      ...scrollRevealOptions,
      ...{ delay: index * 20 },
      ...el.options,
    });
  });
};
