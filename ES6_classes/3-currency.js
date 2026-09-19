export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter & Setter for code
  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = val;
  }

  // Getter & Setter for name
  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  // Method to display formatted currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
