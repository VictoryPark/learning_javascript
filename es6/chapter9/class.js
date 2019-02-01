//클래스 만드는 간편한 문법
// class Car {
//   constructor(make, model){
//     this.make = make;
//     this.model = model;
//     this.userGears = ['P', 'N', 'R', 'D'];
//     this.userGear = this.userGears[0];
//     this._userGears = ['P', 'N', 'R', 'D'];
//     this._userGear = this._userGears[0];
//   }
//   get userGear() {return this._userGear;}
//   set userGear(value){
//     if(this._userGears.indexOf(value) < 0)
//       throw new Error(`Invalid gear: ${value}`);
//     this._userGear = value;
//   }
//   shift(gear) {
//     // if(this.userGears.indexOf(gear) < 0)
//     //   throw new Error(`Invalid gear: ${gear}`);
//     this.userGear = gear;
//   }
// }

//인스턴스 만드는 문법
// const car1 = new Car();
// const car2 = new Car();

// //객체가 클래스의 인스턴스 인지 확인..
// console.log(car1 instanceof Car);
// console.log(car1 instanceof Array);

// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");
// car1.shift('D');
// car2.shift('R');

// console.log(car1.userGear);
// console.log(car2.userGear);

const Car = (function() {

  const carProps = new WeakMap();

  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ['P', 'N', 'R', 'D'];
      carProps.set(this, {userGear: this._userGears[0]});
    } //생성자

    get userGear() { return carProps.get(this).userGear};
    set userGear(value) {
      if(this._userGears.indexOf(value) < 0)
        throw new Error(`Invalid gear: ${value}`);
      carProps.get(this).userGear = value;
    }

    shift(gear) {this.userGear = gear;}

  } //Car

  return Car;
})();

const car1 = new Car();
console.log(car1.userGear);
console.log(car1.shift('R'));
console.log(car1.userGear);

car1.shift('X');    //에러 발생..Invalid gear: 'X'
car1.userGear = 'X'; //에러 발생..Invalid gear: 'X'

//ES5 에서는 원래 클래스는 함수로 선언되었음..
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//     this._userGears = ['P', 'N', 'R', 'D'];
//     this._userGear = this._userGears[0];
// }

class Es6Car {}
function Es5Car() {};

console.log(typeof Es6Car);   //function
console.log(typeof Es5Car);   //function