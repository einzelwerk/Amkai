const heroPlayButton = document.querySelectorAll('.hero-playerBtn');
heroPlayButton.forEach((el) => {
  const elem = el;
  elem.addEventListener('click', () => {
    const video = elem.nextElementSibling.querySelector('video');
    if (video.paused) {
      video.play();
      document.querySelector('.hero-playerBtn--play').style.display = 'none';
      document.querySelector('.hero-playerBtn--pause').style.display = 'block';

      if (document.querySelector('.hero-playerBtn--text')) {
        document.querySelector('.hero-playerBtn--text').textContent = 'pause video';
      }
    } else {
      video.pause();
      document.querySelector('.hero-playerBtn--play').style.display = 'block';
      document.querySelector('.hero-playerBtn--pause').style.display = 'none';

      if (document.querySelector('.hero-playerBtn--text')) {
        document.querySelector('.hero-playerBtn--text').textContent = 'play video';
      }
    }
  });
});
