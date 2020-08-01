'use strict'

document.addEventListener('DOMContentLoaded', () => {

  //ScrollWindow
  const header = document.querySelector('.header'),
    main = document.querySelector('.main');

  window.addEventListener('scroll', function() {
    main.style.opacity = 1 + pageYOffset/(-700);
    if (pageYOffset > 100) {
      header.style.background = '#fff';
      header.style.height = '60px';
    } else {
      header.style.background = '';
      header.style.height = '';
    }
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
		const btnScrolling = document.querySelector('a[href="#info"]');
		btnScrolling.addEventListener('click', event => {
			event.preventDefault();
			scroll(btnScrolling);
		});
  };
  
  scrollHead();

	document.body.addEventListener('click', event => {
    const target = event.target;
    console.log(target);
    if (target.closest('.header-logo')) {
			scroll(target);
		}
	});
});