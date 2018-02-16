export default class Actor {
    //instance variables
    constructor(age, height, name) {
        this.age = age;
        this.height = height;
        this.name = name;
    }

    //instance methods
    dance() {
        console.log("Actor " + this.name + " is dancing")
    }

    act() {
        console.log("Actor " + this.name + " is acting")
    }
}
export  class Calculator {

    constructor(val) {
        this.total = val;
    }
    add(newVal) {
        this.total += newVal;
    }
    subtract(newVal) {
        this.total -= newVal;
    }
    multiply(newVal) {
        this.total *= newVal;
    }
    getTotal() {
        return this.total;
    }
}
export class Sum {
    constructor(){
        console.log('Sum')
    }
}
