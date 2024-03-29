class Nav {
  constructor(btn, menu) {
    this.btn = btn;
    this.menu = menu;
    this.state = false;
    this.listener();
  }

  listener() {
    document.addEventListener('click', (e) => {
      if (this.state && this.btn.contains(e.target)) {
        this.closeNav();
      } else if (!this.state && this.btn.contains(e.target)) {
        this.openNav();
      }
    });
  }

  openNav() {
    this.state = true;
    this.menu.classList.add('opened');
    this.btn.classList.add('opened');
    this.btn.querySelector('svg use').setAttribute('xlink:href', '/assets/img/sprite.svg#close_sprite');
    this.btn.setAttribute('aria-expanded', true);
    this.btn.setAttribute('aria-label', 'Menü schließen');
    document.body.classList.add('menu-open');
    document.querySelector('.header').classList.add('menu-open');
  }

  closeNav() {
    this.state = false;
    this.menu.classList.remove('opened');
    this.btn.classList.remove('opened');
    this.btn.querySelector('svg use').setAttribute('xlink:href', '/assets/img/sprite.svg#mobile_sprite');
    this.btn.setAttribute('aria-expanded', false);
    this.btn.setAttribute('aria-label', 'Menü öffnen');
    document.body.classList.remove('menu-open');
    document.querySelector('.header').classList.remove('menu-open');
  }
}

(() => new Nav(document.querySelector('.js-open-mobile-menu'), document.querySelector('#mobile-nav')))();
