export default class BaseballGame {
    constructor() {
      this.computerNumbers = this.genRandomNumbers();
    }

    // 랜덤한 3자리 숫자 생성 메서드
    genRandomNumbers() {
      return MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3); 
    }
}