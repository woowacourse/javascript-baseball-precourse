export const DIGITS = 3;

export default class Util {
  isValidNumbers(numbers) {
    if (numbers.length !== 3) {
      return false;
    } else if (!this.checkNumbers(numbers)) {
      return false;
    } else if (this.checkOverlap(numbers)) {
      return false;
    } else {
      return true;
    }
  }

  checkNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (!(numbers[i] >= "1" && numbers[i] <= "9")) {
        return false;
      }
    }
    return true;
  }

  checkOverlap(numbers) {
    let number;
    let hash = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    if (typeof numbers === "string") {
      numbers = parseInt(numbers);
    }
    while (numbers != 0) {
      number = numbers % 10;
      hash[number]++;
      numbers = Math.floor(numbers / 10);
    }
    for (let i = 0; i < hash.length - 1; i++) {
      if (hash[i] > 1) {
        return true;
      }
    }
    return false;
  }
}
