const printCorrectAnswerForTest = computerInputNumbers => console.log('hello world! correctAnswer is ', computerInputNumbers);

const checkValidNumber = inputs => {
  if(/[^1-9]+/g.test(inputs)) return {ok: false, msg: '1-9의 각 다른 숫자 3개를 공백 없이 입력하세요'};
  if(inputs.length !== 3) return {ok: false, msg: '숫자는 3개만 입력가능합니다.'};
  if(inputs.charAt(0) === inputs.charAt(1) || inputs.charAt(0) === inputs.charAt(2) || inputs.charAt(1) === inputs.charAt(2)) return {ok: false, msg: '같은 숫자는 여러번 올 수 없습니다.'};
  return {ok: true, msg: '올바른 입력입니다!'};
}

//function to execute baseball game
const createRandomNumber = () => {
  let randomNum = String(Math.floor(Math.random()*999 + 1));
  return checkValidNumber(randomNum).ok ? randomNum : createRandomNumber();
}

const compareAnswersAndgetResult = (computerInputNumbers, userInputNumbers) => {
  if(computerInputNumbers === userInputNumbers) return {ok: true};
  const computerInputNumbersArr = computerInputNumbers.split('');
  const userInputNumbersArr = userInputNumbers.split('');
  let strike = 0, ball = 0;

  //check answer
  for(let i=0; i<3; i++) {
    const index = computerInputNumbersArr.indexOf(userInputNumbersArr[i]);
    strike = index === i ? strike + 1 : strike;
    ball = index !== i && index !== -1 ? ball + 1 : ball;
  }

  return {
    ball,
    strike
  }
}

export default function BaseballGame() {
  const gameTurn = document.getElementById('app');
  const userInput = gameTurn.querySelector('input');
  const userInputLog = gameTurn.querySelector('#user-input');
  const userInputButton = gameTurn.querySelector('#submit');
  const resultMessage = gameTurn.querySelector('#result');

  const clearThisGameTurn = () => {
    console.log('finished');
  }

  const addRestartButtonAndAsk = () => {
    console.log('add restart button and ask');
  }

  const printMessage = message => {
    const resultMessageElement = document.createElement('p');
    resultMessageElement.innerText = message;
    resultMessage.appendChild(resultMessageElement);
  }

  const getResultOfSuccess = () => {
    const correctAnswerMessage = "🎉정답을 맞추셨습니다!🎉";
    printMessage(correctAnswerMessage);
    
    //clear all childs of this game turn
    clearThisGameTurn();

    //add restart button and ask
    addRestartButtonAndAsk();
  }

  const addAnotherInputForm = () => {
    console.log('try again!');
  }

  const getResult = result => {
    const getWrongAnswerMessage = ({strike, ball}) => (!strike && !ball) ? '낫싱' : ((ball ? `${ball}볼 ` : '') + (strike ? `${strike}스트라이크` : ''));
    if (result.ok) return getResultOfSuccess();

    const failMessage = getWrongAnswerMessage(result);
    printMessage(failMessage);

    //add another input set child of this game turn
    addAnotherInputForm();
  }

  this.play = function (computerInputNumbers, userInputNumbers) {
    const result = compareAnswersAndgetResult(computerInputNumbers, userInputNumbers);
    
    return getResult(result);
  };

  const getUserInput = computerInputNumbers => {
    userInput.addEventListener('change', e => userInputLog.textContent = e.target.value);
    userInputButton.addEventListener('click', () => checkValidNumber(userInputLog.textContent).ok ? this.play(computerInputNumbers, userInputLog.textContent) : alert(checkValidNumber(userInputLog.textContent).msg));
  }

  const startGame = () => {
    const computerInputNumbers = createRandomNumber();
    printCorrectAnswerForTest(computerInputNumbers);

    //정답이 나올때까지....
    getUserInput(computerInputNumbers);
  }
  
  startGame();
}

new BaseballGame();
