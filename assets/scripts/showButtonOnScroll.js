const scrollButt = document.querySelector('.arrows');
const showOnEl = document.getElementById('ScrollTo');

if (showOnEl) {
  function showButton() {
    const topBounding = showOnEl.getBoundingClientRect().top;
  
    if (topBounding <= 0) {
      scrollButt.classList.add('arrows--active');
    } else if (scrollButt.classList.contains('arrows--active')) {
      scrollButt.classList.remove('arrows--active')
    }
  }
  
  
  document.addEventListener('scroll', () => {
    let waiting = false;
    if (!waiting) {
      showButton();
      waiting = true;
      setTimeout(() => waiting = false, 500);
    }
  })
  
  showButton();
}
