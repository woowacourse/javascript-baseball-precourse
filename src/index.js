export default function BaseballGame() {
  const computerInputNumbers = generateComputerNumbers();

  this.play = function (userInputNumbers) {
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strikes++;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        balls++;
      }
    }

    return getResultText(balls, strikes);
  };

  function generateComputerNumbers() {
    const numbers = new Set();
    while (numbers.size < 3) {
      numbers.add(MissionUtils.Random.pickNumberInRange(1, 9).toString());
    }
    return Array.from(numbers);
  }
}