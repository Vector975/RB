'use strict';

let number = 5;

console.log(4/0); // infinity
console.log('str' * 9); // NaN

const person = 'Alex';

const bool = true;

// console.log(something); // null

let und;
console.log(und); // undefined

const obj = {
    name: 'John',
    age: 25,
    isMaried: false,
}
console.log(obj.name);
// console.log(obj['name']);

const arr = ['plum.png', 7, 'orange.jpeg', {}, 'apple.bmp'];
console.log(arr[2]);