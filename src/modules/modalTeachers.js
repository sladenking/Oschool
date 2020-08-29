const modalTeachers = () => {
  
  const popup = document.querySelector('.popup'),
    popupContent = popup.querySelector('.popup-content'),
    teacher = popup.querySelector('.popup-teacher'),
    subject = popup.querySelector('.popup-subject'),
    inputTeacher = popup.querySelector('.teacher-input'),
    inputSubject = popup.querySelector('.subject-input');

  let flyInterval, count = -40, animateStart = true;

  const startAnimate = () => {
    if (document.documentElement.clientWidth < 768) {
      popup.style.display = 'flex';
      popupContent.style.top = '10%';
      return;
    }

    flyInterval = requestAnimationFrame(startAnimate);
    count++;

    if (count < 10) {
      popupContent.style.top = count * 1.5 + '%';
      popup.style.display = 'flex';
    } else {
      count = -40;
      cancelAnimationFrame(flyInterval);
    }
  };

  document.body.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('teachers-btn')) {
      document.body.style.overflow = 'hidden';

      if (!animateStart) {
        cancelAnimationFrame(flyInterval);
        animateStart = false;
      } else {
        flyInterval = requestAnimationFrame(startAnimate);
        animateStart = true;
      }

      if (target.classList.contains('yaroslava-btn')) {
        teacher.textContent = 'Ярославе';
        subject.textContent = 'математики';
        inputTeacher.value = 'Ярослава';
        inputSubject.value = 'Математика';
      } else if (target.classList.contains('alina-btn')) {
        teacher.textContent = 'Алине';
        subject.textContent = 'украинского языка или литературы';
        inputTeacher.value = 'Алина';
        inputSubject.value = 'Украинский язык или литература';
      } else if (target.classList.contains('irina-btn')) {
        teacher.textContent = 'Ирине';
        subject.textContent = 'химии';
        inputTeacher.value = 'Ирина';
        inputSubject.value = 'Химия';
      } else if (target.classList.contains('diana-btn')) {
        teacher.textContent = 'Диане';
        subject.textContent = 'английского языка';
        inputTeacher.value = 'Диана';
        inputSubject.value = 'Английский язык';
      } else if (target.classList.contains('daria-btn')) {
        teacher.textContent = 'Дарье';
        subject.textContent = 'биологии';
        inputTeacher.value = 'Дарья';
        inputSubject.value = 'Биология';
      } else if (target.classList.contains('irina-ukr-btn')) {
        teacher.textContent = 'Ирине';
        subject.textContent = 'украинского языка';
        inputTeacher.value = 'Ирина';
        inputSubject.value = 'Украинский язык';
      } 
      
    }

    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
      document.body.style.overflow = 'visible';
    } else {
      target = target.closest('.popup-content');

      if (!target) {
        popup.style.display = 'none';
        document.body.style.overflow = 'visible';
      }
    }
  });

};

export default modalTeachers;