import { NUMBER_LIST, START_INDEX_ZERO, NUMBER_DIGIT } from "./constants.js";

export default function BaseballGame() {
  
  const init = function() {
    const computerInputNumbers = getRandomNumberList();
    const submitButton = document.querySelector("#submit");

    submitButton.addEventListener("click", getUserInput);
    // console.log(computerInputNumbers);
  };

  const getRandomNumberList = function() {
    let tmpNumbers = NUMBER_LIST;
    
    tmpNumbers.sort(function() {
      return Math.random() - Math.random();
    });
    return tmpNumbers.slice(START_INDEX_ZERO, NUMBER_DIGIT);
  };

  const getUserInput = function() {
    const userInputNumbers = document.querySelector("#user-input").value.split('');

    if (isNotValid(userInputNumbers)) {
      console.log(`user input uncorrect ${userInputNumbers}`);
    }
  };

  const isNotValid = function(userInputNumbers) {
    return !(isNumber(userInputNumbers) && isThreeDigit(userInputNumbers) && isNotDuplicated(userInputNumbers));
  };

  const isNumber = function(userInputNumbers) {
    let i;
    for (i = 0; i < userInputNumbers.length; i++) {
      if (!('1' <= userInputNumbers[i] && userInputNumbers[i] <= '9')) {
        return false;
      }
    }
    return true;
  };

  const isThreeDigit = function(userInputNumbers) {
    return userInputNumbers.length === NUMBER_DIGIT;
  };

  const isNotDuplicated = function(userInputNumbers) {
    const checkingSet = new Set(userInputNumbers);

    return userInputNumbers.length === checkingSet.size;
  };

  // const play = function (computerInputNumbers, userInputNumbers) {
  //   return "결과 값 String";
  // };

  init();
}

BaseballGame();