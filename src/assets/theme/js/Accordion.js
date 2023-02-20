class Accordion {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.accordion__button');
    this.content = this.element.querySelector('.accordion__content');

    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.content.classList.toggle('accordion__content--active');
    this.button.classList.toggle('accordion__button--active');
    const isExpanded = this.content.classList.contains('accordion__content--active');

    if (isExpanded) {
      this.content.style.maxHeight = `${this.content.scrollHeight}px`;
    } else {
      this.content.style.maxHeight = 0;
    }
  }
}

const accordions = document.querySelectorAll('.accordion__item');
accordions.forEach((accordion) => new Accordion(accordion));
