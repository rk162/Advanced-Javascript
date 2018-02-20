import Observer from "../observer/listenernotify";

class Meals {
    constructor(item, calorie, totalCalorie) {
        this.item = item;
        this.calorie = parseInt(calorie);
        // this.totalCalorie = 0;
        this.itemAdded = new Observer();
        this.itemEditable = new Observer();
        this.itemUpdated = new Observer();
        this.itemDeleted = new Observer();
        this.clearAll = new Observer();
    }
    add(item, calorie, totalCalorie) {
        // this.totalCalorie += parseInt(this.calorie);
        this.itemAdded.notify(this.item, this.calorie, this.totalCalorie);
    }
}
export default new Meals();