// iife
let instance= null;
let Singleton = class Singleton {
      constructor() {

        // throw new Error('Cannot Construct Object')

        if(!instance){
            instance=this;
        }
        return instance;

      }

      static getData() {
          return new Date();
      }

    };

    module.exports = new Singleton()

    let inst1= new Singleton();
    let inst2= new Singleton();
    console.log(inst1===inst2)
    console.log(Singleton.getData())

   // console.log(Singleton.getData());
   // new Singleton();