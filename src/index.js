const randomNumber = makeRandomNumber();
const result = document.getElementById("result");

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    // console.log(computerInputNumbers, userInputNumbers);

    //컴퓨터, 사용자 숫자 비교
    let strike = 0;
    let ball = 0;

    for (let i = 0; i <= 2; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike += 1;
      } else if (computerInputNumbers.includes(userInputNumbers[i]) === true) {
        ball += 1;
      }
    }

    //결과창
    if (strike === 3) {
      result.innerText = "🎉 정답을 맞추셨습니다! 🎉";
      //게임 재시작 문구, 버튼 추가해야함
    } else if (strike + ball === 0) {
      result.innerText = "낫싱";
      input.focus();
    } else if ((strike >= 1) & (ball >= 1)) {
      result.innerText = `${ball}볼 ${strike}스트라이크`;
      input.focus();
    } else if ((strike === 0) & (ball >= 1)) {
      result.innerText = `${ball}볼`;
      input.focus();
    } else if ((strike >= 1) & (ball === 0)) {
      result.innerText = `${strike}스트라이크`;
      input.focus();
    }

    console.log("ball", ball, "strike", strike);
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

  let inputValue = [...input.value].map(Number);
  // console.log(inputValue);
  game.play(randomNumber, inputValue);
});
