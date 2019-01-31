class Car {
  static getNextVin() {
    return Car.nextVin++;
    //this.nextvin 이라고 써도 되지만 Car 라고 쓰면 static 이라는 것을 상기하게 된다.
  }
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.vin = Car.getNextVin();
  }
  static areSimilar(car1, car2) {
    return car1.make===car2.make && car1.model === car2.model;
  }
  static areSame(car1, car2) {
    return car1.vin === car2.vin;
  }
}

Car.nextVin = 0;

const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");

console.log(car1.vin);    //0
console.log(car2.vin);    //1
console.log(car3.vin);    //2

console.log(Car.areSimilar(car1, car2));  //false
console.log(Car.areSimilar(car2, car3));  //true
console.log(Car.areSame(car2, car3));   //false
console.log(Car.areSame(car2, car2));   //true

