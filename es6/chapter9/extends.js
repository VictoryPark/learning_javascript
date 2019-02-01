class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created");
  }
  addPassenger(p) {
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

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);

const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron")
console.log(c.passengers);

//console.log(v.deployAirbags()); //error
c.deployAirbags(); //BWOOSH!    //console.log() 로 찍으면 return이 없어서 undefined 뜬다..