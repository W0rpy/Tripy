let firstSwiper = new Swiper('.first-slider__main', {
   // Optional parameters
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.main-arrow__right',
      prevEl: '.main-arrow__left',
   },
   slidesPerView: 1,
   spaceBetween: 15,
   breakpoints: {
      390: {
         slidesPerView: 1.2,
      },
      480: {
         slidesPerView: 1.5,
      },
      580: {
         slidesPerView: 1.8,
      },
      676: {
         slidesPerView: 2,
         spaceBetween: 15,
      },
      767: {
         spaceBetween: 20,
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 30,
      }
   },
});
