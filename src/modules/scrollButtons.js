const scrollButtons = () => {
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
};

export default scrollButtons;