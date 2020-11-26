export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };

  this.makeRandomNumbers = function () {
    while (true) {
      const first = Math.floor(Math.random() * 9 + 1);
      const second = Math.floor(Math.random() * 9 + 1);
      const third = Math.floor(Math.random() * 9 + 1);
      const numbers = first * 100 + second * 10 + third;
      if (this.isComposedOfDifferentNumber(numbers)) {
        console.log(numbers);
        return numbers;
      }
    }
  };

  this.isComposedOfDifferentNumber = function (numbers) {
    const first = String(numbers)[0];
    const second = String(numbers)[1];
    const third = String(numbers)[2];
    if (first !== second && second !== third && third !== first) {
      return true;
    }
    return false;
  };
}

new BaseballGame();
