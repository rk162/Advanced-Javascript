export default class Observer {
    constructor(observers) {
        this.observers = [];
    }

    attach(cb) {
        this.observers.push(cb);
    }
    notify(itemName, calorieValue) {

        this.observers.forEach((cb) => {
            cb(itemName, calorieValue);
        });
    }
}