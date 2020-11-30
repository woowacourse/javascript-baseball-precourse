export default function BaseballGame() {
  // play
  this.play = function(computerInputNumbers, userInputNumbers) {
    const playResult = countBallStrike(
        splitNumbers(computerInputNumbers),
        splitNumbers(userInputNumbers)
    );
    const ball = playResult[0];
    const strike = playResult[1];

    return createBallStrikeMessage(ball, strike);
  };
  
  // end
  this.end = function() {
    disableSubmitButton();

    clearResultMessage();
    printEndResult();

    this.addResetButton();
  };

} // function BaseballGame() end

// play
function splitNumbers(numbers) {
  const numArray = new Array();

  while (numbers !== 0) {
    numArray.push(numbers % 10);
    numbers = Math.floor(numbers / 10);
  }

  numArray.reverse();
  return numArray;
}

function countBallStrike(arr1, arr2) {
  let strike = 0;
  let ball = 0;
  const mySet = new Set(arr2);
  for (let i = 0; i < 3; i++) {
    if (arr1[i] === arr2[i]) {
      strike++;
      continue;
    }
    if (mySet.has(arr1[i])) {
      ball++;
    }
  }
  return [ball, strike];
}

function createBallStrikeMessage(ball, strike) {
  if (ball === 0 && strike === 0) {
    return '낫싱';
  } else if (ball === 0) {
    return String(strike) + '스트라이크';
  } else if (strike === 0) {
    return String(ball) + '볼';
  } else {
    return String(ball) + '볼 ' + String(strike) + '스트라이크';
  }
}

// end
function printEndResult() {
  const result = document.getElementById('result');
  const boldMessage = document.createElement('strong');
  boldMessage.append('🎉정답을 맞추셨습니다!🎉');
  result.appendChild(boldMessage);
  result.appendChild(document.createElement('br'));
  result.append('게임을 새로 시작하시겠습니까? ');
}

function disableSubmitButton() {
  const submitButton = document.getElementById('submit');
  submitButton.disabled = 'disabled';
}

function clearResultMessage() {
  const result = document.getElementById('result');
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

new BaseballGame();