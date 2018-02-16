export default class Observer {
    constructor(observers) {
        this.observers=[];
    }

    attach(cb) {
        debugger;
        this.observers.push(cb);
    }
    notify(newCity) {
        debugger;
       this.observers.forEach((cb)=>{
           cb(newCity);
       })
    
    }
}