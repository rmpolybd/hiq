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

/* product Slider*/document.querySelectorAll('.best-slider-container').forEach((sliderContainer, index) => {
  let currentIndex = 0;
  const slides = sliderContainer.querySelectorAll('.best-slide');
  const dots = sliderContainer.querySelectorAll('.best-dot');
  const totalSlides = slides.length;
  
  function updateSlider() {
    const slider = sliderContainer.querySelector('.best-slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Event listeners for navigation
  sliderContainer.querySelector('.best-right').addEventListener('click', nextSlide);
  sliderContainer.querySelector('.best-left').addEventListener('click', prevSlide);

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });

  // Initialize the slider
  updateSlider();
});
