export default class Observer {
    constructor() {
        this.observers = [];
    }

    attach(cb) {
        this.observers.push(cb);
    }
    notify(meals) {

        this.observers.forEach((cb) => {
            cb(meals);
        });
    }
}