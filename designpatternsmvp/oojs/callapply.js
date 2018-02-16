let myFunc = function(first, last = "xyz") {
    this.first = first;
    this.last = last;
    console.log(this.first + " " + this.last)
}

let employee = {};
myFunc.call(employee);

// myFunc('abcd')