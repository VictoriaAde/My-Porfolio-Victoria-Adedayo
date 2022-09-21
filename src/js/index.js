import { runScrollReveal } from './scrollReaveal';

// Scroll Reveal
runScrollReveal();

// Nav

// Nav
let menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  // Toggle the class name change for hambunger button to change to "X"
  menuBtn.classList.toggle('change');

  let mobileNav = document.querySelector('.mobile-nav');
  mobileNav.classList.toggle('showMobileNav');
});

// window.addEventListener('click', (event) => {
//   if (event.target === mobileNav) {
//     mobileNav.classList.remove('showMobileNav');
//   }
// });
