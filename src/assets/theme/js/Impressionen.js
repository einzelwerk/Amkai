const hoverables = document.querySelectorAll('.hoverable');
const picture = document.querySelector('.hero-impressionen__content-picture');

hoverables.forEach((hoverable) => {
  hoverable.addEventListener('mouseover', () => {
    picture.style.opacity = 1;
    picture.style.transition = 'opacity .5s ease-in-out';
  });

  hoverable.addEventListener('mouseleave', () => {
    picture.style.opacity = 0;
    picture.style.transition = 'opacity .5s ease-in-out';
  });
});
