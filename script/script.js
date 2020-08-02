'use strict'

document.addEventListener('DOMContentLoaded', () => {

  //ScrollWindow
  const header = document.querySelector('.header'),
    main = document.querySelector('.main');

  const scrollWindow = () => {
    main.style.opacity = 1 + pageYOffset/(-700);
    if (pageYOffset > 100) {
      header.style.background = '#fff';
      header.style.height = '60px';
    } else {
      header.style.background = '';
      header.style.height = '';
    }
  };

  //ProgressBar
  const progress = document.querySelector('.progress');

  const progressBar = event => {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScroll / windowHeight * 100;
    progress.style.width = percent + '%';
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

	// document.body.addEventListener('click', event => {
  //   const target = event.target;
  //   if (target.closest('.header-logo')) {
	// 		window.scrollTo(pageXOffset, 0);
	// 	}
  // });

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
            items: wrapper.querySelectorAll('.teachers-slider__item')
        };

        this.buttons = {
            prev: document.querySelector('.btn-prev'),
            next: document.querySelector('.btn-next'),
        };

        const itemWidth = this.elements.container.clientWidth / config.slidesToShow
        this.movePosition = config.slidesToScroll * itemWidth;
        this.maxPosition = -(this.elements.items.length * itemWidth - config.slidesToShow * itemWidth);
        this.elements.items.forEach((item) => item.style.minWidth = `${itemWidth}px`);
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
        this.buttons.prev.style.background = '#fff';
      }
      if (this.position <= this.maxPosition) {
        this.buttons.next.style.background = 'rgba(0,0,0,.2)';
      } else {
        this.buttons.next.style.background = '#fff';
      }
    }
  }

  new Slider(document.querySelector('.teachers-slider'), {
    slidesToShow: 3,
    slidesToScroll: 1
  });
  
});