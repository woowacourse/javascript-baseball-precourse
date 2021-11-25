import getComputerInputNumbers from './game/getComputerInputNumbers.js';
import getUserInputNumbers from './game/getUserInputNumbers.js';

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers);
    return '결과 값 String';
  }
}

function main() {
  const baseballGame = new BaseballGame();
  const computerInputNumbers = getComputerInputNumbers();
  baseballGame.play(computerInputNumbers);
  getUserInputNumbers();
}

main();
