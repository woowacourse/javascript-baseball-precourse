export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }

  checkBall(computerInputNumbers, userInputNumbers) {
    let count = 0;
    if (computerInputNumbers[0] === userInputNumbers[1]) {
      count++;
    }
    if (computerInputNumbers[0] === userInputNumbers[2]) {
      count++;
    }
    if (computerInputNumbers[1] === userInputNumbers[0]) {
      count++;
    }
    if (computerInputNumbers[1] === userInputNumbers[2]) {
      count++;
    }
    if (computerInputNumbers[2] === userInputNumbers[0]) {
      count++;
    }
    if (computerInputNumbers[2] === userInputNumbers[1]) {
      count++;
    }
    return count;
  }

  checkStrike(computerInputNumbers, userInputNumbers) {
    let count = 0;
    if (computerInputNumbers[0] === userInputNumbers[0]) {
      count++;
    }
    if (computerInputNumbers[1] === userInputNumbers[1]) {
      count++;
    }
    if (computerInputNumbers[2] === userInputNumbers[2]) {
      count++;
    }
    return count;
  }
}

new BaseballGame();
