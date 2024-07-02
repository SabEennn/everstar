const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
})

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
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

let handleScroll = () => {
  let currentScroll = document.body.scrollTop || document.documentElement.scrollTop

  if (currentScroll > handleScroll.lastScroll) {
    document.getElementById('nav').style.top = '-100px'
  } else {
    //scroll up
    document.getElementById('nav').style.top = '0'
  }
  handleScroll.lastScroll = currentScroll
}

handleScroll.lastScroll = 0
window.addEventListener('scroll', handleScroll, false)

//to beautify the price

const price = (nrs) => {
  const priceSymbol = ['K', 'L', 'Cr']
  nrs = parseFloat(nrs)
  if (nrs >= 1000 && nrs < 100000) {
    return `${nrs / 1000} ${priceSymbol[0]}`
  } else if (nrs >= 100000 && nrs < 10000000) {
    return `${nrs / 100000} ${priceSymbol[1]}`
  }
  return nrs
}

// console.log(bikedata.variants.hexCodes[1])
