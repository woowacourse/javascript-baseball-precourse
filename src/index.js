export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  const makeOnAnswer = () => {
    const ALL_NUMBERS = 9;
    const numberArray = Array(ALL_NUMBERS)
      .fill()
      .map((v, i) => i + 1);
    let answer = "";

    for (let i = 1; i <= 3; i++) {
      const selectedNumber = numberArray.splice(
        selectRandomNumber(numberArray.length),
        1
      );
      answer += selectedNumber;
    }
    console.log(answer);
    return answer;
  };

  const selectRandomNumber = (length) => {
    const randomNumber = Math.floor(Math.random() * length);

    return randomNumber;
  };
}

new BaseballGame();
