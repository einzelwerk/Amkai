document.addEventListener('click', (e) => {
  if (e.target.closest('.js-toggle-lang')) {
    e.target.closest('.lang').querySelector('.lang__btn').classList.toggle('active')
    e.target.closest('.lang').querySelector('.lang__content').classList.toggle('active')
  } else if (!e.target.closest('.js-toggle-lang')) {
    document.querySelectorAll('.js-toggle-lang').forEach(t => t.classList.remove('active'))
    document.querySelectorAll('.lang__content').forEach(t => t.classList.remove('active'))

  }
})