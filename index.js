const navbar = document.querySelector(".home-header .navs ul");
const closeIcon = document.querySelector(".fa-xmark");
const openIcon = document.querySelector(".fa-bars");

// responsive navbar functionality >>>>>>
openIcon.addEventListener("click", function () {
  navbar.style.top = "0";
});

closeIcon.addEventListener("click", function () {
  navbar.style.top = "-100%";
});

// active nav link functionality >>>>>>>>>>

const navLinks = document.querySelectorAll(".home-header .navs ul .nav-link");

navbar.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});

//  Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
