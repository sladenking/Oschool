//ProgressBar
const progressBar = () => {
  const progress = document.querySelector('.progress');

  const progressFunc = () => {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScroll / windowHeight * 100;
    progress.style.width = percent + '%';
    progress.style.zIndex = '5';
    progress.style.background = '#f7831e';
  };

  window.addEventListener('scroll', () => {
    progressFunc();
  });
};

export default progressBar;
