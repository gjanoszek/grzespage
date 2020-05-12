const hamburger = document.querySelector('.hamburger__button');
const nav = document.querySelector('.hamburger__drawer');
const hamburgerActiv = document.querySelector('.hamburger__button--active');
const navActiv = document.querySelector('.hamburger__drawer--active');



const handleClick = () => {
  hamburger.classList.toggle('hamburger__button--active');
  nav.classList.toggle('hamburger__drawer--active');
}

hamburger.addEventListener('click', handleClick);




const removeClass = () => {
  if (hamburger.classList.contains('hamburger__drawer--active')) {
  hamburger.classList.remove('hamburger__button--active');
  nav.classList.remove('hamburger__drawer--active');
  }
}

document.addEventListener('click', removeClass);









// const removeClass = () => {
//   hamburger.classList.remove('hamburger__button--active');
//   nav.classList.remove('hamburger__drawer--active');
// }

// if (hamburger.classList.contains('hamburger__button--active')) {
//   document.addEventListener('click', removeClass);
// }


// const removeClass = () => {
//   hamburger.classList.remove('hamburger__button--active');
//   nav.classList.remove('hamburger__drawer--active');

// document.addEventListener('click', () => {
//   nav.display = 'none';
// })
