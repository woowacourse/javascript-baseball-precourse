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

function countStrikeAndBall(computerInputNumbers, userInputNumbers) {
  const computerNumberArray = String(computerInputNumbers).split("");
  const userNumberArray = String(userInputNumbers).split("");
  let strike = 0;
  let ball = 0;

  userNumberArray.forEach(x => {
    if (computerNumberArray.indexOf(x) > -1) {
      if (computerNumberArray.indexOf(x) === userNumberArray.indexOf(x)) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  })

  return {strike, ball}
}

function getResult(strike, ball) {
  let retString = "";

  if (strike === 3) {
    retString = "승리했습니다.";
  } else if (strike || ball) {
    retString = `${ball ? ball+"볼" : ""}${ball && strike ? " " : ""}${strike ? strike+"스트라이크" : ""}`
  } else {
    retString = "낫싱";
  }

  return retString;
}

function getUserInput() {
  return document.getElementById("user-input").value;
}

function showResult(string) {
  document.getElementById("result").innerText = string;
}

new BaseballGame();
