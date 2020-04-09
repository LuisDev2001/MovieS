/* -------------------------- burger Button mobile -------------------------- */
const burgerButton = document.querySelector('.burgerButton');
const menu = document.querySelector('#menu');

burgerButton.addEventListener('click', () => {
  menu.style.transition = '.3s ease';
  menu.style.left = '0em';
});
/* -------------------------------- arrow up -------------------------------- */
const  arrowUp = document.querySelector('.arrowUp');

arrowUp.addEventListener('click', () => {
  window.scroll({
    top: 100 + '%',
    behavior: "smooth"
  });
});
/* ------------------------------ close button ------------------------------ */
const closeButton = document.querySelector('main .container #menu .closeMenu i');
closeButton.addEventListener('click', () => {
  menu.style.left = '-30em';
});