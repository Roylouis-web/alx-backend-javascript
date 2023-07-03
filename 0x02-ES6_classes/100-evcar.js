<<<<<<< HEAD
import Car from "./10-car";
=======
import Car from './10-car';
/* eslint  class-methods-use-this: ['error', { 'exceptMethods': ['cloneCar'] }] */
>>>>>>> 2621c2a207c87303a2e349bbc31ff970fd920eec

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

<<<<<<< HEAD
  static cloneCar() {
=======
  cloneCar() {
>>>>>>> 2621c2a207c87303a2e349bbc31ff970fd920eec
    return new Car();
  }
}
