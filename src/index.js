import { NUMBER_LIST, START_INDEX_ZERO, NUMBER_DIGIT, STRIKE_INDEX, BALL_INDEX, ERROR_STRING, ANSWER_STRING, NOTHING_STRING} from "./constants.js";

export default function BaseballGame() {
  
  // const init = function() {
  //   const computerInputNumbers = getRandomNumberList();
  //   const submitButton = document.querySelector("#submit");

  //   submitButton.addEventListener("click", handleSubmitButton);
  // };

  const handleSubmitButton = function() {
    const userInputNumbers = getUserInputNumberList();

    if (userInputNumbers !== undefined) {
      resultElement.innerHTML = play(computerInputNumbers, userInputNumbers);
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
    const userInputList = document.querySelector('#user-input').value.split('');
    let userInputNumbers = [];

    if (isNotValid(userInputList)) {
      alert(ERROR_STRING);
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
    let resultString = '';
    let ballStrikeList = [0, 0];

    //
    console.log(computerInputNumbers);
    console.log(userInputNumbers);

    let i;
    for (i = 0; i < userInputNumbers.length; i++) {
      if (userInputNumbers[i] === computerInputNumbers[i]) {
        ballStrikeList[STRIKE_INDEX] += 1;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ballStrikeList[BALL_INDEX] += 1;
      }
    }

    if (ballStrikeList[BALL_INDEX] === 0) {
      if (ballStrikeList[STRIKE_INDEX] === 0) {
        resultString = NOTHING_STRING;
      } else if (ballStrikeList[STRIKE_INDEX] === 3) {
        resultString = ANSWER_STRING;
          
      } else {
        resultString = `${ballStrikeList[STRIKE_INDEX]}스트라이크`;
      }
    } else {
      resultString = `${ballStrikeList[BALL_INDEX]}볼`;
      if (ballStrikeList[STRIKE_INDEX] !== 0) {
        resultString += ` ${ballStrikeList[STRIKE_INDEX]}스트라이크`;  
      }
    }

    return resultString;
  };

  // init();
  const computerInputNumbers = getRandomNumberList();
  const submitButton = document.querySelector("#submit");
  const resultElement = document.querySelector("#result");

  submitButton.addEventListener("click", handleSubmitButton);
}

BaseballGame();