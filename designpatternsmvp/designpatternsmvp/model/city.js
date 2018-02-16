import Observer from "../observer/listenernotify";

export default class Model {
    constructor() {
        this.cities= [];
        this.cityAdded=new Observer();
        this.cityRemoved=new Observer();
    }
    add(name){
    this.cities.push(name);
    debugger;
    this.cityAdded.notify(this.cities);
}
    remove(index){
    this.cities.splice(index,1);
    this.cityRemoved.notify(this.cities);
}
}

// export default new Model();