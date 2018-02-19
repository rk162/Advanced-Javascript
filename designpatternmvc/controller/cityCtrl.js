import Address from "../model/address";

export default class Controller {
    constructor() {
        this.address = Address;
    }
    copy(address1, address2) {
        this.address.copy(address1, address2);
    }
}