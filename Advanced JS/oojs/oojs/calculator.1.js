let Calculator = function(val) {
    let total = val;
    let add = function(newVal) {
        total += newVal;
    }
    let subtract = function(newVal) {
        total -= newVal;
    }
    let multiply = function(newVal) {
        total *= newVal;
    }
    let getTotal = function() {
        return total;
    }

    // Closures to expose private 
    // as public interfaces
    // ES2015 Objext literal extensions
    return {
        add,
        subtract,
        multiply,
        getTotal
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
ScientificCalculator.prototype = Calculator.prototype;

let calc = new ScientificCalculator(10);

// let calc = new Calculator(10);
calc.add(10);
calc.subtract(5);
calc.multiply(20);
console.log(calc.getTotal());
console.log(calc.sin(45));
console.log(calc instanceof Calculator);