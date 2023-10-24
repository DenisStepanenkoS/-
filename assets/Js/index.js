class Vehicle{
    
    constructor(){
        this.dimensions = {
            height: 10,
            width: 10,
            length: 10
        }
        this.brand = "brand";
        this.model = "model";
        this.manafacture = new Date(2005,1,1);
    }
    get dimension(){
        return this.dimensions.height;    
    }
    get age(){
        return (Date.now() - this.manafacture) / (1000 * 60 * 60 *24);
    }
    get fullInfo(){
        return String(this.brand +" "+ this.model +" "+ this.manafacture.getFullYear());
    }
}

class PassengerTransport extends Vehicle{
    constructor(){
        super();
        this.passengerLimit = 5;
        this.passengerCount = 0;
    }
    addPassenger(){
        if(this.passengerCount <= this.passengerLimit){
            this.passengerCount++; 
            return true;
        }
        else
            return false;
    }
    get fullInfo(){
        return String(super.fullInfo + " " + this.passengerLimit);
    }

}
class FreightTransport extends Vehicle{
    constructor(){
        super();
        this.capacity = 200;
    }
    checkLoadingPossibility(weight){
        if(weight < this.capacity)
            return true
        return false;
    }
    get fullInfo(){
        return (super.fullInfo+ " " + this.capacity);
    }

}
let Veh = new Vehicle;
let Pas = new PassengerTransport;
let Fre = new FreightTransport;
console.log(Veh.dimension);
console.log("date in days: ", Veh.age);
console.log(Veh.fullInfo);
Pas.addPassenger();
console.log(Pas.fullInfo);
console.log(Fre.fullInfo);