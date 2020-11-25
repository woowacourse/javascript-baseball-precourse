export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

const getRandomNumber = function () {
  return Math.floor(Math.random() * Math.floor(9)) + 1;
}

new BaseballGame();