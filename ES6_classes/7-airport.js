export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
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

  // Override default string representation
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
