const images = document.getElementsByClassName('portfolio__image');
const imgPopup = document.getElementById('image-popup');

Array.from(images).forEach(img => {
  img.addEventListener('click', () => {
    imgPopup.querySelector('img').src = img.querySelector('img').src;
    imgPopup.style.display = 'flex';
  })
});

imgPopup.addEventListener('click', () => {
  imgPopup.style.display = 'none';
})
