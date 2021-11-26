export default class GetUserInputNumbers {
  constructor($userInput) {
    this.userInputs = $userInput.value;
    this.userInputNumbers = [];
  }

  isNotDuplicate() {
    // userInput이 중복되는 숫자가 있는지 체크
    for (let i = 0; i < this.userInputs.length; i += 1) {
      const userInput = this.userInputs[i];
      if (!this.userInputNumbers.includes(userInput)) {
        this.userInputNumbers.push(userInput);
      }
    }
  }

  isRightNumber() {
    // userInput이 1~9 사이 숫자인지 체크
    for (let i = 0; i < this.userInputs.length; i += 1) {
      const userInput = this.userInputs[i];
      const userInputAsciiCodeNumber = userInput.charCodeAt();
      if (userInputAsciiCodeNumber <= 48 || userInputAsciiCodeNumber > 57) {
        return false;
      }
    }
    return true;
  }

  isRightLength() {
    // userInput.length 체크
    if (this.userInputs.length !== 3) {
      return false;
    }
    return true;
  }

  checkTheRightUserInput() {
    if (!this.isRightLength() || !this.isRightNumber()) {
      return false;
    }

    this.isNotDuplicate();
    if (this.userInputNumbers.length !== 3) {
      return false;
    }
    return true;
  }

  main() {
    if (!this.checkTheRightUserInput()) {
      return '공백 없이 중복되지 않는 숫자 3개를 입력해주세요!';
    }

    return this.userInputNumbers.map((string) => Number(string));
  }
}
