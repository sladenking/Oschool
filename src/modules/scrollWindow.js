//ScrollWindow
const scrollWindow = () => {
  const header = document.querySelector('.header'),
    main = document.querySelector('.main');

  const scroll = () => {
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

  document.addEventListener('scroll', () => {
    scroll();
  });

};

export default scrollWindow;