let Calculator = function(val) {
    this.total = val;
}
Calculator.prototype = {

    add: function(newVal) {
        this.total += newVal;
    },
    subtract: function(newVal) {
        this.total -= newVal;
    },
    multiply: function(newVal) {
        this.total *= newVal;
    },
    getTotal: function() {
        return this.total;
    }
}

let ScientificCalculator = function(val) {
    Calculator.call(this, val);
    this.sin = function(newVal) {
        return Math.sin(newVal);
    }
    this.cosine = function(newVal) {
        return Math.cos(newVal);
    }
}
ScientificCalculator.prototype = Object.create(Calculator.prototype);

let calc = new ScientificCalculator(10);

// let calc = new Calculator(10);
calc.add(10);
calc.subtract(5);
calc.multiply(20);
console.log(calc.getTotal());
console.log(calc.sin(45));
console.log(calc instanceof Calculator);