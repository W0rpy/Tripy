let body = document.querySelector('body');
let menuBurger = document.querySelector('.menu-burger');
let menuList = document.querySelector('.menu_list');
menuBurger.addEventListener('click', function () {
   menuBurger.classList.toggle('active');
   menuList.classList.toggle('active');
   body.classList.toggle('active');
})