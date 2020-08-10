const modalPhone = () => {
  const btn = document.querySelector('.header-link__phone'),
  tel = document.querySelector('.header-tel'),
  close = document.querySelector('.header-tel__close');

  const coordBtn = btn.getBoundingClientRect(),
    coordTel = tel.getBoundingClientRect();
  const showPhone = () => {
    tel.style.left = coordBtn.x + coordBtn.width - coordTel.width + 'px';
    tel.style.opacity = '1';
  };

  if (window.innerWidth > 1025) {
    btn.addEventListener('click', () => {
      showPhone();
    });

    close.addEventListener('click', () => {
      tel.style.opacity = '0';
    });
  } else {
    btn.setAttribute('href', "tel:+380983536684");
  };
};

export default modalPhone;