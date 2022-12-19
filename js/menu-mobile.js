const mobileBTN = document.querySelector('.menu-icon-wrapper');
const menu = document.querySelector('.menu__wrapper');
const body = document.querySelector('body')



const menuLinks = menu.querySelectorAll('a')
const menuBttn = menu.querySelectorAll('button')
const menuClickObject = [...menuLinks, ...menuBttn]

console.log(menuClickObject)

mobileBTN.onclick = function(){
  toggleMenu()

  menuClickObject.forEach(elem => {
    elem.addEventListener('click', () => {
      
      document.querySelector('.menu__wrapper__mobile') ? toggleMenu() : null
    })
  })
}

function toggleMenu(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  menu.classList.toggle('menu__wrapper__mobile');
  body.classList.toggle('no-scroll');
}
