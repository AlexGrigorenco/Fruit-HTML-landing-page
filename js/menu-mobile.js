const mobileBTN = document.querySelector('.menu-icon-wrapper');
const menu = document.querySelector('.menu__wrapper');
const body = document.querySelector('body')


mobileBTN.onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  menu.classList.toggle('menu__wrapper__mobile');
  body.classList.toggle('no-scroll');
}
