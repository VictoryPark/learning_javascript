class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created");
  }
  addPassenger(p){
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log("Car created")
  }
  deployAirbags() {
    console.log("BWOOSH!");
  }
}

class MotorCycle extends Vehicle {}
const c = new Car();
const m = new MotorCycle();
console.log(c instanceof Car);      //true
console.log(c instanceof Vehicle);  //true
console.log(m instanceof MotorCycle);//true
console.log(m instanceof Car);  //false
console.log(m instanceof Vehicle);  //true