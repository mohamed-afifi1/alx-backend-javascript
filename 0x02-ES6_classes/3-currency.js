export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError;
    } else {
      this._name = name;
    }
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError;
    } else {
      this._code = code;
    }
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
