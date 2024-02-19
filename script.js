//  let currentImg = document.body.getElementsByClassName(current)
//  let prevImg = document.body.getElementsByClassName(previous)
//  let nextImg = document.body.getElementsByClassName(next)

// 	let leftButton = document.body.getElementsByClassName(slide-left)
// 	let rightButton = document.body.getElementsByClassName(slide-right)

// 	leftButton.addEventListener('click', () => {
//   currentImg.style.transform = 'translateX(100%)';
//   prevImg.style.transform = 'translateX(0)';
//   nextImg.style.transform = 'translateX(200%)';
// });

// rightButton.addEventListener('click', () => {
//   currentImg.style.transform = 'translateX(-100%)';
//   prevImg.style.transform = 'translateX(-200%)';
//   nextImg.style.transform = 'translateX(0)';
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 100,
  autoplay: {
      delay:2500, 
    },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});