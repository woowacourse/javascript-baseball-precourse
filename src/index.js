export default class BaseballGame {
  constructor() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(
      '',
    );
    this.userInputEl = document.querySelector('#user-input');
    this.submitButtonEl = document.querySelector('#submit');
    this.submitButtonEl.addEventListener('click', this.isUserInputCheck);
  }

  isNotUserInputDuplicate = () => {
    const userInputSet = new Set(this.userInputEl.value.split(''));
    if ([...userInputSet].length !== this.userInputEl.value.length)
      return false;
    return true;
  };

  isUserInputNumberRange = () => {
    for (let i = 0; i < this.userInputEl.value.length; i += 1)
      if (this.userInputEl.value[i] < '1' || this.userInputEl.value[i] > '9')
        return false;
    return true;
  };

  isUserInputNumberLength = () => {
    if (this.userInputEl.value.length === 3) return true;
    return false;
  };

  isUserInputCheck = () => {
    return (
      this.isNotUserInputDuplicate() &&
      this.isUserInputNumberRange() &&
      this.isUserInputNumberLength()
    );
  };

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}
