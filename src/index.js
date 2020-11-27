import { NUMBER_LIST, START_INDEX_ZERO, NUMBER_DIGIT } from "./constants.js";

export default function BaseballGame() {
  
  const init = function() {
    const computerInputNumbers = getRandomNumberList();
    const submitButton = document.querySelector("#submit");

    submitButton.addEventListener("click", getUserInput);
  };

  const getRandomNumberList = function() {
    let tmpNumbers = NUMBER_LIST;
    
    tmpNumbers.sort(function() {
      return Math.random() - Math.random();
    });
    return tmpNumbers.slice(START_INDEX_ZERO, NUMBER_DIGIT);
  };

  const getUserInput = function() {
    const userInput = document.querySelector("#user-input").value;

    console.log(userInput);
  }

  // const play = function (computerInputNumbers, userInputNumbers) {
  //   return "결과 값 String";
  // };

  init();
}

BaseballGame();