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

	document.body.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.header-logo')) {
			pageYOffset = 0;
		}
  });
  
});