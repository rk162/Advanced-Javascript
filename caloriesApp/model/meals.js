import Observer from "../observer/listenernotify";

class Meals {
    constructor(item, calorie, totalCalorie) {
        this.item = item;
        this.calorie = calorie;
        this.totalCalorie = 0;
        this.itemAdded = new Observer();
        this.itemEditable = new Observer();
        this.itemUpdated = new Observer();
        this.itemDeleted = new Observer();
        this.clearAll = new Observer();
    }
    add(item, calorie, totalCalorie) {
        this.item = item;
        this.calorie = parseInt(calorie);
        this.totalCalorie += this.calorie;
        this.itemAdded.notify(this.item, this.calorie, this.totalCalorie);
    }
    update(newItem, newCalorie, newTotal) {
        this.newItem = newItem;
        this.newTotal = this.totalCalorie;
        this.newCalorie = parseInt(newCalorie);
        this.newTotal = parseInt(this.totalCalorie) - parseInt(this.calorie) + this.newCalorie;
        this.itemUpdated.notify(this.newItem, this.newCalorie, this.newTotal);
    }
    delete(item, calorie, totalCalorie) {


        this.totalCalorie = parseInt(this.totalCalorie) - parseInt(this.calorie);
        this.itemDeleted.notify(this.item, this.calorie, this.totalCalorie);
    }

}
export default new Meals();