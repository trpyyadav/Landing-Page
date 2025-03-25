let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider-1');
  const slides = document.querySelectorAll('.slide');
  const slider_2 = document.querySelector('.slider-2');
  const slides_2 = document.querySelectorAll('.slide-2');
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth + 20; // Including margin
  const totalSlides_2 = slides_2.length;
  const slideWidth_2 = slides_2[0].offsetWidth + 20;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const translateX = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${translateX}px)`;
  slider_2.style.transform = `translateX(${translateX}px)`;
}
