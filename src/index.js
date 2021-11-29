export default class BaseballGame{
  constructor() {
    this.gameStart();
  }
  //컴퓨터 숫자 랜덤 생성
  makeRandomNumIsDiff(numList, num) {
    let numSet = new Set(numList);
    if (numSet.has(num)) {
      return false;
    }
    return true;
  }
  makeRandomNumbers() {
    let numbers = "";
    while (numbers.length < 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.makeRandomNumIsDiff(numbers, String(num))) {
        numbers += String(num);
      }
    }
    return numbers;
  }
  gameStart() {
    let computerRandomNumber = this.makeRandomNumbers();
    console.log(computerRandomNumber);
  }
}
new BaseballGame();