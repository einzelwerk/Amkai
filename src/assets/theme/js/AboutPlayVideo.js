const playVideo = () => {
  const bigVideo = document.getElementById('bigVideo');
  const videos = document.querySelectorAll('.about__videos-item--hover img[data-video]');

  videos.forEach((video) => {
    video.addEventListener('click', () => {
      const srcVideo = video.getAttribute('data-video');

      bigVideo.src = srcVideo;

      bigVideo.play();
    });
  });
};

playVideo();
