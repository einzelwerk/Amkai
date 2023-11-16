const playTrigger = document.querySelectorAll('.js-play-video');
playTrigger.forEach((el) => {
  const elem = el;
  elem.addEventListener('click', () => {
    const video = elem.closest('.video').querySelector('video');
    document?.querySelector('.video-title').remove();
    if (video.paused) {
      video.play();
      video.setAttribute('controls', true);
      elem.style.display = 'none';
    } else {
      video.pause();
      video.removeAttribute('controls', true);
      elem.style.display = '';
    }
  });
});
