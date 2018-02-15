export default class Observer {
    constructor(observers) {
        this.observers=[];
    }

    attach(cb) {
        this.observers.push(cb);
    }
    notify(newCity) {
       this.observers.forEach((cb)=>{
           cb(newCity);
       })
    
    }
}