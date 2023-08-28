import Swiper, { Navigation, Pagination, EffectCards } from 'swiper';
/* eslint-disable import/no-unresolved */

import 'swiper/css';

import 'swiper/css/effect-cards';

// import breakpoints from './MatchMedia';

class Sliders {
  static reviews() {
    const root = document.querySelector('.reviews');
    const sliderInstance = new Swiper(root, {
      modules: [Navigation, Pagination],
      init: false,
      slidesPerView: 1,
      loop: true,
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

  static hero() {
    const root = document.querySelector('.hero-secondary__slider');
    const sliderInstance = new Swiper(root, {
      modules: [Navigation, Pagination],
      init: false,
      slidesPerView: 1.2,
      centeredSlides: true,
      spaceBetween: 8,
      loop: true,
      initialSlide: 1,
      navigation: false,
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesPerView: 2,
          navigation: {
            nextEl: root?.querySelector('.slider-navigation__next'),
            prevEl: root?.querySelector('.slider-navigation__prev'),
            disabledClass: 'slider-navigation__btn--disabled',
          },
        },
      },
    });

    sliderInstance.init();
  }

  static reels() {
    const root = document.querySelector('.reels__slider');
    const sliderInstance = new Swiper(root, {
      modules: [Navigation, EffectCards, Pagination],
      pagination: {
        el: '.reels__numbers',
        type: 'fraction',
      },
      init: false,
      loop: true,
      effect: 'cards',
      grabCursor: true,
      navigation: {
        nextEl: root?.querySelector('.slider-navigation__next'),
        prevEl: root?.querySelector('.slider-navigation__prev'),
        disabledClass: 'slider-navigation__btn--disabled',
      },
    });
    sliderInstance.init();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Sliders.reviews();
  Sliders.hero();
  Sliders.reels();
});
