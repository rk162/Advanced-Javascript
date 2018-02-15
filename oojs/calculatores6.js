class Calculator {

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

class ScientificCalculator extends Calculator {
    constructor(val) {
        super(val)
    }
    sin(newVal) {
        return Math.sin(newVal);
    }
    cosine(newVal) {
        return Math.cos(newVal);
    }
}

let calc = new ScientificCalculator(10);
calc.add(10);
calc.subtract(5);
calc.multiply(20);
console.log(calc.getTotal());
console.log(calc.sin(45));
console.log(calc instanceof Calculator);
console.log(typeof Calculator);
console.log(typeof ScientificCalculator);
console.log(typeof calc);
console.log(calc instanceof Object);