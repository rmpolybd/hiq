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

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % items.length;
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + items.length) % items.length;
  updateSlider();
});

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

function updateSlider() {
  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  bullets.forEach((bullet, index) => {
    bullet.classList.toggle('active', index === currentSlide);
  });
}

updateSlider();
