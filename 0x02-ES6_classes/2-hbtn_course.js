export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError;
    } else {
      this._name = name;
    }
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError;
    } else {
      this._length = length;
    }
  }

  set students(students) {
    if (typeof students !== 'object') {
      throw TypeError;
    } else {
      this._students = students;
    }
  }
}
