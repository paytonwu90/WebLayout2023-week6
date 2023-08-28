import 'swiper/css/bundle';
import './assets/scss/all.scss';

//import * as bootstrap from 'bootstrap'
import { Collapse } from 'bootstrap';
import Swiper from 'swiper/bundle';

document.addEventListener('click', function(e) {
  const target = e.target;
  if (target.matches('a[href="#"]') || target.parentElement.matches('a[href="#"]')) {
    e.preventDefault();
  }
});

document.addEventListener('submit', function(e) {
  e.preventDefault();
});

const swiper = new Swiper('.runningSticker', {
  allowTouchMove: false,
  slidesPerView: 'auto',
  speed: 50000,
  loop: true,
  
  autoplay: {
    delay: 0,    
    disableOnInteraction: false
  }
});
