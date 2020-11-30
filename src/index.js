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
  
  // newGame
  this.newGame = function() {
    this.computer = createRandomNumber();
    this.user = null;

    clearResultMessage();
  };

  // end
  this.end = function() {
    disableSubmitButton();

    clearResultMessage();
    printEndResult();

    this.addResetButton();
  };

  // submitButton
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', (e) => {
    this.submitButtonClickEvents(e.target);
  });

  this.submitButtonClickEvents = function() {
    this.user = getInputNumbers();

    if (isWrongValue(this.user)) {
      alert(['다시 입력하세요!']);
      return;
    }
    printPlayResult(this.play(this.computer, this.user));
    if (this.computer == this.user) this.end();
  };

  // resetButton
  this.addResetButton = function() {
    const result = document.getElementById('result');
    const resetButton = this.createResetButton();
    resetButton.addEventListener('click', (e) => {
      this.resetButtonClickEvents(e.target);
    });
    result.appendChild(resetButton);
  };

  this.createResetButton = function() {
    const resetButton = document.createElement('button');
    resetButton.type = 'button';
    resetButton.innerHTML = '게임 재시작';
    resetButton.id = 'game-restart-button';
    return resetButton;
  };

  this.resetButtonClickEvents = function() {
    submitButton.disabled = false;
    this.newGame();
  };

  // constructor
  this.newGame();
} // function BaseballGame() end

// submitButton
function getInputNumbers() {
  const userInput = document.getElementById('user-input').value;
  return userInput;
}

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

function createRandomNumber() {
  let answerCandidate;
  do {
    answerCandidate = Math.floor(Math.random() * 1000);
  } while (!isCapableNumber(splitNumbers(answerCandidate)));

  return answerCandidate;
}

function printPlayResult(message) {
  clearResultMessage();

  const result = document.getElementById('result');
  const resultMessage = document.createTextNode(message);
  result.appendChild(resultMessage);
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

// checking errors
function isCapableNumber(numArray) {
  if (numArray.length !== 3) {
    return false;
  }
  const numSet = new Set(numArray);
  return (numSet.size === numArray.length) && !numSet.has(0);
}

function isWrongValue(number) {
  if (isNaN(parseInt(number))) {
    return true;
  }
  if (!isCapableNumber(splitNumbers(number))) {
    return true;
  }
  return false;
}

new BaseballGame();