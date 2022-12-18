const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

menuBtn.addEventListener ("click", () => {
    menu.classList.add ("show");
    body.classList.add ("overflow");
})

closeBtn.addEventListener ("click", () => {
    menu.classList.remove ("show");
    body.classList.remove ("overflow");
})