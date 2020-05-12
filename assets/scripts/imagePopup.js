const images = document.getElementsByClassName('portfolio__image');
const imgPopup = document.getElementById('image-popup');
const drawerActive = document.querySelector('.hamburger__drawer--active');

Array.from(images).forEach(img => {
  img.addEventListener('click', () => {
    if (!drawerActive) {
    imgPopup.querySelector('img').src = img.querySelector('img').src;
    imgPopup.style.display = 'flex';
    }
  })
});

imgPopup.addEventListener('click', () => {
  imgPopup.style.display = 'none';
})



// const imgPopup = document.getElementById('image-popup');
