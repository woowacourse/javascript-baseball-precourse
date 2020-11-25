export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
  GetInput();
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
  



new BaseballGame();
