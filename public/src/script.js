var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let handleScroll = () => {
  let currentScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (currentScroll > handleScroll.lastScroll) {
    document.getElementById("nav").style.top = "-100px";
  } else {
    //scroll up
    document.getElementById("nav").style.top = "0";
  }
  handleScroll.lastScroll = currentScroll;
};

handleScroll.lastScroll = 0;
window.addEventListener("scroll", handleScroll, false);
