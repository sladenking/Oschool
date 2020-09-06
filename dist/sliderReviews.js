const sliderReviewsSubjects = () => {
  const slide = document.querySelectorAll('.revs-slider__item'),
    dots = document.querySelector('.revs-slider__dots'),
    slider = document.querySelector('.revs-wrapper');
    
  for (let i = 0; i < slide.length; i++) {
    dots.insertAdjacentHTML('beforeend',
      `<li class="dot-revs ${i === 0 ? 'dot-revs-active' : ''}"></li>`);
  }

  const dot = document.querySelectorAll('.dot-revs');

  let currentSlide = 0, interval;

  const prevSlide = (elem, i, strClass) => {
    elem[i].classList.remove(strClass);
  };

  const nextSlide = (elem, i, strClass) => {
    elem[i].classList.add(strClass);
  };
  
  const autoPlaySlide = () => {

    prevSlide(slide, currentSlide, 'revs-active-slide');
    prevSlide(dot, currentSlide, 'dot-revs-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'revs-active-slide');
    nextSlide(dot, currentSlide, 'dot-revs-active');

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

    if (!target.matches('.dot-revs')) {
      return;
    }

    prevSlide(slide, currentSlide, 'revs-active-slide');
    prevSlide(dot, currentSlide, 'dot-revs-active');

    if (target.matches('.dot-revs')) {
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
    
    nextSlide(slide, currentSlide, 'revs-active-slide');
    nextSlide(dot, currentSlide, 'dot-revs-active');

  });
  
  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.revs-slider__img') ||
    event.target.matches('.dot-revs')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.revs-slider__img') ||
    event.target.matches('.dot-revs')) {
      startSlide();
    }
  });

  startSlide();
}

sliderReviewsSubjects();