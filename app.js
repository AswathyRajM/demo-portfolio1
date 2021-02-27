const hamburgerIcon = document.querySelector(
  "#navbar .navbar .nav-list .hamburger"
);
const navList = document.querySelector("#navbar .navbar .nav-list");

hamburgerIcon.addEventListener("click", () => {
  navList.classList.toggle("open");
  hamburgerIcon.classList.toggle("active");
});
