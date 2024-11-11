$(".box") .click (function () {
    $ (".box") .removeClass ("active");
    $ (this) .addClass ("active");
});


$(window).scroll(function() {

    if ($(this).scrollTop() > 190){  
        $('#nav').addClass("fixed");
    }
    else{
        $('#nav').removeClass("fixed");
    }
});

/* Feature Slider*/
const wrapper = document.querySelector('.blog-slider__wrp');
const bullets = document.querySelectorAll('.bullet');
const items = document.querySelectorAll('.blog-slider__item');
let currentSlide = 0;
let isTransitioning = false; // Prevents multiple transitions at once

// Event listeners for navigation buttons
document.querySelector('.next').addEventListener('click', () => {
  changeSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  changeSlide(currentSlide - 1);
});

// Event listener for pagination bullets
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    changeSlide(index);
  });
});

// Handle scroll event for slide change
document.querySelector('.blog-slider').addEventListener('wheel', (event) => {
  if (isTransitioning) return;
  if (event.deltaY > 0) {
    changeSlide(currentSlide + 1);
  } else {
    changeSlide(currentSlide - 1);
  }
});

function changeSlide(newSlide) {
  // Wrap around slides
  if (newSlide >= items.length) {
    newSlide = 0;
  } else if (newSlide < 0) {
    newSlide = items.length - 1;
  }

  // Start transition
  isTransitioning = true;
  wrapper.style.transform = `translateX(-${newSlide * 100}%)`;

  // Update pagination bullets
  bullets.forEach((bullet, index) => {
    bullet.classList.toggle('active', index === newSlide);
  });

  currentSlide = newSlide;
  setTimeout(() => {
    isTransitioning = false; // Reset transition flag after animation
  }, 600); // Match with CSS transition duration
}
