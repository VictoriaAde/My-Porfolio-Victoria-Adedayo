const menuClose = document.getElementById("closeMenuBtn");
const menuOpen = document.getElementById("openMenuBtn");
const mobileMenu = document.querySelector(".mobile-nav");

// console.log(menuClose, menuOpen, mobileMenu);

menuOpen.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  // menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  // mobileMenu.classList.contains('show')
  // menuClose.style.display = "none";
});

// scroll reveal
let slideUp = {
  distance: "150%",
  origin: "bottom",
  opacity: null,
};

sections = [
  document.querySelector("#hero-section"),
  document.querySelector("#about-section"),
  document.querySelector("#project-section"),
  document.querySelector("#blog-section"),
  document.querySelector("#contact-section"),
];
ScrollReveal().reveal(sections, slideUp, {
  delay: 500,
});

// heroSection = document.querySelector("#hero-section h1");
// heroSection = [
//   document.querySelector("#hero-section h1"),
//   document.querySelector("#hero-section a.hire_btn"),
//   document.querySelector("#hero-section p"),
// ];
// ScrollReveal().reveal("hero-section", {
//   delay: 300,
//   interval: 200,
//   easing: "ease-in",
//   interval: 200,
// });
// ScrollReveal().reveal("main #hero-section ", {
//   container: "main",
// });
// let slideUp = {
//   distance: "150%",
//   origin: "bottom",
//   opacity: null,
// };

// ScrollReveal().reveal(heroSection, slideUp, {
//   delay: 300,
//   interval: 200,
//   easing: "ease-in",
//   interval: 200,
// });

// document.querySelectorAll("#hero-section h3").forEach((el) => {
//   ScrollReveal().reveal(el, slideUp, {
//     delay: 300,
//     interval: 200,
//     easing: "ease-in",
//     interval: 200,
//   });
// });
