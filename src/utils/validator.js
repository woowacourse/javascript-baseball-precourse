export default class Validator {
  static isNumber(value) {
    const valueToNumber = Number(value);
    return !Number.isNaN(valueToNumber);
  }

  static isDuplicated(value) {
    return new Set(value).size !== value.length;
  }

  static isLengthCorrect(value, length) {
    return value.length === length;
  }

  static hasZero(value) {
    const NOT_EXIST = -1;
    const indexOfZero = value.indexOf('0');

    if (indexOfZero === NOT_EXIST) {
      return false;
    }

    return true;
  }
}
