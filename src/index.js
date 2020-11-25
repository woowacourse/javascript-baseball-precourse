export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return printGameResult(computerInputNumbers, userInputNumbers);
  }
}

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 9 + 1);

  return randomNumber;
};

new BaseballGame();
