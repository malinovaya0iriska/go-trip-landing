// Nav icon
const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon--active");
  document.body.classList.toggle("no-scroll");
});

// Tiny Slider
const prevBtn = document.querySelector(".slider__btn--prev");
const nextBtn = document.querySelector(".slider__btn--next");

const slider = tns({
  container: ".carousel",
  startIndex: 0,
  items: 1,
  gutter: 20,
  slideBy: "page",
  autoplay: true,
  prevButton: prevBtn,
  nextButton: nextBtn,
  autoplay: true,
  autoplayButtonOutput: false,
  lazyload: true,
  lazyloadSelector: ".slider__item",
  center: true,
  touch: true,
  arrowKeys: true,
  mouseDrag: true,
  responsive: {
    540: {
      items: 3,
      gutter: 10,
    },
    1200: {
      items: 3,
    },
  },
});
