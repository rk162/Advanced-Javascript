import Observer from "../observer/listenernotify";

class Meals{
    constructor(item,calorie){
        this.item=item;
        this.calorie=calorie;
        this.calorieTotal=0;
        this.total=new Observer();
        this.itemAdded=new Observer();
        this.itemEditable=new Observer();
        this.itemUpdated=new Observer();
        this.itemDeleted= new Observer();
        this.clearAll=new Observer();
    }
    add(calorie,calorieTotal){
         this.calorieTotal+=parseInt(this.calorie);
         this.total.notify(this.calorieTotal);
    }
}