'use strict';

console.log('arr' + ' - object'); //arr - obj
console.log(4 + ' - object'); //4obj
console.log(4 + +' - object'); //NaN
console.log(4 + +'5'); //9

let incr = 10,
    decr = 10;

// incr++;
// decr--;
// console.log(incr, decr);
console.log(++incr, --decr);

console.log(5%2);
console.log(2*4 ===8);
console.log(2+2*4 !=8);

const isChecked = true,
      isClose = false;
console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(!isClose);