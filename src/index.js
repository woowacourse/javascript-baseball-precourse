import HandleInit from './handleInit.js';
import HandleInput from './handleInput.js';
import HandleResult from './handleResult.js';

export default function BaseballGame() {
  document.body.style.fontFamily = 'Arial';
  const IS_VALID = 1;
  const IS_NOT_VALID = 0;
  const _resultArea = document.querySelector('#result');
  const _button = document.querySelector("#submit");
  const _input = document.querySelector("#user-input");
  const _privateInitUtils = new HandleInit();
  let _answer = _privateInitUtils.InitGame(_resultArea, _input);

  _button.addEventListener('click', () => {
    PlayIfValid();
  })

  _input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13)
      PlayIfValid();
  })

  const PlayIfValid = () => {
    const InputUtils = new HandleInput();
    let userValue = InputUtils.GetInput(_input);

    if (userValue !== IS_NOT_VALID) {
      let resultMessage = this.play(_answer, userValue);
      DisplayResult(resultMessage);
    }
  }

	this.play = function (computerInputNumbers, userInputNumbers) {
    let [ball, strike] = CountBallStrike(computerInputNumbers, userInputNumbers);
    let resultMessage = '';
  
	  if (ball !== 0)
		  resultMessage += `${ball}볼`;
  
    if (strike !== 0 && ball !== 0)
      resultMessage += ' ';

    if (strike !== 0)
      resultMessage += `${strike}스트라이크`;
  
	  if (ball === 0 && strike === 0)
		  resultMessage = '낫싱';
  
	  if (strike === 3)
		  resultMessage = 'success';
  
	  return resultMessage;
  }

	const CountBallStrike = (answer, userValue) => {
	  let ball = 0;
	  let strike = 0;

	  for (let i = 0; i <= 2; i++) {
		  if (answer[i] === parseInt(userValue[i]))
		    strike++;
		  else if (userValue.indexOf(answer[i]) !== -1)
		    ball++;
    }

	  return [ball, strike];
	}

	const DisplayResult = (resultMessage) => {
    const ResultUtils = new HandleResult();

    if (resultMessage === 'success')
      _answer = ResultUtils.IsCorrect(_resultArea, _input);
    else
      ResultUtils.IsWrong(_resultArea, resultMessage);
  }
}
 
new BaseballGame();