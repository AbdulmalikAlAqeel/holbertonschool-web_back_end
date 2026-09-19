export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  // Getter & Setter for length
  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  // Getter & Setter for students
  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) {
      throw new TypeError('Students must be an array');
    }
    this._students = val;
  }
}
