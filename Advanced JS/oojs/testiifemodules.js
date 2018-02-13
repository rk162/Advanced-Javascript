// require js which uses AMD (Asynchronous Module Definition)
// const iife=require('./moduleA/testmodA');

// ES 2015 way of importing modules

import iife from './moduleA/testmodAes2015'

console.log(iife.methodA().getDay())
console.log(iife.methodB().getMonth());