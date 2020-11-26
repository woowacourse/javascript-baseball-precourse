export default class Util {
  checkOverlap(numbers, compare) {
    let number;

    while (numbers != 0) {
      number = numbers % 10;
      if (compare === number) {
        return true;
      }
      numbers = Math.floor(numbers / 10);
    }
    return false;
  }
}
