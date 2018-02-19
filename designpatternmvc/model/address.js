import Observer from "../observer/listenernotify";

class Address {
    constructor(address1, address2) {
        this.address1 = address1;
        this.address2 = address2;
        this.addresscopied = new Observer();

    }
    copy(address1, address2) {
        this.addresscopied.notify(address1, address2);
    }

}
export default new Address();