const sliderReviews = () => {
  const slide = document.querySelectorAll('.reviews-slider__item'),
    dots = document.querySelector('.reviews-slider__dots'),
    slider = document.querySelector('.reviews-wrapper');
    
  for (let i = 0; i < slide.length; i++) {
    dots.insertAdjacentHTML('beforeend',
      `<li class="dot ${i === 0 ? 'dot-active' : ''}"></li>`);
  }

  const dot = document.querySelectorAll('.dot');

  let currentSlide = 0, interval;

  const prevSlide = (elem, i, strClass) => {
    elem[i].classList.remove(strClass);
  };

  const nextSlide = (elem, i, strClass) => {
    elem[i].classList.add(strClass);
  };
  
  const autoPlaySlide = () => {

    prevSlide(slide, currentSlide, 'active-slide');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'active-slide');
    nextSlide(dot, currentSlide, 'dot-active');

  };

  const startSlide = (time = 5000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  
  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.dot')) {
      return;
    }

    prevSlide(slide, currentSlide, 'active-slide');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('.dot')) {
      dot.forEach((elem, i) => {
        if (elem === target) {
          currentSlide = i;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    
    nextSlide(slide, currentSlide, 'active-slide');
    nextSlide(dot, currentSlide, 'dot-active');

  });
  
  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.reviews-slider__img') ||
    event.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.reviews-slider__img') ||
    event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide();
}

export default sliderReviews;