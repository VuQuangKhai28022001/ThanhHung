// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener('click', ()=>{  
    menu.classList.toggle("navbar__open");  // Khi nhấn vào menuButton thì menu sẽ hiện ra
    menuButton.classList.toggle("open");  // Khi nhấn vào menuButton thì nút cancel (x) sẽ hiện ra
    overlay.classList.toggle("show");
})

overlay.addEventListener('click', ()=> {
    menu.classList.toggle("navbar__open");  // Khi nhấn vào menuButton thì menu sẽ hiện ra
    menuButton.classList.toggle("open");  // Khi nhấn vào menuButton thì nút cancel (x) sẽ hiện ra
    overlay.classList.toggle("show");
})