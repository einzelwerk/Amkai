const playButton = document.querySelectorAll('.reels__video-playBtn');
window.addEventListener('load', () => {
  playButton.forEach((el) => {
    const elem = el;
    elem.addEventListener('click', () => {
      const video = elem.previousElementSibling;
      if (!video.playing) {
        video.play();
        video.setAttribute('controls', true);
        elem.style.display = 'none';
      }

      video.addEventListener('mouseenter', () => {
        video.play();
      });
      video.addEventListener('pointerenter', () => {
        video.play();
      });
      video.addEventListener('mouseleave', () => {
        video.pause();
      });
      video.addEventListener('pointerleave', () => {
        video.pause();
      });
    });
  });
});
