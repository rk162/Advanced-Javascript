import Observer from "../observer/listenernotify";

class Meals {
    constructor(item, calorie, totalCalorie,index) {
        this.item = item;
        this.calorie = calorie;
        this.totalCalorie = 0;
        this.index=index;
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
    update
}
export default new Meals();