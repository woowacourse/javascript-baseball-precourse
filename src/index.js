export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min + 1) + min);
}

function setAnswer() {
  let answer = [];

  while (answer.length < 3) {
    let num = getRandomInt(1, 9);
    
    if (answer.indexOf(num) > -1) {
      continue;
    } else {
      answer.push(num);
    }
  }
  return answer;
}

function isValidNumber(userInput) {
  return /[1-9]{3}/.test(userInput)
}

function isDuplicated(userInput) {
  const num = userInput.split("");
  const isDup = num.some(function(x) {
    return num.indexOf(x) !== num.lastIndexOf(x);
  });

  return isDup;
}

function checkUserInput(userInput) {
  return (isValidNumber(userInput) && !isDuplicated(userInput));
}

new BaseballGame();
