const sliderArrive = document.querySelectorAll(".slider__item");
const nextButton = document.querySelector(".slider__button--next");
const prevButton = document.querySelector(".slider__button--prev");
const products = [
  {
    img: './images/product/01.png',
    title: 'Ripe Yellow Banana',
    prise: 2.89,
  },
  {
    img: './images/product/02.png',
    title: 'Red Pomegranate',
    prise: 3.89,
  },
  {
    img: './images/product/03.png',
    title: 'Sweet Orange',
    prise: 2.89,
  },
  {
    img: './images/product/04.png',
    title: 'Tasty Avocado',
    prise: 3.89,
  },
  {
    img: './images/product/05.png',
    title: 'Ripe red apples',
    prise: 5.89,
  },
  {
    img: './images/product/06.png',
    title: 'Ripe Green Apple',
    prise: 1.89,
  },
  {
    img: './images/product/07.png',
    title: 'Sweet Strawberry',
    prise: 5.89,
  },
  {
    img: './images/product/08.png',
    title: 'Tasty Watemelon',
    prise: 6.89,
  }
]

const htmlString = products.map(product => `
<div class="product__item">
<div class="product__img">
  <img src=${product.img}>
</div>
<div class="product__description">
  <p class="product__name">
    ${product.title}
  </p>
  <p class="product__price">
    $${product.prise}
  </p>
</div>
<div class="product__description">
  <p class="product__weight">
    500g
  </p>
  <button type="button" class="product_buy">
    Buy
  </button>
</div>
</div>
`).join('')

document.querySelector('.product__wrapper').innerHTML = htmlString

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
