// Swiper
var swiper = new Swiper(".popular-content", {
    slidesPreView:1,
    spaceBetween: 30,
    autoplay: {
      delay: 755500,
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
    breakpoints:{
        280:{
            slidesPreView: 1,
            spaceBetween: 10, 
        },
        320:{
            slidesPreView: 2,
            spaceBetween: 10, 
        },
        510:{
            slidesPreView:3,
            spaceBetween: 15, 
        }
        900:{
            slidesPreView:4,
            spaceBetween: 20, 
        }
    }
  });