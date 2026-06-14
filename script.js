
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
ham.addEventListener('click', ()=>{
    nav.classList.toggle('rudra');
});









//scrolling animation

window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');

    if(window.scrollY >50){
           nav.classList.add('scrolled');

    }else{
        nav.classList.remove('scrolled');
    }
})




//testimonail
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls (if you click the dots)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("testimonail-slide");
    const dots = document.getElementsByClassName("dot");

    // BUG FIX 1: Reset to first slide if n goes beyond total slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // BUG FIX 2: Go to last slide if n goes below 1
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides by removing the active class
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Deactivate all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // BUG FIX 3: Always use the updated slideIndex to display the correct slide
    if (slides.length > 0) {
        slides[slideIndex - 1].classList.add("active");
    }
    if (dots.length > 0) {
        dots[slideIndex - 1].classList.add("active");
    }
}

// Event Listeners
document.querySelector('.pre').addEventListener('click', () => plusSlide(-1));
document.querySelector('.next').addEventListener('click', () => plusSlide(1));

document.querySelectorAll('.dot').forEach((dot,  index) =>{
    dot.addEventListener('click', () => currentSlide(index + 1));
});















































// const logo = document.querySelector(".logo");

// const colors = [
//     "red",
//     "orange",
//     "yellow",
//     "White",
//     "blue",
//     "aqua",
//     "violet"
// ];

// let index = 0;

// setInterval(() => {
//     logo.style.color = colors[index];
//     index = (index + 1) % colors.length;
// }, 1000); // Changes color every 1 second



// document.addEventListener("DOMContentLoaded", () => {
//   const text = "Modern Interior Design Studio";
//   const element = document.getElementById("change");

//   let index = 0;

//   function typeEffect() {
//     if (index < text.length) {
//       element.textContent += text.charAt(index);
//       index++;
//       setTimeout(typeEffect, 100);
//     }
//   }

//   typeEffect();
// });


