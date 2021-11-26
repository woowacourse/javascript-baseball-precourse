export default function BaseballGame() {
  const hint = document.getElementById('result');
  document.getElementById('game-restart-button').style.display = 'None';

  /* pickThreeDigitRandomNumber(); */
  function isSetLengthUnderThree(setA) {
    if (setA.size < 3) {
      return true;
    }
    return false;
  }

  function convertSetToString(setA) {
    let strArray = [];
    for (let i of setA) {
      strArray.push(i);
    }
    return strArray.join('');
  }

  function getThreeDigitRandomNumber() {
    const setA = new Set();
    while (isSetLengthUnderThree(setA)) {
      setA.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return convertSetToString(setA);
  }

  const computerInputNumbers = getThreeDigitRandomNumber();
  console.log(computerInputNumbers);

  /*get user number*/
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', submitButtonOn);

  function submitButtonOn() {
    let usernumber = getUserNum();
    const result = play(computerInputNumbers, usernumber);
    if (result !== '3스트라이크') {
      hint.innerHTML = result;
    } else {
      document.getElementById('game-restart-button').style.display = '';
    }
  }

  function getUserNum() {
    let userInput = document.getElementById('user-input').value;
    if (checkUserInputValid(userInput)) {
      return userInput;
    }
  }

  /*check usernumber condition*/
  function checkNumberConsistZero(num) {
    for (let i = 0; i < 3; i++) {
      if (num[i] == 0) {
        alert('Please Enter Number Without Zero');
        return true;
      }
    }
    return false;
  }

  function checkNumberNotNumber(num) {
    if (isNaN(num)) {
      return true;
    }
    return false;
  }

  function checkNumberlenNotThree(num) {
    if (num.length == 3) {
      return false;
    }
    alert('Please Enter Three digit Number');
    return true;
  }

  function checkDigitsInNumberDuplicated(num) {
    const DigitsInNumberSet = new Set(num);
    if (DigitsInNumberSet.size == 3) {
      return false;
    }
    alert('Please Enter Numbers without Duplication');
    return true;
  }

  function checkUserInputValid(num) {
    if (checkNumberConsistZero(num)) {
      return false;
    }
    if (checkNumberNotNumber(num)) {
      return false;
    }
    if (checkNumberlenNotThree(num)) {
      return false;
    }
    if (checkDigitsInNumberDuplicated(num)) {
      return false;
    }
    return true;
  }

  /* Calculate srike ball */
  function calculateDuplicatedNum(Number1, Number2) {
    const a = String(Number1).split('');
    const b = String(Number2).split('');
    const Intersection = a.filter(x => b.includes(x));
    return Intersection.length;
  }

  function calStrike(Number1, Number2) {
    const a = String(Number1).split('');
    const b = String(Number2).split('');
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (a[i] === b[i]) {
        count++;
      }
    }
    return count;
  }

  function calBall(Number1, Number2) {
    return (
      calculateDuplicatedNum(Number1, Number2) - calStrike(Number1, Number2)
    );
  }

  /* Print Result */
  function printBallStrike(ball, strike) {
    if (ball == 0 && strike == 0) {
      return '낫싱';
    } else if (ball !== 0 && strike == 0) {
      return `${ball}볼`;
    } else if (ball == 0 && strike !== 0) {
      return `${strike}스트라이크`;
    } else {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }

  function play(computerInputNumbers, userInputNumbers) {
    const strike = calStrike(computerInputNumbers, userInputNumbers);
    const ball = calBall(computerInputNumbers, userInputNumbers);
    return printBallStrike(ball, strike);
  }
}

new BaseballGame();
