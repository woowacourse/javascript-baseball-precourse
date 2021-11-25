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
  const getUserInputNumbers = () => {
    const userInputValue = $('#user-input').value;
  };
  const checkUserInputNumbersCount = userInputValue => {
    if (userInputValue.length !== 3) {
      alert('잘못된 값을 입력하셨습니다.');
      return true;
    }
    return false;
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };

  $('#base-ball-game-form').addEventListener('submit', e => {
    e.preventDefault();
    getUserInputNumbers();
  });
  $('#user-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      getUserInputNumbers();
    }
  });
}
