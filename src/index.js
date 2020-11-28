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

  checkInput(userInputNumbers) {
    let ret = true;
    if (ret && userInputNumbers.match(/^[1-9]{3}$/) === null) {
      ret = false;
    }
    if (ret && (
      userInputNumbers[0] === userInputNumbers[1]
      || userInputNumbers[0] === userInputNumbers[2]
      || userInputNumbers[1] === userInputNumbers[2]
    )) {
      ret = false;
    }
    if (!ret) {
      alert("1~9까지의 수를 중복없이 3개를 작성해주세요.");
    }
    return ret;
  }
}

new BaseballGame();
