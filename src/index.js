import { NUMBER_LIST, START_INDEX_ZERO, NUMBER_DIGIT, ERROR_MESSAGE } from "./constants.js";

export default function BaseballGame() {
  
  const init = function() {
    const submitButton = document.querySelector("#submit");

    submitButton.addEventListener("click", handleSubmitButton);
  };

  const handleSubmitButton = function() {
    const computerInputNumbers = getRandomNumberList();
    const userInputNumbers = getUserInputNumberList();

    play(computerInputNumbers, userInputNumbers);
  };

  const getRandomNumberList = function() {
    let tmpNumbers = NUMBER_LIST;
    
    tmpNumbers.sort(function() {
      return Math.random() - Math.random();
    });
    return tmpNumbers.slice(START_INDEX_ZERO, NUMBER_DIGIT);
  };

  const getUserInputNumberList = function() {
    const userInputList = document.querySelector("#user-input").value.split('');
    let userInputNumbers = [];

    if (isNotValid(userInputList)) {
      alert(ERROR_MESSAGE);
    } else {
      userInputNumbers = userInputList.map(x => +x);
      return userInputNumbers;
    }
  };

  const isNotValid = function(userInputList) {
    return !(isNumber(userInputList) && isThreeDigit(userInputList) && isNotDuplicated(userInputList));
  };

  const isNumber = function(userInputList) {
    let i;
    for (i = 0; i < userInputList.length; i++) {
      if (!('1' <= userInputList[i] && userInputList[i] <= '9')) {
        return false;
      }
    }
    return true;
  };

  const isThreeDigit = function(userInputList) {
    return userInputList.length === NUMBER_DIGIT;
  };

  const isNotDuplicated = function(userInputList) {
    const checkingSet = new Set(userInputList);

    return userInputList.length === checkingSet.size;
  };

  const play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  init();
}

BaseballGame();