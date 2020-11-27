export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    
    return "결과 값 String";
  };
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

new BaseballGame()