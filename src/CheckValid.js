export default class CheckValid {
  constructor(NUMBER_LENGTH) {
    this.NUMBER_LENGTH = NUMBER_LENGTH;
  }

  baseballGameInput(targetValue) {
    return (
      this.checkNumberLength(targetValue) &&
      this.checkTypeNumber(targetValue) &&
      this.checkInRange(targetValue) &&
      this.checkDuplicate(targetValue)
    );
  }

  checkNumberLength(value) {
    const isThreeLength = value.length === this.NUMBER_LENGTH;
    if (!isThreeLength) {
      alert(`3개만 입력해주세요.`);
    }
    return isThreeLength;
  }

  checkTypeNumber(value) {
    const isNumber = !isNaN(Number(value));
    if (!isNumber) {
      alert(`숫자만 입력해주세요.`);
    }
    return isNumber;
  }

  checkInRange(value) {
    const isContainZero = [...value].includes("0");
    if (isContainZero) {
      alert(`1에서 9까지의 수만 입력해주세요.`);
    }
    return !isContainZero;
  }

  checkDuplicate(value) {
    const isDuplicate = new Set([...value]).size !== this.NUMBER_LENGTH;
    if (isDuplicate) {
      alert(`중복된 수를 제거해주세요.`);
    }
    return !isDuplicate;
  }
}
