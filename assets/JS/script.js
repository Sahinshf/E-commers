let menuBtn = document.querySelector(".header_middle_left_menu_bar");
let navBar = document.querySelector(".header_middle_nav");

let searchBtn = document.querySelector(".header_middle_search");
let searchBox = document.querySelector(".search_box");
let closeSearchBox = document.querySelector(".search_box_xmark");

//#region Header Fixed
const fixedHeader = document.querySelector(".header_fixed");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 33) {
    fixedHeader.classList.add("fixed_header");
  } else {
    fixedHeader.classList.remove("fixed_header");
  }
});
//#endregion

//#region Navigation Bar

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");

  if (searchBox.classList.contains("active")) {
    searchBox.classList.remove("active");
  }
});

//#endregion

//#region SearchBox

searchBtn.addEventListener("click", () => {
  if (searchBox.classList.contains("close")) {
    searchBox.classList.remove("close");
    searchBox.classList.toggle("active");
  }

  searchBox.classList.toggle("active");

  if (navBar.classList.contains("active")) {
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("active");
  }
});

closeSearchBox.addEventListener("click", () => {
  searchBox.classList.toggle("close");
});

//#endregion

//#region Login Register Section
const modal = document.querySelector(".login_user");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelector(".btn--show-modal");
const loginPath = document.querySelector(".login_path");

const modalRegister = document.querySelector(".user_register");
const btnCloseModalRegister = document.querySelector(
  ".btn--close-modal_register"
);

console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

loginPath.addEventListener("click", openModal);
loginPath.addEventListener("click", () => {
  modalRegister.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//#region Register
let pathRegister = document.querySelector(".path_register");

pathRegister.addEventListener("click", () => {
  closeModal();

  modalRegister.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseModalRegister.addEventListener("click", () => {
  modalRegister.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modalRegister.classList.add("hidden");
  overlay.classList.add("hidden");
});
//#endregion
//#endregion

// #region Banner Slider
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//#endregion

//#region Banner Text Animation

let titleAnimation = document.querySelectorAll(".banner_text_title");
let textAnimation = document.querySelectorAll(".banner_text_info");
let buttonAnimation = document.querySelectorAll(".banner_button");
titleAnimation[0].classList.add("animate__bounceIn");
textAnimation[0].classList.add("animate__fadeInUp");
buttonAnimation[0].classList.add("animate__fadeInUp");

swiper.on("slideChange", function (e) {
  if (swiper.activeIndex == 0) {
    titleAnimation[0].classList.add("animate__bounceIn");
    textAnimation[0].classList.add("animate__fadeInUp");
    buttonAnimation[0].classList.add("animate__fadeInUp");

    titleAnimation[1].classList.remove("animate__bounceIn");
    textAnimation[1].classList.remove("animate__fadeInUp");
    buttonAnimation[1].classList.remove("animate__fadeInUp");
  } else {
    titleAnimation[0].classList.remove("animate__bounceIn");
    textAnimation[0].classList.remove("animate__fadeInUp");
    buttonAnimation[0].classList.remove("animate__fadeInUp");

    titleAnimation[1].classList.add("animate__bounceIn");
    textAnimation[1].classList.add("animate__fadeInUp");
    buttonAnimation[1].classList.add("animate__fadeInUp");
  }
});

//#endregion

//#region Product Swiper

let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

//#endregion
