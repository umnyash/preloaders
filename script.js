'use strict';

const loaderJsSpan1 = document.querySelector('.loader-js__span-1');

let timerId1 = setTimeout(function moveLoaderJsSpan1() {
  console.log('fdf');
  loaderJsSpan1.classList.toggle('loader-js__span-1--position-2');
  timerId1 = setTimeout(moveLoaderJsSpan1, 1000);
}, 1000);

const loaderJsSpan2 = document.querySelector('.loader-js__span-2');
let leftPos = 0;
let direction = 0;

let timerId2 = setTimeout(function moveLoaderJsSpan2() {
  if (leftPos >= 100) {
    direction = 1;
  } else if (leftPos <= 0) {
     direction = 0;
  }
  
  if (direction === 0) {
    leftPos ++;
  }
  if (direction === 1) {
    leftPos --;
  }

  loaderJsSpan2.style.left = leftPos + '%';
  timerId2 = setTimeout(moveLoaderJsSpan2, 5);
}, 5);
