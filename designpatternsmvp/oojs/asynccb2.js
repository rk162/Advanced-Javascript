let myFunc = function(msg) {

    for (let i = 0; i < 10; i++) {
        setTimeout(function(msg) { console.log(i + " " + msg) }
            .bind(this, msg), 1000)
    }
}
myFunc("Hello1");
console.log('I am executed First');