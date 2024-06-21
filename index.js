const nav=document.getElementById("click");
function on(){
    nav.style.left="0";
}
function off(){
    nav.style.left="-100%";
}
var swiper = new Swiper(".mySwiper", {
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
 },
});