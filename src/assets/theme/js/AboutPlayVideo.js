const playVideo = () => {
  const bigVideo = document.getElementById('bigVideo');
  const videos = document.querySelectorAll('.about__videos-item--hover img[data-video]');

  videos.forEach((video) => {
    video.addEventListener('click', () => {
      const srcVideo = video.getAttribute('data-video');

      bigVideo.src = srcVideo;
      bigVideo.loop = true;

      bigVideo.play();
    });
  });
};

const showVideoList = () => {
  const aboutSection = document.querySelector('.about');
  const videosDesktopWrapper = document.querySelector('.about__videos');
  const videosDesktop = `
  <div class="about__videos-list">
      <div class="about__videos-item"> <img class="about__videos-item--video" src="assets/theme/images/video-img.jpg" alt="video-img" loading="lazy" />
          <div class="about__videos-item--hover"> <img alt="play" src="assets/theme/images/icons/play-2.svg" data-video="https://amkai.hamburg/assets/userfiles/videos/amkai-teaser.mp4" loading="eager" />
              <p>Video ansehen</p>
          </div>
      </div>
      <div class="about__videos-item"> <img class="about__videos-item--video" src="assets/theme/images/video-img.jpg" alt="video-img" loading="lazy" />
          <div class="about__videos-item--hover"> <img alt="play" src="assets/theme/images/icons/play-2.svg" data-video="https://amkai.hamburg/assets/userfiles/videos/amkai-teaser.mp4" loading="eager" />
              <p>Video ansehen</p>
          </div>
      </div>
      <div class="about__videos-item"> <img class="about__videos-item--video" src="assets/theme/images/video-img.jpg" alt="video-img" loading="lazy" />
          <div class="about__videos-item--hover"> <img alt="play" src="assets/theme/images/icons/play-2.svg" data-video="https://amkai.hamburg/assets/userfiles/videos/amkai-teaser.mp4" loading="eager" />
              <p>Video ansehen</p>
          </div>
      </div>
      <div class="about__videos-item"> <img class="about__videos-item--video" src="assets/theme/images/video-img.jpg" alt="video-img" loading="lazy" />
          <div class="about__videos-item--hover"> <img alt="play" src="assets/theme/images/icons/play-2.svg" data-video="https://amkai.hamburg/assets/userfiles/videos/amkai-teaser.mp4" loading="eager" />
              <p>Video ansehen</p>
          </div>
      </div>
  </div>
  `;
  const videosMob = `
  <div class="about__videos-slider swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="about__videos-item"> <img class="about__videos-item--video" src="assets/theme/images/video-img.jpg" alt="video-img" />
                <div class="about__videos-item--hover"> <img src="assets/theme/images/icons/play-2.svg" alt="play" />
                    <p>Video ansehen</p>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="about__videos-item"> <img class="about__videos-item--video" src="assets/theme/images/video-img.jpg" alt="video-img" />
                <div class="about__videos-item--hover"> <img src="assets/theme/images/icons/play-2.svg" alt="play" />
                    <p>Video ansehen</p>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="about__videos-item"> <img class="about__videos-item--video" src="assets/theme/images/video-img.jpg" alt="video-img" />
                <div class="about__videos-item--hover"> <img src="assets/theme/images/icons/play-2.svg" alt="play" />
                    <p>Video ansehen</p>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="about__videos-item"> <img class="about__videos-item--video" src="assets/theme/images/video-img.jpg" alt="video-img" />
                <div class="about__videos-item--hover"> <img src="assets/theme/images/icons/play-2.svg" alt="play" />
                    <p>Video ansehen</p>
                </div>
            </div>
        </div>
    </div>
</div>`;

  if (window.innerWidth > 1024) {
    videosDesktopWrapper.insertAdjacentHTML('beforeend', videosDesktop);
  } else {
    aboutSection.insertAdjacentHTML('beforeend', videosMob);
  }

  playVideo();
};

showVideoList();
