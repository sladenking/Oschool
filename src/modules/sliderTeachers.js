// class Slider {

//   constructor(wrapper, config) {
//     this.position = 0;

//     this.elements = {
//         container: wrapper.querySelector('.teachers-slider__container'),
//         track: wrapper.querySelector('.teachers-slider__track'),
//         items: wrapper.querySelectorAll('.teachers-slider__item'),
//         blocks: document.querySelectorAll('.teachers-slider__item')
//     };

//     this.buttons = {
//         prev: document.querySelector('.btn-prev'),
//         next: document.querySelector('.btn-next'),
//     };


//     this.itemWidth = this.elements.container.clientWidth / config.slidesToShow;
//     this.movePosition = config.slidesToScroll * this.itemWidth;
//     this.maxPosition = -(this.elements.items.length * this.itemWidth - config.slidesToShow * this.itemWidth);
//     this.elements.items.forEach((item) => item.style.minWidth = `${this.itemWidth}px`);
//     this.elements.blocks.forEach((item) => item.style.maxHeight = `${this.itemWidth}px`);
//     this.elements.track.style.maxWidth = this.itemWidth;
//     this.buttons.prev.addEventListener('click', () => this.handlePrevClick());
//     this.buttons.next.addEventListener('click', () => this.handleNextClick());
//     this.checkBtns();
//   }

//   handlePrevClick() {
//     this.position += this.movePosition;
//     if(this.position > 0) {
//         this.position = 0;
//     }
//     this.setPosition();
//     this.checkBtns();
//   }

//   handleNextClick() {
//     this.position -= this.movePosition;
//     if(this.position < this.maxPosition) {
//         this.position = this.maxPosition;
//     }
//     this.setPosition();
//     this.checkBtns();
//   }

//   setPosition() {
//     this.elements.track.style.transform = `translateX(${this.position}px)`;
//   }

//   checkBtns() {  
//     if (this.position === 0) {
//       this.buttons.prev.style.background = 'rgba(0,0,0,.2)';
//     } else {
//       this.buttons.prev.style.background = '#00a99d';
//     }
//     if (this.position <= this.maxPosition) {
//       this.buttons.next.style.background = 'rgba(0,0,0,.2)';
//     } else {
//       this.buttons.next.style.background = '#00a99d';
//     }
//   }
// };

// const sliderTeachers = () => {
//   if (window.innerWidth > 1025) {
//     new Slider(document.querySelector('.teachers-slider'), {
//       slidesToShow: 3,
//       slidesToScroll: 1
//     });
//   }
  
//   if (window.innerWidth < 1025) {
//     new Slider(document.querySelector('.teachers-slider'), {
//       slidesToShow: 2,
//       slidesToScroll: 1
//     });
//   }
//   if (window.innerWidth < 700) {
//     new Slider(document.querySelector('.teachers-slider'), {
//       slidesToShow: 1,
//       slidesToScroll: 1
//     });
//   }
// };

// export default sliderTeachers;

const sliderTeachers = () => {
  const slide = document.querySelectorAll('.teachers-slider__item'),
    dots = document.querySelector('.teachers-slider__dots'),
    slider = document.querySelector('.teachers-wrapper');
    
  for (let i = 0; i < slide.length; i++) {
    dots.insertAdjacentHTML('beforeend',
      `<li class="dot-teachers ${i === 0 ? 'dot-teachers-active' : ''}"></li>`);
  }

  const dot = document.querySelectorAll('.dot-teachers');

  let currentSlide = 0, interval;

  const prevSlide = (elem, i, strClass) => {
    elem[i].classList.remove(strClass);
  };

  const nextSlide = (elem, i, strClass) => {
    elem[i].classList.add(strClass);
  };
  
  const autoPlaySlide = () => {

    prevSlide(slide, currentSlide, 'teachers-active-slide');
    prevSlide(dot, currentSlide, 'dot-teachers-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'teachers-active-slide');
    nextSlide(dot, currentSlide, 'dot-teachers-active');

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

    if (!target.matches('.dot-teachers')) {
      return;
    }

    prevSlide(slide, currentSlide, 'teachers-active-slide');
    prevSlide(dot, currentSlide, 'dot-teachers-active');

    if (target.matches('.dot-teachers')) {
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
    
    nextSlide(slide, currentSlide, 'teachers-active-slide');
    nextSlide(dot, currentSlide, 'dot-teachers-active');

  });
  
  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.reviews-slider__img') ||
    event.target.matches('.dot-teachers')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.reviews-slider__img') ||
    event.target.matches('.dot-teachers')) {
      startSlide();
    }
  });

  startSlide();
}

export default sliderTeachers;