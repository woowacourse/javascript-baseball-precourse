export default function BaseballGame() {
  let computerInputNumbers = [];
  const $ = selector => document.querySelector(selector);
  const userInputNumbers = [];
  const MIN_NUM = 1;
  const MAX_NUM = 9;
  const NUM_COUNT = 3;

  const getComputerInputNumbers = () => {
    computerInputNumbers = [];
    while (computerInputNumbers.length !== NUM_COUNT) {
      const currentNum = MissionUtils.Random.pickNumberInRange(
        MIN_NUM,
        MAX_NUM,
      );
      if (!computerInputNumbers.includes(currentNum)) {
        computerInputNumbers.push(currentNum);
      }
    }
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}
