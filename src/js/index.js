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
  const checkUserInputNumbersCount = userInputValue => {
    if (userInputValue.length !== 3) {
      alert('잘못된 값을 입력하셨습니다.');
      return true;
    }
    return false;
  };
  const checkUserInputNumbersContainNotNumber = userInputValue => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 3; i++) {
      if (!num.includes(parseInt(userInputValue[i]))) {
        alert('잘못된 값을 입력하셨습니다.');
        return true;
      }
    }
    return false;
  };
  const checkUserInputNumbersContainDuplicateNumbers = userInputValue => {
    const userInputValueArray = [];
    for (let i = 0; i < 3; i++) {
      if (userInputValueArray.includes(parseInt(userInputValue[i]))) {
        alert('잘못된 값을 입력하셨습니다.');
        return true;
      }
      userInputValueArray.push(parseInt(userInputValue[i]));
    }
    return false;
  };
  const getUserInputNumbers = () => {
    const userInputValue = $('#user-input').value;
    if (
      checkUserInputNumbersCount(userInputValue) ||
      checkUserInputNumbersContainNotNumber(userInputValue) ||
      checkUserInputNumbersContainDuplicateNumbers(userInputValue)
    ) {
      return;
    }
    userInputNumbers = [];
    for (let i = 0; i < 3; i++) {
      userInputNumbers.push(parseInt(userInputValue[i]));
    }
    return true;
  };
  const getStrikeAndBall = () => {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (userInputNumbers[i] === computerInputNumbers[i]) {
        strike++;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ball++;
      }
    }
    const result = [ball, strike];
    return result;
  };
  this.play = function (computerInputNumbers, userInputNumbers) {
    const ballAndStrike = getStrikeAndBall();
    return '결과 값 String';
  };

  $('#base-ball-game-form').addEventListener('submit', e => {
    e.preventDefault();
    if (getUserInputNumbers()) {
      const result = baseballGame.play(computerInputNumbers, userInputNumbers);
    }
  });

  $('#user-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && getUserInputNumbers()) {
      const result = baseballGame.play(computerInputNumbers, userInputNumbers);
    }
  });
}

let baseballGame = new BaseballGame();
