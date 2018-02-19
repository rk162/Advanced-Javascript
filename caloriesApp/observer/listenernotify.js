export default class Observer {
    constructor(observers) {
        this.observers = [];
    }

    attach(cb) {
        this.observers.push(cb);
    }
    notify(newaddress1, newaddress2) {

        this.observers.forEach((cb) => {
            cb(newaddress1, newaddress2);
        });
    }
}