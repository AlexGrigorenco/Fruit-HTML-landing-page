const community = document.querySelector('.footer__community__title');
const about = document.querySelector('.footer__about__title');
const contact = document.querySelector('.footer__contact__title');

const communityColumn = document.querySelector('.footer__community__column');
const aboutColumn = document.querySelector('.footer__about__column');
const contactColumn = document.querySelector('.footer__contact__column');

community.addEventListener("click", function () {
  communityColumn.classList.toggle("footer__column-active");

})
about.addEventListener("click", function () {
  aboutColumn.classList.toggle("footer__column-active");
})
contact.addEventListener("click", function () {
  contactColumn.classList.toggle("footer__column-active");
})
