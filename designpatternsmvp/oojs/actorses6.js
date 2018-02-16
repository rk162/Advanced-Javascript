class Actor {
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

let shahrukhkhan = new Actor(52, 173, "ShahrukhKhan");
shahrukhkhan.act();
shahrukhkhan.dance();