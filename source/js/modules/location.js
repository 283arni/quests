export default (function () {
  const modal = document.querySelector('.modal_location');
  const closeBtn = modal.querySelector('.modal__close-btn');
  const locationBtn = modal.querySelector('.modal__location-content button');
  const cities = modal.querySelectorAll('li');

  const removeActiveClass = () => {
    for (const city of cities) {
      city.classList.remove('active');
    }
  };

  const loopLocation = () => {
    closeBtn.addEventListener('keydown', (e) => {
      e.preventDefault();

      if (e.key === 'Tab') {
        locationBtn.focus();
      }

      if (e.key === 'Enter') {
        closeBtn.click();
      }
    });
  };


  loopLocation();

  for (const city of cities) {
    city.addEventListener('click', () => {
      removeActiveClass();
      city.classList.add('active');
    });

    city.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        city.click();
      }
    });
  }
});
