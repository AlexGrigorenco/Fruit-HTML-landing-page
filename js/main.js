const sliderArrive = document.querySelectorAll(".slider__item");
const nextButton = document.querySelector(".slider__button--next");
const prevButton = document.querySelector(".slider__button--prev");


toggleSlideClass();

function toggleSlideClass() {
  sliderArrive[0].classList.toggle("slider__item--active");
  sliderArrive[1].classList.toggle("slider__item--next");
  sliderArrive[2].classList.toggle("slider__item--prev");
}

nextButton.addEventListener("click", function () {
  const activeSlide = document.querySelector(".slider__item--active");
  const nextSlide = document.querySelector(".slider__item--next");
  const prevSlide = document.querySelector(".slider__item--prev");

  activeSlide.classList.toggle("slider__item--active");

  activeSlide.classList.toggle("slider__item--prev");

  nextSlide.classList.toggle("slider__item--next");
  nextSlide.classList.toggle("slider__item--active");

  prevSlide.classList.toggle("slider__item--prev");
  prevSlide.classList.toggle("slider__item--next");
});

prevButton.addEventListener("click", function () {
  const activeSlide = document.querySelector(".slider__item--active");
  const nextSlide = document.querySelector(".slider__item--next");
  const prevSlide = document.querySelector(".slider__item--prev");

  activeSlide.classList.toggle("slider__item--active");
  activeSlide.classList.toggle("slider__item--next");

  nextSlide.classList.toggle("slider__item--next");
  nextSlide.classList.toggle("slider__item--prev");

  prevSlide.classList.toggle("slider__item--prev");
  prevSlide.classList.toggle("slider__item--active");
});


new WOW().init();
