const hamburgerIcon = document.querySelector(
  "#navbar .navbar .nav-list .hamburger"
);
const navList = document.querySelector("#navbar .navbar .nav-list");
const menu_item = document.querySelectorAll(
  "#navbar .navbar .nav-list ul li a"
);

hamburgerIcon.addEventListener("click", () => {
  navList.classList.toggle("open");
  hamburgerIcon.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    navList.classList.toggle("open");
    hamburgerIcon.classList.toggle("active");
  });
});
