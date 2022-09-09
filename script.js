// scroll reveal
let slideUp = {
  distance: '150%',
  origin: 'bottom',
  opacity: null,
};

sections = [
  document.querySelector('#hero'),
  document.querySelector('#about-section'),
  document.querySelector('#project-section'),
  document.querySelector('#blog-section'),
  document.querySelector('#contact-section'),
];
ScrollReveal().reveal(sections, slideUp, {
  delay: 500,
});

// heroSection = document.querySelector("#hero h1");
// heroSection = [
//   document.querySelector("#hero h1"),
//   document.querySelector("#hero a.hire_btn"),
//   document.querySelector("#hero p"),
// ];
// ScrollReveal().reveal("hero", {
//   delay: 300,
//   interval: 200,
//   easing: "ease-in",
//   interval: 200,
// });
// ScrollReveal().reveal("main #hero ", {
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

// document.querySelectorAll("#hero h3").forEach((el) => {
//   ScrollReveal().reveal(el, slideUp, {
//     delay: 300,
//     interval: 200,
//     easing: "ease-in",
//     interval: 200,
//   });
// });
