export {}
class Car {
  wheels: number;
  constructor(wheels: number){
    this.wheels = wheels;
  }

  getWheels(): number {
    return this.wheels;
  }
}

const age: number = 24;
const flag: boolean = true;
let neighboorCar: Car;
neighboorCar = new Car(4);
console.log(age, flag);
console.log('number of wheels', neighboorCar.getWheels());
let paragraph: string = `Ad eu eiusmod nulla exercitation dolor veniam do mollit id ipsum qui id ad veniam.`;
console.log('lorem', paragraph);
