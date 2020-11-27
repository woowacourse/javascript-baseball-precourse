export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    return "결과 값 String";
  };
}
const baseballGame = new BaseballGame();

const computerInputNumbers = 123;
let userInputNumbers = 0;

// 사용자 input 받기
const btnInput = document.getElementById("submit");

btnInput.onclick = function () {
  userInputNumbers = document.getElementById("user-input").value;
  baseballGame.play(computerInputNumbers, Number(userInputNumbers));
};
