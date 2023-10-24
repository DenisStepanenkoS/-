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
    get Dimension(){
        return this.dimensions.height;    
    }
    get Age(){
        return (Date.now() - this.manafacture) / (1000 * 60 * 60 *24);
    }
    get FullInfo(){
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
    get FullInfo(){
        return String(this.brand +" "+ this.model +" "+ this.manafacture.getFullYear() + " " + this.passengerLimit);
    }

}

let Veh = new Vehicle;
let Pas = new PassengerTransport;
console.log(Veh.Dimension);
console.log("date in days: ", Veh.Age);
console.log(Veh.FullInfo);
Pas.addPassenger();
console.log(Pas.FullInfo);