window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.querySelector('.navbar').classList.add('scrolled');
  } else {
    document.querySelector('.navbar').classList.remove('scrolled');
  }
});

// makes the image Pop Out
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Carousel popout
doument.addEventListener('DOMContentLoaded');

window.addEventListener('load', () => {
  const carousel = document.getElementById('projectCarousel');
  carousel.style.opacity = '0'; // Initially hides the carousel

  setTimeout(() => {
    carousel.style.transition = 'opacity 0.5s ease, transform 1s ease'; // Adds a transition for opacity
    carousel.style.opacity = '1'; // Fades in the carousel
    carousel.style.transform = 'translateZ(20px)'; // Apply's the initial pop-out transform
  }, 500); // Adjusts the delay (in milliseconds) as needed
});
