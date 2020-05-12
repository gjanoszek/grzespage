const hamburgerButton = document.querySelector('.hamburger__button');
const drawer = document.querySelector('.hamburger__drawer');

const toggleHamburger = () => {
  hamburgerButton.classList.toggle('hamburger__button--active');
  drawer.classList.toggle('hamburger__drawer--active');
};

const hideDrawer = () => {
  if (drawer.classList.contains('hamburger__drawer--active') && event.target !== hamburgerButton) {
    hamburgerButton.classList.remove('hamburger__button--active');
    drawer.classList.remove('hamburger__drawer--active');
  }
};

hamburgerButton.addEventListener('click', toggleHamburger);
document.addEventListener('click', hideDrawer);
