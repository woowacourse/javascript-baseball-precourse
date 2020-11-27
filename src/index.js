import { NUMBER_LIST, START_INDEX_ZERO, NUMBER_DIGIT } from "./constants.js";

export default function BaseballGame() {
  
  const init = function() {
    const computerInputNumbers = getRandomNumbersList();

    // console.log(computerInputNumbers);
  };

  const getRandomNumbersList = function() {
    let tmpNumbers = NUMBER_LIST;
    
    tmpNumbers.sort(function() {
      return Math.random() - Math.random();
    });

    return tmpNumbers.slice(START_INDEX_ZERO, NUMBER_DIGIT);
  };

  // const play = function (computerInputNumbers, userInputNumbers) {
  //   return "결과 값 String";
  // };

  init();
}

BaseballGame();