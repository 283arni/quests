export default (function () {
  const container = document.querySelector('.swiper-container');
  const Swiper = window.Swiper;
  let swiperTabs = null;

  if (document.documentElement.clientWidth < 768) {
    swiperTabs = new Swiper(container, {
      slidesPerView: 'auto',
    });
  }

  return swiperTabs;
});
