'use strict'

document.addEventListener('DOMContentLoaded', () => {

  //ScrollWindow
  const header = document.querySelector('.header'),
    main = document.querySelector('.main');

  const scrollWindow = () => {
    main.style.opacity = 1 + pageYOffset/(-700);
    if (pageYOffset > 50) {
      header.style.background = '#fff';
      header.style.height = '60px';
      header.style.zIndex = '5';
    } else {
      header.style.background = 'transparent';
      header.style.height = '80px';
    }
  };

  //ProgressBar
  const progress = document.querySelector('.progress');

  const progressBar = () => {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScroll / windowHeight * 100;
    progress.style.width = percent + '%';
    progress.style.zIndex = '5';
    progress.style.background = '#f7831e';
  };

  window.addEventListener('scroll', () => {
    scrollWindow();
    progressBar();
  });


	//ScrollBtns
	const scroll = elem => {
		event.preventDefault();
		const link = elem.href.split('#')[1];
		document.querySelector('#' + link).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'center'
		});
  };
  
  const scrollHead = () => {
		const btnScrolling = document.querySelector('a[href="#about"]');
		btnScrolling.addEventListener('click', event => {
			event.preventDefault();
			scroll(btnScrolling);
		});
  };
  
  scrollHead();

	document.body.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.header-logo') || target.closest('.footer-scroll__link')) {
      scroll(target)
		}
  });

  //Slider
  class Slider {
    elements;
    buttons;
    position = 0;
    movePosition;
    maxPosition;

    constructor(wrapper, config) {
        this.elements = {
            container: wrapper.querySelector('.teachers-slider__container'),
            track: wrapper.querySelector('.teachers-slider__track'),
            items: wrapper.querySelectorAll('.teachers-slider__item'),
            blocks: document.querySelectorAll('.teachers-slider__item')
        };

        this.buttons = {
            prev: document.querySelector('.btn-prev'),
            next: document.querySelector('.btn-next'),
        };


        this.itemWidth = this.elements.container.clientWidth / config.slidesToShow
        // this.customTrack(config.slidesToShow);
        this.movePosition = config.slidesToScroll * this.itemWidth;
        this.maxPosition = -(this.elements.items.length * this.itemWidth - config.slidesToShow * this.itemWidth);
        this.elements.items.forEach((item) => item.style.minWidth = `${this.itemWidth}px`);
        this.elements.blocks.forEach((item) => item.style.maxHeight = `${this.itemWidth}px`);
        this.elements.track.style.maxWidth = this.itemWidth;
        this.buttons.prev.addEventListener('click', () => this.handlePrevClick());
        this.buttons.next.addEventListener('click', () => this.handleNextClick());
        this.checkBtns();
    }

    handlePrevClick() {
        this.position += this.movePosition;
        if(this.position > 0) {
            this.position = 0;
        }
        this.setPosition();
        this.checkBtns();
    }

    customTrack(slidesToShow) {
      console.log(this.itemWidth);
      this.elements.container.style.width = this.itemWidth * slidesToShow
    }

    handleNextClick() {
        this.position -= this.movePosition;
        if(this.position < this.maxPosition) {
            this.position = this.maxPosition;
        }
        this.setPosition();
        this.checkBtns();
    }

    setPosition() {
        this.elements.track.style.transform = `translateX(${this.position}px)`
    }

    checkBtns() {  
      if (this.position === 0) {
        this.buttons.prev.style.background = 'rgba(0,0,0,.2)';
      } else {
        this.buttons.prev.style.background = '#00a99d';
      }
      if (this.position <= this.maxPosition) {
        this.buttons.next.style.background = 'rgba(0,0,0,.2)';
      } else {
        this.buttons.next.style.background = '#00a99d';
      }
    }
  }

  new Slider(document.querySelector('.teachers-slider'), {
    slidesToShow: 3,
    slidesToScroll: 1
  });

  if (window.innerWidth < 1025) {
    new Slider(document.querySelector('.teachers-slider'), {
      slidesToShow: 2,
      slidesToScroll: 1
    });
  }
  if (window.innerWidth < 700) {
    new Slider(document.querySelector('.teachers-slider'), {
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  //Slider
	const slider = () => {
    const slide = document.querySelectorAll('.reviews-slider__item'),
      dots = document.querySelector('.reviews-slider__dots'),
      slider = document.querySelector('.reviews-slider__container');
      
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

		slider.addEventListener('click', event => {
			event.preventDefault();

      const target = event.target;

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			} else if (currentSlide < 0) {
				currentSlide = slide.length - 1;
      }
      
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

		});

		startSlide();
	}

  slider();
  
  const accord = () => {
    const slidesInDown = document.querySelector('.questions-container'),
      slidesHead = slidesInDown.querySelectorAll('.questions-item__question'),
      slidesBody = slidesInDown.querySelectorAll('.questions-item__answer');
  
    const toggleSlides = index => {
      for (let i = 0; i < slidesBody.length; i++) {
        if (index === i) {
          slidesBody[i].classList.add('active-answer');
        } else {
          slidesBody[i].classList.remove('active-answer');
        }
      }
    };

    const toggleHeads = index => {
      for (let i = 0; i < slidesHead.length; i++) {
        if (index === i) {
          slidesHead[i].classList.add('active-question');
        } else {
          slidesHead[i].classList.remove('active-question');
        }
      }
    };
  
  
    slidesInDown.addEventListener('click', event => {
      event.preventDefault();
      let target = event.target;
      target = target.closest('.questions-item__question');
  
  
      if (target) {
        slidesHead.forEach((item, i) => {
          if (item === target) {
            toggleSlides(i);
            toggleHeads(i);
          }
        });
      }
    });
  };

  accord();
  
});