let locationBtn = document.getElementById('location');
let dateBtn = document.getElementById('date');
let dropDownList = document.querySelector('.dropdown-list');
let dateDropList = document.querySelector('.date-drop__list');
let arrowDown = document.querySelector('.arrow__down');
let arrowCalendar = document.querySelector('.arrow__calendar');
let listItem = document.querySelector('.location-list__items');
let textItem = document.querySelector('.location-list__text');
let dropItems = document.querySelectorAll('.drop__item');
let redString = document.querySelector('.select-list');
let searchBtn = document.querySelector('.search_btn');
let dateItems = document.querySelectorAll('.date__item');

body.addEventListener('click', function (e) {
   if (!e.target.closest('.search_btn')) {
      redString.classList.remove('lock');
   }
});

searchBtn.addEventListener('click', function () {
   redString.classList.add('lock');
});

locationBtn.addEventListener('click', function () {
   dropDownList.classList.toggle('lock');
   arrowDown.classList.toggle('lock');
   for (let dropItem of dropItems) {
      dropItem.onclick = function () {
         listItem.textContent = dropItem.textContent;
         dropDownList.classList.remove('lock');
         arrowDown.classList.remove('lock');
      }
   }
});
dateBtn.addEventListener('click', function () {
   arrowCalendar.classList.toggle('lock');
   dateDropList.classList.toggle('lock');
   for (let dateItem of dateItems) {
      dateItem.onclick = function () {
         textItem.textContent = dateItem.textContent;
         dateDropList.classList.remove('lock');
         arrowCalendar.classList.remove('lock');

      }
   }
});