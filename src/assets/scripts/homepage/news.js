{
  const swiper2 = new Swiper('.news-slider', {
    grabCursor: true,
    loop: true,
    keyboard: true,
    spaceBetween: 50,
    initialSlide: 0,
    preloadImages: false,
    lazy: true,
    watchSlidesVisibility: true,
    speed: 300,
    onSlideClick: video,
    breakpoints: {
      1400: {
        spaceBetween: 50,
        autoHeight: true,
        slidesPerView: 3.5,
        centeredSlides: false,
        loop: false,
      },
      768: {
        spaceBetween: 50,
        initialSlide: 1,
        autoHeight: true,
        slidesPerView: 2.5,
        centeredSlides: false,
      },
      360: {
        spaceBetween: 15,
        slidesPerView: 1.25,
        autoHeight: true,
        centeredSlides: false,
      },
    },
    simulateTouch: true,
    navigation: {
      nextEl: '.news-slider-next',
      prevEl: '.news-slider-prev',
    },
    pagination: {
      el: '.news-slider__pagination',
      clickable: true,
      type: 'progressbar',
    },
  });

  function video() {
    if (!clicked) {
      playVideo();
      window.clicked = true;
    } else if ((clicked = 2)) {
      player.pauseVideo();
      window.clicked = false;
    } else {
      resumeVideo();
      window.clicked = 2;
    }
  }
}
