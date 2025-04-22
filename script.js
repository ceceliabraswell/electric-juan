function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";

  const homeResponsive = document.querySelector(".homeResponsive");
  homeResponsive.style.display = "flex";
}

function hideSidebar() {
  const hideSidebar = document.querySelector(".sidebar");
  hideSidebar.style.display = "none";

  const homeResponsive = document.querySelector(".homeResponsive");
  homeResponsive.style.display = "none";
}

function sendEmail() {
  alert("Email sent!");
  document.getElementById("reset").reset();
}

// JavaScript for gallery slider
// const initSlider = () => {
//   const imageList = document.querySelector(".slider-wrapper .image-list");
//   const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
//   const sliderScrollbar = document.querySelector(".gallery-container .slider-scrollbar");
//   const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
//   const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;


//   slideButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const direction = button.id === "prev-slide" ? -1 : 1;
//       const scrollAmount = imageList.clientWidth * direction;
//       imageList.scrollBy({ left: scrollAmount});
//     });
//   });

//   const handleSlideButtons = () => {
//     slideButtons[0].style.display =
//       imageList.scrollLeft <= 0 ? "none" : "block";
//     slideButtons[1].style.display =
//       imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
//   };

//   const updateScrollThumbPosition = () => {
//     const scrollPostion = imageList.scrollLeft;
//     const thumbPosition = (scrollPostion / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
//     scrollbarThumb.style.left = `${thumbPosition}px`;
//   };

//   imageList.addEventListener("scroll", () => {
//     handleSlideButtons();
//     updateScrollThumbPosition();
//   });
// };

// window.addEventListener("load", initSlider);

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