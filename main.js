import './assets/scss/all.scss';

//import * as bootstrap from 'bootstrap'
import { Collapse } from 'bootstrap';

document.addEventListener('click', function(e) {
  const target = e.target;
  if (target.matches('a[href="#"]') || target.parentElement.matches('a[href="#"]')) {
    e.preventDefault();
  }
});

document.addEventListener('submit', function(e) {
  e.preventDefault();
});
