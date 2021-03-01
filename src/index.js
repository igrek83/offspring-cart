import './styles/index.css';

const buttonMenu = document.querySelector('#buttonMenu');
const closeMenu = document.querySelector('#closeMenu');
function open() {
  document.querySelector('.header__block').classList.add('header__block-open');
  document.querySelector('.header').classList.add('header__fixed');
  buttonMenu.classList.remove('open');
  closeMenu.classList.add('open');
}
function close() {
  document.querySelector('.header__block').classList.remove('header__block-open');
  document.querySelector('.header').classList.remove('header__fixed');
  buttonMenu.classList.add('open');
  closeMenu.classList.remove('open');
}

buttonMenu.addEventListener('click', open);
closeMenu.addEventListener('click', close);