export default function BaseballGame() {
  this.getRandomNumber = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let pickedNumbers = [];
    for (let i = 0; i < 3; i++) {
      let picked;
      if (i == 0) {
        picked = numbers.splice(Math.floor(Math.random() * 9), 1)[0];
        pickedNumbers.push(picked);
      } else {
        picked = numbers.splice(Math.floor(Math.random() * (10 - i)), 1)[0];
        pickedNumbers.push(picked);
      }
    }
    return pickedNumbers;
  };

  this.play = (computerInputNumbers, userInputNumbers) => {
    return '결과 값 String';
  };
}

new BaseballGame();
