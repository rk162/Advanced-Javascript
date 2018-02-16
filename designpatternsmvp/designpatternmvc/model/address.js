import Observer from "../observer/listenernotify";

export default class Address {
    constructor(city,street) {
        this.city= city;
        this.street= street;
        this.addressSame=new Observer();
    }
    copy(newcity,newstreet){
    this.city=newcity;
    this.street=newstreet;
}
}

// export default new Model();