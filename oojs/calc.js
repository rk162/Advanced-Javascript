var calc = function(x, y, oper) {
    switch (oper) {
        case "+":
            return x + y;
            break;
        case "-":
            return x - y;
        case "*":
            break;
            return x * y;
            break;
        default:
        case "/":
            return x / y;
    }
}
console.log(calc(30, 20, "+"));