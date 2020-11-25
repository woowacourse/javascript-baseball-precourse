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
}
  



new BaseballGame();
