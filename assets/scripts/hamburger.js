const hamburger = document.querySelector('.hamburger__button');
const nav = document.querySelector('.hamburger__drawer');


const handleClick = () => {
  hamburger.classList.toggle('hamburger__button--active');
  nav.classList.toggle('hamburger__drawer--active');

}

hamburger.addEventListener('click', handleClick);