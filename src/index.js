const randomNumber = makeRandomNumber();

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    return "결과 값 String";
  };
}

//랜덤 숫자 생성
function makeRandomNumber() {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomNumber = [];

  while (randomNumber.length <= 2) {
    let a = Math.floor(Math.random() * candidates.length + 1);

    if (randomNumber.indexOf(a) === -1) {
      randomNumber.push(a);
    }
  }

  return randomNumber;
}

let game = new BaseballGame();
// 버튼 클릭 시 이벤트 리스너 함수 실행
const button = document.getElementById("submit");
const input = document.getElementById("user-input");

button.addEventListener("click", function onSubmitHandler(event) {
  event.preventDefault();

  let inputValue = input.value;
  game.play(randomNumber, inputValue);
});
