import { runScrollReveal } from './scrollReaveal';

// Scroll Reveal
runScrollReveal();

// Nav
const menuClose = document.getElementById('closeMenuBtn');
const menuOpen = document.getElementById('openMenuBtn');
const mobileMenu = document.querySelector('.mobile-nav');

// console.log(menuClose, menuOpen, mobileMenu);

menuOpen.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  // menuClose.style.display = "block";
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  // mobileMenu.classList.contains('show')
  // menuClose.style.display = "none";
});
