const menu = document.querySelector(".navList");
const openButton = document.querySelector('.openBtn');
const closeButton = document.querySelector('.closeBtn');

openButton.addEventListener('click', function () {
  menu.parentElement.classList.toggle('show');
  menu.style.display = "block";
  closeButton.style.display = "block";
  openButton.style.display = "none";
})

closeButton.addEventListener('click', function () {
  closeButton.style.display = "none";
  openButton.style.display = "block";
  menu.style.display = "none";
  menu.parentElement.classList.toggle('show');
})
