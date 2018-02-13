let sort = function() {
    // return function() {
    console.log(this.names.sort())
        // }
        // return sorted names;
}
let asyncFunction = function() {
    this.msg = "Hello";
    // let self=this;
    this.names = ['Name4', 'Name3', 'Name1', 'Name2']
    setTimeout(() => { sort() }, 1000)
}

asyncFunction();
console.log('Hello1****')