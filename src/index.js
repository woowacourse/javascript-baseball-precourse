export default class BaseballGame {
  constructor() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(
      '',
    );
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}
