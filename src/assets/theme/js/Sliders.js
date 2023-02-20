import Swiper, { Navigation, Pagination } from 'swiper';
/* eslint-disable import/no-unresolved */

import 'swiper/scss';

// import breakpoints from './MatchMedia';

class Sliders {
  static reviews() {
    const root = document.querySelector('.reviews');
    const sliderInstance = new Swiper(root, {
      modules: [Navigation, Pagination],
      init: false,
      slidesPerView: 1,

      spaceBetween: 30,
      navigation: {
        nextEl: root?.querySelector('.slider-navigation__next'),
        prevEl: root?.querySelector('.slider-navigation__prev'),
        disabledClass: 'slider-navigation__btn--disabled',
      },
      pagination: {
        el: root?.querySelector('.slider-pagination'),
        type: 'fraction',
      },
      breakpoints: {
        1024: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      },
    });

    sliderInstance.init();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Sliders.reviews();
});
