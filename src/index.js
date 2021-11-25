export default class BaseballGame {
  generateRandomNumbers() {
    let answer = [];
    while (answer.length < NUMBER_LENGTH) {
      this.addRandomNum();
    }
    return answer.join("");
  }
  addRandomNum() {
    const randomNum = String(MissionUtils.Random.pickNumberInRange(1, 9));
    if (answer.length === 0 || !answer.includes(randomNum)) {
      answer.push(randomNum);
    }
  }
}

const game = new BaseballGame();

console.log(game.getRandomNumber());
