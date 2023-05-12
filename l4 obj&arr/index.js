'use strict';

const arr = ['a', 'b', 'c'];
const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
}
console.log(arr[2]);
console.log(arrObj[0]);

arrObj.b = '1234';
console.log(arrObj.b);
console.log(arrObj['b']);

// const obj = {a:1, b:2};
const obj = {
    'Anna': 500,
    'Alice': 700,
};
// console.log();

const storeName = 'Just Store';
const storeDescription = {
    budget: 10000,
    employees: ['V', 'O', 'A'],
    products: {
        lenovo: 19000,
        mac: 43000,
    },
    open: true,
};
