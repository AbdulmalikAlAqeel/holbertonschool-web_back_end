export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Define static getter for Symbol.species to return current class constructor
  static get [Symbol.species]() {
    return this;
  }

  // Method to clone the current object structure without preserving parameter values
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
