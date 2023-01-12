import {add,halfOf} from './lib.js';
console.log('------------------------------------------------------------');
console.log('Export functions')

console.log(add(10,2500));
console.log(halfOf(1000));

import doSomething from './doSomething.js';
console.log('------------------------------------------------------------');
console.log('Export default');

console.log(doSomething());

import {flag, touch} from './validator.js';
console.log('------------------------------------------------------------');
console.log('Export live bindings');
console.log(flag);
touch();
console.log(flag);

import {Car, Vehicle} from './vehicle.js';
console.log('------------------------------------------------------------');
console.log('Classes')
let car = new Car('blue');
console.log(car.toString());

console.log(car instanceof Car);
console.log(car instanceof Vehicle);

import { squares} from './arrow_function.js';
console.log('------------------------------------------------------------');
console.log('Arrow functions');

const array1 = [1,2,3,4];
let squaredArray1 = array1.map(squares);
console.log(squaredArray1);
let evens = [];
array1.forEach(n=>{
    if (n%2 === 0) {
        evens.push(n);
    }
})
console.log(evens);