import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  set floors(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = val;
  }

  // Override method required by parent class Building
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
