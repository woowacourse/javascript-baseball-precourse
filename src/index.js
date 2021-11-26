export default function BaseballGame() {
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

  //TODO if result is 3 Strike expose replay button
  function submitButtonOn() {
    let usernumber = getUserNum();
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
}

new BaseballGame();
