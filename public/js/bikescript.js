var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 100,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
