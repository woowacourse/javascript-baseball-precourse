import { NUMBER_LIST, START_INDEX_ZERO, NUMBER_DIGIT } from "./constants.js";

export default function BaseballGame() {
  
  const init = function() {
    const computerInputNumbers = getRandomNumberList();
    const submitButton = document.querySelector("#submit");

    submitButton.addEventListener("click", getUserInputNumberList);
    // console.log(computerInputNumbers);
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
      alert("잘못된 입력입니다.\n1~9까지의 수를 중복없이 3개 작성해주세요.");
    } else {
      userInputNumbers = userInputList.map(x => +x);
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

  // const play = function (computerInputNumbers, userInputNumbers) {
  //   return "결과 값 String";
  // };

  init();
}

BaseballGame();