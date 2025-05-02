function sendEmail() {
  alert("Email sent!");
  document.getElementById("reset").reset();
}

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const visibleSlides = 4; // Change based on how many you want visible
const totalSlides = slides.length;

function updateSliderPosition() {
  const slideWidth = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex < totalSlides - visibleSlides) {
    currentIndex++;
    updateSliderPosition();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Swipe Support
let touchStartX = 0;
let touchEndX = 0;

const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

sliderContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}, false);

function handleSwipeGesture() {
  const swipeDistance = touchEndX - touchStartX;
  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance < 0) nextSlide();
    else prevSlide();
  }
}

// toggle responsive navigation menu

const hamburger = document.getElementById('.hamburger');
const navMenu = document.getElementById('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
})
