import { NUMBER_LIST, START_INDEX_ZERO, NUMBER_DIGIT, ERROR_MESSAGE, STRIKE_INDEX, BALL_INDEX } from "./constants.js";

export default function BaseballGame() {
  
  // const init = function() {
  //   const computerInputNumbers = getRandomNumberList();
  //   const submitButton = document.querySelector("#submit");

  //   submitButton.addEventListener("click", handleSubmitButton);
  // };

  const handleSubmitButton = function() {
    const userInputNumbers = getUserInputNumberList();

    if (userInputNumbers !== undefined) {
      play(computerInputNumbers, userInputNumbers);
    }
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
    let strikeBallList = [0, 0];

    //
    console.log(computerInputNumbers);
    console.log(userInputNumbers);

    // calculate strike, ball
    let i;
    for (i = 0; i < userInputNumbers.length; i++) {
      if (userInputNumbers[i] === computerInputNumbers[i]) {
        strikeBallList[STRIKE_INDEX] += 1;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        strikeBallList[BALL_INDEX] += 1;
      }
    }
    
    //
    console.log(`strike = ${strikeBallList[0]}, ball = ${strikeBallList[1]}`);

    return "결과 값 String";
  };

  // init();
  const computerInputNumbers = getRandomNumberList();
  const submitButton = document.querySelector("#submit");

  submitButton.addEventListener("click", handleSubmitButton);
}

BaseballGame();