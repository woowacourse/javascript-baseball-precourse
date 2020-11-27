export default function BaseballGame() {
	this.play = function (computerInputNumbers, userInputNumbers) {
    let [ball, strike] = CountBallStrike(computerInputNumbers, userInputNumbers);
    let resultMessage = '';
  
	  if (ball !== 0)
		  resultMessage += `${ball}볼`;
  
    if (strike !== 0 && ball !== 0)
      resultMessage += '';

    if (strike !== 0)
      resultMessage += `${strike}스트라이크`;
  
	  if (ball === 0 && strike === 0)
		  resultMessage = '낫싱';
  
	  if (strike === 3)
		  resultMessage = 1;
  
	  return resultMessage;
  }

  document.body.style.fontFamily = 'Arial';
  let _resultArea = document.querySelector('#result');
  let _button = document.querySelector("#submit");
  let _answer = StartGame();
  let _input = document.querySelector("#user-input");
  _input.focus();

  _button.addEventListener('click', (e) => {
    e.preventDefault();
    let userValue = GetInput();
    _input.value = '';

    if (userValue !== 0) {
      let resultMessage = this.play(_answer, userValue);
      DisplayResult(resultMessage);
    }
  })
  
	function StartGame() {
	  let answer = [];
	  let candidate = [];
  
	  for (let i = 1; i <= 9; i++)
		candidate.push(i);
  
	  for (let i = 0; i <= 2; i++) {
		let picked = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		answer.push(picked);
    }
    
    return answer;
	}
  
  function GetInput() {
    let userValue = '';
    
    if (CheckInputValidity(_input.value) === 1) {
      alert("1~9까지의 중복되지 않는 세자리 숫자를 입력해주세요");
      return 0;
    } else
      userValue = _input.value;
    _input.focus();
    
    return userValue;
  }

	function CheckInputValidity(number) {
    let isValid = 0;
  
	  if (number.indexOf("0") !== -1)
		  isValid = 1;
	  if (number.length !== 3)
      isValid = 1;
    
	  for (let i = 0; i <= 2; i++) {
		  if (!(number[i] >= 1 && number[i] <= 9))
		    isValid = 1;
		  if (number.split(number[i]).length - 1 !== 1)
		    isValid = 1;
    }

	  return isValid;
	}
	
	function CountBallStrike(answer, userValue) {
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
  
	function DisplayResult(resultMessage) {
	  if (resultMessage == 1) {
      let restartMessage = document.createElement('span');
      let restartButton = document.createElement('button');
    
      restartMessage.textContent = '게임을 새로 시작하시겠습니까? ';
      restartButton.textContent = '게임 재시작';
      _resultArea.innerHTML = `<h3>🎉 <strong> 정답을 맞추셨습니다! </strong>🎉</h3>`;
      _resultArea.appendChild(restartMessage);
      _resultArea.appendChild(restartButton);

      restartButton.addEventListener('click', (e) => {
        e.preventDefault();
        _resultArea.innerHTML = '';
        StartGame();
		  })
	  } else
		_resultArea.textContent = resultMessage;
	}
}
  
new BaseballGame();