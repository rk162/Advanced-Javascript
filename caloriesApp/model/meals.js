import Observer from "../observer/listenernotify";

class Meals {
    constructor(itemName, calorieValue, calorieTotal) {
        this.itemName = itemName;
        this.calorieValue = calorieValue;
        this.calorieTotal = 0;
        this.total = new Observer();
        this.itemAdded = new Observer();
        this.itemEditable = new Observer();
        this.itemUpdated = new Observer();
        this.itemDeleted = new Observer();
        this.clearAll = new Observer();
    }
    add(itemName, calorieValue, calorieTotal) {
        this.calorieTotal.value += parseInt(this.calorieValue.value);
        this.total.notify(itemName, calorieValue, calorieTotal);
    }
}
export default new Meals();