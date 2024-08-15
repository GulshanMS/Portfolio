const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = Array.from(carouselTrack.children);
const prevButton = document.querySelector('.carousel-btn.left');
const nextButton = document.querySelector('.carousel-btn.right');
const itemWidth = carouselItems[0].getBoundingClientRect().width;

let currentIndex = 0;

function updateCarousel() {
    const offset = -itemWidth * currentIndex;
    carouselTrack.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

// Initialize carousel position
updateCarousel();
