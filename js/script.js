// CAROUSEL SCRIPT
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const carouselSlides = document.querySelector(".carousel-slides");
let index = 0;

function showSlide(i) {
    index = i;
    document.querySelector(".carousel-slides").style.transform =
        `translateX(-${i * 100}%)`;

    slides.forEach((slide, n) => slide.classList.toggle("active", n === i));
    dots.forEach((dot, n) => dot.classList.toggle("active", n === i));
}

// BUTTONS
document.querySelector(".prev").addEventListener("click", () => {
    index = (index === 0) ? slides.length - 1 : index - 1;
    showSlide(index);
});

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

// DOTS
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        showSlide(parseInt(dot.dataset.slide));
    });
});

// AUTO CHANGE EVERY 5s
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000);

showSlide(0);