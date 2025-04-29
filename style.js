// Preloader
window.onload = () => {
document.getElementById('preloader').style.display = 'none';
};

// AOS Init
AOS.init();

// Toggle Dark/Light
function toggleMode() {
document.body.classList.toggle("light-mode");
}

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
loop: true,
autoplay: {
delay: 3000,
},
pagination: {
el: ".swiper-pagination",
clickable: true,
},
});
