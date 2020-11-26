export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  this.getRandomNumber = () => {
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 9;

    return Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  };
}

new BaseballGame();
