const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const logo = document.querySelector(".logo");
const links = nav.querySelectorAll("a");

logo.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  logo.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    logo.classList.toggle("toggle");
  });
});
