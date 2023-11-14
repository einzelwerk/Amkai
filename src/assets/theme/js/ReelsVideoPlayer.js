const playButton = document.querySelectorAll('.reels__video-playBtn');
playButton.forEach((el) => {
  const elem = el;
  elem.addEventListener('click', () => {
    const video = elem.closest('.swiper-slide').querySelector('video');
    video.addEventListener('click', (e) => {
      e.preventDefault();
    });
    if (!video.playing) {
      video.play();
      video.setAttribute('controls', true);
      elem.style.display = 'none';
    }

    video.addEventListener('mouseenter', () => {
      video.play();
    });
    video.addEventListener('mouseleave', () => {
      video.pause();
    });
    video.addEventListener('pointerenter', () => {
      video.play();
    });
    video.addEventListener('pointerleave', () => {
      video.pause();
    });
  });
});
