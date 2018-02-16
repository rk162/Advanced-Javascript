import Model from "../model/city";
import Controller from "../presenter/cityPresenter";

export default class View {
    constructor(elements){
        this.elements=elements;
        this.address= Address;
       this.controller=new Controller();
    }

    initialize(){
        this.address.city.attach((city)=>{
            this.render(city)
        })
        this.address.street.attach((street)=>{
            this.render(street)
        })
        var checkbox= this.elements.querySelector('#checkbox');
        this.elements.checkbox.addEventListener('change',()=>{
            if(this.checked){
                 this.newcity= this.city;
                 this.newstreet= this.street;
                 this.controller.copy(newcity,newstreet);
            }
    
        })      
    }
    render(newcity,newstreet){
        this.elements.newaddress.innerHTML='';
        for(let address of newaddress){
            this.elements.newaddress.appendChild(new Address(city,street))
        }
    }   
}         

