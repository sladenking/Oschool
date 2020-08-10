//Accordeon
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

export default accord;