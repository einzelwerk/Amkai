const mobileNavBtn = document.querySelectorAll('.mobile-nav__arrow');
mobileNavBtn.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    const target = e.currentTarget.closest('.mobile-nav__item').querySelector('.mobile-sub');
    target.classList.toggle('opened');
  });
});
