import Address from "../model/address";

export default class Controller{
    constructor(address) {
        this.address= Address;
    }
    copy(city,street){
        this.newaddress=this.address;
    }
   
}