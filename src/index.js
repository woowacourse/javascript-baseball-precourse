export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  this.setTargetNumber = function () {
    const TargetNumber = [];

    while (TargetNumber.length < 3) {
      let randomNumber = Math.floor(Math.random() * 9) + 1;

      if (TargetNumber.indexOf(randomNumber) == -1) {
        TargetNumber.push(randomNumber);
      }
    }

    return TargetNumber;
  };
}

new BaseballGame();
