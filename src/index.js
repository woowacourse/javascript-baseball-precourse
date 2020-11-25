export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    let _resultArea = document.querySelector('#result');
    
    let [ball, strike] = CountBallStrike(computerInputNumbers, userInputNumbers);

    return resultMessage;
  };

  let _resultArea = document.querySelector('#result');
  StartGame();
}
 
function StartGame() {
  if (_resultArea.value !== '')
    _resultArea.value = '';
  
  let answer = [];
  let candidate = [];
  for (let i = 1; i <= 9; i++)
    candidate.push(i);
  for (let i = 0; i <= 2; i++) {
    let picked = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    answer.push(picked);
  }
  play(answer, GetInput());
}

function GetInput() {
  let button = document.querySelector("#submit");
  button.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.querySelector("#user-input");
    let user_value = input.value;
    if (CheckInputValidity(user_value))
      alert("1~9까지의 중복되지 않는 세자리 숫자를 입력해주세요");
    input.value = '';
  })
  return (user_value);
}

function CheckInputValidity(number) {
  if (number.indexOf("0") !== -1)
    return 1;
  if (number.length !== 3)
    return 1;
  
  for (let i = 0; i <= 2; i++) {
    if (!(number[i] >= 1 && number[i] <= 9))
      return 1;
    if (number.split(number[i]).length - 1 !== 1)
      return 1
  }
}

function CountBallStrike(answer, user_value) {
  let ball = 0;
  let strike = 0;
  for (let i = 0; i <= 2; i++) {
    if (answer[i] === user_value[i])
      strike++;
    else if (user_value.indexOf(answer[i]) !== -1)
      ball++;
  }
  return [ball, strike];
}

new BaseballGame();
