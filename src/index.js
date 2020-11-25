export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return printGameResult(computerInputNumbers, userInputNumbers);
  }
}

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 9 + 1);

  return randomNumber;
};

const getComputerInputNumbers = () => {
  const PITCH_COUNT = 3;
  let computerInputNumbers = [];
  let pitch = 0;
  let randomNumber;

  while (pitch < PITCH_COUNT) {
    randomNumber = getRandomNumber();
    if (!computerInputNumbers.includes(randomNumber)) {
      computerInputNumbers.push(randomNumber);
      pitch++;
    }
  }

  return computerInputNumbers;
};

new BaseballGame();
