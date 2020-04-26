const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.hamNav');


const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('hamNav--active');

}

hamburger.addEventListener('click', handleClick);