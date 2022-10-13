let form = document.forms;
let emailButton = document.querySelector('.email-button');
let formFooter = form.footer;
let formInput = formFooter.inpEmail;
let placeholderFormInput = formInput.placeholder;
formInput.addEventListener('focus', function () {
   formInput.placeholder = " ";
});
formInput.addEventListener('blur', function () {
   formInput.placeholder = placeholderFormInput;
});
emailButton.addEventListener('click', function (e) {
   e.preventDefault();
})