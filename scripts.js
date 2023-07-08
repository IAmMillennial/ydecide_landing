const carousel = document.querySelector('.carousel-inner');
let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carousel.children.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

setInterval(nextSlide, 7000);
