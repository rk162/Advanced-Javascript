let myFunc = function(x, y, cb) {
    setTimeout(() => {
        cb(x + y);
    }, 1000)

}
myFunc(10, 20, (result) => console.log(result));