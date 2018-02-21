import Meals from "../model/meals";

export default class Controller {
    constructor(model) {
        this.model = Meals;
    }
    add(item, calorie) {
        this.model.add(item, calorie);
    }
    update(item, calorie,total) {
        this.model.update(item, calorie,total);
    }
    delete(item, calorie,total) {
        this.model.delete(item, calorie,total);
    }
}