const openButton = document.querySelector('.openBtn');
const overlay = document.querySelector(".navList");
const menuList = document.querySelector(".navList");
const closeButton = document.querySelector('.closeBtn');

openButton.addEventListener('click', function () {
    overlay.parentElement.classList.toggle('show');
    menuList.style.display = "block";
    closeButton.style.display = "block";
    openButton.style.display = "none";
})

closeButton.addEventListener('click', function () {
    closeButton.style.display = "none";
    openButton.style.display = "block";
    menuList.style.display = "none";
    overlay.parentElement.classList.toggle('show');
})

// const openButton = document.querySelector('.openBtn');
// const menu = document.querySelector(".navList");
// const closeButton = menu.querySelector(".closeBtn");

// openButton.addEventListener("click", function() {
//   if (menu.style.display === "none") {
//     menu.style.display = "block";
//   } else {
//     menu.style.display = "none";
//   }
// });

// closeButton.addEventListener("click", function() {
//     if (menu.style.display === "block") {
//         menu.style.display = "none";
//     } else {
//         menu.style.display = "none";
//     }
// });

// for (let i = 0; i < closeButton.length; i++) {
//     closeButton[i].addEventListener("click", function() {
//     menu.style.display = "none";
//   });
// }

// const openMenu = document.querySelector(".openBtn");
// const menu = document.querySelector(".navList");
// const closeMenu = document.querySelector(".closeBtn");

// openMenu.addEventListener("click", () => {
//   menu.classList.toggle("show");
//   closeMenu.style.display = "block";
//   openMenu.style.display = "none";
// });

// closeMenu.addEventListener("click", () => {
//   closeMenu.style.display = "none";
//   openMenu.style.display = "block";
//   menu.classList.toggle("show");
// });

// const openMenu = document.querySelector(".openBtn");
// const menu = document.querySelector(".navList");
// const closeMenu = document.querySelector(".closeBtn");

// openMenu.addEventListener('click', function () {
//     menu.parentElement.classList.toggle('show');

//     if (openMenu.style.display = "block") {
//         closeMenu.style.display = "none";
//     } else {
//         openMenu.style.display = "block";
//     }
// })