import style from './main.scss';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill(); //use polyfill if scroll behavior is not supported
document.addEventListener('DOMContentLoaded', () => {
  const circle = document.querySelector('.circle');
  let isScrolledToBottom = () =>
    window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
  circle.addEventListener('click', () => {
    //scroll to top if page scrolled to bottom, else scroll to next section
    if (isScrolledToBottom()) {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    } else {
      const positions = [
        document.querySelector('.sec3'),
        document.querySelector('.sec4'),
        document.querySelector('.sec5'),
      ];
      for (let i = 0; i < positions.length; i++) {
        if (
          positions[i].offsetTop >
          (document.documentElement.scrollTop || document.body.scrollTop)
        ) {
          window.scrollTo({
            left: 0,
            top: positions[i].offsetTop,
            behavior: 'smooth',
          });
          break;
        }
      }
    }
  });

  document.addEventListener('scroll', () => {
    //rotate circle arrow if scrolled to bottom
    if (isScrolledToBottom()) {
      circle.style.transform = 'rotate(180deg)';
    } else {
      circle.style.transform = null;
    }
  });
});
