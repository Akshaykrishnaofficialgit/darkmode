const click1 = document.querySelector(".btn");
const container = document.querySelector(".container");
const fence = document.querySelector(".fence");
const textt=document.querySelector(".divtwo")

click1.addEventListener('click', function() {
    container.classList.toggle("animation");
    fence.classList.toggle("animation1");
    click1.classList.toggle("animation2");
    textt.classList.toggle("divtwoanimation")
    
});
