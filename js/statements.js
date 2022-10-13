new Swiper('.statements-slider', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   spaceBetween: 15,
   breakpoints: {
      375: {
         slidesPerView: 1.2,
         spaceBetween: 10,
      },
      390: {
         slidesPerView: 1.2,
      },
      450: {
         slidesPerView: 1.3,
      },
      480: {
         slidesPerView: 1.4,
      },
      580: {
         slidesPerView: 1.5,
      },
      676: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      767: {
         spaceBetween: 15,
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 15,
      },
      1199.98: {
         slidesPerView: 3,
         spaceBetween: 24,
      }
   },


   // Navigation arrows
   navigation: {
      nextEl: '.left-arrow',
      prevEl: '.right-arrow',
   },
});